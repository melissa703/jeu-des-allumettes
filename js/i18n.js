/* ==========================================================
   i18n.js (jeu) : français / anglais
   La langue vient du portfolio : jeu-allumettes/index.html?lang=en
   (sinon : choix mémorisé du portfolio, sinon français).
   - t("texte français", { variables })  -> traduit si lang = en
   - Les textes déjà présents dans la page sont traduits au chargement.
   ========================================================== */
(function () {
  "use strict";

  var EN = {
  "Le jeu des allumettes": "The matchstick game",
  "Son": "Sound",
  "Le jeu": "The",
  "des allumettes": "matchstick game",
  "Retirez 1, 2 ou 3 allumettes à chaque tour. Celui qui prend la dernière a gagné.": "Remove 1, 2 or 3 matchsticks each turn. Whoever takes the last one wins.",
  "Nouvelle partie": "New game",
  "Découvrir les règles": "Read the rules",
  "Quitter": "Quit",
  "Nombre d'allumettes au départ": "Number of matchsticks at the start",
  "Mode de jeu": "Game mode",
  "Deux joueurs": "Two players",
  "Sur le même ordinateur": "On the same computer",
  "Contre la machine": "Against the machine",
  "Elle joue au hasard": "It plays at random",
  "Contre l'IA": "Against the AI",
  "Elle joue pour gagner": "It plays to win",
  "Nom du joueur 1": "Player 1 name",
  "Nom du joueur 2": "Player 2 name",
  "Retour": "Back",
  "Commencer la partie": "Start the game",
  "Abandonner": "Give up",
  "Joueur 1": "Player 1",
  "allumettes restantes": "matchsticks left",
  "Joueur 2": "Player 2",
  "Retirer 1 allumette": "Remove 1 matchstick",
  "Retirer 2 allumettes": "Remove 2 matchsticks",
  "Retirer 3 allumettes": "Remove 3 matchsticks",
  "Derniers coups": "Latest moves",
  "Partie terminée": "Game over",
  "Joueur 1 gagne !": "Player 1 wins!",
  "Rejouer": "Play again",
  "Retour à l'accueil": "Back to home",
  "Règles du jeu": "Game rules",
  "L'objectif": "The goal",
  "Être celui qui retire la": "Be the one who removes the",
  "dernière allumette": "last matchstick",
  ". Celui qui la retire a gagné.": ". Whoever removes it wins.",
  "À chaque tour": "Each turn",
  "Retire": "Remove",
  "1, 2 ou 3": "1, 2 or 3",
  "allumettes du tas. Pas plus que ce qu'il en reste. Puis c'est à l'autre joueur.": "matchsticks from the pile. No more than what is left. Then it is the other player's turn.",
  "Les modes": "The modes",
  "Deux joueurs :": "Two players:",
  "vous jouez à tour de rôle sur le même ordinateur.": "you take turns on the same computer.",
  "Contre la machine :": "Against the machine:",
  "elle retire un nombre au hasard.": "it removes a random number.",
  "Contre l'IA :": "Against the AI:",
  "elle calcule ses coups pour gagner.": "it calculates its moves to win.",
  "Exemple de partie": "Example game",
  "Il reste 4 allumettes. C'est à Tom.": "4 matchsticks left. It's Tom's turn.",
  "Tom en retire 1. Il en reste 3.": "Tom removes 1. 3 are left.",
  "Léa retire les 3 dernières.": "Léa removes the last 3.",
  "Léa gagne, Tom perd.": "Léa wins, Tom loses.",
  "À bientôt !": "See you soon!",
  "La flamme est éteinte. Revenez quand vous voulez.": "The flame is out. Come back whenever you like.",
  "Rallumer": "Light again",
  "Couper le son": "Mute sound",
  "Activer le son": "Turn sound on",
  "Historique des coups": "Move history",
  "Muet": "Muted",
  "Victoire": "Victory",
  "Défaite": "Defeat",
  "Ton nom": "Your name",
  "allumette restante": "matchstick left",
  "La machine": "The machine",
  "L'IA": "The AI",
  "À toi de jouer, {nom}.": "Your turn, {nom}.",
  "{nom} réfléchit": "{nom} is thinking",
  " retire {n} allumette — reste : {r}": " removes {n} matchstick — left: {r}",
  " retire {n} allumettes — reste : {r}": " removes {n} matchsticks — left: {r}",
  "{nom} gagne !": "{nom} wins!",
  "{nom} a retiré la dernière allumette et remporte la partie.": "{nom} took the last matchstick and wins the game.",
  "{n} coups joués, {i} allumettes au départ.": "{n} moves played, {i} matchsticks at the start.",
  "Entre un nombre entier d'allumettes entre 1 et {max}.": "Enter a whole number of matchsticks between 1 and {max}.",
  "Saisis un nom pour chaque joueur.": "Enter a name for each player.",
  "Les deux joueurs doivent avoir des noms différents.": "The two players must have different names.",
  "Saisis ton nom.": "Enter your name.",
  "Choisis un autre nom.": "Choose another name.",
  "Parties": "Games",
  "Victoires": "Wins",
  "Défaites": "Defeats",
  "Meilleure série": "Best streak",
  "Première flamme": "First flame",
  "Gagner une partie": "Win a game",
  "Bourreau terrassé": "Executioner slain",
  "Battre l'IA": "Beat the AI",
  "Invaincu": "Unbeaten",
  "3 victoires d'affilée": "3 wins in a row",
  "Revenant": "Revenant",
  "Jouer 10 parties": "Play 10 games",
  "Grand brasier": "Great blaze",
  "Gagner avec 31 allumettes ou plus": "Win with 31 matchsticks or more",
  "Assieds-toi. Celui qui prend la dernière allumette survit.": "Sit down. Whoever takes the last matchstick survives.",
  "Ta main tremble… commençons.": "Your hand trembles… let's begin.",
  "Chaque allumette est un souffle.": "Every matchstick is a breath.",
  "Prudent… ou désespéré ?": "Careful… or desperate?",
  "Hm. Intéressant.": "Hm. Interesting.",
  "Tu joues avec le feu.": "You're playing with fire.",
  "Voilà qui te coûte cher.": "That will cost you dearly.",
  "Je compte pour deux.": "I count for two.",
  "Le piège se referme.": "The trap closes.",
  "Plus que {r}… sens-tu la chaleur ?": "Only {r} left… can you feel the heat?",
  "Ta flamme s'éteint.": "Your flame is dying.",
  "Trop facile.": "Too easy.",
  "Impossible… la dernière allumette est à toi.": "Impossible… the last matchstick is yours.",
  "Position perdante : retire 1 et espère une erreur.": "Losing position: remove 1 and hope for a mistake.",
  "Retire {n} : tu lui laisses un multiple de 4.": "Remove {n}: you leave them a multiple of 4.",
  "{nom} retire {n} allumette.": "{nom} removes {n} matchstick.",
  "{nom} retire {n} allumettes.": "{nom} removes {n} matchsticks.",
  "🏅 Trophée débloqué : {nom}": "🏅 Trophy unlocked: {nom}",
  "🔥 Série : {n}": "🔥 Streak: {n}",
  "🔮 Conseil du sage ({n})": "🔮 Sage's advice ({n})",
  "Panthéon": "Pantheon"
};

  var lang = "fr";
  try {
    var q = new URLSearchParams(location.search).get("lang");
    if (q === "en" || q === "fr") lang = q;
    else if (localStorage.getItem("portfolio-lang") === "en") lang = "en";
  } catch (e) { /* stockage indisponible : on reste en français */ }

  function norm(s) { return String(s).replace(/\s+/g, " ").trim(); }

  /* Dictionnaire inverse (anglais -> français) pour pouvoir revenir en arrière */
  var FR = {};
  Object.keys(EN).forEach(function (k) { FR[norm(EN[k])] = k; });

  /** Traduit (clé exacte d'abord, puis sans espaces superflus) et remplace les {variables} */
  function t(fr, vars) {
    var out = fr;
    if (lang === "en") {
      var en = EN[fr];
      if (en === undefined) en = EN[norm(fr)];
      if (en !== undefined) out = en;
    }
    if (vars) {
      out = out.replace(/\{(\w+)\}/g, function (m, k) { return vars[k] !== undefined ? vars[k] : m; });
    }
    return out;
  }
  window.t = t;
  window.LANGUE = lang;
  window.getLangue = function () { return lang; };

  /* ---------- Traduction de la page (réversible) ---------- */
  var originaux = new WeakMap();      // nœud texte -> texte français d'origine
  var origAttr = new WeakMap();       // élément -> { aria-label: texte français }

  /** Texte à afficher pour une valeur donnée, selon la langue demandée */
  function convertir(valeur, vers) {
    var cle = norm(valeur);
    var dico = vers === "en" ? EN : FR;
    var res = dico[cle];
    if (res === undefined) return null;
    var m = valeur.match(/^(\s*)[\s\S]*?(\s*)$/);
    return m[1] + res + m[2];
  }

  function appliquerPage(vers) {
    document.documentElement.lang = vers;
    var tit = convertir(document.title, vers);
    if (tit !== null) document.title = tit.trim();

    var tw = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    var n, nodes = [];
    while ((n = tw.nextNode())) nodes.push(n);
    nodes.forEach(function (node) {
      var p = node.parentElement;
      if (!p || p.tagName === "SCRIPT" || p.tagName === "STYLE") return;
      if (vers === "en") {
        var en = convertir(node.nodeValue, "en");
        if (en === null) return;
        if (!originaux.has(node)) originaux.set(node, node.nodeValue);
        node.nodeValue = en;
      } else {
        if (originaux.has(node)) { node.nodeValue = originaux.get(node); originaux.delete(node); }
        else {
          var fr = convertir(node.nodeValue, "fr");
          if (fr !== null) node.nodeValue = fr;
        }
      }
    });

    document.querySelectorAll("[aria-label]").forEach(function (el) {
      var cur = el.getAttribute("aria-label");
      if (vers === "en") {
        var en = EN[norm(cur)];
        if (en === undefined) return;
        if (!origAttr.has(el)) origAttr.set(el, cur);
        el.setAttribute("aria-label", en);
      } else {
        var fr = origAttr.has(el) ? origAttr.get(el) : FR[norm(cur)];
        if (fr !== undefined) { el.setAttribute("aria-label", fr); origAttr.delete(el); }
      }
    });

    /* Noms par défaut des joueurs (on ne touche pas aux noms saisis par la personne) */
    ["champ-nom1-saisie", "champ-nom2-saisie"].forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      var v = el.value;
      if (vers === "en" && EN[v] !== undefined) el.value = EN[v];
      else if (vers === "fr" && FR[v] !== undefined) el.value = FR[v];
    });

    /* Le bouton affiche la langue vers laquelle on peut basculer */
    var bt = document.getElementById("btn-langue-texte");
    if (bt) bt.textContent = vers === "en" ? "FR" : "EN";
    var bl = document.getElementById("btn-langue");
    if (bl) bl.setAttribute("aria-label", vers === "en" ? "Passer en français" : "Switch language");
  }

  /** Change la langue du jeu (appelée par le bouton 🌐) */
  window.setLangue = function (nouvelle) {
    if (nouvelle !== "en" && nouvelle !== "fr") return;
    lang = nouvelle;
    window.LANGUE = lang;
    try { localStorage.setItem("portfolio-lang", lang); } catch (e) { /* ignoré */ }
    appliquerPage(lang);
    window.dispatchEvent(new CustomEvent("jeu:langue-change", { detail: { lang: lang } }));
  };

  if (lang === "en") appliquerPage("en");
})();
