"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[4893],{52522:(e,t,r)=>{r.d(t,{p:()=>s});var n,i=r(84397),a={};n=function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}return r.m=e,r.c=t,r.p="",r(0)}([function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.isNotPNG=function(e){return e===a},t.isNotAPNG=function(e){return e===s},t.default=function(e){var t=new Uint8Array(e);if(Array.prototype.some.call(o,(function(e,r){return e!==t[r]})))return a;var r=!1;if(u(t,(function(e){return!(r="acTL"===e)})),!r)return s;var n=[],l=[],d=null,p=null,m=0,v=new i.APNG;if(u(t,(function(e,t,r,a){var s=new DataView(t.buffer);switch(e){case"IHDR":d=t.subarray(r+8,r+8+a),v.width=s.getUint32(r+8),v.height=s.getUint32(r+12);break;case"acTL":v.numPlays=s.getUint32(r+8+4);break;case"fcTL":p&&(v.frames.push(p),m++),(p=new i.Frame).width=s.getUint32(r+8+4),p.height=s.getUint32(r+8+8),p.left=s.getUint32(r+8+12),p.top=s.getUint32(r+8+16);var o=s.getUint16(r+8+20),u=s.getUint16(r+8+22);0===u&&(u=100),p.delay=1e3*o/u,p.delay<=10&&(p.delay=100),v.playTime+=p.delay,p.disposeOp=s.getUint8(r+8+24),p.blendOp=s.getUint8(r+8+25),p.dataParts=[],0===m&&2===p.disposeOp&&(p.disposeOp=1);break;case"fdAT":p&&p.dataParts.push(t.subarray(r+8+4,r+8+a));break;case"IDAT":p&&p.dataParts.push(t.subarray(r+8,r+8+a));break;case"IEND":l.push(c(t,r,12+a));break;default:n.push(c(t,r,12+a))}})),p&&v.frames.push(p),0==v.frames.length)return s;var g=new Blob(n),y=new Blob(l);return v.frames.forEach((function(e){var t=[];t.push(o),d.set(f(e.width),0),d.set(f(e.height),4),t.push(h("IHDR",d)),t.push(g),e.dataParts.forEach((function(e){return t.push(h("IDAT",e))})),t.push(y),e.imageData=new Blob(t,{type:"image/png"}),delete e.dataParts,t=null})),v};var n=function(e){return e&&e.__esModule?e:{default:e}}(r(1)),i=r(2);var a=new Error("Not a PNG"),s=new Error("Not an animated PNG");var o=new Uint8Array([137,80,78,71,13,10,26,10]);function u(e,t){var r=new DataView(e.buffer),n=8,i=void 0,a=void 0,s=void 0;do{a=r.getUint32(n),s=t(i=l(e,n+4,4),e,n,a),n+=12+a}while(!1!==s&&"IEND"!=i&&n<e.length)}function l(e,t,r){var n=Array.prototype.slice.call(e.subarray(t,t+r));return String.fromCharCode.apply(String,n)}function c(e,t,r){var n=new Uint8Array(r);return n.set(e.subarray(t,t+r)),n}var h=function(e,t){var r=e.length+t.length,i=new Uint8Array(r+8),a=new DataView(i.buffer);a.setUint32(0,t.length),i.set(function(e){for(var t=new Uint8Array(e.length),r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(e),4),i.set(t,8);var s=(0,n.default)(i,4,r);return a.setUint32(r+4,s),i},f=function(e){return new Uint8Array([e>>>24&255,e>>>16&255,e>>>8&255,255&e])}},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=-1,i=t,a=t+(arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.length-t);i<a;i++)n=n>>>8^r[255&(n^e[i])];return-1^n};for(var r=new Uint32Array(256),n=0;n<256;n++){for(var i=n,a=0;a<8;a++)i=0!=(1&i)?3988292384^i>>>1:i>>>1;r[n]=i}},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.Frame=t.APNG=void 0;var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=function(e){return e&&e.__esModule?e:{default:e}}(r(3));function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.APNG=function(){function e(){a(this,e),this.width=0,this.height=0,this.numPlays=0,this.playTime=0,this.frames=[]}return n(e,[{key:"createImages",value:function(){return Promise.all(this.frames.map((function(e){return e.createImage()})))}},{key:"getPlayer",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.createImages().then((function(){return new i.default(t,e,r)}))}}]),e}(),t.Frame=function(){function e(){a(this,e),this.left=0,this.top=0,this.width=0,this.height=0,this.delay=0,this.disposeOp=0,this.blendOp=0,this.imageData=null,this.imageElement=null}return n(e,[{key:"createImage",value:function(){var e=this;return this.imageElement?Promise.resolve():new Promise((function(t,r){var n=URL.createObjectURL(e.imageData);e.imageElement=document.createElement("img"),e.imageElement.onload=function(){URL.revokeObjectURL(n),t()},e.imageElement.onerror=function(){URL.revokeObjectURL(n),e.imageElement=null,r(new Error("Image creation error"))},e.imageElement.src=n}))}}]),e}()},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var i=function(e){function t(e,r,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return i.playbackRate=1,i._currentFrameNumber=0,i._ended=!1,i._paused=!0,i._numPlays=0,i._apng=e,i.context=r,i.stop(),n&&i.play(),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"renderNextFrame",value:function(){this._currentFrameNumber=(this._currentFrameNumber+1)%this._apng.frames.length,this._currentFrameNumber===this._apng.frames.length-1&&(this._numPlays++,0!==this._apng.numPlays&&this._numPlays>=this._apng.numPlays&&(this._ended=!0,this._paused=!0)),this._prevFrame&&1==this._prevFrame.disposeOp?this.context.clearRect(this._prevFrame.left,this._prevFrame.top,this._prevFrame.width,this._prevFrame.height):this._prevFrame&&2==this._prevFrame.disposeOp&&this.context.putImageData(this._prevFrameData,this._prevFrame.left,this._prevFrame.top);var e=this.currentFrame;this._prevFrame=e,this._prevFrameData=null,2==e.disposeOp&&(this._prevFrameData=this.context.getImageData(e.left,e.top,e.width,e.height)),0==e.blendOp&&this.context.clearRect(e.left,e.top,e.width,e.height),this.context.drawImage(e.imageElement,e.left,e.top),this.emit("frame",this._currentFrameNumber),this._ended&&this.emit("end")}},{key:"play",value:function(){var e=this;this.emit("play"),this._ended&&this.stop(),this._paused=!1;var t=performance.now()+this.currentFrame.delay/this.playbackRate;requestAnimationFrame((function r(n){if(!e._ended&&!e._paused){if(n>=t){for(;n-t>=e._apng.playTime/e.playbackRate;)t+=e._apng.playTime/e.playbackRate,e._numPlays++;do{e.renderNextFrame(),t+=e.currentFrame.delay/e.playbackRate}while(!e._ended&&n>t)}requestAnimationFrame(r)}}))}},{key:"pause",value:function(){this._paused||(this.emit("pause"),this._paused=!0)}},{key:"stop",value:function(){this.emit("stop"),this._numPlays=0,this._ended=!1,this._paused=!0,this._currentFrameNumber=-1,this.context.clearRect(0,0,this._apng.width,this._apng.height),this.renderNextFrame()}},{key:"currentFrameNumber",get:function(){return this._currentFrameNumber}},{key:"currentFrame",get:function(){return this._apng.frames[this._currentFrameNumber]}},{key:"paused",get:function(){return this._paused}},{key:"ended",get:function(){return this._ended}}]),t}(function(e){return e&&e.__esModule?e:{default:e}}(r(4)).default);t.default=i},function(e,t){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function n(e){return"function"==typeof e}function i(e){return"object"==typeof e&&null!==e}function a(e){return void 0===e}e.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(e){if(!function(e){return"number"==typeof e}(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},r.prototype.emit=function(e){var t,r,s,o,u,l;if(this._events||(this._events={}),"error"===e&&(!this._events.error||i(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var c=new Error('Uncaught, unspecified "error" event. ('+t+")");throw c.context=t,c}if(a(r=this._events[e]))return!1;if(n(r))switch(arguments.length){case 1:r.call(this);break;case 2:r.call(this,arguments[1]);break;case 3:r.call(this,arguments[1],arguments[2]);break;default:o=Array.prototype.slice.call(arguments,1),r.apply(this,o)}else if(i(r))for(o=Array.prototype.slice.call(arguments,1),s=(l=r.slice()).length,u=0;u<s;u++)l[u].apply(this,o);return!0},r.prototype.addListener=function(e,t){var s;if(!n(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,n(t.listener)?t.listener:t),this._events[e]?i(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,i(this._events[e])&&!this._events[e].warned&&(s=a(this._maxListeners)?r.defaultMaxListeners:this._maxListeners)&&s>0&&this._events[e].length>s&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(e,t){if(!n(t))throw TypeError("listener must be a function");var r=!1;function i(){this.removeListener(e,i),r||(r=!0,t.apply(this,arguments))}return i.listener=t,this.on(e,i),this},r.prototype.removeListener=function(e,t){var r,a,s,o;if(!n(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(s=(r=this._events[e]).length,a=-1,r===t||n(r.listener)&&r.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(i(r)){for(o=s;o-- >0;)if(r[o]===t||r[o].listener&&r[o].listener===t){a=o;break}if(a<0)return this;1===r.length?(r.length=0,delete this._events[e]):r.splice(a,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},r.prototype.removeAllListeners=function(e){var t,r;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n(r=this._events[e]))this.removeListener(e,r);else if(r)for(;r.length;)this.removeListener(e,r[r.length-1]);return delete this._events[e],this},r.prototype.listeners=function(e){return this._events&&this._events[e]?n(this._events[e])?[this._events[e]]:this._events[e].slice():[]},r.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(n(t))return 1;if(t)return t.length}return 0},r.listenerCount=function(e,t){return e.listenerCount(t)}}])},{get exports(){return a},set exports(e){a=e}}.exports=n();const s=(0,i.g)(a)},47191:(e,t,r)=>{r.d(t,{d:()=>h,p:()=>g});var n={},i={},a={};Object.defineProperty(a,"__esModule",{value:!0}),a.loop=a.conditional=a.parse=void 0;a.parse=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n;if(Array.isArray(r))r.forEach((function(r){return e(t,r,n,i)}));else if("function"==typeof r)r(t,n,i,e);else{var a=Object.keys(r)[0];Array.isArray(r[a])?(i[a]={},e(t,r[a],n,i[a])):i[a]=r[a](t,n,i,e)}return n};a.conditional=function(e,t){return function(r,n,i,a){t(r,n,i)&&a(r,e,n,i)}};a.loop=function(e,t){return function(r,n,i,a){for(var s=[],o=r.pos;t(r,n,i);){var u={};if(a(r,e,n,u),r.pos===o)break;o=r.pos,s.push(u)}return s}};var s={};Object.defineProperty(s,"__esModule",{value:!0}),s.readBits=s.readArray=s.readUnsigned=s.readString=s.peekBytes=s.readBytes=s.peekByte=s.readByte=s.buildStream=void 0;s.buildStream=function(e){return{data:e,pos:0}};var o=function(){return function(e){return e.data[e.pos++]}};s.readByte=o;s.peekByte=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(t){return t.data[t.pos+e]}};var u=function(e){return function(t){return t.data.subarray(t.pos,t.pos+=e)}};s.readBytes=u;s.peekBytes=function(e){return function(t){return t.data.subarray(t.pos,t.pos+e)}};s.readString=function(e){return function(t){return Array.from(u(e)(t)).map((function(e){return String.fromCharCode(e)})).join("")}};s.readUnsigned=function(e){return function(t){var r=u(2)(t);return e?(r[1]<<8)+r[0]:(r[0]<<8)+r[1]}};s.readArray=function(e,t){return function(r,n,i){for(var a="function"==typeof t?t(r,n,i):t,s=u(e),o=new Array(a),l=0;l<a;l++)o[l]=s(r);return o}};s.readBits=function(e){return function(t){for(var r=function(e){return e.data[e.pos++]}(t),n=new Array(8),i=0;i<8;i++)n[7-i]=!!(r&1<<i);return Object.keys(e).reduce((function(t,r){var i=e[r];return i.length?t[r]=function(e,t,r){for(var n=0,i=0;i<r;i++)n+=e[t+i]&&Math.pow(2,r-i-1);return n}(n,i.index,i.length):t[r]=n[i.index],t}),{})}},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=a,r=s,n={blocks:function(e){for(var t=[],n=e.data.length,i=0,a=(0,r.readByte)()(e);0!==a&&a;a=(0,r.readByte)()(e)){if(e.pos+a>=n){var s=n-e.pos;t.push((0,r.readBytes)(s)(e)),i+=s;break}t.push((0,r.readBytes)(a)(e)),i+=a}for(var o=new Uint8Array(i),u=0,l=0;l<t.length;l++)o.set(t[l],u),u+=t[l].length;return o}},i=(0,t.conditional)({gce:[{codes:(0,r.readBytes)(2)},{byteSize:(0,r.readByte)()},{extras:(0,r.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,r.readUnsigned)(!0)},{transparentColorIndex:(0,r.readByte)()},{terminator:(0,r.readByte)()}]},(function(e){var t=(0,r.peekBytes)(2)(e);return 33===t[0]&&249===t[1]})),o=(0,t.conditional)({image:[{code:(0,r.readByte)()},{descriptor:[{left:(0,r.readUnsigned)(!0)},{top:(0,r.readUnsigned)(!0)},{width:(0,r.readUnsigned)(!0)},{height:(0,r.readUnsigned)(!0)},{lct:(0,r.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,t.conditional)({lct:(0,r.readArray)(3,(function(e,t,r){return Math.pow(2,r.descriptor.lct.size+1)}))},(function(e,t,r){return r.descriptor.lct.exists})),{data:[{minCodeSize:(0,r.readByte)()},n]}]},(function(e){return 44===(0,r.peekByte)()(e)})),u=(0,t.conditional)({text:[{codes:(0,r.readBytes)(2)},{blockSize:(0,r.readByte)()},{preData:function(e,t,n){return(0,r.readBytes)(n.text.blockSize)(e)}},n]},(function(e){var t=(0,r.peekBytes)(2)(e);return 33===t[0]&&1===t[1]})),l=(0,t.conditional)({application:[{codes:(0,r.readBytes)(2)},{blockSize:(0,r.readByte)()},{id:function(e,t,n){return(0,r.readString)(n.blockSize)(e)}},n]},(function(e){var t=(0,r.peekBytes)(2)(e);return 33===t[0]&&255===t[1]})),c=(0,t.conditional)({comment:[{codes:(0,r.readBytes)(2)},n]},(function(e){var t=(0,r.peekBytes)(2)(e);return 33===t[0]&&254===t[1]})),h=[{header:[{signature:(0,r.readString)(3)},{version:(0,r.readString)(3)}]},{lsd:[{width:(0,r.readUnsigned)(!0)},{height:(0,r.readUnsigned)(!0)},{gct:(0,r.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,r.readByte)()},{pixelAspectRatio:(0,r.readByte)()}]},(0,t.conditional)({gct:(0,r.readArray)(3,(function(e,t){return Math.pow(2,t.lsd.gct.size+1)}))},(function(e,t){return t.lsd.gct.exists})),{frames:(0,t.loop)([i,l,c,o,u],(function(e){var t=(0,r.peekByte)()(e);return 33===t||44===t}))}];e.default=h}(i);var l={};Object.defineProperty(l,"__esModule",{value:!0}),l.deinterlace=void 0;l.deinterlace=function(e,t){for(var r=new Array(e.length),n=e.length/t,i=function(n,i){var a=e.slice(i*t,(i+1)*t);r.splice.apply(r,[n*t,t].concat(a))},a=[0,4,2,1],s=[8,8,4,2],o=0,u=0;u<4;u++)for(var l=a[u];l<n;l+=s[u])i(l,o),o++;return r};var c={};Object.defineProperty(c,"__esModule",{value:!0}),c.lzw=void 0;c.lzw=function(e,t,r){var n,i,a,s,o,u,l,c,h,f,d,p,m,v,g,y,_=4096,w=r,b=new Array(r),x=new Array(_),k=new Array(_),F=new Array(_+1);for(o=1+(i=1<<(f=e)),n=i+2,l=-1,a=(1<<(s=f+1))-1,c=0;c<i;c++)x[c]=0,k[c]=c;for(d=p=m=v=g=y=0,h=0;h<w;){if(0===v){if(p<s){d+=t[y]<<p,p+=8,y++;continue}if(c=d&a,d>>=s,p-=s,c>n||c==o)break;if(c==i){a=(1<<(s=f+1))-1,n=i+2,l=-1;continue}if(-1==l){F[v++]=k[c],l=c,m=c;continue}for(u=c,c==n&&(F[v++]=m,c=l);c>i;)F[v++]=k[c],c=x[c];m=255&k[c],F[v++]=m,n<_&&(x[n]=l,k[n]=m,0==(++n&a)&&n<_&&(s++,a+=n)),l=u}v--,b[g++]=F[v],h++}for(h=g;h<w;h++)b[h]=0;return b},Object.defineProperty(n,"__esModule",{value:!0});var h=n.decompressFrames=n.decompressFrame=g=n.parseGIF=void 0,f=function(e){return e&&e.__esModule?e:{default:e}}(i),d=a,p=s,m=l,v=c;var g=n.parseGIF=function(e){var t=new Uint8Array(e);return(0,d.parse)((0,p.buildStream)(t),f.default)},y=function(e,t,r){if(e.image){var n=e.image,i=n.descriptor.width*n.descriptor.height,a=(0,v.lzw)(n.data.minCodeSize,n.data.blocks,i);n.descriptor.lct.interlaced&&(a=(0,m.deinterlace)(a,n.descriptor.width));var s={pixels:a,dims:{top:e.image.descriptor.top,left:e.image.descriptor.left,width:e.image.descriptor.width,height:e.image.descriptor.height}};return n.descriptor.lct&&n.descriptor.lct.exists?s.colorTable=n.lct:s.colorTable=t,e.gce&&(s.delay=10*(e.gce.delay||10),s.disposalType=e.gce.extras.disposal,e.gce.extras.transparentColorGiven&&(s.transparentIndex=e.gce.transparentColorIndex)),r&&(s.patch=function(e){for(var t=e.pixels.length,r=new Uint8ClampedArray(4*t),n=0;n<t;n++){var i=4*n,a=e.pixels[n],s=e.colorTable[a]||[0,0,0];r[i]=s[0],r[i+1]=s[1],r[i+2]=s[2],r[i+3]=a!==e.transparentIndex?255:0}return r}(s)),s}console.warn("gif frame does not have associated image.")};n.decompressFrame=y;h=n.decompressFrames=function(e,t){return e.frames.filter((function(e){return e.image})).map((function(r){return y(r,e.gct,t)}))}},91958:(e,t,r)=>{r.d(t,{$7:()=>c,$e:()=>s,E0:()=>u,N5:()=>l,lW:()=>o});r(93169);var n=r(10064),i=r(92026),a=r(35995);function s(e){const t=u(e);return(0,i.pC)(t)?t.toDataURL():""}async function o(e){const t=u(e);if((0,i.Wi)(t))throw new n.Z("imageToArrayBuffer","Unsupported image type");const r=await async function(e){if(!(e instanceof HTMLImageElement))return"image/png";const t=e.src;if((0,a.HK)(t)){const e=(0,a.sJ)(t);return"image/jpeg"===e?.mediaType?e.mediaType:"image/png"}return/\.png$/i.test(t)?"image/png":/\.(jpg|jpeg)$/i.test(t)?"image/jpeg":"image/png"}(e),s=await new Promise((e=>t.toBlob(e,r)));if(!s)throw new n.Z("imageToArrayBuffer","Failed to encode image");return{data:await s.arrayBuffer(),type:r}}function u(e){if(e instanceof HTMLCanvasElement)return e;if(e instanceof HTMLVideoElement)return null;const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");return e instanceof HTMLImageElement?r.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&r.putImageData(e,0,0),t}function l(e){const t=[],r=new Uint8Array(e);for(let n=0;n<r.length;n++)t.push(String.fromCharCode(r[n]));return"data:application/octet-stream;base64,"+btoa(t.join(""))}function c(e){if(e.byteLength<8)return!1;const t=new Uint8Array(e);return 137===t[0]&&80===t[1]&&78===t[2]&&71===t[3]&&13===t[4]&&10===t[5]&&26===t[6]&&10===t[7]}},16285:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(16889),i=r(78915),a=r(26554),s=r(691),o=r(6388),u=r(31027);class l{constructor(e){this._resourceManager=e,this._rasterizationCanvas=null}dispose(){this._rasterizationCanvas=null}rasterizeJSONResource(e,t,r){if(this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),"simple-fill"===e.type||"esriSFS"===e.type){const[r,i,s]=(0,a.Y)(this._rasterizationCanvas,e.style,t);return{size:[i,s],image:new Uint32Array(r.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0,rasterizationScale:(0,n.fp)(Math.ceil(t))}}if("simple-line"===e.type||"esriSLS"===e.type||"line"===e.type&&e.dashTemplate){let t,r;if("simple-line"===e.type||"esriSLS"===e.type)switch(t=(0,i.U1)(e.style,e.cap),e.cap){case"butt":r="Butt";break;case"square":r="Square";break;default:r="Round"}else t=e.dashTemplate,r=e.cim.capStyle;const[n,s,o]=(0,a.m)(t,r);return{size:[s,o],image:new Uint32Array(n.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}let u,l=null,c=null,h=1;if("simple-marker"===e.type||"esriSMS"===e.type||"line-marker"===e.type?(u=i.B$.fromSimpleMarker(e),c=(0,o.Fp)(u)):e.cim&&"CIMHatchFill"===e.cim.type?(u=i.B$.fromCIMHatchFill(e.cim,t),l=new s.Z(u.frame.xmin,-u.frame.ymax,u.frame.xmax-u.frame.xmin,u.frame.ymax-u.frame.ymin),h=t):e.cim.markerPlacement&&"CIMMarkerPlacementInsidePolygon"===e.cim.markerPlacement.type?(u=i.B$.fromCIMInsidePolygon(e.cim),l=new s.Z(u.frame.xmin,-u.frame.ymax,u.frame.xmax-u.frame.xmin,u.frame.ymax-u.frame.ymin)):(u=e.cim,e.avoidSDFRasterization||(c=(0,o.Fp)(u))),c&&!r){const[e,t,r]=(0,o.RL)(c);return e?{size:[t,r],image:new Uint32Array(e.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0,rasterizationScale:h}:null}const[f,d,p,m,v]=i.B$.rasterize(this._rasterizationCanvas,u,l,this._resourceManager,!r);return f?{size:[d,p],image:new Uint32Array(f.buffer),sdf:!1,simplePattern:!1,anchorX:m,anchorY:v}:null}rasterizeImageResource(e,t,r,n){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),this._rasterizationCanvas.width=e,this._rasterizationCanvas.height=t;const i=this._rasterizationCanvas.getContext("2d");r instanceof ImageData?i.putImageData(r,0,0):(r.setAttribute("width",`${e}px`),r.setAttribute("height",`${t}px`),i.drawImage(r,0,0,e,t));const a=i.getImageData(0,0,e,t),s=new Uint8Array(a.data);if(n)for(const u of n)if(u&&u.oldColor&&4===u.oldColor.length&&u.newColor&&4===u.newColor.length){const[e,t,r,n]=u.oldColor,[i,a,o,l]=u.newColor;if(e===i&&t===a&&r===o&&n===l)continue;for(let u=0;u<s.length;u+=4)e===s[u]&&t===s[u+1]&&r===s[u+2]&&n===s[u+3]&&(s[u]=i,s[u+1]=a,s[u+2]=o,s[u+3]=l)}let o;for(let u=0;u<s.length;u+=4)o=s[u+3]/255,s[u]=s[u]*o,s[u+1]=s[u+1]*o,s[u+2]=s[u+2]*o;let l=s,c=e,h=t;const f=512;if(c>=f||h>=f){const r=c/h;r>1?(c=f,h=Math.round(f/r)):(h=f,c=Math.round(f*r)),l=new Uint8Array(4*c*h);const n=new Uint8ClampedArray(l.buffer);(0,u.TT)(s,e,t,n,c,h,!1)}return{size:[c,h],image:new Uint32Array(l.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}}},26554:(e,t,r)=>{r.d(t,{Y:()=>s,m:()=>o});var n=r(46228),i=r(16889);const a=e=>"vertical"===e||"horizontal"===e||"cross"===e||"esriSFSCross"===e||"esriSFSVertical"===e||"esriSFSHorizontal"===e;function s(e,t,r){const n=(0,i.fp)(Math.ceil(r)),s=a(t)?8*n:16*n,o=2*n;e.width=s,e.height=s;const u=e.getContext("2d");u.strokeStyle="#FFFFFF",u.lineWidth=n,u.beginPath(),"vertical"!==t&&"cross"!==t&&"esriSFSCross"!==t&&"esriSFSVertical"!==t||(u.moveTo(s/2,-o),u.lineTo(s/2,s+o)),"horizontal"!==t&&"cross"!==t&&"esriSFSCross"!==t&&"esriSFSHorizontal"!==t||(u.moveTo(-o,s/2),u.lineTo(s+o,s/2)),"forward-diagonal"!==t&&"diagonal-cross"!==t&&"esriSFSDiagonalCross"!==t&&"esriSFSForwardDiagonal"!==t||(u.moveTo(-o,-o),u.lineTo(s+o,s+o),u.moveTo(s-o,-o),u.lineTo(s+o,o),u.moveTo(-o,s-o),u.lineTo(o,s+o)),"backward-diagonal"!==t&&"diagonal-cross"!==t&&"esriSFSBackwardDiagonal"!==t&&"esriSFSDiagonalCross"!==t||(u.moveTo(s+o,-o),u.lineTo(-o,s+o),u.moveTo(o,-o),u.lineTo(-o,o),u.moveTo(s+o,s-o),u.lineTo(s-o,s+o)),u.stroke();const l=u.getImageData(0,0,e.width,e.height),c=new Uint8Array(l.data);let h;for(let i=0;i<c.length;i+=4)h=c[i+3]/255,c[i]=c[i]*h,c[i+1]=c[i+1]*h,c[i+2]=c[i+2]*h;return[c,e.width,e.height]}function o(e,t){const r="Butt"===t,i="Square"===t,a=!r&&!i;e.length%2==1&&(e=[...e,...e]);const s=15.5;let o=0;for(const n of e)o+=n;const u=Math.round(o*s),l=new Float32Array(31*u),c=7.75;let h=0,f=0,d=.5,p=!0;for(const n of e){for(h=f,f+=n*s;d<=f;){let e=.5;for(;e<31;){const t=(e-.5)*u+d-.5,n=a?(e-s)*(e-s):Math.abs(e-s);l[t]=p?r?Math.max(Math.max(h+c-d,n),Math.max(d-f+c,n)):n:a?Math.min((d-h)*(d-h)+n,(d-f)*(d-f)+n):i?Math.min(Math.max(d-h,n),Math.max(f-d,n)):Math.min(Math.max(d-h+c,n),Math.max(f+c-d,n)),e++}d++}p=!p}const m=l.length,v=new Uint8Array(4*m);for(let g=0;g<m;++g){const e=(a?Math.sqrt(l[g]):l[g])/s;(0,n.I)(e,v,4*g)}return[v,u,31]}}}]);
//# sourceMappingURL=4893.1f3f2f18.chunk.js.map