cc.Class({
  extends: cc.Component,

  properties: {
    buddy: cc.Node,
    animator: cc.String
  },

  onLoad () {
    const script = this.buddy.getComponent(this.animator);
    this.playAnimation = script.playAnimation.bind(script);
  },

  onClick () {
    this.playAnimation('idle_candy');
  }
});
