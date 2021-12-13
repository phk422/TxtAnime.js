(()=>{"use strict";var t,e,a,o,n,r,i,s,l,p,c,y,f,d,u={169:(t,e,a)=>{a.d(e,{Z:()=>s});var o=a(81),n=a.n(o),r=a(645),i=a.n(r)()(n());i.push([t.id,":root{--easeOutExpo: cubic-bezier(0.16, 1, 0.3, 1);--easeOutQuad: cubic-bezier(0.5, 1, 0.89, 1);--easeOutQuart: cubic-bezier(0.25, 1, 0.5, 1);--easeOutBack: cubic-bezier(0.34, 1.56, 0.64, 1);--easeOutCirc: cubic-bezier(0, 0.55, 0.45, 1);--easeOutOne: cubic-bezier(0.075, 0.82, 0.165, 1);--easeOutTwo: cubic-bezier(0.165, 0.84, 0.44, 1);--easeOutThree: cubic-bezier(0.09, 0.78, 0, 1.28)}.tx-an-1{display:inline-block;animation:tx-an-1 var(--easeOutOne) forwards;opacity:0}@keyframes tx-an-1{0%{opacity:0;transform:translateY(150px) translateX(150px) rotate(200deg)}100%{opacity:1;transform:translateY(0) translateX(0) rotateZ(0)}}.tx-an-2{display:inline-block;animation:tx-an-2 var(--easeOutOne) forwards;opacity:0}@keyframes tx-an-2{0%{opacity:0;transform:translateY(-200px) translateX(150px) rotate(-280deg)}100%{opacity:1;transform:translateY(0) translateX(0) rotate(0)}}.tx-an-3{display:inline-block;animation:tx-an-3 var(--easeOutOne) forwards;opacity:0}@keyframes tx-an-3{0%{opacity:0;transform:translateX(100px) scale(10);filter:blur(5)}100%{opacity:1;transform:translateX(0) scale(1);filter:blur(0)}}.tx-an-4{display:inline-block;animation:tx-an-4 var(--easeOutOne) forwards;opacity:0}@keyframes tx-an-4{0%{opacity:0;transform:translateX(100px)}100%{opacity:1;transform:translateX(0px)}}.tx-an-5{display:inline-block;animation:tx-an-5 var(--easeOutOne) forwards;opacity:0}@keyframes tx-an-5{0%{opacity:0;transform:translateY(100px)}100%{opacity:1;transform:translateY(0px)}}.tx-an-6{display:inline-block;animation:tx-an-6 var(--easeOutBack) forwards;opacity:0}@keyframes tx-an-6{0%{opacity:0;transform:scale(0)}100%{opacity:1;transform:scale(1)}}.tx-an-7{display:inline-block;animation:tx-an-7 var(--easeOutCirc) forwards;opacity:0}@keyframes tx-an-7{0%{opacity:0}100%{opacity:1}}.tx-an-8{display:inline-block;animation:tx-an-8 var(--easeOutQuart) forwards;opacity:0}@keyframes tx-an-8{0%{filter:blur(5px);opacity:0}100%{filter:blur(0px);opacity:1}}.tx-an-9{display:inline-block;animation:tx-an-9 var(--easeOutQuart) forwards;opacity:0}@keyframes tx-an-9{0%{transform:scale(1.3);opacity:0}100%{transform:scale(1);opacity:1}}.tx-an-10{display:inline-block;animation:tx-an-10 var(--easeOutCirc) forwards;opacity:0}@keyframes tx-an-10{0%{opacity:0;transform:translateY(100px)}50%{opacity:1;filter:blur(0px);transform:translateY(0px)}100%{opacity:0;filter:blur(1px);transform:translateY(-100px) scale(0.8)}}.scale-1{display:inline-block;animation:scale-1 var(--easeOutThree) forwards;opacity:0;transform-origin:center}@keyframes scale-1{0%{transform:scale(0)}50%{filter:blur(0px);opacity:1;transform:scale(1)}100%{filter:blur(5px);opacity:0;transform:scale(2)}}.scale-2{display:inline-block;animation:scale-2 var(--easeOutThree) forwards;opacity:0;transform-origin:center}@keyframes scale-2{0%{filter:blur(5px);transform:scale(5)}50%{filter:blur(0px);opacity:1;transform:scale(1.3)}100%{opacity:0;transform:scale(0)}}.parent-overlay-1{display:inline-block;position:relative;overflow:hidden;padding:0 10px;border-radius:3px}.parent-overlay-1 span{display:block;position:relative;z-index:2;mix-blend-mode:hard-light;animation:1s spn-overlay-1 var(--easeOutOne) both;opacity:0}@keyframes spn-overlay-1{0%{opacity:0;transform:translateX(-100%)}100%{opacity:1;transform:translateX(0%)}}.parent-overlay-1 span.out{animation:0.8s spn-overlay-out-1 var(--easeOutQuart) both}@keyframes spn-overlay-out-1{0%{opacity:1;transform:translateX(0%)}100%{opacity:0;transform:translateX(100%)}}.parent-overlay-1 .overlay-1{position:absolute;top:0;left:100%;width:100%;height:100%;z-index:0;animation:1s overlay-1 var(--easeOutOne) forwards}@keyframes overlay-1{100%{left:-50%}}.parent-overlay-1 .overlay-1.out{animation:0.8s overlay-out-1 var(--easeOutQuart) forwards}@keyframes overlay-out-1{0%{opacity:1;left:-50%}100%{opacity:0;left:-100%}}.parent-overlay-2{display:inline-block;position:relative;overflow:hidden;border-radius:3px}.parent-overlay-2 span{display:block;position:relative;z-index:2;mix-blend-mode:hard-light;animation:1s spn-overlay-2 var(--easeOutOne) both;opacity:0}@keyframes spn-overlay-2{0%{opacity:0;transform:translateY(-100%)}100%{opacity:1;transform:translateY(0%)}}.parent-overlay-2 span.out{animation:0.8s spn-overlay-out-2 var(--easeOutQuart) both}@keyframes spn-overlay-out-2{0%{opacity:1;transform:translateY(0%)}100%{opacity:0;transform:translateY(100%)}}.parent-overlay-2 .overlay-2{position:absolute;top:100%;left:0%;width:100%;height:100%;z-index:0;animation:1s overlay-2 var(--easeOutCirc) forwards}@keyframes overlay-2{100%{top:-100%}}.parent-overlay-2 .overlay-2.out{animation:0.8s overlay-out-2 var(--easeOutQuart) forwards}@keyframes overlay-out-2{100%{opacity:0;left:-100%}}.parent-overlay-3{display:inline-block;position:relative;overflow:hidden;padding:0 10px}.parent-overlay-3 span{display:block;position:relative;z-index:1;animation:2s spn-overlay-3 var(--easeOutTwo) both;animation-delay:.7s;opacity:0}@keyframes spn-overlay-3{0%{opacity:0;transform:translateX(50px)}100%{opacity:1;transform:translateX(0)}}.parent-overlay-3 span.out{animation:1s spn-overlay-out-3 var(--easeOutOne) both;animation-delay:.1s}@keyframes spn-overlay-out-3{0%{opacity:1;transform:translateX(0px)}100%{opacity:0;transform:translateX(100%)}}.parent-overlay-3 .overlay-3{position:absolute;top:0;left:0;height:100%;z-index:2;animation:1.2s overlay-3 var(--easeOutCirc) forwards}@keyframes overlay-3{0%{left:0;width:0%}50%{width:50%;left:50%}100%{left:100%;width:100%}}.parent-overlay-3 .overlay-3.out{animation:1.4s overlay-out-3 var(--easeOutQuart) forwards}@keyframes overlay-out-3{0%{left:100%;width:100%}50%{width:50%;left:50%}100%{left:0%;width:0%}}.typed-1{position:relative}.typed-1::after{content:'|';animation:.5s typed-1 ease-in-out infinite}@keyframes typed-1{0%{opacity:0}100%{opacity:1}}.typed-2{position:relative}.typed-2::after{content:'|';opacity:.5}.typed-3{position:relative;display:none}.typed-3.show{animation:typed-3-show var(--easeOutCirc) forwards;display:block}@keyframes typed-3-show{0%{opacity:0;transform:translateY(100%)}100%{opacity:1;transform:translateY(0)}}\n",""]);const s=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var a="",o=void 0!==e[5];return e[4]&&(a+="@supports (".concat(e[4],") {")),e[2]&&(a+="@media ".concat(e[2]," {")),o&&(a+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),a+=t(e),o&&(a+="}"),e[2]&&(a+="}"),e[4]&&(a+="}"),a})).join("")},e.i=function(t,a,o,n,r){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var p=0;p<t.length;p++){var c=[].concat(t[p]);o&&i[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),a&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=a):c[2]=a),n&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=n):c[4]="".concat(n)),e.push(c))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function a(t){for(var a=-1,o=0;o<e.length;o++)if(e[o].identifier===t){a=o;break}return a}function o(t,o){for(var r={},i=[],s=0;s<t.length;s++){var l=t[s],p=o.base?l[0]+o.base:l[0],c=r[p]||0,y="".concat(p," ").concat(c);r[p]=c+1;var f=a(y),d={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)e[f].references++,e[f].updater(d);else{var u=n(d,o);o.byIndex=s,e.splice(s,0,{identifier:y,updater:u,references:1})}i.push(y)}return i}function n(t,e){var a=e.domAPI(e);return a.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;a.update(t=e)}else a.remove()}}t.exports=function(t,n){var r=o(t=t||[],n=n||{});return function(t){t=t||[];for(var i=0;i<r.length;i++){var s=a(r[i]);e[s].references--}for(var l=o(t,n),p=0;p<r.length;p++){var c=a(r[p]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}r=l}}},569:t=>{var e={};t.exports=function(t,a){var o=function(t){if(void 0===e[t]){var a=document.querySelector(t);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(t){a=null}e[t]=a}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(a)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,a)=>{t.exports=function(t){var e=a.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(a){!function(t,e,a){var o="";a.supports&&(o+="@supports (".concat(a.supports,") {")),a.media&&(o+="@media ".concat(a.media," {"));var n=void 0!==a.layer;n&&(o+="@layer".concat(a.layer.length>0?" ".concat(a.layer):""," {")),o+=a.css,n&&(o+="}"),a.media&&(o+="}"),a.supports&&(o+="}");var r=a.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,a)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},m={};function v(t){var e=m[t];if(void 0!==e)return e.exports;var a=m[t]={id:t,exports:{}};return u[t](a,a.exports,v),a.exports}v.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return v.d(e,{a:e}),e},v.d=(t,e)=>{for(var a in e)v.o(e,a)&&!v.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},v.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),t=v(379),e=v.n(t),a=v(795),o=v.n(a),n=v(569),r=v.n(n),i=v(565),s=v.n(i),l=v(216),p=v.n(l),c=v(589),y=v.n(c),f=v(169),(d={}).styleTagTransform=y(),d.setAttributes=s(),d.insert=r().bind(null,"head"),d.domAPI=o(),d.insertStyleElement=p(),e()(f.Z,d),f.Z&&f.Z.locals&&f.Z.locals,"undefined"!=typeof window&&(window.TxtAnime=function(){this.animate=function(t,e){"string"==typeof t?this.el=Array.from(document.querySelectorAll(t)):"object"==typeof t&&(t instanceof NodeList?this.el=Array.from(t):t instanceof Element&&(this.el=[t])),this.default={effect:"tx-an-1",delayStart:0,delay:.05,duration:.7,loop:!0,loopTime:2,overflow:!0},this.options=Object.assign(this.default,e);let a=this.el,o=this.options.effect,n=this.options.delayStart,r=this.options.delay,i=this.options.duration,s=this.options.loop,l=this.options.loopTime,p=this.options.overflow;function c(){a.forEach((t=>{t.innerHTML=t.textContent.replace(/\S/g,"<span>$&</span>");let e=Array.from(t.querySelectorAll("span"));setTimeout((()=>{e.forEach(((t,e)=>{1==p&&(t.parentNode.style.overflow="hidden"),t.parentNode.style.display="block",t.parentNode.style.opacity="1",t.classList.add(o),t.style.display="inline-flex",t.style.animationDelay=e*r+"s",t.style.animationDuration=`${i}s`}))}),1e3*n)}))}c(),1==s&&setInterval((()=>{c()}),1e3*l)},this.scale=function(t,e){"string"==typeof t?this.el=Array.from(document.querySelectorAll(t)):"object"==typeof t&&(t instanceof NodeList?this.el=Array.from(t):t instanceof Element&&(this.el=[t])),this.default={effect:"scale-1",delayStart:0,delay:1.5,duration:2,loop:!0,text:["Go","To","Site"]},this.options=Object.assign(this.default,e);let a=this.el,o=this.options.effect,n=this.options.delayStart,r=this.options.delay,i=this.options.duration,s=this.options.loop;this.options.loopTime,this.options.overflow;let l=this.options.text;setTimeout((()=>{!function(){a.forEach((t=>{t.style.position="relative",t.style.display="flex"}));for(let t=0;t<l.length;t++){let e=document.createElement("span");e.innerHTML=l[t],a.forEach((t=>{t.appendChild(e)})),e.classList.remove(o)}a.forEach((t=>{let e=Array.from(t.querySelectorAll("span")),a=0;e.forEach((t=>{t.style.display="none",e[a].style.display="block",e[a].classList.add(o),t.classList.contains(o)&&(t.style.animationDuration=`${i}s`)}));let n=setInterval((()=>{e[a].classList.remove(o),e[a].style.display="none",a++,a>l.length-1&&(a=0,!0!==s&&(t.innerHTML="",clearInterval(n))),e[a].classList.add(o),e[a].style.display="block",e.forEach((t=>{t.classList.contains(o)&&(t.style.animationDuration=`${i}s`)}))}),1e3*r)}))}()}),1e3*n)},this.overlay=function(t,e){"string"==typeof t?this.el=Array.from(document.querySelectorAll(t)):"object"==typeof t&&(t instanceof NodeList?this.el=Array.from(t):t instanceof Element&&(this.el=[t])),this.default={effect:"overlay-1",overlayColor:"#03a9f4",textColor:"#161414",loop:!0,loopTime:5,outTime:3,delayStart:0},this.options=Object.assign(this.default,e);let a=this.el,o=this.options.effect,n=this.options.overlayColor,r=this.options.textColor,i=this.options.outTime,s=this.options.loop,l=this.options.loopTime,p=this.options.delayStart;function c(){a.forEach((t=>{t.classList.add(`parent-${o}`),function(){let e=t.textContent;t.textContent="";let a=document.createElement("span");a.style.color=r,a.innerHTML=e,t.appendChild(a),setTimeout((()=>{a.classList.add("out")}),1e3*i)}(),function(){let e=document.createElement("div");e.classList.add(o),e.style.background=n,t.appendChild(e),setTimeout((()=>{e.classList.add("out")}),1e3*i)}()}))}!1!==s&&setInterval((()=>{setTimeout((()=>{c()}),1e3*p)}),1e3*l),setTimeout((()=>{c()}),1e3*p)},this.typed=function(t,e){"string"==typeof t?this.el=Array.from(document.querySelectorAll(t)):"object"==typeof t&&(t instanceof NodeList?this.el=Array.from(t):t instanceof Element&&(this.el=[t])),this.default={effect:"typed-1",text:["Typed for TxtAnime","Try free","JavaScript Plugin"],typedSpeed:.05,timeOut:1,loopTime:3,typedStart:0},this.options=Object.assign(this.default,e);let a=this.el,o=this.options.effect,n=this.options.text,r=this.options.typedSpeed,i=this.options.timeOut,s=this.options.loopTime,l=this.options.typedStart;setTimeout((()=>{a.forEach((t=>{"typed-1"!=o&&"typed-2"!=o||function(){t.innerHTML="";let e=document.createElement("span");e.classList.add(o),t.appendChild(e);let a=0;function l(e){let a=t.querySelector("span");a.textContent=n[e],a.innerHTML=a.textContent.replace(/\S/g,"<span>$&</span>");let o=Array.from(a.querySelectorAll("span"));function s(t){o[t].style.display="inline-block"}function l(){let t=o.length-1;setTimeout((()=>{!function(){o[t].style.display="none";let e=setInterval((()=>{t--,t<=0&&(clearInterval(e),a.innerHTML=""),o[t].style.display="none"}),1e3*r)}()}),1e3*i)}o.forEach((t=>{t.style.display="none"})),s(0);let p=0,c=setInterval((()=>{p++,p>o.length-1?(clearInterval(c),l()):s(p)}),1e3*r)}setInterval((()=>{a++,a>n.length?a=0:l(a-1)}),1e3*s)}(),"typed-3"==o&&function(){t.innerHTML="";for(let e=0;e<n.length;e++){let a=document.createElement("span");a.textContent=n[e],t.appendChild(a)}!function(e){t.style.overflow="hidden";let a=Array.from(t.querySelectorAll("span"));a.forEach((t=>{t.classList.add(`${o}`),t.style.animationDuration=`${r}s`})),a[e].classList.add("show"),setInterval((()=>{a[e].classList.remove("show"),++e>n.length-1&&(e=0),a[e].classList.add("show")}),1e3*s)}(0)}()}))}),1e3*l)}})})();