var salutation = "Bonjour !";
window.alert(salutation)
var nombre = window.prompt("Saisissez un nombre");

if (nombre == 0)
{
    console.log("Le nombre :"+ nombre + " est positif");

}
    else if (nombre < 0)
    {
        console.log("Le nombre est négatif");
    }
    else (nombre > 0)
    {
        window.alert("Le nombre est positif" + "\n" + "le résultat est :" + nombre);
        console.log("Le nombre est positif" + "\n" + "le résultat est :" + nombre);
 }

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
var entier1 = window.prompt("Saisissez un nombre entier");
var entier2 = window.prompt("Saisissez un second nombre entier");
var operateur = window.prompt("Saisissez un opérateur");

if (operateur = "+")
{
    window.alert(parseInt(entier1) + parseInt(entier2));
    // L'addition dans la console ne fonctionne pas ??
    console.log(parseInt(entier1) + (entier2));
}
else if (operateur = "-")
{
    // La soustraction ne fonctionne pas dans les pop-up.
    window.alert(entier1 - entier2);
    // La soustraction fonctionne dans la console.
    console.log(entier1 - entier2);
}

 else if(operateur = "*")
{
    window.alert(parseInt(entier1) *= (entier2));
    console.log(entier1 *= entier2);
}
else if (operateur ="/")
{
    window.alert(entier1 /= entier2);
}
else
{
    console.log("L'opérateur saisit est incorect.");
}
