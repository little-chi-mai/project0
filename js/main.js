const board = {
  a1: '',
  a2: '',
  a3: '',
  b1: '',
  b2: '',
  b3: '',
  c1: '',
  c2: '',
  c3: '',

  tickO: function (place) {
    this.place = 'O';
    console.log(place + ' ' + this.place);
  },

  tickX: function (place) {
    this.place = 'X';
    console.log(place + ' ' + this.place);
  },

  checkWinner: function () {
    if (this.a1 === this.a2 & this.a1 === this.a3 || this.a1 === this.b2 & this.a1 === this.c3 || this.a1 === this.b1 & this.a1 === this.c1) {
      console.log(`${this.a1} won!`);
    } else {
      console.log(`Yet to win`);
    }
  }
}

$(document).ready(function () {
  let turn = 0;


    $('#a1').on('click', function () {
      if (turn % 2 === 0) {
        board.tickX('a1');
        turn += 1;
        console.log(turn);
      } else {
        board.tickO('a1');
        turn += 1;
        console.log(turn);
        };
      board.checkWinner();
    });

    $('#a2').on('click', function () {
      if (turn % 2 === 0) {
        board.tickX('a2');
        turn += 1;
        console.log(turn);
      } else {
        board.tickO('a2');
        turn += 1;
        console.log(turn);
        };
      board.checkWinner();
    });

    $('#a3').on('click', function () {
      if (turn % 2 === 0) {
        board.tickX('a3');
        turn += 1;
        console.log(turn);
      } else {
        board.tickO('a3');
        turn += 1;
        console.log(turn);
        };
      board.checkWinner();
    });
});
