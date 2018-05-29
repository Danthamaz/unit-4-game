// Wrapper document.ready function to only load JavaScript after HTML is ready X
// Function to select a random number at the start of the game X
// Append that number to the proper DIV X 
// Select random numbers for each piece of gold between 1-12
// Set up variables for wins/losses/totals
// Add a function to reset the game
// Add a win function
// Add a lose functioN
// Add on click functions to the gold pieces

// Wrapper function to only load JavaScript after page loads
$(document).ready(function(){

    // Generates random number between 19-120 and appends it to the DIV #randNumber
    var selectedNumber = Math.floor(Math.random() * 102) + 19;
    $("#randNumber").append(selectedNumber);

    

});