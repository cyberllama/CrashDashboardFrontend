"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[4315],{82582:(e,t,r)=>{r.d(t,{dp:()=>a,yZ:()=>n});var i=r(68860);const s=96;function n(e,t){const r=t||e.extent,n=e.width,a=(0,i.c9)(r&&r.spatialReference);return r&&n?r.width/n*a*i.hd*s:0}function a(e,t){return e/((0,i.c9)(t)*i.hd*s)}},87072:(e,t,r)=>{function i(e){const t=e.layer;return"floorInfo"in t&&t.floorInfo?.floorField&&"floors"in e.view?n(e.view.floors,t.floorInfo.floorField):null}function s(e,t){return"floorInfo"in t&&t.floorInfo?.floorField?n(e,t.floorInfo.floorField):null}function n(e,t){if(!e?.length)return null;const r=e.filter((e=>""!==e)).map((e=>`'${e}'`));return r.push("''"),`${t} IN (${r.join(",")}) OR ${t} IS NULL`}r.d(t,{c:()=>i,f:()=>s})},58132:(e,t,r)=>{r.d(t,{FN:()=>a,QV:()=>n,ac:()=>l});var i=r(92026),s=r(25265);function n(e,t,r){const i=t.flatten((({sublayers:e})=>e)).length;return i!==e.length||(!!e.some((e=>e.originIdOf("minScale")>r||e.originIdOf("maxScale")>r||e.originIdOf("renderer")>r||e.originIdOf("labelingInfo")>r||e.originIdOf("opacity")>r||e.originIdOf("labelsVisible")>r||e.originIdOf("source")>r))||!o(e,t))}function a(e,t,r){return!!e.some((e=>{const t=e.source;return!(!t||"map-layer"===t.type&&t.mapLayerId===e.id&&((0,i.Wi)(t.gdbVersion)||t.gdbVersion===r))||e.originIdOf("renderer")>s.s3.SERVICE||e.originIdOf("labelingInfo")>s.s3.SERVICE||e.originIdOf("opacity")>s.s3.SERVICE||e.originIdOf("labelsVisible")>s.s3.SERVICE}))||!o(e,t)}function o(e,t){if(!e||!e.length||(0,i.Wi)(t))return!0;const r=t.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).map((e=>e.id)).toArray();if(e.length>r.length)return!1;let s=0;const n=r.length;for(const{id:i}of e){for(;s<n&&r[s]!==i;)s++;if(s>=n)return!1}return!0}function l(e){return!!e&&e.some((e=>null!=e.minScale||e.layerDefinition&&null!=e.layerDefinition.minScale))}},39383:(e,t,r)=>{r.d(t,{T:()=>g});var i=r(66978),s=r(43e3),n=r(26885),a=r(55067),o=r(92026),l=r(17842),u=r(68860),c=r(49229),p=r(84319),h=r(10435),d=r(98029),f=r(90316);function y(e,t){const r=t.length;if(e<t[0].value||1===r)return t[0].size;for(let i=1;i<r;i++)if(e<t[i].value){const r=(e-t[i-1].value)/(t[i].value-t[i-1].value);return t[i-1].size+r*(t[i].size-t[i-1].size)}return t[r-1].size}class m{constructor(){this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this.outsideLabelsVisible=!1,this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1},this._technique=h.v}getSizeVVFieldStops(e){const t=this._vvSizeFieldStops;if(t)switch(t.type){case"static":return t;case"level-dependent":return(0,o.Pt)(t.levels[e],(()=>{let r=1/0,i=0;for(const o in t.levels){const t=parseFloat(o),s=Math.abs(e-t);s<r&&(r=s,i=t)}if(r===1/0)return{sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])};const s=2**((e-i)/2),n=(0,o.Wg)(t.levels[i]),a=new Float32Array(n.values);return a[2]*=s,a[3]*=s,{sizes:(0,o.Wg)(n.sizes),values:a}}));default:return}}get vvMaterialParameters(){return this._vvMaterialParameters}update(e){(0,o.pC)(this._vvInfo)&&this._updateVisualVariables(this._vvInfo.vvRanges,e)}setInfo(e,t,r){this._updateEffects(r),this._vvInfo=t,this._technique=(0,d.EJ)(e),this.rendererSchema=this._technique.createOrUpdateRendererSchema(this.rendererSchema,e)}getVariation(){return{...this._technique.getVariation(this.rendererSchema),outsideLabelsVisible:this.outsideLabelsVisible,supportsTextureFloat:(0,f.hc)("2d").supportsTextureFloat}}getVariationHash(){return this._technique.getVariationHash(this.rendererSchema)<<1|(this.outsideLabelsVisible?1:0)}_updateEffects(e){(0,o.pC)(e)?this.outsideLabelsVisible=e.excludedLabelsVisible:this.outsideLabelsVisible=!1}_updateVisualVariables(e,t){const r=this._vvMaterialParameters;if(r.vvOpacityEnabled=!1,r.vvSizeEnabled=!1,r.vvColorEnabled=!1,r.vvRotationEnabled=!1,!e)return;const i=e.size;if(i){if(r.vvSizeEnabled=!0,i.minMaxValue){const e=i.minMaxValue;let r,s;if((0,p.$K)(e.minSize)&&(0,p.$K)(e.maxSize))if((0,p.hj)(e.minSize)&&(0,p.hj)(e.maxSize))r=(0,l.F2)(e.minSize),s=(0,l.F2)(e.maxSize);else{const i=t.scale;r=(0,l.F2)(y(i,e.minSize.stops)),s=(0,l.F2)(y(i,e.maxSize.stops))}this.vvSizeMinMaxValue.set([e.minDataValue,e.maxDataValue,r,s])}if(i.scaleStops&&(this.vvSizeScaleStopsValue=(0,l.F2)(y(t.scale,i.scaleStops.stops))),i.unitValue){const e=(0,u.c9)(t.spatialReference)/c.a[i.unitValue.unit];this.vvSizeUnitValueToPixelsRatio=e/t.resolution}i.fieldStops&&(this._vvSizeFieldStops=i.fieldStops)}const s=e.color;s&&(r.vvColorEnabled=!0,this.vvColorValues.set(s.values),this.vvColors.set(s.colors));const n=e.opacity;n&&(r.vvOpacityEnabled=!0,this.vvOpacityValues.set(n.values),this.vvOpacities.set(n.opacities));const a=e.rotation;a&&(r.vvRotationEnabled=!0,r.vvRotationType=a.type)}}class g extends a.Z{constructor(e){super(e),this._rendererInfo=new m,this._materialItemsRequestQueue=new s.Z,this.attributeView=new n.H((()=>this.onAttributeStoreUpdate()))}destroy(){this.children.forEach((e=>e.destroy())),this.removeAllChildren(),this.attributeView.destroy(),this._materialItemsRequestQueue.clear()}setRendererInfo(e,t,r){this._rendererInfo.setInfo(e,t,r),this.requestRender()}async getMaterialItems(e,t){if(!e||0===e.length)return[];const r=(0,i.hh)();return this._materialItemsRequestQueue.push({items:e,abortOptions:t,resolver:r}),this.requestRender(),r.promise}doRender(e){if(e.context.capabilities.enable("textureFloat"),e.context.capabilities.enable("vao"),this._materialItemsRequestQueue.length>0){let t=this._materialItemsRequestQueue.pop();for(;t;)this._processMaterialItemRequest(e,t),t=this._materialItemsRequestQueue.pop()}super.doRender(e)}renderChildren(e){for(const t of this.children)t.commit(e);this._rendererInfo.update(e.state),super.renderChildren(e)}updateTransforms(e){if(this.children.some((e=>e.hasData)))for(const t of this.children)t.setTransform(e)}createRenderParams(e){const t=super.createRenderParams(e);return t.rendererInfo=this._rendererInfo,t.attributeView=this.attributeView,t}onAttributeStoreUpdate(){}_processMaterialItemRequest(e,{items:t,abortOptions:r,resolver:i}){const{painter:s,pixelRatio:n}=e,a=t.map((e=>s.textureManager.rasterizeItem(e.symbol,n,e.glyphIds,r)));Promise.all(a).then((e=>{if(!this.stage)return void i.reject();const r=e.map(((e,r)=>({id:t[r].id,mosaicItem:e})));i.resolve(r)}),i.reject)}}},55067:(e,t,r)=>{r.d(t,{Z:()=>u});var i=r(93169),s=r(80613),n=r(64510),a=r(52424),o=r(40655);const l=(e,t)=>e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col;class u extends n.Z{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(l),this.setStencilReference(e),super.renderChildren(e)}createRenderParams(e){const{state:t}=e,r=super.createRenderParams(e);return r.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,r.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(t.scale),r}prepareRenderPasses(e){const t=super.prepareRenderPasses(e);return t.push(e.registerRenderPass({name:"stencil",brushes:[o.Z],drawPhase:s.jx.DEBUG|s.jx.MAP|s.jx.HIGHLIGHT,target:()=>this.getStencilTarget()})),(0,i.Z)("esri-tiles-debug")&&t.push(e.registerRenderPass({name:"tileInfo",brushes:[a.Z],drawPhase:s.jx.DEBUG,target:()=>this.children})),t}getStencilTarget(){return this.children}setStencilReference(e){let t=1;for(const r of this.children)r.stencilRef=t++}}},82022:(e,t,r)=>{r.d(t,{Z:()=>v});var i=r(92026),s=r(39383),n=r(22753),a=r(23588),o=r(15245),l=r(8229),u=r(91340),c=r(87422),p=r(84319),h=r(44070),d=r(8548),f=r(45412);const y=Math.PI/180;class m extends c.s{constructor(e){super(),this._program=null,this._vao=null,this._vertexBuffer=null,this._indexBuffer=null,this._dvsMat3=(0,a.c)(),this._localOrigin={x:0,y:0},this._getBounds=e}destroy(){this._vao&&(this._vao.dispose(!0),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=(0,i.M2)(this._program)}doRender(e){const{context:t}=e,r=this._getBounds();if(r.length<1)return;this._createShaderProgram(t),this._updateMatricesAndLocalOrigin(e),this._updateBufferData(t,r),t.setBlendingEnabled(!0),t.setDepthTestEnabled(!1),t.setStencilWriteMask(0),t.setStencilTestEnabled(!1),t.setBlendFunction(d.zi.ONE,d.zi.ONE_MINUS_SRC_ALPHA),t.setColorMask(!0,!0,!0,!0);const i=this._program;t.bindVAO(this._vao),t.useProgram(i),i.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),t.gl.lineWidth(1),t.drawElements(d.MX.LINES,8*r.length,d.g.UNSIGNED_INT,0),t.bindVAO()}_createTransforms(){return{dvs:(0,a.c)()}}_createShaderProgram(e){if(this._program)return;this._program=e.programCache.acquire("precision highp float;\n        uniform mat3 u_dvsMat3;\n\n        attribute vec2 a_position;\n\n        void main() {\n          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);\n          gl_Position = vec4(pos.xy, 0.0, 1.0);\n        }","precision mediump float;\n      void main() {\n        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);\n      }",g().attributes)}_updateMatricesAndLocalOrigin(e){const{state:t}=e,{displayMat3:r,size:i,resolution:s,pixelRatio:a,rotation:c,viewpoint:p}=t,h=y*c,{x:d,y:f}=p.targetGeometry,m=(0,u.or)(d,t.spatialReference);this._localOrigin.x=m,this._localOrigin.y=f;const g=a*i[0],v=a*i[1],b=s*g,_=s*v,w=(0,n.g)(this._dvsMat3);(0,n.m)(w,w,r),(0,n.h)(w,w,(0,o.f)(g/2,v/2)),(0,n.d)(w,w,(0,l.f)(i[0]/b,-v/_,1)),(0,n.r)(w,w,-h)}_updateBufferData(e,t){const{x:r,y:i}=this._localOrigin,s=8*t.length,n=new Float32Array(s),a=new Uint32Array(8*t.length);let o=0,l=0;for(const u of t)u&&(n[2*o+0]=u[0]-r,n[2*o+1]=u[1]-i,n[2*o+2]=u[0]-r,n[2*o+3]=u[3]-i,n[2*o+4]=u[2]-r,n[2*o+5]=u[3]-i,n[2*o+6]=u[2]-r,n[2*o+7]=u[1]-i,a[l+0]=o+0,a[l+1]=o+3,a[l+2]=o+3,a[l+3]=o+2,a[l+4]=o+2,a[l+5]=o+1,a[l+6]=o+1,a[l+7]=o+0,o+=4,l+=8);if(this._vertexBuffer?this._vertexBuffer.setData(n.buffer):this._vertexBuffer=h.f.createVertex(e,d.l1.DYNAMIC_DRAW,n.buffer),this._indexBuffer?this._indexBuffer.setData(a):this._indexBuffer=h.f.createIndex(e,d.l1.DYNAMIC_DRAW,a),!this._vao){const t=g();this._vao=new f.U(e,t.attributes,t.bufferLayouts,{geometry:this._vertexBuffer},this._indexBuffer)}}}const g=()=>(0,p.cM)("bounds",{geometry:[{location:0,name:"a_position",count:2,type:d.g.FLOAT}]});let v=class extends s.T{constructor(e){super(e),this.hasHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer=(0,i.SC)(this._boundsRenderer)}enableRenderingBounds(e){this._boundsRenderer=new m(e),this.requestRender()}get hasLabels(){return!1}onTileData(e,t){e.patch(t),this.contains(e)||this.addChild(e),this.requestRender()}onTileError(e){e.clear(),this.contains(e)||this.addChild(e)}_renderChildren(e,t){for(const r of this.children)r.isReady&&r.hasData&&(r.commit(e),e.context.setStencilFunction(d.wb.EQUAL,r.stencilRef,255),r.getDisplayList().replay(e,r,t))}}},83978:(e,t,r)=>{r.d(t,{Z:()=>u});var i=r(27366),s=(r(32718),r(25243),r(63780),r(10064),r(93169),r(69912)),n=r(80613),a=r(82022),o=r(8548);let l=class extends a.Z{doRender(e){e.drawPhase===n.jx.HIGHLIGHT&&super.doRender(e)}renderChildren(e){if(this.attributeView.update(),!this.children.some((e=>e.hasData)))return;this.attributeView.bindTextures(e.context),super.renderChildren(e);const{painter:t}=e,r=t.effects.highlight;r.bind(e),e.context.setColorMask(!0,!0,!0,!0),e.context.clear(o.lk.COLOR_BUFFER_BIT),this._renderChildren(e,r.defines.concat(["highlightAll"])),r.draw(e),r.unbind()}};l=(0,i._)([(0,s.j)("esri.views.2d.layers.support.HighlightGraphicContainer")],l);const u=l},13107:(e,t,r)=>{r.d(t,{Z:()=>u});var i=r(27366),s=r(32718),n=r(66978),a=r(94172),o=r(49861),l=(r(25243),r(63780),r(69912));const u=e=>{let t=class extends e{initialize(){this.handles.add((0,a.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,n.D_)(e)||s.Z.getLogger(this.declaredClass).error(e)}))})),"RefreshableLayerView")}};return(0,i._)([(0,o.Cb)()],t.prototype,"layer",void 0),t=(0,i._)([(0,l.j)("esri.layers.mixins.RefreshableLayerView")],t),t}},84848:(e,t,r)=>{r.d(t,{VF:()=>X,Uf:()=>K});var i=r(27366),s=r(52639),n=r(85015),a=r(40281),o=r(10064),l=r(93169),u=r(77427),c=r(92026),p=r(66978),h=r(94172),d=r(68860),f=r(49861),y=r(25243),m=(r(63780),r(69912)),g=r(53866),v=r(82582),b=r(87072);function _(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function w(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?function(e){let t=0,r=0;for(let i=0;i<e.length;i++){const s=e[i].size;"number"==typeof s&&(t+=s,r++)}return t/r}(e.stops):t}function x(e,t){if(!t)return e;const r=t.filter((e=>"size"===e.type)).map((t=>{const{maxSize:r,minSize:i}=t;return(w(r,e)+w(i,e))/2}));let i=0;const s=r.length;if(0===s)return e;for(let a=0;a<s;a++)i+=r[a];const n=Math.floor(i/s);return Math.max(n,e)}function I(e){const t=e&&e.renderer,r="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!t)return r;const i="visualVariables"in t?x(r,t.visualVariables):r;if("simple"===t.type)return _(i,t.symbol);if("unique-value"===t.type){let e=i;return t.uniqueValueInfos?.forEach((t=>{e=_(e,t.symbol)})),e}if("class-breaks"===t.type){let e=i;return t.classBreakInfos.forEach((t=>{e=_(e,t.symbol)})),e}return"dot-density"===t.type||t.type,i}var S=r(76200),R=r(91340),C=r(23084),V=r(76672),F=r(77981),E=r(58132);const O=e=>e.spatialReference.wkid||JSON.stringify(e.spatialReference);function M(e,t){const{dpi:r,gdbVersion:i,geometry:s,geometryPrecision:n,height:a,layerOption:o,mapExtent:l,maxAllowableOffset:u,returnFieldName:p,returnGeometry:h,returnUnformattedValues:d,returnZ:f,spatialReference:y,timeExtent:m,tolerance:g,width:v}=e.toJSON(),{dynamicLayers:b,layerDefs:_,layerIds:w}=P(e),x=t&&(0,c.pC)(t.geometry)?t.geometry:null,I={geometryPrecision:n,maxAllowableOffset:u,returnFieldName:p,returnGeometry:h,returnUnformattedValues:d,returnZ:f,tolerance:g},S=x&&x.toJSON()||s;if(I.imageDisplay=`${v},${a},${r}`,i&&(I.gdbVersion=i),S&&(delete S.spatialReference,I.geometry=JSON.stringify(S),I.geometryType=(0,F.Ji)(S)),y?I.sr=y.wkid||JSON.stringify(y):S&&S.spatialReference?I.sr=O(S):l&&l.spatialReference&&(I.sr=O(l)),I.time=m?[m.start,m.end].join(","):null,l){const{xmin:e,ymin:t,xmax:r,ymax:i}=l;I.mapExtent=`${e},${t},${r},${i}`}return _&&(I.layerDefs=_),b&&!_&&(I.dynamicLayers=b),I.layers="popup"===o?"visible":o,w&&!b&&(I.layers+=`:${w.join(",")}`),I}function P(e){const{mapExtent:t,floors:r,width:i,sublayers:s,layerIds:n,layerOption:a,gdbVersion:o}=e,l=s?.find((e=>null!=e.layer))?.layer?.serviceSublayers,u="popup"===a,p={},h=(0,v.yZ)({extent:t,width:i,spatialReference:t?.spatialReference}),d=[],f=e=>{const t=0===h,r=0===e.minScale||h<=e.minScale,i=0===e.maxScale||h>=e.maxScale;if(e.visible&&(t||r&&i))if(e.sublayers)e.sublayers.forEach(f);else{if(!1===n?.includes(e.id)||u&&(!e.popupTemplate||!e.popupEnabled))return;d.unshift(e)}};if(s?.forEach(f),s&&!d.length)p.layerIds=[];else{const e=(0,E.FN)(d,l,o),t=d.map((e=>{const t=(0,b.f)(r,e);return e.toExportImageJSON(t)}));if(e)p.dynamicLayers=JSON.stringify(t);else{if(s){let e=d.map((({id:e})=>e));n&&(e=e.filter((e=>n.includes(e)))),p.layerIds=e}else n?.length&&(p.layerIds=n);const e=function(e,t){const r=!!e?.length,i=t.filter((e=>null!=e.definitionExpression||r&&null!=e.floorInfo));return i.length?i.map((t=>{const r=(0,b.f)(e,t),i=(0,V._)(r,t.definitionExpression);return{id:t.id,definitionExpression:(0,c.Pt)(i,void 0)}})):null}(r,d);if((0,c.pC)(e)&&e.length){const t={};for(const r of e)r.definitionExpression&&(t[r.id]=r.definitionExpression);Object.keys(t).length&&(p.layerDefs=JSON.stringify(t))}}}return p}var A,T=r(59486),j=r(62044),L=r(46784),z=r(78952);let N=A=class extends L.wq{static from(e){return(0,y.TJ)(A,e)}constructor(e){super(e),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}};(0,i._)([(0,f.Cb)({type:Number,json:{write:!0}})],N.prototype,"dpi",void 0),(0,i._)([(0,f.Cb)()],N.prototype,"floors",void 0),(0,i._)([(0,f.Cb)({type:String,json:{write:!0}})],N.prototype,"gdbVersion",void 0),(0,i._)([(0,f.Cb)({types:T.qM,json:{read:F.im,write:!0}})],N.prototype,"geometry",void 0),(0,i._)([(0,f.Cb)({type:Number,json:{write:!0}})],N.prototype,"geometryPrecision",void 0),(0,i._)([(0,f.Cb)({type:Number,json:{write:!0}})],N.prototype,"height",void 0),(0,i._)([(0,f.Cb)({type:[Number],json:{write:!0}})],N.prototype,"layerIds",void 0),(0,i._)([(0,f.Cb)({type:["top","visible","all","popup"],json:{write:!0}})],N.prototype,"layerOption",void 0),(0,i._)([(0,f.Cb)({type:g.Z,json:{write:!0}})],N.prototype,"mapExtent",void 0),(0,i._)([(0,f.Cb)({type:Number,json:{write:!0}})],N.prototype,"maxAllowableOffset",void 0),(0,i._)([(0,f.Cb)({type:Boolean,json:{write:!0}})],N.prototype,"returnFieldName",void 0),(0,i._)([(0,f.Cb)({type:Boolean,json:{write:!0}})],N.prototype,"returnGeometry",void 0),(0,i._)([(0,f.Cb)({type:Boolean,json:{write:!0}})],N.prototype,"returnM",void 0),(0,i._)([(0,f.Cb)({type:Boolean,json:{write:!0}})],N.prototype,"returnUnformattedValues",void 0),(0,i._)([(0,f.Cb)({type:Boolean,json:{write:!0}})],N.prototype,"returnZ",void 0),(0,i._)([(0,f.Cb)({type:z.Z,json:{write:!0}})],N.prototype,"spatialReference",void 0),(0,i._)([(0,f.Cb)()],N.prototype,"sublayers",void 0),(0,i._)([(0,f.Cb)({type:j.Z,json:{write:!0}})],N.prototype,"timeExtent",void 0),(0,i._)([(0,f.Cb)({type:Number,json:{write:!0}})],N.prototype,"tolerance",void 0),(0,i._)([(0,f.Cb)({type:Number,json:{write:!0}})],N.prototype,"width",void 0),N=A=(0,i._)([(0,m.j)("esri.rest.support.IdentifyParameters")],N);const Z=N;var G=r(38511),q=r(31201),B=r(27823);let U=class extends L.wq{constructor(e){super(e),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(e,t){return s.Z.fromJSON({attributes:{...t.attributes},geometry:{...t.geometry}})}writeFeature(e,t){if(!e)return;const{attributes:r,geometry:i}=e;r&&(t.attributes={...r}),(0,c.pC)(i)&&(t.geometry=i.toJSON(),t.geometryType=B.P.toJSON(i.type))}};(0,i._)([(0,f.Cb)({type:String,json:{write:!0}})],U.prototype,"displayFieldName",void 0),(0,i._)([(0,f.Cb)({type:s.Z})],U.prototype,"feature",void 0),(0,i._)([(0,G.r)("feature",["attributes","geometry"])],U.prototype,"readFeature",null),(0,i._)([(0,q.c)("feature")],U.prototype,"writeFeature",null),(0,i._)([(0,f.Cb)({type:Number,json:{write:!0}})],U.prototype,"layerId",void 0),(0,i._)([(0,f.Cb)({type:String,json:{write:!0}})],U.prototype,"layerName",void 0),U=(0,i._)([(0,m.j)("esri.rest.support.IdentifyResult")],U);const D=U;async function k(e,t,r){const i=(t=function(e){return Z.from(e)}(t)).geometry?[t.geometry]:[],s=(0,C.en)(e);return s.path+="/identify",(0,R.aX)(i).then((e=>{const i=M(t,{geometry:e&&e[0]}),n=(0,C.cv)({...s.query,f:"json",...i}),a=(0,C.lA)(n,r);return(0,S.default)(s.path,a).then(H).then((e=>function(e,t){if(!t?.length)return e;const r=new Map;function i(e){r.set(e.id,e),e.sublayers&&e.sublayers.forEach(i)}t.forEach(i);for(const s of e.results)s.feature.sourceLayer=r.get(s.layerId);return e}(e,t.sublayers)))}))}function H(e){const t=e.data;return t.results=t.results||[],t.exceededTransferLimit=Boolean(t.exceededTransferLimit),t.results=t.results.map((e=>D.fromJSON(e))),t}var Q=r(819),$=r(16072),J=r(24405);let W=null;function K(e,t){return"tile"===t.type||"map-image"===t.type}let X=class extends n.Z{constructor(e){super(e),this._featuresResolutions=new WeakMap,this.highlightGraphics=null,this.highlightGraphicUpdated=null,this.updateHighlightedFeatures=(0,p.Ds)((async e=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e).catch((()=>{})))}))}initialize(){const e=e=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e).catch((()=>{}))),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([(0,h.on)((()=>this.highlightGraphics),"change",(t=>e(t.added)),{onListenerAdd:t=>e(t)})])}async fetchPopupFeatures(e,t){const{layerView:{layer:r,view:{scale:i}}}=this;if(!e)throw new o.Z("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:r});const s=function(e,t,r){const i=[],s=e=>{const n=0===e.minScale||t<=e.minScale,a=0===e.maxScale||t>=e.maxScale;if(e.visible&&n&&a)if(e.sublayers)e.sublayers.forEach(s);else if(e.popupEnabled){const t=(0,J.V)(e,{...r,defaultPopupTemplateEnabled:!1});(0,c.pC)(t)&&i.unshift({sublayer:e,popupTemplate:t})}};return(e?.toArray()??[]).reverse().map(s),i}(r.sublayers,i,t);if(!s.length)return[];const n=await async function(e,t){if(e.capabilities?.operations?.supportsQuery)return!0;try{return await Promise.any(t.map((({sublayer:e})=>e.load().then((()=>e.capabilities.operations.supportsQuery)))))}catch{return!1}}(r,s);if(!((r.capabilities?.operations?.supportsIdentify??1)&&r.version>=10.5)&&!n)throw new o.Z("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:r});return n?this._fetchPopupFeaturesUsingQueries(e,s,t):this._fetchPopupFeaturesUsingIdentify(e,s,t)}clearHighlights(){this.highlightGraphics?.removeAll()}highlight(e){const t=this.highlightGraphics;if(!t)return{remove(){}};let r=null;if(e instanceof s.Z?r=[e]:a.Z.isCollection(e)&&e.length>0?r=e.toArray():Array.isArray(e)&&e.length>0&&(r=e),r=r?.filter(c.pC),!r||!r.length)return{remove:()=>{}};for(const i of r){const e=i.sourceLayer;null!=e&&"geometryType"in e&&"point"===e.geometryType&&(i.visible=!1)}return t.addMany(r),{remove:()=>{t.removeMany(r??[])}}}async _updateHighlightedFeaturesSymbols(e){const{layerView:{view:t},highlightGraphics:i,highlightGraphicUpdated:s}=this;if(i&&s)for(const n of e){const e=n.sourceLayer&&"renderer"in n.sourceLayer&&n.sourceLayer.renderer;n.sourceLayer&&"geometryType"in n.sourceLayer&&"point"===n.sourceLayer.geometryType&&e&&"getSymbolAsync"in e&&e.getSymbolAsync(n).then((async a=>{a||(a=new $.Z);let o=null;const l="visualVariables"in e?e.visualVariables?.find((e=>"size"===e.type)):void 0;l&&(W||(W=(await Promise.resolve().then(r.bind(r,56011))).getSize),o=W(l,n,{view:t.type,scale:t.scale,shape:"simple-marker"===a.type?a.style:null})),o||(o="width"in a&&"height"in a&&null!=a.width&&null!=a.height?Math.max(a.width,a.height):"size"in a?a.size:16),i.includes(n)&&(n.symbol=new $.Z({style:"square",size:o,xoffset:"xoffset"in a?a.xoffset:0,yoffset:"yoffset"in a?a.yoffset:0}),s(n,"symbol"),n.visible=!0)}))}}async _updateHighlightedFeaturesGeometries(e){const{layerView:{layer:t,view:r},highlightGraphics:i,highlightGraphicUpdated:s}=this;if(this._highlightGeometriesResolution=e,!s||!i?.length||!t.capabilities.operations.supportsQuery)return;const n=this._getTargetResolution(e),a=new Map;for(const c of i)if(!this._featuresResolutions.has(c)||this._featuresResolutions.get(c)>n){const e=c.sourceLayer;(0,u.s1)(a,e,(()=>new Map)).set(c.getObjectId(),c)}const o=Array.from(a,(([e,t])=>{const i=e.createQuery();return i.objectIds=[...t.keys()],i.outFields=[e.objectIdField],i.returnGeometry=!0,i.maxAllowableOffset=n,i.outSpatialReference=r.spatialReference,e.queryFeatures(i)})),l=await Promise.all(o);if(!this.destroyed)for(const{features:u}of l)for(const e of u){const t=e.sourceLayer,r=a.get(t).get(e.getObjectId());r&&i.includes(r)&&(r.geometry=e.geometry,s(r,"geometry"),this._featuresResolutions.set(r,n))}}_getTargetResolution(e){const t=e*(0,d.c9)(this.layerView.view.spatialReference),r=t/16;return r<=10?0:e/t*r}async _fetchPopupFeaturesUsingIdentify(e,t,r){const i=await this._createIdentifyParameters(e,t,r);if((0,c.Wi)(i))return[];const{results:s}=await k(this.layerView.layer.parsedUrl,i);return s.map((e=>e.feature))}async _createIdentifyParameters(e,t,r){const{floors:i,layer:s,timeExtent:n,view:{spatialReference:a,scale:o}}=this.layerView,u=(0,c.pC)(r)?r.event:null;if(!t.length)return null;await Promise.all(t.map((({sublayer:e})=>e.load().catch((()=>{})))));const p=Math.min((0,l.Z)("mapservice-popup-identify-max-tolerance"),s.allSublayers.reduce(((e,t)=>t.renderer?I({renderer:t.renderer,event:u}):e),2)),h=this.createFetchPopupFeaturesQueryGeometry(e,p),d=(0,v.dp)(o,a),f=Math.round(h.width/d),y=new g.Z({xmin:h.center.x-d*f,ymin:h.center.y-d*f,xmax:h.center.x+d*f,ymax:h.center.y+d*f,spatialReference:h.spatialReference});return new Z({floors:i,gdbVersion:"gdbVersion"in s?s.gdbVersion:void 0,geometry:e,height:f,layerOption:"popup",mapExtent:y,returnGeometry:!0,spatialReference:a,sublayers:s.sublayers,timeExtent:n,tolerance:p,width:f})}async _fetchPopupFeaturesUsingQueries(e,t,r){const{layerView:{floors:i,timeExtent:s}}=this,n=(0,c.pC)(r)?r.event:null,a=t.map((async({sublayer:t,popupTemplate:r})=>{if(await t.load().catch((()=>{})),t.capabilities&&!t.capabilities.operations.supportsQuery)return[];const a=t.createQuery(),o=I({renderer:t.renderer,event:n}),l=this.createFetchPopupFeaturesQueryGeometry(e,o);if(a.geometry=l,a.outFields=await(0,J.e)(t,r),a.timeExtent=s,i){const e=i.clone(),r=(0,b.f)(e,t);(0,c.pC)(r)&&(a.where=a.where?`(${a.where}) AND (${r})`:r)}const u=this._getTargetResolution(l.width/o),p=await function(e){return e.expressionInfos?.length||Array.isArray(e.content)&&e.content.some((e=>"expression"===e.type))?(0,Q.LC)():Promise.resolve()}(r),h="point"===t.geometryType||p&&p.arcadeUtils.hasGeometryOperations(r);h||(a.maxAllowableOffset=u);let{features:d}=await t.queryFeatures(a);const f=h?0:u;d=await async function(e,t){const r=e.renderer;return r&&"defaultSymbol"in r&&!r.defaultSymbol&&(t=r.valueExpression?await Promise.all(t.map((e=>r.getSymbolAsync(e).then((t=>t?e:null))))).then((e=>e.filter((e=>null!=e)))):t.filter((e=>null!=r.getSymbol(e)))),t}(t,d);for(const e of d)this._featuresResolutions.set(e,f);return d}));return(await(0,p.as)(a)).reverse().reduce(((e,t)=>t.value?[...e,...t.value]:e),[]).filter((e=>null!=e))}};(0,i._)([(0,f.Cb)({constructOnly:!0})],X.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),(0,i._)([(0,f.Cb)({constructOnly:!0})],X.prototype,"layerView",void 0),(0,i._)([(0,f.Cb)({constructOnly:!0})],X.prototype,"highlightGraphics",void 0),(0,i._)([(0,f.Cb)({constructOnly:!0})],X.prototype,"highlightGraphicUpdated",void 0),(0,i._)([(0,f.Cb)({constructOnly:!0})],X.prototype,"updatingHandles",void 0),X=(0,i._)([(0,m.j)("esri.views.layers.support.MapService")],X)},24405:(e,t,r)=>{r.d(t,{V:()=>a,e:()=>n});var i=r(92026),s=r(80031);async function n(e,t=e.popupTemplate){if((0,i.Wi)(t))return[];const r=await t.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:n}=t,{objectIdField:a,typeIdField:o,globalIdField:l,relationships:u}=e;if(r.includes("*"))return["*"];const c=n?await(0,s.CH)(e):[],p=(0,s.Q0)(e.fieldsIndex,[...r,...c]);return o&&p.push(o),p&&a&&e.fieldsIndex?.has(a)&&!p.includes(a)&&p.push(a),p&&l&&e.fieldsIndex?.has(l)&&!p.includes(l)&&p.push(l),u&&u.forEach((t=>{const{keyField:r}=t;p&&r&&e.fieldsIndex?.has(r)&&!p.includes(r)&&p.push(r)})),p}function a(e,t){return e.popupTemplate?e.popupTemplate:(0,i.pC)(t)&&t.defaultPopupTemplateEnabled&&(0,i.pC)(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}},45008:(e,t,r)=>{r.d(t,{K:()=>a});r(59486);var i=r(92026),s=r(68860),n=r(53866);function a(e,t,r,a=new n.Z){let o=0;if("2d"===r.type)o=t*(r.resolution??0);else if("3d"===r.type){const n=r.overlayPixelSizeInMapUnits(e),a=r.basemapSpatialReference;o=(0,i.pC)(a)&&!a.equals(r.spatialReference)?(0,s.c9)(a)/(0,s.c9)(r.spatialReference):t*n}const l=e.x-o,u=e.y-o,c=e.x+o,p=e.y+o,{spatialReference:h}=r;return a.xmin=Math.min(l,c),a.ymin=Math.min(u,p),a.xmax=Math.max(l,c),a.ymax=Math.max(u,p),a.spatialReference=h,a}new n.Z}}]);
//# sourceMappingURL=4315.c166d616.chunk.js.map