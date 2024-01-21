(()=>{"use strict";class t{constructor(t,e,i,s,h){let r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;this.name=t,this.length=e,this.xPos=i,this.yPos=s,this.orientation=h,this.hitCount=r}getName(){return this.name}getLength(){return this.length}getXPos(){return this.xPos}getYPos(){return this.yPos}getOrientation(){return this.orientation}getHitCount(){return this.hitCount}isSunk(){return this.length===this.hitCount}hit(){this.hitCount+=1}}function e(t,e){const i=Math.ceil(t),s=Math.floor(e);return Math.floor(Math.random()*(s-i)+i)}function i(t){return[e(1,t.getSize()+1),e(1,t.getSize()+1)]}let s=new class{constructor(){this.hits=[]}getHits(){return this.hits}getTurn(){return this.turn}getHitsLength(){return this.hits.length}getLastHit(){return this.hits[this.getHitsLength()-1]}setHit(t){this.hits.push(t)}play(t,e,i){"X"!==t.getTile(e,i)&&t.receiveAttack(e,i)}playComputer(t){let e=i(t);for(;"X"===t.getTile(...e);)e=i(t);t.receiveAttack(...e)}},h=new class{constructor(t){this.size=t,this.tiles=Array.from({length:t},(()=>new Array(t).fill(" "))),this.ships=[]}getBoard(){return this.tiles}getSize(){return this.size}getTile(t,e){return this.tiles[e-1][t-1]}getShips(){return this.ships}getShipsCount(){return this.ships.length}setTile(t,e,i){this.tiles[e-1][t-1]=i}addShip(t){this.ships.push(t)}isAvailable(t,e,i,s){if(t<1||t>this.getSize()||e>this.getSize()||e<1)return!1;if("horizontal"===s){if(t+i-1>this.getSize())return!1;for(let s=t;s<t+i-1;s+=1)if("S"===this.getTile(s,e))return!1}else if("vertical"===s){if(e+i-1>this.getSize())return!1;for(let s=e;s<e+i-1;s+=1)if("S"===this.getTile(t,s))return!1}return!0}placeShip(e,i,s,h,r){if(this.isAvailable(s,h,i,r)){const n=new t(e,i,s,h,r);if(this.addShip(n),"horizontal"===n.getOrientation())for(let t=n.getXPos();t<n.getXPos()+n.getLength();t+=1)this.setTile(t,n.getYPos(),"S");else if("vertical"===n.getOrientation())for(let t=n.getYPos();t<n.getYPos()+n.getLength();t+=1)this.setTile(n.getXPos(),t,"S")}}receiveAttack(t,e){"S"===this.getTile(t,e)&&this.getShips().forEach((i=>{"horizontal"===i.getOrientation()?i.getYPos()===e&&i.getXPos()<=t&&i.getXPos()+i.getLength()-1>=t&&i.hit():i.getXPos()===t&&i.getYPos()<=e&&i.getYPos()+i.getLength()-1>=e&&i.hit()})),this.setTile(t,e,"X")}allShipsSunk(){let t=0;return this.getShips().forEach((e=>{e.isSunk()&&(t+=1)})),t===this.getShipsCount()}}(10);s.playComputer(h),console.log(h.getBoard())})();