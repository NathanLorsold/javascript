// ------------------------------------- Exercice 2 Fonction --------------------------
// console.clear();
// var phrase;
// var phrase2;
// var position = 1;
// var a;

// var test = prompt("saisissez une phrase");
// var separateur = prompt ("saisis un separateur");
// var n = prompt ("saisissez une position");

// function strtok(str1, str2, n) 

// {
//    console.log(str1);
//    console.log(str2);
//    console.log(n);

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
// -----------------------------Exercice 6 -----------------------------
// var tableau = [];
// const longueur = parseInt(prompt("Choisissez une longueur de tableau"));
// const index = parseInt(prompt("saisis de l'index"));
// console.log((index));
// while (tableau.length != longueur) 
// {
//    var n = parseInt(prompt("remplissez le tableau"));
//    tableau.push(n);

// } 
// var affichertab = window.confirm("Voulez vous afficher le tableau ?");
// if (affichertab == true) 
// {
//    document.write(tableau);
//    console.log(tableau);
// }
// else
// {
//    alert("vous pouvez quitter :) ");
// }
// var afficherIndex = prompt("Quelle poste souhaitez retrouver ?");
// tableau.push(index);
// console.log(tableau);
// console.log(index);
// function SaisieTab ()
// {
//    var tableau = [];
//    const longueur = parseInt(prompt("Choisissez une longueur de tableau"));
//    while (tableau.length != longueur) 
//    {
//    var n = parseInt(prompt("remplissez le tableau"));
//    tableau.push(n);

//    } 
//    console.log(tableau);
//    document.write(tableau);

// }
// function AfficheTab(params) 
// {

// }
// ----------------------------------------------- Exercice 3 ---------------------------------------------------
// var nombre;
// var tableau;

// function getinteger(TextMsg) 
// {
//    var entier = prompt(TextMsg);
//    entier = parseInt(entier,10);
//    console.log("Vous avez saisi le nombre :"+entier);
//    return entier;
// }

// // getinteger("saisir un nombre");
// // getinteger("saisir un entier");

// function InitTab() 
// {
//    entier = getinteger("choisis la taille du tableau");
//       tableau = Array(entier);
      
// }

// function SaisieTab () 
// {
//    for (i =parseInt(0,10);  i<entier; i++)
//       {
//          tableau[i]=getinteger("saisissez la valeur de l'indice "+ i);
//       }   
// }
// function AfficheTab() 
// {
//    for ( i =parseInt(0,10) ; i < entier; i++)
//    {
//       console.log(tableau[i]);
//    }
// }
// function RechercheTab() 
// {
//    i = prompt("Saisissez ce que vous recherchez");
//    console.log("L'élement de votre recherche est :"+ tableau[i]);
// }
// function InfoTab() 
// {
//    max = tableau[0];

//    for ( i = parseInt(0,10); i < entier; i++) 
//    {
//       somme = parseInt(tableau[i]);
      
//    }

//    console.log("La moyenne des valeurs du tableau est :" + (somme/entier));

// }

// InitTab();SaisieTab(); AfficheTab(); RechercheTab(); InfoTab();
// ---------------------------------------Fin Exercice 3 -----------------------------
// var tableau = [];
// const longueur = parseInt(prompt("Choisissez une longueur de tableau"));
// while (tableau.length != longueur) 
// {
//    var n = parseInt(prompt("remplissez le tableau"));
//    tableau.push(n);

// } 
// console.log(tableau);

// function Bulles() 
// { 
//    InitTab();
//    SaisieTab();
//    var changement;
//    do {
//          changement == false;
//          for ( i = 0; i < tableau.length-1; i++) {
//              if (tableau[i] > tableau[i+1]){
//                var test = tableau[i];
//                tableau[i] = tableau[i+1];
//                tableau[i+1] = test;
//                changement == true;
//              }
//                console.log(tableau);
//                console.log(test);
//                console.log(changement);
//          }
      



//    }while (changement);
      
// }
// var changement = false;
// var test;
// function Tri()
// {
//    InitTab();
//    SaisieTab();
//    AfficheTab();

