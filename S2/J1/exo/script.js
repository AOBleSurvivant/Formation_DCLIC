/* Objectif, s'appliquer sur whidow.location
creer un formaulaire de 2 champs et bouton connexion. Une fois cliqué sur le bouton, si les données saisies sont correctes, alors il est redirigé vers la nouvelle page sinon un message d'erreur */


document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();
    const username = document.getElementById("userName").value.trim();
const psw = document.getElementById("password").value.trim();
const errorMsg = document.getElementById('errorMessage');

//Vérificaion d'identification "corrects"
const validUserName = "admin";
const validPswd = "12345";

if(username === validUserName && psw === validPswd ){
    window.open("https://github.com/AOBleSurvivant/Formation_DCLIC.git,=", "_blak");
}else{
    errorMsg.textContent = "Votre nom d'utilisateur ou le mot de pass est incorrect."
}
})

