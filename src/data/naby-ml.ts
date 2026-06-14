// Livre « Naby — L'enfant de Coléah » — Collection Pati Aventure (10–12 ans).
// Récit biographique à la première voix : la trajectoire de Naby Keïta,
// de la vente d'eau à Coléah jusqu'à la Ligue des Champions et au retour vers les enfants.
// Voix directe « Je raconte ». FR pour l'instant ; EN/AR/ZH à ajouter comme les autres titres.
// IMPORTANT : faits à valider (clubs, dates, montants) et accord de la personne/entourage avant diffusion large.

import type { Lang } from "./series/taadidi";

type RSection = { title: string; paragraphs: string[]; image?: string };
type RBook = { lang: Lang; dir: "ltr" | "rtl"; label: string; bookTitle: string; sections: RSection[] };

export const NABY_ML: Partial<Record<Lang, RBook>> = {
  fr: {
    lang: "fr",
    dir: "ltr",
    label: "Français",
    bookTitle: "Naby — L'enfant de Coléah",
    sections: [
    { title: "Le matin", image: "/images/naby/naby-p1.png", paragraphs: [
        "Je m'appelle Naby. Et ma mère, c'est NGa Marie.",
        "Chaque matin, elle me réveillait en un seul mot : « Naby. »",
        "Je savais ce que ça voulait dire. L'eau à vendre. Maintenant.",
        "On partait ensemble. Elle s'asseyait à sa place, et moi je parcourais les quartiers, en short troué, un récipient sur la tête.",
        "À midi, elle me disait : « Va jouer maintenant. » Et moi, je courais vers le terrain.",
    ] },
    { title: "Le ballon", image: "/images/naby/naby-p2.png", paragraphs: [
        "Sur le terrain, j'étais différent.",
        "Pas plus fort que les autres. Pas plus grand. Mais je voyais les choses avant qu'elles ne se passent.",
        "Je voyais où le ballon irait. Je comprenais l'espace vide.",
        "Les autres enfants criaient mon nom de partout. Tout le monde voulait passer avec moi.",
        "Et moi, je voulais juste jouer. C'est tout.",
    ] },
    { title: "L'homme", image: "/images/naby/naby-p3.png", paragraphs: [
        "Un jour, quelqu'un se tenait au bord du terrain et regardait.",
        "Il ne regardait pas comme un père qui regarde son fils. Il regardait comme quelqu'un qui cherche quelque chose.",
        "À la fin du match, il m'appela. « Naby Keïta ? »",
        "J'avais peur. Je ne savais pas pourquoi.",
        "« Tu habites où ? » Voilà. C'est tout ce qu'il dit ce jour-là.",
    ] },
    { title: "La promesse", image: "/images/naby/naby-p4.png", paragraphs: [
        "Il s'appelait Mr Kébé. À Conakry, beaucoup de gens le connaissaient. Il découvrait des talents.",
        "« Je peux entraîner ton fils. Peut-être l'envoyer en France. »",
        "Ma mère ne répondit rien. Elle versa l'eau. Comme d'habitude. Méthodique.",
        "Puis elle le regarda. « Vivant ? » « Oui. »",
        "Elle tendit sa main mouillée et elle dit : « Je te donne mon fils. »",
        "C'est cette phrase qui a changé ma vie.",
    ] },
    { title: "L'entraînement", image: "/images/naby/naby-p5.png", paragraphs: [
        "Mr Kébé n'était pas gentil. Il était sérieux.",
        "Entraînement quatre fois par semaine. École. Respect. Et une phrase qu'il répétait toujours : « Tu fais ça pour ta mère. »",
        "J'ai appris à me lever seul. À écouter sans pleurer quand il criait.",
        "J'ai compris que le football, c'était pas juste la joie. C'était aussi le travail.",
        "Tard le soir, seul, j'appuyais le ballon contre un mur et je le relançais. Encore. Encore. Jusqu'à ce que mes jambes tremblent.",
        "Mr Kébé me voyait faire. Il hochait la tête.",
    ] },
    { title: "Santoba", image: "/images/naby/naby-p6.png", paragraphs: [
        "À quatorze ans, j'ai joué pour Santoba FC, et le terrain a changé.",
        "Je suis devenu rapide. Technique. À Conakry, les gens parlaient de moi.",
        "« Tu as vu le fils de NGa Marie ? »",
        "Ma mère s'asseyait dans les tribunes les jours de match. Elle ne criait pas. Elle regardait. C'est tout.",
        "Et je savais qu'elle était fière.",
    ] },
    { title: "Lorient — non", image: "/images/naby/naby-p7.png", paragraphs: [
        "À seize ans, Mr Kébé dit : « On va en France. »",
        "Lorient. C'était gris et froid. Rien à voir avec Conakry.",
        "L'essai dura trois semaines. À la fin, ils dirent non. « Peut-être plus tard. »",
        "Je revins à Conakry, silencieux. Je dis à Mr Kébé : « Je n'y arriverai pas. »",
        "Il s'assit à côté de moi et il dit : « Les plus grands joueurs du monde n'ont pas entendu oui la première fois. »",
        "Je ne répondis rien. « On essaie encore ? » J'ai dit oui.",
    ] },
    { title: "Le Mans", image: "/images/naby/naby-p8.png", paragraphs: [
        "Le Mans voulait moi.",
        "C'était officiel cette fois. Un vrai contrat. Un vrai club professionnel.",
        "Je partis seul. Et pour la première fois, j'ai senti que je pouvais peut-être y arriver.",
        "Il y avait l'entraînement. Les coéquipiers. Un futur.",
        "J'appelai Mr Kébé et je dis : « Ça va bien. » « Travaille. » « Je le fais. »",
        "Et je travaillais chaque jour. Je pensais à ma mère.",
    ] },
    { title: "La faillite", image: "/images/naby/naby-p9.png", paragraphs: [
        "Trois mois après, Mr Kébé appela et dit : « Naby, le club ferme. »",
        "Je ne comprenais pas vraiment. « Tu dois partir demain. »",
        "Je m'assis sur mon lit. La nuit était noire. Très noire.",
        "Trois mois de promesse, et voilà que tout disparaissait.",
        "Je repensai à ma mère. À sa main mouillée qui avait dit : « Je te donne mon fils. »",
        "J'ai pensé : j'abandonne. Je rentre.",
        "Puis j'ai appelé Mr Kébé et j'ai dit : « Je ne rentre pas. Je reste en France. Je continue. »",
        "Silence long. « Je continue. »",
    ] },
    { title: "Le refuge", image: "/images/naby/naby-p10.png", paragraphs: [
        "Je trouvai refuge chez d'autres aînés footballeurs guinéens.",
        "Ils me nourrirent. Me logèrent.",
        "Et Mr Kébé m'appelait chaque jour. Pas pour demander des nouvelles. Juste pour dire : « Tiens bon. »",
        "Quatre mots. Chaque jour. « Tiens bon. »",
    ] },
    { title: "Marseille", image: "/images/naby/naby-p11.png", paragraphs: [
        "À Marseille, il y avait un tournoi.",
        "Bobo Baldé l'organisait. Il avait été un international guinéen très reconnu.",
        "Je jouais pour une sélection mélangée, et dès le premier match, je ne pensais plus.",
        "Je jouais. Libre. Sans peur.",
        "Les scouts prirent des notes. Moi, je ne savais pas que je jouais pour mon futur.",
    ] },
    { title: "Istres", image: "/images/naby/naby-p12.png", paragraphs: [
        "Après Marseille, Istres appela.",
        "Mr Kébé raccrocha. Il m'appela. « Ils te veulent. »",
        "Je pleurai. Pas des larmes visibles. Juste une tension qui disparaissait.",
        "J'appelai ma mère et je dis : « NGa Marie, j'ai signé. »",
        "Silence à Conakry. Puis elle dit : « Je le savais depuis le début. »",
        "Sa voix tremblait.",
    ] },
    { title: "D'Istres à Liverpool", image: "/images/naby/naby-p13.png", paragraphs: [
        "À Istres, j'ai appris que le football était une langue, et je la parlais.",
        "23 matchs. 4 buts. 9 passes.",
        "Puis Salzburg. Puis Leipzig. À Leipzig, j'ai compris comment penser le jeu.",
        "Et puis Liverpool appela. 60 millions d'euros.",
        "Je portai le rouge à Anfield, devant 60 000 supporters.",
        "En 2019, on atteignit la finale de la Ligue des Champions.",
        "J'appelai ma mère : « NGa Marie, je joue la plus grande finale d'Europe. » Elle pleura.",
        "Sifflet final. Liverpool gagna. J'avais soulevé la Ligue des Champions. Je devins le premier Guinéen.",
    ] },
    { title: "Le Syli — la première fois", image: "/images/naby/naby-p14.png", paragraphs: [
        "Mais avant tout ça, il y avait quelque chose d'important.",
        "Le Syli. Notre équipe nationale.",
        "La première fois que j'ai porté le maillot, j'étais nerveux. J'étais là avec des hommes que j'avais regardés jouer quand j'étais enfant.",
        "Feindouno. Mansaré. Les légendes du football guinéen.",
        "Et moi, juste un garçon de Coléah avec un ballon.",
        "Ils m'ont accueilli comme un frère. « Tu as ce qu'il faut », disait Feindouno.",
        "Et je jouais. Pour ma mère. Pour Coléah. Pour la Guinée.",
    ] },
    { title: "Le capitaine — les blessures", image: "/images/naby/naby-p15.png", paragraphs: [
        "Les années ont passé, et j'ai porté le brassard de capitaine.",
        "J'ai marqué beaucoup de buts. J'ai représenté ma Guinée sur les plus grands stades.",
        "Mais le football, c'est aussi les blessures.",
        "Les genoux. Les chevilles. Les petites douleurs qui deviennent grandes.",
        "Il y avait des jours où je me réveillais et mon corps disait : « Non. » Et moi, je mettais les crampons quand même.",
        "Parce que représenter ton pays, ce n'est pas juste les victoires. C'est aussi jouer quand ça fait mal.",
        "Feindouno et Mansaré m'avaient appris ça. À jouer à travers la douleur. À ne pas abandonner.",
    ] },
    { title: "Le retour", image: "/images/naby/naby-p16.png", paragraphs: [
        "Des années après, j'étais champion d'Europe.",
        "Mais quelque chose manquait. Coléah.",
        "Je revenais régulièrement. Tous les trois mois.",
        "Et en 2024, l'UNICEF s'installa à Coléah pour les enfants.",
        "Je dis : je veux en être champion. Et ils dirent oui.",
    ] },
    { title: "Les chaussures", image: "/images/naby/naby-p17.png", paragraphs: [
        "Je suis revenu au stade de la Mission, à Kaloum. Le même endroit où j'avais joué enfant.",
        "Une fille jouait là, pieds nus, et elle dribblait mieux que les autres.",
        "Elle me regarda et demanda : « Toi, tu es Naby ? » « Oui. » « Je veux être comme toi. »",
        "Je suis allé à Conakry, et je suis revenu avec un sac de chaussures. Une paire pour chaque enfant.",
        "Quand la fille a mis les chaussures neuves, elle a pleuré.",
        "Une mère m'a demandé : « Pourquoi tu fais ça ? »",
        "J'ai répondu : « Parce que je me souviens que moi, je n'en avais pas. »",
    ] },
    { title: "La boucle", image: "/images/naby/naby-p18.png", paragraphs: [
        "Voilà mon histoire.",
        "Quand tu es enfant, tu crois que le monde est petit. Puis tu découvres qu'il est grand.",
        "Mais tous les rêves sont faits pour être tentés.",
        "Toi aussi, travaille dur pour ton rêve.",
    ] },
    ],
  },
};
