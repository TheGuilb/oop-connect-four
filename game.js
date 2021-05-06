import { Column } from "./column.js";
import { ColumnWinInspector } from "./column-win-inspector.js";

export class Game {
    constructor(player1, player2){
        this.player1 = player1
        this.player2 = player2
        this.currentPlayer = 1;
        this.winnerNumber = 0;
        this.columns = [new Column(), new Column(), new Column(),
                       new Column(), new Column(), new Column(), new Column()];
    }

    getName() {
        if (this.winnerNumber === 1) return `${this.player1} HAS WON!`
        if (this.winnerNumber === 2) return `${this.player2} HAS WON!`
        if (this.winnerNumber === 3) return `${this.player1} TIES WITH ${this.player2}`
        else return `${this.player1} VS ${this.player2}`;
    }

    playInColumn(columnIdx) {
        let currentColumn = this.columns[columnIdx];
        currentColumn.add(this.currentPlayer);
        this.currentPlayer === 1 ? this.currentPlayer = 2 : this.currentPlayer = 1;
    }

    checkForTie() {
        const fullClass = document.querySelectorAll('.full');
        if (fullClass.length === 7) {
            this.winnerNumber = 3;
        }
    }

    checkForColumnWin() {
        for (let i = 0; i < this.columns.length; i++) {
            const column = this.columns[i];
            const newColumnWinInspected =  new ColumnWinInspector(column);
            let winnerNumber = newColumnWinInspected.inspect();
            this.winnerNumber = winnerNumber
            // console.log(this.winnerNumber);
            // if (newColumnWinInspected.inspect() === 1) {
            //     this.winnerNumber = 1;
            // };
            // if (newColumnWinInspected.inspect() === 2) {
            //     this.winnerNumber = 2;
            // };
        }
    }

    getTokenAtCol(rowIdx, columnIdx) {
        let currentColumn = this.columns[columnIdx]
        return currentColumn.getTokenAtRow(rowIdx)
    }


}
