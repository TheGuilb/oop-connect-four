export class Column {
    constructor() {
        this.tokens = [];
    }

    add(playerNum) {
        if (this.tokens.length < 6) this.tokens.push(playerNum);
    }

    isFull() { return (this.tokens.length >= 6); }

    getTokenAtRow(rowIdxNum){
        let el = this.tokens[5 - rowIdxNum];
        return el ? el: null;
    }


}
