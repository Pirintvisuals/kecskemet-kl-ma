"""
Pull commercial-safe stock candidates from Wikimedia Commons (reliable API,
mostly CC0/CC-BY/public-domain) into scripts/stock_candidates/ for visual
review before any are used. Prints a manifest with license info.

Run:  python scripts/fetch_stock_candidates.py
"""
import json, os, urllib.request, urllib.parse

OUT = os.path.join("scripts", "stock_candidates")
UA = {"User-Agent": "kecskemet-klima-build/1.0 (contact: site owner; educational build)"}

QUERIES = {
    "atwork":  "air conditioner installation",
    "hvac":    "HVAC technician",
    "indoor":  "split air conditioner indoor unit room",
    "outdoor": "air conditioner condenser wall",
    "service": "air conditioner maintenance cleaning",
}
PER = 6
API = "https://commons.wikimedia.org/w/api.php"


def search(q):
    params = {
        "action": "query", "format": "json", "generator": "search",
        "gsrsearch": f"filetype:bitmap {q}", "gsrnamespace": 6, "gsrlimit": 14,
        "prop": "imageinfo", "iiprop": "url|extmetadata|size",
        "iiurlwidth": 1400,
    }
    url = API + "?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=40) as r:
        return json.load(r)


def main():
    os.makedirs(OUT, exist_ok=True)
    manifest = []
    for key, q in QUERIES.items():
        try:
            data = search(q)
        except Exception as e:
            print(f"[{key}] query failed: {e}")
            continue
        pages = (data.get("query") or {}).get("pages", {})
        n = 0
        for _, p in sorted(pages.items(), key=lambda kv: kv[1].get("index", 999)):
            if n >= PER:
                break
            ii = (p.get("imageinfo") or [{}])[0]
            src = ii.get("thumburl") or ii.get("url")
            if not src:
                continue
            meta = ii.get("extmetadata", {})
            lic = (meta.get("LicenseShortName", {}) or {}).get("value", "?")
            name = f"{key}-{n}.jpg"
            try:
                req = urllib.request.Request(src, headers=UA)
                with urllib.request.urlopen(req, timeout=40) as resp:
                    blob = resp.read()
                if len(blob) < 8000:
                    continue
                with open(os.path.join(OUT, name), "wb") as f:
                    f.write(blob)
            except Exception as e:
                print(f"  skip {src[:60]}: {e}")
                continue
            manifest.append({"file": name, "license": lic,
                             "title": p.get("title", "")[:70], "source": ii.get("descriptionurl")})
            print(f"{name:14} {lic:16} {p.get('title','')[:50]}")
            n += 1
    with open(os.path.join(OUT, "manifest.json"), "w", encoding="utf-8") as f:
        json.dump(manifest, f, ensure_ascii=False, indent=2)
    print(f"\n{len(manifest)} candidates -> {OUT}")


if __name__ == "__main__":
    main()
