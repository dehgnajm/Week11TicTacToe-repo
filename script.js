//create the required variables for the game
let playerSymbol = "X";
let gameEnded = false;
// Function to update the player turn message each time the player changes
function updatePlayerTurn() {
    document.getElementById("player-turn").textContent = "Current turn: " + playerSymbol;
  }

// Add a click event listener to each of the 9 cells of the game
for (let i = 1; i <= 9; i++) {
    // Set the playerSymbol to "X" at the start of each turn
    playerSymbol = "X";
    // Update the player turn message to show whose turn it is
  updatePlayerTurn();
  // Add the click event listener to the current cell
    document.getElementById(i.toString()).addEventListener(
    "click", 
    function() {
         // Check if the cell is empty and the game is not already ended
        if (this.innerHTML === "" && !gameEnded) {
            // Get the current player's symbol (either "X" or "O")
            let playerSymbol = getPlayerSymbol();
            // Update the cell with the current player's symbol
            this.innerHTML = playerSymbol;
            // Add a class to the cell to show the current player's symbol (either "x" or "o")
            this.classList.add(playerSymbol.toLowerCase());
            // Check if the current player has won
            checkWin(playerSymbol);
            // Toggle to the other player's symbol for the next turn
            togglePlayerSymbol();
        }
        // Switch to the other player's symbol for the next turn
        if (playerSymbol === "X") {
            playerSymbol = "O";
          } else {
            playerSymbol = "X";
          }
          // Update the player turn message to show whose turn it is
          updatePlayerTurn();
            
    });
}

 // Determine the current player's symbol based on the current game round number 
function getPlayerSymbol() {
    return (gameRound % 2 === 1) ? "X" : "O";
}
// Increment the game round number to toggle to the other player's symbol
function togglePlayerSymbol() {
    gameRound++;
}
// List of possible winning combinations on the game board
let winPos = [    [1, 2, 3], [4, 5, 6], 
    [7, 8, 9], [1, 4, 7], 
    [2, 5, 8], [3, 6, 9], 
    [1, 5, 9], [3, 5, 7]
];
// Check if the current player has won by iterating through all possible winning combinations
function checkWin(playerSymbol) {
    for (let i = 0; i < winPos.length; i++) {
        if (document.getElementById(winPos[i][0]).innerHTML === playerSymbol &&
            document.getElementById(winPos[i][1]).innerHTML === playerSymbol &&
            document.getElementById(winPos[i][2]).innerHTML === playerSymbol) {
// Add a "win" class to the cells in the winning combination to highlight them   
                document.getElementById(winPos[i][0]).classList.add("win");
                document.getElementById(winPos[i][1]).classList.add("win");
                document.getElementById(winPos[i][2]).classList.add("win"); 
// Set the gameEnded variable to true to prevent further moves  
                gameEnded = true; 
// show an alert with the winner's symbol and end the game after a 0.5 second delay
                setTimeout(function() {
                    alert(playerSymbol + " wins!");
                }, 500);
            }
    }
}
// create a variable called gameRound and set it to 1
let gameRound = 1;
// add an event listener to the reset button
document.getElementById("reset").addEventListener(
    "click", function() {
      // loop through all 9 elements of the game board  
        for (let i = 1; i <= 9; i++) {
            // clear the innerHTML of each element
            document.getElementById(i.toString()).innerHTML = "";
            // remove any "x" or "o" classes that the element may have
            document.getElementById(i.toString()).classList.remove("x");
            document.getElementById(i.toString()).classList.remove("o");
            // remove any "win" classes that the element may have
            document.getElementById(i.toString()).classList.remove("win");
           // set gameEnded to false
            gameEnded = false;
        }
         // set gameRound back to 1, so that the game starts over from the beginning
        gameRound = 1;
    });
