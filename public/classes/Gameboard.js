import { clearBoard } from "../functions/clearBoard.js";
import { randomIntFromInterval } from "../functions/randomIntFromInterval.js";
export class Gameboard {
    constructor() {
        this.rows = 10;
        this.cols = 10;
        this.squareSize = 50;
        this.hitCount = 0;
        this.shipCounter = 0;
        this.tryNumber = 0;
        this.gameBoard = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
        // }
        while (this.shipCounter < 3) {
            switch (this.shipCounter) {
                case 0:
                    clearBoard(this.gameBoard);
                    this.shipCounter = this.createShip(4);
                case 1:
                    this.shipCounter = this.createShip(4);
                case 2:
                    this.shipCounter = this.createShip(5);
            }
        }
        console.log(this.gameBoard);
    }
    createShip(n) {
        const y1 = randomIntFromInterval(0, 9);
        const x1 = randomIntFromInterval(0, 9);
        const horizontal = randomIntFromInterval(1, 2);
        if (this.gameBoard[x1][y1] === 0) {
            this.gameBoard[x1][y1] = 1;
            if (horizontal === 2) {
                // x=0 y=0
                if (y1 < 5) {
                    console.log('war1', n);
                    for (let i = 1; i < n; i++) {
                        if (this.gameBoard[x1][y1 + i] === 0) {
                            this.gameBoard[x1][y1 + i] = 1;
                        }
                        else {
                            // tryNumber++;
                            clearBoard(this.gameBoard);
                            this.shipCounter = 0;
                            return this.shipCounter;
                        }
                    }
                }
                else {
                    console.log('war2', n);
                    for (let i = 1; i < n; i++) {
                        if (this.gameBoard[x1][y1 - i] === 0) {
                            this.gameBoard[x1][y1 - i] = 1;
                        }
                        else {
                            // tryNumber++;
                            clearBoard(this.gameBoard);
                            this.shipCounter = 0;
                            return this.shipCounter;
                        }
                    }
                }
            }
            else {
                if (x1 < 5) {
                    console.log('war3', n);
                    for (let i = 1; i < n; i++) {
                        if (this.gameBoard[x1 + i][y1] === 0) {
                            this.gameBoard[x1 + i][y1] = 1;
                        }
                        else {
                            // tryNumber++;
                            clearBoard(this.gameBoard);
                            this.shipCounter = 0;
                            return this.shipCounter;
                        }
                    }
                }
                else {
                    console.log('war4', n);
                    for (let i = 1; i < n; i++) {
                        if (this.gameBoard[x1 - i][y1] === 0) {
                            this.gameBoard[x1 - i][y1] = 1;
                        }
                        else {
                            // tryNumber++;
                            clearBoard(this.gameBoard);
                            this.shipCounter = 0;
                            return this.shipCounter;
                        }
                    }
                }
            }
            this.shipCounter++;
            console.log(x1, y1, horizontal, this.shipCounter /*, tryNumber*/);
        }
        //  else
        //      clearBoard();
        //  tryNumber++;
        return this.shipCounter;
    }
}
