"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[8782],{13491:(e,t,i)=>{i.d(t,{Q:()=>o});var n=i(63780),s=i(92026),r=i(27546),a=i(36231);class o{constructor(e=9,t){this._compareMinX=u,this._compareMinY=c,this._toBBox=e=>e,this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),t&&("function"==typeof t?this._toBBox=t:this._initFormat(t)),this.clear()}destroy(){this.clear(),I.prune(),b.prune(),B.prune(),F.prune()}all(e){this._all(this._data,e)}search(e,t){let i=this._data;const n=this._toBBox;if(g(e,i))for(I.clear();i;){for(let s=0,r=i.children.length;s<r;s++){const r=i.children[s],a=i.leaf?n(r):r;g(e,a)&&(i.leaf?t(r):y(e,a)?this._all(r,t):I.push(r))}i=I.pop()}}collides(e){let t=this._data;const i=this._toBBox;if(!g(e,t))return!1;for(I.clear();t;){for(let n=0,s=t.children.length;n<s;n++){const s=t.children[n],r=t.leaf?i(s):s;if(g(e,r)){if(t.leaf||y(e,r))return!0;I.push(s)}}t=I.pop()}return!1}load(e){if(!e.length)return this;if(e.length<this._minEntries){for(let t=0,i=e.length;t<i;t++)this.insert(e[t]);return this}let t=this._build(e.slice(0,e.length),0,e.length-1,0);if(this._data.children.length)if(this._data.height===t.height)this._splitRoot(this._data,t);else{if(this._data.height<t.height){const e=this._data;this._data=t,t=e}this._insert(t,this._data.height-t.height-1,!0)}else this._data=t;return this}insert(e){return e&&this._insert(e,this._data.height-1),this}clear(){return this._data=new E([]),this}remove(e){if(!e)return this;let t,i=this._data,r=null,a=0,o=!1;const d=this._toBBox(e);for(B.clear(),F.clear();i||B.length>0;){if(i||(i=(0,s.j0)(B.pop()),r=B.data[B.length-1],a=F.pop()??0,o=!0),i.leaf&&(t=(0,n.cq)(i.children,e,i.children.length,i.indexHint),-1!==t))return i.children.splice(t,1),B.push(i),this._condense(B),this;o||i.leaf||!y(i,d)?r?(a++,i=r.children[a],o=!1):i=null:(B.push(i),F.push(a),a=0,r=i,i=i.children[0])}return this}toJSON(){return this._data}fromJSON(e){return this._data=e,this}_all(e,t){let i=e;for(b.clear();i;){if(!0===i.leaf)for(const e of i.children)t(e);else b.pushArray(i.children);i=b.pop()??null}}_build(e,t,i,n){const s=i-t+1;let r=this._maxEntries;if(s<=r){const n=new E(e.slice(t,i+1));return d(n,this._toBBox),n}n||(n=Math.ceil(Math.log(s)/Math.log(r)),r=Math.ceil(s/r**(n-1)));const a=new w([]);a.height=n;const o=Math.ceil(s/r),l=o*Math.ceil(Math.sqrt(r));x(e,t,i,l,this._compareMinX);for(let d=t;d<=i;d+=l){const t=Math.min(d+l-1,i);x(e,d,t,o,this._compareMinY);for(let i=d;i<=t;i+=o){const s=Math.min(i+o-1,t);a.children.push(this._build(e,i,s,n-1))}}return d(a,this._toBBox),a}_chooseSubtree(e,t,i,n){for(;n.push(t),!0!==t.leaf&&n.length-1!==i;){let i,n=1/0,s=1/0;for(let r=0,a=t.children.length;r<a;r++){const a=t.children[r],o=f(a),d=p(e,a)-o;d<s?(s=d,n=o<n?o:n,i=a):d===s&&o<n&&(n=o,i=a)}t=i||t.children[0]}return t}_insert(e,t,i){const n=this._toBBox,s=i?e:n(e);B.clear();const r=this._chooseSubtree(s,this._data,t,B);for(r.children.push(e),h(r,s);t>=0&&B.data[t].children.length>this._maxEntries;)this._split(B,t),t--;this._adjustParentBBoxes(s,B,t)}_split(e,t){const i=e.data[t],n=i.children.length,s=this._minEntries;this._chooseSplitAxis(i,s,n);const r=this._chooseSplitIndex(i,s,n);if(!r)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const a=i.children.splice(r,i.children.length-r),o=i.leaf?new E(a):new w(a);o.height=i.height,d(i,this._toBBox),d(o,this._toBBox),t?e.data[t-1].children.push(o):this._splitRoot(i,o)}_splitRoot(e,t){this._data=new w([e,t]),this._data.height=e.height+1,d(this._data,this._toBBox)}_chooseSplitIndex(e,t,i){let n,s,r;n=s=1/0;for(let a=t;a<=i-t;a++){const t=l(e,0,a,this._toBBox),o=l(e,a,i,this._toBBox),d=_(t,o),h=f(t)+f(o);d<n?(n=d,r=a,s=h<s?h:s):d===n&&h<s&&(s=h,r=a)}return r}_chooseSplitAxis(e,t,i){const n=e.leaf?this._compareMinX:u,s=e.leaf?this._compareMinY:c;this._allDistMargin(e,t,i,n)<this._allDistMargin(e,t,i,s)&&e.children.sort(n)}_allDistMargin(e,t,i,n){e.children.sort(n);const s=this._toBBox,r=l(e,0,t,s),a=l(e,i-t,i,s);let o=m(r)+m(a);for(let d=t;d<i-t;d++){const t=e.children[d];h(r,e.leaf?s(t):t),o+=m(r)}for(let d=i-t-1;d>=t;d--){const t=e.children[d];h(a,e.leaf?s(t):t),o+=m(a)}return o}_adjustParentBBoxes(e,t,i){for(let n=i;n>=0;n--)h(t.data[n],e)}_condense(e){for(let t=e.length-1;t>=0;t--){const i=e.data[t];if(0===i.children.length)if(t>0){const s=e.data[t-1],r=s.children;r.splice((0,n.cq)(r,i,r.length,s.indexHint),1)}else this.clear();else d(i,this._toBBox)}}_initFormat(e){const t=["return a"," - b",";"];this._compareMinX=new Function("a","b",t.join(e[0])),this._compareMinY=new Function("a","b",t.join(e[1])),this._toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}}function d(e,t){l(e,0,e.children.length,t,e)}function l(e,t,i,n,s){s||(s=new E([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let r,a=t;a<i;a++)r=e.children[a],h(s,e.leaf?n(r):r);return s}function h(e,t){e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY)}function u(e,t){return e.minX-t.minX}function c(e,t){return e.minY-t.minY}function f(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function m(e){return e.maxX-e.minX+(e.maxY-e.minY)}function p(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function _(e,t){const i=Math.max(e.minX,t.minX),n=Math.max(e.minY,t.minY),s=Math.min(e.maxX,t.maxX),r=Math.min(e.maxY,t.maxY);return Math.max(0,s-i)*Math.max(0,r-n)}function y(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function g(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function x(e,t,i,n,r){const o=[t,i];for(;o.length;){const t=(0,s.j0)(o.pop()),i=(0,s.j0)(o.pop());if(t-i<=n)continue;const d=i+Math.ceil((t-i)/n/2)*n;(0,a.q)(e,d,i,t,r),o.push(i,d,d,t)}}const I=new r.Z,b=new r.Z,B=new r.Z,F=new r.Z({deallocator:void 0});class v{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class M extends v{constructor(){super(...arguments),this.height=1,this.indexHint=new n.SO}}class E extends M{constructor(e){super(),this.children=e,this.leaf=!0}}class w extends M{constructor(e){super(),this.children=e,this.leaf=!1}}},66020:(e,t,i)=>{i.d(t,{H:()=>d});var n=i(93169),s=i(13491),r=i(65156);const a={minX:0,minY:0,maxX:0,maxY:0};function o(e,t,i){(function(e){a.minX=e[0],a.minY=e[1],a.maxX=e[2],a.maxY=e[3]})(t),e.search(a,i)}class d{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new s.Q(9,(0,n.Z)("esri-csp-restrictions")?e=>({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const e=new Array(this._idByBounds.size);let t=0;this._idByBounds.forEach(((i,n)=>{e[t++]=n})),this._indexInvalid=!1,this._index.clear(),this._index.load(e)}else this._boundsToLoad.length&&(this._index.load(Array.from(new Set(this._boundsToLoad.filter((e=>this._idByBounds.has(e)))))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const e=(0,r.cS)();for(const t of this._boundsById.values())t&&(e[0]=Math.min(t[0],e[0]),e[1]=Math.min(t[1],e[1]),e[2]=Math.max(t[2],e[2]),e[3]=Math.max(t[3],e[3]));return e}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(e){const t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}forEachInBounds(e,t){this._loadIndex(),o(this._index,e,(e=>t(this._idByBounds.get(e))))}get(e){return this._boundsById.get(e)}has(e){return this._boundsById.has(e)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(e,t){if(!this._indexInvalid){const t=this._boundsById.get(e);t&&(this._index.remove(t),this._idByBounds.delete(t))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},97114:(e,t,i)=>{i.d(t,{Z:()=>y});var n=i(10064),s=i(91505),r=i(32718),a=i(92026),o=i(41414),d=i(65156),l=i(83406),h=i(66020),u=i(12717),c=i(3182),f=i(80457);const m={getObjectId:e=>e.objectId,getAttributes:e=>e.attributes,getAttribute:(e,t)=>e.attributes[t],cloneWithGeometry:(e,t)=>new c.u_(t,e.attributes,null,e.objectId),getGeometry:e=>e.geometry,getCentroid:(e,t)=>((0,a.Wi)(e.centroid)&&(e.centroid=(0,u.Y)(new f.Z,e.geometry,t.hasZ,t.hasM)),e.centroid)};var p=i(31904);const _=(0,o.Ue)();class y{constructor(e){this.geometryInfo=e,this._boundsStore=new h.H,this._featuresById=new Map,this._markedIds=new Set,this.events=new s.Z,this.featureAdapter=m}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let e=0;return this._featuresById.forEach((t=>{(0,a.pC)(t.geometry)&&t.geometry.coords&&(e+=t.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}getFullExtent(e){if((0,a.Wi)(this.fullBounds))return null;const[t,i,n,s]=this.fullBounds;return{xmin:t,ymin:i,xmax:n,ymax:s,spatialReference:(0,p.S2)(e)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t){for(const i of e){const e=this._boundsStore.get(i.objectId);e&&t((0,o.JR)(_,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach((t=>e(t)))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,(e=>{t(this._featuresById.get(e))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach(((t,i)=>{this._markedIds.has(i)||(e=!0,this._remove(t))})),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(e){if(!e)return;const t=e.objectId;if(null==t)return void r.Z.getLogger("esri.layers.graphics.data.FeatureStore").error(new n.Z("featurestore:invalid-feature","feature id is missing",{feature:e}));const i=this._featuresById.get(t);let s;if(this._markedIds.add(t),i?(e.displayId=i.displayId,s=this._boundsStore.get(t),this._boundsStore.delete(t)):(0,a.pC)(this.onFeatureAdd)&&this.onFeatureAdd(e),(0,a.Wi)(e.geometry)||!e.geometry.coords||!e.geometry.coords.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);s=(0,l.$)((0,a.pC)(s)?s:(0,d.Ue)(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),(0,a.pC)(s)&&this._boundsStore.set(t,s),this._featuresById.set(t,e)}_remove(e){(0,a.pC)(this.onFeatureRemove)&&this.onFeatureRemove(e);const t=e.objectId;return this._markedIds.delete(t),this._boundsStore.delete(t),this._featuresById.delete(t),e}}},25820:(e,t,i)=>{i.d(t,{S:()=>s,X:()=>n});const n=1;function s(e,t){let i=0;for(const n of t){const t=n.attributes?.[e];"number"==typeof t&&isFinite(t)&&(i=Math.max(i,t))}return i}},48782:(e,t,i)=>{i.r(t),i.d(t,{default:()=>B});var n=i(10064),s=i(92026),r=i(77981),a=i(92975),o=i(83406),d=i(25820),l=i(97114),h=i(19995),u=i(14e3),c=i(63543),f=i(68808),m=i(52410),p=i(85249),_=i(80031);const y=a.Zn,g={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:a.Zn},x={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function I(e){return(0,r.wp)(e)?null!=e.z:!!e.hasZ}function b(e){return(0,r.wp)(e)?null!=e.m:!!e.hasM}class B{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(e){const t=[],{features:i}=e,s=this._inferLayerProperties(i,e.fields),r=e.fields||[],a=null!=e.hasM?e.hasM:!!s.hasM,o=null!=e.hasZ?e.hasZ:!!s.hasZ,f=!e.spatialReference&&!s.spatialReference,I=f?y:e.spatialReference||s.spatialReference,b=f?g:null,B=e.geometryType||s.geometryType,F=!B;let v=e.objectIdField||s.objectIdField,M=e.timeInfo;if(!F&&(f&&t.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!B))throw new n.Z("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!v)throw new n.Z("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(s.objectIdField&&v!==s.objectIdField&&(t.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${v}" doesn't match the field name "${s.objectIdField}", found in the provided fields`}),v=s.objectIdField),v&&!s.objectIdField){let e=null;r.some((t=>t.name===v&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):r.unshift({alias:v,name:v,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const d of r){if(null==d.name&&(d.name=d.alias),null==d.alias&&(d.alias=d.name),!d.name)throw new n.Z("feature-layer:invalid-field-name","field name is missing",{field:d});if(d.name===v&&(d.type="esriFieldTypeOID"),!p.v.jsonValues.includes(d.type))throw new n.Z("feature-layer:invalid-field-type",`invalid type for field "${d.name}"`,{field:d})}const E={};for(const n of r)if("esriFieldTypeOID"!==n.type&&"esriFieldTypeGlobalID"!==n.type){const e=(0,_.os)(n);void 0!==e&&(E[n.name]=e)}if(this._fieldsIndex=new m.Z(r),this._createDefaultAttributes=(0,c.Dm)(E,v),M){if(M.startTimeField){const e=this._fieldsIndex.get(M.startTimeField);e?(M.startTimeField=e.name,e.type="esriFieldTypeDate"):M.startTimeField=null}if(M.endTimeField){const e=this._fieldsIndex.get(M.endTimeField);e?(M.endTimeField=e.name,e.type="esriFieldTypeDate"):M.endTimeField=null}if(M.trackIdField){const e=this._fieldsIndex.get(M.trackIdField);e?M.trackIdField=e.name:(M.trackIdField=null,t.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:M}}))}M.startTimeField||M.endTimeField||(t.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:M}}),M=null)}const w={warnings:t,featureErrors:[],layerDefinition:{...x,drawingInfo:(0,c.bU)(B),templates:(0,c.Hq)(E),extent:b,geometryType:B,objectIdField:v,fields:r,hasZ:o,hasM:a,timeInfo:M},assignedObjectIds:{}};if(this._queryEngine=new u.q({fields:r,geometryType:B,hasM:a,hasZ:o,objectIdField:v,spatialReference:I,featureStore:new l.Z({geometryType:B,hasM:a,hasZ:o}),timeInfo:M,cacheSpatialQueries:!0}),!i||!i.length)return this._nextObjectId=d.X,w;const Y=(0,d.S)(v,i);return this._nextObjectId=Y+1,await(0,h._W)(i,I),this._loadInitialFeatures(w,i)}async applyEdits(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return await Promise.all([(0,f.b)(t,i),(0,h._W)(e.adds,t),(0,h._W)(e.updates,t)]),this._applyEdits(e)}queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,t){let i,n,a=null,o=null,d=null;for(const l of e){const e=l.geometry;if(!(0,s.Wi)(e)&&(a||(a=(0,r.Ji)(e)),o||(o=e.spatialReference),null==i&&(i=I(e)),null==n&&(n=b(e)),a&&o&&null!=i&&null!=n))break}if(t&&t.length){let e=null;t.some((t=>{const i="esriFieldTypeOID"===t.type,n=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,i||n}))&&(d=e.name)}return{geometryType:a,spatialReference:o,objectIdField:d,hasM:n,hasZ:i}}async _loadInitialFeatures(e,t){const{geometryType:i,hasM:n,hasZ:a,objectIdField:d,spatialReference:l,featureStore:u}=this._queryEngine,c=[];for(const o of t){if(null!=o.uid&&(e.assignedObjectIds[o.uid]=-1),o.geometry&&i!==(0,r.Ji)(o.geometry)){e.featureErrors.push((0,f.av)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),n=(0,f.O0)(this._fieldsIndex,t,o.attributes,!0,e.warnings);n?e.featureErrors.push(n):(this._assignObjectId(t,o.attributes,!0),o.attributes=t,null!=o.uid&&(e.assignedObjectIds[o.uid]=o.attributes[d]),(0,s.pC)(o.geometry)&&(o.geometry=(0,h.iV)(o.geometry,o.geometry.spatialReference,l)),c.push(o))}u.addMany((0,o.Yn)([],c,i,a,n,d));const{fullExtent:m,timeExtent:p}=await this._queryEngine.fetchRecomputedExtents();if(e.layerDefinition.extent=m,p){const{start:t,end:i}=p;e.layerDefinition.timeInfo.timeExtent=[t,i]}return e}async _applyEdits(e){const{adds:t,updates:i,deletes:n}=e,s={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(s,t),i&&i.length&&this._applyUpdateEdits(s,i),n&&n.length){for(const e of n)s.deleteResults.push((0,f.d1)(e));this._queryEngine.featureStore.removeManyById(n)}const{fullExtent:r,timeExtent:a}=await this._queryEngine.fetchRecomputedExtents();return{extent:r,timeExtent:a,featureEditResults:s}}_applyAddEdits(e,t){const{addResults:i}=e,{geometryType:n,hasM:a,hasZ:d,objectIdField:l,spatialReference:u,featureStore:c}=this._queryEngine,m=[];for(const o of t){if(o.geometry&&n!==(0,r.Ji)(o.geometry)){i.push((0,f.av)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),a=(0,f.O0)(this._fieldsIndex,t,o.attributes);if(a)i.push(a);else{if(this._assignObjectId(t,o.attributes),o.attributes=t,null!=o.uid){const t=o.attributes[l];e.uidToObjectId[o.uid]=t}if((0,s.pC)(o.geometry)){const e=o.geometry.spatialReference??u;o.geometry=(0,h.iV)((0,f.og)(o.geometry,e),e,u)}m.push(o),i.push((0,f.d1)(o.attributes[l]))}}c.addMany((0,o.Yn)([],m,n,d,a,l))}_applyUpdateEdits({updateResults:e},t){const{geometryType:i,hasM:n,hasZ:a,objectIdField:d,spatialReference:l,featureStore:u}=this._queryEngine;for(const c of t){const{attributes:t,geometry:m}=c,p=t&&t[d];if(null==p){e.push((0,f.av)(`Identifier field ${d} missing`));continue}if(!u.has(p)){e.push((0,f.av)(`Feature with object id ${p} missing`));continue}const _=(0,o.EI)(u.getFeature(p),i,a,n);if((0,s.pC)(m)){if(i!==(0,r.Ji)(m)){e.push((0,f.av)("Incorrect geometry type."));continue}const t=m.spatialReference??l;_.geometry=(0,h.iV)((0,f.og)(m,t),t,l)}if(t){const i=(0,f.O0)(this._fieldsIndex,_.attributes,t);if(i){e.push(i);continue}}u.add((0,o.XA)(_,i,a,n,d)),e.push((0,f.d1)(p))}}_assignObjectId(e,t,i=!1){const n=this._queryEngine.objectIdField;i&&t&&isFinite(t[n])?e[n]=t[n]:e[n]=this._nextObjectId++}}},68808:(e,t,i)=>{i.d(t,{O0:()=>c,av:()=>d,b:()=>_,d1:()=>h,og:()=>p});var n=i(92026),s=i(92975),r=i(80031);class a{constructor(){this.code=null,this.description=null}}class o{constructor(e){this.error=new a,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function d(e){return new o(e)}class l{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function h(e){return new l(e)}const u=new Set;function c(e,t,i,n=!1,s){u.clear();for(const a in i){const o=e.get(a);if(!o)continue;const l=i[a],h=f(o,l);if(h!==l&&s&&s.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:o,originalValue:l,sanitizedValue:h}}),u.add(o.name),o&&(n||o.editable)){const e=(0,r.Qc)(o,h);if(e)return d((0,r.vP)(e,o,h));t[o.name]=h}}for(const r of e?.requiredFields??[])if(!u.has(r.name))return d(`missing required field "${r.name}"`);return null}function f(e,t){let i=t;return"string"==typeof t&&(0,r.H7)(e)?i=parseFloat(t):null!=t&&(0,r.qN)(e)&&"string"!=typeof t&&(i=String(t)),(0,r.Pz)(i)}let m;function p(e,t){if(!e||!(0,s.JY)(t))return e;if("rings"in e||"paths"in e){if((0,n.Wi)(m))throw new TypeError("geometry engine not loaded");return m.simplify(t,e)}return e}async function _(e,t){!(0,s.JY)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return(0,n.Wi)(m)&&(m=await Promise.all([i.e(9058),i.e(3645)]).then(i.bind(i,50309))),m}()}}}]);
//# sourceMappingURL=8782.a84dded7.chunk.js.map