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

  onClick () {
    cc.sys.openURL(
      this.isAppleOS ? this.appStoreURL : this.playStoreURL
    );
  }
});
