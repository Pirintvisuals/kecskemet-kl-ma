"""
Normalise the hand-picked, commercial-licensed stock photos (Pexels License —
free for commercial use, no attribution required) into public/photos/.

Sources were reviewed one-by-one in scripts/stock_candidates/; only the
relevant, on-brand ones are mapped below.

Run:  python scripts/optimize_stock.py
"""
import os
from PIL import Image, ImageOps

SRC_DIR = os.path.join("scripts", "stock_candidates")
DST_DIR = os.path.join("public", "photos")
MAX_EDGE = 1600
Q = 80

# reviewed source  ->  final slug (Pexels photo id kept in source name)
MAP = {
    "pex-32588555.jpg": "stock-szereles-1",   # technician w/ gauges + gloves
    "pex-6471914.jpg":  "stock-szereles-2",   # technician kneeling, toolbox
    "pex-6471913.jpg":  "stock-beuzemeles",   # manifold gauges on split unit
    "pex-6588599.jpg":  "stock-nappali-1",    # modern living room + wall unit
    "pex-6588592.jpg":  "stock-nappali-2",    # modern living room (portrait)
    "pex-5463575.jpg":  "stock-javitas",      # outdoor unit repair
}


def process(src_name, slug):
    im = Image.open(os.path.join(SRC_DIR, src_name))
    im = ImageOps.exif_transpose(im).convert("RGB")
    w, h = im.size
    scale = min(1.0, MAX_EDGE / max(w, h))
    if scale < 1.0:
        im = im.resize((round(w * scale), round(h * scale)), Image.LANCZOS)
    dst = os.path.join(DST_DIR, slug + ".jpg")
    im.save(dst, "JPEG", quality=Q, optimize=True, progressive=True)
    print(f"{slug:20} {w}x{h} -> {im.size[0]}x{im.size[1]}  {os.path.getsize(dst)/1024:5.0f}KB")


if __name__ == "__main__":
    os.makedirs(DST_DIR, exist_ok=True)
    for src, slug in MAP.items():
        process(src, slug)
    print("done")
