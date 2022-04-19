document.addEventListener("DOMContentLoaded", function(){ document.getElementById('rock').addEventListener('click', executerock);('Loaded!'); });

document.addEventListener("DOMContentLoaded", function(){ document.getElementById('paper').addEventListener('click', executepaper);('Loaded!'); });

document.addEventListener("DOMContentLoaded", function(){ document.getElementById('scissors').addEventListener('click', executescissors);('Loaded!'); });


let output = document.querySelector('#output');
let yourscore=0;
let computersscore=0;
let outcome=""


function getRandomInt() {
    return Math.floor(Math.random() * 3);
  }


function executerock(){
    let whichisit = getRandomInt();

    let weapons = ['rock','paper','scissors'];

    let computerattack = weapons[whichisit];

    function youchoserock() {          
      if (computerattack=="rock"){
          document.getElementById("output").innerHTML = "You chose rock. The computer chose rock too. DRAW! Your score = "+yourscore+" Computer's score = "+computersscore+outcome;
    }  else if (computerattack=="paper"){ 
          computersscore++;
          if (yourscore==5){
            outcome=(" YOU'VE WON THE GAME!")}
            else if (computersscore==5){
            outcome=(" THE COMPUTER BEAT YOU!")}
            else {
            outcome=""}
          document.getElementById("output").innerHTML = "You chose rock. The computer chose paper. You LOSE this round! Your score = "+yourscore+" Computer's score = "+computersscore+ outcome;
    }  else {
          console.log("You chose rock. The computer chose scissors. You WIN!");
          yourscore++;
          if (yourscore==5){
            outcome=(" YOU'VE WON THE GAME!")}
            else if (computersscore==5){
            outcome=(" THE COMPUTER BEAT YOU!")}
            else {
            outcome=""}
          document.getElementById("output").innerHTML = "You chose rock. The computer chose scissors. You WIN this round! Your score = "+yourscore+" Computer's score = "+computersscore + outcome;
    }
  };

    youchoserock()
};

function executepaper(){
  let whichisit = getRandomInt();

  let weapons = ['rock','paper','scissors'];

  let computerattack = weapons[whichisit];

  function youchosepaper() {          
    if (computerattack=="rock"){
        yourscore++;
        if (yourscore==5){
          outcome=(" YOU'VE WON THE GAME!")}
          else if (computersscore==5){
          outcome=(" THE COMPUTER BEAT YOU!")}
          else {
          outcome=""}
        document.getElementById("output").innerHTML = "You chose paper. The computer chose rock. You WIN this round! Your score = "+yourscore+" Computer's score = "+computersscore+outcome;
  }  else if (computerattack=="paper"){ 
        document.getElementById("output").innerHTML = "You chose rock. The computer chose paper. You LOSE this round! Your score = "+yourscore+" Computer's score = "+computersscore+ outcome;
  }  else {
      computersscore++;
        if (yourscore==5){
          outcome=(" YOU'VE WON THE GAME!")}
          else if (computersscore==5){
          outcome=(" THE COMPUTER BEAT YOU!")}
          else {
          outcome=""}
      document.getElementById("output").innerHTML = "You chose paper. The computer chose scissors. You LOSE this round! Your score = "+yourscore+" Computer's score = "+computersscore + outcome;
  }
};
  youchosepaper()
};

function executescissors(){
  let whichisit = getRandomInt();

  let weapons = ['rock','paper','scissors'];

  let computerattack = weapons[whichisit];

  function youchosescissors() {          
    if (computerattack=="rock"){
        computersscore++;
        if (yourscore==5){
        outcome=(" YOU'VE WON THE GAME!")}
        else if (computersscore==5){
        outcome=(" THE COMPUTER BEAT YOU!")}
        else {
        outcome=""}
      document.getElementById("output").innerHTML = "You chose scissors. The computer chose rock. You LOSE this round! Your score = "+yourscore+" Computer's score = "+computersscore +outcome;
  }  else if (computerattack=="paper"){ 
        yourscore++;
        if (yourscore==5){
          outcome=(" YOU'VE WON THE GAME!")}
          else if (computersscore==5){
          outcome=(" THE COMPUTER BEAT YOU!")}
          else {
          outcome=""}
        document.getElementById("output").innerHTML = "You chose scissors. The computer chose paper. You WIN this round! Your score = "+yourscore+" Computer's score = "+computersscore+ outcome;
  }  else {
        document.getElementById("output").innerHTML = "You chose scissors. The computer also chose scissors. DRAW! Your score = "+yourscore+" Computer's score = "+computersscore + outcome;
  }
};

  youchosescissors()
};
