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
    cc.view.setResizeCallback(this.onResize.bind(this));
    this.lastOrientationPortrait = false;
    this.onResize();
  },

  onResize () {    
    const { width, height } = cc.view.getCanvasSize();
    const phone = Math.min(width, height) < 768;

    const fullHDRatio = width / 1920.0;
    const isPortrait = width < height;
    const ratio = width / height;

    isPortrait
      ? this.setPortrait(ratio, fullHDRatio)
      : this.setLandscape(ratio, fullHDRatio, phone);

    this.lastOrientationPortrait = isPortrait;
  },

  setPortrait (ratio, fullHDRatio) {
    const buttonX = ratio * 205.7;
    const scaleX = Math.max(0.285, Math.min(fullHDRatio, 0.46));

    this.background.setScale(cc.v2(scaleX, 0.9));

    if (this.lastOrientationPortrait) {
      this.taserButton.x = -buttonX;
      this.candyButton.x = buttonX;
    }

    else {
      this.candyButton.scale = 0.75;
      this.taserButton.scale = 0.75;

      this.buddy.scale = 0.5;
      this.buddy.y = -165.0;

      this.gameLogo.scale = 0.5;
      this.downloadButton.scale = 0.5;

      cc.tween(this.taserButton)
        .to(0.15, { position: cc.v2(-buttonX, -255.0) })
        .start();

      cc.tween(this.candyButton)
        .to(0.15, { position: cc.v2(buttonX, -255.0) })
        .start();
    }
  },

  setLandscape (ratio, fullHDRatio, isPhone) {
    const buttonX = ratio * 239.0625;
    const scaleX = isPhone ? 1.0 : Math.max(0.625, fullHDRatio);

    this.background.setScale(cc.v2(scaleX, 1.0));

    if (this.lastOrientationPortrait) {
      this.taserButton.scale = 1.0;
      this.candyButton.scale = 1.0;

      this.buddy.scale = 0.75;
      this.buddy.y = -190.0;

      this.gameLogo.scale = 1.0;
      this.downloadButton.scale = 1.0;

      cc.tween(this.candyButton)
        .to(0.15, { position: cc.v2(buttonX, -225.0) })
        .start();

      cc.tween(this.taserButton)
        .to(0.15, { position: cc.v2(buttonX, -75.0) })
        .start();
    }

    else {
      this.candyButton.x = buttonX;
      this.taserButton.x = buttonX;
    }
  }
});
