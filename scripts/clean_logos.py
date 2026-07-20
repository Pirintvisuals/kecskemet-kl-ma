"""
Normalise brand logos for the logo wall:
  1. knock out the white background -> transparent (anti-aliased edges)
  2. trim surrounding whitespace
  3. re-pad every logo onto ONE uniform canvas so they all read at the
     same visual size, whatever their native aspect ratio.

Run:  python scripts/clean_logos.py
Reads/writes public/brands/*.png (originals are kept in public/brands/_original).
"""
import os
from PIL import Image

SRC = os.path.join("public", "brands", "_original")
DST = os.path.join("public", "brands")

# Output canvas (2x for crisp retina display; shown ~180px wide).
CANVAS_W, CANVAS_H = 440, 200
# Fraction of the canvas the logo content may occupy.
FIT_W, FIT_H = 0.90, 0.66

# White-removal ramp: min(r,g,b) >= HI -> fully transparent, <= LO -> opaque.
HI, LO = 249, 232


def dewhite(im: Image.Image) -> Image.Image:
    im = im.convert("RGBA")
    px = im.load()
    w, h = im.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            m = min(r, g, b)
            if m >= HI:
                na = 0
            elif m <= LO:
                na = a
            else:
                na = int(a * (HI - m) / (HI - LO))
            if na != a:
                px[x, y] = (r, g, b, na)
    return im


def process(name: str):
    src = os.path.join(SRC, name)
    im = dewhite(Image.open(src))

    # Trim to content bbox.
    bbox = im.getbbox()
    if bbox:
        im = im.crop(bbox)

    # Scale to fit inside the allowed area, preserving aspect.
    max_w, max_h = int(CANVAS_W * FIT_W), int(CANVAS_H * FIT_H)
    scale = min(max_w / im.width, max_h / im.height)
    new = (max(1, round(im.width * scale)), max(1, round(im.height * scale)))
    im = im.resize(new, Image.LANCZOS)

    # Center on transparent canvas.
    canvas = Image.new("RGBA", (CANVAS_W, CANVAS_H), (0, 0, 0, 0))
    canvas.paste(im, ((CANVAS_W - im.width) // 2, (CANVAS_H - im.height) // 2), im)
    canvas.save(os.path.join(DST, name))
    print(f"{name:16} -> {CANVAS_W}x{CANVAS_H}  (content {new[0]}x{new[1]})")


if __name__ == "__main__":
    for f in sorted(os.listdir(SRC)):
        if f.endswith(".png"):
            process(f)
    print("done")