//    console.log(tableau);

    
//       do {console.log("passage n° "+i);
//          if (tableau[i] > tableau[i+1]) 
//          {
//             test = tableau[i];
//             tableau[i] =tableau[i+1];
//             tableau[i+1]= test;
//             changement = true;
//          }
         
//          AfficheTab();

//       } while (changement == true);
//       // for (i =0; i<tableau.length; i++) 
      

// }

// Tri();

// var nombre1=prompt("Saisissez un nombre :");

// var N=0;
// var m="";

// while(nombre1 > N)
// {
//     if(nombre1<1){break}
//     nombre1--;
//     m= m+nombre1 + ",";
// }
// alert(m)

// function triBulle()
// {
//     InitTab();
//     SaisieTab();

//     console.log("Tableau non trié :\n");

//     AfficheTab();

//     permutation = false;
//     longueur = tableau.length;

//     for(indice = parseInt(0,10); indice < longueur; indice++)
//     {
//         for(jndice = parseInt(0,10); jndice < longueur - 1; jndice++)
//         {
//             if(tableau[jndice] > tableau[jndice + 1])
//             {
//                 temporaire = tableau[jndice];
//                 tableau[jndice] = tableau[jndice + 1];
//                 tableau[jndice + 1] = temporaire;

//                 permutation = true;
//             }

//         }
//     }
    
//     console.log("Tableau trié :\n");

//     AfficheTab();
// }

// triBulle();

// var entier=parseInt(prompt("Saisissez un nombre entier :"))
// var myTableau=[]
// function GetInteger()
// {
//     console.log("function GetInteger")
//     return(entier)
// }
// GetInteger()

// var taille=parseInt(prompt("Entrez la taille :"));
// function InitTab()
// {
//     console.log("function InitTab")
//     var myTableau= Array(taille)
//     return(myTableau)
// }
// InitTab()

// var c=0
// function SaisieTab()
// {
//     console.log("function SaisieTab")
//     while(c<taille){
//         var nombre=parseInt(prompt("Entrez les notes :"));
//         console.log("Voila votre nombres " + nombre);
//         myTableau[c]= nombre
//         c++
//     }
//     return(myTableau)
// }
// SaisieTab()

// function AfficheTab()
// {
//     console.log("function AfficheTab")
//     alert(myTableau)
// }
// AfficheTab()

// function RechercheTab()
// {
//     console.log("function RechercheTab")
//     alert(myTableau[entier])
//     console.log(entier)
// }
// RechercheTab()

// function InfoTab()
// {
//     console.log("function InfoTab")
// var moyenne=0
// var somme=0
// var l=myTableau.length //.length calcul la longueur du tableau
// for(i=0;i<l;i++){
// somme+=myTableau[i]
// }
// moyenne=somme/l
// console.log(moyenne)
// alert(moyenne)
// }
// InfoTab()

// var tab = [];
// var moyenne1 = 0;
// var somme=0;
// var longueur =0;
// var moyenne =0;
// do {

//     nb=prompt("Entrez votre nombre\n Entrez 0 pour terminer");
//     somme = somme + parseInt(nb,10);
//     var moyenne1 = parseInt(nb,10) / somme;
//     console.log("le nombre saisit est : " + nb);
//     console.log(tab);
//     console.log("addition de nombre saisit :" + somme);
//     tab [0] = nb;
//     console.log(moyenne1);
//     if (nb > 0) {
//         for (var i = 0; i < tab.length; i++) {
//             longueur = tab[i+1];
//             tab.push(nb);
//             console.log(longueur);
//         }
//     }
// } while (nb != "0") {
//     moyenne = moyenne1;
// }

// console.log("la moyenne est de : "+ moyenne);


var tableau = [];
var somme=0;
var longueur =0;
var moyenne =0;

const taille = parseInt(prompt("Choisissez une longueur de tableau"));
while (tableau.length != longueur) 
{
    var n = parseInt(prompt("Entrez votre nombre\n Entrez 0 pour terminer"));
    tableau.push(n);
    somme = somme + parseInt(nb);
    var moyenne1 = parseInt(nb,) / somme;
    console.log();

} 
console.log(tableau);
document.write(tableau);
