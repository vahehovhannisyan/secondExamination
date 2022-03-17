

function squareMatrix () {

    let rand = function () {
        return Math.ceil(Math.random()*9)
    };
    
    let number = +prompt("enter number to print matrix");
    let str = "";

    for(let i=0; i<number; i++){

        for(let j=0; j<number; j++){   
            str+= `${rand()}  `    
        };

        str+="\n"+"\n";
    };
    return str
};





function matrix(n) {
    let result = new Array(n).fill().map(() => new Array(n).fill('')); // create empty n x n array
    let counter = 1;
    let startCol = 0;
    let endCol = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter;
            counter++;
        }
        startRow++;
        for (let j = startRow; j <= endRow; j++) {
            result[j][endCol] = counter;
            counter++;
        }

        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter;
            counter++;
        }

        endRow--;
        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = counter;
            counter++;
        }

        startCol++;

    }

    return result;

}






