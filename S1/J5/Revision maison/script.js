/**Quelques sélecteurs courants
 * document.getElementById("id");
 ✅ Utilisation :
Sélectionne un élément unique ayant l'attribut id="id".

let titre = document.getElementById("monTitre");
🔁 Retourne :
Un unique élément HTML (HTMLElement) ou null s'il n'existe pas.

 * document.getElementsByClassName("Class");
✅ Utilisation :
Sélectionne tous les éléments qui ont une certaine classe CSS.

let blocs = document.getElementsByClassName("carte");
🔁 Retourne :
Une HTMLCollection (semblable à un tableau) d'éléments HTML.
👉 Il faut parcourir avec une boucle (for, for...of, etc.).

 * document.getElementsByTagName("tag");
✅ Utilisation :
Sélectionne tous les éléments d’un type de balise (comme p, div, ul, etc.).

let paragraphes = document.getElementsByTagName("p");
🔁 Retourne :
Une HTMLCollection contenant tous les éléments de ce type.

 * document.querySelector("selector");
✅ Utilisation :
Sélectionne le premier élément qui correspond à un sélecteur CSS (id, classe, tag, combinaison...).

let premier = document.querySelector(".carte");
🔁 Retourne :
Un élément HTML unique (HTMLElement) ou null.

 * document.querySelectorAll("selctor")
✅ Utilisation :
Sélectionne tous les éléments qui correspondent à un sélecteur CSS.

let tous = document.querySelectorAll("ul > li");
🔁 Retourne :
Une NodeList (semblable à un tableau, mais plus flexible que HTMLCollection — permet forEach).

Entrons dans le détail des vérifications à faire pour chaque méthode de sélection du DOM, avec explication, bonnes pratiques, et exemples concrets.

✅ 1. document.getElementById("id")
🔁 Retourne :
Un élément HTML unique (HTMLElement)

ou null si aucun élément avec cet id n’existe.

✅ Vérification recommandée :
let el = document.getElementById("monId");
if (el) {
  el.textContent = "Trouvé !";
} else {
  console.warn("Élément introuvable !");
}
✅ 2. document.querySelector("selector")
🔁 Retourne :
Le premier élément qui correspond au sélecteur CSS

ou null s’il n’en trouve aucun.

✅ Vérification recommandée :
let el = document.querySelector(".maClasse");
if (el !== null) {
  el.style.color = "green";
} else {
  console.error("Aucun élément trouvé avec ce sélecteur");
}
✅ 3. document.getElementsByClassName("nomClasse")
🔁 Retourne :
Une HTMLCollection (ressemble à un tableau)

Si aucun élément trouvé → collection vide (pas null).

✅ Vérification recommandée :
let elements = document.getElementsByClassName("info");

if (elements.length > 0) {
  for (let el of elements) {
    el.style.backgroundColor = "yellow";
  }
} else {
  console.warn("Aucun élément avec la classe 'info'");
}
✅ 4. document.getElementsByTagName("tag")
🔁 Retourne :
Une HTMLCollection de tous les éléments du tag

Peut être vide (longueur 0), mais jamais null.

✅ Vérification recommandée :
let sections = document.getElementsByTagName("section");

if (sections.length > 0) {
  sections[0].textContent = "Section trouvée !";
} else {
  console.warn("Aucune section trouvée !");
}
✅ 5. document.querySelectorAll("selector")
🔁 Retourne :
Une NodeList (semblable à un tableau, supporte forEach)

Peut être vide si aucun élément ne correspond (mais jamais null).

✅ Vérification recommandée :
let titres = document.querySelectorAll("h2.titre");

if (titres.length > 0) {
  titres.forEach(titre => {
    titre.style.border = "1px solid red";
  });
} else {
  console.warn("Aucun titre trouvé !");
}

🧠 Résumé visuel

| Méthode                    | Retourne quoi ?         | Null possible ? | Vérif recommandée          |
| -------------------------- | ----------------------- | --------------- | -------------------------- |
| `getElementById()`         | `HTMLElement` ou `null` | ✅ Oui           | `if (el)`                  |
| `querySelector()`          | `HTMLElement` ou `null` | ✅ Oui           | `if (el !== null)`         |
| `getElementsByClassName()` | `HTMLCollection`        | ❌ Non           | `if (elements.length > 0)` |
| `getElementsByTagName()`   | `HTMLCollection`        | ❌ Non           | `if (elements.length > 0)` |
| `querySelectorAll()`       | `NodeList`              | ❌ Non           | `if (elements.length > 0)` |

✅ Qu'est-ce qu'une fonction générique ?
Une fonction générique en JavaScript est une fonction :
qui accomplit une tâche commune ou fréquente,
qui accepte des paramètres (ex : un sélecteur),
et qui peut être réutilisée partout dans ton code.

function alerter(message, type) {
  const conteneur = document.getElementById("alerte");
  conteneur.textContent = message;

  // Appliquer un style selon le type
  if (type === "success") {
    conteneur.style.color = "green";
  } else if (type === "error") {
    conteneur.style.color = "red";
  } else {
    conteneur.style.color = "black";
  }

  // Optionnel : faire disparaître l’alerte après 3 secondes
  setTimeout(() => {
    conteneur.textContent = "";
  }, 3000);
}


📌 Exemple concret : safeSelect

function safeSelect(selector) {
  let el = document.querySelector(selector);
  if (!el) {
    console.warn(`Aucun élément trouvé pour : ${selector}`);
  }
  return el;
}



// 1. ID
let div = document.getElementById("contenu");
if (div) div.style.color = "blue";

// 2. Classe
let infos = document.getElementsByClassName("info");
if (infos.length > 0) {
  for (let el of infos) el.style.fontSize = "18px";
}

// 3. Tag
let ps = document.getElementsByTagName("p");
if (ps.length > 0) ps[0].style.fontWeight = "bold";

// 4. querySelector
let h2 = document.querySelector("h2.titre");
if (h2) h2.textContent = "Titre modifié";

// 5. querySelectorAll
let tous = document.querySelectorAll("p.info");
if (tous.length > 0) {
  tous.forEach(p => p.style.backgroundColor = "lightgray");
}

 */

