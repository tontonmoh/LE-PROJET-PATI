// Almamya-Zogota — exporte les données PATI en JSON pour build.py
// Lancer depuis la racine du repo :  npx esbuild scripts/almamya/dump.ts --bundle --platform=node --outfile=scripts/almamya/dump.cjs && node scripts/almamya/dump.cjs
import * as T from '../../src/data/territoires';
import * as P from '../../src/data/pionnieres';
import * as F from '../../src/data/foutaQuests';
import * as HM from '../../src/data/horoyaMemorial';
import * as S from '../../src/data/quizSebe';
import { writeFileSync } from 'fs';
writeFileSync('scripts/almamya/data.json', JSON.stringify({ T, P, F, HM, S }));
