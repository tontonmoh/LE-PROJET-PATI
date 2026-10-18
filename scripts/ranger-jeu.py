#!/usr/bin/env python3
"""Prend la dernière image Gemini de ~/Downloads, la recadre en 3:2 (1200x800), la convertit en webp
et la range dans public/images/jeux/<nom>.webp.   Usage: ranger-jeu.py <nom>   ex: corridor"""
import sys, os, glob, shutil, time
from PIL import Image
home = os.path.expanduser("~"); dl = os.path.join(home, "mnt", "Downloads"); name = sys.argv[1]
cands = sorted(glob.glob(os.path.join(dl, "Gemini_Generated_Image_*")), key=os.path.getmtime)
if not cands: sys.exit("aucune image Gemini dans Downloads")
src = cands[-1]
if time.time()-os.path.getmtime(src) > 1200: sys.exit("REFUS : la dernière image Gemini date de plus de 20 min")
im = Image.open(src).convert("RGB"); w, h = im.size; r = 1.5
if w/h > r: nw = int(h*r); im = im.crop(((w-nw)//2, 0, (w-nw)//2+nw, h))
else: nh = int(w/r); im = im.crop((0, (h-nh)//2, w, (h-nh)//2+nh))
im = im.resize((1200, 800), Image.LANCZOS)
dest = os.path.join(home, "mnt", "LE-PROJET-PATI", "public", "images", "jeux", name + ".webp")
im.save(dest, "WEBP", quality=82, method=6)
done = os.path.join(dl, "_gemini_ranges"); os.makedirs(done, exist_ok=True)
shutil.move(src, os.path.join(done, "jeu-" + name + os.path.splitext(src)[1]))
print(f"{name}.webp {im.size} {os.path.getsize(dest)//1024} Ko")
