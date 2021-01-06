const gameController = {
  players: [
    {name: 'playerHuman',
    symbol: '',
    winCount: 0},
    {name: 'playerAlien',
    symbol: '',
    winCount: 0}],

  board: [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ],
  playerTurnCount: 0,
  firstPlayer: function (player) {
    player.symbol = 'O';
  },

  turnCounter: function () {

    for (let row of board) {
      row.forEach(function (item) {
        if (item !== '') {
          this.playerTurnCount++;
        }
      })
    }
  },

  newBoard: function (board) {
    board = this.board;

    for (let row of board) {
      row.forEach(function (item) {
        item = '';
      })
    }
  },

  setupNewGame: function (player) {
    newBoard();
    this.firstPlayer = player;
    this.playerTurnCount = 0;
  },

  performTurn: function () {
    this.firstPlayer
  }
}
