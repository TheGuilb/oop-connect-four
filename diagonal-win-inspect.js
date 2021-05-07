export class DiagChecker {
    constructor(columns) {
        this.columns = columns;
    }
        inspectorDiag() {
            let counter = -1
            let diagArr = [];

            for (let i = 0, j = 0; i < this.columns.length; i++, j++) {
                let columnOne = this.columns[i];
                let columnArr = columnOne.tokens;
                // let columnTwo = this.columns[i + 1];
                // let columnThree = this.columns[i + 2];
                // let columnFour = this.columns[i + 3];
                // console.log(columnTwo.tokens[0]);
                // console.log(this.columns.length);
                if (columnOne.tokens[j] !== undefined){
                    diagArr.push(columnOne.tokens[j])
                } else {
                    diagArr.push("X");
                }
                console.log(diagArr, `${i}`, "LOOKOKOKOKOKOKO");

                if (diagArr.length === 6) {
                    if (diagArr.join('').includes('1111')) {
                        console.log("WINNER WINNEr CHICKEN DINNER")
                        return 1
                    } else if(diagArr.join('').includes('2222')) {
                        return 2
                    }
                    diagArr = [], j = -1, i = ++counter;
                    console.log(counter);
                }
            }

        }
}
