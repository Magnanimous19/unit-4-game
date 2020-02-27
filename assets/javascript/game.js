//$(document).ready(function()  {


//Logic for random number for starting value (19-120)
//================================================================
var targetMin = 19
var targetMax = 120
var targetNumber = Math.floor(Math.random() * (+targetMax - +targetMin)) + +targetMin;
document.write("Starting Value" + targetNumber);

//Starting counter set a 0
var counter = 0;

//Random Value for each crystal between 1 and 12
//=====================================================================================

//Red Crystal
var crystalMin = 1
var crystalMax = 12
var crystal1 = Math.floor(Math.random() * (+crystalMax - +crystalMin)) + +crystalMin;

var redCrystal = $("<img>");
redCrystal.addClass("crystal-image");
redCrystal.attr("src", "assets/images/red.jpg");
redCrystal.attr("data-crystalvalue", crystal1);
$("#crystals").append(redCrystal);


//Blue Crystal
var crystalMin = 1
var crystalMax = 12
var crystal2 = Math.floor(Math.random() * (+crystalMax - +crystalMin)) + +crystalMin;

var blueCrystal = $("<img>");
blueCrystal.addClass("crystal-image");
blueCrystal.attr("src", "assets/images/blue.jpg");
blueCrystal.attr("data-crystalvalue", crystal2);
$("#crystals").append(blueCrystal);


//Green Crystal
var crystalMin = 1
var crystalMax = 12
var crystal3 = Math.floor(Math.random() * (+crystalMax - +crystalMin)) + +crystalMin;

var greenCrystal = $("<img>");
greenCrystal.addClass("crystal-image");
greenCrystal.attr("src", "assets/images/green.jpg");
greenCrystal.attr("data-crystalvalue", crystal3);
$("#crystals").append(greenCrystal);


//Yellow Crystal
var crystalMin = 1
var crystalMax = 12
var crystal4 = Math.floor(Math.random() * (+crystalMax - +crystalMin)) + +crystalMin;

var ylwCrystal = $("<img>");
ylwCrystal.addClass("crystal-image");
ylwCrystal.attr("src", "assets/images/yellow.jpg");
ylwCrystal.attr("data-crystalvalue", crystal4);
$("#crystals").append(ylwCrystal);

//Array of random crystal values
//======================================================================================
var numberOptions = [crystal1, crystal2, crystal3, crystal4];


//Logic for clicking each crystal and buttons-->
//=============================================================
    $(".crystal-image").on("click", function ()  {

        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue; 

// Wins and Losses Counter     
        //document.write("Your total score is:" + counter);   

        alert("New Score: " + counter);

        if (counter === targetNumber) {
            alert("You Win!!");
        }

        else if (counter >= targetNumber) {
            alert("You Lose!!");
        }

    });

   
//Adding and saving random crystal number-->
//=========================================================


//Restarting the game 
//==================================================================================
//// 12. Create an "on-click" event attached to the "#clear" button id.
//$("#clear").on("click", function() {

  //  $("#display").empty();

 // });



//});
