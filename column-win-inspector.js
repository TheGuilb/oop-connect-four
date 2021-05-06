export class ColumnWinInspector {
    constructor(column) {
        this.column = column;
    }

    inspect() {
       if (this.column.tokens.join("").includes("1111")) return 1;
       if (this.column.tokens.join("").includes("2222")) return 2;
       return 0;
    }
}
