console.log(gameController.players);

$(document).ready(function () {

  gameController.setupNewGame();


  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      $(`#${i}${j}`).on('click', function () {
        if (gameController.board[i][j] === "O" || gameController.board[i][j] === "X" ) {
          return;
        } else {
            $(`#${i}${j}`).text(gameController.currentFirstPlayer().symbol);

            gameController.performTurn(i, j);
            gameController.checkStatus();
          }
        }
      )
    }
  }


});
