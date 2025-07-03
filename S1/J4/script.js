/*Les structures de controle 
En JavaScript, les structures de contrôle permettent de gérer le flux d'exécution du code, c'est-à-dire décider quelles instructions exécuter, dans quel ordre, et combien de fois. Voici les principales catégories :
______________1. Les structure conditionnelles
*/
let age = 20;

if (age < 18) {
  console.log("Mineur");
} else if (age >= 18 && age < 65) {
  console.log("Adulte");
} else {
  console.log("Senior");
}
// Switch: Alternative à if/else if pour plusieurs cas basés sur une même variable.

let jour = "lundi";

switch (jour) {
  case "lundi":
    console.log("Début de la semaine");
    break;
  case "vendredi":
    console.log("Bientôt le week-end");
    break;
  default:
    console.log("Jour ordinaire");
}
//_____________ 2. Les boucles (loops): Elles permettent de répéter un bloc de code plusieurs fois.
// a)for
 for (let i = 0; i < 5; i++) {
  console.log("Itération", i);
}
// b) while
let j = 0;
while (j < 5) {
  console.log("i vaut", j);
  j++;
}
// c) do...while
let k = 0;
do {
  console.log("Exécuté au moins une fois");
  k++;
} while (k < 1);
// ____________3. Les boucles spécifiques aux objets/collections
//for...in (pour les propriétés d’un objet)
let personne = { nom: "Ali", age: 30 };
for (let clé in personne) {
  console.log(clé, ":", personne[clé]);
}
// for...of (pour les valeurs d’un tableau ou d’un objet itérable)
let fruits = ["pomme", "banane", "mangue"];
for (let fruit of fruits) {
  console.log(fruit);
}
// ___________4. Autres instructions de contrôle
//break: Interrompt une boucle ou un switch :
for (let y = 0; y < 10; y++) {
  if (y === 5) break;
  console.log(y); // Affiche 0 à 4
}
// continue
for (let x = 0; x < 5; x++) {
  if (x === 2) continue;
  console.log(x); // Affiche 0, 1, 3, 4
}


console.log("______Autres exemples_____");
let Personne = {
    nom_p : "Barry",
    prenom_p : "Alpha Oumar",
    age_p : 25
};
for(let cle in Personne){
    console.log(cle +" : "+ Personne[cle]);
}

console.log("____________EXO CLASS____________") 
      //___________EOX 1___________
let a = 17;
/*declarer une var age  17.  afficher majeur si age sup ou egal 18 , si sup ou egal à 13 Adolescent sinon enfant */

if(a >= 18){
  console.log(`Votre age : ${a}, donc vous êtes Majeur.`)
}else if(a >= 13){
  console.log(`Vous avez ${a} ans donc Adolescent.`)
}else{
  console.log(`Vous avez ${a} ans, donc vous êtes enfant.`)
}


console.log('____exo 2_______')
let pays = "Canada", ages = 20;

if((pays == "France") || (pays == "Canada") || (pays == "Sénégal"))
  {
    if(ages >= 18){
    console.log("Inscription Autorisée.")
    }else{
    console.log(`Vous avez ${ages} ans donc vous êtes Adolescent. `)
  }
}
else{
  console.log(`Vous habitez à ${pays} et ce pays n'est pas autorisé.`)
};

console.log('____Exo3____')
let jour_sem = 3;
switch(jour_sem){
  case 1:
    console.log("Lundi");
    break;
  case 2:
    console.log("Mardi");
    break;
  case 3:
    console.log("Mercredi");
    break;
  default:
    console.log("Jour invalide.")
}
console.log("____Exo4____")
for(let i = 5; i > 0; i--){
  console.log(`Nombre : ${i}`);
}

console.log("_____exo 5___")
let jj = 0;
do{
  console.log(`Nombre: ${jj}`);
  jj++;
}while(jj < 3);

console.log("___exo6___")
const n_mix = [2, 8, "aob", true]
for(let n of n_mix){
  console.log(`Elément : ${n}`)
}

console.log('___Dévoir___')
console.log("Exo1")
let prenoms = ["Boubacar", "Amadou", "Oumou", "Djenaba"];
for(let prenom of prenoms){
  console.log(`Bonjour ${prenom}`);
}

console.log("Exo2")
const users = {
  nom : "Diallo",
  age_u : 25,
  role :"Etudiant"
}
for(let user in users){
  console.log(user +" : "+users[user] )
}

const Voitures = {
  marque : "Toyota ",
  modele : "Corola",
  année : 2020
};
for(let voiture in Voitures){
  console.log(voiture + " : " + Voitures[voiture]);
}
console.log("_______exo3___")
const fruits_exo = ["Pomme", "Banane", "Orange"];
fruits_exo.forEach(function(n){
  console.log("J'aime :"+ n)
})


