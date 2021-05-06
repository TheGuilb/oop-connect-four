import { Column } from "./column.js";
import { ColumnWinInspector } from "./column-win-inspector.js";
import {RowWinInspector} from "./row-win-inspector.js";
import { DiagChecker } from "./diagonal-win-inspect.js"
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

    checkForColumnWin(idx) {
            const column = this.columns[idx].tokens;
            const newColumnWinInspected =  new ColumnWinInspector(column);
            this.winnerNumber = newColumnWinInspected.inspect();
    }

    checkForRowWin() {
        if (this.winnerNumber === 0) {
            const newRowInspector = new RowWinInspector(this.columns);
            this.winnerNumber = newRowInspector.inspectorGadget();
        }
    }

    checkForDiagWin() {
       const whut = new DiagChecker(this.columns);
       this.winnerNumbermber = whut.inspectorDiag();
    }

    getTokenAtCol(rowIdx, columnIdx) {
        let currentColumn = this.columns[columnIdx]
        return currentColumn.getTokenAtRow(rowIdx)
    }


}
