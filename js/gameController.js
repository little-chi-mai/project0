const gameController = {
  players: [
    {name: 'playerHuman',
    symbol: '',
    winCount: 0},
    {name: 'playerAlien',
    symbol: '',
    winCount: 0}],

  playerTurnCount: 0,

  currentFirstPlayer: function () {
    return this.players[0];
  },

  currentSecondPlayer: function () {
    return this.players[1];
  },

  board: [
    ['O', 'O', 'O'],
    ['', '', ''],
    ['', '', '']
  ],

  playerIndex: function (playerObj) {
    const index = this.players.findIndex(player => player === playerObj);
    return index;
  },


  setFirstPlayer: function (playerObj) {
    let index = this.playerIndex(playerObj);
    this.players.splice(index, 1); // remove the player
    this.players.unshift(playerObj); // add the player at the beginning
    this.players[0].symbol = 'O';
    this.players[1].symbol = 'X';
    return this.players[0];
  },

  switchPlayer: function () {
    this.players.reverse();
  },

  turnCounter: function () {
    let count = this.playerTurnCount;
    this.board.forEach(function(row) {
      row.forEach(function (item) {
        if (item !== '') {
          console.log('mai');
          count += 1;
          console.log(count);
        }
      })
    });
    this.playerTurnCount = count;
    return this.playerTurnCount;
  },

  newBoard: function () {

    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    return this.board;
  },

  setupNewGame: function () {
    // this.newBoard();
    this.playerTurnCount = 0;
    this.setFirstPlayer(this.findWinner());
  },

  tick: function (row, column) {
    this.board[row][column] = this.currentFirstPlayer().symbol;
  },

  performTurn: function (row, column) {
    this.tick(row, column);
    this.findWinner();
    this.switchPlayer();
  },


  findWinner: function () {
    let winner;

    for (let i = 0; i < 3; i++) {

      if (this.board[i][0] === this.board[i][1] & this.board[i][0] === this.board[i][2]

      || this.board[0][i] === this.board[1][i] & this.board[0][i] === this.board[2][i]

      || this.board[0][0] === this.board[1][1] & this.board[0][0] === this.board[2][2]

      || this.board[2][0] === this.board[1][1] & this.board[2][0] === this.board[0][2]) {
        winner = this.currentFirstPlayer();
        return winner;
      } else {
        winner = 'tie';
        return;
      }
    }
  },


}
