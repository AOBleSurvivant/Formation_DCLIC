/**EXERCICES
 * const description = " bienvenue dans le cours de javascript pour es dévéloppeurs avancés. "
 * 1. Supprimer les espaces autour de la chaine, puis afficher.
 * 2. Transformater toute la phrase en majuscule.
 * 3. remplacez le mot developpeur par apprenant.
 * 4. Convertissez la phrase en un tableau de mot.
 */
// Méthode strim();
const description = " bienvenue dans le cours de javascript pour les dévéloppeurs avancés. ";
repStrim = description.trim();
console.log(repStrim)
// Méthode uppercase()
repUpper = description.toUpperCase()
console.log(repUpper)
// toreplace
repReplace = description.replace("dévéloppeurs", "apprenant");
console.log(repReplace);
//methode split
repSplit = description.split(" ");
console.log(repSplit)