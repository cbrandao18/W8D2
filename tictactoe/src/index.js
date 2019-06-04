const View = require("./ttt-view")
const Game = require("./game")

  $(() => {
    const game = new Game();
    const viewEl = $('.ttt');
    new View(game, viewEl);
  });