/*
    Voici une liste des événements les plus courants, avec leur description, et leur mode d’utilisation.

✅ 1. click
📌 Quand : L’utilisateur clique sur un élément (souris gauche).
💡 Utilisé pour : boutons, liens, interactions.
🔧 Utilisation :
document.getElementById("monBouton").addEventListener("click", function() {
  alert("Bouton cliqué !");
});

✅ 2. mouseover / mouseout
📌 Quand : La souris entre ou quitte un élément.
💡 Utilisé pour : effets de survol, menus, infobulles.
🔧 Utilisation :
let zone = document.getElementById("zone");
zone.addEventListener("mouseover", () => {
  zone.style.backgroundColor = "lightblue";
});
zone.addEventListener("mouseout", () => {
  zone.style.backgroundColor = "";
});

✅ 3. keydown / keyup
📌 Quand : Une touche du clavier est enfoncée ou relâchée.
💡 Utilisé pour : jeux, raccourcis clavier, champs de texte.
🔧 Utilisation :
document.addEventListener("keydown", (event) => {
  console.log("Touche pressée : " + event.key);
});

✅ 4. input / change
📌 Quand : L’utilisateur modifie un champ (input, textarea, select).
input = à chaque frappe

change = quand l’utilisateur termine (perd le focus ou valide)

🔧 Utilisation :
document.getElementById("champTexte").addEventListener("input", function() {
  console.log("Texte modifié : " + this.value);
});

✅ 5. submit
📌 Quand : Un formulaire est soumis.
💡 Utilisé pour : empêcher l’envoi, valider les champs.
🔧 Utilisation :
document.getElementById("monFormulaire").addEventListener("submit", function(e) {
  e.preventDefault(); // empêche l'envoi
  alert("Formulaire intercepté !");
});

✅ 6. load
📌 Quand : La page ou une image est complètement chargée.
🔧 Utilisation :
window.addEventListener("load", () => {
  console.log("Page totalement chargée !");
});

✅ 7. resize
📌 Quand : La fenêtre du navigateur change de taille.
🔧 Utilisation :
window.addEventListener("resize", () => {
  console.log("Nouvelle taille : " + window.innerWidth);
});

✅ 8. scroll
📌 Quand : L’utilisateur fait défiler une page ou un élément.
🔧 Utilisation :
js
Copier le code
window.addEventListener("scroll", () => {
  console.log("Défilement détecté !");
});

✅ 9. focus / blur
📌 Quand : Un champ reçoit ou perd le focus (le curseur).
🔧 Utilisation :
let champ = document.getElementById("nom");
champ.addEventListener("focus", () => {
  champ.style.borderColor = "green";
});
champ.addEventListener("blur", () => {
  champ.style.borderColor = "";
});

✅ 10. dblclick
📌 Quand : L’utilisateur double-clique sur un élément.
🔧 Utilisation :
document.getElementById("texte").addEventListener("dblclick", () => {
  alert("Double clic détecté !");
});

🧠 Remarques :
Préférer addEventListener() au lieu de .onclick =, car il permet d’attacher plusieurs événements sans écraser les anciens.

Les événements peuvent être captés sur n’importe quel élément HTML.

📌 Résumé rapide :

| Événement   | Quand il se déclenche | Éléments courants       |
| ----------- | --------------------- | ----------------------- |
| `click`     | Clic souris           | Bouton, div             |
| `mouseover` | Survol de souris      | Images, menus           |
| `keydown`   | Appui d’une touche    | Page, input             |
| `input`     | Texte modifié         | `<input>`, `<textarea>` |
| `submit`    | Formulaire envoyé     | `<form>`                |
| `load`      | Fin de chargement     | `window`, `<img>`       |
| `scroll`    | Défilement            | `window`, div           |
| `focus`     | Curseur dans un champ | `<input>`               |
| `blur`      | Perte de focus        | `<input>`               |
| `dblclick`  | Double clic           | Tous                    |



**Voici les propriétés les plus courantes, classées par usage :

✅ 1. textContent
🔹 Sert à lire ou modifier le texte brut à l’intérieur d’un élément (sans HTML).

🔧 Exemple :
document.getElementById("titre").textContent = "Nouveau texte";

🔹 Exercice : Modifier dynamiquement le texte d’un titre <h1> au clic sur un bouton.
function changerTexte() {
  document.getElementById("titre").textContent = "Titre modifié par JS";
}

✅ 2. innerHTML
🔹 Permet d’obtenir ou d’insérer du contenu HTML à l’intérieur d’un élément.

⚠️ Attention : peut introduire des failles XSS si on insère du contenu non contrôlé.

🔧 Exemple :
document.getElementById("contenu").innerHTML = "<strong>Important</strong>";
🔹 Exercice : Insérer une balise <strong> dans une div vide après un clic.
function ajouterHTML() {
  document.getElementById("contenu").innerHTML = "<strong>Texte important</strong>";
}


✅ 3. value
🔹 Sert à lire ou définir la valeur d’un champ de formulaire : <input>, <textarea>, <select>, etc.

🔧 Exemple :
let nom = document.getElementById("nom").value;
document.getElementById("nom").value = "Alpha";

🔹 Exercice : Récupérer la valeur saisie par l’utilisateur dans un champ et l’afficher dans un paragraphe.
function afficherNom() {
  let nom = document.getElementById("nom").value;
  document.getElementById("affichage").textContent = "Bonjour " + nom;
}

✅ 4. style
🔹 Permet de modifier le style CSS en ligne d’un élément.

Accès direct aux propriétés CSS (avec nom camelCase).

🔧 Exemple :
document.getElementById("box").style.backgroundColor = "red";

🔹 Exercice : Changer la couleur et la taille d’un bloc au clic.
function changerStyle() {
  let box = document.getElementById("box");
  box.style.backgroundColor = "red";
  box.style.width = "150px";
  box.style.border = "2px solid black";
}

✅ 5. classList
🔹 Pour ajouter, retirer ou vérifier des classes CSS.

🔧 Méthodes utiles :
element.classList.add("active");
element.classList.remove("masqué");
element.classList.toggle("visible");
element.classList.contains("erreur");

🔹 Exercice : Ajouter ou retirer une classe active pour styliser dynamiquement un élément.
<p id="texte" class="normal">Ceci est un paragraphe.</p>
<button onclick="toggleStyle()">Activer/Désactiver style</button>

<style>
  .active { color: green; font-weight: bold; }
</style>
function toggleStyle() {
  document.getElementById("texte").classList.toggle("active");
}

✅ 6. id / className
🔹 Pour accéder ou changer l’identifiant (id) ou la classe (className) d’un élément.

🔧 Exemple :
element.id = "nouvelID";
element.className = "maClasse";
⚠️ className remplace toutes les classes. Pour ajouter sans supprimer les autres, mieux vaut utiliser classList.

🔹 Exercice : Modifier l'ID et la classe d’un élément après un événement.
<div id="bloc" class="initial">Bloc d'origine</div>
<button onclick="changerInfos()">Changer ID/Classe</button>

function changerInfos() {
  let el = document.getElementById("bloc");
  el.id = "nouveauBloc";
  el.className = "modifie";
}

✅ 7. disabled
🔹 Active ou désactive un champ ou un bouton.

🔧 Exemple :
document.getElementById("submitBtn").disabled = true;

🔹 Exercice : Désactiver un bouton après un clic pour éviter le double envoi.
<button id="envoyer" onclick="desactiver()">Envoyer</button>
function desactiver() {
  document.getElementById("envoyer").disabled = true;
}

✅ 8. checked
🔹 Pour les checkbox ou radio, indique si c’est coché ou non.

🔧 Exemple :
if (document.getElementById("newsletter").checked) {
  alert("Vous êtes abonné !");
}

🔹 Exercice : Vérifier si une case à cocher est activée et afficher un message.
<input type="checkbox" id="newsletter"> S'abonner
<button onclick="verifier()">Valider</button>

function verifier() {
  let isChecked = document.getElementById("newsletter").checked;
  if (isChecked) {
    alert("Vous êtes abonné !");
  } else {
    alert("Vous n'êtes pas abonné.");
  }
}

✅ 9. src, href, alt, title, etc.
🔹 Propriétés spécifiques à certains éléments HTML :
document.getElementById("img").src = "nouvelle-image.jpg";
document.getElementById("lien").href = "https://exemple.com";

🔹 Exercice : Changer l’image et le lien d’un élément dynamiquement.
<img id="photo" src="old.jpg" alt="ancienne image" width="100">
<a id="lien" href="https://ancien.com">Lien initial</a>
<button onclick="changerMedia()">Changer</button>

function changerMedia() {
  document.getElementById("photo").src = "new.jpg";
  document.getElementById("photo").alt = "nouvelle image";
  document.getElementById("lien").href = "https://nouveau.com";
  document.getElementById("lien").textContent = "Nouveau lien";
}


✅ 10. children, parentNode, firstChild, nextSibling (navigation DOM)
🔹 Utilisé pour parcourir la structure DOM :
let premierEnfant = document.getElementById("liste").firstChild;
let parent = element.parentNode;

📌 Résumé rapide des plus utilisés :
| Propriété        | Utilité principale                 |
| ---------------- | ---------------------------------- |
| `textContent`    | Lire/écrire du texte brut          |
| `innerHTML`      | Lire/écrire du contenu HTML        |
| `value`          | Lire/écrire la valeur d’un champ   |
| `style`          | Modifier les styles CSS            |
| `classList`      | Ajouter/supprimer des classes CSS  |
| `id`             | Lire ou modifier l’ID d’un élément |
| `disabled`       | Activer/désactiver un champ        |
| `checked`        | Lire/écrire l’état coché           |
| `src`, `href`    | Gérer les liens et les images      |
| `children`, etc. | Naviguer dans la structure du DOM  |

🔹 Exercice : Naviguer dans un élément parent et modifier un enfant.
<ul id="liste">
  <li>Premier</li>
  <li>Deuxième</li>
  <li>Troisième</li>
</ul>
<button onclick="modifierPremier()">Changer premier</button>

function modifierPremier() {
  let ul = document.getElementById("liste");
  ul.children[0].textContent = "Premier modifié";
}

Autres exemples :
let parent = document.getElementById("liste").parentNode;
let premierEnfant = document.getElementById("liste").firstChild;
let suivant = document.getElementById("liste").children[0].nextSibling;

*/

let element_h1 = document.getElementById("titre_1");
element_h1.textContent = "Je suis le titre ecrit pas JS";
let element_div = document.getElementById("contenu");
element_div.textContent = "Je suis inclu par du JS"
element_div.style.color = "#f00"

let element_input = document.getElementById("nom");
element_input.value = "Bonjour"