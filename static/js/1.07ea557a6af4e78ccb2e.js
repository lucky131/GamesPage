webpackJsonp([1],{"1Hpz":function(t,e,n){var i=n("HmiX"),s=n("aThA")("iterator"),r=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||r[s]===t)}},"4jXm":function(t,e,n){var i=n("bnAR");t.exports=function(t,e,n){for(var s in e)n&&t[s]?t[s]=e[s]:i(t,s,e[s]);return t}},"8Doo":function(t,e,n){"use strict";var i=n("2AZ7"),s=n("tCZj"),r=n("Z2gz");i(i.S,"Promise",{try:function(t){var e=s.f(this),n=r(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},"9Pyf":function(t,e,n){var i=n("y4M0"),s=n("jdnV");t.exports=n("/KQr").getIterator=function(t){var e=s(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return i(e.call(t))}},"9Z3l":function(t,e,n){var i=n("402Z"),s=n("aThA")("toStringTag"),r="Arguments"==i(function(){return arguments}());t.exports=function(t){var e,n,o;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),s))?n:r?i(e):"Object"==(o=i(e))&&"function"==typeof e.callee?"Arguments":o}},DC8r:function(t,e,n){"use strict";e.a={data:function(){return{allItems:{10:{id:10,name:"启示录",desc:"这是一本正经的书",img:n("z557")},11:{id:11,name:"宝玉",desc:"从巨龙嘴中获得的宝玉，散发着五彩斑斓的黑色",img:n("z557")},12:{id:12,name:"大刀",desc:"用龙玉锻造的黑色长刀，散发着五彩斑斓的黑色，拥有极强的威力",img:n("z557")},13:{id:13,name:"苹果",desc:"从医生那儿获得的苹果，用于给猎人治病，不知道有没有效果",img:n("z557")},14:{id:14,name:"皇冠",desc:"小丑用来扮演国王的道具",img:n("z557")},15:{id:15,name:"弓",desc:"猎人无法拿起的一把弓，不知道这当中是什么秘密",img:n("z557")},16:{id:16,name:"天平",desc:"在果林里偶然发现的一个小型天平，似乎是谁不小心丢在了这里",img:n("z557")},404:{id:404,name:"乌金长杵",desc:"从幸运三杠城堡残骸中找到的神秘物体，不知道是干什么用的，还一直在发热",img:n("z557")},405:{id:405,name:"墨绿长杵",desc:"从商人处购买的神秘物体，产自锟铻，锟铻是古书上记载的一座山，所出铁可造兵器，传说中四大天王的武器就是用锟铻铁所锻造，拥有神秘的力量",img:n("z557")}}}}}},FCbr:function(t,e,n){n("rYUz"),n("kUHi"),t.exports=n("/KQr").Array.from},Hgu4:function(t,e,n){var i=n("y4M0");t.exports=function(t,e,n,s){try{return s?e(i(n)[0],n[1]):e(n)}catch(e){var r=t.return;throw void 0!==r&&i(r.call(t)),e}}},Ho6t:function(t,e,n){var i,s,r,o=n("I1yF"),a=n("RnXO"),c=n("6Z5t"),l=n("7fiG"),u=n("Dmm0"),d=u.process,_=u.setImmediate,h=u.clearImmediate,f=u.MessageChannel,x=u.Dispatch,v=0,p={},m=function(){var t=+this;if(p.hasOwnProperty(t)){var e=p[t];delete p[t],e()}},y=function(t){m.call(t.data)};_&&h||(_=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return p[++v]=function(){a("function"==typeof t?t:Function(t),e)},i(v),v},h=function(t){delete p[t]},"process"==n("402Z")(d)?i=function(t){d.nextTick(o(m,t,1))}:x&&x.now?i=function(t){x.now(o(m,t,1))}:f?(r=(s=new f).port2,s.port1.onmessage=y,i=o(r.postMessage,r,1)):u.addEventListener&&"function"==typeof postMessage&&!u.importScripts?(i=function(t){u.postMessage(t+"","*")},u.addEventListener("message",y,!1)):i="onreadystatechange"in l("script")?function(t){c.appendChild(l("script")).onreadystatechange=function(){c.removeChild(this),m.call(t)}}:function(t){setTimeout(o(m,t,1),0)}),t.exports={set:_,clear:h}},HzJ8:function(t,e,n){t.exports={default:n("fL6L"),__esModule:!0}},IHPB:function(t,e,n){"use strict";e.__esModule=!0;var i,s=n("kfHR"),r=(i=s)&&i.__esModule?i:{default:i};e.default=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,r.default)(t)}},K8WX:function(t,e,n){"use strict";var i=n("Dmm0"),s=n("/KQr"),r=n("0hE2"),o=n("2gJQ"),a=n("aThA")("species");t.exports=function(t){var e="function"==typeof s[t]?s[t]:i[t];o&&e&&!e[a]&&r.f(e,a,{configurable:!0,get:function(){return this}})}},R0ln:function(t,e){},RnXO:function(t,e){t.exports=function(t,e,n){var i=void 0===n;switch(e.length){case 0:return i?t():t.call(n);case 1:return i?t(e[0]):t.call(n,e[0]);case 2:return i?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return i?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return i?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},UJ2L:function(t,e,n){"use strict";var i=n("0hE2"),s=n("0ZA2");t.exports=function(t,e,n){e in t?i.f(t,e,s(0,n)):t[e]=n}},Utzn:function(t,e,n){var i=n("aThA")("iterator"),s=!1;try{var r=[7][i]();r.return=function(){s=!0},Array.from(r,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!s)return!1;var n=!1;try{var r=[7],o=r[i]();o.next=function(){return{done:n=!0}},r[i]=function(){return o},t(r)}catch(t){}return n}},Z2gz:function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},"bKY/":function(t,e,n){var i=n("Dmm0").navigator;t.exports=i&&i.userAgent||""},cecH:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("qhb1"),s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap",style:{height:t.height+"px"}},["menu"===t.UIController?n("div",{staticClass:"menuUI"},[t._m(0),t._v(" "),n("div",{staticClass:"menuBtn",on:{click:function(e){return t.initGame()}}},[t._v("Start")])]):"normal"===t.UIController?n("div",{staticClass:"normalUI"},[n("div",{staticClass:"stat"},[n("div",{staticClass:"ball wrath",style:{opacity:t.characterData.wrath/100,animationDuration:Math.max(200,5200-50*t.characterData.wrath)+"ms"}}),t._v(" "),n("div",{staticClass:"ball envy",style:{opacity:t.characterData.envy/100,animationDuration:Math.max(200,5200-50*t.characterData.envy)+"ms"}}),t._v(" "),n("div",{staticClass:"ball greed",style:{opacity:t.characterData.greed/100,animationDuration:Math.max(200,5200-50*t.characterData.greed)+"ms"}})]),t._v(" "),n("div",{staticClass:"main"},[t._v(t._s(t.allEvents[t.event].desc))]),t._v(" "),n("div",{staticClass:"ope"},t._l(t.allEvents[t.event].options,function(e,i){return t.judgeCondition(t.allEvents[t.event].options[i].condition)?n("div",{key:i,staticClass:"option",on:{click:function(e){return t.chooseOption(t.event,i)}}},[t._v(t._s(e.text))]):t._e()}),0),t._v(" "),n("div",{staticClass:"menuBar"},[n("div",{staticClass:"menuBarBtn",on:{click:function(e){t.UIController="bag",t.displayItemId=0}}},[n("i",{staticClass:"el-icon-goods"}),t._v(" "),n("span",[t._v("背包")])])])]):"bag"===t.UIController?n("div",{staticClass:"bagUI"},[n("div",{staticClass:"items"},t._l(t.characterData.item,function(e){return n("img",{key:e,class:{item:!0,display:t.displayItemId===e},attrs:{src:t.allItems[e].img},on:{click:function(n){t.displayItemId=e}}})}),0),t._v(" "),n("div",{staticClass:"desc"},[t._v(t._s(0===t.displayItemId?"":t.allItems[t.displayItemId].name+"："+t.allItems[t.displayItemId].desc))]),t._v(" "),n("div",{staticClass:"backRow",on:{click:function(e){t.UIController="normal"}}},[t._m(1)])]):"system"===t.UIController?n("div",{staticClass:"systemUI"},[n("div",{staticClass:"systems"}),t._v(" "),n("div",{staticClass:"backRow",on:{click:function(e){t.UIController="normal"}}},[t._m(2)])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[this._v("三灾 "),e("sub",[this._v("v1.0")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"btn"},[e("i",{staticClass:"el-icon-back"}),this._v(" "),e("span",[this._v("返回")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"btn"},[e("i",{staticClass:"el-icon-back"}),this._v(" "),e("span",[this._v("返回")])])}]};var r=function(t){n("R0ln")},o=n("C7Lr")(i.a,s,!1,r,"data-v-60e5817b",null);e.default=o.exports},fL6L:function(t,e,n){n("MKOc"),n("rYUz"),t.exports=n("9Pyf")},gZ7Q:function(t,e,n){"use strict";var i,s,r,o,a=n("4I+n"),c=n("Dmm0"),l=n("I1yF"),u=n("9Z3l"),d=n("2AZ7"),_=n("yLZD"),h=n("TYpQ"),f=n("lYcF"),x=n("k15D"),v=n("ilqx"),p=n("Ho6t").set,m=n("xcup")(),y=n("tCZj"),g=n("Z2gz"),D=n("bKY/"),E=n("hjV4"),A=c.TypeError,b=c.process,I=b&&b.versions,w=I&&I.v8||"",C=c.Promise,M="process"==u(b),O=function(){},P=s=y.f,U=!!function(){try{var t=C.resolve(1),e=(t.constructor={})[n("aThA")("species")]=function(t){t(O,O)};return(M||"function"==typeof PromiseRejectionEvent)&&t.then(O)instanceof e&&0!==w.indexOf("6.6")&&-1===D.indexOf("Chrome/66")}catch(t){}}(),R=function(t){var e;return!(!_(t)||"function"!=typeof(e=t.then))&&e},j=function(t,e){if(!t._n){t._n=!0;var n=t._c;m(function(){for(var i=t._v,s=1==t._s,r=0,o=function(e){var n,r,o,a=s?e.ok:e.fail,c=e.resolve,l=e.reject,u=e.domain;try{a?(s||(2==t._h&&B(t),t._h=1),!0===a?n=i:(u&&u.enter(),n=a(i),u&&(u.exit(),o=!0)),n===e.promise?l(A("Promise-chain cycle")):(r=R(n))?r.call(n,c,l):c(n)):l(i)}catch(t){u&&!o&&u.exit(),l(t)}};n.length>r;)o(n[r++]);t._c=[],t._n=!1,e&&!t._h&&T(t)})}},T=function(t){p.call(c,function(){var e,n,i,s=t._v,r=K(t);if(r&&(e=g(function(){M?b.emit("unhandledRejection",s,t):(n=c.onunhandledrejection)?n({promise:t,reason:s}):(i=c.console)&&i.error&&i.error("Unhandled promise rejection",s)}),t._h=M||K(t)?2:1),t._a=void 0,r&&e.e)throw e.v})},K=function(t){return 1!==t._h&&0===(t._a||t._c).length},B=function(t){p.call(c,function(){var e;M?b.emit("rejectionHandled",t):(e=c.onrejectionhandled)&&e({promise:t,reason:t._v})})},k=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),j(e,!0))},L=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw A("Promise can't be resolved itself");(e=R(t))?m(function(){var i={_w:n,_d:!1};try{e.call(t,l(L,i,1),l(k,i,1))}catch(t){k.call(i,t)}}):(n._v=t,n._s=1,j(n,!1))}catch(t){k.call({_w:n,_d:!1},t)}}};U||(C=function(t){f(this,C,"Promise","_h"),h(t),i.call(this);try{t(l(L,this,1),l(k,this,1))}catch(t){k.call(this,t)}},(i=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=n("4jXm")(C.prototype,{then:function(t,e){var n=P(v(this,C));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=M?b.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&j(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),r=function(){var t=new i;this.promise=t,this.resolve=l(L,t,1),this.reject=l(k,t,1)},y.f=P=function(t){return t===C||t===o?new r(t):s(t)}),d(d.G+d.W+d.F*!U,{Promise:C}),n("AhUs")(C,"Promise"),n("K8WX")("Promise"),o=n("/KQr").Promise,d(d.S+d.F*!U,"Promise",{reject:function(t){var e=P(this);return(0,e.reject)(t),e.promise}}),d(d.S+d.F*(a||!U),"Promise",{resolve:function(t){return E(a&&this===o?C:this,t)}}),d(d.S+d.F*!(U&&n("Utzn")(function(t){C.all(t).catch(O)})),"Promise",{all:function(t){var e=this,n=P(e),i=n.resolve,s=n.reject,r=g(function(){var n=[],r=0,o=1;x(t,!1,function(t){var a=r++,c=!1;n.push(void 0),o++,e.resolve(t).then(function(t){c||(c=!0,n[a]=t,--o||i(n))},s)}),--o||i(n)});return r.e&&s(r.v),n.promise},race:function(t){var e=this,n=P(e),i=n.reject,s=g(function(){x(t,!1,function(t){e.resolve(t).then(n.resolve,i)})});return s.e&&i(s.v),n.promise}})},hjV4:function(t,e,n){var i=n("y4M0"),s=n("yLZD"),r=n("tCZj");t.exports=function(t,e){if(i(t),s(e)&&e.constructor===t)return e;var n=r.f(t);return(0,n.resolve)(e),n.promise}},ilqx:function(t,e,n){var i=n("y4M0"),s=n("TYpQ"),r=n("aThA")("species");t.exports=function(t,e){var n,o=i(t).constructor;return void 0===o||void 0==(n=i(o)[r])?e:s(n)}},jdnV:function(t,e,n){var i=n("9Z3l"),s=n("aThA")("iterator"),r=n("HmiX");t.exports=n("/KQr").getIteratorMethod=function(t){if(void 0!=t)return t[s]||t["@@iterator"]||r[i(t)]}},k15D:function(t,e,n){var i=n("I1yF"),s=n("Hgu4"),r=n("1Hpz"),o=n("y4M0"),a=n("6f6n"),c=n("jdnV"),l={},u={};(e=t.exports=function(t,e,n,d,_){var h,f,x,v,p=_?function(){return t}:c(t),m=i(n,d,e?2:1),y=0;if("function"!=typeof p)throw TypeError(t+" is not iterable!");if(r(p)){for(h=a(t.length);h>y;y++)if((v=e?m(o(f=t[y])[0],f[1]):m(t[y]))===l||v===u)return v}else for(x=p.call(t);!(f=x.next()).done;)if((v=s(x,m,f.value,e))===l||v===u)return v}).BREAK=l,e.RETURN=u},kUHi:function(t,e,n){"use strict";var i=n("I1yF"),s=n("2AZ7"),r=n("A2+p"),o=n("Hgu4"),a=n("1Hpz"),c=n("6f6n"),l=n("UJ2L"),u=n("jdnV");s(s.S+s.F*!n("Utzn")(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,s,d,_=r(t),h="function"==typeof this?this:Array,f=arguments.length,x=f>1?arguments[1]:void 0,v=void 0!==x,p=0,m=u(_);if(v&&(x=i(x,f>2?arguments[2]:void 0,2)),void 0==m||h==Array&&a(m))for(n=new h(e=c(_.length));e>p;p++)l(n,p,v?x(_[p],p):_[p]);else for(d=m.call(_),n=new h;!(s=d.next()).done;p++)l(n,p,v?o(d,x,[s.value,p],!0):s.value);return n.length=p,n}})},kYJG:function(t,e,n){n("zjBV"),n("rYUz"),n("MKOc"),n("gZ7Q"),n("uqAR"),n("8Doo"),t.exports=n("/KQr").Promise},kfHR:function(t,e,n){t.exports={default:n("FCbr"),__esModule:!0}},lYcF:function(t,e){t.exports=function(t,e,n,i){if(!(t instanceof e)||void 0!==i&&i in t)throw TypeError(n+": incorrect invocation!");return t}},qB0K:function(t,e,n){"use strict";e.a={data:function(){return{allEvents:{0:{id:0,desc:"故事发生在中世纪的某个小帝国内，你是一名普通的士兵。这个世界正饱受战争、瘟疫、饥荒这三大灾难所带来的苦难，人们称之为三灾。在这民不聊生的时代，似乎有人并不为三灾所困扰，小小的帝国内似乎隐藏着巨大的秘密...",options:[{text:"继续",next:1}],once:!0},1:{id:1,desc:"游戏以玩家的选择为主要进行方式，每一个选择都会造成某些影响，人物有3项属性，属性的值不以数值的形式展示，而是以颜色的深浅以及缩放的频率与幅度来表示，而属性所代表的意义也需要玩家自行发掘。在达成某些条件后即可开启主线剧情。祝你游戏愉快。",options:[{text:"这里有三个选项",result:[[5,0,0],[],[]]},{text:"不同的选项会造成不同的影响",result:[[0,5,0],[],[]]},{text:"请慎重作出决定",result:[[0,0,5],[],[]]}],result:[[],[],[[100,199],200,210,220,230,404]]},2:{id:2,desc:"战火已经绵延到了主城内，人民们已经开始组织逃亡，城内一片混乱。你跑到城堡中，却发现国王已经不见了，回头一看，整个城池已经沦为一片火海，你缓缓戴上了头盔，拿起了武器，走入了火海之中...\n\n结局1",options:[{text:"重新开始"}],ending:!0},3:{id:3,desc:"瘟疫已经达到无法控制的程度，人民已经失去了所有的希望，虽是白天，但天空没有一丝光芒。城里没有一滴血，却已是横尸遍野。你坐在河边，仰望着天空，一切都已经结束了...\n\n结局2",options:[{text:"重新开始"}],ending:!0},4:{id:4,desc:"河水里没有一滴水，田野里没有一根庄稼，天空盘旋着群群乌鸦，一声声惨叫，成为了人们的丧钟。你站立在丧尸般的人群当中，聆听着最后的悲鸣曲...\n\n结局3",options:[{text:"重新开始"}],ending:!0},5:{id:5,desc:"愤怒的你过于渴望力量，已经走火入魔，最后在远征的路上化成了一块石头...\n\n结局4",options:[{text:"重新开始"}],ending:!0},6:{id:6,desc:"嫉妒之心逐渐被病魔侵蚀，明明天下已经没有瘟疫了，可为什么只有你一人得了这种不治之症...\n\n结局5",options:[{text:"重新开始"}],ending:!0},7:{id:7,desc:"贪婪让你腰缠万贯，让你享尽荣华富贵，最终在宫殿的后院里七窍流血而死...\n\n结局6",options:[{text:"重新开始"}],ending:!0},100:{id:100,desc:"由于军备薄弱，国王下令提高农民的税收来加强军队的建设",options:[{text:"私藏一部分税收",result:[[0,-3,5],[],[]]},{text:"全部上缴",result:[[5,-3,0],[],[]]},{text:"拿自己的钱抵农夫那一部分",result:[[3,0,-5],[],[]]}]},101:{id:101,desc:"国王在外出狩猎时受伤了",options:[{text:"御医！",result:[[0,-3,3],[],[]]},{text:"视而不见"},{text:"我早就说过不要狩猎了",result:[[-3,3,-3],[],[]]}]},102:{id:102,desc:"上个季度的粮食收成提高了，国王准备大摆宴席庆祝",options:[{text:"陛下，实在没有必要",result:[[3,-5,0],[],[]]},{text:"尽情享受",result:[[-3,3,-5],[],[]]},{text:"不出席宴席",result:[[-3,0,-5],[],[]]}]},103:{id:103,desc:"最近瘟疫的情势更加严重了，国王很苦恼",options:[{text:"应该多建立诊所",result:[[0,5,-5],[],[]]},{text:"军火连天，应注重军事储备",result:[[3,-5,0],[],[]]},{text:"民以食为天，应先发展农业",result:[[0,-5,3],[],[]]},{text:"无为而治"}]},105:{id:105,desc:"乌拉！小丑的猜弹珠小游戏！",options:[{text:"这个"},{text:"这个"},{text:"这个"}],eval:"this.changeAttr(null,null,Math.random()<0.33?10:-5);"},106:{id:106,desc:"乌拉！小丑的潘多拉魔盒！",options:[{text:"无视他",result:[[-1,-1,-1],[],[]]},{text:"晃一晃",eval:"this.changeAttr(null,null,Math.floor(Math.random()*5)-2);"},{text:"闻闻是什么味",eval:"this.changeAttr(null,Math.floor(Math.random()*5)-2,null);"},{text:"打开",eval:"this.changeAttr(Math.floor(Math.random()*5)-2,null,null);"}]},107:{id:107,desc:"乌拉！小丑的扮演国王戏剧！",options:[{text:"快把皇冠摘下来！",result:[[3,0,0],[],[]]},{text:"哈哈哈哈哈哈",result:[[0,3,0],[],[]]},{text:"这可真蠢",result:[[0,0,3],[],[]]},{text:"不作评价",result:[[1,1,1],[],[]]}]},110:{id:110,desc:"由于打了败仗，国王提高了农夫的税收，粮食的收成又要降低，这是谁的错呢",options:[{text:"国王",result:[[0,-5,5],[],[]]},{text:"农民",result:[[5,0,-10],[],[]]},{text:"士兵",result:[[-5,3,3],[],[]]}]},111:{id:111,desc:"最近狼群总是在夜晚入侵农夫的庄园，害得农夫每天晚上都要守在庄园内驱赶狼群，但仍然阻止不了损失",options:[{text:"帮忙驱赶狼群",result:[[-5,3,5],[],[]]},{text:"自己想办法吧",result:[[5,-3,-5],[],[]]}]},112:{id:112,desc:"农夫的稻草人说它知道杀害农场主的凶手的谁...",disabled:!0,options:[{text:"好好看守你的农田",result:[[0,0,5],[],[]]},{text:"告诉我",next:113}]},113:{id:113,desc:"法官知道凶手是谁！",disabled:!0,options:[{text:"你在忽悠我吗..."}]},115:{id:115,desc:"你在森林里遇见了正赶路进城的商人，后边跟着他的骡子，扛着两大袋货物，似乎有点躲着你",options:[{text:"检查货物",result:[[0,-2,0],[],[]],next:116},{text:"放他继续赶路",result:[[0,2,0],[],[]]}]},116:{id:116,desc:"你打开包袱，发现货物中有苹果，商人明显很紧张，这是明显的犯法行为...",disabled:!0,options:[{text:"收下保护费，这事就当没发生",result:[[0,-3,5],[],[]]},{text:"销毁苹果，禁止商人七天不得进城",result:[[5,-3,0],[],[]]},{text:"当心别被发现了",result:[[-3,10,0],[],[]]}]},117:{id:117,desc:"商人在诊所门口摆摊，引起了病人的不满，他们想要安静的环境，而商人却总是能引来喧杂吵闹",options:[{text:"把商人赶走",result:[[5,3,-3],[],[]]},{text:"训斥病人",result:[[5,-5,0],[],[]]},{text:"不关我的事",result:[[-3,-3,0],[],[]]}]},118:{id:118,desc:"你听见人们的议论声，说商人经常往来于邻国贸易，他们觉得这是犯法行为，应该把商人处死",options:[{text:"当作没听到"},{text:"这应该不犯法",result:[[-3,3,3],[],[]]},{text:"这应该犯法了",result:[[3,-3,3],[],[]]}]},120:{id:120,desc:"临近战争，所有战士们都需要维修自己的武器，你来到了铁匠铺",options:[{text:"维修",result:[[5,0,-5],[],[]]},{text:"离开"},{text:"给我个面子",result:[[3,-5,0],[],[]]}]},121:{id:121,desc:"铁匠铺里有个特殊的熔炉，是铁匠亲手造的，内部是个大容器，外侧可以放入一些材料，你看着非常感兴趣",options:[{text:"尝试着动动看",result:[[0,-5,0],[],[]],next:122},{text:"还是不要乱动了"}]},122:{id:122,desc:"你把自己的袖剑抽出来放进中间的容器，桌台上有各种材料，放哪一种呢？",disabled:!0,options:[{text:"树枝",eval:"this.changeAttr(Math.floor(Math.random()*11)-5,null,null);"},{text:"石头",result:[[1,0,0],[],[]]},{text:"沙子",eval:"this.changeAttr(Math.random()<0.33?10:-5,null,null);"}]},123:{id:123,desc:"上一次战役中折损了许多士兵，结果幸存的士兵们找上了铁匠，觉得是铁匠打造的装备不够精良",options:[{text:"赶走士兵",result:[[-5,10,0],[],[]]},{text:"声讨铁匠",result:[[5,-10,0],[],[]]},{text:"当作没看见",result:[[0,0,0],[],[]]},{text:"禀告国王",result:[[-5,-5,5],[],[]]}]},125:{id:125,desc:"猎人举起了猎枪，对准了猎物...",options:[{text:"开枪吧",result:[[5,5,0],[],[]]},{text:"再等一等",result:[[0,0,-5],[],[]]},{text:"等下一个猎物吧",result:[[-5,-5,5],[],[]]}]},126:{id:126,desc:"猎人住在森林的小屋里，门口的篝火从来不会熄灭",options:[{text:"一定是魔法",result:[[-5,0,5],[],[]]},{text:"他是恶魔",result:[[5,-5,0],[],[]]},{text:"这没什么",result:[[-3,5,-3],[],[]]}]},127:{id:127,desc:"猎人已骑上了马准备外出打猎",options:[{text:"一同前往",next:128},{text:"暂不同行",result:[[0,5,0],[],[]]}]},128:{id:128,desc:"森林里野兽横行，十分凶险，你准备攻击哪一只？",disabled:!0,options:[{text:"兔子",eval:"if(this.characterData.wrath>30) this.changeAttr(1,1,3); else this.changeAttr(-1,-1,-3);"},{text:"狼",eval:"if(this.characterData.wrath>50) this.changeAttr(2,2,7); else this.changeAttr(-10,-2,-5);"},{text:"狮子",eval:"if(this.characterData.wrath>80) this.changeAttr(5,5,20); else this.changeAttr(-30,-5,-10);"}]},130:{id:130,desc:"医生给了你一把药丸，让你选一颗吃下去",options:[{text:"红药丸"},{text:"蓝药丸"},{text:"白药丸"},{text:"不吃"}]},131:{id:131,desc:"医生的高超艺术得到了公民的认可，他自称不仅白天为病人看病，最近夜里还在研究最新的瘟疫病毒，动物实验体的数据已经完整，现在需要新生婴儿当作实验体",options:[{text:"这简直荒唐！",result:[[0,-5,0],[],[]]},{text:"继续用动物研究",result:[[0,0,-5],[],[]]},{text:"这方面我不太懂",result:[[0,5,0],[],[]]},{text:"让民众贡献新生婴儿",result:[[0,20,0],[],[]]}]},132:{id:132,desc:"医生经常告诫他的病人：苹果是瘟疫之源，我们应该设立法律来严厉禁止这种水果的流通",options:[{text:"苹果明明是非常利于健康的水果",result:[[5,-5,0],[],[]]},{text:"医生说的对",result:[[-5,5,2],[],[]]}]},133:{id:133,desc:"路遇一位乞丐，身负重病，由于负担不起诊所的昂贵医药费，所以一直没有医治",options:[{text:"施舍一点钱",result:[[0,0,-5],[],[]]},{text:"施舍很多钱",result:[[0,5,-10],[],[]]},{text:"离开",result:[[0,0,0],[],[]]}]},135:{id:135,desc:"神父向国王请示，要多建设教堂教化民众",options:[{text:"可以，但没必要",result:[[0,-5,0],[],[]]},{text:"教化非常重要",result:[[0,5,-5],[],[]]}]},136:{id:136,desc:"你来到教堂做祷告，发现在教堂的角落有一间告解室，你觉得最近你做的事情...",options:[{text:"我昨晚不应该出去打猎",result:[[6,-3,-3],[],[]]},{text:"我不应该欠铁匠钱",result:[[-3,6,-3],[],[]]},{text:"我不应该辱骂商人",result:[[-3,-3,6],[],[]]},{text:"我没做错什么"}]},137:{id:137,desc:"教堂的雕像活了，它说你只能保留一项属性不变...",options:[{text:"保留红色属性不变",eval:"this.swapAttr(0);"},{text:"保留紫色属性不变",eval:"this.swapAttr(1);"},{text:"保留蓝色属性不变",eval:"this.swapAttr(2);"}]},140:{id:140,desc:"法官在和商人讨价还价",options:[{text:"商人明码标价，不许砍价",result:[[0,5,-5],[],[]]},{text:"法官工作辛苦，可以理解",result:[[0,-5,5],[],[]]},{text:"正好我需要这东西，我原价买了",result:[[5,-5,-5],[],[]]}]},141:{id:141,desc:"法官称最近犯罪的人数明显增加，需要增加治安管理的力度",options:[{text:"说的没错",result:[[5,0,-5],[],[]]},{text:"完全不需要",result:[[-5,-5,0],[],[]]},{text:"什么？",result:[[5,-5,0],[],[]]}]},142:{id:142,desc:"法官踩坏了农民的作物",options:[{text:"赔钱！",result:[[5,-5,0],[],[]]},{text:"当然是选择原谅他",result:[[0,-5,5],[],[]]},{text:"自己出钱赔偿农民",result:[[0,5,-5],[],[]]}]},200:{id:200,desc:"战火已经绵延到了邻国，谁也不能保证今晚是否可以睡一个好觉，国王下令召集民兵入伍，你被选为百夫长，率领的士兵主要来自于下级阶层的百姓，但也有皇室训练的军人，你感到莫名的压力...",condition:[[50,0,0],[]],options:[{text:"...",result:[[0,0,0],[],[201]]}],once:!0},201:{id:201,desc:"一条巨龙袭击了城池北部的瞭望台，你召集了部下立刻前往，倒下的瞭望台引燃了北部仓库，百姓慌乱而逃，情况不容乐观...",options:[{text:"先疏散百姓",result:[[-5,5,-5],[],[]],next:202},{text:"先攻击巨龙",result:[[5,-5,-5],[],[]],next:203},{text:"先救火",result:[[-5,-5,5],[],[]],next:204}],once:!0},202:{id:202,desc:"百姓被安全撤离，随后你与部下和巨龙展开殊死搏斗，最终击败巨龙。战后一位部下发现巨龙的嘴里有一颗散发着五彩斑斓的黑色的宝玉",options:[{text:"将此物放进背包",result:[[0,0,0],[11],[205]]},{text:"将此物交给国王",result:[[0,0,0],[],[207]]}]},203:{id:203,desc:"你与部下和巨龙展开殊死搏斗，最终击败巨龙。战后你发现巨龙的嘴里有一颗散发着五彩斑斓的黑色的宝玉",options:[{text:"将此物放进背包",result:[[0,0,0],[11],[205]]},{text:"将此物交给国王",result:[[0,0,0],[],[207]]}]},204:{id:204,desc:"火势很快得到控制，随后你与部下和巨龙展开殊死搏斗，最终击败巨龙。战后一位农民发现巨龙的嘴里有一颗散发着五彩斑斓的黑色的宝玉",options:[{text:"将此物放进背包",result:[[0,0,0],[11],[205]]},{text:"将此物交给国王",result:[[0,0,0],[],[207]]}]},205:{id:205,desc:"邻国已被毁灭的消息传遍了城池每个角落，在这紧张的关头，军队的收入并没有明显提高，很多新兵没有自己的武器，你把自己的佩剑上交给了国家，现在自己迫切需要一把新的兵器，于是你找到了铁匠",options:[{text:"我需要一把新的武器...",next:206}],once:!0},206:{id:206,desc:"铁匠看见了你包中的宝玉，大吃一惊，他告诉你这是龙玉，用它锻造出来的武器拥有极强的力量",options:[{text:"给我也整一个！",result:[[10,0,-10],[-11,12],[]]}]},207:{id:207,desc:"国王四处打听宝玉的来历，终于在炼金术士口中得知这是一块龙玉，用它锻造出来的武器拥有极强的力量，国王立刻找到铁匠，让他用这块龙玉打造一把武器",condition:[[70,0,0],[]],options:[{text:"...",next:208}],once:!0},208:{id:208,desc:"铁匠打造出了一把大刀，同样发出五彩斑斓的黑色，国王看到之后非常高兴，将这把刀送给了你",options:[{text:"收下大刀",result:[[10,-5,0],[12],[]]}]},210:{id:210,desc:"猎人告诉你，他得了一种奇怪的病，他有许多把弓箭，惟独其中一把，他一靠近就浑身难受，更别说拿它去打猎，奇怪的是只有他自己受到了影响，他怀疑是被一种特殊的瘟疫所感染，你建议猎人去看医生，猎人却说这不影响他的狩猎",condition:[[0,50,0],[]],options:[{text:"",result:[[0,0,0],[],[211]]}],once:!0},211:{id:211,desc:"某一天你经过诊所的时候，突然想起猎人患上了一种奇怪的病，于是想找到医生询问，只不过很不巧的是医生今天不在诊所...",options:[{text:"去集市找医生",next:212},{text:"去农田找医生",next:214},{text:"去教堂找医生",next:216}],once:!0},212:{id:212,desc:"医生不在集市",options:[{text:"去农田找医生",next:213},{text:"去教堂找医生",next:216}]},213:{id:213,desc:"医生也不在农田",options:[{text:"去教堂找医生",next:216}]},214:{id:214,desc:"医生不在农田",options:[{text:"去集市找医生",next:215},{text:"去教堂找医生",next:216}]},215:{id:215,desc:"医生也不在集市",options:[{text:"去教堂找医生",next:216}]},216:{id:216,desc:"来到教堂，正巧碰到了从教堂走出来的医生，你告诉医生猎人的病情，医生的表情似乎有些不太对劲，过了一会医生给了你一个苹果，让你交给猎人并让他吃下去，你感到非常震惊，毕竟这是法律禁止的水果，为什么会成为治病的良药？",options:[{text:"收下苹果",result:[[0,0,0],[13],[217]]}]},217:{id:217,desc:"小丑又在扮演国王，看到了你，突然冲了过来指着你说你私藏了一颗苹果，你还没来得及解释，小丑立即从你的包中拿走了苹果，然后兴奋地逃走了，扮演国王用的皇冠却掉在了地上",condition:[[0,60,0],[]],options:[{text:"捡起皇冠",result:[[0,0,0],[-13,14],[218]]}],once:!0},218:{id:218,desc:"你来到猎人的小屋，告诉猎人发生的一切，猎人表示医生很有问题，应当提高警惕，并且表示苹果一定是这一切的关键，不过他的病应该治不好了，这把弓就交给你吧",condition:[[0,70,0],[]],options:[{text:"收下弓",result:[[0,0,0],[15],[]]}],once:!0},220:{id:220,desc:"最近在农场发生了一起命案，农场主被杀死在自家的仓库，在这个战火纷飞的年代，似乎并没有太多的人关注这件事，生离死别也成了百姓见怪不怪的一件事情，可你总觉得这起命案似乎不简单，自己也说不上来为什么...",condition:[[0,0,50],[]],options:[{text:"多留意一下有用的线索吧",result:[[0,0,0],[],[221,112]]}],once:!0},221:{id:221,desc:"你拜访了被杀死的农场主的父亲，他已经六十多岁，曾经是这个农场的主人，儿子长大后就把活交给儿子打理。据老父亲描述，前一段日子经常有人，大概五个人左右的样子，半夜来到农场找儿子谈话，似乎还发生了争执，不知道是否与儿子被害有关",condition:[[0,0,60],[]],options:[{text:"那些人是谁？",next:222},{text:"为了什么事情吵架？",next:223}],once:!0},222:{id:222,desc:"老农场主：他们的穿着好像挺华丽的，看起来不像是普通百姓，倒像是官人",options:[{text:"原来如此...",result:[[0,0,0],[],[224]]}]},223:{id:223,desc:"老农场主：似乎是为了农作物的一些事情，后来我问我儿子发生了什么事，他也没有告诉我",options:[{text:"原来如此...",result:[[0,0,0],[],[224]]}]},224:{id:224,desc:"你四处打听最近农场主的行踪，商人告诉你在3天前他见过农场主，然而不能白告诉你，需要一点情报费",condition:[[0,0,70],[]],options:[{text:"付钱",result:[[0,5,-10],[],[]],next:225},{text:"离开",result:[[0,0,0],[],[227]]},{text:"用武力威胁",result:[[5,-10,0],[],[]],next:225}],once:!0},225:{id:225,desc:"商人告诉你在3天前的早上，他在城外运输货物准备进城的时候，看见了独自一人的农场主正往果林的方向走去，当时商人并没有在意这件事",options:[{text:"立即前往果林",next:226}]},226:{id:225,desc:"你迅速来到城外的果林，这里是一片自然形成的树林，没有人专门打理，所以没有人会特意来到这里。你在附近寻找线索，最后在一颗树下发现了一样物品，那是一个小型天平，应该只是用来装饰的",options:[{text:"将天平收入背包",result:[[0,0,0],[16],[]]}]},227:{id:227,desc:"你来到城外的果林，这里是一片自然形成的树林，没有人专门打理，所以没有人会特意来到这里。你在附近寻找农场主的线索，最后在一颗树下发现了一样物品，那是一个小型天平，应该只是用来装饰的，这会不会和农场主的死有关...",options:[{text:"将天平收入背包",result:[[0,0,0],[16],[]]}],once:!0},230:{id:230,desc:"小丑发现了一座地下遗迹，你跟随小丑进入了遗迹，却发现小丑不知何时竟消失不见了，当你正疑惑的时候，前方遗迹深处缓缓出现了三个巨大的身影，随着你们的距离越来越近，他们的样子也越来越清晰，是三匹马，分别载着一名骑士...",condition:[[0,0,0],[12,14,15,16]],options:[{text:"...",next:231}],once:!0},231:{id:231,desc:"走在最前面的是一匹红色的马",options:[{text:"交出大刀",result:[[0,0,0],[-12],[]],next:232}]},232:{id:232,desc:"紧跟其后的是一匹白色的马",options:[{text:"交出弓和皇冠",result:[[0,0,0],[-14,-15],[]],next:233}]},233:{id:233,desc:"走在最后的是一匹黑色的马",options:[{text:"交出天平",result:[[0,0,0],[-16],[]],next:234}]},234:{id:234,desc:"三位骑士拿起了你给他们的物品，马呼啸着狂奔起来，冲出了地下遗迹",options:[{text:"往遗迹深处走去",next:235}]},235:{id:235,desc:"在遗迹最深处，有一个宽敞的圆形房间，分别摆着三口棺材，都已经被打开了，你猜测就是刚才的三名骑士。在棺材后方有一张点燃着蜡烛的桌台，桌上放着一本书，已积了厚厚一层灰尘，吹开灰尘...",options:[{text:"这是一本《启示录》",next:236}]},236:{id:236,desc:"我看见羔羊揭开七印中第一印的时候，就听见四活物中的一个活物，声音如雷，说，你来。\n我就观看，见有一匹白马，骑在马上的拿着弓。并有冠冕赐给他。他便出来，胜了又要胜。\n揭开第二印的时候，我听见第二个活物说，你来。\n就另有一匹马出来，是红的。有权柄给了那骑马的，可以从地上夺去太平，使人彼此相杀。又有一把大刀赐给他。\n揭开第三印的时候，我听见第三个活物说，你来。\n我就观看，见有一匹黑马。骑在马上的手里拿着天平。我听见在四活物中，似乎有声音说，一钱银子买一升麦子，一钱银子买三升大麦。油和酒不可糟蹋。\n揭开第四印的时候，我听见第四个活物说，你来。\n我就观看，见有一匹惨绿色马。骑在马上的，名字叫做“死亡”。阴府也随着他。\n有权柄赐给他们，可以用刀剑，饥荒，瘟疫，野兽，杀害地上四分之一的人",options:[{text:"战争...瘟疫...饥荒...",next:237}]},237:{id:237,desc:"...",options:[{text:"可是，第四匹马在哪里...",next:238}]},238:{id:237,desc:"恭喜通关",options:[{text:"重新开始"}],ending:!0},666:{id:666,desc:"",options:[{text:"...",next:231}]},1311:{id:999,desc:"",options:[{text:"",result:[[0,0,0],[],[]]}]},404:{id:404,desc:"前方是一座城堡废墟，看起来已经废弃了很久，杂草丛生，丝毫没有人类活动的痕迹，这里曾经是幸运三杠的地盘，不知道发生了什么，变成如此一番景象",options:[{text:"走近看看",next:405},{text:"就此离开"}],once:!0},405:{id:405,desc:"翻开挡在路上的石头，前面似乎是主殿的残骸，关于这个幸运三杠，民间流传着很多传说，有人说他是恶魔变的，有人说他的城堡里藏着很多宝藏",options:[{text:"试着找找看",result:[[-10,0,0],[404],[]],next:406},{text:"就此离开"}]},406:{id:406,desc:"你在废墟当中发现一把乌金色的长杆铁器，比一般的铁器都要沉，最神奇的是它一直在发热...",options:[{text:"离开",result:[[],[],[407]]}]},407:{id:407,desc:"路过城外的时候，你偶然发现一个商人的货物里有一样东西与自己包里那把乌金长杵非常相像，只不过这个是墨绿色的。你上前去仔细观察，这根墨绿色的长杵也同样散发着热量\n商人见你对此物如此感兴趣，便问：那玩意就是根会发热的铁棒，顶多算是个奇物，没有什么实际用处，你要是寻思着有趣我就便宜卖你",options:[{text:"这东西你是从哪里搞来的",result:[[0,-5,0],[],[]],next:408},{text:"我有一个和这类似的东西",result:[[0,5,0],[],[]],next:410},{text:"我就是看看"}],once:!0},408:{id:408,desc:"商人看了你一眼，告诉你这东西是他在很久之前从其他商队那里换来的，如果感兴趣他可以卖给你，但出价很高",options:[{text:"买",result:[[0,5,-20],[405],[]],next:409},{text:"不买"}]},409:{id:409,desc:"你从商人口中了解到，这东西产自锟铻山，是上古时期的兵器...",options:[{text:"...",result:[[],[],[412]]}]},410:{id:410,desc:"你把包里的乌金长杵拿出来，商人看到有一点惊讶，但立马掩饰住了情绪，开始仔细地观察起来，过了一会商人想花钱收了你的这个乌金的长棍",options:[{text:"看他这么来劲，就卖给他吧",result:[[0,5,20],[-404],[]],next:411},{text:"不卖，转身离去"}]},411:{id:411,desc:"商人收下乌金长杵后，便匆匆收拾货物离开了",options:[{text:"..."}]},412:{id:412,desc:"你突然感觉自己的后背一热，慌忙之下检查自己的背包，发现是那两根神秘的杵已经开始发烫，于是你拿起两把长杵，口中喊道：",options:[{text:"白帝圣剑！御剑跟着我",result:[[0,0,10],[],[]],next:413},{text:"德玛西亚！",result:[[10,0,0],[],[]],next:413},{text:"烫烫烫！",next:414},{text:"安胡拉阿克巴！",result:[[0,10,0],[],[]],next:413}],result:[[],[-404,-405],[]],once:!0},413:{id:413,desc:"你立马丢掉了它们，只见乌金色和墨绿色的杵掉落在地上后，熔化成了一滩黑水，还冒着难闻的气体，你捂着鼻子立马离开了此地...",options:[{text:"..."}]},414:{id:414,desc:"这时，你的背后不知何时出现了一个戴着黑色斗篷的人，看不清他的面容，他接过了你手中的两根发烫的杵，并告诉你这东西叫锟斤拷，是他遗失的东西\n为了感谢你帮他找回了两根锟斤拷，他决定帮助你，说完他就消失了",options:[{text:"这人难道就是..."}],result:[[],[],[[420,424]]],eval:'this.notify("杠三杠奖励事件已加入事件池");'},420:{id:420,desc:"经过一条河的时候，河里突然出现了一个河神，手里拿着一把金斧子和一把银斧子，问你哪一把是你的斧子",options:[{text:"金斧子",result:[[10,0,0],[],[]]},{text:"银斧子",result:[[0,0,10],[],[]]},{text:"都不是我的",result:[[0,10,0],[],[]]},{text:"我全都要",result:[[10,0,10],[],[]]}],once:!0},421:{id:421,desc:"你在森林里巡逻的时候，突然发现一头微微发着蓝色的光的鹿从灌木丛中窜出来，看了你一眼，马上跑走了，你立马追上去，却发现它已经不见了...",options:[{text:"刚才那是...",result:[[10,10,10],[],[]]}],once:!0},422:{id:422,desc:"小丑突然向你冲过来，傻笑着塞给你了一把钱，然后立马跑开了",options:[{text:"...",result:[[0,0,15],[],[]]}],once:!0},423:{id:423,desc:"天上出现了三条彩虹，相互交叉围成了一个类似三角形的形状，周围的人们都在纷纷议论这一奇像",options:[{text:"这会是一种征兆吗...",result:[[10,10,0],[],[]]}],once:!0},424:{id:424,desc:"森林里有三种蘑菇，红色的、紫色的和蓝色的，你要吃哪个？",options:[{text:"红色",result:[[5,0,0],[],[]]},{text:"紫色",result:[[0,5,0],[],[]]},{text:"蓝色",result:[[0,0,5],[],[]]}],once:!0},10086:{id:10086,desc:"\n          wrath | 愤怒 | war    | 战争 | 红马 | 大刀\n          envy  | 嫉妒 | plague | 瘟疫 | 白马 | 弓和皇冠\n          greed | 贪婪 | famine | 饥荒 | 黑马 | 天平\n          ???   | ？？ | death  | 死亡 | 灰绿 | 镰刀？\n          \n          战争线  国王 铁匠（大刀） 小丑？\n          瘟疫线  神父 医生 猎人（弓） 小丑？\n          饥荒线  法官（天平） 农民 商人 小丑？\n          剩余NPC：女巫 先知 炼金术士？\n          ",disabled:!0,condition:[[10,20,30],[1,233]],options:[{text:"这次是你赢了！",result:[[0,0,0],[],[]],eval:"",next:10086}],result:[[0,0,0],[],[]],eval:"",once:!0}}}}}},qhb1:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__=__webpack_require__("hRKE"),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray__=__webpack_require__("IHPB"),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray__),__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator__=__webpack_require__("HzJ8"),__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator__),__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise__=__webpack_require__("rVsN"),__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise__),__WEBPACK_IMPORTED_MODULE_4__event__=__webpack_require__("qB0K"),__WEBPACK_IMPORTED_MODULE_5__item__=__webpack_require__("DC8r");__webpack_exports__.a={name:"tripleDisaster",data:function(){return{height:0,UIController:"menu",characterData:{wrath:0,envy:0,greed:0,item:[]},events:[],event:null,displayItemId:0,notifyPromise:__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a.resolve()}},mixins:[__WEBPACK_IMPORTED_MODULE_4__event__.a,__WEBPACK_IMPORTED_MODULE_5__item__.a],mounted:function(){window.vue=this,this.height=window.innerHeight},methods:{message:function(t){this.$message({message:t,type:"success",duration:2e3,showClose:!1})},notify:function(t){var e=this;this.notifyPromise=this.notifyPromise.then(this.$nextTick).then(function(){e.$notify({message:t,showClose:!1,duration:1500})})},initGame:function(){this.UIController="normal",this.setAttr(30,30,30),this.characterData.item=[],this.event=null,this.events=[],this.displayItemId=0,this.addEvents(0),this.draw()},draw:function(){var t=this.events.length,e=void 0,n=this.event;do{e=Math.floor(Math.random()*t)}while(!this.judgeCondition(this.allEvents[this.events[e]].condition)||this.events[e]===n);this.event=this.events[e]},chooseOption:function chooseOption(id,index){if(this.allEvents[id].ending)this.initGame();else if(this.handleResult(this.allEvents[id].options[index].result),this.handleResult(this.allEvents[id].result),eval(this.allEvents[id].options[index].eval),eval(this.allEvents[id].eval),this.characterData.wrath<=0)this.event=2;else if(this.characterData.envy<=0)this.event=3;else if(this.characterData.greed<=0)this.event=4;else if(this.characterData.wrath>100)this.event=5;else if(this.characterData.envy>100)this.event=6;else if(this.characterData.greed>100)this.event=7;else{if(this.allEvents[id].once){var _index=this.events.indexOf(this.event);_index>-1&&this.events.splice(_index,1)}this.allEvents[id].options[index].next?this.event=this.allEvents[id].options[index].next:this.draw()}},judgeCondition:function(t){var e=!0;if(t&&2===t.length){var n=t[0],i=t[1];if(3!==n.length)return!1;e=e&&this.characterData.wrath>=n[0]&&this.characterData.envy>=n[1]&&this.characterData.greed>=n[2];var s=!0,r=!1,o=void 0;try{for(var a,c=__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator___default()(i);!(s=(a=c.next()).done);s=!0){var l=a.value;e=e&&this.characterData.item.indexOf(l)>-1}}catch(t){r=!0,o=t}finally{try{!s&&c.return&&c.return()}finally{if(r)throw o}}}return e},handleResult:function(t){if(t&&3===t.length){var e=t[0],n=t[1],i=t[2];3===e.length&&(this.characterData.wrath+=e[0],this.characterData.envy+=e[1],this.characterData.greed+=e[2]);var s=!0,r=!1,o=void 0;try{for(var a,c=__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator___default()(n);!(s=(a=c.next()).done);s=!0){var l=a.value;l>0?this.gainItem(l):this.dropItem(-l)}}catch(t){r=!0,o=t}finally{try{!s&&c.return&&c.return()}finally{if(r)throw o}}this.addEvents.apply(this,__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default()(i))}},setAttr:function(t,e,n){null!==t&&(this.characterData.wrath=t),null!==e&&(this.characterData.envy=e),null!==n&&(this.characterData.greed=n)},changeAttr:function(t,e,n){null!==t&&(this.characterData.wrath+=t),null!==e&&(this.characterData.envy+=e),null!==n&&(this.characterData.greed+=n)},swapAttr:function(t){var e=void 0;switch(t){case 0:e=this.characterData.envy,this.characterData.envy=this.characterData.greed,this.characterData.greed=e;break;case 1:e=this.characterData.wrath,this.characterData.wrath=this.characterData.greed,this.characterData.greed=e;break;case 2:e=this.characterData.wrath,this.characterData.wrath=this.characterData.envy,this.characterData.envy=e}},gainItem:function(t){-1===this.characterData.item.indexOf(t)&&this.allItems[t]&&(this.characterData.item.push(t),this.notify("获得道具："+this.allItems[t].name))},dropItem:function(t){var e=this.characterData.item.indexOf(t);e>-1&&(this.characterData.item.splice(e,1),this.notify("丢失道具："+this.allItems[t].name))},addEvents:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];var i=!0,s=!1,r=void 0;try{for(var o,a=__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator___default()(e);!(i=(o=a.next()).done);i=!0){var c=o.value;if("number"==typeof c)this.addOneEvent(c);else if("object"===(void 0===c?"undefined":__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(c)))if(1===c.length)this.addOneEvent(c[0]);else if(2===c.length)for(var l=c[0],u=c[1],d=l;d<=u;d++)this.addOneEvent(d)}}catch(t){s=!0,r=t}finally{try{!i&&a.return&&a.return()}finally{if(s)throw r}}},addOneEvent:function(t){this.allEvents[t]&&!this.allEvents[t].disabled&&-1===this.events.indexOf(t)&&this.events.push(t)}}}},rVsN:function(t,e,n){t.exports={default:n("kYJG"),__esModule:!0}},tCZj:function(t,e,n){"use strict";var i=n("TYpQ");t.exports.f=function(t){return new function(t){var e,n;this.promise=new t(function(t,i){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=i}),this.resolve=i(e),this.reject=i(n)}(t)}},uqAR:function(t,e,n){"use strict";var i=n("2AZ7"),s=n("/KQr"),r=n("Dmm0"),o=n("ilqx"),a=n("hjV4");i(i.P+i.R,"Promise",{finally:function(t){var e=o(this,s.Promise||r.Promise),n="function"==typeof t;return this.then(n?function(n){return a(e,t()).then(function(){return n})}:t,n?function(n){return a(e,t()).then(function(){throw n})}:t)}})},xcup:function(t,e,n){var i=n("Dmm0"),s=n("Ho6t").set,r=i.MutationObserver||i.WebKitMutationObserver,o=i.process,a=i.Promise,c="process"==n("402Z")(o);t.exports=function(){var t,e,n,l=function(){var i,s;for(c&&(i=o.domain)&&i.exit();t;){s=t.fn,t=t.next;try{s()}catch(i){throw t?n():e=void 0,i}}e=void 0,i&&i.enter()};if(c)n=function(){o.nextTick(l)};else if(!r||i.navigator&&i.navigator.standalone)if(a&&a.resolve){var u=a.resolve(void 0);n=function(){u.then(l)}}else n=function(){s.call(i,l)};else{var d=!0,_=document.createTextNode("");new r(l).observe(_,{characterData:!0}),n=function(){_.data=d=!d}}return function(i){var s={fn:i,next:void 0};e&&(e.next=s),t||(t=s,n()),e=s}}},z557:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABT0lEQVR42u2awQ3DIAxF2cwbsYI3ySiM0BG6SppDIlVRpRQIBOz3JUs59NA8vo0xCQEhhHxLttA9lj3Oz7r/zh2UtMWaEQqU60gW3aSVUEy7qQUcM5BiQzhHRJxj0Ek94UwHKT4A5wjBOdctgFk46Ucn/bKSalIB5eoYoRZSreQlYsO6NpyLepypdFZA0nF1/61Jy6zpVdv1LpYBpY6pPFSK9VrVOGsN6gEod5eUGVOsZFWlYIccrptuBai0Mx+uB5IGtq85tgx5YNUbV1WC0ZGH3vSnUzA8D/q+48q9y5IKONOOXXvUHAWOYzg1cyQXV9EajI1Vn54jrcHRRwxCzbk3vVzByQH0Ds6+Deo9RwKQ9xRTHISDAESKAWjcTlqCYynuKYcEnFO6lY5qEUIIIYTog+ikgQMkTvP3uYeBGYAARA1iF6MPopNGCCGEnOoDHa1Qj6p3iQwAAAAASUVORK5CYII="}});
//# sourceMappingURL=1.07ea557a6af4e78ccb2e.js.map