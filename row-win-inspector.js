export class RowWinInspector {
    constructor(columns) {
        this.columns = columns;
    }

    inspectorGadget() {
                let newArray = [];

        for (let i = 0 , j = 0; i < this.columns.length; i++) {
            if (j === 7) return;
            const col = this.columns[i];
            let row = col.tokens[j]
            newArray.push(row);
            if (i === 7) {
                if (newArray.join('').includes('1111')) {
                    return 1
                } else if(newArray.join('').includes('2222')) {
                    return 2
                }
                ++j, i = 0, newArray = [];
            }
        }
        return 0;
        // for (let i = 0; i < 6; i++) {
        //     const el = array[i];

        // }





        // for (let i = 0; i < 5; i++) {
        //     const currentEl = this.columns.tokens

        //     if ((currentEl[i] === currentEl[i+1]) &&
        //      (currentEl[i] === currentEl[i+2]) &&
        //       (currentEl[i] === currentEl[i+3])) {
        //         return currentEl[i];
        //     } else {
        //         return 0;
        //     }

        // }
    }

}
