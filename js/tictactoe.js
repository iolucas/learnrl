
function TicTacToe() {

    var board = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];

    this.reset = function() {
        board = [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ]
    }

    this.placeMark = function(mark,x,y) {
        if(board[x][y] == 0) {
            board[x][y] = mark;
            return true;
        }

        return false;
    }

    this.checkWin = function() {
        if([0])
    }
}