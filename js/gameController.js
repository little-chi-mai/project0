const game = {
  // players info
  players: [
    {name: 'playerHuman',
    id: 'left',
    symbol: '',
    winCount: 0},
    {name: 'playerAlien',
    id: 'right',
    symbol: '',
    winCount: 0}],


  playerTurnCount: 0, // track the turn count

  totalGameCount: 0, // track number of games

  hasWon: false,  // track if there is a winner

  currentFirstPlayer: function () {
    return this.players[0];
  },

  currentSecondPlayer: function () {
    return this.players[1];
  },


  board: [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ],

  playerIndex: function (playerObj) {
    const index = this.players.findIndex(player => player === playerObj);
    return index;
  },

  // set first player to any player
  setFirstPlayer: function (playerObj) {
    let index = this.playerIndex(playerObj);
    this.players.splice(index, 1); // remove the player
    this.players.unshift(playerObj); // add the player at the beginning

    return this.players[0];
  },
  // switch 1st and 2nd player
  switchPlayer: function () {
    this.players.reverse();
  },

  turnCounter: function () {
    let count = this.playerTurnCount;
    this.board.forEach(function(row) {
      row.forEach(function (item) {
        if (item !== '') {  //every square that is not blank
          count += 1;
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
    this.newBoard();
    this.playerTurnCount = 0;
    this.hasWon = false;

    if (this.totalGameCount === 0) { //first game: playerHuman goes first
      this.setFirstPlayer(this.currentFirstPlayer());

    } else { // loser goes first
      this.setFirstPlayer(this.currentSecondPlayer());
    };
  },

  tick: function (row, column) {
    this.board[row][column] = this.currentFirstPlayer().symbol;
    this.playerTurnCount++;
  },

  performTurn: function (row, column) {
    this.tick(row, column);

    let winner = this.findWinnerOrTie();

    if (!winner) {
      this.switchPlayer();  //switch player if no winner yet
    };
  },


  findWinnerOrTie: function () {
    let winner;

    if (this.playerTurnCount <= 9) {
      for (let i = 0; i < 3; i++) {
              //win by a row
        if (this.board[i][0] === this.board[i][1] & this.board[i][0] === this.board[i][2] & this.board[i][0] !== ''
              //win by a column
        || this.board[0][i] === this.board[1][i] & this.board[0][i] === this.board[2][i] & this.board[0][i] !== ''
              //win by cross lines
        || this.board[0][0] === this.board[1][1] & this.board[0][0] === this.board[2][2] & this.board[0][0] !== ''
              //win by cross lines
        || this.board[2][0] === this.board[1][1] & this.board[2][0] === this.board[0][2] & this.board[1][1] !== '') {
          winner = this.currentFirstPlayer().name;
          this.hasWon = true;

        } else if (this.playerTurnCount === 9 & this.hasWon !== true) {
          this.hasWon = 'tie';
          winner = 'No one';
        }
      }
    }
    return winner;
  },
}
