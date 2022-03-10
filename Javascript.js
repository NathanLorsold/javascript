var btn1 = document.getElementById ("btn1");
btn1.addEventListener ("click", clickbtn1);
function clickbtn1 ()
{

var prenom = "patrick";
var nom = "cacahuete";
var age = "35";
var salutation = "Bonjour !";
console.log(prenom);

// Ce qui permet d'afficher du texte sur la page HTML via le fichier JS.
// document.write("Votre âge est de : " + age + "ans");

window.alert(salutation);
var reponse1 = window.prompt("Saisissez votre nom");
var reponse2 = window.prompt("Saisissez votre prenom");
// Ligne de code permettant d'afficher du texte dans la console (F12).
console.log("texte affiché dans la console");
if (window.confirm("Etes vous un Homme ?") == true) 
{ 
    window.alert(salutation + "Monsieur" +  reponse2 + reponse1 + "\n" + " Bienvenue sur notre site Web !" );
}
else (window.confirm("Etes vous une Femme ?") == false)
{
    window.alert(salutation + "Madame" + reponse1 + reponse2 + "\n" + " Bienvenue sur notre site Web !");
}
}