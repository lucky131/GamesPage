webpackJsonp([2],{"1Hpz":function(t,n,i){var r=i("HmiX"),e=i("aThA")("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[e]===t)}},"4Wv9":function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=i("Nj/u"),e={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"wrap"},[t._l(t.results,function(n,r){return i("div",{key:r,staticClass:"result"},[t._v(t._s(n.number.join(""))+"  "+t._s(n.result))])}),t._v(" "),t.isWin?i("div",{staticClass:"win"},[t._v("Congratulations! Step: "+t._s(t.step)+" "),i("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.restart()}}},[t._v("Restart")])],1):i("div",{staticClass:"ope"},[t._l(t.config.length,function(n){return i("el-input-number",{key:n,staticClass:"input",attrs:{controls:!1,min:0,max:9,step:1},model:{value:t.inputs[n-1],callback:function(i){t.$set(t.inputs,n-1,i)},expression:"inputs[n-1]"}})}),t._v(" "),i("el-button",{attrs:{type:"primary",disabled:t.isBtnDisabled()},on:{click:function(n){return t.btn()}}},[t._v("确定")])],2),t._v(" "),i("el-dialog",{attrs:{title:"新游戏",center:"",visible:t.isDialogShow,width:"320px","show-close":t.falseData,"close-on-click-modal":t.falseData,"close-on-press-escape":t.falseData},on:{"update:visible":function(n){t.isDialogShow=n}}},[i("el-form",{attrs:{"label-width":"60px"}},[i("el-form-item",{attrs:{label:"位数"}},[i("el-input-number",{attrs:{min:2,max:6,step:1},model:{value:t.config.length,callback:function(n){t.$set(t.config,"length",n)},expression:"config.length"}})],1)],1),t._v(" "),i("span",{attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.start()}}},[t._v("开始")])],1)],1)],2)},staticRenderFns:[]};var o=function(t){i("K1R4")},s=i("C7Lr")(r.a,e,!1,o,"data-v-1457dfae",null);n.default=s.exports},"4jXm":function(t,n,i){var r=i("bnAR");t.exports=function(t,n,i){for(var e in n)i&&t[e]?t[e]=n[e]:r(t,e,n[e]);return t}},"9/Qa":function(t,n,i){"use strict";var r=i("RDEF"),e=i("ApYu");t.exports=i("JJ0T")("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return r.def(e(this,"Set"),t=0===t?0:t,t)}},r)},"9Z3l":function(t,n,i){var r=i("402Z"),e=i("aThA")("toStringTag"),o="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,i,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(i=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),e))?i:o?r(n):"Object"==(s=r(n))&&"function"==typeof n.callee?"Arguments":s}},ApYu:function(t,n,i){var r=i("yLZD");t.exports=function(t,n){if(!r(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},Ehfi:function(t,n,i){var r=i("9Z3l"),e=i("O3dD");t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return e(this)}}},HBId:function(t,n,i){var r=i("I1yF"),e=i("IlC8"),o=i("A2+p"),s=i("6f6n"),u=i("HmC0");t.exports=function(t,n){var i=1==t,a=2==t,c=3==t,f=4==t,l=6==t,p=5==t||l,h=n||u;return function(n,u,v){for(var d,g,_=o(n),y=e(_),m=r(u,v,3),b=s(y.length),w=0,x=i?h(n,b):a?h(n,0):void 0;b>w;w++)if((p||w in y)&&(g=m(d=y[w],w,_),t))if(i)x[w]=g;else if(g)switch(t){case 3:return!0;case 5:return d;case 6:return w;case 2:x.push(d)}else if(f)return!1;return l?-1:c||f?f:x}}},Hgu4:function(t,n,i){var r=i("y4M0");t.exports=function(t,n,i,e){try{return e?n(r(i)[0],i[1]):n(i)}catch(n){var o=t.return;throw void 0!==o&&r(o.call(t)),n}}},HmC0:function(t,n,i){var r=i("fDYZ");t.exports=function(t,n){return new(r(t))(n)}},JJ0T:function(t,n,i){"use strict";var r=i("Dmm0"),e=i("2AZ7"),o=i("op0e"),s=i("D86D"),u=i("bnAR"),a=i("4jXm"),c=i("k15D"),f=i("lYcF"),l=i("yLZD"),p=i("AhUs"),h=i("0hE2").f,v=i("HBId")(0),d=i("2gJQ");t.exports=function(t,n,i,g,_,y){var m=r[t],b=m,w=_?"set":"add",x=b&&b.prototype,D={};return d&&"function"==typeof b&&(y||x.forEach&&!s(function(){(new b).entries().next()}))?(b=n(function(n,i){f(n,b,t,"_c"),n._c=new m,void 0!=i&&c(i,_,n[w],n)}),v("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(t){var n="add"==t||"set"==t;t in x&&(!y||"clear"!=t)&&u(b.prototype,t,function(i,r){if(f(this,b,t),!n&&y&&!l(i))return"get"==t&&void 0;var e=this._c[t](0===i?0:i,r);return n?this:e})}),y||h(b.prototype,"size",{get:function(){return this._c.size}})):(b=g.getConstructor(n,t,_,w),a(b.prototype,i),o.NEED=!0),p(b,t),D[t]=b,e(e.G+e.W+e.F,D),y||g.setStrong(b,t,_),b}},K1R4:function(t,n){},K8WX:function(t,n,i){"use strict";var r=i("Dmm0"),e=i("/KQr"),o=i("0hE2"),s=i("2gJQ"),u=i("aThA")("species");t.exports=function(t){var n="function"==typeof e[t]?e[t]:r[t];s&&n&&!n[u]&&o.f(n,u,{configurable:!0,get:function(){return this}})}},"KYM/":function(t,n,i){i("gXp2")("Set")},"Nj/u":function(t,n,i){"use strict";(function(t){var r=i("zsLt"),e=i.n(r);n.a={name:"digital",data:function(){return{falseData:!1,isDialogShow:!0,config:{length:4},results:[],inputs:[],answer:[],step:0,isWin:!1}},mounted:function(){var n=this;t(document).keydown(function(t){13!=t.keyCode&&108!=t.keyCode||n.isBtnDisabled()||n.btn()})},methods:{start:function(){var n=this;this.isDialogShow=!1,this.results=[],this.inputs=new Array(this.config.length),this.step=0,this.isWin=!1,this.answer=[];for(var i=0;i<this.config.length;i++){var r=void 0;do{r=Math.floor(10*Math.random())}while(this.answer.includes(r));this.answer.push(r)}t(".input").on("input propertychange",function(i){if(i.originalEvent.data){var r=t(this).index();t(this).parent().children(".input").eq(r).find("input").blur(),r<n.config.length-1&&t(this).parent().children(".input").eq(r+1).find("input").focus()}}),t(".input").eq(0).find("input").focus()},handleInput:function(){console.log(1111)},isBtnDisabled:function(){for(var t=0;t<this.inputs.length;t++)if(void 0===this.inputs[t])return!0;return new e.a(this.inputs).size!==this.config.length},btn:function(){var n={};n.number=this.inputs;for(var i,r=0,e=0,o=0;o<n.number.length;o++)n.number[o]===this.answer[o]&&r++,this.answer.includes(n.number[o])&&e++;i=e-r,n.result=r+"A"+i+"B",this.results.push(n),this.inputs=new Array(this.config.length),this.step++,r===this.config.length?this.isWin=!0:t(".input").eq(0).find("input").focus()},restart:function(){this.isDialogShow=!0}}}}).call(n,i("5u2O"))},O3dD:function(t,n,i){var r=i("k15D");t.exports=function(t,n){var i=[];return r(t,!1,i.push,i,n),i}},PMUE:function(t,n,i){i("zjBV"),i("rYUz"),i("MKOc"),i("9/Qa"),i("pWpJ"),i("Xxbk"),i("KYM/"),t.exports=i("/KQr").Set},RDEF:function(t,n,i){"use strict";var r=i("0hE2").f,e=i("+Vp4"),o=i("4jXm"),s=i("I1yF"),u=i("lYcF"),a=i("k15D"),c=i("39IF"),f=i("t9US"),l=i("K8WX"),p=i("2gJQ"),h=i("op0e").fastKey,v=i("ApYu"),d=p?"_s":"size",g=function(t,n){var i,r=h(n);if("F"!==r)return t._i[r];for(i=t._f;i;i=i.n)if(i.k==n)return i};t.exports={getConstructor:function(t,n,i,c){var f=t(function(t,r){u(t,f,n,"_i"),t._t=n,t._i=e(null),t._f=void 0,t._l=void 0,t[d]=0,void 0!=r&&a(r,i,t[c],t)});return o(f.prototype,{clear:function(){for(var t=v(this,n),i=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete i[r.i];t._f=t._l=void 0,t[d]=0},delete:function(t){var i=v(this,n),r=g(i,t);if(r){var e=r.n,o=r.p;delete i._i[r.i],r.r=!0,o&&(o.n=e),e&&(e.p=o),i._f==r&&(i._f=e),i._l==r&&(i._l=o),i[d]--}return!!r},forEach:function(t){v(this,n);for(var i,r=s(t,arguments.length>1?arguments[1]:void 0,3);i=i?i.n:this._f;)for(r(i.v,i.k,this);i&&i.r;)i=i.p},has:function(t){return!!g(v(this,n),t)}}),p&&r(f.prototype,"size",{get:function(){return v(this,n)[d]}}),f},def:function(t,n,i){var r,e,o=g(t,n);return o?o.v=i:(t._l=o={i:e=h(n,!0),k:n,v:i,p:r=t._l,n:void 0,r:!1},t._f||(t._f=o),r&&(r.n=o),t[d]++,"F"!==e&&(t._i[e]=o)),t},getEntry:g,setStrong:function(t,n,i){c(t,n,function(t,i){this._t=v(t,n),this._k=i,this._l=void 0},function(){for(var t=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?f(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(this._t=void 0,f(1))},i?"entries":"values",!i,!0),l(n)}}},T1PD:function(t,n,i){"use strict";var r=i("2AZ7");t.exports=function(t){r(r.S,t,{of:function(){for(var t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return new this(n)}})}},Xxbk:function(t,n,i){i("T1PD")("Set")},fDYZ:function(t,n,i){var r=i("yLZD"),e=i("aLOx"),o=i("aThA")("species");t.exports=function(t){var n;return e(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!e(n.prototype)||(n=void 0),r(n)&&null===(n=n[o])&&(n=void 0)),void 0===n?Array:n}},gXp2:function(t,n,i){"use strict";var r=i("2AZ7"),e=i("TYpQ"),o=i("I1yF"),s=i("k15D");t.exports=function(t){r(r.S,t,{from:function(t){var n,i,r,u,a=arguments[1];return e(this),(n=void 0!==a)&&e(a),void 0==t?new this:(i=[],n?(r=0,u=o(a,arguments[2],2),s(t,!1,function(t){i.push(u(t,r++))})):s(t,!1,i.push,i),new this(i))}})}},jdnV:function(t,n,i){var r=i("9Z3l"),e=i("aThA")("iterator"),o=i("HmiX");t.exports=i("/KQr").getIteratorMethod=function(t){if(void 0!=t)return t[e]||t["@@iterator"]||o[r(t)]}},k15D:function(t,n,i){var r=i("I1yF"),e=i("Hgu4"),o=i("1Hpz"),s=i("y4M0"),u=i("6f6n"),a=i("jdnV"),c={},f={};(n=t.exports=function(t,n,i,l,p){var h,v,d,g,_=p?function(){return t}:a(t),y=r(i,l,n?2:1),m=0;if("function"!=typeof _)throw TypeError(t+" is not iterable!");if(o(_)){for(h=u(t.length);h>m;m++)if((g=n?y(s(v=t[m])[0],v[1]):y(t[m]))===c||g===f)return g}else for(d=_.call(t);!(v=d.next()).done;)if((g=e(d,y,v.value,n))===c||g===f)return g}).BREAK=c,n.RETURN=f},lYcF:function(t,n){t.exports=function(t,n,i,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(i+": incorrect invocation!");return t}},pWpJ:function(t,n,i){var r=i("2AZ7");r(r.P+r.R,"Set",{toJSON:i("Ehfi")("Set")})},zsLt:function(t,n,i){t.exports={default:i("PMUE"),__esModule:!0}}});
//# sourceMappingURL=2.63c02dcb1f9ca31aa24e.js.map