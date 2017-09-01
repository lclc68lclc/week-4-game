$(document).ready(function() {

    var wins = 0;
    var losses = 0;
    var score = 0;
    var computerRandom = Math.floor(Math.random() * 120) + 1;
    var crystalRandom = Math.floor(Math.random() * 12) + 1;

    $("#1").on("click", function() {
        var oneRandom = crystalRandom;
        console.log(oneRandom);
    });
})