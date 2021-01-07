const game = {
  players: [
    {name: 'playerHuman',
    id: 'left',
    symbol: '',
    winCount: 0},
    {name: 'playerAlien',
    id: 'right',
    symbol: '',
    winCount: 0}],


  playerTurnCount: 0,
  tieGameCount: 0,
  totalGameCount: 0,
  hasWon: false,

  currentFirstPlayer: function () {
    return this.players[0];
  },

  // symbolFirstPlayer: function () {
  //   return this.symbolNames[this.currentFirstPlayer().symbol];
  // },

  currentSecondPlayer: function () {
    return this.players[1];
  },

  // symbolSecondPlayer: function () {
  //   return this.symbolNames[this.currentSecondPlayer().symbol];
  // },

  board: [
    ['', '', ''],
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
    // this.players[0].symbol = 'O';
    // this.players[1].symbol = 'X';
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

  // setupFirstGame: function () {
  //   this.newBoard();
  // },

  setupNewGame: function () {
    this.newBoard();
    this.playerTurnCount = 0;
    this.hasWon = false;

    if (this.totalGameCount === 0) {
      this.setFirstPlayer(this.currentFirstPlayer());
      console.log('First game starts!');
    } else {
      this.setFirstPlayer(this.currentSecondPlayer());
      console.log('Ready to play again');
    };
  },

  tick: function (row, column) {
    this.board[row][column] = this.currentFirstPlayer().symbol;
    this.playerTurnCount++;
  },

  performTurn: function (row, column) {
    this.tick(row, column);
    // this.findWinnerOrTie();
    let winner = this.findWinnerOrTie();

    if (!winner) {
      console.log(winner);
      this.switchPlayer();  //switch player if no winner yet
    };
  },


  findWinnerOrTie: function () {
    let winner;
    // let firstPlayer = this.currentFirstPlayer();
    // let secondPlayer = this.currentSecondPlayer();
    // let game = this;

    if (this.playerTurnCount <= 9) {
      for (let i = 0; i < 3; i++) {

        if (this.board[i][0] === this.board[i][1] & this.board[i][0] === this.board[i][2] & this.board[i][0] !== ''

        || this.board[0][i] === this.board[1][i] & this.board[0][i] === this.board[2][i] & this.board[0][i] !== ''
        //
        || this.board[0][0] === this.board[1][1] & this.board[0][0] === this.board[2][2] & this.board[0][0] !== ''
        //
        || this.board[2][0] === this.board[1][1] & this.board[2][0] === this.board[0][2] & this.board[1][1] !== '') {
          console.log('Someone won!');
          winner = this.currentFirstPlayer().name;
          this.hasWon = true;

        } else if (this.playerTurnCount === 9) {
          console.log('TIE!!!!!!!!!!');
          this.hasWon = 'tie';
          winner = 'No one';
        }
      }
    }
    return winner;
  },

  checkStatus: function () {
    console.log('First player ' + this.currentFirstPlayer().name);
    console.log('Second player ' + this.currentSecondPlayer().name);
    console.log('Current playerTurnCount ' + this.playerTurnCount);
    console.log(this.board);
    console.log('Winner ' + this.findWinnerOrTie());
    console.log('TotalGameCount: ' + this.totalGameCount);
    console.log('---------');
  }

}
