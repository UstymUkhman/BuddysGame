cc.Class({
  extends: cc.Component,

  properties: {
    buddy: cc.Node,
    resultScreen: cc.Node,
    gameButtons: [cc.Node, cc.Node]
  },

  onLoad () {
    this.result = this.resultScreen.getComponent('ResultManager');
    this.animator = this.buddy.getComponent('BuddyManager');

    this.buttons = this.gameButtons.map(
      button => button.getComponent(cc.Button)
    );
  },

  setAnimation (animation) {
    this.buttons.forEach(button =>
      button.interactable = false
    );

    this.gameButtons.forEach(button =>
      cc.tween(button)
        .to(0.5, { opacity: 0.0 })
        .start()
    );

    this.animator.play(animation);
    this.result.showScreen();
  }
});
