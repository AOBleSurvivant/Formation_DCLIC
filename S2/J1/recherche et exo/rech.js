/**LES METHODES DE MANUPILATION DES NUMBERS, Tableaux, Objets.
// ✅ Exercices pratiques - Manipulation des nombres en JavaScript

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


// ✅ Résumé des méthodes de manipulation des objets en JavaScript + Exercices

// 🌟 Object.keys(), Object.values(), Object.entries(), hasOwnProperty()
let personne = {
  nom: "Ali",
  age: 30,
  profession: "Développeur"
};

console.log("Object.keys:", Object.keys(personne));
console.log("Object.values:", Object.values(personne));
console.log("Object.entries:", Object.entries(personne));
console.log("hasOwnProperty nom:", personne.hasOwnProperty("nom"));
console.log("hasOwnProperty adresse:", personne.hasOwnProperty("adresse"));

// 🌟 Accès et modification
console.log("Nom:", personne.nom);
personne.age = 31;
console.log("Âge mis à jour:", personne.age);

// 🌟 Ajout de propriété
personne.adresse = "Conakry";
console.log("Adresse ajoutée:", personne);

// 🌟 Suppression de propriété
delete personne.profession;
console.log("Après suppression:", personne);

// 🌟 Boucle for...in
for (let clé in personne) {
  console.log(`for...in -> ${clé} : ${personne[clé]}`);
}

// 🌟 Exercice 1 : Créer un objet voiture
let voiture = {
  marque: "Toyota",
  modele: "Corolla",
  annee: 2020
};
console.log("Ex1 - Voiture :", voiture);

// Résolution : afficher toutes les propriétés
console.log("Ex1 - Clés :", Object.keys(voiture));
console.log("Ex1 - Valeurs :", Object.values(voiture));

// 🌟 Exercice 2 : Modifier et ajouter propriétés
voiture.annee = 2023;
voiture.couleur = "Noir";
console.log("Ex2 - Modifiée :", voiture);

// 🌟 Exercice 3 : Supprimer une propriété
delete voiture.modele;
console.log("Ex3 - Après suppression :", voiture);

// 🌟 Exercice 4 : Boucle sur les propriétés
for (let prop in voiture) {
  console.log(`Ex4 - ${prop} : ${voiture[prop]}`);
}

// 🌟 Exercice 5 : Vérifier l’existence d’une propriété
console.log("Ex5 - a 'marque'? :", voiture.hasOwnProperty("marque"));
console.log("Ex5 - a 'moteur'? :", voiture.hasOwnProperty("moteur"));
*/