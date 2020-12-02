cc.Class({
  extends: cc.Component,

  properties: {
    buddy: cc.Node,
    gameLogo: cc.Node,
    background: cc.Node,

    taserButton: cc.Node,
    candyButton: cc.Node,

    resultOverlay: cc.Node,
    downloadButton: cc.Node,

    backgroundWidth: { default: 646 }
  },

  onLoad () {
    cc.view.setResizeCallback(this.onResize.bind(this));
    this.onResize();
  },

  onResize () {
    const { width, height } = cc.view.getCanvasSize();
    const ratio = width / height;

    width < height
      ? this.setPortrait(ratio)
      : this.setLandscape(ratio);

    const backgroundWidth = ratio * this.backgroundWidth;

    this.resultOverlay.width = backgroundWidth;
    this.background.width = backgroundWidth;
  },

  setPortrait (ratio) {
    const buttonX = ratio * 205.7;

    this.taserButton.setPosition(-buttonX, -255.0);
    this.candyButton.setPosition(buttonX, -255.0);

    this.downloadButton.scale = 0.5;
    this.candyButton.scale = 0.75;
    this.taserButton.scale = 0.75;

    this.gameLogo.scale = 0.5;
    this.buddy.scale = 0.5;
    this.buddy.y = -165.0;
  },

  setLandscape (ratio) {
    const buttonX = ratio * 239.0625;

    this.candyButton.setPosition(buttonX, -225.0);
    this.taserButton.setPosition(buttonX, -75.0);

    this.downloadButton.scale = 1.0;
    this.taserButton.scale = 1.0;
    this.candyButton.scale = 1.0;

    this.gameLogo.scale = 1.0;
    this.buddy.scale = 0.75;
    this.buddy.y = -190.0;
  }
});
