# Almamya-Zogota — génère la banque de questions A→Z à partir des données PATI.
# Entrées : data.json (dump des modules src/data), redigees.json (questions écrites à la main)
# Sortie  : questions.json  [{id,l,n,c,q,r,o,f,s,saisie}]
#   l = lettre, n = niveau 1 facile · 2 moyen · 3 difficile, c = catégorie,
#   r = réponse, o = distracteurs (même lettre), f = fiche, s = page PATI liée,
#   saisie = true si pas assez de distracteurs de même lettre → réservé au mode Extrême (réponse tapée)
import json, random, re, sys, unicodedata
from collections import defaultdict

random.seed(2040)
D = json.load(open(sys.argv[1] if len(sys.argv) > 1 else 'data.json'))
RED = json.load(open(sys.argv[2] if len(sys.argv) > 2 else 'redigees.json'))

def sans_accent(s):
    return ''.join(c for c in unicodedata.normalize('NFD', s) if unicodedata.category(c) != 'Mn')

ARTICLES = re.compile(r"^(l'|l’|le |la |les |un |une |des |du |hadja |hadj |el hadj |dr |docteur )", re.I)
def lettre(r):
    s = r.strip()
    while True:
        s2 = ARTICLES.sub('', s)
        if s2 == s: break
        s = s2
    s = sans_accent(s).upper()
    for ch in s:
        if 'A' <= ch <= 'Z': return ch
    return None

Q = []
def add(c, n, q, r, pool, f='', s='', o=None, ident=None):
    L = lettre(r)
    if not L: return
    if o is None:
        cand = [p for p in dict.fromkeys(pool) if p != r and lettre(p) == L
                and sans_accent(p).lower() != sans_accent(r).lower()]
        random.shuffle(cand); o = cand[:3]
    Q.append({'id': ident or f'{c[:3].lower()}{len(Q)}', 'l': L, 'n': n, 'c': c, 'q': q, 'r': r, 'o': o,
              'f': f, 's': s, 'saisie': len(o) < 2})

T = D['T']['territoires']
REG = {k: v.replace('Région de ', '').replace('Gouvernorat de ', '') for k, v in D['T']['LIBELLE_REGION_ADMIN'].items()}
prefs = [t for t in T if t['type'] == 'prefecture']
communes = [t for t in T if t['type'] == 'commune-conakry']
noms_pref = [p['nom'] for p in prefs]
noms_reg = [v for k, v in REG.items() if k != 'conakry']

# ── Territoires : préfecture → région administrative ──
for p in prefs:
    add('Territoires', 1, f"La préfecture de {p['nom']} fait partie de quelle région administrative ?",
        REG[p['regionAdministrative']], noms_reg,
        f"{p['nom']} est rattachée à la région de {REG[p['regionAdministrative']]} (découpage du décret du 20 août 2026).", '/laguine')
# ── région → une de ses préfectures ──
for p in prefs:
    if p['nom'] == REG[p['regionAdministrative']]: continue
    autres = [x['nom'] for x in prefs if x['regionAdministrative'] != p['regionAdministrative']]
    add('Territoires', 2, f"Laquelle de ces préfectures appartient à la région de {REG[p['regionAdministrative']]} ?",
        p['nom'], autres, f"{p['nom']} est une préfecture de la région de {REG[p['regionAdministrative']]}.", '/laguine')
# ── langue dominante ──
LANGUES = sorted({p.get('patrimoine', {}).get('langueDominante') for p in prefs} - {None})
for p in prefs:
    lg = p.get('patrimoine', {}).get('langueDominante')
    if lg and p['nom'] not in ('Kamsar', 'Timbo', 'Sabadou-Baranama', 'Tokounou', 'Dialakoro', 'Kintinian', 'Siguirini', 'Doko', 'Karala', 'Sinko', 'Kouankan'):
        add('Langues', 2, f"Quelle langue domine dans la préfecture de {p['nom']} ?", lg, LANGUES,
            f"À {p['nom']}, la langue la plus parlée est le {lg}.", '/laguine')

# ── Sous-préfectures ──
compte = defaultdict(int)
for p in prefs:
    for s in p.get('sousPrefectures') or []: compte[s] += 1
sp_de = {}
for p in prefs:
    for s in p.get('sousPrefectures') or []:
        if s.endswith(' Centre') or s in noms_pref or compte[s] > 1: continue
        if sans_accent(s).lower().startswith(sans_accent(p['nom']).lower()): continue
        sp_de[s] = p
tous_sp = list(sp_de)
for s, p in sp_de.items():
    autres_sp = [x for x in tous_sp if sp_de[x]['nom'] != p['nom']]
    add('Sous-préfectures', 3, f"Laquelle de ces localités est une sous-préfecture de la préfecture de {p['nom']} ?",
        s, autres_sp, f"{s} est une sous-préfecture de {p['nom']} (région de {REG[p['regionAdministrative']]}).", '/laguine')
    add('Sous-préfectures', 3, f"La sous-préfecture de {s} se trouve dans quelle préfecture ?",
        p['nom'], noms_pref, f"{s} fait partie de la préfecture de {p['nom']}.", '/laguine')

