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

    for (const player of game.players) {
      $(`#${player.name}`).text(`${player.name}: ${player.symbol}`);
      $(`#winCount-${player.id}`).text(`${player.winCount}`);
    }
  };


  const setDimmerPlayer = function () {
    $(`#player-${game.currentFirstPlayer().id}`).removeClass('dimmer');
    $(`#player-${game.currentSecondPlayer().id}`).addClass('dimmer');
  };

  game.setupNewGame();
  game.checkStatus();

  setDimmerPlayer();

  render();

  // Submit players' names

  $('#playerNames').on('click', function () {
    // $('#nameplayerHuman').value();
    // console.log($('#nameplayerHuman').focus());
    console.log($('#name-playerHuman').val());
    game.players[0].name = $('#name-playerHuman').val();
    game.players[1].name = $('#name-playerAlien').val();

    game.players[0].symbol = $('#symbol-choice1').val();
    game.players[1].symbol = $('#symbol-choice2').val();


    $(`#player-${game.currentFirstPlayer().id}`).text($('#name-playerHuman').val() + ': ' + $('#symbol-choice1').val());
    $(`#player-${game.currentSecondPlayer().id}`).text($('#name-playerAlien').val() + ': ' + $('#symbol-choice2').val());

  });



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

              $('#winnerAnnounce').text(`Congrats!! ${game.players[0].name} won!!!`);
              $('#playAgainButton').removeClass('invisible');
              $('#winnerAnnounce').removeClass('invisible');


            } else if (game.hasWon === 'tie') {
              game.totalGameCount++;
              console.log('TIE!')
              $('#winnerAnnounce').text(`It's a tie!!!`);
              $('#playAgainButton').removeClass('invisible');
              $('#winnerAnnounce').removeClass('invisible');
            }

            render();
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
