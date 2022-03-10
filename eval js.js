/////////////////////////////////////////////////////////////////EXERCICE 1 //////////////////////////////////////////////////////////////////
// var tabage = [];
// var nbenfant= 0;
// var nbadultes = 0;
// var adultesJeunes = 0;
// var age;
// do {
//     age = parseInt(prompt("Saisissez votre âge ?"))
//     tabage.push(age);
//     console.log(tabage);
//     if (age < 20) {
//          nbenfant++;
//          console.log("Il y a :" + nbenfant + "\nde personnes inférieurs à 20ans");

//         // console.log("Vous avez :" + age + "ans" + "\n vous êtes encore un enfant :D !");
//     } else if (age > 40)
//         {
//         nbadultes++;
//         adultesJeunes++;
//         // console.log(nbadultes);

//         console.log("Il y a :" + nbadultes + "\npersonnes supérieurs à 40ans");

//         // console.log("vous avez :" + age + "ans" + "\n vous êtes un adultes !");
//         }
//      else // (age > 20 || age > 40) 
//         {
//             adultesJeunes++;
//             console.log("Il y a "+ adultesJeunes + "\nqui ont un âge entre 40 et 20ans");
//         }
    
    
// }
// while (age < 100) {
    
// }
// console.log("Il y a :" + nbenfant + " personnes\n inférieurs à 20ans");
// console.log("Il y a :" + nbadultes + " personnes\nsupérieurs à 40ans");
// console.log("Il y a "+ adultesJeunes + " personnes\nqui ont un âge entre 40 et 20ans");
////////////////////////////////////////////////////////////////FIN EXERCICE 1 //////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////// EXERCICE 2 //////////////////////////////////////////////////////////////////

// var n = window.prompt("Saisissez un nombre")
// function Multiplication (n) 
// {
//     for (i = 0; i < 10 ; i++ )
//     {
//         resultat= (n*i);
//         console.log(resultat);
//         alert(n+" x "+i + " = " + resultat)

//     }

// }
// Multiplication(n);
// console.log(resultat);
// console.log(i);
// console.log("le nombre saisit est : " + n);

////////////////////////////////////////////////////////////////FIN EXERCICE 2 //////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////// EXERCICE 3 //////////////////////////////////////////////////////////////////

// var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
// var occurence = tab.indexOf(prenom);
// var prenom = (window.prompt("Saisissez un prénom"));
// console.log("Vous avez saisit le prénom :" + prenom);
// if (occurence > -1) 
// {
//     tab.splice(occurence, 1);
//     tab.push("");
// }
// else
// {
//     alert("Vous n'avez saisit aucun prénom dans le tableau");
// }
// console.log(tab);

//////////////////////////////////////////////////////////////// FIN EXERCICE 3 //////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////// EXERCICE 4 ///////////////////////////////////////////////////////////////////

// var PU = prompt("Saisissez un prix");
// var QTECOM = prompt("Choisissez une quantité a commandé ");
// var PAP = 0;
// var REM = 0;
// var PORT = 0;
// var TOT = (parseInt(PU)*parseInt(QTECOM));
// console.log(TOT);

// if (TOT >= 100 && TOT <= 200) 
// {
//     var resultat = (TOT * 5) /100;
//     PAP = TOT - resultat;
//     console.log("Le prix a payer sera de : " + PAP + "après une remise de 5%");
//     if (PAP < 500) 
//     {
//         PORT = (PAP * 2) / 100; 
//         console.log("Les frais de port s'eleve à : "+ PORT);   
//         if (PORT < 6) 
//         {
//             resultat = (PAP + 6)
//             console.log("Le prix à payer avec les frais de port est de : "+resultat);    
//         }
//     }
// } else if (TOT < 100) {
//     PAP = TOT;
//     if (PAP < 500) 
//     {
//         PORT = (PAP * 2) / 100;
//         console.log(PORT);
//         if (PORT < 6) 
//         {
//             resultat = (PAP + 6)
//             console.log("Le prix a payer avec les frais de port et sans aucune remise est de : "+resultat);    
//         }    
//     }
// } else 
// {
//     resultat = (TOT * 10) / 100;
//     PAP = TOT - resultat;
//     console.log("Le prix a payer sera de : "+PAP+" après une remise de 10%");

//     if (PAP < 500) 
//     {
//         PORT = (PAP * 2) / 100;
//         var resultatfinal = PAP + PORT;
//         console.log("Les frais de port s'eleve a : "+PORT);
//         if (PORT < 6) 
//         {
//             resultat = (TOT + 6);
//             console.log(resultat);
//             console.log("Le prix avec les frais de port sera de : "+resultat);
//         }
//     }else  
//     {
//         console.log("Le prix a payer après toutes les reduction sera de : "+PAP);
//     }
// }

//////////////////////////////////////////////////////////////// FIN EXERCICE 4 //////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////// EXERCICE 5 ///////////////////////////////////////////////////////////////////

var formulaire  = document.getElementById("formulaire");
var nom = document.getElementById("nom");
var missNom = document.getElementById("missNom");
var missPrenom = document.getElementById("missPrenom");
var prenom = document.getElementById("prenom")
var sexe = document.getElementById("sexe");
var missSexe = document.getElementById("missSexe");
// var nomFiltre =/^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
// var testNom = nomFiltre.test(nom.value);

