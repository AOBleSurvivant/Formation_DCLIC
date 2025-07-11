//Les méthodes de manipulation des nombres:
//1. Création de fonction genererCode() qui utilise Math.floor() pour générer un nombre entre 100000 et 900000.

const min     = 100000;
const max     = 900000;
const range   = max - min + 1;        // amplitude
const code    = Math.floor(Math.random() * range) + min;

console.log(code);


// 2. Créer une var prixInitial = 47.89 et l'arrondir vers le bas et vers le haut.

const prixInitial = 47.89;
const rep_pri_bas = Math.floor(prixInitial)
console.log(rep_pri_bas)
const rep_pri_haut = Math.ceil(prixInitial)
console.log(rep_pri_haut)

//3. Utiliser .toFixed(2) pour formater ce prix arrondi en deux décimales.
let nb_foFixed_haut = rep_pri_bas.toFixed(2);
let nb_foFixed_bas = rep_pri_haut.toFixed(2);
console.log(nb_foFixed_haut);
console.log(nb_foFixed_bas)
//4. 

const minn = 2, maxx = 5, rangee = 4, codee = Math.floor(Math.random()*rangee) + minn;
console.log(codee)
