///////////////////////////////////////////////////// Exercice 1 //////////////////////////////////////////

// document.getElementById("inscription").addEventListener("submit",function()
// {
//     var pseudo = document.getElementById("pseudo");
//     alert('Vous avez saisit '+ pseudo.value);

// })

///////////////////////////////////////////////// Fin Exercice 1 //////////////////////////////////////////

///////////////////////////////////////////////////// Exercice 2 //////////////////////////////////////////

var rand = Math.floor(Math.random()*100);
console.log(rand);

document.getElementById("test").addEventListener("click", function(e)
{      
    console.log(rand);

    pseudo = document.getElementById("pseudo").value;
    // Le .value permet d'affecter à la variable pseudo la saisit faite dans le HTML et non pas la ligne directement écrite dans le HTML.
    console.log(pseudo);
    
        
        
        if (pseudo == rand)
        {
            alert("Vous avez saisie : "+ pseudo + "\n Vous avez trouvé le nombre aléatoire exacte bien ouej :D !");
            e.preventDefault();
        }
        else if (rand > pseudo) 
        {
            alert("Vous avez saisie : "+ pseudo + "\n Votre valeur est trop petite veuillez réessayer !");
            e.preventDefault();

        }
        else if (rand < pseudo) {
                    
            alert("Vous avez saisie : "+ pseudo + "\n Votre valeur est trop grande veuillez réessayer !");
            e.preventDefault();
        }
 
});

// var resultat = verif();

// A la fin de la fonction document getelementbyid il faut refermer les parenthèses à la fin des accolades.


//////////////////////////////////////////////////Fin Exercice 2 //////////////////////////////////////////
