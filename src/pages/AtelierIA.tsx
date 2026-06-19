import { Link } from "react-router-dom";
import {
  Cpu, Sparkles, MessageSquare, PenLine, Image as ImageIcon, Wand2, LayoutTemplate,
  Users, FileText, ShieldCheck, Palette, Brush, ArrowRight, ExternalLink, BookOpen, Lightbulb,
} from "lucide-react";

/* ── 5 outils IA, à accès gratuit, alignés sur le workflow PATI ── */
const OUTILS = [
  {
    icon: MessageSquare, color: "#10A37F",
    nom: "ChatGPT", role: "Brainstorming & idées",
    d: "Pour lancer une idée, explorer des variantes, débloquer la page blanche. Le compagnon du remue-méninges, en équipe ou en classe.",
    tag: "Gratuit", url: "https://chatgpt.com",
  },
  {
    icon: PenLine, color: "#C8841E",
    nom: "Claude", role: "Écriture & structuration",
    d: "Pour structurer un récit, l'adapter à chaque âge, le traduire (français, anglais, arabe, chinois…). L'outil de mise en forme des histoires PATI.",
    tag: "Gratuit", url: "https://claude.ai",
  },
  {
    icon: ImageIcon, color: "#4285F4",
    nom: "Google Gemini", role: "Illustrations & couvertures",
    d: "Pour générer des images à partir d'un texte : couvertures, décors, scènes. L'outil final d'illustration dans la fabrique PATI.",
    tag: "Gratuit", url: "https://gemini.google.com",
  },
  {
    icon: Wand2, color: "#7A5CFF",
    nom: "Microsoft Copilot — Image Creator", role: "Images (2ᵉ option)",
    d: "Une seconde corde pour les images, gratuite, propulsée par DALL·E. Pratique pour varier les styles ou comparer les rendus.",
    tag: "Gratuit", url: "https://copilot.microsoft.com",
  },
  {
    icon: LayoutTemplate, color: "#00C4CC",
    nom: "Canva", role: "Mise en page & assemblage",
    d: "Pour assembler texte et images en pages, ajouter titres et habillage, exporter le livre. Accessible aux enfants comme aux animateurs.",
    tag: "Gratuit · option payante", url: "https://canva.com",
  },
];

/* ── Architecture : comment un livre PATI est fabriqué ── */
const ETAPES = [
  { icon: Users, color: "#0F6E56", t: "Brainstorming en équipe", d: "L'idée naît d'un échange collectif : un sujet du patrimoine, une figure, une valeur à transmettre.", outil: "humain + ChatGPT" },
  { icon: FileText, color: "#C8841E", t: "Structuration avec Claude", d: "Le récit prend forme : trame, personnages, découpage par double-page, registre adapté à l'âge.", outil: "Claude" },
  { icon: ShieldCheck, color: "#1F7A8C", t: "Comité scientifique", d: "Des experts valident la rigueur : faits historiques, exactitude culturelle, règle « réel vs projeté ».", outil: "humain" },
  { icon: Palette, color: "#9B59B6", t: "Prompt de couverture (Claude)", d: "Un brief visuel précis est rédigé : ambiance, composition, symboles — la consigne donnée à l'image.", outil: "Claude" },
  { icon: Brush, color: "#FF6B4A", t: "Illustrateur", d: "Un artiste humain guide la direction artistique, affine, corrige — l'œil et la main restent au centre.", outil: "humain" },
  { icon: ImageIcon, color: "#4285F4", t: "Génération avec Gemini", d: "Les illustrations finales sont produites et intégrées au livre, prêtes pour la plateforme.", outil: "Gemini" },
];

