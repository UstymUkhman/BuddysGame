window.__require=function t(n,e,o){function c(a,s){if(!e[a]){if(!n[a]){var r=a.split("/");if(r=r[r.length-1],!n[r]){var u="function"==typeof __require&&__require;if(!s&&u)return u(r,!0);if(i)return i(r,!0);throw new Error("Cannot find module '"+a+"'")}a=r}var d=e[a]={exports:{}};n[a][0].call(d.exports,function(t){return c(n[a][1][t]||t)},d,d.exports,t,n,e,o)}return e[a].exports}for(var i="function"==typeof __require&&__require,a=0;a<o.length;a++)c(o[a]);return c}({AnimationButton:[function(t,n){"use strict";cc._RF.push(n,"82249Q45mlFhpmIBPJjXtRm","AnimationButton"),cc.Class({extends:cc.Component,properties:{gameCanvas:cc.Node,animation:cc.String},onLoad:function(){var t=this.gameCanvas.getComponent("GameManager");this.playAnimation=t.toggleAnimation.bind(t)},onClick:function(){this.playAnimation(this.node.name,this.animation)}}),cc._RF.pop()},{}],BuddyAnimator:[function(t,n){"use strict";cc._RF.push(n,"24b05zGXfJPGYocswZViSEh","BuddyAnimator"),cc.Class({extends:cc.Component,onLoad:function(){this.skeleton=this.getComponent(sp.Skeleton)},playAnimation:function(t,n){void 0===n&&(n=!0),this.skeleton.clearTrack(0),this.skeleton.setAnimation(0,t,n)}}),cc._RF.pop()},{}],DownloadButton:[function(t,n){"use strict";cc._RF.push(n,"9c03d6tk0ZDKpdgPos9xyHz","DownloadButton"),cc.Class({extends:cc.Component,properties:{appStoreURL:{default:"https://apps.apple.com/us/app/kick-the-buddy-forever/id1435346021"},playStoreURL:{default:"https://play.google.com/store/apps/details?id=com.playgendary.kickthebuddy"}},onLoad:function(){var t=[cc.sys.IPHONE,cc.sys.IPAD,cc.sys.MACOS];this.isAppleOS=t.includes(cc.sys.platform)},onClick:function(){cc.sys.openURL(this.isAppleOS?this.appStoreURL:this.playStoreURL)}}),cc._RF.pop()},{}],GameManager:[function(t,n){"use strict";cc._RF.push(n,"3c05dVoe5JItp/FCJo58zyP","GameManager"),cc.Class({extends:cc.Component,properties:{buddy:cc.Node,resultScreen:cc.Node,buddyAnimator:cc.String,resultManager:cc.String,gameButtons:[cc.Node,cc.Node]},onLoad:function(){var t=this.buddy.getComponent(this.buddyAnimator),n=this.resultScreen.getComponent(this.resultManager);this.buddyAnimation=t.playAnimation.bind(t),this.showResultScreen=n.showScreen.bind(n),cc.view.setResizeCallback(this.onResize.bind(this)),console.log("getCanvasSize",cc.view.getCanvasSize()),console.log("getFrameSize",cc.view.getFrameSize())},onResize:function(t){console.log("onResizeCallback",t)},toggleAnimation:function(t,n,e){var o=this.gameButtons.find(function(n){return n.name===t}),c=this.gameButtons.find(function(n){return n.name!==t});this.buddyAnimation(n,e),this.showResultScreen(),cc.tween(c).to(1,{opacity:0}).start(),cc.tween(o).delay(.5).to(1,{opacity:0}).start()}}),cc._RF.pop()},{}],ResultManager:[function(t,n){"use strict";cc._RF.push(n,"c9fbfVjR1NJ5YBmPoqUbd+q","ResultManager"),cc.Class({extends:cc.Component,properties:{gameLogo:cc.Node,downloadButton:cc.Node},onLoad:function(){this.downloadButton.active=!1},showScreen:function(){var t=this;cc.tween(this.node).delay(1.5).to(.5,{opacity:255}).call(function(){t.downloadButton.active=!0}).start(),cc.tween(this.gameLogo).delay(2).to(.35,{position:cc.v2(0,210)},{easing:"backOut"}).start(),cc.tween(this.downloadButton).delay(2.25).to(.35,{position:cc.v2(0,-225)},{easing:"backOut"}).start()}}),cc._RF.pop()},{}]},{},["AnimationButton","BuddyAnimator","DownloadButton","GameManager","ResultManager"]);