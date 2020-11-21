cc.Class({
  extends: cc.Component,

  onLoad () {
    this.skeleton = this.getComponent(sp.Skeleton);
  },

  playAnimation (animation, loop = true) {
    this.skeleton.clearTrack(0);
    this.skeleton.setAnimation(0, animation, loop);
  }
});
