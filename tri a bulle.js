function GetInteger(TextMsg)
{
    var nombre = prompt(TextMsg);
    nombre = parseInt(nombre,10);
    console.log("Vous avez saisi le nombre "+ nombre +".");
    return nombre;
}

function InitTab()
{
    nombre = GetInteger("Veuillez préciser la taille du tableau.");

    tableau = Array(nombre);
}

function SaisieTab()
{
    

        for (indice = parseInt(0,10); indice < nombre; indice ++)
    {
        tableau[indice] = GetInteger("Veuillez saisir la valeur de l'élément d'indice "+ indice +".");
    }

}

function AfficheTab()
{
        for (indice = parseInt(0,10); indice < nombre; indice ++)
    {
        console.log(tableau[indice]);
    }
}
// GetInteger();
// InitTab();
// SaisieTab();
// AfficheTab();

var permutation = false;
var intermediaire;

// function Tri_a_bulles()
// {
//     InitTab();
//     SaisieTab();

//     console.log("Tableau non trié :\n");

//     AfficheTab();

//     for (indice = parseInt(0,10); indice < nombre; indice ++)
//     {
//         if(tableau[indice]>tableau[indice+1])
//         {
//             intermediaire = tableau[indice];
//             tableau[indice] = tableau[indice+1];
//             tableau[indice+1] = intermediaire;

//             permutation = true;
//         }
//     }

//     console.log("Tableau trié :\n");

//     AfficheTab();
// }

// Tri_a_bulles();

function triBulle()
{
    InitTab();
    SaisieTab();

    console.log("Tableau initiale :\n");

    AfficheTab();

    changement = false;
    longueur = tableau.length;

    for(i = parseInt(0,10); i < longueur; i++)
    {
        for(indice = parseInt(0,10); indice < longueur - 1; indice++)
        {
            if(tableau[indice] > tableau[indice + 1])
            {
                stock = tableau[indice];
                tableau[indice] = tableau[indice + 1];
                tableau[indice + 1] = stock;

                changement = true;
            }

        }
    }
    
    console.log("Tableau finale :\n");

    AfficheTab();
}

triBulle();