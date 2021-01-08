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
    //updates players' winCount
    for (const player of game.players) {
      $(`#winCount-${player.id}`).text(`${player.winCount}`);
    }

    // set dimmer for player's turn
    $(`#player-${game.currentFirstPlayer().id}`).removeClass('dimmer');
    $(`#player-${game.currentSecondPlayer().id}`).addClass('dimmer');

  };

  game.setupNewGame();


  // Submit players' names and symbols
  $('#playerNames').on('click', function () {
    const player1Name = $('#name-playerHuman').val();
    const player2Name = $('#name-playerAlien').val();

    const player1Symbol = $('#symbol-choice1').val();
    const player2Symbol = $('#symbol-choice2').val();


    game.players[0].name = player1Name;
    game.players[1].name = player2Name;

    game.players[0].symbol = player1Symbol;
    game.players[1].symbol = player2Symbol;

    // alert when players don't enter enough information
    if (!player1Name || !player2Name || !player1Symbol || !player2Symbol) {
      $('#alert').text("Please enter both players' names and symbols!");
      $('#alert').removeClass('invisible');
      return;
    // alert when players enter the same names/symbols
    } else if (player1Name === player2Name || player1Symbol === player2Symbol) {
      $('#alert').text(`Please enter different names and symbols for ${player1Name} and ${player2Name}!`);
      $('#alert').removeClass('invisible');
      return;

    } else {
      // hide the box
      $('.choose-name').addClass('disappear');
      //set up new game
      game.setupNewGame();
      render();

      $(`#player-${game.currentFirstPlayer().id}`).text(player1Name + ': ' + player1Symbol);
      $(`#player-${game.currentSecondPlayer().id}`).text(player2Name + ': ' + player2Symbol);

      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          $(`#${i}${j}`).on('click', function () {
            // stop player from clicking in the same spot
            if (game.hasWon === true) {
              return;

            } else {

              if (game.board[i][j] === player1Symbol || game.board[i][j] === player2Symbol ) {
                return;

              } else {
                  $(`#${i}${j}`).text(game.currentFirstPlayer().symbol);
                  game.performTurn(i, j);

            };

                if (game.hasWon === true) {
                  game.players[0].winCount++;
                  game.totalGameCount++;

                  $('#winnerAnnounce').text(`Congrats!! ${game.players[0].name} won!!!`);
                  $('#playAgainButton').removeClass('invisible');
                  $('#winnerAnnounce').removeClass('invisible');


                } else if (game.hasWon === 'tie') {
                  game.totalGameCount++;
                  $('#winnerAnnounce').text(`It's a tie!!!`);
                  $('#playAgainButton').removeClass('invisible');
                  $('#winnerAnnounce').removeClass('invisible');
                }

                render();
              }
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

      })
    }
  });

});
