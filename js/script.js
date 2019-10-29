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
    let userinput= $("input").val();
    $("#userChoice").text(userinput)

});



// DOCUMENT READY FUNCTION BELOW

