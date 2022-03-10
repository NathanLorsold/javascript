// Exercice 1 Fonction ------------------------------------------
// var btn11 = document.getElementById ("btn11");
// btn11.addEventListener ("click", clickbtn11);
// function clickbtn11 ()
// {

var nombre = window.prompt("Entrez un nombre");
var multiplicateur = window.prompt("Entrez un multiplicateur");

function afficheImg(image) 
{
   document.getElementById("papillon").innerHTML = "<img src='"+image+"'>";
   //document.write ("<img src='"+image+"'>");
}
chemin_image="papillon.jpg";

afficheImg(chemin_image);


function produit (nombre,multiplicateur) 
{
    document.write("Le cube de "+ nombre + "est égal à "+ nombre*nombre*nombre+"<br/>"+" Le produit de "+ nombre +"*"+ multiplicateur +" est égal à "+ nombre*multiplicateur+"");
   //  document.write("<p>Le cube de "+ nombre + "est égal à "+ nombre*nombre*nombre+"<br/>"+" Le produit de "+ nombre +"*"+ multiplicateur +" est égal à "+ nombre*multiplicateur+"</p>");
    return nombre, multiplicateur;
    
}
produit(nombre,multiplicateur);

// }
// Fin exercice 1
// Exercice 2 String Token ----------------------------------
// var btn12 = document.getElementById ("btn12");
// btn12.addEventListener ("click", clickbtn12);
// function clickbtn12 ()
// {

// var phrase;

// var test = prompt("saisissez une phrase");
// var separateur = prompt ("saisis un separateur");
// var n = prompt ("saisissez une position");

// function strtok(str1, str2, n) 

// {
//    console.log(str1);
//    console.log(str2);
//    console.log(n);

//    // Méthode Marion
//     var phrase = test.split(' ');
//    console.log(phrase);
//    return phrase[n-1];

//    // Ma méthode
//    var phrase = test.split(' ').join(str2);
//     console.log(phrase);
//    var separateur = phrase.split(str2);
//    console.log(phrase);
//    var choisir = separateur.slice(n-1, n);
//    console.log(choisir);
//    return(choisir);

// }


// var resultat = strtok(test, separateur, n);

// alert(resultat);
// }