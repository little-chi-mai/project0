# Project #0: Tic Tac Toe ++

## By Mai Nguyen

### The wait is finally over!

The legendary game [__Tic Tac Toe__](https://little-chi-mai.github.io/project0/) is now available with a web version!

Are you ready to have some amazing-unlimited fun with your friend?

Click [here](https://little-chi-mai.github.io/project0/) to enter the zone of an enjoyable co-op tactic game for all ages.

> _"Seriously, this game is irresistible. I couldn't stop playing it!"_ - The Blade from Zoom.

> _"I haven't had such a fun game for all ages until Tic Tac Toe! The game page loaded at no time. And the "Let's play" button's background color is one of my favourite parts."_ - Many other players.

---------
### Main features


- Js code was written in two separated file as `gameController.js` and `main.js`.

- `gameController.js` contains the game's logic and `main.js` contains the game's rendering logic.

- jQuery was used to manipulate the DOM to create interaction.

- Customised players' names and symbols.

- Multiple game rounds with a score tracker.

----------
### Components

- The game's logic is provided in `game` object with other nested objects to store the game's information like `players`, `board`, `playerTurnCount`, etc... and game's functions such as `setFirstPlayer`, `performTurn` and `findWinnerOrTie`.

- The `board` is stored in a nested array makes it easy to be iterated through.

- The `findWinnerOrTie` function was written to iteration through every possible scenario to find a winner. However, instead of scanning the entire board for winning condition, this can be improved by writing a function that accept the board input `row` and `column` and check the winning condition around the clicked location. This will allow the game works with bigger board size.


-------
