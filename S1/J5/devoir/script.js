/* script.js */

/* Tout le code s’exécute quand le DOM est prêt */
document.addEventListener('DOMContentLoaded', () => {

  /* 1. querySelectorAll + forEach + addEventListener */
  document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.style.backgroundColor = 'green';
      btn.textContent = 'Cliqué !';
    });
  });

  /* 2. mouseover / mouseout */
  const hoverBox = document.getElementById('hoverBox');
  if (hoverBox) {
    hoverBox.addEventListener('mouseover', () => {
      hoverBox.style.backgroundColor = '#2ecc71';
    });
    hoverBox.addEventListener('mouseout', () => {
      hoverBox.style.backgroundColor = '#f1c40f';
    });
  }

  /* 3. keydown pour capter toutes les touches */
  const keyDisplay = document.getElementById('keyDisplay');
  if (keyDisplay) {
    document.addEventListener('keydown', (e) => {
      keyDisplay.textContent = `Touche pressée : ${e.key}`;
    });
  }

  /* 4. scroll → change la couleur du header après 80 px */
  const header = document.getElementById('mainHeader');
  if (header) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY > 80;
      header.style.backgroundColor = scrolled ? '#8e44ad' : 'var(--main-color)';
    });
  }

  /* 5. load → alerte (sécurité supplémentaire) */
  window.addEventListener('load', () => {
    alert('Page chargée avec succès !');
  });

  /* 6. form submit */
  const myForm = document.getElementById('myForm');
  if (myForm) {
    myForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Formulaire intercepté !');
    });
  }

  /* 7. onclick vs addEventListener + removeEventListener */
  const oneClickBtn = document.getElementById('oneClickBtn');
  function clickOnce() {
    alert('Tu as cliqué dans les 5 secondes !');
  }
  if (oneClickBtn) {
    oneClickBtn.onclick = clickOnce;           // méthode onclick
    setTimeout(() => {
      oneClickBtn.onclick = null;              // retire l’action après 5 s
    }, 5000);
  }

  /* 8. stopPropagation */
  const parentDiv = document.getElementById('parent');
  const childDiv  = document.getElementById('child');
  if (parentDiv && childDiv) {
    parentDiv.addEventListener('click', () => {
      alert('Parent cliqué !');
    });
    childDiv.addEventListener('click', (e) => {
      e.stopPropagation();
      alert('Enfant cliqué !');
    });
  }

  /* 9. BOM – innerWidth (mise à jour au redimensionnement) */
  const screenSize = document.getElementById('screenSize');
  function showScreen() {
    if (screenSize) screenSize.textContent = `Taille ecran : ${window.innerWidth}px`;
  }
  showScreen();
  window.addEventListener('resize', showScreen);

  /* 10. setProperty → changer la couleur CSS dynamiquement */
  const colorPicker = document.getElementById('colorPicker');
  if (colorPicker) {
    colorPicker.addEventListener('input', (e) => {
      document.documentElement.style.setProperty('--main-color', e.target.value);
      if (header && window.scrollY <= 80) header.style.backgroundColor = 'var(--main-color)';
    });
  }
});