# ── Conakry : quartiers ↔ communes (jeu LaGuinèKonakri) ──
html = open(sys.argv[3] if len(sys.argv) > 3 else 'konakri.html', encoding='utf-8').read()
rows = re.findall(r'\["([^"]+)","([^"]+)","([^"]+)"\]', html)
quart = {}
for qn, com, _ in rows:
    base = re.sub(r'\s+\d+$', '', qn).strip()
    quart.setdefault(base, set()).add(com)
quart = {k: next(iter(v)) for k, v in quart.items() if len(v) == 1}
quart = {k: c for k, c in quart.items() if not sans_accent(k).lower().startswith(sans_accent(c).lower())}
noms_com = [c['nom'] for c in communes]
for qn, com in quart.items():
    add('Conakry', 2, f"Dans quelle commune de Conakry se trouve le quartier {qn} ?", com, noms_com,
        f"Le quartier {qn} appartient à la commune de {com}.", '/konakri')
    add('Conakry', 2, f"Lequel de ces quartiers se trouve dans la commune de {com} ?", qn,
        [x for x, c in quart.items() if c != com], f"{qn} est un quartier de {com}.", '/konakri')

# ── Pionnières ──
PERS = []
for p in D['P']['PIONNIERES']: PERS.append(p['nom'])
for p in D['HM']['PIONNIERS']: PERS.append(p['nom'])
for g in D['HM']['PREMIER_GOUVERNEMENT']:
    if '·' not in g['titulaire']: PERS.append(g['titulaire'])
for p in D['P']['PIONNIERES']:
    if not p.get('valide'): continue
    add('Pionnières', 2, f"Qui est surnommée « {p['titre']} » ?", p['nom'], PERS,
        p.get('chapeau', ''), f"/pionnieres/{p['slug']}")
    if p.get('mot'):
        add('Pionnières', 3, f"Quel mot résume le parcours de {p['nom']} dans « La Guinée des Pionnières » ?",
            p['mot'].capitalize(), [x['mot'].capitalize() for x in D['P']['PIONNIERES'] if x.get('mot')],
            p.get('chapeau', ''), f"/pionnieres/{p['slug']}")
# ── Horoya : pionniers de l'indépendance ──
for p in D['HM']['PIONNIERS']:
    if p['id'] == 'sekou-toure': continue
    add('Horoya', 2, f"Mémorial Horoya : quelle personnalité est présentée comme « {p['titre']} » ?", p['nom'], PERS,
        f"{p['nom']} ({p.get('dates','')}) — {p['titre']}.", '/horoya')
for g in D['HM']['PREMIER_GOUVERNEMENT']:
    if '·' in g['titulaire'] or g['titulaire'] == 'Ahmed Sékou Touré': continue
    add('Horoya', 3, f"Dans le premier gouvernement de la Guinée indépendante (1958), qui détenait le portefeuille « {g['portefeuille']} » ?",
        g['titulaire'], PERS, f"{g['titulaire']} : {g['portefeuille']}, premier gouvernement (1958).", '/horoya')

# ── Fouta théocratique : les diwés ──
DIW = [x['name'] for x in D['F']['foutaDiwals']]
for x in D['F']['foutaDiwals']:
    add('Fouta', 3, f"Quel diwal (province) du Fouta-Djalon a pour fondateur {x['founder']} ?", x['name'], DIW + [p['nom'] for p in prefs if p['regionAdministrative'] in ('labe', 'mamou')],
        f"Le diwal de {x['name']} ({x.get('years','')}) — fondateur : {x['founder']}.", '/fouta')

# ── Sèbè : littérature guinéenne ──
SEB = D['S']['QUIZ_SEBE']
pool_seb = [c for q in SEB if q['type'] != 'chronologie' for c in q['choix']]
for q in SEB:
    if q['type'] == 'chronologie': continue
    r = q['choix'][q['reponse']]
    if len(r) > 60: continue
    add('Littérature', q['difficulte'], q['question'], r, pool_seb, q.get('fiche', ''), q.get('route') or '/sebe', ident='seb-' + q['id'])

# ── Questions rédigées ──
for i, x in enumerate(RED):
    add(x['c'], x['n'], x['q'], x['r'], [], x.get('f', ''), x.get('s', ''), o=x['o'], ident=f'red{i}')

json.dump(Q, open('questions.json', 'w'), ensure_ascii=False, separators=(',', ':'))
par = defaultdict(lambda: [0, 0, 0, 0])
for x in Q: par[x['l']][x['n'] - 1 if not x['saisie'] else 3] += 1
print(len(Q), 'questions ;', sum(1 for x in Q if x['saisie']), 'en saisie seule')
for L in 'ABCDEFGHIJKLMNOPQRSTUVWXYZ': print(L, par[L])
