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
console.log(goal);
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
        if (myScore === goal){
            console.log("you win")
            wins++;
            $("#wins").text(wins);
        };
        if (myScore > goal){
            console.log("you lose");
            losses++;
            $("#losses").text(losses);
        };
    });

    $("#gemTwo").on("click", function () {

        $("#gemTwo").attr("crystalValue", worthTwo);
        let gemValue = ($(this).attr("crystalValue"));
        console.log(gemValue);
        gemValue = parseInt(gemValue);
        myScore += gemValue;
        console.log(myScore);
        if (myScore === goal){
            console.log("you win")
            wins++;
            $("#wins").text(wins);
        };
        if (myScore > goal){
            console.log("you lose");
            losses++;
            $("#losses").text(losses);
        };
    });

    $("#gemThree").on("click", function () {

        $("#gemThree").attr("crystalValue", worthThree);
        let gemValue = ($(this).attr("crystalValue"));
        console.log(gemValue);
        gemValue = parseInt(gemValue);
        myScore += gemValue;
        console.log(myScore);
        if (myScore === goal){
            console.log("you win")
            wins++;
            $("#wins").text(wins);
        };
        if (myScore > goal){
            console.log("you lose");
            losses++;
            $("#losses").text(losses);
        };
    });

    $("#gemFour").on("click", function () {

        $("#gemFour").attr("crystalValue", worthFour);
        let gemValue = ($(this).attr("crystalValue"));
        console.log(gemValue);
        gemValue = parseInt(gemValue);
        myScore += gemValue;
        console.log(myScore);
        if (myScore === goal){
            console.log("you win")
            wins++;
            $("#wins").text(wins);
        };
        if (myScore > goal){
            console.log("you lose");
            losses++;
            $("#losses").text(losses);
        };
    });

























});