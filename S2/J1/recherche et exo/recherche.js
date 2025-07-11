/** ✅ Méthodes les plus utilisées de String en JavaScript
 * 
 * 🔹 Informations sur la chaîne
 * 
 * | Méthode             | Description               | Exemple                  |
| ------------------- | ------------------------- | ------------------------ |
| `length`            | Donne la longueur         | `"chat".length → 4`      |
| `charAt(index)`     | Caractère à l’index donné | `"chat".charAt(1) → "h"` |
| `charCodeAt(index)` | Code Unicode du caractère | `"A".charCodeAt(0) → 65` |
| `[index]`           | Accès direct              | `"chat"[2] → "a"`        |


🔹 Rechercher / Tester du texte

| Méthode            | Description                            | Exemple                              |
| ------------------ | -------------------------------------- | ------------------------------------ |
| `indexOf(val)`     | Position de la **1ère** occurrence     | `"bonjour".indexOf("o") → 1`         |
| `lastIndexOf(val)` | Position de la **dernière** occurrence | `"bonjour".lastIndexOf("o") → 5`     |
| `includes(val)`    | Contient cette valeur ? (true/false)   | `"bonjour".includes("jour") → true`  |
| `startsWith(val)`  | Commence par ?                         | `"bonjour".startsWith("bon") → true` |
| `endsWith(val)`    | Finit par ?                            | `"bonjour".endsWith("jour") → true`  |


🔹 Extraire une sous-chaîne

| Méthode                 | Description                                  | Exemple                             |
| ----------------------- | -------------------------------------------- | ----------------------------------- |
| `slice(start, end)`     | Extrait selon index (supporte index négatif) | `"bonjour".slice(0, 3) → "bon"`     |
| `substring(start, end)` | Idem, mais **sans index négatif**            | `"bonjour".substring(0, 3) → "bon"` |
| `substr(start, length)` | Extrait selon **longueur** *(ancienne)*      | `"bonjour".substr(0, 3) → "bon"`    |


🔹 Modifier une chaîne

| Méthode                       | Description                         | Exemple                                             |
| ----------------------------- | ----------------------------------- | --------------------------------------------------- |
| `toUpperCase()`               | Met en majuscules                   | `"chat".toUpperCase() → "CHAT"`                     |
| `toLowerCase()`               | Met en minuscules                   | `"CHAT".toLowerCase() → "chat"`                     |
| `trim()`                      | Supprime les espaces autour         | `"  bonjour  ".trim() → "bonjour"`                  |
| `trimStart()` / `trimEnd()`   | Supprime début ou fin               | `"  bonjour".trimStart() → "bonjour"`               |
| `replace(ancien, nouveau)`    | Remplace la **1re** occurrence      | `"jour nuit".replace("jour", "soir") → "soir nuit"` |
| `replaceAll(ancien, nouveau)` | Remplace **toutes** les occurrences | `"le le le".replaceAll("le", "la") → "la la la"`    |


🔹 Couper / Diviser / Fusionner

| Méthode             | Description               | Exemple                              |
| ------------------- | ------------------------- | ------------------------------------ |
| `split(séparateur)` | Coupe en tableau          | `"a,b,c".split(",") → ["a","b","c"]` |
| `concat(val)`       | Concatène des chaînes     | `"bon".concat("jour") → "bonjour"`   |
| `repeat(n)`         | Répète la chaîne `n` fois | `"ha".repeat(3) → "hahaha"`          |


🔹 Recherche avancée avec regex

| Méthode                | Description                                       | Exemple                                 |
| ---------------------- | ------------------------------------------------- | --------------------------------------- |
| `match(regexp)`        | Cherche des correspondances (retourne un tableau) | `"abc123".match(/\d+/) → ["123"]`       |
| `matchAll(regexp)`     | Toutes les correspondances (ES2020)               | `for (let m of "a1b2".matchAll(/\d/g))` |
| `search(regexp)`       | Retourne l’index de la correspondance             | `"abc123".search(/\d/) → 3`             |
| `replace(regexp, val)` | Remplace avec une expression régulière            | `"abc123".replace(/\d+/, "#") → "abc#"` |


📌 Astuce : chaînes sont immutables
Chaque méthode retourne une nouvelle chaîne. La chaîne d’origine n’est jamais modifiée.

✅ Bonus : Cas d’usage combiné
let phrase = "  JavaScript est génial!  ";

let propre = phrase.trim().toLowerCase().replace("génial", "puissant");
console.log(propre); // "javascript est puissant!"

__________________________________🏆 TOP 10 des méthodes String les plus utilisées_____________________________
let nom = "  Jean Dupont  ";

// 1. Nettoyage
let propre = nom.trim(); // "Jean Dupont"

// 2. Recherche
propre.includes("Dupont"); // true

// 3. Comparaison sans casse
let role = "admin";
if (role.toLowerCase() === "admin") {
  console.log("Accès autorisé");
}

// 4. Remplacement
let phrase = "JS est nul";
phrase = phrase.replace("nul", "génial"); // "JS est génial"

// 5. Extraction
let sousPhrase = phrase.slice(0, 7); // "JS est "


 ____________Exemples concrets

 let nom = "  Jean Dupont  ";

// 1. Nettoyage
let propre = nom.trim(); // "Jean Dupont"

// 2. Recherche
propre.includes("Dupont"); // true

// 3. Comparaison sans casse
let role = "admin";
if (role.toLowerCase() === "admin") {
  console.log("Accès autorisé");
}

// 4. Remplacement
let phrase = "JS est nul";
phrase = phrase.replace("nul", "génial"); // "JS est génial"

// 5. Extraction
let sousPhrase = phrase.slice(0, 7); // "JS est "




****______________________________LES METHODES DE MANUPILATION DES NUMBERS, Tableaux, Objets.

✅ Les 10 méthodes les plus utilisées avec Number et Math

| Méthode         | Description rapide                       | Exemple                            |
| --------------- | ---------------------------------------- | ---------------------------------- |
| `parseInt()`    | Convertit une chaîne en entier           | `parseInt("15.5")` → `15`          |
| `parseFloat()`  | Convertit une chaîne en nombre à virgule | `parseFloat("15.5")` → `15.5`      |
| `Number()`      | Convertit en nombre                      | `Number("42")` → `42`              |
| `toFixed(n)`    | Arrondit avec `n` décimales (chaîne)     | `(3.14159).toFixed(2)` → `"3.14"`  |
| `Math.round()`  | Arrondi à l’entier le plus proche        | `Math.round(4.6)` → `5`            |
| `Math.floor()`  | Arrondi vers le bas                      | `Math.floor(4.9)` → `4`            |
| `Math.ceil()`   | Arrondi vers le haut                     | `Math.ceil(4.1)` → `5`             |
| `Math.random()` | Nombre aléatoire entre 0 et 1            | `Math.random()` → `0.73` (exemple) |
| `Math.max()`    | Renvoie la plus grande valeur            | `Math.max(1, 5, 10)` → `10`        |
| `Math.min()`    | Renvoie la plus petite valeur            | `Math.min(1, 5, 10)` → `1`         |


// ____________________✅ Exercices pratiques - Manipulation des nombres en JavaScript

// 🌟 Exercice 1 : Conversion de types
let chaine1 = "25.75";
let chaine2 = "100px";

let entier1 = parseInt(chaine1);       // 25
let flottant1 = parseFloat(chaine1);   // 25.75
let entier2 = parseInt(chaine2);       // 100

console.log("Ex1 - Entier 1 :", entier1);
console.log("Ex1 - Flottant 1 :", flottant1);
console.log("Ex1 - Entier 2 :", entier2);

// 🌟 Exercice 2 : Arrondir un nombre
let nombre = 7.567;

let arrondi = Math.round(nombre);      // 8
let arrondiBas = Math.floor(nombre);   // 7
let arrondiHaut = Math.ceil(nombre);   // 8
let deuxDecimales = nombre.toFixed(2); // "7.57"

console.log("Ex2 - Arrondi :", arrondi);
console.log("Ex2 - Bas :", arrondiBas);
console.log("Ex2 - Haut :", arrondiHaut);
console.log("Ex2 - Deux décimales :", deuxDecimales);

// 🌟 Exercice 3 : Nombres aléatoires
let aleatoire1 = Math.random(); // 0 à 1
let aleatoire2 = Math.floor(Math.random() * 10) + 1; // 1 à 10
let aleatoire3 = Math.floor(Math.random() * (100 - 50 + 1)) + 50; // 50 à 100

console.log("Ex3 - Aléatoire 0-1 :", aleatoire1);
console.log("Ex3 - Aléatoire 1-10 :", aleatoire2);
console.log("Ex3 - Aléatoire 50-100 :", aleatoire3);

// 🌟 Exercice 4 : Max et Min
let a = 15, b = 9, c = 22, d = 3;

let max = Math.max(a, b, c, d); // 22
let min = Math.min(a, b, c, d); // 3

console.log("Ex4 - Max :", max);
console.log("Ex4 - Min :", min);

// 🌟 Exercice 5 : Puissance et racine
let puissance = Math.pow(5, 3);    // 125
let racine = Math.sqrt(144);      // 12

console.log("Ex5 - 5^3 :", puissance);
console.log("Ex5 - √144 :", racine);

// 🌟 Exercice 6 : Test de validité
let val1 = "abc";
let val2 = "45";
let val3 = NaN;

console.log("Ex6 - val1 est NaN :", isNaN(val1)); // true
console.log("Ex6 - val2 est NaN :", isNaN(val2)); // false
console.log("Ex6 - val3 est NaN :", isNaN(val3)); // true

// 🌟 Exercice 7 : Formatage
let prix = 89.989;

let prixFormate = prix.toFixed(2) + " FG";      // "89.99 FG"
let prixBinaire = prix.toString(2);             // base 2 (binaire)

console.log("Ex7 - Prix formaté :", prixFormate);
console.log("Ex7 - Binaire :", prixBinaire);

_______________________✅ Correction des exercices pratiques

// 🌟 Exercice 1 : Conversion de types
let chaine1 = "25.75";
let chaine2 = "100px";

let entier1 = parseInt(chaine1);       // 25
let flottant1 = parseFloat(chaine1);   // 25.75
let entier2 = parseInt(chaine2);       // 100

console.log("Ex1 - Entier 1 :", entier1);
console.log("Ex1 - Flottant 1 :", flottant1);
console.log("Ex1 - Entier 2 :", entier2);

// 🌟 Exercice 2 : Arrondir un nombre
let nombre = 7.567;

let arrondi = Math.round(nombre);      // 8
let arrondiBas = Math.floor(nombre);   // 7
let arrondiHaut = Math.ceil(nombre);   // 8
let deuxDecimales = nombre.toFixed(2); // "7.57"

console.log("Ex2 - Arrondi :", arrondi);
console.log("Ex2 - Bas :", arrondiBas);
console.log("Ex2 - Haut :", arrondiHaut);
console.log("Ex2 - Deux décimales :", deuxDecimales);

// 🌟 Exercice 3 : Nombres aléatoires
let aleatoire1 = Math.random(); // 0 à 1
let aleatoire2 = Math.floor(Math.random() * 10) + 1; // 1 à 10
let aleatoire3 = Math.floor(Math.random() * (100 - 50 + 1)) + 50; // 50 à 100

console.log("Ex3 - Aléatoire 0-1 :", aleatoire1);
console.log("Ex3 - Aléatoire 1-10 :", aleatoire2);
console.log("Ex3 - Aléatoire 50-100 :", aleatoire3);

// 🌟 Exercice 4 : Max et Min
let a = 15, b = 9, c = 22, d = 3;

let max = Math.max(a, b, c, d); // 22
let min = Math.min(a, b, c, d); // 3

console.log("Ex4 - Max :", max);
console.log("Ex4 - Min :", min);

// 🌟 Exercice 5 : Puissance et racine
let puissance = Math.pow(5, 3);    // 125
let racine = Math.sqrt(144);      // 12

console.log("Ex5 - 5^3 :", puissance);
console.log("Ex5 - √144 :", racine);

// 🌟 Exercice 6 : Test de validité
let val1 = "abc";
let val2 = "45";
let val3 = NaN;

console.log("Ex6 - val1 est NaN :", isNaN(val1)); // true
console.log("Ex6 - val2 est NaN :", isNaN(val2)); // false
console.log("Ex6 - val3 est NaN :", isNaN(val3)); // true

// 🌟 Exercice 7 : Formatage
let prix = 89.989;

let prixFormate = prix.toFixed(2) + " FG";      // "89.99 FG"
let prixBinaire = prix.toString(2);             // base 2 (binaire)

console.log("Ex7 - Prix formaté :", prixFormate);
console.log("Ex7 - Binaire :", prixBinaire);
________________________________________________________________
// 
// ===============================
// ✅ MÉTHODES DE MANIPULATION DES TABLEAUX EN JAVASCRIPT
// ===============================

// === 🔁 BOUCLER ET TRANSFORMER ===

// 🌟 forEach() → Exécute une fonction pour chaque élément (sans retourner de nouveau tableau)
let fruits = ["pomme", "banane", "mangue"];
fruits.forEach(fruit => console.log("forEach:", fruit));

// 🌟 map() → Transforme chaque élément et retourne un **nouveau tableau**
let nombres = [1, 2, 3];
let doubles = nombres.map(n => n * 2); // [2, 4, 6]
console.log("map:", doubles);

// 🌟 filter() → Retourne un nouveau tableau contenant **les éléments qui passent un test**
let ages = [12, 18, 25, 30];
let majeurs = ages.filter(age => age >= 18); // [18, 25, 30]
console.log("filter:", majeurs);

// 🌟 reduce() → Réduit le tableau à une seule valeur (ex. somme)
let chiffres = [1, 2, 3, 4];
let somme = chiffres.reduce((acc, val) => acc + val, 0); // 10
console.log("reduce:", somme);

// 🌟 flatMap() → Comme map() suivi de flat(1), pour transformer et aplatir
let phrases = ["salut", "bon"];
let lettres = phrases.flatMap(p => p.split(""));
console.log("flatMap:", lettres); // ["s", "a", "l", "u", "t", "b", "o", "n"]

// === 🔍 RECHERCHER / TESTER ===

// 🌟 find() → Retourne le **premier élément** qui passe un test (ou `undefined`)
let noms = ["Ali", "Bob", "Charlie"];
let trouvé = noms.find(n => n.startsWith("C")); // "Charlie"
console.log("find:", trouvé);

// 🌟 findIndex() → Retourne l’index du premier élément qui passe un test
let index = noms.findIndex(n => n.startsWith("B"));
console.log("findIndex:", index); // 1

// 🌟 some() → Vérifie si **au moins un** élément passe le test
// 🌟 every() → Vérifie si **tous** les éléments passent le test
let notes = [12, 15, 9];
console.log("some:", notes.some(n => n < 10));    // true
console.log("every:", notes.every(n => n >= 10)); // false

// 🌟 includes() → Vérifie si une valeur existe dans le tableau
console.log("includes:", noms.includes("Bob")); // true

// 🌟 indexOf() → Retourne l’index de la première occurrence
// 🌟 lastIndexOf() → Retourne l’index de la dernière occurrence
let valeurs = [10, 20, 30, 20];
console.log("indexOf:", valeurs.indexOf(20));        // 1
console.log("lastIndexOf:", valeurs.lastIndexOf(20)); // 3

// === ✂️ EXTRAIRE OU COUPER DES ÉLÉMENTS ===

// 🌟 slice() → Extrait une portion du tableau sans modifier l’original
let animaux = ["chat", "chien", "lapin"];
let copie = animaux.slice(1, 3); // ["chien", "lapin"]
console.log("slice:", copie);

// 🌟 splice() → Modifie le tableau : supprime/remplace/ajoute des éléments
let couleurs = ["rouge", "vert", "bleu"];
couleurs.splice(1, 1, "jaune"); // enlève "vert", ajoute "jaune"
console.log("splice:", couleurs); // ["rouge", "jaune", "bleu"]

// 🌟 flat() → Aplati un tableau de tableaux en un seul niveau (ou plus)
let imbrique = [1, [2, [3, 4]]];
console.log("flat(1):", imbrique.flat(1)); // [1, 2, [3, 4]]
console.log("flat(2):", imbrique.flat(2)); // [1, 2, 3, 4]

// === 🔧 MODIFICATION DU TABLEAU ===

// 🌟 push() → Ajoute à la fin | 🌟 pop() → Retire le dernier
let stack = [1, 2];
stack.push(3);  // [1, 2, 3]
stack.pop();    // [1, 2]
console.log("push/pop:", stack);

// 🌟 unshift() → Ajoute au début | 🌟 shift() → Retire le premier
let file = [2, 3];
file.unshift(1); // [1, 2, 3]
file.shift();    // [2, 3]
console.log("unshift/shift:", file);

// 🌟 sort() → Trie les éléments (par défaut en string, utiliser une fonction pour nombres)
let scores = [10, 5, 20];
scores.sort((a, b) => a - b); // tri croissant
console.log("sort:", scores);

// 🌟 reverse() → Inverse l'ordre des éléments dans le tableau
let lettres2 = ["a", "b", "c"];
lettres2.reverse(); // ["c", "b", "a"]
console.log("reverse:", lettres2);

// 🌟 fill() → Remplit le tableau avec une valeur donnée
let rempli = new Array(4).fill("JS");
console.log("fill:", rempli); // ["JS", "JS", "JS", "JS"]

// === 📦 AUTRES MÉTHODES UTILES ===

// 🌟 join() → Concatène les éléments du tableau en une chaîne
let mots = ["Hello", "World"];
console.log("join:", mots.join(" ")); // "Hello World"

// 🌟 toString() → Convertit le tableau en chaîne (séparée par des virgules)
let chiffres2 = [1, 2, 3];
console.log("toString:", chiffres2.toString()); // "1,2,3"

// 🌟 concat() → Fusionne deux tableaux (sans modifier les originaux)
let a = [1, 2], b = [3, 4];
let fusion = a.concat(b);
console.log("concat:", fusion); // [1, 2, 3, 4]

// 🌟 Array.isArray() → Vérifie si une valeur est un tableau
console.log("isArray (tableau):", Array.isArray([1, 2])); // true
console.log("isArray (string):", Array.isArray("texte")); // false

// 
________________________________________________________
// 


// ===============================
// ✅ MÉTHODES DE MANIPULATION DES OBJETS EN JAVASCRIPT
// ===============================

let personne = {
  nom: "Ali",
  age: 30,
  profession: "Développeur"
};

// 🌟 Object.keys() → Retourne un tableau contenant les clés (propriétés) de l'objet
console.log("Object.keys:", Object.keys(personne)); 
// ["nom", "age", "profession"]

// 🌟 Object.values() → Retourne un tableau contenant les valeurs de l'objet
console.log("Object.values:", Object.values(personne)); 
// ["Ali", 30, "Développeur"]

// 🌟 Object.entries() → Retourne un tableau de paires [clé, valeur]
console.log("Object.entries:", Object.entries(personne)); 
// [["nom", "Ali"], ["age", 30], ["profession", "Développeur"]]

// 🌟 hasOwnProperty() → Vérifie si l'objet possède une propriété spécifique
console.log("hasOwnProperty nom:", personne.hasOwnProperty("nom")); // true
console.log("hasOwnProperty adresse:", personne.hasOwnProperty("adresse")); // false

// 🌟 Accès aux propriétés → On peut lire ou modifier une valeur via la notation point ou crochet
console.log("Nom:", personne.nom); // Ali
personne.age = 31;
console.log("Âge mis à jour:", personne.age); // 31

// 🌟 Ajout de propriété → On ajoute une nouvelle propriété simplement
personne.adresse = "Conakry";
console.log("Adresse ajoutée:", personne); 
// { nom: "Ali", age: 31, profession: "Développeur", adresse: "Conakry" }

// 🌟 Suppression de propriété → Utilisation du mot-clé `delete`
delete personne.profession;
console.log("Après suppression:", personne); 
// { nom: "Ali", age: 31, adresse: "Conakry" }

// 🌟 Boucle for...in → Permet d’itérer sur toutes les clés d’un objet
for (let clé in personne) {
  console.log(`for...in -> ${clé} : ${personne[clé]}`);
}
// Affiche toutes les paires clé/valeur de l'objet

// === AUTRES MÉTHODES UTILES POUR LES OBJETS ===

// 🌟 Object.assign() → Copie les propriétés d'un ou plusieurs objets vers un autre
let cible = {};
let source = { pays: "Guinée", ville: "Conakry" };
Object.assign(cible, personne, source);
console.log("Object.assign:", cible); 
// fusionne les objets

// 🌟 Object.freeze() → Rend un objet **immuable** (on ne peut plus le modifier)
let frozen = Object.freeze({ nom: "Alpha", age: 25 });
frozen.age = 30;
console.log("Object.freeze (âge non modifié):", frozen); // age reste 25

// 🌟 Object.seal() → Empêche l'ajout ou la suppression de propriétés (mais les valeurs peuvent être modifiées)
let scellé = Object.seal({ nom: "Barry", age: 28 });
scellé.age = 29; // modifiable
delete scellé.nom; // non supprimable
scellé.ville = "Kindia"; // non ajoutable
console.log("Object.seal:", scellé); // { nom: "Barry", age: 29 }

// 🌟 JSON.stringify() → Convertit un objet en chaîne JSON
let chaine = JSON.stringify(personne);
console.log("JSON.stringify:", chaine);

// 🌟 JSON.parse() → Convertit une chaîne JSON en objet JavaScript
let objetReconstitué = JSON.parse(chaine);
console.log("JSON.parse:", objetReconstitué);

// 🌟 Destructuration d'objet → Extraire des propriétés dans des variables
let { nom, age } = personne;
console.log("Destructuration:", nom, age);

// 🌟 Vérification d’existence avec "in"
console.log("nom" in personne); // true
console.log("email" in personne); // false





*/
