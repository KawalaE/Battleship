(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>z});var r=n(81),o=n.n(r),i=n(645),a=n.n(i),s=n(667),c=n.n(s),l=new URL(n(610),n.b),d=new URL(n(408),n.b),u=new URL(n(999),n.b),h=new URL(n(895),n.b),p=new URL(n(231),n.b),m=new URL(n(835),n.b),g=new URL(n(626),n.b),f=new URL(n(211),n.b),b=new URL(n(714),n.b),v=a()(o()),y=c()(l),x=c()(d),S=c()(u),C=c()(h),k=c()(p),w=c()(m),E=c()(g),L=c()(f),$=c()(b);v.push([e.id,`@font-face {\n    font-family: 'Inter';\n    src: url(${y}) format('woff');\n    font-style: normal;\n  }\n\n*, *::before, *::after{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-size: 16px;\n    font-family: 'Inter', Arial, Helvetica, sans-serif;\n}\nbody{\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n    background-color: #fff4e9;\n    display: flex;\n    flex-direction: column;\n}\n.game-info{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 40px;\n    margin: 6vmin;\n}\n.informator{\n    font-size: 1.1rem;\n    font-weight: 400;\n    width: 300px;\n    display: flex;\n    justify-content: center;\n}\n.rotate{\n    cursor: pointer;\n    padding: 3px 3px 3px 3px;\n    width: 100px;\n}\n.boards{\n    width: 100%;\n    height: 60vh;\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n}\n.left-side, .right-side{\n    width: 50%;\n    height: inherit;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;  \n}\n.board-left, .board-right{\n    margin: 2vmin;\n    display: grid;\n    grid-template-columns: repeat(10, 4.6vmin);\n    grid-template-rows: repeat(10, 4.6vmin);\n    background-color: #699BF7;\n    border: 1.5vmin solid #699BF7;\n    border-radius: 5%;\n    outline: 1px solid black;\n}\n.board-right{\n    background-color: #FF8577;\n    border: 1.5vmin solid #FF8577;\n}\n.title-sec{\n    display: flex;\n    width: 46vmin;\n    justify-content: space-between;\n}\n.title-sec.computer{\n    flex-direction: row-reverse;\n}\nh1 {\n    color: #000;\n    font-family: Inter;\n    font-size: 2rem;\n    font-style: normal;\n    font-weight: 800;\n    line-height: 100%; /* 40px */\n    letter-spacing: -0.8px;\n}\nbutton{\n    position: relative;\n    border-radius: 999px;\n    border: 2px solid #000;\n    box-shadow: 2px 2px 0px 0px #000;\n    font-size: 0.9rem;\n    padding: 0 10px;\n}\n.human{\n    background: #FF8577;\n}\nbutton.computer{\n    background: #699BF7;\n}\n.cube{\n    position: relative;\n    border-radius: 8px;\n    border: 2px solid #000;\n    background: #FFF;\n    box-shadow: 2px 2px 0px 0px #000;\n    cursor: pointer;\n    margin: 2.5px;\n}\n.hit{\n    background: #F16858;\n    background-image:url(${x});\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 2vmin 2vmin\n}\n.miss{\n    background-image: url(${S});\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 0.8vmin 0.8vmin;\n}\n\n.cube:hover, .rotate:hover, .clicked{\n    box-shadow: 0px 0px 0px 0px #000;\n    top: 2px;\n    left: 2px\n}\n.ship-start-horizontal{\n    background-image:url(${C});\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 3.6vmin 3.6vmin\n}\n.ship-end-horizontal{\n    background-image:url(${k});\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 3.6vmin 3.6vmin\n}\n.ship-middle-horizontal{\n    background-image:url(${w});\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 4vmin 4vmin\n\n}\n/*vertical*/\n.ship-start-vertical{\n    background-image:url(${E});\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 3.6vmin 3.6vmin\n}\n.ship-end-vertical{\n    background-image:url(${L});\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 3.6vmin 3.6vmin\n}\n.ship-middle-vertical{\n    background-image:url(${$});\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 4vmin 4vmin;\n}\n.disable{\n    pointer-events:none;\n}\n.hide{\n    display: none;\n}`,""]);const z=v},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var h=n(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)t[h].references++,t[h].updater(p);else{var m=o(p,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=n(i[a]);t[s].references--}for(var c=r(e,o),l=0;l<i.length;l++){var d=n(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},231:(e,t,n)=>{e.exports=n.p+"859efe4080aec630d6ed.svg"},211:(e,t,n)=>{e.exports=n.p+"fea7c30a141783ea9aab.svg"},835:(e,t,n)=>{e.exports=n.p+"c00fc6b434ee8ee9b9c9.svg"},714:(e,t,n)=>{e.exports=n.p+"88e23129ed6fd81c59b7.svg"},895:(e,t,n)=>{e.exports=n.p+"d0bd844813fd8c70872f.svg"},626:(e,t,n)=>{e.exports=n.p+"f466b678897b5a13f160.svg"},408:(e,t,n)=>{e.exports=n.p+"0baef10e1ab2c8cd0d41.svg"},999:(e,t,n)=>{e.exports=n.p+"63610230367aaaee686f.svg"},610:(e,t,n)=>{e.exports=n.p+"8b39a8a937331a3bb36e.woff"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{class e{constructor(e,t,n,r,o){let i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;this.name=e,this.length=t,this.xPos=n,this.yPos=r,this.orientation=o,this.hitCount=i}getName(){return this.name}getLength(){return this.length}getXPos(){return this.xPos}getYPos(){return this.yPos}getOrientation(){return this.orientation}getHitCount(){return this.hitCount}isSunk(){return this.length===this.hitCount}hit(){this.hitCount+=1}}function t(e){const t=e.getSize()+1;return[Math.floor(Math.random()*(t-1)+1),Math.floor(Math.random()*(t-1)+1)]}function r(e){return Math.floor(Math.random()*e)}class o{constructor(e,t){this.name=e,this.size=t,this.tiles=Array.from({length:t},(()=>new Array(t).fill(" "))),this.ships=[]}getBoardName(){return this.name}getBoard(){return this.tiles}getSize(){return this.size}getTile(e,t){return this.tiles[t-1][e-1]}getShips(){return this.ships}getShipsCount(){return this.ships.length}setTile(e,t,n){this.tiles[t-1][e-1]=n}addShip(e){this.ships.push(e)}isAvailable(e,t,n,r){if(e<1||e>this.getSize()||t>this.getSize()||t<1)return!1;if("horizontal"===r){if(e+n-1>this.getSize())return!1;for(let r=e;r<e+n-1;r+=1)if("S"===this.getTile(r,t))return!1}else if("vertical"===r){if(t+n-1>this.getSize())return!1;for(let r=t;r<t+n;r+=1)if("S"===this.getTile(e,r))return!1}return!0}placeShip(t,n,r,o,i){if(this.isAvailable(r,o,n,i)){const a=new e(t,n,r,o,i);if(this.addShip(a),"horizontal"===a.getOrientation())for(let e=a.getXPos();e<a.getXPos()+a.getLength();e+=1)this.setTile(e,a.getYPos(),"S");else if("vertical"===a.getOrientation())for(let e=a.getYPos();e<a.getYPos()+a.getLength();e+=1)this.setTile(a.getXPos(),e,"S")}}receiveAttack(e,t){"S"===this.getTile(e,t)&&this.getShips().forEach((n=>{"horizontal"===n.getOrientation()?n.getYPos()===t&&n.getXPos()<=e&&n.getXPos()+n.getLength()-1>=e&&n.hit():n.getXPos()===e&&n.getYPos()<=t&&n.getYPos()+n.getLength()-1>=t&&n.hit()}))}allShipsSunk(){let e=0;return this.getShips().forEach((t=>{t.isSunk()&&(e+=1)})),e===this.getShipsCount()}placeEnemyShips(){let e=t(this);const n=["horizontal","vertical"];let o=r(2);const i=[{name:"carrier",length:5},{name:"battleship",length:4},{name:"cruiser",length:3},{name:"submarine",length:3},{name:"destroyer",length:2}];for(let a=0;a<i.length;a+=1){for(;!0!==this.isAvailable(e[0],e[1],i[a].length,n[o]);)e=t(this),o=r(2);this.placeShip(i[a].name,i[a].length,e[0],e[1],n[o])}}}class i{constructor(e,t){this.name=e,this.enemyBoard=new o(`${this.name}Board`,t)}getPlayerName(){return this.name}getEnemyBoard(){return this.enemyBoard}getEnemyTiles(){return this.enemyBoard.getBoard()}play(e,t){"X"!==this.enemyBoard.getTile(e,t)&&this.enemyBoard.receiveAttack(e,t)}playComputer(){let e=t(this.getEnemyBoard());for(;"X"===this.getEnemyBoard().getTile(...e);)e=t(this.enemyBoard);return this.getEnemyBoard().receiveAttack(...e),e}}var a=n(379),s=n.n(a),c=n(795),l=n.n(c),d=n(569),u=n.n(d),h=n(565),p=n.n(h),m=n(216),g=n.n(m),f=n(589),b=n.n(f),v=n(426),y={};function x(e,t,n,r){const o=document.createElement("div");o.classList.add("title-sec"),document.querySelector(`.${t}`).appendChild(o);const i=document.createElement("h1");i.textContent=`${n}`;const a=document.createElement("button");a.classList.add(`${e}`),"computer"===e&&o.classList.add("computer"),a.textContent=`${r}`,o.appendChild(i),o.appendChild(a)}function S(e,t,n){const r=e.getEnemyTiles(),o=document.createElement("div");o.classList.add(`${t}`),document.querySelector(`.${n}`).appendChild(o),r.forEach(((e,t)=>{e.forEach(((e,n)=>{const r=document.createElement("div");r.id=`{"x": ${n}, "y": ${t}}`,r.classList.add("cube"),o.appendChild(r)}))}))}function C(e,t){const n=document.getElementsByClassName(`${e}`)[0].children;let r;for(const e of n)e.id===t&&(r=e);return r}function k(e,t,n,r,o,i){const a=document.querySelector(".informator");if(5===e.getShipsCount()){for(const e of o)e.removeEventListener("click",k);return}const s=document.querySelector(".rotate").textContent.toLocaleLowerCase(),c=n.id,l=JSON.parse(c).x,d=JSON.parse(c).y;e.getShipsCount()<4&&e.isAvailable(l+1,d+1,r[e.getShipsCount()].length,s)&&(a.textContent=`Please place ${r[e.getShipsCount()+1].name} of length ${r[e.getShipsCount()+1].length}.`),e.placeShip(r[e.getShipsCount()].name,r[e.getShipsCount()].length,l+1,d+1,s),function(e,t){e.getShips().forEach((e=>{!function(e,t,n,r,o){let i=C(o,`{"x": ${t}, "y": ${n}}`);if("horizontal"===r){i.classList.add("ship-start-horizontal");for(let r=t+1;r<t+e-1;r+=1)i=C(o,`{"x": ${r}, "y": ${n}}`),i.classList.add("ship-middle-horizontal");i=C(o,`{"x": ${t+e-1}, "y": ${n}}`),i.classList.add("ship-end-horizontal")}else if("vertical"===r){i.classList.add("ship-start-vertical");for(let r=n+1;r<n+e-1;r+=1)i=C(o,`{"x": ${t}, "y": ${r}}`),i.classList.add("ship-middle-vertical");i=C(o,`{"x": ${t}, "y": ${n+e-1}}`),i.classList.add("ship-end-vertical")}}(e.getLength(),e.getXPos()-1,e.getYPos()-1,e.getOrientation(),t)}))}(e,t),5===e.getShipsCount()&&i()}function w(e,t,n,r){const o=document.querySelector(".informator");"S"===e.getTile(n,r)?("humanBoard"===e.getBoardName()?(o.textContent="You have been hit!",function(e){["ship-middle-vertical","ship-end-vertical","ship-start-vertical","ship-middle-horizontal","ship-end-horizontal","ship-start-horizontal"].forEach((t=>{e.classList.contains(t)&&e.classList.remove(t)}))}(t)):"computerBoard"===e.getBoardName()&&(o.textContent="Enemy has been hit, well done!"),t.classList.add("hit")):("humanBoard"===e.getBoardName()?o.textContent="Enemy has missed!":o.textContent="You have missed!",t.classList.add("miss")),t.classList.add("clicked"),e.receiveAttack(n,r),e.setTile(n,r,"X")}function E(e,t){const n=t.id;w(e,t,JSON.parse(n).x+1,JSON.parse(n).y+1)}function L(e,t,n){document.querySelector(".informator").textContent="Enemy attacks you!";const r=t.playComputer(),o=r[0],i=r[1],a=function(e,t){let n;const r=document.getElementsByClassName(`${e}`)[0].children;for(const e of r)e.id===t&&(n=e);return n}(n,`{"x": ${o-1}, "y": ${i-1}}`);w(e,a,o,i)}y.styleTagTransform=b(),y.setAttributes=p(),y.insert=u().bind(null,"head"),y.domAPI=l(),y.insertStyleElement=g(),s()(v.Z,y),v.Z&&v.Z.locals&&v.Z.locals,function(){const e=document.createElement("div");e.classList.add("game-info"),document.body.appendChild(e);const t=document.createElement("div");t.classList.add("informator"),t.textContent="Info about current game loop status";const n=document.createElement("button");n.classList.add("rotate"),n.textContent="Horizontal",n.addEventListener("click",(()=>{"Horizontal"===n.textContent?n.textContent="Vertical":n.textContent="Horizontal"})),e.appendChild(t),e.appendChild(n)}(),function(){const e=document.createElement("div");e.classList.add("boards"),document.body.appendChild(e);const t=document.createElement("div");t.classList.add("left-side"),e.appendChild(t);const n=document.createElement("div");n.classList.add("right-side"),e.appendChild(n)}(),x("human","left-side","Your board","Enemy Board ->"),x("computer","right-side","Enemy Board","<- Your Board");const $=new i("computer",10),z=new i("human",10),B=$.getEnemyBoard(),P=z.getEnemyBoard(),T=document.querySelector(".informator");function N(){document.querySelector(".board-left").classList.add("disable"),document.querySelector(".board-right").classList.add("disable")}function A(){return P.allShipsSunk()?(N(),T.textContent="Computer won!",!0):!!B.allShipsSunk()&&(N(),T.textContent="You are the winner!",!0)}S($,"board-left","left-side"),S(z,"board-right","right-side"),B.placeEnemyShips(),function(e,t,n){const r=document.getElementsByClassName(`${t}`)[0].children,o=[{name:"carrier",length:5},{name:"battleship",length:4},{name:"cruiser",length:3},{name:"submarine",length:3},{name:"destroyer",length:2}];document.querySelector(".informator").textContent=`Please place ${o[0].name} of length ${o[0].length}.`;for(const i of r)i.addEventListener("click",k.bind(null,e,t,i,o,r,n))}(P,"board-left",(function(){document.querySelector(".rotate").classList.add("hide"),function(e,t){document.querySelector(".informator").textContent="Attack enemy!";const n=document.getElementsByClassName("board-right")[0].children;for(const t of n)t.addEventListener("click",(()=>E(e,t)))}(B);const e=document.getElementsByClassName("board-right")[0].children;for(const t of e)t.addEventListener("click",(()=>{A()||(setTimeout((()=>L(P,z,"board-left")),1e3),A())}))}))})()})();