$(document).ready(function () {

    let wins = 0;
    let losses = 0;
    let myScore = 0;
    let goal = Math.floor(Math.random() * 102) + 19;
    let worthOne = Math.floor(Math.random() * 13)+1;
    let worthTwo = Math.floor(Math.random() * 13)+1;
    let worthThree = Math.floor(Math.random() * 13)+1;
    let worthFour = Math.floor(Math.random() * 13)+1;
    
    console.log(goal);
    function initializeGame() {
        goal = Math.floor(Math.random() * 102) + 19;
        myScore = 0;
        console.log(goal)
        worthOne = Math.floor(Math.random() * 13)+1;
        worthTwo = Math.floor(Math.random() * 13)+1;
        worthThree = Math.floor(Math.random() * 13)+1;
        worthFour = Math.floor(Math.random() * 13)+1;
        $("#goalScore").text(goal);
    }
    initializeGame();
    $("#gemOne").on("click", function () {
        
        $("#gemOne").attr("crystalValue", worthOne);
        let gemValue = ($(this).attr("crystalValue"));
        console.log(gemValue);
        
        
        gemValue = parseInt(gemValue);
        myScore += gemValue;
        console.log(myScore);
        $("#score").text(myScore);
        
        if (myScore === goal){
            console.log("you win")
            wins++;
            $("#wins").text(wins);
            initializeGame();
        };
        if (myScore > goal){
            console.log("you lose");
            losses++;
            $("#losses").text(losses);
            initializeGame();
        };
    });

    $("#gemTwo").on("click", function () {

        $("#gemTwo").attr("crystalValue", worthTwo);
        let gemValue = ($(this).attr("crystalValue"));
        console.log(gemValue);
        gemValue = parseInt(gemValue);
        myScore += gemValue;
        console.log(myScore);
        $("#score").text(myScore);
        if (myScore === goal){
            console.log("you win")
            wins++;
            $("#wins").text(wins);
            initializeGame();
        };
        if (myScore > goal){
            console.log("you lose");
            losses++;
            $("#losses").text(losses);
            initializeGame();
        };
    });

    $("#gemThree").on("click", function () {

        $("#gemThree").attr("crystalValue", worthThree);
        let gemValue = ($(this).attr("crystalValue"));
        console.log(gemValue);
        gemValue = parseInt(gemValue);
        myScore += gemValue;
        console.log(myScore);
        $("#score").text(myScore);
        if (myScore === goal){
            console.log("you win")
            wins++;
            $("#wins").text(wins);
            initializeGame();
        };
        if (myScore > goal){
            console.log("you lose");
            losses++;
            $("#losses").text(losses);
            initializeGame();
        };
    });

    $("#gemFour").on("click", function () {

        $("#gemFour").attr("crystalValue", worthFour);
        let gemValue = ($(this).attr("crystalValue"));
        console.log(gemValue);
        gemValue = parseInt(gemValue);
        myScore += gemValue;
        console.log(myScore);
        $("#score").text(myScore);
        if (myScore === goal){
            console.log("you win")
            wins++;
            $("#wins").text(wins);
            initializeGame();
        };
        if (myScore > goal){
            console.log("you lose");
            losses++;
            $("#losses").text(losses);
            initializeGame();
        };
        
    });

























});