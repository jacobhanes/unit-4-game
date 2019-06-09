$(document).ready(function () {

    let wins = 0;
    let losses = 0;
    let myScore = 0;
    let goal = Math.floor(Math.random() * 120) + 19;
    let gameStarted = false;
    let worthOne = Math.floor(Math.random() * 13)+1;
    let worthTwo = Math.floor(Math.random() * 13)+1;
    let worthThree = Math.floor(Math.random() * 13)+1;
    let worthFour = Math.floor(Math.random() * 13)+1;

    function initializeGame() {
        goal = Math.floor(Math.random() * 120) + 19;
        myScore = 0;
        gameStarted = false;
    }

    $("#gemOne").on("click", function () {

        $("#gemOne").attr("crystalValue", worthOne);
        let gemValue = ($(this).attr("crystalValue"));
        console.log(gemValue);
        gemValue = parseInt(gemValue);
        myScore += gemValue;
        console.log(myScore);
    });

    $("#gemTwo").on("click", function () {

        $("#gemTwo").attr("crystalValue", worthTwo);
        let gemValue = ($(this).attr("crystalValue"));
        console.log(gemValue);
        gemValue = parseInt(gemValue);
        myScore += gemValue;
        console.log(myScore);
    });

    $("#gemThree").on("click", function () {

        $("#gemThree").attr("crystalValue", worthThree);
        let gemValue = ($(this).attr("crystalValue"));
        console.log(gemValue);
        gemValue = parseInt(gemValue);
        myScore += gemValue;
        console.log(myScore);
    });

    $("#gemFour").on("click", function () {

        $("#gemFour").attr("crystalValue", worthFour);
        let gemValue = ($(this).attr("crystalValue"));
        console.log(gemValue);
        gemValue = parseInt(gemValue);
        myScore += gemValue;
        console.log(myScore);
    });

























});