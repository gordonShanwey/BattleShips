export function clearBoard(gameBoard:number [] []): void {
    for (let i = 0; i < gameBoard.length; i++) {
        for (let j = 0; j < gameBoard.length; j++) {


            gameBoard[i][j] = 0;
        }
   



    }
}