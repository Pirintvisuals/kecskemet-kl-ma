"""
Compact the client's real installation photos for the web:
  1. auto-orient from EXIF (phone photos are often sideways)
  2. downscale so the long edge is <= MAX_EDGE (retina-friendly, still small)
  3. re-encode as progressive JPEG, quality Q, metadata stripped

Sources live in the OneDrive working folder; outputs go to public/photos/
under clean, descriptive ASCII slugs referenced from the site code.

Run:  python scripts/optimize_photos.py
"""
import os
from PIL import Image, ImageOps

SRC_DIR = r"C:\Users\pirin\OneDrive\Melékletek\Kecskemet klíma"
DST_DIR = os.path.join("public", "photos")

MAX_EDGE = 1600  # px, long side
Q = 80           # JPEG quality

# source filename  ->  clean output slug (no extension)
MAP = {
    "aux klima.jpg":            "belteri-aux-nappali",
    "aux klima agy folott.jpg": "belteri-aux-halo",
    "aux klima kint.jpg":       "kulteri-aux-homlokzat",
    "aux klima masik oldal.jpg":"kulteri-aux-oldal",
    "polar.jpg":                "belteri-polar-fal",
    "polar bent.jpg":           "belteri-polar-nyitott",
    "Polár klima bent.jpg":"belteri-polar-nappali",
    "polar klima kint.jpg":     "kulteri-polar-tavoli",
    "Polár klima kint.jpg":"kulteri-polar-kozeli",
    "Tetős klima polar.jpg":"kulteri-polar-eresz",
}


def process(src_name: str, slug: str):
    src = os.path.join(SRC_DIR, src_name)
    im = Image.open(src)
    im = ImageOps.exif_transpose(im)  # bake in rotation, then drop EXIF
    im = im.convert("RGB")

    w, h = im.size
    scale = min(1.0, MAX_EDGE / max(w, h))
    if scale < 1.0:
        im = im.resize((round(w * scale), round(h * scale)), Image.LANCZOS)

    dst = os.path.join(DST_DIR, slug + ".jpg")
    im.save(dst, "JPEG", quality=Q, optimize=True, progressive=True)

    before = os.path.getsize(src)
    after = os.path.getsize(dst)
    print(f"{slug:24} {w}x{h} -> {im.size[0]}x{im.size[1]}  "
          f"{before/1024:7.0f}KB -> {after/1024:6.0f}KB")


if __name__ == "__main__":
    os.makedirs(DST_DIR, exist_ok=True)
    total_before = total_after = 0
    for src_name, slug in MAP.items():
        process(src_name, slug)
        total_before += os.path.getsize(os.path.join(SRC_DIR, src_name))
        total_after += os.path.getsize(os.path.join(DST_DIR, slug + ".jpg"))
    print(f"\ntotal: {total_before/1024/1024:.1f}MB -> {total_after/1024/1024:.1f}MB")
    print("done")
