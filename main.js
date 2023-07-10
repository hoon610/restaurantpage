(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(81),o=n.n(a),i=n(645),d=n.n(i)()(o());d.push([e.id,"*{\n    background-color: aqua;\n}\n#content{\n    width: 100%;\n    height: 100%;\n    background-color: blueviolet;\n    font-size: larger;\n    display: flex;\n\n}\n.fullscreen {\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    overflow: auto;\n    background: lime; /* Just to visualize the extent */\n    \n  }\n.sidebar{\n    width: 30%;\n    margin-left: auto;\n}\n.main{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    margin-right: auto;\n    background-color: aliceblue;\n}\n.mainWrapper{\n    \n    width: 70%\n}\n.header{\n    height: 120px;\n    width: 100%;\n    background-color: aquamarine;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: center;\n\n}\n\n.block{\n    height:auto;\n    width: 100%;\n    background-color: beige;\n}\n\n.footer{\n    height: 60px;\n    width: 100%;\n    background-color: aquamarine;\n}",""]);const c=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(a)for(var c=0;c<this.length;c++){var r=this[c][0];null!=r&&(d[r]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);a&&d[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var i={},d=[],c=0;c<e.length;c++){var r=e[c],s=a.base?r[0]+a.base:r[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var u=n(p),m={css:r[1],media:r[2],sourceMap:r[3],supports:r[4],layer:r[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=o(m,a);a.byIndex=c,t.splice(c,0,{identifier:p,updater:h,references:1})}d.push(p)}return d}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=a(e=e||[],o=o||{});return function(e){e=e||[];for(var d=0;d<i.length;d++){var c=n(i[d]);t[c].references--}for(var r=a(e,o),s=0;s<i.length;s++){var l=n(i[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=r}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,o&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var i=t[a]={id:a,exports:{}};return e[a](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),a=n(795),o=n.n(a),i=n(569),d=n.n(i),c=n(565),r=n.n(c),s=n(216),l=n.n(s),p=n(589),u=n.n(p),m=n(426),h={};function v(){const e=document.querySelector(".main");e&&e.parentNode.removeChild(e);const t=document.querySelector(".mainWrapper");let n=document.createElement("div");n.classList.add("main");const a=document.createElement("div");a.classList.add("header");const o=document.createElement("div");o.classList.add("block");const i=document.createElement("div");i.classList.add("footer");const d=document.createElement("div");d.classList.add("home"),d.textContent="HOME",d.addEventListener("click",w);const c=document.createElement("div");c.textContent="MENU",c.addEventListener("click",b);const r=document.createElement("div");r.textContent="CONTACT US",a.appendChild(d),a.appendChild(c),a.appendChild(r),n.appendChild(a);const s=document.createElement("div");s.classList.add("aboutUsTitle"),s.textContent="Contact Us";const l=document.createElement("div");l.classList.add("aboutUs","aboutUs1"),l.textContent="We're here to end your boredom with the same old food choices.";const p=document.createElement("div");p.classList.add("aboutUs","aboutUs2"),p.textContent="The Cupbop menu is our own delicious take on Korean cuisine. Exotically flavorful, naturally healthy dishes you've never had a chance to try— and we make them all affordable, fresh, and lightning fast.",o.appendChild(s),o.appendChild(l),o.appendChild(p),n.appendChild(o),n.appendChild(i),t.appendChild(n)}h.styleTagTransform=u(),h.setAttributes=r(),h.insert=d().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;let g=[{name:"ROCK BOP",description:"Korean style tangy fried chicken",caloriecount:"968 cal",glutenfree:!1,imagelink:7,id:0,paragraph:"A bowl with rice, veggies, sweet potato noodles, and crispy tangy chicken tossed in our homemade sauce"},{name:"COMBO BOP",description:"Your choice of two proteins / veggies",caloriecount:"567 - 841 cal",glutenfree:!1,imagelink:7,id:1,paragraph:"A bowl with rice, veggies, sweet potato noodles, and your choice of any two proteins"},{name:"B BOP",description:"Korean style BBQ beef",caloriecount:"694 cal",glutenfree:!1,imagelink:7,id:2,paragraph:"A bowl with rice, veggies, sweet potato noodles, and our specialty marinaded bulgogi beef"},{name:"PIGGY BOP",description:"Korean style BBQ pork",caloriecount:"774 cal",glutenfree:!1,imagelink:7,id:3,paragraph:"A bowl with rice, veggies, sweet potato noodles, and spicy pork bulgogi"},{name:"KKO KKO BOP",description:"Korean style BBQ chicken",caloriecount:"714 cal",glutenfree:!0,imagelink:7,id:4,paragraph:"A bowl with rice, veggies, sweet potato noodles, and our soy sauce based braised chicken"},{name:"DOOCHI BOP",description:"Fried Tofu",caloriecount:"531 cal",glutenfree:!0,imagelink:7,id:5,paragraph:"A bowl with rice, veggies, sweet potato noodles, and crispy tofu tossed in our homemade sauce"},{name:"VEGGIE BOP",description:"Korean style, Veggies",caloriecount:"452 cal",glutenfree:!0,imagelink:7,id:6,paragraph:"A bowl with rice, extra veggies, and sweet potato noodles"},{name:"NOODLE BOP",description:"Korean style sweet potato noodles",caloriecount:"244 cal",glutenfree:!0,imagelink:7,id:7,paragraph:"A bowl with rice, veggies, and extra sweet potato noodles"},{name:"UGLY BOP",description:"Korean style fried chicken",caloriecount:"883 cal",glutenfree:!0,imagelink:7,id:8,paragraph:"A bowl with rice, veggies, sweet potato noodles, and crispy chicken"},{name:"MANDOO BOP",description:"Deep-Fried Pot stickers",caloriecount:"603 cal",glutenfree:!1,imagelink:7,id:9,paragraph:"A bowl with rice, veggies, sweet potato noodles, and our crispy deep-fried potstickers"}],f=[{name:"MANDOO",description:"Deep-fried potstickers, 3pc",glutenfree:!1,imagelink:7,id:0,paragraph:"Our crispy deep-fried potstickers"},{name:"KIMCHI",description:"Korean spicy cabbage, 4oz",glutenfree:!1,imagelink:7,id:1,paragraph:"Spicy, pickled napa cabbage"},{name:"GF NOODLE",description:"Gluten free noodle substitution",glutenfree:!1,imagelink:7,id:2,paragraph:"Our specialty sweet potato noodles"}];const C=e=>{const t=document.querySelector("#content"),n=document.querySelector(".sidebar");n&&n.parentNode.removeChild(n);const a=document.createElement("div");a.classList.add("sidebar");const o=document.createElement("div");o.textContent=g[e].name;const i=document.createElement("div");i.textContent=g[e].paragraph;const d=document.createElement("img");d.src="./images/cat.jpeg",a.appendChild(o),a.appendChild(i),a.appendChild(d),t.appendChild(a)},E=e=>{const t=document.querySelector("#content"),n=document.querySelector(".sidebar");n&&n.parentNode.removeChild(n);const a=document.createElement("div");a.classList.add("sidebar");const o=document.createElement("div");o.textContent=f[e].name;const i=document.createElement("div");i.textContent=f[e].paragraph;const d=document.createElement("img");d.src="./images/cat.jpeg",a.appendChild(o),a.appendChild(i),a.appendChild(d),t.appendChild(a)},y=()=>{const e=document.querySelector(".entrees"),t=document.querySelector(".sides");for(let t=0;t<g.length;t++){let n=document.createElement("div");n.classList.add("itemBox");let a=document.createElement("div");a.classList.add("titleLine");let o=document.createElement("div");o.classList.add("title"),o.textContent=g[t].name;let i=document.createElement("div");if(i.classList.add("description"),i.textContent=g[t].description,1==g[t].glutenfree){let e=document.createElement("div");e.classList.add("glutenIcon"),a.appendChild(e)}a.appendChild(o);let d=g[t].id;n.addEventListener("click",(function(){C(d),console.log("Clicked on entree with ID:",d)})),n.appendChild(i),n.appendChild(a),e.appendChild(n)}for(let e=0;e<f.length;e++){let n=document.createElement("div");n.classList.add("sideBox",e);let a=document.createElement("div");a.classList.add("titleLine");let o=document.createElement("div");if(o.classList.add("title"),o.textContent=f[e].name,1==f[e].glutenfree){let e=document.createElement("div");e.classList.add("glutenIcon"),a.appendChild(e)}a.appendChild(o);let i=f[e].id;n.addEventListener("click",(function(){E(i),console.log("Clicked on side with ID:",i)})),n.appendChild(a),t.appendChild(n)}};function b(){const e=document.querySelector(".main");e&&e.parentNode.removeChild(e);const t=document.querySelector(".mainWrapper");let n=document.createElement("div");n.classList.add("main");const a=document.createElement("div");a.classList.add("header");const o=document.createElement("div");o.classList.add("block");const i=document.createElement("div");i.classList.add("footer");const d=document.createElement("div");d.classList.add("home"),d.textContent="HOME",d.addEventListener("click",w);const c=document.createElement("div");c.textContent="MENU";const r=document.createElement("div");r.textContent="CONTACT US",r.addEventListener("click",v),a.appendChild(d),a.appendChild(c),a.appendChild(r),n.appendChild(a);const s=document.createElement("div");s.classList.add("aboutUsTitle"),s.textContent="Menu";const l=document.createElement("div");l.classList.add("menuTitleOne","menuTitle"),l.textContent="Entrees";const p=document.createElement("div");p.classList.add("entrees","menuItemHolder");const u=document.createElement("div");u.classList.add("menuTitleTwo","menuTitle"),u.textContent="Sides";const m=document.createElement("div");m.classList.add("sides","menuItemHolder"),o.appendChild(s),o.appendChild(l),o.appendChild(p),o.appendChild(u),o.appendChild(m),n.appendChild(o),n.appendChild(i),t.appendChild(n),y()}const w=()=>{const e=document.querySelector(".main");e&&e.parentNode.removeChild(e);const t=document.querySelector(".mainWrapper");let n=document.createElement("div");n.classList.add("main");const a=document.createElement("div");a.classList.add("header");const o=document.createElement("div");o.classList.add("block");const i=document.createElement("div");i.classList.add("footer");const d=document.createElement("div");d.classList.add("home"),d.textContent="HOME";const c=document.createElement("div");c.textContent="MENU",c.addEventListener("click",b);const r=document.createElement("div");r.textContent="CONTACT US",r.addEventListener("click",v),a.appendChild(d),a.appendChild(c),a.appendChild(r),n.appendChild(a);const s=document.createElement("div");s.classList.add("aboutUsTitle"),s.textContent="Our Story";const l=document.createElement("div");l.classList.add("aboutUs","aboutUs1"),l.textContent="We're here to end your boredom with the same old food choices.";const p=document.createElement("div");p.classList.add("aboutUs","aboutUs2"),p.textContent="The Cupbop menu is our own delicious take on Korean cuisine. Exotically flavorful, naturally healthy dishes you've never had a chance to try— and we make them all affordable, fresh, and lightning fast.",o.appendChild(s),o.appendChild(l),o.appendChild(p),n.appendChild(o),n.appendChild(i),t.appendChild(n)};document.getElementById("content"),(()=>{let e=document.getElementById("content");const t=document.createElement("div");t.classList.add("mainWrapper"),e.appendChild(t),w();const n=document.createElement("div");n.classList.add("sidebar");const a=document.createElement("div");a.textContent="Welcome";const o=document.createElement("div");o.textContent="We are proud to bring Lowell the best of Korean cuisine";const i=document.createElement("img");i.src="./images/cat.jpeg",n.appendChild(a),n.appendChild(o),n.appendChild(i),content.appendChild(n)})(),console.log()})()})();