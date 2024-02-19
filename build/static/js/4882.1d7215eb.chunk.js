"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[4882],{55067:(e,t,i)=>{i.d(t,{Z:()=>c});var s=i(93169),r=i(80613),a=i(64510),l=i(52424),h=i(40655);const n=(e,t)=>e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col;class c extends a.Z{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(n),this.setStencilReference(e),super.renderChildren(e)}createRenderParams(e){const{state:t}=e,i=super.createRenderParams(e);return i.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,i.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(t.scale),i}prepareRenderPasses(e){const t=super.prepareRenderPasses(e);return t.push(e.registerRenderPass({name:"stencil",brushes:[h.Z],drawPhase:r.jx.DEBUG|r.jx.MAP|r.jx.HIGHLIGHT,target:()=>this.getStencilTarget()})),(0,s.Z)("esri-tiles-debug")&&t.push(e.registerRenderPass({name:"tileInfo",brushes:[l.Z],drawPhase:r.jx.DEBUG,target:()=>this.children})),t}getStencilTarget(){return this.children}setStencilReference(e){let t=1;for(const i of this.children)i.stencilRef=t++}}},72900:(e,t,i)=>{i.d(t,{I:()=>l});var s=i(22753),r=i(87422),a=i(73828);class l extends r.s{constructor(e,t,i,s,r,l,h=r,n=l){super(),this.triangleCountReportedInDebug=0,this.triangleCount=0,this.texture=null,this.key=new a.Z(e),this.resolution=t,this.x=i,this.y=s,this.width=r,this.height=l,this.rangeX=h,this.rangeY=n}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}setTransform(e){const t=this.resolution/(e.resolution*e.pixelRatio),i=this.transforms.tileMat3,[r,a]=e.toScreenNoRotation([0,0],[this.x,this.y]),l=this.width/this.rangeX*t,h=this.height/this.rangeY*t;(0,s.s)(i,l,0,0,0,h,0,r,a,1),(0,s.m)(this.transforms.dvs,e.displayViewMat3,i)}}},5738:(e,t,i)=>{i.r(t),i.d(t,{default:()=>v});var s=i(27366),r=i(32718),a=i(66978),l=i(94172),h=i(49861),n=(i(25243),i(63780),i(69912)),c=i(92975),o=i(4321),u=i(95986),d=i(34622),f=i(37995),p=i(73828),y=i(32344),_=i(85269),g=i(67581),w=i(13107);const m=[102113,102100,3857,3785,900913],I=[0,0];let S=class extends((0,w.Z)((0,o.Y)((0,u.y)(g.Z)))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this._tileRequests=new Map,this.layer=null}get tileMatrixSet(){const e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(e.id!==this.layer.activeLayer.tileMatrixSetId&&(this.layer.activeLayer.tileMatrixSetId=e.id),e):null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}attach(){const e=this.tileMatrixSet?.tileInfo;e&&(this._tileInfoView=new f.Z(e),this._fetchQueue=new y.Z({tileInfoView:this._tileInfoView,concurrency:16,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new _.Z({cachePolicy:"keep",resampling:!0,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this.addAttachHandles((0,l.YP)((()=>[this.layer?.activeLayer?.styleId,this.tileMatrixSet]),(()=>this._refresh()))),super.attach())}detach(){super.detach(),this._tileStrategy?.destroy(),this._fetchQueue?.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate()}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(I,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}async doRefresh(){!this.attached||this.updateRequested||this.suspended||this._refresh()}isUpdating(){return this._fetchQueue?.updating??!1}async fetchTile(e,t={}){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:s,resamplingLevel:r=0}=t;if(!i)return this._fetchImage(e,s);const l=new p.Z(0,0,0,0);let h;try{await i.fetchAvailabilityUpsample(e.level,e.row,e.col,l,{signal:s}),h=await this._fetchImage(l,s)}catch(n){if((0,a.D_)(n))throw n;if(r<3){const i=this._tileInfoView.getTileParentId(e.id);if(i){const s=new p.Z(i),a=await this.fetchTile(s,{...t,resamplingLevel:r+1});return(0,d.i)(this._tileInfoView,a,s,e)}}throw n}return(0,d.i)(this._tileInfoView,h,l,e)}canResume(){const e=super.canResume();return e?null!==this.tileMatrixSet:e}supportsSpatialReference(e){return this.layer.activeLayer.tileMatrixSets?.some((t=>(0,c.fS)(t.tileInfo?.spatialReference,e)))??!1}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()))}catch(t){(0,a.D_)(t)||r.Z.getLogger(this.declaredClass).error(t)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}_refresh(){this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((e=>{if(!e.bitmap.source)return;const t={id:e.key.id,fulfilled:!1,promise:this._fetchQueue.push(e.key).then((t=>{e.bitmap.source=t})).catch((t=>{(0,a.D_)(t)||(e.bitmap.source=null)})).finally((()=>{e.requestRender(),t.fulfilled=!0}))};this._tileRequests.set(e,t)}))}_getTileMatrixSetBySpatialReference(e){const t=this.view.spatialReference;if(!e.tileMatrixSets)return null;let i=e.tileMatrixSets.find((e=>(0,c.fS)(e.tileInfo?.spatialReference,t)));return!i&&t.isWebMercator&&(i=e.tileMatrixSets.find((e=>m.includes(e.tileInfo?.spatialReference.wkid??-1)))),i}};(0,s._)([(0,h.Cb)()],S.prototype,"_fetchQueue",void 0),(0,s._)([(0,h.Cb)({readOnly:!0})],S.prototype,"tileMatrixSet",null),S=(0,s._)([(0,n.j)("esri.views.2d.layers.WMTSLayerView2D")],S);const v=S},13107:(e,t,i)=>{i.d(t,{Z:()=>c});var s=i(27366),r=i(32718),a=i(66978),l=i(94172),h=i(49861),n=(i(25243),i(63780),i(69912));const c=e=>{let t=class extends e{initialize(){this.handles.add((0,l.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,a.D_)(e)||r.Z.getLogger(this.declaredClass).error(e)}))})),"RefreshableLayerView")}};return(0,s._)([(0,h.Cb)()],t.prototype,"layer",void 0),t=(0,s._)([(0,n.j)("esri.layers.mixins.RefreshableLayerView")],t),t}}}]);
//# sourceMappingURL=4882.1d7215eb.chunk.js.map