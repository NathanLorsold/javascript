// var btn15 = document.getElementById ("btn15");
// btn15.addEventListener ("click", clickbtn15);
// function clickbtn15 ()
// {

var tab = [];
var moyenne1 = 0;
var somme=0;
var longueur = 0;
var moyenne =0;
var valeur = 0;
var nb = 0;

do {
    nb=prompt("Entrez vos nombres \n Entrez 0 pour terminer");
console.log(nb);
if (nb == null) break;

    somme = somme + parseInt(nb,10);
    valeur++; //parseInt(nb,10) / ;
    var moyenne1 = somme / valeur; //parseInt(nb,10) / ;
    tab.push(nb);
    //valeur++; //=valeur+1;
} while (nb != 0)

console.log("le nombre saisit est : " + nb);
console.log(tab);
console.log("addition de nombre saisit :" + somme);
console.log("La moyenne est de :"+moyenne1);
console.log("Vous avez saisit : \n "+ valeur +" nombres de valeurs ");
// }