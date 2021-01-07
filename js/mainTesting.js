console.log(game.players);

const clearBoardUI = function () {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      $(`#${i}${j}`).text('');
    }
  }
}


$(document).ready(function () {

  const render = function () {
    // $(`#${game.currentFirstPlayer().name}`).text(`${game.currentFirstPlayer().name}: ${game.symbolFirstPlayer()}`);
    //
    // $(`#${game.currentSecondPlayer().name}`).text(`${game.currentSecondPlayer().name}: ${game.symbolSecondPlayer()}`);
    //
    // $(`#winCountPlayerHuman`).text(`${game.players[playerIndex(playerHuman).winCount]}`);

    for (const player of game.players) {
      $(`#${player.name}`).text(`${player.name}: ${player.symbol}`);
      $(`#winCount${player.name}`).text(`${player.winCount}`);
    }

    console.log('Rendered');
  };


  const setDimmerPlayer = function () {
    $(`#${game.currentFirstPlayer().name}`).removeClass('dimmer');
    $(`#${game.currentSecondPlayer().name}`).addClass('dimmer');
  };

  game.setupNewGame();
  game.checkStatus();

  setDimmerPlayer();

  render();

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      $(`#${i}${j}`).on('click', function () {
        // stop player from clicking in the same spot
        if (game.hasWon === true) {
          return;

        } else {

          if (game.board[i][j] === "O" || game.board[i][j] === "X" ) {
            return;

          } else {
              $(`#${i}${j}`).text(game.currentFirstPlayer().symbol);

              game.performTurn(i, j);

              setDimmerPlayer();
        };

            if (game.hasWon === true) {
              game.players[0].winCount++;
              game.totalGameCount++;

              $('#winnerAnnounce').text(`${game.players[0].name} won!!!`);
              $('#playAgainButton').removeClass('invisible');


            } else if (game.hasWon === 'tie') {
              game.totalGameCount++;
              console.log('TIE!')
              $('#winnerAnnounce').text(`It's a tie!!!`);
              $('#playAgainButton').removeClass('invisible');
            }
          }
          game.checkStatus();
        }
      )
    }
  }

  $('#playAgainButton').on('click', function () {

    $('#playAgainButton').addClass('invisible');
    $('#winnerAnnounce').addClass('invisible');
    clearBoardUI();

    game.setupNewGame();

    render();
    setDimmerPlayer();


  })

});
