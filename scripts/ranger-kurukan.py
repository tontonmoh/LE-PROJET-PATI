#!/usr/bin/env python3
# Range les N dernières images Gemini comme planches de Kurukan Fuga.
#   python3 scripts/ranger-kurukan.py <episode> <planche> [planche...]
# Les images sont prises dans l'ordre chronologique : la plus ancienne des N
# va sur la première planche demandée.
#   python3 scripts/ranger-kurukan.py 2 5 6 7   -> range 3 images d'un coup
#   python3 scripts/ranger-kurukan.py 2 cover   -> ep2-cover.webp
#   python3 scripts/ranger-kurukan.py serie couverture
import io, os, re, sys, glob, time
from PIL import Image

R    = os.path.expanduser("~/mnt/LE-PROJET-PATI")
TS   = os.path.join(R, "src/data/series/kurukanFuga.ts")
IMG  = os.path.join(R, "public/images/kurukan")
DL   = os.path.expanduser("~/mnt/Downloads")
RANG = os.path.join(DL, "_gemini_ranges")

L, H = 1600, 900          # 16:9
QUAL = 84
AGE_MAX = 20              # minutes

if len(sys.argv) < 3:
    sys.exit("usage : ranger-kurukan.py <episode|serie> <planche|cover|planche|couverture> [...]")
ep, cibles = sys.argv[1], sys.argv[2:]

# ── les N dernières images, de la plus ancienne à la plus récente ─────────
cand = sorted(glob.glob(os.path.join(DL, "Gemini_Generated_Image_*")),
              key=os.path.getmtime, reverse=True)
if len(cand) < len(cibles):
    sys.exit("REFUS : %d image(s) demandée(s), %d trouvée(s) dans Downloads"
             % (len(cibles), len(cand)))
lot = list(reversed(cand[:len(cibles)]))          # chronologique

trop_vieux = [f for f in lot if (time.time() - os.path.getmtime(f)) / 60 > AGE_MAX]
if trop_vieux:
    age = (time.time() - os.path.getmtime(trop_vieux[0])) / 60
    sys.exit("REFUS : une des images date de %d min — rien de neuf à ranger" % age)

os.makedirs(RANG, exist_ok=True)

def destination(quoi):
    if ep == "serie":
        return os.path.join(IMG, "kurukan-couverture.webp"), "couverture de la série"
    if quoi in ("cover", "planche"):
        return (os.path.join(IMG, "ep%s-%s.webp" % (ep, quoi)),
                "%s de l'épisode %s" % (quoi, ep))
    n = int(quoi)
    os.makedirs(os.path.join(IMG, "ep%s" % ep), exist_ok=True)
    return (os.path.join(IMG, "ep%s" % ep, "ep%s-p%02d.webp" % (ep, n)),
            "planche %d de l'épisode %s" % (n, ep))

for src, quoi in zip(lot, cibles):
    dest, etiq = destination(quoi)
    deja = os.path.exists(dest)

    im = Image.open(src).convert("RGB")
    r_cible, r_src = L / H, im.width / im.height
    if abs(r_src - r_cible) > 0.01:
        if r_src > r_cible:
            l = int(im.height * r_cible)
            im = im.crop(((im.width - l) // 2, 0, (im.width + l) // 2, im.height))
        else:
            h = int(im.width / r_cible)
            im = im.crop((0, (im.height - h) // 2, im.width, (im.height + h) // 2))
    im.resize((L, H), Image.LANCZOS).save(dest, "WEBP", quality=QUAL, method=6)
    os.rename(src, os.path.join(RANG, os.path.basename(src)))

    print("%-22s %d Ko  → %s%s" % (os.path.basename(dest),
                                   os.path.getsize(dest) // 1024, etiq,
                                   "  (remplacée)" if deja else ""))

# ── où en est l'épisode ───────────────────────────────────────────────────
if ep != "serie":
    s = io.open(TS, encoding="utf-8").read()
    attendu = len(re.findall(r'image: "/images/kurukan/ep%s/' % ep, s))
    faites = len(glob.glob(os.path.join(IMG, "ep%s" % ep, "ep%s-p*.webp" % ep)))
    print("épisode %s : %d/%d planches illustrées" % (ep, faites, attendu))
