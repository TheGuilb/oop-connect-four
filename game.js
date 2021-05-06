import { Column } from "./column.js";

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
        if (this.winnerNumber === 3) return `${this.player1} TIES WITH ${this.player2}`
        return `${this.player1} VS ${this.player2}`;
    }

    playInColumn(columnIdx) {
        let currentColumn = this.columns[columnIdx];
        currentColumn.add(this.currentPlayer);
        this.currentPlayer === 1 ? this.currentPlayer = 2 : this.currentPlayer = 1;
        this.checkForTie()
    }

    checkForTie() {

        // const fullColumns = this.columns.filter(el => {
        //     isFull(el);
        // })

        // if (fullColumns.length === 7) this.winnerNumber = 3;

        const fullClass = document.querySelectorAll('.full');
        console.log(fullClass.length)
        if (fullClass.length === 7) {
            this.winnerNumber = 3;

        }

    }

    getTokenAtCol(rowIdx, columnIdx) {
        let currentColumn = this.columns[columnIdx]
        return currentColumn.getTokenAtRow(rowIdx)
    }


}
