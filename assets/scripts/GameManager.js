cc.Class({
  extends: cc.Component,

  properties: {
    buddy: cc.Node,
    resultScreen: cc.Node,
    buddyManager: cc.String,
    resultManager: cc.String,
    gameButtons: [cc.Node, cc.Node]
  },

  onLoad () {
    const buddy = this.buddy.getComponent(this.buddyManager);
    const result = this.resultScreen.getComponent(this.resultManager);

    this.buddyAnimation = buddy.playAnimation.bind(buddy);
    this.showResultScreen = result.showScreen.bind(result);
  },

  toggleAnimation (clickedButton, animation, loop) {
    const pressedButton = this.gameButtons.find(
      button => button.name === clickedButton
    );

    const otherButton = this.gameButtons.find(
      button => button.name !== clickedButton
    ).getComponent(cc.Button);

    this.buddyAnimation(animation, loop);
    otherButton.interactable = false;
    this.showResultScreen();

    cc.tween(otherButton.node)
      .to(1.0, { opacity: 0.0 })
      .start();

    cc.tween(pressedButton)
      .delay(0.5)
      .to(0.5, { opacity: 0.0 })
      .start();
  }
});
