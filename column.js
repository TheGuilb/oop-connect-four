export class Column {
    constructor() {
        this.tokens = [];
    }

    add(playerNum) {
    this.tokens.push(playerNum);

    }

    getTokenAtRow(rowIdxNum){
        let el = this.tokens[rowIdxNum];
        el ? el: null;
    }


}
