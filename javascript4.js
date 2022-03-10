// -------------------------------- Exercice 1  Saisie-------------------------------- 
var btn6 = document.getElementById ("btn6");
btn6.addEventListener ("click", clickbtn6);
function clickbtn6 ()
{

var i = 0;


while (i <= 100)
{
    if (prenom =="")
    {
        break;

    }
    var prenom = window.prompt ("Saisissez un prénom");
    console.log("prenom :"+ prenom);
    console.log(+i);
    i++;

}
}
// -------------------------------- Fin exercice 1 -------------------------------- 

// -------------------------------- Début exercice 2 Entier inférieur à N-------------------------------- 
var btn7 = document.getElementById ("btn7");
btn7.addEventListener ("click", clickbtn7);
function clickbtn7 ()
{

var i = 0;
var resultat;

var n=window.prompt("saisissez un nombre");

for (i=0; i<=10; i--) 

{
    resultat = n - i;
    n--;

    console.log(n);
    console.log(resultat);
    console.log(i);
    window.alert(n);
    if (n==0) {
        break;
    }
}



console.log(resultat);
console.log(i);
}
// -------------------------------- Fin exercice 2 -------------------------------- 

// -------------------------------- Debut exercice 3 Moyenne-------------------------------- 
var btn8 = document.getElementById ("btn8");
btn8.addEventListener ("click", clickbtn8);
function clickbtn8 ()
{

var i = 0;
var somme = 0;
var moyenne = 0;


for (i=0; i<=10; i++)
{
    var entier1 = window.prompt ("saisissez un nombre entier");
    var entier2 = window.prompt ("saisissez un second nombre");

    somme = parseInt(entier1) + parseInt(entier2);
    window.alert("La somme est "+ somme);
    console.log(somme);

    moyenne = entier1 / 2;
    window.alert("La moyenne est "+ moyenne);
    console.log(entier1);
    // moyenne = entier2 / 2;
    // window.alert("La moyenne est "+ moyenne);
    // console.log(entier2);

    i++;
    console.log(i);
}

}
// -------------------------------- Fin exercice 3 -----------------------------

// -------------------------------- Debut exercice 4 Multiples-------------------------------- 
var btn9 = document.getElementById ("btn9");
btn9.addEventListener ("click", clickbtn9);
function clickbtn9 ()
{

var n = window.prompt("saisissez un nombre");
var x = window.prompt("saisissez un nombre");
do
{
    resultat = n * x;
    console.log("Les multiples de "+ n + "\n sont :" + resultat);
    x++;
}while(x <= 10);

}
// -------------------------------- Fin exercice 4  -------------------------------- 

// -------------------------------- Debut exercice 5 Voyelle mais il y a un soucis..-------------------------------- 
var btn10 = document.getElementById ("btn10");
btn10.addEventListener ("click", clickbtn10);
function clickbtn10 ()
{

var voyelle=["a", "e", "i", "o", "u"];
var i=0;
myVar = "";


var myVar = window.prompt("ecrivez une phrase");


console.log(myVar.length);

// for (i=0; i <=10; i++) {





let pos_a=myVar.indexOf("a");
let pos_e=myVar.indexOf("e");
let pos_i=myVar.indexOf("i");
let pos_o=myVar.indexOf("o");
let pos_u=myVar.indexOf("u");




var lettre = myVar.substring();

console.log("lettre  :"+lettre);

console.log("position du 1er a :"+pos_a);
console.log("position du 1er e :"+pos_e);
console.log("position du 1er i :"+pos_i);
console.log("position du 1er o :"+pos_o);
console.log("position du 1er u :"+pos_u);

var nbvoyelle=0;

// while(myVar.substring()>= 'aa'){
// nbvoyelle++;
// break;

// }
// while(myVar.substring()>= 'aaa'){
//     nbvoyelle++;
//     break;

// } 

// Erreur ? dans la console..

while(e > -1){
    nbvoyelle++;
    console.log(nbvoyelle);
    break;
    }
    while(i > -1){
        nbvoyelle++;
        console.log(nbvoyelle);
        break;
        }
        while(o > -1){
            nbvoyelle++;
            console.log(nbvoyelle);
            break;
            }
            while(u > -1){
                nbvoyelle++;
                console.log(nbvoyelle);
                break;
                }
                while(a > -1){
                    nbvoyelle++;
                    console.log(nbvoyelle);
                    break;
                    }
          

window.alert("il y a :"+ nbvoyelle + "voyelles");
}
// let myVar = window.prompt("Saisir un mot");
// let lenght = console.log(myVar.length);
// let o = myVar.indexOf('o'); 
// let e = myVar.indexOf('e');
// let i = myVar.indexOf('i');
// let u = myVar.indexOf('u');
// let y = myVar.indexOf('y');
// let a = myVar.indexOf('a');
// console.log(myVar.substring());
// nmbreVoyelles = 0;
// while(myVar.substring()>= 'aa'){
// nmbreVoyelles++;
// break;

// }
// while(myVar.substring()>= 'aaa'){
//     nmbreVoyelles++;
//     break;

// } 

// while(e > -1){
//     nmbreVoyelles++;
//     // console.log(nmbreVoyelles);
//     break;
// }

// while(i > -1){
//     nmbreVoyelles++;
//     // console.log(nmbreVoyelles);
//     break;
// }

// while(o > -1){
//     nmbreVoyelles++;
//     // console.log(nmbreVoyelles);
//     break;
// }

// while(u > -1){
//     nmbreVoyelles++;
//     // console.log(nmbreVoyelles);
//     break;
// }

// while(y > -1){
//     nmbreVoyelles++;
//     // console.log(nmbreVoyelles);
//     break;
// }

// while(a > -1){
//     nmbreVoyelles++;
//     // console.log(nmbreVoyelles);
//     break;
// }

// console.log(nmbreVoyelles);
// -------------------------------- Fin exercice 5  -------------------------------- 
