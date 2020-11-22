window.__require=function t(n,e,o){function c(i,a){if(!e[i]){if(!n[i]){var r=i.split("/");if(r=r[r.length-1],!n[r]){var u="function"==typeof __require&&__require;if(!a&&u)return u(r,!0);if(s)return s(r,!0);throw new Error("Cannot find module '"+i+"'")}i=r}var d=e[i]={exports:{}};n[i][0].call(d.exports,function(t){return c(n[i][1][t]||t)},d,d.exports,t,n,e,o)}return e[i].exports}for(var s="function"==typeof __require&&__require,i=0;i<o.length;i++)c(o[i]);return c}({AnimationButton:[function(t,n){"use strict";cc._RF.push(n,"82249Q45mlFhpmIBPJjXtRm","AnimationButton"),cc.Class({extends:cc.Component,properties:{gameCanvas:cc.Node,animation:cc.String},onLoad:function(){var t=this.gameCanvas.getComponent("GameManager");this.playAnimation=t.toggleAnimation.bind(t),this.button=this.node.getComponent(cc.Button)},onClick:function(){this.button.interactable=!1,this.playAnimation(this.node.name,this.animation)}}),cc._RF.pop()},{}],BuddyManager:[function(t,n){"use strict";cc._RF.push(n,"24b05zGXfJPGYocswZViSEh","BuddyManager"),cc.Class({extends:cc.Component,onLoad:function(){this.skeleton=this.getComponent(sp.Skeleton)},playAnimation:function(t,n){void 0===n&&(n=!0),this.skeleton.clearTrack(0),this.skeleton.setAnimation(0,t,n)}}),cc._RF.pop()},{}],DownloadButton:[function(t,n){"use strict";cc._RF.push(n,"9c03d6tk0ZDKpdgPos9xyHz","DownloadButton"),cc.Class({extends:cc.Component,properties:{appStoreURL:{default:"https://apps.apple.com/us/app/kick-the-buddy-forever/id1435346021"},playStoreURL:{default:"https://play.google.com/store/apps/details?id=com.playgendary.kickthebuddy"}},onLoad:function(){var t=[cc.sys.IPHONE,cc.sys.IPAD,cc.sys.MACOS];this.isAppleOS=t.includes(cc.sys.platform)},onClick:function(){cc.sys.openURL(this.isAppleOS?this.appStoreURL:this.playStoreURL)}}),cc._RF.pop()},{}],GameManager:[function(t,n){"use strict";cc._RF.push(n,"3c05dVoe5JItp/FCJo58zyP","GameManager"),cc.Class({extends:cc.Component,properties:{buddy:cc.Node,resultScreen:cc.Node,buddyManager:cc.String,resultManager:cc.String,gameButtons:[cc.Node,cc.Node]},onLoad:function(){var t=this.buddy.getComponent(this.buddyManager),n=this.resultScreen.getComponent(this.resultManager);this.buddyAnimation=t.playAnimation.bind(t),this.showResultScreen=n.showScreen.bind(n)},toggleAnimation:function(t,n,e){var o=this.gameButtons.find(function(n){return n.name===t}),c=this.gameButtons.find(function(n){return n.name!==t}).getComponent(cc.Button);this.buddyAnimation(n,e),c.interactable=!1,this.showResultScreen(),cc.tween(c.node).to(1,{opacity:0}).start(),cc.tween(o).delay(.5).to(.5,{opacity:0}).start()}}),cc._RF.pop()},{}],ResizeManager:[function(t,n){"use strict";cc._RF.push(n,"4db40HszmVEO5JgztU/0xM5","ResizeManager"),cc.Class({extends:cc.Component,properties:{buddy:cc.Node,gameLogo:cc.Node,background:cc.Node,taserButton:cc.Node,candyButton:cc.Node,downloadButton:cc.Node},onLoad:function(){cc.view.setResizeCallback(this.onResize.bind(this)),this.lastOrientationPortrait=!1,this.onResize()},onResize:function(){var t=cc.view.getCanvasSize(),n=t.width,e=t.height,o=Math.min(n,e)<768,c=n/1920,s=n<e,i=n/e;s?this.setPortrait(i,c):this.setLandscape(i,c,o),this.lastOrientationPortrait=s},setPortrait:function(t,n){var e=205.7*t,o=Math.max(.285,Math.min(n,.46));this.background.setScale(cc.v2(o,.9)),this.lastOrientationPortrait?(this.taserButton.x=-e,this.candyButton.x=e):(this.candyButton.scale=.75,this.taserButton.scale=.75,this.buddy.scale=.5,this.buddy.y=-165,this.gameLogo.scale=.5,this.downloadButton.scale=.5,cc.tween(this.taserButton).to(.15,{position:cc.v2(-e,-255)}).start(),cc.tween(this.candyButton).to(.15,{position:cc.v2(e,-255)}).start())},setLandscape:function(t,n,e){var o=239.0625*t,c=e?1:Math.max(.625,n);this.background.setScale(cc.v2(c,1)),this.lastOrientationPortrait?(this.taserButton.scale=1,this.candyButton.scale=1,this.buddy.scale=.75,this.buddy.y=-190,this.gameLogo.scale=1,this.downloadButton.scale=1,cc.tween(this.candyButton).to(.15,{position:cc.v2(o,-225)}).start(),cc.tween(this.taserButton).to(.15,{position:cc.v2(o,-75)}).start()):(this.candyButton.x=o,this.taserButton.x=o)}}),cc._RF.pop()},{}],ResultManager:[function(t,n){"use strict";cc._RF.push(n,"c9fbfVjR1NJ5YBmPoqUbd+q","ResultManager"),cc.Class({extends:cc.Component,properties:{gameLogo:cc.Node,downloadButton:cc.Node},showScreen:function(){cc.tween(this.node).delay(1.5).to(.5,{opacity:255}).start(),cc.tween(this.gameLogo).delay(2).to(.35,{position:cc.v2(0,210)},{easing:"backOut"}).start(),cc.tween(this.downloadButton).delay(2.25).to(.35,{position:cc.v2(0,-225)},{easing:"backOut"}).start()}}),cc._RF.pop()},{}]},{},["AnimationButton","BuddyManager","DownloadButton","GameManager","ResizeManager","ResultManager"]);