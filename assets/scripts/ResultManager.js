cc.Class({
  extends: cc.Component,

  properties: {
    downloadButton: cc.Node,
  },

  onLoad () {
    this.downloadButton.active = false;
  },

  showScreen () {
    this.downloadButton.active = true;

    cc.tween(this.node)
      .delay(1.5)
      .to(0.5, { opacity: 255.0 })
      .start();
  }
});
