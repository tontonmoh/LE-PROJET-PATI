#!/usr/bin/env python3
# Range la dernière image Gemini comme planche de Kurukan Fuga.
#   python3 scripts/ranger-kurukan.py <episode> <planche>
#   python3 scripts/ranger-kurukan.py <episode> cover      -> epN-cover.webp
#   python3 scripts/ranger-kurukan.py <episode> planche    -> epN-planche.webp
#   python3 scripts/ranger-kurukan.py serie   couverture   -> kurukan-couverture.webp
#
# Format maison Kurukan : 16:9 paysage (le lecteur affiche en aspect-ratio 16/9).
import io, os, re, sys, glob, time
from PIL import Image

R    = os.path.expanduser("~/mnt/LE-PROJET-PATI")
TS   = os.path.join(R, "src/data/series/kurukanFuga.ts")
IMG  = os.path.join(R, "public/images/kurukan")
DL   = os.path.expanduser("~/mnt/Downloads")
RANG = os.path.join(DL, "_gemini_ranges")

L, H = 1600, 900          # 16:9
QUAL = 84

if len(sys.argv) < 3:
    sys.exit("usage : ranger-kurukan.py <episode|serie> <planche|cover|planche|couverture>")
ep, quoi = sys.argv[1], sys.argv[2]

# ── la dernière image téléchargée ─────────────────────────────────────────
cand = sorted(glob.glob(os.path.join(DL, "Gemini_Generated_Image_*")),
              key=os.path.getmtime, reverse=True)
if not cand:
    sys.exit("REFUS : aucune image Gemini dans Downloads")
src = cand[0]
age = (time.time() - os.path.getmtime(src)) / 60
if age > 5:
    sys.exit("REFUS : la dernière image date de %d min — rien de neuf à ranger" % age)

# ── où elle va ────────────────────────────────────────────────────────────
if ep == "serie":
    dest, etiq = os.path.join(IMG, "kurukan-couverture.webp"), "couverture de la série"
elif quoi in ("cover", "planche"):
    dest = os.path.join(IMG, "ep%s-%s.webp" % (ep, quoi))
    etiq = "%s de l'épisode %s" % (quoi, ep)
else:
    n = int(quoi)
    os.makedirs(os.path.join(IMG, "ep%s" % ep), exist_ok=True)
    dest = os.path.join(IMG, "ep%s" % ep, "ep%s-p%02d.webp" % (ep, n))
    etiq = "planche %d de l'épisode %s" % (n, ep)

deja = os.path.exists(dest)

# ── conversion ────────────────────────────────────────────────────────────
im = Image.open(src).convert("RGB")
# recadrage centré au ratio 16:9 si besoin, puis mise à l'échelle
r_cible, r_src = L / H, im.width / im.height
if abs(r_src - r_cible) > 0.01:
    if r_src > r_cible:                       # trop large -> on rogne les côtés
        l = int(im.height * r_cible)
        im = im.crop(((im.width - l) // 2, 0, (im.width + l) // 2, im.height))
    else:                                     # trop haute -> on rogne haut/bas
        h = int(im.width / r_cible)
        im = im.crop((0, (im.height - h) // 2, im.width, (im.height + h) // 2))
im = im.resize((L, H), Image.LANCZOS)
im.save(dest, "WEBP", quality=QUAL, method=6)

os.makedirs(RANG, exist_ok=True)
os.rename(src, os.path.join(RANG, os.path.basename(src)))

ko = os.path.getsize(dest) // 1024
print("%-22s %dx%d  %d Ko%s" % (os.path.basename(dest), L, H, ko,
                                "  (remplacée)" if deja else ""))
print("→", etiq)

# ── où en est l'épisode ───────────────────────────────────────────────────
if ep != "serie" and quoi not in ("cover", "planche"):
    s = io.open(TS, encoding="utf-8").read()
    attendu = len(re.findall(r'image: "/images/kurukan/ep%s/' % ep, s))
    faites = len(glob.glob(os.path.join(IMG, "ep%s" % ep, "ep%s-p*.webp" % ep)))
    print("épisode %s : %d/%d planches illustrées" % (ep, faites, attendu))
