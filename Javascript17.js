var messageErreur = "";

document.getElementById("formulaire").addEventListener("submit", function(e) {
    // SOCIETE //
    var societe = document.getElementById("societe");
    var societeFiltre = new RegExp("^[a-z]+$");
    // La variable societeFiltre prends comme valeur la synthaxe Regexp.
    console.log(societe.value);
    var testSociete = societeFiltre.test(document.getElementById("societe").value);
    // LA variable testsociete prend comme valeur la variable societefiltre qui elle filtre la valeur saisit dans le html et le compare à la synthaxe regexp.
    console.log(testSociete);
    var maSociete = societeFiltre.test(document.getElementById("societe").value);
    if (testSociete != true) {
        // Si la variable testsociete est différent de "vrai" alors la valeur saisit est incorrect donc on demande à l'utilisateur de saisir une valeur correct.
        messageErreur = messageErreur + ("Veuillez renseigner correctement le nom votre societe");
        e.preventDefault();
    } else if (maSociete == "") {
        messageErreur = messageErreur + ("Veuillez renseigner votre societe");
    }
    // PERSONNE A CONTACTER //
    var Contact = document.getElementById("Contact");
    ContactFiltre = new RegExp("^[a-zA-Z]+$");
    console.log(Contact.value);
    var testContact = ContactFiltre.test(document.getElementById("Contact").value);
    console.log(testContact);
    var maContact = ContactFiltre.test(document.getElementById("Contact").value);
    if (testContact != true) {
        messageErreur = messageErreur + ("\nVeuillez renseigner correctement le nom de la personne à contacter");
        e.preventDefault();
    } else if (maContact == "") {
        messageErreur = messageErreur + ("Veuillez renseigner votre societe");
    }
    // ADRESSE DE L'ENTREPRISE
    var Entreprise = document.getElementById("Entreprise");
    EntrepriseFiltre = new RegExp("^[a-zA-Z]+$");
    console.log(Entreprise.value);
    var testEntreprise = EntrepriseFiltre.test(document.getElementById("Entreprise").value);
    console.log(testEntreprise);
    var MyEntreprise = EntrepriseFiltre.test(document.getElementById("Entreprise").value);
    if (testEntreprise != true) {
        messageErreur = messageErreur + ("\nVeuillez renseigner correctement le nom de votre entreprise");
        e.preventDefault();
    } else if (MyEntreprise == "") {
        messageErreur = messageErreur + ("Veuillez renseigner votre entreprise");
    }

    // CODE POSTAL 
    var CP = document.getElementById("CP");
    CPFiltre = new RegExp("^[0-9]{5}$");
    console.log(CP.value);
    var testCP = CPFiltre.test(document.getElementById("CP").value);
    console.log(testCP);
    var MyCP = CPFiltre.test(document.getElementById("CP").value);
    if (testCP != true) {
        messageErreur = messageErreur + ("\nVeuillez renseigner correctement votre code postal");
        e.preventDefault();
    } else if (MyCP == "") {
        messageErreur = messageErreur + ("Veuillez renseigner votre code postal");
    }
    // VILLE //
    var Ville = document.getElementById("Ville");
    VilleFiltre = new RegExp("^[a-zA-Z]+$");
    console.log(Ville.value);
    var testVille = VilleFiltre.test(document.getElementById("Ville").value);
    console.log(testVille);
    var MyVille = VilleFiltre.test(document.getElementById("Ville").value);
    if (testVille != true) {
        messageErreur = messageErreur + ("\nVeuillez renseigner correctement le nom de votre ville");
        e.preventDefault();
    } else if (MyVille == "") {
        messageErreur = messageErreur + ("Veuillez renseigner votre ville");
    }
    // EMAIL
    var Email = document.getElementById("Email");
    EmailFiltre = new RegExp("^[a-zA-Z.0-9]+@[a-zA-Z.0-9]+$");
    console.log(Email.value);
    var testEmail = EmailFiltre.test(document.getElementById("Email").value);
    console.log(testEmail);
    var MyEmail = EmailFiltre.test(document.getElementById("Email").value);
    if (testEmail != true) {
        messageErreur = messageErreur + ("\nVeuillez renseigner correctement votre email");
        e.preventDefault();
    } else if (MyEmail == "") {
        messageErreur = messageErreur + ("Veuillez renseigner votre email");
    }
    // TELEPHONE
    var telephone = document.getElementById("telephone");
    telephoneFiltre = new RegExp("^0[1-9]{9}$");
    console.log(telephone.value);
    var testtelephone = telephoneFiltre.test(document.getElementById("telephone").value);
    console.log(testtelephone);
    var MyTel = telephoneFiltre.test(document.getElementById("telephone").value);
    if (testtelephone != true) {
        messageErreur = messageErreur + ("\nVeuillez renseigner correctement votre n° de téléphone");
        e.preventDefault();
    } else if (MyTel == "") {
        messageErreur = messageErreur + ("Veuillez renseigner votre n° de téléphone");
    }
    // ENVIRONNEMENT TECHNIQUE DU PROJET
    var type = document.getElementById("type");
    typeFiltre = new RegExp("^[a-zA-Z]+$");
    // console.log(type.value);
    var testtype = typeFiltre.test(document.getElementById("type").value);
    console.log(testtype);
    var MyType = typeFiltre.test(document.getElementById("type").value);
    if (testtype != true) {
        messageErreur = messageErreur + ("\nVeuillez renseigner correctement votre environnement technique");
        e.preventDefault();
    } else if (MyType == "") {
        messageErreur = messageErreur + ("Veuillez renseigner votre environnement technique");
    }

    if (messageErreur == "") {
    } else {
        alert(messageErreur);
        e.preventDefault();
    }


});


// Manipulation de la liste
document.getElementById("selecteur").addEventListener("change", function(e) {
    testSelecteur = document.getElementById("selecteur").value;
    console.log(testSelecteur);
    if (testSelecteur == "Autres") {
        document.getElementById("type").focus();
        //   Quand l'utilisateur saisit la valeurs "Autres" il prend directement le focus sur la saisit "environnement technique du projet".
    } else if (testSelecteur == "Choisissez") {
        document.getElementById("type").focus();
    } else {

        var type = document.getElementById("type").value;
        document.getElementById("type").value = testSelecteur;
        console.log(testSelecteur);
    }
});
