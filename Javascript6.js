// ----------------------------------- Exercice 1 ----------------------------------- 
var btn13 = document.getElementById ("btn13");
btn13.addEventListener ("click", clickbtn13);
function clickbtn13 ()
{

var tableau = [];
const longueur = parseInt(prompt("Choisissez une longueur de tableau"));

while (tableau.length != longueur) 
{
   var n = parseInt(prompt("remplissez le tableau de la case numéro :"+ tableau.length));
   tableau.push(n);

} 
console.log(tableau);
document.write(tableau);

}
// ----------------------------------- Fin Exercice 1 ----------------------------------- 

// ----------------------------------- EXercice 2 ---------------------------------------
var btn14 = document.getElementById ("btn14");
btn14.addEventListener ("click", clickbtn14);
function clickbtn14 ()
{

var tableau = [];
const longueur = parseInt(prompt("Choisissez une longueur de tableau"));
const index =prompt("choisis ta place");
tableau.indexOf(index);
while (tableau.length != longueur) 
{
    var n = parseInt(prompt("remplissez le tableau"));
   tableau.push(n);
} 
console.log(index);
console.log(tableau);
document.write(tableau);
}