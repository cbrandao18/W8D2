class HanoiView {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.moveFromTower = null;

    this.$el.on('click', 'ul', this.clickTower.bind(this));
    this.setupTowers();
    this.render();
  }

  clickTower(event){
    // debugger
    const clickedTower = $(event.currentTarget).index();
    if (this.moveFromTower === null){ // first click
      this.moveFromTower = clickedTower;
    } else { //second click
      if (this.game.isValidMove(this.moveFromTower, clickedTower)){
        this.game.move(this.moveFromTower, clickedTower);
        this.render();
      } else {
        alert('invalid move');
      }
      this.moveFromTower = null;
    }
  }

render() {
    //select all of our ul's
  const $towers = this.$el.find('ul');
  this.game.towers.forEach(function(tower, index) {
    let $currentTower = $towers.eq(index); // the single ul element in the dom
    let $currentDiscSlots = $currentTower.children(); //array of li elements
    $currentDiscSlots.removeClass();
    tower.forEach( (discValue, discIndex) => { //[3,2,1]
      let liIndex = 2 - discIndex;
      let $disc = $currentDiscSlots.eq(liIndex);
      if (discValue === 3){
        $disc.addClass('big-disc');
      } else if (discValue === 2){
        $disc.addClass('middle-disc');
      } else {
        $disc.addClass('small-disc');
      }
    });
  })
}

setupTowers() {
    // let $ul = $("<ul>");
    for(let tower=0; tower<3;tower++) {
        let $ul = $('<ul>');
        for(let disc=0;disc<3;disc++) {
            let $li = $('<li>');
            $ul.append($li);

        }
        // $li.html('Dummy tower ' + tower);
        this.$el.append($ul);
    }
  }
}

module.exports = HanoiView;