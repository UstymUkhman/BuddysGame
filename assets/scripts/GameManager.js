cc.Class({
  extends: cc.Component,

  properties: {
    buddy: cc.Node,
    resultScreen: cc.Node,
    buddyAnimator: cc.String,
    resultManager: cc.String,
    gameButtons: [cc.Node, cc.Node]
  },

  // Background:
  // - scale.x: 0.285
  // - scale.y: 0.9

  onLoad () {
    const buddy = this.buddy.getComponent(this.buddyAnimator);
    const result = this.resultScreen.getComponent(this.resultManager);

    this.buddyAnimation = buddy.playAnimation.bind(buddy);
    this.showResultScreen = result.showScreen.bind(result);

    cc.view.setResizeCallback(this.onResize.bind(this));
    console.log('getCanvasSize', cc.view.getCanvasSize());

    console.log('getFrameSize', cc.view.getFrameSize());
  },

  onResize (a) {
    console.log('onResizeCallback', a);
  },

  toggleAnimation (clickedButton, animation, loop) {
    const pressedButton = this.gameButtons.find(
      button => button.name === clickedButton
    );

    const otherButton = this.gameButtons.find(
      button => button.name !== clickedButton
    );

    this.buddyAnimation(animation, loop);
    this.showResultScreen();

    cc.tween(otherButton)
      .to(1.0, { opacity: 0.0 })
      .start();

    cc.tween(pressedButton)
      .delay(0.5)
      .to(1.0, { opacity: 0.0 })
      .start();
  }
});
