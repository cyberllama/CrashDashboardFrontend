"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[767],{13491:(t,e,n)=>{n.d(e,{Q:()=>h});var i=n(63780),s=n(92026),a=n(27546),r=n(36231);class h{constructor(t=9,e){this._compareMinX=m,this._compareMinY=d,this._toBBox=t=>t,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&("function"==typeof e?this._toBBox=e:this._initFormat(e)),this.clear()}destroy(){this.clear(),X.prune(),Y.prune(),B.prune(),w.prune()}all(t){this._all(this._data,t)}search(t,e){let n=this._data;const i=this._toBBox;if(g(t,n))for(X.clear();n;){for(let s=0,a=n.children.length;s<a;s++){const a=n.children[s],r=n.leaf?i(a):a;g(t,r)&&(n.leaf?e(a):p(t,r)?this._all(a,e):X.push(a))}n=X.pop()}}collides(t){let e=this._data;const n=this._toBBox;if(!g(t,e))return!1;for(X.clear();e;){for(let i=0,s=e.children.length;i<s;i++){const s=e.children[i],a=e.leaf?n(s):s;if(g(t,a)){if(e.leaf||p(t,a))return!0;X.push(s)}}e=X.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let e=0,n=t.length;e<n;e++)this.insert(t[e]);return this}let e=this._build(t.slice(0,t.length),0,t.length-1,0);if(this._data.children.length)if(this._data.height===e.height)this._splitRoot(this._data,e);else{if(this._data.height<e.height){const t=this._data;this._data=e,e=t}this._insert(e,this._data.height-e.height-1,!0)}else this._data=e;return this}insert(t){return t&&this._insert(t,this._data.height-1),this}clear(){return this._data=new S([]),this}remove(t){if(!t)return this;let e,n=this._data,a=null,r=0,h=!1;const o=this._toBBox(t);for(B.clear(),w.clear();n||B.length>0;){if(n||(n=(0,s.j0)(B.pop()),a=B.data[B.length-1],r=w.pop()??0,h=!0),n.leaf&&(e=(0,i.cq)(n.children,t,n.children.length,n.indexHint),-1!==e))return n.children.splice(e,1),B.push(n),this._condense(B),this;h||n.leaf||!p(n,o)?a?(r++,n=a.children[r],h=!1):n=null:(B.push(n),w.push(r),r=0,a=n,n=n.children[0])}return this}toJSON(){return this._data}fromJSON(t){return this._data=t,this}_all(t,e){let n=t;for(Y.clear();n;){if(!0===n.leaf)for(const t of n.children)e(t);else Y.pushArray(n.children);n=Y.pop()??null}}_build(t,e,n,i){const s=n-e+1;let a=this._maxEntries;if(s<=a){const i=new S(t.slice(e,n+1));return o(i,this._toBBox),i}i||(i=Math.ceil(Math.log(s)/Math.log(a)),a=Math.ceil(s/a**(i-1)));const r=new v([]);r.height=i;const h=Math.ceil(s/a),l=h*Math.ceil(Math.sqrt(a));M(t,e,n,l,this._compareMinX);for(let o=e;o<=n;o+=l){const e=Math.min(o+l-1,n);M(t,o,e,h,this._compareMinY);for(let n=o;n<=e;n+=h){const s=Math.min(n+h-1,e);r.children.push(this._build(t,n,s,i-1))}}return o(r,this._toBBox),r}_chooseSubtree(t,e,n,i){for(;i.push(e),!0!==e.leaf&&i.length-1!==n;){let n,i=1/0,s=1/0;for(let a=0,r=e.children.length;a<r;a++){const r=e.children[a],h=u(r),o=f(t,r)-h;o<s?(s=o,i=h<i?h:i,n=r):o===s&&h<i&&(i=h,n=r)}e=n||e.children[0]}return e}_insert(t,e,n){const i=this._toBBox,s=n?t:i(t);B.clear();const a=this._chooseSubtree(s,this._data,e,B);for(a.children.push(t),c(a,s);e>=0&&B.data[e].children.length>this._maxEntries;)this._split(B,e),e--;this._adjustParentBBoxes(s,B,e)}_split(t,e){const n=t.data[e],i=n.children.length,s=this._minEntries;this._chooseSplitAxis(n,s,i);const a=this._chooseSplitIndex(n,s,i);if(!a)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const r=n.children.splice(a,n.children.length-a),h=n.leaf?new S(r):new v(r);h.height=n.height,o(n,this._toBBox),o(h,this._toBBox),e?t.data[e-1].children.push(h):this._splitRoot(n,h)}_splitRoot(t,e){this._data=new v([t,e]),this._data.height=t.height+1,o(this._data,this._toBBox)}_chooseSplitIndex(t,e,n){let i,s,a;i=s=1/0;for(let r=e;r<=n-e;r++){const e=l(t,0,r,this._toBBox),h=l(t,r,n,this._toBBox),o=_(e,h),c=u(e)+u(h);o<i?(i=o,a=r,s=c<s?c:s):o===i&&c<s&&(s=c,a=r)}return a}_chooseSplitAxis(t,e,n){const i=t.leaf?this._compareMinX:m,s=t.leaf?this._compareMinY:d;this._allDistMargin(t,e,n,i)<this._allDistMargin(t,e,n,s)&&t.children.sort(i)}_allDistMargin(t,e,n,i){t.children.sort(i);const s=this._toBBox,a=l(t,0,e,s),r=l(t,n-e,n,s);let h=x(a)+x(r);for(let o=e;o<n-e;o++){const e=t.children[o];c(a,t.leaf?s(e):e),h+=x(a)}for(let o=n-e-1;o>=e;o--){const e=t.children[o];c(r,t.leaf?s(e):e),h+=x(r)}return h}_adjustParentBBoxes(t,e,n){for(let i=n;i>=0;i--)c(e.data[i],t)}_condense(t){for(let e=t.length-1;e>=0;e--){const n=t.data[e];if(0===n.children.length)if(e>0){const s=t.data[e-1],a=s.children;a.splice((0,i.cq)(a,n,a.length,s.indexHint),1)}else this.clear();else o(n,this._toBBox)}}_initFormat(t){const e=["return a"," - b",";"];this._compareMinX=new Function("a","b",e.join(t[0])),this._compareMinY=new Function("a","b",e.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function o(t,e){l(t,0,t.children.length,e,t)}function l(t,e,n,i,s){s||(s=new S([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let a,r=e;r<n;r++)a=t.children[r],c(s,t.leaf?i(a):a);return s}function c(t,e){t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY)}function m(t,e){return t.minX-e.minX}function d(t,e){return t.minY-e.minY}function u(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function x(t){return t.maxX-t.minX+(t.maxY-t.minY)}function f(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function _(t,e){const n=Math.max(t.minX,e.minX),i=Math.max(t.minY,e.minY),s=Math.min(t.maxX,e.maxX),a=Math.min(t.maxY,e.maxY);return Math.max(0,s-n)*Math.max(0,a-i)}function p(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function g(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function M(t,e,n,i,a){const h=[e,n];for(;h.length;){const e=(0,s.j0)(h.pop()),n=(0,s.j0)(h.pop());if(e-n<=i)continue;const o=n+Math.ceil((e-n)/i/2)*i;(0,r.q)(t,o,n,e,a),h.push(n,o,o,e)}}const X=new a.Z,Y=new a.Z,B=new a.Z,w=new a.Z({deallocator:void 0});class b{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class A extends b{constructor(){super(...arguments),this.height=1,this.indexHint=new i.SO}}class S extends A{constructor(t){super(),this.children=t,this.leaf=!0}}class v extends A{constructor(t){super(),this.children=t,this.leaf=!1}}},30767:(t,e,n)=>{n.r(e),n.d(e,{default:()=>h});var i=n(93169),s=n(92026),a=n(13491),r=n(57898);class h{async createIndex(t,e){const n=new Array;if(!t.vertexAttributes||!t.vertexAttributes.position)return new a.Q;const i=this._createMeshData(t),r=(0,s.pC)(e)?await e.invoke("createIndexThread",i,{transferList:n}):this.createIndexThread(i).result;return this._createPooledRBush().fromJSON(r)}createIndexThread(t){const e=new Float64Array(t.position),n=this._createPooledRBush();return t.components?this._createIndexComponentsThread(n,e,t.components.map((t=>new Uint32Array(t)))):this._createIndexAllThread(n,e)}_createIndexAllThread(t,e){const n=new Array(e.length/9);let i=0;for(let s=0;s<e.length;s+=9)n[i++]=o(e,s+0,s+3,s+6);return t.load(n),{result:t.toJSON()}}_createIndexComponentsThread(t,e,n){let i=0;for(const r of n)i+=r.length/3;const s=new Array(i);let a=0;for(const r of n)for(let t=0;t<r.length;t+=3)s[a++]=o(e,3*r[t+0],3*r[t+1],3*r[t+2]);return t.load(s),{result:t.toJSON()}}_createMeshData(t){const e=(t.transform?(0,r.I5)({position:t.vertexAttributes.position,normal:null,tangent:null},t.transform,t.spatialReference).position:t.vertexAttributes.position).buffer;return!t.components||t.components.some((t=>!t.faces))?{position:e}:{position:e,components:t.components.map((t=>t.faces))}}_createPooledRBush(){return new a.Q(9,(0,i.Z)("esri-csp-restrictions")?t=>t:[".minX",".minY",".maxX",".maxY"])}}function o(t,e,n,i){return{minX:Math.min(t[e+0],t[n+0],t[i+0]),maxX:Math.max(t[e+0],t[n+0],t[i+0]),minY:Math.min(t[e+1],t[n+1],t[i+1]),maxY:Math.max(t[e+1],t[n+1],t[i+1]),p0:[t[e+0],t[e+1],t[e+2]],p1:[t[n+0],t[n+1],t[n+2]],p2:[t[i+0],t[i+1],t[i+2]]}}}}]);
//# sourceMappingURL=767.60353b84.chunk.js.map