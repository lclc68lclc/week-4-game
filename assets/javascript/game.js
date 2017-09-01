$(document).ready(function() {

    var wins = 0;
    var losses = 0;
    var score = 0;
    var computerRandom = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    var crystalRandom = Math.floor(Math.random() * 12) + 1;

    $("#1").on("click", function() {
        var oneRandom = crystalRandom;
        console.log(oneRandom);
    });

    $("#2").on("click", function() {
        var twoRandom = crystalRandom;
        console.log(twoRandom);
    });

    $("#3").on("click", function() {
        var threeRandom = crystalRandom;
        console.log(threeRandom);
    });

    $("#4").on("click", function() {
        var fourRandom = crystalRandom;
        console.log(fourRandom);
    });

    $("#computer-guess").html("<h2>" + computerRandom + "</h2>");

    $(".score").html(score += oneRandom);

})