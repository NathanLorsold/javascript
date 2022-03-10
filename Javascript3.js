// ----------------------- Exercice ???

// if (nombre == 0)
// {
//     console.log("Le nombre :"+ nombre + " est positif");

// }
//     else if (nombre < 0)
//     {
//         console.log("Le nombre est négatif");
//     }
//     else (nombre > 0)
//     {
//         window.alert("Le nombre est positif" + "\n" + "le résultat est :" + nombre);
//         console.log("Le nombre est positif" + "\n" + "le résultat est :" + nombre);
//  }
// ----------------------- Fin exercice ?? ----------------------- 

// ----------------------- Exercice 1 Parité ------------------------------
var btn3 = document.getElementById ("btn3");
btn3.addEventListener ("click", clickbtn3);
function clickbtn3 ()
{
var nombre = window.prompt("Saisissez un nombre");

if (nombre % 2 == 0)
{
    window.alert("Le nombre est pair");
    console.log("Le nombre est pair");
}
else
{
    window.alert("Le nombre est impair");
    console.log("Le nombre est impair");
}
}
// ----------------------- Fin exercice 1 ----------------------- 
// ----------------------- Exercice 2 Age -----------------------
var btn4 = document.getElementById ("btn4");
btn4.addEventListener ("click", clickbtn4);
function clickbtn4 ()
{

var annee = window.prompt("Saisissez votre date de naissance");
annee = 2022 - annee;  
window.alert("Vous avez"+ annee + "ans!");
if (annee > 18)
{
    window.alert("vous êtes majeur !");
}
else
{
    window.alert("Vous êtes mineur!")
}
}
// ----------------------- Fin exercice 2 ----------------------- 
// ----------------------- Exercice 3 Calculette ------------------
var btn5 = document.getElementById ("btn5");
btn5.addEventListener ("click", clickbtn5);
function clickbtn5()
{

var entier1 = window.prompt("Saisissez un nombre entier");
var entier2 = window.prompt("Saisissez un second nombre entier");
var operateur = window.prompt("Saisissez un opérateur");

if (operateur == "+")
{
    window.alert(parseInt(entier1) + parseInt(entier2));
    console.log(parseInt(entier1) + parseInt(entier2));
}
if (operateur == "-")
{
    window.alert((entier1) - (entier2));
    console.log((entier1) - (entier2));
}

if(operateur == "*")
{
    window.alert(entier1 * entier2);
    console.log(entier1 * entier2);
}
if(operateur == "/")
{
    window.alert(entier1 / entier2);
    console.log(parseInt(entier1) / parseInt(entier2));
}
else if  (entier2 == "0" && operateur == "/")
{
    alert("impossible de diviser par 0");
}

if (entier2 == "0")

{
    window.alert("Impossible de diviser par 0");
}
{
    // window.alert("l'Opérateur saisit est incorrect !");
    console.log("L'opérateur saisit est incorect.");
}
}