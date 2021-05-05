import { Column } from "./column.js";

export class Game {
    constructor(player1, player2){
        this.player1 = player1
        this.player2 = player2
        this.currentPlayer = 1;
        this.columns = Array(7).fill(new Column());
        // console.table(this.columns)
    }

    getName() {
        return `${this.player1} VS ${this.player2}`

    }

    playInColumn(columnIdx) {
        let currentColumn = this.columns[columnIdx];
        console.log(currentColumn, "<--- This is colmfsnhnokg");
        currentColumn.add(this.currentPlayer);
        console.log(currentColumn, "now column is here");
        this.currentPlayer === 1 ? this.currentPlayer = 2 : this.currentPlayer = 1;
    }

    getTokenAtCol(rowIdx, columnIdx) {
        let currentColumn = this.columns[columnIdx]
        return currentColumn.getTokenAtRow(rowIdx)
    }
}
