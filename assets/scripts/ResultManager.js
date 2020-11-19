cc.Class({
  extends: cc.Component,

  properties: {
    appStoreURL: {
      default: 'https://apps.apple.com/us/app/kick-the-buddy-forever/id1435346021'
    },

    playStoreURL: {
      default: 'https://play.google.com/store/apps/details?id=com.playgendary.kickthebuddy'
    }
  },

  onLoad () {
    const appleOS = [cc.sys.IPHONE, cc.sys.IPAD, cc.sys.MACOS];
    this.isAppleOS = appleOS.includes(cc.sys.platform);
  },

  showScreen () {
    setTimeout(this.openStore.bind(this), 2500);

    cc.tween(this.node)
      .delay(1.5)
      .to(0.5, { opacity: 150.0 })
      .start();
  },

  openStore () {
    cc.sys.openURL(
      this.isAppleOS ? this.appStoreURL : this.playStoreURL
    );
  }
});
