var board = new Array(9);
var moves = 0;
var i;
var hasWinner = false;
var cross;
var circle;

$(document).ready(function() {
    // New Game Start
    $('#newGame').click( function () {
        $('.start-game').css('display', 'none');
        $('.main-game').css('display', 'flex');
    });
    // Add Move
    $('td').click(function () {
        var index = $(this).data('index');
        if(board[index] || hasWinner) {
            return;
        }
        if(moves % 2 === 0) {
            board[index] = 'X';
            var svgCross = $('<svg class="cross" viewBox="0 0 80 80">' +
                '<path class="line1" stroke-width="4" stroke="#FFEB3B" d="M60 60L20 20 "/> + ' +
                '<path class="line2" stroke-width="4" stroke="#FFEB3B" d="M20 60l40-40"/></svg>');
            cross = $(this).append(svgCross);
        } else {
            board[index] = 'O';
            var svgCircle = $('<svg class="circle" viewBox="0 0 80 80">' +
                '<circle r="20" cx="40" cy="40" stroke="#ffffff" fill="none" stroke-width="4"/></svg>');
            circle = $(this).append(svgCircle);
        }
        moves++;
        horizontalWinner();
        verticalWinner();
        diagonalWinner();
        draw();
    });
    // Verifica se ha vencedor na horizontal;
    function horizontalWinner() {
        for(i = 0; i < 7; i += 3) {
            if(board[i] === 'X' && board[i + 1] === 'X' && board[i + 2] === 'X') {

                console.log("X wins");
                hasWinner = true;
            }
            if(board[i] === 'O' && board[i + 1] === 'O' && board[i + 2] === 'O') {

                console.log("O wins");
                hasWinner = true;
            }
        }
    }
    // Verifica se ha vencedor na vertical;
    function verticalWinner() {
        for(i = 0; i < 3; i++) {
            if(board[i] === 'X' && board[i + 3] === 'X' && board[i + 6] === 'X') {

                console.log('X wins');
                hasWinner = true;
            }
            if(board[i] === 'O' && board[i + 3] === 'O' && board[i + 6] === 'O') {

                console.log('O wins');
                hasWinner = true;
            }
        }
    }
    // Verifica se ha vencedor na diagonal;
    function diagonalWinner() {
        if(board[0] === 'X' && board[4] === 'X' && board[8] === 'X' ||
            board[6] === 'X' && board[4] === 'X' && board[2] === 'X') {

            console.log('X Wins');
            hasWinner = true;
        }
        if(board[0] === 'O' && board[4] === 'O' && board[8] === 'O' ||
            board[6] === 'O' && board[4] === 'O' && board[2] === 'O') {

            console.log('O Wins');
            hasWinner = true;
        }
    }
    function draw() {
        var result = 0;
        for(i = 0; i < 9; i++) {
            if(board[i] == "X" || board[i] == "O") {
                result++;
            }
        }
        if(result === 9 && hasWinner === false) {
            console.log('draw');
        }
    }
});