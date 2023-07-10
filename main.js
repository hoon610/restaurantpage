(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(81),o=n.n(a),i=n(645),d=n.n(i)()(o());d.push([e.id,"*{\n    \n    font-family: 'Roboto', sans-serif;\n}\nbody {\n    margin: 0;\n    padding: 0;\n  }\n#content{\n    width: 100%;\n    height: 100%;\n    background-color: rgb(158, 152, 72);\n    font-size: larger;\n    display: flex;\n\n}\n.home{\n    width: 30%;\n    height: auto;\n}\n\n.sidebar{\n    width: 30%;\n    margin-left: auto;\n    background-color: rgba(249,203,19,255);\n    height: auto;\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    gap: 50px\n    \n}\n.main{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    margin-right: auto;\n    background-color: beige;\n    gap: 30px\n}\n.mainWrapper{\n    \n    width: 70%\n}\n.header{\n    height: 120px;\n    width: 100%;\n    background-color:  rgb(158, 152, 72);\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: center;\n\n}\n\n.block{\n    height:auto;\n    width: 100%;\n    background-color: beige;\n}\n\n.footer{\n    height: 60px;\n    width: 100%;\n    background-color: rgb(122, 118, 61);\n    position: fixed;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n}\n\n.menuButton, .contactUsButton, .home{\n    cursor: pointer;\n}\n.aboutUsTitle{\n    text-align: center;\n    font-size: 54px;\n}\n.aboutUs{\n    font-size: 24px;\n    margin: 30px 20%;\n}\n\n.mainPageImage{\n    width: 100%;\n    height: auto;\n}\n\nform{\n    display: flex;\n    flex-direction: column;\n    \n    margin-left: 20%;\n    width: 60%\n}\n\nbutton {\n    background-color: white;\n    color: gray;\n    height: 40px;\n    width: 130px;\n    font-size: 18px;\n    border-radius: 10px;\n    outline: none;\n    border: solid;\n    border-color: #E5E7EB;\n    margin: 10px 0;\n    align-self: center;\n}\n\n.githublogo{\n    width: 30px;\n    height: auto;\n    margin: 0 8px;\n}\n.githublink{\n    margin: 0 7px;\n}\n.sides{\n    margin-bottom: 60px;\n}\ntextarea {\n    height: 150px; \n  }\n\n  .sidebarTitle{\n    text-align: center;\n    font-size: 33px;\n    margin-top: 30px;\n  }\n\n  .sidebarContent{\n    margin: 0 10%\n  }\n\n  .sidebarImage{\n    width: 80%;\n    height: auto;\n  }",""]);const c=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(a)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(d[s]=!0)}for(var r=0;r<e.length;r++){var l=[].concat(e[r]);a&&d[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var i={},d=[],c=0;c<e.length;c++){var s=e[c],r=a.base?s[0]+a.base:s[0],l=i[r]||0,p="".concat(r," ").concat(l);i[r]=l+1;var m=n(p),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var g=o(u,a);a.byIndex=c,t.splice(c,0,{identifier:p,updater:g,references:1})}d.push(p)}return d}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=a(e=e||[],o=o||{});return function(e){e=e||[];for(var d=0;d<i.length;d++){var c=n(i[d]);t[c].references--}for(var s=a(e,o),r=0;r<i.length;r++){var l=n(i[r]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,o&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var i=t[a]={id:a,exports:{}};return e[a](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),a=n(795),o=n.n(a),i=n(569),d=n.n(i),c=n(565),s=n.n(c),r=n(216),l=n.n(r),p=n(589),m=n.n(p),u=n(426),g={};function h(){const e=document.querySelector(".main");e&&e.parentNode.removeChild(e);const t=document.querySelector(".mainWrapper");let n=document.createElement("div");n.classList.add("main");const a=document.createElement("div");a.classList.add("header");const o=document.createElement("div");o.classList.add("block");const i=document.createElement("img");i.classList.add("home"),i.src="./images/Logo.svg",i.addEventListener("click",x);const d=document.createElement("div");d.classList.add("menuButton"),d.textContent="MENU",d.addEventListener("click",y);const c=document.createElement("div");c.textContent="CONTACT US",a.appendChild(i),a.appendChild(d),a.appendChild(c),n.appendChild(a);const s=document.createElement("div");s.classList.add("aboutUsTitle"),s.textContent="Contact Us";const r=document.createElement("div");r.classList.add("aboutUs","aboutUs1"),r.textContent="We're here to end your boredom with the same old food choices. Our newest location is opening up in Lowell, MA! Please reach out with any questions or concerns.";const l=document.createElement("div");l.classList.add("aboutUs","aboutUs2"),l.textContent="The Cupbop menu is our own delicious take on Korean cuisine. Exotically flavorful, naturally healthy dishes you've never had a chance to try— and we make them all affordable, fresh, and lightning fast.";const p=document.createElement("img");p.classList.add("mainPageImage"),p.src="./images/contactUsPage.jpg";const m=document.createElement("form"),u=document.createElement("label"),g=document.createElement("input"),h=document.createElement("label"),f=document.createElement("input"),C=document.createElement("label"),b=document.createElement("textarea"),v=document.createElement("button");u.textContent="Name",g.type="text",g.name="name",h.textContent="Email",f.type="email",f.name="email",C.textContent="Message:",b.name="message",v.type="submit",v.textContent="Submit",m.appendChild(u),m.appendChild(g),m.appendChild(h),m.appendChild(f),m.appendChild(C),m.appendChild(b),m.appendChild(v),m.addEventListener("submit",(function(e){e.preventDefault()})),o.appendChild(s),o.appendChild(r),o.appendChild(m),o.appendChild(l),o.appendChild(p),n.appendChild(o);const E=document.createElement("div");E.classList.add("footer");const w=document.createElement("p");w.classList.add("footertext"),w.textContent="Copyright © 2023 Hoon Kang, Images courtesy of CupBop";const L=document.createElement("a");L.href="https://github.com/hoon610",L.classList.add("githublink"),L.target="_blank";const k=document.createElement("img");k.classList.add("githublogo"),k.src="./images/githublogo.png",k.alt="GitHub Logo",L.appendChild(k),E.appendChild(L),E.appendChild(w),n.appendChild(E),t.appendChild(n)}g.styleTagTransform=m(),g.setAttributes=s(),g.insert=d().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=l(),t()(u.Z,g),u.Z&&u.Z.locals&&u.Z.locals;let f=[{name:"ROCK BOP",description:"Korean style tangy fried chicken",caloriecount:"968 cal",glutenfree:!1,imagelink:7,id:0,paragraph:"A bowl with rice, veggies, sweet potato noodles, and crispy tangy chicken tossed in our homemade sauce",image:"./images/Rock.webp"},{name:"COMBO BOP",description:"Your choice of two proteins / veggies",caloriecount:"567 - 841 cal",glutenfree:!1,imagelink:7,id:1,paragraph:"A bowl with rice, veggies, sweet potato noodles, and your choice of any two proteins",image:"./images/Combo.webp"},{name:"B BOP",description:"Korean style BBQ beef",caloriecount:"694 cal",glutenfree:!1,imagelink:7,id:2,paragraph:"A bowl with rice, veggies, sweet potato noodles, and our specialty marinaded bulgogi beef",image:"./images/B.webp"},{name:"PIGGY BOP",description:"Korean style BBQ pork",caloriecount:"774 cal",glutenfree:!1,imagelink:7,id:3,paragraph:"A bowl with rice, veggies, sweet potato noodles, and spicy pork bulgogi",image:"./images/Hot.webp"},{name:"KKO KKO BOP",description:"Korean style BBQ chicken",caloriecount:"714 cal",glutenfree:!0,imagelink:7,id:4,paragraph:"A bowl with rice, veggies, sweet potato noodles, and our soy sauce based braised chicken",image:"./images/Kko.webp"},{name:"DOOCHI BOP",description:"Fried Tofu",caloriecount:"531 cal",glutenfree:!0,imagelink:7,id:5,paragraph:"A bowl with rice, veggies, sweet potato noodles, and crispy tofu tossed in our homemade sauce",image:"./images/Doochi.webp"},{name:"VEGGIE BOP",description:"Korean style, Veggies",caloriecount:"452 cal",glutenfree:!0,imagelink:7,id:6,paragraph:"A bowl with rice, extra veggies, and sweet potato noodles",image:"./images/Veggie.webp"},{name:"NOODLE BOP",description:"Korean style sweet potato noodles",caloriecount:"244 cal",glutenfree:!0,imagelink:7,id:7,paragraph:"A bowl with rice, veggies, and extra sweet potato noodles",image:"./images/Noodle.webp"},{name:"UGLY BOP",description:"Korean style fried chicken",caloriecount:"883 cal",glutenfree:!0,imagelink:7,id:8,paragraph:"A bowl with rice, veggies, sweet potato noodles, and crispy chicken",image:"./images/Ugly.webp"},{name:"MANDOO BOP",description:"Deep-Fried Pot stickers",caloriecount:"603 cal",glutenfree:!1,imagelink:7,id:9,paragraph:"A bowl with rice, veggies, sweet potato noodles, and our crispy deep-fried potstickers",image:"./images/Veggie.webp"}],C=[{name:"MANDOO",description:"Deep-fried potstickers, 3pc",glutenfree:!1,imagelink:7,id:0,paragraph:"Our crispy deep-fried potstickers"},{name:"KIMCHI",description:"Korean spicy cabbage, 4oz",glutenfree:!1,imagelink:7,id:1,paragraph:"Spicy, pickled napa cabbage"},{name:"GF NOODLE",description:"Gluten free noodle substitution",glutenfree:!1,imagelink:7,id:2,paragraph:"Our specialty sweet potato noodles"}];const b=e=>{const t=document.querySelector("#content"),n=document.querySelector(".sidebar");n&&n.parentNode.removeChild(n);const a=document.createElement("div");a.classList.add("sidebar");const o=document.createElement("div");o.textContent=f[e].name;const i=document.createElement("div");i.textContent=f[e].paragraph;const d=document.createElement("img");d.src=f[e].image,a.appendChild(o),a.appendChild(i),a.appendChild(d),t.appendChild(a)},v=e=>{const t=document.querySelector("#content"),n=document.querySelector(".sidebar");n&&n.parentNode.removeChild(n);const a=document.createElement("div");a.classList.add("sidebar");const o=document.createElement("div");o.textContent=C[e].name;const i=document.createElement("div");i.textContent=C[e].paragraph,a.appendChild(o),a.appendChild(i),t.appendChild(a)},E=()=>{const e=document.querySelector(".entrees"),t=document.querySelector(".sides");for(let t=0;t<f.length;t++){let n=document.createElement("div");n.classList.add("itemBox");let a=document.createElement("div");a.classList.add("titleLine");let o=document.createElement("div");o.classList.add("title"),o.textContent=f[t].name;let i=document.createElement("div");if(i.classList.add("description"),i.textContent=f[t].description,a.appendChild(o),1==f[t].glutenfree){let e=document.createElement("img");e.classList.add("glutenIcon"),a.appendChild(e),e.src="./images/glutenfree.png"}let d=f[t].id;n.addEventListener("click",(function(){b(d),console.log("Clicked on entree with ID:",d)})),n.appendChild(i),n.appendChild(a),e.appendChild(n)}for(let e=0;e<C.length;e++){let n=document.createElement("div");n.classList.add("sideBox",e);let a=document.createElement("div");a.classList.add("titleLine");let o=document.createElement("div");if(o.classList.add("title"),o.textContent=C[e].name,1==C[e].glutenfree){let e=document.createElement("div");e.classList.add("glutenIcon"),a.appendChild(e)}a.appendChild(o);let i=C[e].id;n.addEventListener("click",(function(){v(i),console.log("Clicked on side with ID:",i)})),n.appendChild(a),t.appendChild(n)}};function y(){const e=document.querySelector(".main");e&&e.parentNode.removeChild(e);const t=document.querySelector(".mainWrapper");let n=document.createElement("div");n.classList.add("main");const a=document.createElement("div");a.classList.add("header");const o=document.createElement("div");o.classList.add("block");const i=document.createElement("img");i.classList.add("home"),i.src="./images/Logo.svg",i.addEventListener("click",x);const d=document.createElement("div");d.textContent="MENU";const c=document.createElement("div");c.textContent="CONTACT US",c.addEventListener("click",h),c.classList.add("contactUsButton"),a.appendChild(i),a.appendChild(d),a.appendChild(c),n.appendChild(a);const s=document.createElement("div");s.classList.add("aboutUsTitle"),s.textContent="Menu";const r=document.createElement("div");r.classList.add("menuTitleOne","menuTitle"),r.textContent="Entrees";const l=document.createElement("div");l.classList.add("entrees","menuItemHolder");const p=document.createElement("div");p.classList.add("menuTitleTwo","menuTitle"),p.textContent="Sides";const m=document.createElement("div");m.classList.add("sides","menuItemHolder"),o.appendChild(s),o.appendChild(r),o.appendChild(l),o.appendChild(p),o.appendChild(m),n.appendChild(o);const u=document.createElement("div");u.classList.add("footer");const g=document.createElement("p");g.classList.add("footertext"),g.textContent="Copyright © 2023 Hoon Kang, Images courtesy of CupBop";const f=document.createElement("a");f.href="https://github.com/hoon610",f.classList.add("githublink"),f.target="_blank";const C=document.createElement("img");C.classList.add("githublogo"),C.src="./images/githublogo.png",C.alt="GitHub Logo",f.appendChild(C),u.appendChild(f),u.appendChild(g),n.appendChild(u),t.appendChild(n),E()}const x=()=>{const e=document.querySelector(".main");e&&e.parentNode.removeChild(e);const t=document.querySelector(".mainWrapper");let n=document.createElement("div");n.classList.add("main");const a=document.createElement("div");a.classList.add("header");const o=document.createElement("div");o.classList.add("block");const i=document.createElement("img");i.classList.add("home"),i.src="./images/Logo.svg";const d=document.createElement("div");d.textContent="MENU",d.classList.add("menuButton"),d.addEventListener("click",y);const c=document.createElement("div");c.textContent="CONTACT US",c.addEventListener("click",h),c.classList.add("contactUsButton"),a.appendChild(i),a.appendChild(d),a.appendChild(c),n.appendChild(a);const s=document.createElement("div");s.classList.add("aboutUsTitle"),s.textContent="Our Story";const r=document.createElement("div");r.classList.add("aboutUs","aboutUs1"),r.textContent="We're here to end your boredom with the same old food choices.";const l=document.createElement("img");l.classList.add("mainPageImage"),l.src="./images/Cupbop.jpg";const p=document.createElement("div");p.classList.add("aboutUs","aboutUs2"),p.textContent="The Cupbop menu is our own delicious take on Korean comfort food! Exotically flavorful, naturally healthy dishes you've never had a chance to try— and we make them all affordable, fresh, and lightning fast.",o.appendChild(s),o.appendChild(r),o.appendChild(p),o.appendChild(l),n.appendChild(o);const m=document.createElement("div");m.classList.add("footer");const u=document.createElement("p");u.classList.add("footertext"),u.textContent="Copyright © 2023 Hoon Kang, Images courtesy of CupBop";const g=document.createElement("a");g.href="https://github.com/hoon610",g.classList.add("githublink"),g.target="_blank";const f=document.createElement("img");f.classList.add("githublogo"),f.src="./images/githublogo.png",f.alt="GitHub Logo",g.appendChild(f),m.appendChild(g),m.appendChild(u),n.appendChild(m),t.appendChild(n)};document.getElementById("content"),(()=>{let e=document.getElementById("content");const t=document.createElement("div");t.classList.add("mainWrapper"),e.appendChild(t),x();const n=document.createElement("div");n.classList.add("sidebar");const a=document.createElement("div");a.textContent="Welcome",a.classList.add("sidebarTitle");const o=document.createElement("div");o.classList.add("sidebarContent"),o.textContent="We are proud to bring Lowell the best of Korean cuisine! Mark your calendars because our new location in downtown Lowell opens in just six months!";const i=document.createElement("img");i.classList.add("sidebarImage"),i.src="./images/homeSidebar.png",n.appendChild(a),n.appendChild(o),n.appendChild(i),content.appendChild(n)})(),console.log()})()})();