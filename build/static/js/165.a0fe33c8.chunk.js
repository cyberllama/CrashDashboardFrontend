"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[165],{60165:(e,t,a)=>{a.r(t),a.d(t,{default:()=>B});var r,o=a(27366),i=(a(59486),a(76200)),n=a(10064),s=a(43404),l=a(92026),p=a(97642),u=a(49861),d=(a(25243),a(63780),a(69912)),g=a(78952),c=a(53866),h=a(65156),y=a(30651),b=a(6693),w=a(71684),v=a(56811),m=a(83690),Z=a(22824);const f=new(a(87960).f)("0/0/0",0,0,0,void 0);let M=r=class extends((0,b.h)((0,v.M)((0,w.Q)(y.Z)))){constructor(){super(...arguments),this.tileInfo=Z.Z.create({spatialReference:g.Z.WebMercator,size:256}),this.type="base-tile",this.fullExtent=new c.Z(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,g.Z.WebMercator),this.spatialReference=g.Z.WebMercator}getTileBounds(e,t,a,r){const o=r||(0,h.Ue)();return f.level=e,f.row=t,f.col=a,f.extent=o,this.tileInfo.updateTileInfo(f),f.extent=void 0,o}fetchTile(e,t,a,r={}){const{signal:o}=r,n=this.getTileUrl(e,t,a),s={responseType:"image",signal:o,query:{...this.refreshParameters}};return(0,i.default)(n??"",s).then((e=>e.data))}async fetchImageBitmapTile(e,t,a,o={}){const{signal:s}=o;if(this.fetchTile!==r.prototype.fetchTile){const r=await this.fetchTile(e,t,a,o);try{return createImageBitmap(r)}catch(d){throw new n.Z("request:server",`Unable to load tile ${e}/${t}/${a}`,{error:d,level:e,row:t,col:a})}}const l=this.getTileUrl(e,t,a)??"",p={responseType:"blob",signal:s,query:{...this.refreshParameters}},{data:u}=await(0,i.default)(l,p);return(0,m.g)(u,l)}getTileUrl(){throw new n.Z("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")}};(0,o._)([(0,u.Cb)({type:Z.Z})],M.prototype,"tileInfo",void 0),(0,o._)([(0,u.Cb)({type:["show","hide"]})],M.prototype,"listMode",void 0),(0,o._)([(0,u.Cb)({readOnly:!0,value:"base-tile"})],M.prototype,"type",void 0),(0,o._)([(0,u.Cb)({nonNullable:!0})],M.prototype,"fullExtent",void 0),(0,o._)([(0,u.Cb)()],M.prototype,"spatialReference",void 0),M=r=(0,o._)([(0,d.j)("esri.layers.BaseTileLayer")],M);const _=M;var T=a(6061),C=a(59068),S=a(585);const U=new s.X({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"});let j=class extends((0,b.h)((0,T.q)((0,p.R)(_)))){constructor(e){super(e),this.type="bing-maps",this.tileInfo=new Z.Z({size:[256,256],dpi:96,origin:new S.Z({x:-20037508.342787,y:20037508.342787,spatialReference:g.Z.WebMercator}),spatialReference:g.Z.WebMercator,lods:[new C.Z({level:1,resolution:78271.5169639999,scale:295828763.795777}),new C.Z({level:2,resolution:39135.7584820001,scale:147914381.897889}),new C.Z({level:3,resolution:19567.8792409999,scale:73957190.948944}),new C.Z({level:4,resolution:9783.93962049996,scale:36978595.474472}),new C.Z({level:5,resolution:4891.96981024998,scale:18489297.737236}),new C.Z({level:6,resolution:2445.98490512499,scale:9244648.868618}),new C.Z({level:7,resolution:1222.99245256249,scale:4622324.434309}),new C.Z({level:8,resolution:611.49622628138,scale:2311162.217155}),new C.Z({level:9,resolution:305.748113140558,scale:1155581.108577}),new C.Z({level:10,resolution:152.874056570411,scale:577790.554289}),new C.Z({level:11,resolution:76.4370282850732,scale:288895.277144}),new C.Z({level:12,resolution:38.2185141425366,scale:144447.638572}),new C.Z({level:13,resolution:19.1092570712683,scale:72223.819286}),new C.Z({level:14,resolution:9.55462853563415,scale:36111.909643}),new C.Z({level:15,resolution:4.77731426794937,scale:18055.954822}),new C.Z({level:16,resolution:2.38865713397468,scale:9027.977411}),new C.Z({level:17,resolution:1.19432856685505,scale:4513.988705}),new C.Z({level:18,resolution:.597164283559817,scale:2256.994353}),new C.Z({level:19,resolution:.298582141647617,scale:1128.497176}),new C.Z({level:20,resolution:.1492910708238085,scale:564.248588})]}),this.key=null,this.style="road",this.culture="en-US",this.region=null,this.portalUrl=null,this.hasAttributionData=!0}get bingMetadata(){return this._get("bingMetadata")}set bingMetadata(e){this._set("bingMetadata",e)}get copyright(){return(0,l.pC)(this.bingMetadata)?this.bingMetadata.copyright:null}get operationalLayerType(){return U.toJSON(this.style)}get bingLogo(){return(0,l.pC)(this.bingMetadata)?this.bingMetadata.brandLogoUri:null}load(e){return this.key?this.addResolvingPromise(this._getMetadata()):this.portalUrl?this.addResolvingPromise(this._getPortalBingKey().then((()=>this._getMetadata()))):this.addResolvingPromise(Promise.reject(new n.Z("bingmapslayer:load","Bing layer must have bing key."))),Promise.resolve(this)}getTileUrl(e,t,a){if(!this.loaded||(0,l.Wi)(this.bingMetadata))return null;const r=this.bingMetadata.resourceSets[0].resources[0],o=r.imageUrlSubdomains[t%r.imageUrlSubdomains.length],i=this._getQuadKey(e,t,a);return r.imageUrl.replace("{subdomain}",o).replace("{quadkey}",i)}async fetchAttributionData(){return this.load().then((()=>(0,l.Wi)(this.bingMetadata)?null:{contributors:this.bingMetadata.resourceSets[0].resources[0].imageryProviders.map((e=>({attribution:e.attribution,coverageAreas:e.coverageAreas.map((e=>({zoomMin:e.zoomMin,zoomMax:e.zoomMax,score:1,bbox:[e.bbox[0],e.bbox[1],e.bbox[2],e.bbox[3]]})))})))}))}_getMetadata(){const e={road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style];return(0,i.default)(`https://dev.virtualearth.net/REST/v1/Imagery/Metadata/${e}`,{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then((e=>{const t=e.data;if(200!==t.statusCode)throw new n.Z("bingmapslayer:getmetadata",t.statusDescription);if(this.bingMetadata=t,0===this.bingMetadata.resourceSets.length)throw new n.Z("bingmapslayer:getmetadata","no bing resourcesets");if(0===this.bingMetadata.resourceSets[0].resources.length)throw new n.Z("bingmapslayer:getmetadata","no bing resources")})).catch((e=>{throw new n.Z("bingmapslayer:getmetadata",e.message)}))}_getPortalBingKey(){return(0,i.default)(this.portalUrl??"",{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then((e=>{if(!e.data.bingKey)throw new n.Z("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");this.key=e.data.bingKey})).catch((e=>{throw new n.Z("bingmapslayer:getportalbingkey",e.message)}))}_getQuadKey(e,t,a){let r="";for(let o=e;o>0;o--){let e=0;const i=1<<o-1;0!=(a&i)&&(e+=1),0!=(t&i)&&(e+=2),r+=e.toString()}return r}};(0,o._)([(0,u.Cb)({json:{read:!1,write:!1},value:null})],j.prototype,"bingMetadata",null),(0,o._)([(0,u.Cb)({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],j.prototype,"type",void 0),(0,o._)([(0,u.Cb)({type:Z.Z})],j.prototype,"tileInfo",void 0),(0,o._)([(0,u.Cb)({type:String,readOnly:!0,json:{read:!1,write:!1}})],j.prototype,"copyright",null),(0,o._)([(0,u.Cb)({type:String,json:{write:!1,read:!1}})],j.prototype,"key",void 0),(0,o._)([(0,u.Cb)({type:U.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:U.read}}})],j.prototype,"style",void 0),(0,o._)([(0,u.Cb)({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"]})],j.prototype,"operationalLayerType",null),(0,o._)([(0,u.Cb)({type:String,json:{write:!1,read:!1}})],j.prototype,"culture",void 0),(0,o._)([(0,u.Cb)({type:String,json:{write:!1,read:!1}})],j.prototype,"region",void 0),(0,o._)([(0,u.Cb)({type:String,json:{write:!0,read:!0}})],j.prototype,"portalUrl",void 0),(0,o._)([(0,u.Cb)({type:Boolean,json:{write:!1,read:!1}})],j.prototype,"hasAttributionData",void 0),(0,o._)([(0,u.Cb)({type:String,readOnly:!0})],j.prototype,"bingLogo",null),j=(0,o._)([(0,d.j)("esri.layers.BingMapsLayer")],j);const B=j},83690:(e,t,a)=>{a.d(t,{g:()=>o});var r=a(10064);async function o(e,t){try{return await createImageBitmap(e)}catch(a){throw new r.Z("request:server",`Unable to load ${t}`,{url:t,error:a})}}}}]);
//# sourceMappingURL=165.a0fe33c8.chunk.js.map