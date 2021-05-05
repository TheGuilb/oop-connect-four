import { Column } from "./column.js";

export class Game {
    constructor(player1, player2){
        this.player1 = player1
        this.player2 = player2
        this.currentPlayer = 1;
        this.columns = [new Column(), new Column(), new Column(),
                       new Column(), new Column(), new Column(), new Column()];
    }

    getName() {
        return `${this.player1} VS ${this.player2}`

    }

    playInColumn(columnIdx) {
        let currentColumn = this.columns[columnIdx];
        currentColumn.add(this.currentPlayer);
        this.currentPlayer === 1 ? this.currentPlayer = 2 : this.currentPlayer = 1;
    }

    getTokenAtCol(rowIdx, columnIdx) {
        let currentColumn = this.columns[columnIdx]
        return currentColumn.getTokenAtRow(rowIdx)
    }
}
