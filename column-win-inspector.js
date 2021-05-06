export class ColumnWinInspector {
    constructor(column) {
        this.column = column;
    }

    inspect() {
       if (this.column.join('').includes("1111")) return 1;
       if (this.column.join('').includes("2222")) return 2;
       return 0;
    }
}
