cc.Class({
  extends: cc.Component,

  properties: {
    gameCanvas: cc.Node,
    animation: cc.String
  },

  onLoad () {
    const game = this.gameCanvas.getComponent('GameManager');
    this.playAnimation = game.toggleAnimation.bind(game);
  },

  onClick () {
    this.playAnimation(this.node.name, this.animation);
  }
});
