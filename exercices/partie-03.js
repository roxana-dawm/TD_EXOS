//1) Créer une chaîne de caractères de 50

let str='-';
console.log(`str:${str.repeat(50)}`);

//2)Inverser une chaîne de caractères (sans supprimer l'originale)
let maChaine='choisir une chaine au hasard';
let maChaineReverse=maChaine.split('').reverse().join('');
console.log(maChaine);
console.log(reverse);

//3)Remplacer tous les caractères d'une chaîne par une *
let Chaine = 'le chasseur part chasser avec son chien ' ;
let rev = Chaine.split('').reverse().join('*');
console.log(Chaine);
console.log(rev);

//4)Remplacer toutes les occurrences d'une lettre par une autre dans une chaîne de caractères
couleurs= "le ciel est bleu";
arcenciel=couleurs.split('e').joint('c')
console.log(arcenciel);


//5)Supprimer toutes les occurrences d'une lettre dans une chaîne de caractères
voyage='je ne pars pas cet ete j\'étudie';
etudes=voyage.split('a').join('');
console.log(etudes);

//6// Afficher la présence d'une lettre dans une chaîne (si oui, en afficher le nombre
// ( si non, afficher "absent")


const phrase = 'le renard joue avec les canards';

const index = 4;

console.log(` ${index} is ${phrase.charAt(index)}`);




//7) Compter le nombre d'occurrence de chaque lettre dans une chaine
vacance='je pars en vacances';
let vacanceT=vacance.length;
console.log(vacanceT);



//8)Remplacer les double-espace (ou +) dans une chaîne de caractères par un espace
const soleil='une  journée  ensoleillée';
console.log(soleil);
console.log(soleil.trim());

var chaine='il était une fois aux pays des merveilles'
var nouvlleChaine=chaine.replace(/merveilles/i,'lutins')



//9)Découper une chaîne de caractères en mots avec l'espace comme séparateur
//et les compter

var maChaine = "Ceci|est|un|test";
var morceaux = maChaine.split(['|']);

console.log(morceaux);

var maChaine2 = "ca,bc,a,bca,bca,bc";
var morceaux2 = maChaine2.split(["a", "b"]);

console.log(morceaux2);