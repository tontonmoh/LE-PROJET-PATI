#!/usr/bin/env python3
"""Range la dernière image Gemini comme planche de Génération 2040, et la branche.

Usage :  python3 scripts/ranger-g2040.py <tome> <planche>
Exemple :  python3 scripts/ranger-g2040.py 1 2     -> t1-p2.webp, planche 2 du tome 1

Refuse une image de plus de 5 minutes (rien de neuf à ranger), vérifie le format,
écrit le webp dans public/images/g2040/ et pose le champ image sur la bonne
planche du fichier de données. Relancer sur une planche déjà branchée remplace
l'image sans toucher au branchement.
"""
import sys, os, re, glob, time, shutil, io
from PIL import Image

if len(sys.argv) != 3:
    sys.exit(__doc__)
tome, planche = sys.argv[1], int(sys.argv[2])
nom = f"t{tome}-p{planche}"

RACINE = os.path.expanduser("~/mnt/LE-PROJET-PATI")
DL = os.path.expanduser("~/mnt/Downloads")

# ── 1. Récupérer la dernière image générée ────────────────────────────────
cands = sorted(glob.glob(os.path.join(DL, "Gemini_Generated_Image_*")),
               key=os.path.getmtime)
if not cands:
    sys.exit("REFUS : aucune image Gemini dans Downloads")
src = cands[-1]
age = time.time() - os.path.getmtime(src)
if age > 300:
    sys.exit(f"REFUS : la dernière image date de {int(age//60)} min — rien de neuf à ranger")

im = Image.open(src).convert("RGB")
l, h = im.size
if h <= l:
    print(f"ATTENTION : {l}x{h} n'est pas un portrait — vérifier avant de valider")
elif abs((l / h) - 0.75) > 0.06:
    print(f"ATTENTION : {l}x{h}, rapport {l/h:.2f} au lieu de 0.75 attendu")

# ── 2. Écrire le webp ─────────────────────────────────────────────────────
dossier = os.path.join(RACINE, "public/images/g2040")
os.makedirs(dossier, exist_ok=True)
dest = os.path.join(dossier, nom + ".webp")
remplace = os.path.exists(dest)
im.save(dest, "WEBP", quality=86, method=6)

ranges = os.path.join(DL, "_gemini_ranges")
os.makedirs(ranges, exist_ok=True)
shutil.move(src, os.path.join(ranges, nom + ".jpeg"))
print(f"{nom}.webp  {l}x{h}  {os.path.getsize(dest)//1024} Ko"
      + ("  (remplacée)" if remplace else ""))

# ── 3. Brancher sur la bonne planche ──────────────────────────────────────
P = os.path.join(RACINE, f"src/data/g2040-tome{tome}.ts")
s = io.open(P, encoding="utf-8").read()
MOTIF = re.compile(r'(      id: "([^"]+)",\n      voix: "(\w+)",\n)(      image: "[^"]*",\n)?')
trouvees = list(MOTIF.finditer(s))
if len(trouvees) < planche:
    sys.exit(f"REFUS : le tome {tome} n'a que {len(trouvees)} planches")
m = trouvees[planche - 1]
chemin = f'      image: "/images/g2040/{nom}.webp",\n'
if m.group(4) == chemin:
    print(f"déjà branchée sur « {m.group(2)} »")
else:
    s = s[:m.start()] + m.group(1) + chemin + s[m.end():]
    io.open(P, "w", encoding="utf-8").write(s)
    print(f"branchée sur la planche {planche} « {m.group(2)} » du tome {tome}")

# ── 4. Où en est-on ? ─────────────────────────────────────────────────────
total = len(trouvees)
faites = len(re.findall(r'      image: "/images/g2040/', io.open(P, encoding="utf-8").read()))
print(f"tome {tome} : {faites}/{total} planches illustrées")
