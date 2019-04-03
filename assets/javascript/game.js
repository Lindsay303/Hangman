    
$(document).ready(function() {
    console.log(document.getElementById('#letRemain'));
 
 var words = ["Luke", "Leia", "Solo", "Darth", "Chewy", "Empire", "Jedi", "Force", "Sith", "Master"];
 // var alphabet = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,guessedString,wordLetter,u,v,w,x,y,z,";
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
    var guessedString = "";
    var wordLetter = chosenWordLetters.join('');
 
    for (let i = 0; i < N; i++) {
       var charToAppend;
       if (guessedLetters.has(chosenWordLower[i])) {
          charToAppend = chosenWord[i]
       }
       else {
          charToAppend = '_';
       }
       guessedString = guessedString.concat(charToAppend);
 
    }  
    $('#letGuessed').text(wordLetter);
    $('#word').text(guessedString
);
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