// NOM
formulaire.addEventListener("submit", function (e){ 
//    console.log(nom.value);

//    console.log(testNom == "");
//    console.log(nom);
var nomFiltre =/^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
var testNom = nomFiltre.test(nom.value);

    if (nom.value == "")
    {
        missNom.textContent = "nom manquant";
        missNom.style.color = "red";
        e.preventDefault();

    }
     else if(testNom == false)
    {
        missNom.textContent = "entrez correctement votre nom";
        missNom.style.color = "orange";
        e.preventDefault();
    }
    else {
        missNom.textContent="";
    }

    console.log(testNom);
    console.log(nomFiltre.test(nom.value));
});
// PRENOM
formulaire.addEventListener("submit", function (e){ 
    //    console.log(nom.value);
    
    //    console.log(testNom == "");
    //    console.log(nom);
    var prenomFiltre =/^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
    var testprenom = prenomFiltre.test(prenom.value);
    
        if (prenom.value == "")
        {
            missPrenom.textContent = "prénom manquant";
            missPrenom.style.color = "red";
            e.preventDefault();
    
        }
         else if(testprenom == false)
        {
            missPrenom.textContent = "entrez correctement votre prénom";
            missPrenom.style.color = "orange";
            e.preventDefault();
        }
        else {
            missPrenom.textContent="";
        }

    });
    // SEXE 
formulaire.addEventListener("submit", function (e){ 

    var homme = document.getElementById("homme").checked;
    var femme = document.getElementById("femme").checked;
    var Deuxsexe = femme || homme;
    if (Deuxsexe != true) {
    missSexe.textContent = "sexe manquant";
    missSexe.style.color = "red";
    console.log(Deuxsexe);
    e.preventDefault();
    }
    else {
        missSexe.textContent="";
    }
});
// DDN
formulaire.addEventListener("submit", function (e){

        if (birthday.value == "")
        {
            missBirthday.textContent = "Date de naissance manquante";
            missBirthday.style.color = "red";
            e.preventDefault();
    
        }
        else {
            missBirthday.textContent="";
        }

    });
// CODE POSTAL
formulaire.addEventListener("submit", function (e){ 

    var CPFiltre = new RegExp("^[0-9]{5}$");
    var testCP = CPFiltre.test(CP.value);
    
        if (CP.value == "")
        {
            missCP.textContent = "Code postal manquant";
            missCP.style.color = "red";
            e.preventDefault();
    
        }
        else if(testCP == false)
        {
            missCP.textContent = "entrez correctement votre Code Postal";
            missCP.style.color = "orange";
            e.preventDefault();
        }
        else {
            missCP.textContent="";
        }

    });
// EMAIL
formulaire.addEventListener("submit", function (e){ 

    var EmailFiltre = new RegExp("^[a-zA-Z.0-9]+@[a-zA-Z.0-9]+$");
    var testEmail = EmailFiltre.test(email.value);
    
        if (email.value == "")
        {
            missEmail.textContent = "Email manquant";
            missEmail.style.color = "red";
            e.preventDefault();
        }
        else if(testEmail == false)
        {
            missEmail.textContent = "entrez correctement votre Email";
            missEmail.style.color = "orange";
            e.preventDefault();
        }
        else {
            missEmail.textContent="";
        }

    });
// SUJET
formulaire.addEventListener("submit", function (e){ 

    var SujetFiltre = new RegExp("^[a-zA-Z ]+$")
    var testSujet = SujetFiltre.test(sujet2.value);
    
        if (sujet2.value == "")
        {
            missSujet.textContent = "Sujet manquant";
            missSujet.style.color = "red";
            e.preventDefault();
    
        }
        else if(testSujet == false)
        {
            missSujet.textContent = "Saisissez correctement votre Sujet de question ";
            missSujet.style.color = "orange";
            e.preventDefault();
        }
        else {
            missSujet.textContent="";
        }

    });
// QUESTION 
formulaire.addEventListener("submit", function (e){ 

    var QuestionFiltre = new RegExp("^[a-zA-Z ?]+$")
    var testQuestion = QuestionFiltre.test(quest.value);
    
        if (quest.value == "")
        {
            missQuestion.textContent = "Question manquante";
            missQuestion.style.color = "red";
            e.preventDefault();
    
        }
        else if(testQuestion == false)
        {
            missQuestion.textContent = "Saisissez correctement votre question";
            missQuestion.style.color = "orange";
            e.preventDefault();
        }
        // On fait disparaitre ici le message d'erreur quand la saisie est correcte.
        else {
            missQuestion.textContent="";
        }

});
// CHECKBOX
formulaire.addEventListener("submit", function (e){ 

    var check = document.getElementById(check).checked;    
    if (check != true) {
        missCheck.textContent = "Confirmation manquante";
        missCheck.style.color = "red";
        e.preventDefault();
    }
            else {
            missCheck.textContent="";
        }

});

//////////////////////////////////////////////////////////////// FIN EXERCICE 5 //////////////////////////////////////////////////////////////////













