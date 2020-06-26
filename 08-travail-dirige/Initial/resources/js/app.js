
//                      TD jeu du lancer de dé
//*********************************************************




//partie 1
// ici on déclare les variables du programme et par la suite une nouvelle variable 'jouer' et sa valeur 'true' va nous permettre de pouvoir continuer à jouer après avoir dépasser le score de 100.

let scoresGlobals = [0, 0];
let scoreEnCours = 0;
let joueurActif = 1;
let joueur=true;


//partie2
//Dans cette partie on cible les differents scores a l'aide d'un id et on initialise leur contenu à 0; mais dans les prochaines étapes on decide de le factoriser et l'écourter pour éviter la répétition.
initiliseLeJeu();




//partie3 On cible le bouton à l'aide d'un 'événement click' afin de pouvoir faire la simulation du lancé de dé et par la même occasion une mise à jour de l'image du dé
    let btnLancezLeDe = document.querySelector(`.btn-lancer`);
  btnLancezLeDe.addEventListener('click', () => {
        let de = Math.floor(Math.random() * 6) + 1;
        let domDe = document.querySelector('.de');

        domDe.style.display = 'block';
        domDe.src = `resources/images/de-${de}.png`;

//mise à jour du resultat du joueur actif
      if (de !== 1) {
          scoreEnCours += de;

          document.getElementById(`encours-${joueurActif}`).textContent = scoreEnCours;
      }else {
          joueurSuivant();
      }


  });
      // le code est maintenant conforme a la règle du jeu car on a ajouter l'instruction "else"


//partie4 gestion du 'bouton comutez'et mise à jour du score

let btnCommutez = document.querySelector('.btn-commuter');
btnCommutez.addEventListener('click', () => {
    scoresGlobals[joueurActif - 1] += scoreEnCours;
    document.getElementById(`score-${joueurActif}`).textContent = scoresGlobals[joueurActif - 1];


    //On verifie si le joueur a atteint le score gagnant
    if (scoresGlobals[joueurActif - 1] >= 100) {
        document.getElementById(`nom-${joueurActif}`).textContent = 'Bravo !!!';

        document.querySelector('.de').style.display = 'none';
        document.querySelector(`.joueur-${joueurActif}-panel`).classList.add('vainqueur');
        document.querySelector(`.joueur-${joueurActif}-panel`).classList.remove('active');
    } else {

        joueurSuivant();
    }
});



//partie5 ici le premier à avoir un score GLOBAL supérieur ou égal à 100 gagne la partie. mais c'est avec le bouton 'comuter' que l'on gère la partie. Et avec la nouvelle fontion 'joueurSuivant' on peut passer à un nouveau jeux.(partie6)
function joueurSuivant() {
    joueurActif === 1 ? joueurActif = 2 : joueurActif = 1;
    scoreEnCours = 0;

    document.getElementById(`encours-${joueurActif}`).textContent = '0';

    document.querySelector('.joueur-1-panel').classList.toggle('active');

    document.querySelector('.joueur-2-panel').classList.toggle('active');

    document.querySelector('.de').style.display = 'none';
}

//partie6 On initialise tout les composants "le jeux redemarre à 0" on peut dès à présent entamer une nouvelle partie

    let btnNouveauJeu = document.querySelector('.btn-nouveau');
    btnNouveauJeu.addEventListener('click',() => {
        initiliseLeJeu();
    });


//partie7 On implémente la fonction 'initialiseLeJeu' et on utilise le code d'initialisation de la partie 2 pour pouvoir recommencer la partie.

function initiliseLeJeu() {

    scoresGlobals = [0, 0];
    scoreEnCours = 0;
    joueurActif = 1;
    document.querySelector('.de').style.display = 'none';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('score-2').textContent = '0';
    document.getElementById('encours-1').textContent = '0';
    document.getElementById('encours-2').textContent = '0';
    document.getElementById('nom-1').textContent = 'Joueur 1';
    document.getElementById('nom-2').textContent = 'Joueur 2';
    document.querySelector('.joueur-1-panel').classList.remove('vainqueur');

    document.querySelector('.joueur-2-panel').classList.remove('vainqueur');

    document.querySelector('.joueur-2-panel').classList.remove('active');}


    //fin du jeu