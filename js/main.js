let board = [];

const tick = {
  nought: function (row, column) {
    board[row][column] = 'O';
    $(`#${row}${column}`).text('O');
  },

  cross: function (row, column) {
    board[row][column] = 'X';
    $(`#${row}${column}`).text('X');
  }
}

const


const checkWinner = function () {
  let result = '';

  for (let i = 0; i < 3; i++) {

    if (board[i][0] === board[i][1] & board[i][0] === board[i][2]) {
      if (board[i][0] === 'O') {
        result = 'nought';
        return result;
      } else if (board[i][0] === 'X') {
        result = 'cross';
        return result;
      }

    } else if (board[0][i] === board[1][i] & board[0][i] === board[2][i]) {
      if (board[0][i] === 'O') {
        result = 'nought';
        return result;
      } else if (board[0][i] === 'X') {
        result = 'cross';
        return result;
      }

    } else if (board[0][0] === board[1][1] & board[0][0] === board[2][2] || board[2][0] === board[1][1] & board[2][0] === board[0][2]) {
      if (board[1][1] === 'O') {
        result = 'nought';
        return result;
      } else if (board[1][1] === 'X') {
        result = 'cross';
        return result;
      }
    }
  }
};

let turnCount = 0;

let playerCount = 0;
let playerIndex = 0;
let currentPlayer = '';
let hasWon = false;

let winCount1 = 0;
let winCount2 = 0;
let startingPlayer = '';

const gameController = {
  players: {{name: 'player1',
            winCount: winCount1}, 'player2'}},

  currentPlayer: '',

  option: ['nought', 'cross'],

  clearBoard: function () {
    board = [
      ['a', 'b', 'c'],
      ['d', 'e', 'f'],
      ['g', 'h', 'i']
    ];

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        $(`#${i}${j}`).text('');
      }
    }
  },

  gameStart: function (player) {

    currentPlayer = player;

    $('#playAgainButton').addClass('invisible');
    $('#winnerAnnounce').addClass('invisible');
    this.clearBoard();
  },

  playerTurn: function (row, column) {

    if (board[row][column] === 'O' || board[row][column] === 'X') {
      return;
    } else {
      if (currentPlayer === 'player1') {
        tick.nought(row, column);
        turnCount += 1;
        playerCount += 1;
        $(`${'#player1'}`).addClass('dimmer');
        $(`${'#player2'}`).removeClass('dimmer');
      } else if (currentPlayer === 'player2'){
        tick.cross(row, column);
        turnCount += 1;
        playerCount += 1;
        $(`${'#player2'}`).addClass('dimmer');
        $(`${'#player1'}`).removeClass('dimmer');
      }

      let winner = checkWinner();

      if (winner === 'nought') {
        hasWon = true;
        winCount1 += 1;
        $('#winnerAnnounce').text('Player 1 won!');
        $('#winnerAnnounce').removeClass('invisible');
        $('#winCountPlayer1').text(winCount1);
        $('#playAgainButton').removeClass('invisible');
      } else if (winner === 'cross') {
        hasWon = true;
        winCount2 += 1;
        $('#winnerAnnounce').text('Player 2 won!');
        $('#winnerAnnounce').removeClass('invisible');
        $('#winCountPlayer2').text(winCount2);
        $('#playAgainButton').removeClass('invisible');
      }
    }

    if (turnCount === 9) {
      hasWon = true;
      $('#winnerAnnounce').text(`It's a tie!`)
      $('#playAgainButton').removeClass('invisible');
    }
  }


}

$(document).ready(function () {
  $(`${'#player2'}`).addClass('dimmer');


  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      $(`#${i}${j}`).on('click', function () {
        playerIndex = playerCount % 2;

        currentPlayer = players[playerIndex];

        if (hasWon === false) {
          if (turnCount <= 9) {
             else {
            return;
          }
        } else {
          return;
        }
        console.log(currentPlayer);
        console.log(turnCount);
        console.log(hasWon);
      })
    }
  }

  $('#playAgainButton').on('click', function () {
    board = [['a', 'b', 'c'],
                  ['d', 'e', 'f'],
                  ['g', 'h', 'i']];
    $('#playAgainButton').addClass('invisible');
    $('#winnerAnnounce').addClass('invisible');
    clearBoard();
    hasWon = false;
    turnCount = 0;
    console.log(currentPlayer);

    if (currentPlayer === 'player1') {
      playerCount = 1;

    } else if (currentPlayer === 'player2') {
      playerCount = 0;
    }

  })
})


// https://little-chi-mai.github.io/project0
