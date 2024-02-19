"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[1231],{44041:(e,t,i)=>{i.d(t,{R:()=>m});var s=i(27366),r=i(85015),a=i(41691),o=i(92026),n=i(76672),h=i(49861),l=(i(25243),i(63780),i(69912)),p=i(45948),d=i(87072),y=i(58132);const c={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let m=class extends((0,a.p)(r.Z)){constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const t=(0,d.f)(this.floors,e);return e.toExportImageJSON(t)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&(0,y.FN)(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(c[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){const e=!!this.floors?.length,t=this.visibleSublayers.filter((t=>null!=t.definitionExpression||e&&null!=t.floorInfo));return t.length?JSON.stringify(t.reduce(((e,t)=>{const i=(0,d.f)(this.floors,t),s=(0,n._)(i,t.definitionExpression);return(0,o.pC)(s)&&(e[t.id]=s),e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const t=this.layer.sublayers,i=t=>{const s=this.scale,r=0===s,a=0===t.minScale||s<=t.minScale,o=0===t.maxScale||s>=t.maxScale;t.visible&&(r||a&&o)&&(t.sublayers?t.sublayers.forEach(i):e.unshift(t))};t&&t.forEach(i);const s=this._get("visibleSublayers");return!s||s.length!==e.length||s.some(((t,i)=>e[i]!==t))?e:s}toJSON(){const e=this.layer;let t={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?t.dynamicLayers=this.dynamicLayers:t={...t,layers:this.layers,layerDefs:this.layerDefs},t}};(0,s._)([(0,h.Cb)({readOnly:!0})],m.prototype,"dynamicLayers",null),(0,s._)([(0,h.Cb)()],m.prototype,"floors",void 0),(0,s._)([(0,h.Cb)({readOnly:!0})],m.prototype,"hasDynamicLayers",null),(0,s._)([(0,h.Cb)()],m.prototype,"layer",null),(0,s._)([(0,h.Cb)({readOnly:!0})],m.prototype,"layers",null),(0,s._)([(0,h.Cb)({readOnly:!0})],m.prototype,"layerDefs",null),(0,s._)([(0,h.Cb)({type:Number})],m.prototype,"scale",void 0),(0,s._)([(0,h.Cb)(p.qG)],m.prototype,"timeExtent",void 0),(0,s._)([(0,h.Cb)({readOnly:!0})],m.prototype,"version",null),(0,s._)([(0,h.Cb)({readOnly:!0})],m.prototype,"visibleSublayers",null),m=(0,s._)([(0,l.j)("esri.layers.mixins.ExportImageParameters")],m)},91231:(e,t,i)=>{i.r(t),i.d(t,{default:()=>C});var s=i(27366),r=i(32718),a=i(66978),o=i(94172),n=i(49861),h=(i(25243),i(63780),i(69912)),l=i(78983),p=i(90110),d=i(95986),y=i(34035),c=i(83978),m=i(9229),u=i(67581),g=i(45948),b=i(44041);const f=e=>{let t=class extends e{initialize(){this.exportImageParameters=new b.R({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){return this.view?.floors??null}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){return!!super.canResume()&&!this.timeExtent?.isEmpty}};return(0,s._)([(0,n.Cb)()],t.prototype,"exportImageParameters",void 0),(0,s._)([(0,n.Cb)({readOnly:!0})],t.prototype,"floors",null),(0,s._)([(0,n.Cb)({readOnly:!0})],t.prototype,"exportImageVersion",null),(0,s._)([(0,n.Cb)()],t.prototype,"layer",void 0),(0,s._)([(0,n.Cb)()],t.prototype,"suspended",void 0),(0,s._)([(0,n.Cb)(g.qG)],t.prototype,"timeExtent",void 0),t=(0,s._)([(0,h.j)("esri.views.layers.MapImageLayerView")],t),t};var _=i(13107),x=i(84848),v=i(45008);let S=class extends(f((0,_.Z)((0,d.y)(u.Z)))){constructor(){super(...arguments),this._highlightGraphics=new l.J,this._updateHash=""}fetchPopupFeatures(e,t){return this._popupHighlightHelper.fetchPopupFeatures(e,t)}update(e){const t=`${this.exportImageVersion}/${e.state.id}/${e.pixelRatio}/${e.stationary}`;this._updateHash!==t&&(this._updateHash=t,this.strategy.update(e).catch((e=>{(0,a.D_)(e)||r.Z.getLogger(this.declaredClass).error(e)})),e.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(e.state.resolution)),this._highlightView.processUpdate(e)}attach(){const{imageMaxWidth:e,imageMaxHeight:t,version:i}=this.layer,s=i>=10.3,r=i>=10;this._bitmapContainer=new p.c,this.container.addChild(this._bitmapContainer),this._highlightView=new y.Z({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new c.Z(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new x.VF({createFetchPopupFeaturesQueryGeometry:(e,t)=>(0,v.K)(e,t,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(e,t)=>{this._highlightView.graphicUpdateHandler({graphic:e,property:t})},layerView:this,updatingHandles:this.updatingHandles}),this.strategy=new m.Z({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:e,imageMaxHeight:t,imageRotationSupported:s,imageNormalizationSupported:r,hidpi:!0}),this.addAttachHandles((0,o.YP)((()=>this.exportImageVersion),(()=>this.requestUpdate()))),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,i,s){return this.layer.fetchImage(e,t,i,{timeExtent:this.timeExtent,floors:this.floors,...s})}fetchImageBitmap(e,t,i,s){return this.layer.fetchImageBitmap(e,t,i,{timeExtent:this.timeExtent,floors:this.floors,...s})}highlight(e){return this._popupHighlightHelper.highlight(e)}};(0,s._)([(0,n.Cb)()],S.prototype,"strategy",void 0),(0,s._)([(0,n.Cb)()],S.prototype,"updating",void 0),S=(0,s._)([(0,h.j)("esri.views.2d.layers.MapImageLayerView2D")],S);const C=S},9229:(e,t,i)=>{i.d(t,{Z:()=>E});var s=i(27366),r=i(85015),a=(i(93169),i(66978)),o=i(49861),n=(i(25243),i(63780),i(69912)),h=i(65156),l=i(92975),p=i(22824);const d=Math.PI/180;function y(e){return e*d}function c(e,t){const i=y(t.rotation),s=Math.abs(Math.cos(i)),r=Math.abs(Math.sin(i)),[a,o]=t.size;return e[0]=Math.round(o*r+a*s),e[1]=Math.round(o*s+a*r),e}var m=i(45956),u=i(37995),g=i(73828);const b=(0,h.Ue)(),f=[0,0],_=new g.Z(0,0,0,0),x=2048,v=2048,S=!1,C=!1,w=!1;let P=class extends r.Z{constructor(e){super(e),this._imagePromise=null,this.bitmaps=[],this.hidpi=w,this.imageMaxWidth=x,this.imageMaxHeight=v,this.imageRotationSupported=S,this.imageNormalizationSupported=C,this.update=(0,a.Ds)((async(e,t)=>{if((0,a.k_)(t),!e.stationary||this.destroyed)return;const i=e.state,s=(0,l.C5)(i.spatialReference),r=this.hidpi?e.pixelRatio:1,o=this.imageNormalizationSupported&&i.worldScreenWidth&&i.worldScreenWidth<i.size[0],n=this.imageMaxWidth??0,h=this.imageMaxHeight??0;o?(f[0]=i.worldScreenWidth,f[1]=i.size[1]):this.imageRotationSupported?(f[0]=i.size[0],f[1]=i.size[1]):c(f,i);const p=Math.floor(f[0]*r)>n||Math.floor(f[1]*r)>h,d=s&&(i.extent.xmin<s.valid[0]||i.extent.xmax>s.valid[1]),y=!this.imageNormalizationSupported&&d,m=!p&&!y,u=this.imageRotationSupported?i.rotation:0,g=this.container.children.slice();if(m){const e=o?i.paddedViewState.center:i.center;this._imagePromise&&console.error("Image promise was not defined!"),this._imagePromise=this._singleExport(i,f,e,i.resolution,u,r,t)}else{let e=Math.min(n,h);y&&(e=Math.min(i.worldScreenWidth,e)),this._imagePromise=this._tiledExport(i,e,r,t)}try{const e=await this._imagePromise??[];(0,a.k_)(t);const i=[];if(this._imagePromise=null,this.destroyed)return;this.bitmaps=e;for(const t of g)e.includes(t)||i.push(t.fadeOut().then((()=>{t.remove(),t.destroy()})));for(const t of e)i.push(t.fadeIn());await Promise.all(i)}catch(_){this._imagePromise=null,(0,a.r9)(_)}}),5e3),this.updateExports=(0,a.Ds)((async e=>{const t=[];for(const i of this.container.children){if(!i.visible||!i.stage)return;t.push(e(i).then((()=>{i.invalidateTexture(),i.requestRender()})))}this._imagePromise=(0,a.as)(t).then((()=>this._imagePromise=null)),await this._imagePromise}))}destroy(){this.bitmaps.forEach((e=>e.destroy())),this.bitmaps=[]}get updating(){return!this.destroyed&&null!==this._imagePromise}async _export(e,t,i,s,r,o){const n=await this.fetchSource(e,Math.floor(t*r),Math.floor(i*r),{rotation:s,pixelRatio:r,signal:o});(0,a.k_)(o);const h=new m.eY(null,{immutable:!0,requestRenderOnSourceChangedEnabled:!0});return h.x=e.xmin,h.y=e.ymax,h.resolution=e.width/t,h.rotation=s,h.pixelRatio=r,h.opacity=0,this.container.addChild(h),await h.setSourceAsync(n,o),(0,a.k_)(o),h}async _singleExport(e,t,i,s,r,a,o){!function(e,t,i,s){const[r,a]=t,[o,n]=s,h=.5*i;e[0]=r-h*o,e[1]=a-h*n,e[2]=r+h*o,e[3]=a+h*n}(b,i,s,t);const n=(0,h.HH)(b,e.spatialReference);return[await this._export(n,t[0],t[1],r,a,o)]}_tiledExport(e,t,i,s){const r=p.Z.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),a=new u.Z(r),o=a.getTileCoverage(e);if(!o)return null;const n=[];return o.forEach(((r,o,l,p)=>{_.set(r,o,l,0),a.getTileBounds(b,_);const d=(0,h.HH)(b,e.spatialReference);n.push(this._export(d,t,t,0,i,s).then((e=>(0!==p&&(_.set(r,o,l,p),a.getTileBounds(b,_),e.x=b[0],e.y=b[3]),e))))})),Promise.all(n)}};(0,s._)([(0,o.Cb)()],P.prototype,"_imagePromise",void 0),(0,s._)([(0,o.Cb)()],P.prototype,"bitmaps",void 0),(0,s._)([(0,o.Cb)()],P.prototype,"container",void 0),(0,s._)([(0,o.Cb)()],P.prototype,"fetchSource",void 0),(0,s._)([(0,o.Cb)()],P.prototype,"hidpi",void 0),(0,s._)([(0,o.Cb)()],P.prototype,"imageMaxWidth",void 0),(0,s._)([(0,o.Cb)()],P.prototype,"imageMaxHeight",void 0),(0,s._)([(0,o.Cb)()],P.prototype,"imageRotationSupported",void 0),(0,s._)([(0,o.Cb)()],P.prototype,"imageNormalizationSupported",void 0),(0,s._)([(0,o.Cb)()],P.prototype,"requestUpdate",void 0),(0,s._)([(0,o.Cb)()],P.prototype,"updating",null),P=(0,s._)([(0,n.j)("esri.views.2d.layers.support.ExportStrategy")],P);const E=P}}]);
//# sourceMappingURL=1231.5fbcdfa2.chunk.js.map