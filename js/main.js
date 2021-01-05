const board = [['a', 'b', 'c'],
              ['d', 'e', 'f'],
              ['g', 'h', 'i']];

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


$(document).ready(function () {
  let turnCount = 0;
  let hasWon = false;
  $(`${'#player2'}`).addClass('dimmer');

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      $(`#${i}${j}`).on('click', function () {
        if (hasWon === false) {
          if (turnCount <= 9) {
            if (board[i][j] === 'O' || board[i][j] === 'X') {
              return;
            } else {
              if (turnCount % 2 === 0) {
                tick.nought(i, j);
                turnCount += 1;
                $(`${'#player1'}`).addClass('dimmer');
                $(`${'#player2'}`).removeClass('dimmer');
              } else {
                tick.cross(i, j);
                turnCount += 1;
                $(`${'#player2'}`).addClass('dimmer');
                $(`${'#player1'}`).removeClass('dimmer');
              }

              let winner = checkWinner();

              if (winner === 'nought') {
                hasWon = true;
                $('#announce').text('Player 1 won!')
              } else if (winner === 'cross') {
                hasWon = true;
                $('#announce').text('Player 2 won!')
              }
            }

            if (turnCount === 9) {
              $('#announce').text(`It's a tie!`)
            }
          } else {
            return;
          }
        } else {
          return;
        }
      })
    }
  }
})

// https://little-chi-mai.github.io/project0
