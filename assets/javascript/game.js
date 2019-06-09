$(document).ready(function(){

let wins = 0;
let losses = 0;
let myScore = 0;
let goal = Math.floor(Math.random()*120)+19;
let gameStarted = false;
let worthOne = Math.floor(Math.random()*13);
let worthTwo = Math.floor(Math.random()*13);
let worthThree = Math.floor(Math.random()*13);
let worthFour = Math.floor(Math.random()*13);

function initializeGame(){
    goal = Math.floor(Math.random()*120)+19;
    myScore = 0;
    gameStarted = false;
}

$("#gemOne").on("click", function(){
    
$("#gemOne").attr("crystalValue", worthOne);
const gemValue = ($(this).attr("crystalValue"));
console.log(gemValue);
});

$("#gemTwo").on("click", function(){
    
    $("#gemTwo").attr("crystalValue", worthTwo);
    const gemValue = ($(this).attr("crystalValue"));
    console.log(gemValue);
    });

$("#gemThree").on("click", function(){
    console.log("clicked");
    $("#gemThree").attr("crystalValue", worthThree);
    const gemValue = ($(this).attr("crystalValue"));
    console.log(gemValue);
});

$("#gemFour").on("click", function(){
    console.log("clicked");
    $("#gemFour").attr("crystalValue", worthFour);
    const gemValue = ($(this).attr("crystalValue"));
    console.log(gemValue);
});

























});