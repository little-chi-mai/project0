const board = [['a', 'b', 'c'],
              ['d', 'e', 'f'],
              ['g', 'h', 'i']];

const tick = {
  nought: function (row, column) {
    board[row][column] = 'O';
  },

  cross: function (row, column) {
    board[row][column] = 'X';
  }
}

const winNought = 'O,O,O';

const winCross = 'X,X,X';


const checkWinner = function () {
  let result = '';

  for (let i = 0; i < 3; i++) {
    if (board[i].toString() === winNought) {
      console.log('Nought won!')
      result = 'nought';
      return result;
    } else if (board[i].toString() === winCross) {
      console.log('Cross won!');
      result = 'cross';
      return result;

    } else if (board[0][i] === board[1][i] & board[0][i] === board[2][i]) {
      if (board[0][i] === 'O') {
        console.log('Nought won!')
        result = 'nought';
        return result;
      } else if (board[0][i] === 'X') {
        console.log('Cross won!');
        result = 'cross';
        return result;
      }

    } else if (board[0][0] === board[1][1] & board[0][0] === board[2][2] || board[2][0] === board[1][1] & board[2][0] === board[0][2]) {
      if (board[1][1] === 'O') {
        console.log('Nought won!')
        result = 'nought';
        return result;
      } else if (board[1][1] === 'X') {
        console.log('Cross won!');
        result = 'cross';
        return result;
      }
    }
  }
};


$(document).ready(function () {
  let turn = 0;
  let hasWon = false;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      $(`#${i}${j}`).on('click', function () {
        if (hasWon === false) {
          if (turn <= 9) {
            if (board[i][j] === 'O' || board[i][j] === 'X') {
              return;
            } else {
              if (turn % 2 === 0) {
                tick.nought(i, j);
                $(`#${i}${j}`).text('O');
                turn += 1;
                $(`${'#turn'}`).text('Player 2: Cross')
              } else {
                tick.cross(i, j);
                $(`#${i}${j}`).text('X');
                turn += 1;
                $(`${'#turn'}`).text('Player 1: Nought')
              }
              console.log(i, j, board[i][j]);

              let winner = checkWinner();

              if (winner === 'nought') {
                hasWon = true;
                $('#announce').text('Nought won!')
              } else if (winner === 'cross') {
                hasWon = true;
                $('#announce').text('Cross won!')
              }
            }

            if (turn === 9) {
              $(`${'#turn'}`).text(' ')
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
