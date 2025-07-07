// // Sélection du bouton
// const bouton = document.getElementById("monBouton");

// // Fonction de callback
// function afficherAlerte() {
//   alert("Alerte déclenchée !");

//   // Supprimer l'écouteur après le premier clic
//   bouton.removeEventListener("click", afficherAlerte);
// }

// // Ajouter l'écouteur d'événement
// bouton.addEventListener("click", afficherAlerte);
const bouton = document.getElementById("monBouton");
const zone = document.getElementById("zoneCliquable");

function afficherAlerte(event) {
  event.stopPropagation(); // Empêche la propagation au parent
  alert("Alerte du bouton !");
  bouton.removeEventListener("click", afficherAlerte);
}

function alerteParent() {
  alert("Zone parent cliquée !");
}

// Écouteurs
bouton.addEventListener("click", afficherAlerte);
zone.addEventListener("click", alerteParent);
