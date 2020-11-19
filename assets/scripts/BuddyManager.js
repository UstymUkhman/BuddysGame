cc.Class({
  extends: cc.Component,

  onLoad () {
    this.skeleton = this.getComponent(sp.Skeleton);
  },

  playAnimation (animation, loop = false) {
    this.skeleton.clearTrack(0);
    this.skeleton.setAnimation(0, animation, loop);
    this.skeleton.addAnimation(0, 'idle_normal', true);
  }
});
