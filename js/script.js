// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
let userChoice = ""
let computerChoice = ""
let winner =""
let randomNumber = 0





$("button").click(function(){
    randomNumber = Math.random();
   userChoice= $("input").val();
    $("#userChoice").text(userChoice)


if(randomNumber >.66){
    computerChoice = 'rock';

     }


    else if(randomNumber >.33){
     computerChoice = 'paper';
    }

    else {
     computerChoice = 'scissors';
    }
console.log(computerChoice)
$("#computerChoice").html(computerChoice);

if (userChoice === computerChoice){
    console.log('tied!')
    $("#result").html(" Tied!");

}
});


// DOCUMENT READY FUNCTION BELOW

