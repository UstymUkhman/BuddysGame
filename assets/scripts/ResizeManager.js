cc.Class({
  extends: cc.Component,

  properties: {
    buddy: cc.Node,
    gameLogo: cc.Node,
    background: cc.Node,
    taserButton: cc.Node,
    candyButton: cc.Node,
    downloadButton: cc.Node
  },

  onLoad () {
    // console.log(cc.view.getScaleX(), cc.view.getScaleY());
    cc.view.setResizeCallback(this.onResize.bind(this));

    this.landscapeButtonX = 239.0625;

    this.portraitTaserX = -205.7;
    this.portraitCandyX = 205.7;

    this.onResize();
  },

  onResize () {    
    const { width, height } = cc.view.getCanvasSize();
    const ratio = width / height;

    width < height
      ? this.setPortrait(ratio)
      : this.setLandscape(ratio);
  },

  setPortrait (ratio) {
    this.candyButton.x = ratio * this.portraitCandyX;
    this.taserButton.x = ratio * this.portraitTaserX;

    this.background.setScale(cc.v2(0.285, 0.9));

    this.downloadButton.scale = 0.5;

    this.candyButton.scale = 0.75;
    this.taserButton.scale = 0.75;

    this.taserButton.y = -255.0;
    this.candyButton.y = -255.0;

    this.gameLogo.scale = 0.5;

    this.buddy.scale = 0.5;
    this.buddy.y = -165.0;
  },

  setLandscape (ratio) {
    const buttonX = ratio * this.landscapeButtonX;

    this.downloadButton.scale = 1.0;

    this.candyButton.x = buttonX;
    this.taserButton.x = buttonX;

    this.taserButton.scale = 1.0;
    this.candyButton.scale = 1.0;

    this.background.scale = 1.0;

    this.candyButton.y = -225.0;
    this.taserButton.y = -75.0;

    this.gameLogo.scale = 1.0;

    this.buddy.scale = 0.75;
    this.buddy.y = -190.0;
  }
});
