// EXO 1

// let A = 3;
// let B = 2;
// let C = A + B;
// let tartine = "j'aime les tartines et je mange "

// console.log(C);

// let parjour = " 4 par jours"

// tartine + parjour

// console.log(tartine + parjour);

// let trois = 5
// let quatre = 35

// trois + quatre

// console.log(trois + quatre);

// tartine + trois

// console.log(tartine + trois);

// let phrase = "salut tt le monde"

// console.log(phrase)

// let phrase2 = "au revoir !"

// console.log(phrase2)

// phrase=phrase2

// console.log(phrase)

// let operateur = 4
// let operateur2 = "6"

// operateur>operateur2

// operateur<operateur2

// operateur==operateur2

// operateur!=operateur2

// operateur===operateur2

// operateur!==operateur2

// let operateur3 = 4
// let operateur4 = 6

// operateur3>operateur4

// operateur3<operateur4

// operateur3==operateur4

// operateur3!=operateur4

// operateur3===operateur4

// operateur3==operateur4

// let operateur5 = "4"
// let operateur6 = "6"

// operateur5>operateur6

// operateur5<operateur6

// operateur5==operateur6

// operateur5!=operateur6

// operateur5===operateur6

// operateur5!==operateur6

// EXO2 :

// let A = 3;
// let B = 2;
// let C = A + B;

// console.log(C);

// EXO1

// let prenom  = "laurent"

// console.log(prenom);

// let age  = 33

// console.log(age);

// console.log(`${prenom} ${age}`);

// alert(`${prenom} ${age}`);

// Exo2

// let prenomexo2 = window.prompt("prenomexo2");
// let ageexo2 = window.prompt("ageexo2");

// let text = " ton nom " + prenomexo2 + " ton age " + ageexo2 ;

// console.log(text);

// alert(`${text}`);

// EXO 3

// let chiffre1 = window.prompt("chiffre1");
// let chiffre2 = window.prompt("chiffre2");
// chiffre1 = Number(chiffre1);
// chiffre2 = Number(chiffre2);

// let plus = chiffre1 + chiffre2;
// let moins = chiffre1 - chiffre2;
// let multiplication = chiffre1 * chiffre2;
// let division = chiffre1 / chiffre2;

// console.log(plus)
// console.log(moins)
// console.log(multiplication)
// console.log(division)

// EXO 4

// let phrase = prompt('phrase');
// let phrase2 = prompt('mot à changer');
// let replacement = prompt('nouvelleph');
// let modifiedPhrase = phrase.replace(phrase2, replacement);
// console.log(modifiedPhrase);
// alert(`${modifiedPhrase}`);

// hfjdk

// methodes string

// Consignes de l'exercice (vous devez chercher des méthodes string qui permettent de faire ceci) :
// 1. let phrase = "Bonjour tout le monde         "
// 2. Afficher la longueur de la phrase
// 3. Enlever l'espace à la fin grâce à une méthode
// 4. Reafficher la longueur de la phrase
// 5. Afficher uniquement la dernière lettre de la phrase
// 6. Enlever "Bonjour" de la phrase
// 7. Remettre "Bonjour" au debut de la phrase grâce à une méthode
// 8. Supprimer toute la phrase sauf "Bonjour" grâce à une méthode
// 9. Remplacer dans la phrase le mot "Bonjour" par le mot "string"
// 10. Bonus : Donner un chiffre aléatoire
// 11. Mettre la 5ème et la 7ème lettre en majuscule et tout le reste en minuscule de la variable phrase
// 12. Cherche l'index du 2ème O du mot bonjour
// 13. let nom = "votre nom" // mettez la première et la dernière lettre en majuscule grâce à des méthodes

// let phrase = "Bonjour tout le monde         ";
// console.log(phrase);

// console.log(phrase.length);

// phrase = phrase.trim();

// console.log(phrase);

// console.log(phrase.length);

// console.log(phrase.charAt(20));

// phrase2 = phrase.substring(8);
// console.log(phrase2);

// let phrase3 = `bonjour ${phrase2}`;

// console.log(phrase3);

// let phraseacouper = "Bonjour tout le monde";
// let words = phraseacouper.split(" ");
// words.splice(1);
// let result = words.join(" ");
// console.log(result);

// phrase = phrase.replace("Bonjour", "string");
// console.log(phrase);

// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

//   let randomNumber = getRandomNumber(1, 100);
//   console.log(randomNumber);
//   alert(`${randomNumber}`);



// let exo = "c'est une phrase"
// console.log(exo);

// exo = exo.substring(0,4) + exo[4].toUpperCase() + exo.substring(5);
// exo = exo.charAt(0).toUpperCase() + exo.slice(1);

// console.log(exo);


// let exo = "Bonjour tout le monde"
// let result2 = exo.lastIndexOf("o");
// console.log(result2);


// let nom = "Dugardin";

// // Uppercase the first letter
// let modifiedNom = nom.charAt(0).toUpperCase() + nom.slice(1);

// // Uppercase the last letter
// modifiedNom = modifiedNom.slice(0, -1) + modifiedNom.charAt(modifiedNom.length - 1).toUpperCase();

// console.log(modifiedNom);
