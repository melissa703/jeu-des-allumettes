/* epique.js - Ambiance, démon, conseils, statistiques et trophées (FR / EN via t()) */
window.Epique = (function () {
  "use strict";
  const CLE = "allumettes-stats", $ = function (id) { return document.getElementById(id); };
  const VIDE = { parties: 0, victoires: 0, defaites: 0, serie: 0, meilleureSerie: 0, victoiresIA: 0, grandBrasier: false };
  // Les textes restent en français ici : ils sont traduits au moment de l'affichage avec t()
  const TROPHEES = [
    ["🔥", "Première flamme", "Gagner une partie", function (s) { return s.victoires >= 1; }],
    ["🎭", "Bourreau terrassé", "Battre l'IA", function (s) { return s.victoiresIA >= 1; }],
    ["⚔️", "Invaincu", "3 victoires d'affilée", function (s) { return s.meilleureSerie >= 3; }],
    ["💀", "Revenant", "Jouer 10 parties", function (s) { return s.parties >= 10; }],
    ["🏆", "Grand brasier", "Gagner avec 31 allumettes ou plus", function (s) { return s.grandBrasier; }]
  ];
  const PAROLES = {
    debut: ["Assieds-toi. Celui qui prend la dernière allumette survit.", "Ta main tremble… commençons.", "Chaque allumette est un souffle."],
    humain: ["Prudent… ou désespéré ?", "Hm. Intéressant.", "Tu joues avec le feu."],
    demon: ["Voilà qui te coûte cher.", "Je compte pour deux.", "Le piège se referme."],
    danger: ["Plus que {r}… sens-tu la chaleur ?"],
    gagne: ["Ta flamme s'éteint.", "Trop facile."],
    perd: ["Impossible… la dernière allumette est à toi."]
  };
  let mode = "deux", conseils = 3, phraseFin = "";
  const hasard = function (a) { return a[Math.floor(Math.random() * a.length)]; };
  function lire() { try { return Object.assign({}, VIDE, JSON.parse(localStorage.getItem(CLE) || "{}")); } catch (e) { return Object.assign({}, VIDE); } }
  function ecrire(s) { try { localStorage.setItem(CLE, JSON.stringify(s)); } catch (e) {} }

  function parle(texte) {
    const p = $("demon-parole"); if (!p) return;
    p.classList.remove("apparait"); void p.offsetWidth;
    p.textContent = texte ? "« " + texte + " »" : ""; p.classList.add("apparait");
  }
  function toast(msg) {
    const d = document.createElement("div"); d.className = "toast"; d.textContent = msg;
    document.body.appendChild(d); setTimeout(function () { d.remove(); }, 3200);
  }
  function majConseil() {
    const b = $("btn-conseil"); b.textContent = t("🔮 Conseil du sage ({n})", { n: conseils }); b.disabled = conseils <= 0;
  }

  let total = 17;
  function jauge(r) {
    let j = $("jauge");
    if (!j) { j = document.createElement("div"); j.id = "jauge"; j.className = "jauge"; j.innerHTML = "<i></i>"; $("zone-allumettes").before(j); }
    j.firstChild.style.width = (100 * r / total) + "%"; j.classList.toggle("rouge", r > 0 && r <= 4);
  }
  function serie() {
    const h = document.querySelector(".plateau-haut"); let b = $("serie-badge");
    if (!b) { b = document.createElement("span"); b.id = "serie-badge"; b.className = "badge-mode"; h.insertBefore(b, h.children[1]); }
    b.textContent = t("🔥 Série : {n}", { n: lire().serie });
  }
  function etincelles() {
    for (let i = 0; i < 16; i++) {
      const e = document.createElement("span"), a = Math.random() * 6.28, d = 60 + Math.random() * 130;
      e.className = "etincelle"; e.style.cssText = "left:50%;top:45%;--dx:" + Math.cos(a) * d + "px;--dy:" + Math.sin(a) * d + "px";
      document.body.appendChild(e); setTimeout(function () { e.remove(); }, 800);
    }
  }
  function confettis() {
    const C = ["#ffd35a", "#ff6b3d", "#7be0a5", "#8fb8ff", "#e58bff"];
    for (let i = 0; i < 90; i++) {
      const c = document.createElement("i"); c.className = "confetti";
      c.style.cssText = "left:" + Math.random() * 100 + "vw;background:" + C[i % 5] + ";animation-delay:" + Math.random() * 0.8 + "s;animation-duration:" + (2 + Math.random() * 2) + "s";
      document.body.appendChild(c); setTimeout(function () { c.remove(); }, 4800);
    }
  }
  function secousse() { document.body.classList.add("secoue"); setTimeout(function () { document.body.classList.remove("secoue"); }, 700); }

  function debut(cfg) {
    mode = cfg.mode; conseils = 3; total = cfg.nb; phraseFin = ""; majConseil(); jauge(total); serie();
    document.body.dataset.mode = mode;
    $("zone-allumettes").classList.remove("danger");
    parle(mode === "deux" ? "" : t(hasard(PAROLES.debut)));
  }
  function coup(etat, e) {
    jauge(etat.restantes); etincelles();
    $("zone-allumettes").classList.toggle("danger", etat.restantes > 0 && etat.restantes <= 4);
    if (mode === "deux" || etat.terminee) return;
    const humain = e.joueur === etat.joueurs[0].nom;
    if (humain && etat.restantes > 0 && etat.restantes <= 4) parle(t(hasard(PAROLES.danger), { r: etat.restantes }));
    else parle(t(hasard(humain ? PAROLES.humain : PAROLES.demon)));
  }
  function fin(etat, cfg) {
    const s = lire(), g = etat.gagnant, avant = TROPHEES.map(function (tr) { return tr[3](s); });
    s.parties++;
    if (cfg.mode === "deux") { s.victoires++; }
    else if (g.type === "humain") {
      s.victoires++; s.serie++; s.meilleureSerie = Math.max(s.meilleureSerie, s.serie);
      if (cfg.mode === "ia") s.victoiresIA++;
      if (etat.initial >= 31) s.grandBrasier = true;
    } else { s.defaites++; s.serie = 0; }
    ecrire(s);
    if (cfg.mode === "deux" || g.type === "humain") confettis(); else secousse();
    phraseFin = "";
    if (cfg.mode !== "deux") {
      phraseFin = hasard(g.type === "humain" ? PAROLES.perd : PAROLES.gagne);
      $("fin-resume").textContent += "  « " + t(phraseFin) + " »";
    }
    TROPHEES.forEach(function (tr, i) {
      if (!avant[i] && tr[3](s)) setTimeout(function () { toast(t("🏅 Trophée débloqué : {nom}", { nom: t(tr[1]) })); }, 900 + i * 400);
    });
  }

  function rendrePantheon() {
    const s = lire(), z = $("pantheon-contenu");
    const cases = [["Parties", s.parties], ["Victoires", s.victoires], ["Défaites", s.defaites], ["Meilleure série", s.meilleureSerie]];
    z.innerHTML = '<div class="stats">' + cases.map(function (c) { return "<div><b>" + c[1] + "</b><small>" + t(c[0]) + "</small></div>"; }).join("") + "</div>" +
      '<div class="trophees">' + TROPHEES.map(function (tr) {
        return '<div class="trophee' + (tr[3](s) ? " ok" : "") + '"><span>' + tr[0] + "</span><div><strong>" + t(tr[1]) + "</strong><small>" + t(tr[2]) + "</small></div></div>";
      }).join("") + "</div>";
  }
  const ancienne = window.afficherEcran;
  window.afficherEcran = function (id) { if (id === "ecran-pantheon") rendrePantheon(); ancienne(id); };

  /** Retraduit les textes créés par ce fichier quand la langue change */
  function actualiserLangue() {
    majConseil();
    if ($("serie-badge")) serie();
    if ($("ecran-pantheon").classList.contains("actif")) rendrePantheon();
    if (phraseFin && $("ecran-fin").classList.contains("actif")) $("fin-resume").textContent += "  « " + t(phraseFin) + " »";
  }
  // setTimeout 0 : s'exécute après le gestionnaire du bouton langue (main.js / ui.js)
  window.addEventListener("jeu:langue-change", function () { setTimeout(actualiserLangue, 0); });

  $("btn-conseil").addEventListener("click", function () {
    if (conseils <= 0 || !$("ecran-jeu").classList.contains("actif")) return;
    const r = Number($("compteur-restantes").textContent), n = r % 4 || 1;
    const b = document.querySelector('[data-retrait="' + n + '"]');
    if (!b || b.disabled) return;
    conseils--; majConseil();
    b.classList.add("conseil"); setTimeout(function () { b.classList.remove("conseil"); }, 2600);
    toast(r % 4 === 0 ? t("Position perdante : retire 1 et espère une erreur.") : t("Retire {n} : tu lui laisses un multiple de 4.", { n: n }));
  });
  document.addEventListener("keydown", function (e) {
    if (e.target.tagName === "INPUT" || !$("ecran-jeu").classList.contains("actif")) return;
    const b = document.querySelector('[data-retrait="' + e.key + '"]'); if (b && !b.disabled) b.click();
  });

  /* Braises flottantes en fond */
  (function () {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const c = $("braises-fond"), x = c.getContext("2d"); let W, H; const P = [];
    function taille() { W = c.width = innerWidth; H = c.height = innerHeight; }
    function neuve(init) { return { x: Math.random() * W, y: init ? Math.random() * H : H + 10, r: Math.random() * 2 + 0.5, v: Math.random() * 0.6 + 0.2, d: Math.random() * 6 }; }
    taille(); addEventListener("resize", taille);
    for (let i = 0; i < 60; i++) P.push(neuve(true));
    (function boucle() {
      x.clearRect(0, 0, W, H);
      P.forEach(function (p, i) {
        p.y -= p.v; p.d += 0.02; p.x += Math.sin(p.d) * 0.4;
        if (p.y < -10) P[i] = neuve(false);
        x.beginPath(); x.fillStyle = "rgba(255," + (110 + p.r * 30 | 0) + ",40," + (0.25 + p.r / 5) + ")";
        x.arc(p.x, p.y, p.r, 0, 7); x.fill();
      });
      requestAnimationFrame(boucle);
    })();
  })();

  return { debut: debut, coup: coup, fin: fin, actualiserLangue: actualiserLangue };
})();