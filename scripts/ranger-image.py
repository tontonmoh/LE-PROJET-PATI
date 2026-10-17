#!/usr/bin/env python3
"""Prend la dernière image Gemini de ~/Downloads, la convertit en webp et la range.
Usage: ranger-image.py <slug-livre> <nom-fichier-sans-ext>   ex: dmba dmba-01-fifi-v3"""
import sys, os, glob, shutil
from PIL import Image
home = os.path.expanduser("~")
dl = os.path.join(home, "mnt", "Downloads")
slug, name = sys.argv[1], sys.argv[2]
cands = sorted(glob.glob(os.path.join(dl, "Gemini_Generated_Image_*")), key=os.path.getmtime)
if not cands: sys.exit("aucune image Gemini dans Downloads")
src = cands[-1]
import time
if time.time()-os.path.getmtime(src) > 300: sys.exit("REFUS : la dernière image Gemini date de plus de 5 min — rien de neuf à ranger")
dest_dir = os.path.join(home, "mnt", "LE-PROJET-PATI", "public", "livres", slug)
os.makedirs(dest_dir, exist_ok=True)
im = Image.open(src).convert("RGB")
dest = os.path.join(dest_dir, name + ".webp")
im.save(dest, "WEBP", quality=84, method=6)
done = os.path.join(dl, "_gemini_ranges"); os.makedirs(done, exist_ok=True)
shutil.move(src, os.path.join(done, name + os.path.splitext(src)[1]))
print(f"{name}.webp {im.size} {os.path.getsize(dest)//1024} Ko  <- {os.path.basename(src)}")
