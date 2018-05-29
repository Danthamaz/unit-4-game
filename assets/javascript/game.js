// Wrapper document.ready function to only load JavaScript after HTML is ready X
// Function to select a random number at the start of the game X
// Append that number to the proper DIV X 
// Select random numbers for each piece of gold between 1-12 X
// Set up variables for wins/losses/totals X
// Add a function to reset the game X
// Add on click functions to the gold pieces

// Wrapper function to only load JavaScript after page loads
$(document).ready(function(){

    // Generates random number between 19-120 and appends it to the DIV #goalNumber
    var selectedNumber = Math.floor(Math.random() * 102) + 19;
    $("#goalNumber").append(selectedNumber);

    // Generates random number betwen 1-12 for gold pieces 
    var iconOneNumber = Math.floor(Math.random() * 12) + 1;
    var iconTwoNumber = Math.floor(Math.random() * 12) + 1;
    var iconThreeNumber = Math.floor(Math.random() * 12) + 1;
    var iconFourNumber = Math.floor(Math.random() * 12) + 1;

    // Variables for scores
    var wins;
    var losses;
    var totalScore = 0;

    $("#totalScore").text(totalScore);
    

    // Reset function to be called on as needed... resets all numbers
    function reset() {
        selectedNumber = Math.floor(Math.random() * 102) + 19;
        $("#goalNumber").text(selectedNumber);

        iconOneNumber = Math.floor(Math.random() * 12) + 1;
        iconTwoNumber = Math.floor(Math.random() * 12) + 1;
        iconThreeNumber = Math.floor(Math.random() * 12) + 1;
        iconFourNumber = Math.floor(Math.random() * 12) + 1;

        totalScore = 0;
        $("#totalScore").text(totalScore);
    }

    // On click event for first option
    $("#optionOne").on("click", function(){

        // Adds the value of this icon to the total score
        totalScore = totalScore + iconOneNumber;
        $("#totalScore").text(totalScore);
        // If/Else statement to compare current score to selected number
        if (totalScore == selectedNumber) {
            wins++;
            reset();
            $("#instructions").text("You won! Now try to play again, all numbers have been randomly generated for you.")
        } else if (totalScore > selectedNumber) {
            losses++;
            reset();
            $("#instructions").text("You lost this round, but try again! All numbers have been randomnly generated for you.")
        }
    })

    $("#optionTwo").on("click", function(){

        // Adds the value of this icon to the total score
        totalScore = totalScore + iconTwoNumber;
        $("#totalScore").text(totalScore);
        // If/Else statement to compare current score to selected number
        if (totalScore == selectedNumber) {
            wins++;
            reset();
            $("#instructions").text("You won! Now try to play again, all numbers have been randomly generated for you.")
        } else if (totalScore > selectedNumber) {
            losses++;
            reset();
            $("#instructions").text("You lost this round, but try again! All numbers have been randomnly generated for you.")
        }
    })

    $("#optionThree").on("click", function(){

        // Adds the value of this icon to the total score
        totalScore = totalScore + iconThreeNumber;
        $("#totalScore").text(totalScore);
        // If/Else statement to compare current score to selected number
        if (totalScore == selectedNumber) {
            wins++;
            reset();
            $("#instructions").text("You won! Now try to play again, all numbers have been randomly generated for you.")
        } else if (totalScore > selectedNumber) {
            losses++;
            reset();
            $("#instructions").text("You lost this round, but try again! All numbers have been randomnly generated for you.")
        }
    })

    $("#optionFour").on("click", function(){

        // Adds the value of this icon to the total score
        totalScore = totalScore + iconFourNumber;
        $("#totalScore").text(totalScore);
        // If/Else statement to compare current score to selected number
        if (totalScore == selectedNumber) {
            wins++;
            reset();
            $("#instructions").text("You won! Now try to play again, all numbers have been randomly generated for you.")
        } else if (totalScore > selectedNumber) {
            losses++;
            reset();
            $("#instructions").text("You lost this round, but try again! All numbers have been randomnly generated for you.")
        }
    })



    
});