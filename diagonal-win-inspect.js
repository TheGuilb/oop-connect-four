export class DiagChecker {
    constructor(columns) {
        this.columns = columns;
    }
        inspectorDiag() {
            let diagArr = [];
            for (let i = 0; i < this.columns.length; i++) {
                const {column} = this.columns[i];
                console.log(column)
                // for(let token in column) {
                //     diagArr.push(token);
                // }
            }
            console.log(diagArr);
        }
}
