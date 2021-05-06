export class RowWinInspector {
    constructor(columns) {
        this.columns = columns;
    }

    inspectorGadget() {
                let newArray = [];

        for (let i = 0 , j = 0; i < this.columns.length; i++) {
            if (j === 7) return;
            const col = this.columns[i];
            let rowBuild = col.tokens[j]
            if (rowBuild !== undefined){
                newArray.push(rowBuild);
            } else {
                newArray.push("X");
            }
            if (newArray.length === 7) {
                if (newArray.join('').includes('1111')) {
                    return 1
                } else if(newArray.join('').includes('2222')) {
                    return 2
                }
                j++, i = -1, newArray = [];
            }
        }
        return 0;
    }

}
