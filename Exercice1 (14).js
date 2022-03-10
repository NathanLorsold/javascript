var btn15 = document.getElementById ("btn15");
btn15.addEventListener ("click", clickbtn15);
function clickbtn15 ()
{

alert("Coucou ! <title>Mon 1er script</title>");
   console.log("Ah que Coucou !");
  //  document.write("Coucou beuh !");
//    le document.write prend en compte les balises saisit entre guillemet tans dis que 
//    la balise alert ne prends en compte rien du tout et affiche bêtement ce qu'on lui écrit.
  document.write("<title>Mon 1er script</title>");

//   alert("<title>Mon 1er script</title>");
}