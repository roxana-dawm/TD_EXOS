
//1)Ecrire la fonction isMultiple, qui prend deux entiers n et m et retourne
// vrai si et seulement si n est un multiple de m.

function ismultiple() {
    let n=Number(prompt("n="));
    let m=Number(prompt("m="));
    if ((n % m)==0){
        alert(`${n}`+`est un multiple de `+` ${m}`);
    }
    else {
        alert(`${n}`+`n'est pas un multiple de `+` ${m}`);
    }
    return n%m;
}

//2)Ecrire la fonction isEven, qui prend un entier i et retourne vrai si et...


//f(n,m)= n multiple m
//g(i) ==>
//if (f(i,2)) ==>paire



//3)Un nombre est n premier s'il a seulement deux diviseurs : 1 et n. Ecrire...


ismultiple();

function pair(chiffre){
    chiffre=Number(prompt("n="));
    chiffre=parseInt(chiffre);
    return ((chiffre & 1)=='0')?true:false;
}
alert(pair());



//4) Ecrire une fonction qui prend un entier n et retourne la somme des entiers inferieurs ou égale à la valeur absolue de n.

function(n) {
1+2+3+4+5+6+7+8
}
function myFunction(p1, p2) {
    return p1 * p2;   // The function returns the product of p1 and p2
}


ou

var x = myFunction(4, 3);   // Function is called, return value will end up in x

function myFunction(a, b) {
    return a * b;             // Function returns the product of a and b
}

//5)Ecrire une méthode qui compte le nombre de voyelles dans une chaîne
// de caractères donnée


function getVowels(str) {
    var vowelsCount = 0;

    //turn the input into a string
    var string = str.toString();

    //loop through the string
    for (var i = 0; i <= string.length - 1; i++) {

        //if a vowel, add to vowel count
        if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
            vowelsCount += 1;
        }
    }
    return vowelsCount;
}
