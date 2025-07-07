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

const Voitures = {
  marque : "Toyota ",
  modele : "Corola",
  année : 2020
};
for(let voiture in Voitures){
  console.log(voiture + " : " + Voitures[voiture]);
};

console.log("_______exo3___")
const fruits_exo = ["Pomme", "Banane", "Orange"];
fruits_exo.forEach(function(n){
  console.log("J'aime :"+ n)
})

//___________________DEVOIR_______________________
console.log('___Dévoir___')
                    console.log("Exo1")
let prenoms = ["Boubacar", "Amadou", "Oumou", "Djenaba"];
for(let prenom of prenoms){
  console.log(`Bonjour ${prenom}`);
}

                    console.log("Exo2")
const users = {
  nom : "Bah",
  age_u : 25,
  role :"Etudiant"
}
for(let user in users){
  console.log(user +" : "+users[user] )
}

console.log('_____FONCTION_______')
/*les fonctions sont des blocs de code réutilisables conçus pour effectuer une tâche spécifique. Elles sont essentielles en programmation, car elles permettent d’organiser, de structurer et de réutiliser le code.

1. Déclaration de fonction (classique): function nom() {}
function saluer() {
  console.log("Bonjour !");
}
saluer(); // Affiche "Bonjour !"

2. Fonction avec paramètres et retour
function addition(a, b) {
  return a + b;
}
let resultat = addition(5, 3); // 8

3. Fonction anonyme: function() {}
C’est une fonction sans nom, souvent utilisée comme valeur (dans les callbacks par exemple) :
let direBonjour = function() {
  console.log("Salut !");
};
direBonjour(); // Affiche "Salut !"

4. Fonction fléchée (arrow function): () => {} ou param => expr

-Plus courte et très utilisée en ES6+ :
let multiplier = (x, y) => x * y;
console.log(multiplier(2, 3)); // 6

-Avec un seul paramètre et un seul retour :
let doubler = x => x * 2;

5. Fonction comme argument (callback): fonction(param => { ... })
function traiter(callback) {
  console.log("Début");
  callback();
  console.log("Fin");
}

traiter(() => console.log("Traitement en cours..."));

6. Fonction imbriquée (fonction dans une autre)
function exterieur() {
  function interieur() {
    console.log("Je suis à l'intérieur !");
  }
  interieur();
}
exterieur();

7. Fonction constructeur (avec new): function Nom() { this... }
Utilisée pour créer des objets :
function Personne(nom) {
  this.nom = nom;
}
let p1 = new Personne("Alpha");
console.log(p1.nom); // Alpha

8. Fonction récursive
Une fonction qui s'appelle elle-même :
function compteARebours(n) {
  if (n > 0) {
    console.log(n);
    compteARebours(n - 1);
  } else {
    console.log("C'est fini !");
  }
}
compteARebours(3);

9. Fonction dans un objet (méthode): objet = { f: function() {} }
let voiture = {
  marque: "Toyota",
  demarrer: function() {
    console.log("Vroum !");
  }
};
voiture.demarrer();


*/

console.log("_____Portée des variables_____")
/** En JavaScript, la portée des variables (en anglais scope) détermine où une variable est accessible dans ton code. Comprendre cela est essentiel pour éviter des bugs liés à des variables invisibles ou écrasées. 
 
*/

/*exo: creer une fonction, passer la un paramètre nom et afficher dans la console "Bonjour + nom"; Vous affichez au moins 5 messages avec des arguments differents.*/

let ma_premiere_f = function(nom_fon = "Ajouter un nom comme argument"){
  let nom_f = console.log(`Nom complet : ${nom_fon};`);
  return nom_f;
}
tab_f = ["Alpha Oumar Barry", "Elhadj Oumar", "Boubacar Sow", "Amadou Tidiane Bah", "Pascal"];

for(t of tab_f){
  ma_premiere_f(t);
}

console.log("____Methode____");
let ma_fonction_uno = function(nom_ = "AOB" , prenom_ = "LeSurvivant"){
  _fon = console.log(`Votre nom est : ${nom_} et Votre prénom est : ${prenom_}`);
  return _fon;
}
ma_fonction_uno("Elhadj Oumar", "Diallo");
ma_fonction_uno("Boubacar", "Sow");
ma_fonction_uno("Amadou Tidiane", "Bah");
ma_fonction_uno("Pascal", "Maomy");
ma_fonction_uno("Ramatoulaye", "Diallo");

console.log("___________Exo de consolidation____________")
  console.log("1. Avec map() ");

  const pre_nom = ["Ali", "Mariam", "Binta", "Oumar"];
  //Ajouter "Bonjour" devant chaque prénom.
 const salutation = pre_nom.map(nom__ => `Bonjour ${nom__}`);
 console.log(salutation);

console.log("Compter les prenoms commençants par A");

/*___Déclarer une fonction nom et à linterieur vous créez _*/

function additions(a, b){
      return a  + b;
}
console.log(additions(5, 8));

/* const prenoms = ['Ali', 'Mariam', 'Binta', 'Oumar'];

// 1. Ajouter "Bonjour" devant chaque prénom
const salutation = prenoms.map(nom => `Bonjour ${nom}`);
console.log(salutation);
// ["Bonjour Ali", "Bonjour Mariam", "Bonjour Binta", "Bonjour Oumar"]

// 2. Compter les prénoms commençant par "A"
const nbA = prenoms.filter(nom => nom.startsWith('A')).length;
console.log(nbA); // 1



const salutation2 = prenoms.map(function(nom) {
  return 'Bonjour ' + nom;
});

const nbA2 = prenoms.filter(function(nom) {
  return nom.startsWith('A');
}).length;

console.log(salutation2);
console.log(nbA2);

*/


