cc.Class({
  extends: cc.Component,

  properties: {
    gameLogo: cc.Node,
    downloadButton: cc.Node
  },

  showScreen () {
    cc.tween(this.node)
      .delay(1.5)
      .to(0.5, { opacity: 255.0 })
      .start();

    cc.tween(this.gameLogo)
      .delay(2.0)
      .to(0.35, { position: cc.v2(0.0, 210.0) }, { easing: 'backOut' })
      .start();

    cc.tween(this.downloadButton)
      .delay(2.25)
      .to(0.35, { position: cc.v2(0.0, -225.0) }, { easing: 'backOut' })
      .start();
  }
});