export default function AtelierIA() {
  return (
    <div className="bg-[#FFF6E7]">
      {/* HERO */}
      <section className="bg-[#0F6E56] text-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="inline-flex items-center gap-2 font-display font-semibold text-[#FFC93C] bg-white/10 px-4 py-1.5 rounded-full mb-5"><Cpu size={16} /> Atelier IA & création numérique</div>
          <h1 className="text-3xl md:text-5xl leading-tight mb-4">L'intelligence artificielle, au service du patrimoine</h1>
          <p className="text-lg text-white/85 font-semibold max-w-2xl leading-relaxed">Découvrir et utiliser l'IA de façon responsable pour créer : écrire, illustrer, imaginer. Voici les outils que nous utilisons — et comment naît un livre PATI, étape par étape.</p>
        </div>
      </section>

      {/* OUTILS */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2 mb-2"><Sparkles className="text-[#FFC93C]" size={24} /><h2 className="text-2xl md:text-3xl text-[#0D2B1A]">5 outils pour créer</h2></div>
        <p className="text-[#5a6b62] font-semibold mb-6">Tous accessibles gratuitement pour débuter. À utiliser avec l'accompagnement d'un adulte.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {OUTILS.map((o) => (
            <a key={o.nom} href={o.url} target="_blank" rel="noopener noreferrer" className="card-kid p-6 group block hover:shadow-kid transition-shadow border-2" style={{ background: `${o.color}0d`, borderColor: `${o.color}33` }}>
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: `${o.color}26` }}><o.icon size={24} style={{ color: o.color }} /></div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full" style={{ background: `${o.color}1f`, color: o.color }}>{o.tag}</span>
              </div>
              <h3 className="font-display font-semibold text-[#0D2B1A] text-lg leading-tight">{o.nom}</h3>
              <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: o.color }}>{o.role}</p>
              <p className="text-sm text-[#5a6b62] font-semibold leading-relaxed">{o.d}</p>
              <span className="inline-flex items-center gap-1 mt-3 text-sm font-display font-semibold group-hover:gap-2 transition-all" style={{ color: o.color }}>Ouvrir l'outil <ExternalLink size={14} /></span>
            </a>
          ))}
        </div>
        <div className="flex items-start gap-2 mt-6 text-sm text-[#5a6b62] font-semibold bg-white rounded-2xl p-4 shadow-kid">
          <Lightbulb size={18} className="text-[#FFC93C] shrink-0 mt-0.5" />
          <p>L'IA est un outil, pas un auteur. Chez PATI, chaque histoire reste pensée, vérifiée et guidée par des humains — l'IA aide à écrire et à dessiner plus vite, jamais à remplacer le regard et la rigueur.</p>
        </div>
      </section>

      {/* ARCHITECTURE — FABRICATION D'UN LIVRE PATI */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="flex items-center gap-2 mb-2"><BookOpen className="text-[#0F6E56]" size={24} /><h2 className="text-2xl md:text-3xl text-[#0D2B1A]">Comment naît un livre PATI</h2></div>
        <p className="text-[#5a6b62] font-semibold mb-8">De l'idée à la page : six étapes, où l'humain et l'IA travaillent ensemble.</p>

        <div className="relative">
          {/* ligne verticale */}
          <div className="absolute left-[27px] top-3 bottom-3 w-0.5 bg-[#5DCAA5]/40 hidden sm:block" aria-hidden="true" />
          <div className="space-y-4">
            {ETAPES.map((e, i) => (
              <div key={e.t} className="relative flex gap-4 items-start">
                <div className="relative z-10 w-14 h-14 rounded-2xl shrink-0 flex items-center justify-center shadow-kid" style={{ background: `${e.color}1f` }}>
                  <e.icon size={24} style={{ color: e.color }} />
                </div>
                <div className="card-kid p-5 flex-1 border-2" style={{ background: `${e.color}0d`, borderColor: `${e.color}33` }}>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="text-xs font-bold text-white rounded-full w-6 h-6 inline-flex items-center justify-center shrink-0" style={{ background: e.color }}>{i + 1}</span>
                    <h3 className="font-display font-semibold text-[#0D2B1A] text-lg leading-tight">{e.t}</h3>
                    <span className="text-[11px] font-bold bg-[#FFC93C]/30 text-[#633806] px-2.5 py-0.5 rounded-full">{e.outil}</span>
                  </div>
                  <p className="text-sm text-[#5a6b62] font-semibold leading-relaxed">{e.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA retour Clubs */}
        <div className="mt-10 bg-white rounded-[2rem] p-8 shadow-kid text-center">
          <h3 className="font-display font-semibold text-[#0D2B1A] text-xl mb-2">Envie de créer avec ton Club&nbsp;?</h3>
          <p className="text-[#5a6b62] font-semibold mb-5">L'Atelier IA fait partie des activités des Clubs PATI dans les écoles.</p>
          <Link to="/clubs" className="btn-kid bg-[#0F6E56] text-white"><ArrowRight size={18} /> Voir les Clubs PATI</Link>
        </div>
      </section>
    </div>
  );
}
