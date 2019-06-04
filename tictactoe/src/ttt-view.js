class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on("click", "li", function (event) {
      const $square = $(event.currentTarget); //event.target for li ?
      debugger
      this.makeMove($square);
    });
  }

  // When a user clicks on a cell, call Game.prototype.playMove(pos) to 
  // register their move.
  // Manipulate the cell<li> to show the current player's mark. 
  // Add/remove CSS classes to change the cell background to white and 
  // display the 'X's and 'O's in different colors. 
  makeMove($square) {
    let pos = $square.data("pos");
    this.game.playMove(pos);

    let currentPlayerMark = this.game.currentPlayer; // 'x' or 'o'
  }

  setupBoard() {
    let $ul = $("<ul>");
    //outter loop through rows
    for (let row=0; row < 3; row++){
      for (let col=0; col < 3; col++){
        let $li = $("<li>");  // create an li tag 
        $li.data("pos", [row, col])
        $ul.append($li); // append this li to the ul
      }
    }
    this.$el.append($ul);
  }
}

module.exports = View;
