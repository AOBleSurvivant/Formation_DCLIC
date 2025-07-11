//trim
const rep = "  Diallo Amadou Djouldé  ";
const repTrim = rep.trimEnd();
console.log(repTrim);
// fonction recherche include
const repInclude = rep.includes("amadou");
console.log(repInclude);
//Comparaison sans casse
const a = "Admin ";
if (a.toLowerCase().trim() === "admin"){
    console.log("Accès autorisé!")
}
else{
    console.log("Les infos sont incorrectes")
}
//Remplacement
const replace_nom = rep.replace("Amadou Djouldé", "Alpha Oumar");
console.log(replace_nom);
//extraction
const a_slice = rep.slice(0, 15);
console.log(a_slice);

const aob = Math.min(2, 7, 9);
console.log(aob)
//___________Exercices_____________________
console.log(Math.random());
console.log( Math.ceil(Math.random() * (100 - 50 + 1)) + 50);
//______________sqrt__________
console.log(Math.sqrt(4));
console.log(Math.pow(2, 3));

const val_1 = "abcd", val_2 = "345", val_3 = "NAN";
console.log(isNaN(val_1));
let val3 = NaN;
console.log(typeof(val3))
let prix=10;
console.log(prix.toFixed(3)+"cfa")
console.log(prix.toString(16))


