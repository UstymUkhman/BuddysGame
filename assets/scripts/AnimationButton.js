cc.Class({
  extends: cc.Component,

  properties: {
    game: cc.Node,
    animation: cc.String
  },

  onLoad () {
    this.gameManager = this.game.getComponent('GameManager');
  },

  onClick () {
    this.gameManager.setAnimation(this.animation);
  }
});
