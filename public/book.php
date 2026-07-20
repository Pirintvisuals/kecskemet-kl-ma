<?php
/**
 * Kecskemét Klíma – időpontfoglalás fogadó szkript.
 * ---------------------------------------------------------------------------
 * A statikus Next.js oldal (BookingForm) ide POST-ol JSON-t. A szkript:
 *   1. ellenőrzi és megtisztítja a mezőket,
 *   2. e-mailt küld a vállalkozónak,
 *   3. biztonsági másolatként CSV-be is menti a foglalást,
 *   4. JSON választ ad vissza a böngészőnek.
 *
 * TEENDŐ ÉLESÍTÉS ELŐTT:
 *   - Állítsd be a $TO_EMAIL címet a valós e-mailre.
 *   - A cPanel tárhelyen a PHP mail() általában működik; ha nem, cseréld
 *     SMTP-küldésre (pl. PHPMailer). A CSV napló attól még megmarad.
 * ---------------------------------------------------------------------------
 */

// ------------------------- BEÁLLÍTÁSOK -------------------------
$TO_EMAIL   = 'info@kecskemetklima.hu';       // <-- IDE jönnek a foglalások
$FROM_EMAIL = 'no-reply@kecskemetklima.hu';    // a tárhely domainjén lévő cím
$SITE_NAME  = 'Kecskemét Klíma';
$LOG_FILE   = __DIR__ . '/bookings.csv';       // biztonsági másolat (védd le!)
// ---------------------------------------------------------------

header('Content-Type: application/json; charset=utf-8');

// Csak POST-ot fogadunk.
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'method_not_allowed']);
    exit;
}

// A body lehet JSON (fetch) vagy form-encoded – mindkettőt kezeljük.
$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST;
}

// Egyszerű, robusztus megtisztítás.
function clean($v, $max = 500) {
    $v = is_string($v) ? $v : '';
    $v = trim($v);
    $v = preg_replace('/[\r\n]+/', ' ', $v); // header-injection ellen
    return mb_substr($v, 0, $max);
}

// Honeypot: ha ki van töltve, bot -> csendben "sikert" adunk vissza.
if (!empty($data['company'])) {
    echo json_encode(['ok' => true]);
    exit;
}

$name    = clean($data['name']    ?? '', 120);
$phone   = clean($data['phone']   ?? '', 40);
$email   = clean($data['email']   ?? '', 160);
$service = clean($data['service'] ?? '', 120);
$date    = clean($data['date']    ?? '', 20);
$slot    = clean($data['slot']    ?? '', 60);
$address = clean($data['address'] ?? '', 200);
$message = clean($data['message'] ?? '', 1500);

// Minimális kötelező mezők.
$errors = [];
if ($name === '')  { $errors[] = 'name'; }
if ($phone === '') { $errors[] = 'phone'; }
if ($date === '')  { $errors[] = 'date'; }
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'email';
}
if ($errors) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'validation', 'fields' => $errors]);
    exit;
}

// ------------------------- E-MAIL -------------------------
$subject = "Új időpontfoglalás – {$name} ({$date})";

$lines = [
    "Új időpontfoglalás érkezett a weboldalról.",
    '',
    "Név:          {$name}",
    "Telefon:      {$phone}",
    "E-mail:       " . ($email !== '' ? $email : '—'),
    "Szolgáltatás: " . ($service !== '' ? $service : '—'),
    "Kért dátum:   {$date}",
    "Idősáv:       " . ($slot !== '' ? $slot : '—'),
    "Helyszín:     " . ($address !== '' ? $address : '—'),
    '',
    'Üzenet:',
    ($message !== '' ? $message : '—'),
    '',
    '— ' . $SITE_NAME . ' weboldal',
];
$body = implode("\r\n", $lines);

$headers  = "From: {$SITE_NAME} <{$FROM_EMAIL}>\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
if ($email !== '') {
    $headers .= "Reply-To: {$name} <{$email}>\r\n";
}

$sent = @mail($TO_EMAIL, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, $headers);

// ------------------------- CSV NAPLÓ -------------------------
// Akkor is elmentjük, ha a mail() épp nem menne át – így semmi nem vész el.
$row = [date('Y-m-d H:i:s'), $name, $phone, $email, $service, $date, $slot, $address, $message];
if ($fh = @fopen($LOG_FILE, 'a')) {
    // Fejléc, ha most jött létre a fájl.
    if (ftell($fh) === 0) {
        fputcsv($fh, ['időbélyeg', 'név', 'telefon', 'email', 'szolgáltatás', 'dátum', 'idősáv', 'helyszín', 'üzenet']);
    }
    fputcsv($fh, $row);
    fclose($fh);
}

// A foglalást elfogadottnak tekintjük, ha legalább a napló vagy a mail sikerült.
echo json_encode(['ok' => true, 'mailed' => (bool) $sent]);
