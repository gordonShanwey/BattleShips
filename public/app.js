import { Gameboard } from "./classes/Gameboard.js";
const GameBoard = new Gameboard();
const gameBoardContainer = document.querySelector('.gameboard');
for (let i = 0; i < GameBoard.cols; i++) {
    for (let j = 0; j < GameBoard.rows; j++) {
        //create a new div Html element fo each grid square
        const square = document.createElement('div');
        gameBoardContainer === null || gameBoardContainer === void 0 ? void 0 : gameBoardContainer.appendChild(square);
        //add ID for each square
        square.id = 's' + j + i;
        // set each grid square's coordinates: multiples of the current row or column number
        const topPosition = j * GameBoard.squareSize;
        const leftPosition = i * GameBoard.squareSize;
        // use CSS absolute positioning to place each grid square on the page
        square.style.top = topPosition + 'px';
        square.style.left = leftPosition + 'px';
    }
}
gameBoardContainer.addEventListener("click", fire, false);
function fire(e) {
    // if item clicked (e.target) is not the parent element on which the event listener was set (e.currentTarget)
    if (e.target !== e.currentTarget) {
        // extract row and column # from the HTML element's id
        let row = parseInt(e.target.id.substring(1, 2));
        var col = parseInt(e.target.id.substring(2, 3));
        //alert("Clicked on row " + row + ", col " + col);
        // if player clicks a square with no ship, change the color and change square's value
        if (GameBoard.gameBoard[row][col] == 0) {
            e.target.style.background = '#bbb';
            // set this square's value to 3 to indicate that they fired and missed
            GameBoard.gameBoard[row][col] = 3;
            // if player clicks a square with a ship, change the color and change square's value
        }
        else if (GameBoard.gameBoard[row][col] == 1) {
            e.target.style.background = 'red';
            // set this square's value to 2 to indicate the ship has been hit
            GameBoard.gameBoard[row][col] = 2;
            // increment hitCount each time a ship is hit
            GameBoard.hitCount++;
            // this definitely shouldn't be hard-coded, but here it is anyway. lazy, simple solution:
            if (GameBoard.hitCount == 13) {
                alert("All enemy battleships have been defeated! You win!");
            }
            // if player clicks a square that's been previously hit, let them know
        }
        else if (GameBoard.gameBoard[row][col] > 1) {
            alert("Stop wasting your torpedos! You already fired at this location.");
        }
    }
    e.stopPropagation();
}
