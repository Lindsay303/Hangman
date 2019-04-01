$(document).ready(function() {
   console.log(document.getElementById('#letRemain'));

var words = ["Luke", "Leia", "Solo", "Darth", "Chewy", "Empire", "Jedi", "Force", "Sith", "Master"];
// var alphabet = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,";
// var letterInWord = [];
// var currentWordIndex;
// console.log("this is the word" + chosenWordLetters;
// var chosenWord = words[Math.floor(Math.random()) * words.length];
var chosenWord = words[Math.floor(Math.random() * (words.length))];
var chosenWordLower = chosenWord.toLowerCase();
var N = chosenWord.length;
var lives = 10;
var guessedLetters = new Set([]);
var wins = 0;
var losses = 0; 
var chosenWordLetters = [];

function bad_guess() {
   lives -= 1;
   if (lives == 0) {
      alert('GAME LOST');
   }
}

function input_character(ch) {
   if (guessedLetters.has(ch))
      return;  /* ignore since the character has already been guessed before */
   guessedLetters.add(ch);

   chosenWordLetters.push(ch);
   
   var hit = false;
   for (let i = 0; i < N; i++) {
      if (ch === chosenWordLower[i])
         hit = true;
   }

   if (!hit) {
      bad_guess();
   }
}

function redraw_screen() {
   var s = "";
   var t = chosenWordLetters.join('');

   for (let i = 0; i < N; i++) {
      var charToAppend;
      if (guessedLetters.has(chosenWordLower[i])) {
         charToAppend = chosenWord[i]
      }
      else {
         charToAppend = '_';
      }
      s = s.concat(charToAppend);

   }  
   $('#letGuessed').text(t);
   $('#word').text(s);
   $('#letRemain').text(lives);
   $('#lost').text(losses);
   $('#won').text(wins);
   $('h2').text("     ");
   $('#word').text();
   console.log(chosenWord);
   console.log(chosenWordLetters);
}

$(document).on('keyup', function(ev) {
   var ch = String.fromCharCode(ev.which);
   input_character(ch.toLowerCase());
   redraw_screen();
});

$()



});

// document.onkeyup = function(event) {

//    // Determines which key was pressed.
//    var userGuess = event.key;
//    event.keyCode === (65-90);


// }
//  = document.querySelector('#');
// console.log(words);
// console.log(alphabet);

// display blanks for letters of chosen word str.replace(/[a-z]/g, '_')
// $().text(chosenWord)


// }    

// capture user guess r,p,s lookup key code (65-92?)
// create html chosen word letters
// on correct guess
      // fill in blank of index of chosen word 
// display user guess
         // $('.operator').on('click', function(){
         //    firstNumber = false;
         //    operator = this.value;
         //    console.log("operator is:", operator)
         //    $('#operator').text(operator);
// Show correct letters
// show incorrect guesses
// counter for
//     letters remaining
//     wins 
//     losses 
// debugger; --- check it out 