cc.Class({
  extends: cc.Component,

  onLoad () {
    this.skeleton = this.getComponent(sp.Skeleton);
  },

  play (animation) {
    this.skeleton.clearTrack(0);
    this.skeleton.setAnimation(0, animation, true);
  }
});
