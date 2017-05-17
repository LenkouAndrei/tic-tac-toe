class TicTacToe {
    constructor() {
        function el(){
            var i,j, arr = [];
            for(i = 0; i < 3; i++){
                var row = [];
                for(j = 0; j < 3; j++){
                    var col = [];
                    row.push(col);
                }//ends for j
                arr.push(row);
            }//ends for i
            return arr;
        };
        
        this.matrix = el();

        this.currentPlayerSymbol = 'x';
        this.winner = null;
        this.space = 9;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
       if(this.matrix[rowIndex][columnIndex].length == 0){
        var j = 0;

        this.matrix[rowIndex][columnIndex] = this.currentPlayerSymbol;
       
        for(j; j<3; j++){
            if(((this.matrix[j][0] == this.matrix[j][1]) && (this.matrix[j][2] == this.matrix[j][1]))||
               ((this.matrix[0][j] == this.matrix[1][j]) && (this.matrix[0][j] == this.matrix[2][j]))){
                this.winner = this.currentPlayerSymbol;
            }
        };
        if(((this.matrix[0][0] == this.matrix[1][1]) && (this.matrix[2][2] == this.matrix[1][1]))||
        ((this.matrix[0][2] == this.matrix[1][1]) && (this.matrix[1][1] == this.matrix[2][0]))){
            this.winner = this.currentPlayerSymbol;
        };

        this.currentPlayerSymbol = (this.currentPlayerSymbol.toString() == 'x') ? 'o' : 'x';
        this.space--;
       }
    }

    isFinished() {
        if(this.getWinner() || this.isDraw()){
            return true;
        }
        return false;
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        return !this.space;
    }

    isDraw() {
        if(!this.winner && this.noMoreTurns()){
            return true;
        }else{
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        var result = (this.matrix[rowIndex][colIndex].length == 0) ? null : this.matrix[rowIndex][colIndex];
            return result;
    }
}

module.exports = TicTacToe;
