"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[4371],{14371:(t,e,r)=>{r.r(e),r.d(e,{executeForTopCount:()=>n});var i=r(11282),o=r(4510),s=r(28141);async function n(t,e,r){const n=(0,i.en)(t);return(await(0,o.vB)(n,s.Z.from(e),{...r})).data.count}},4510:(t,e,r)=>{r.d(e,{IJ:()=>y,m5:()=>h,vB:()=>m,w7:()=>c});var i=r(3172),o=r(70586),s=r(17452),n=r(33955),l=r(16306),p=r(76497),u=r(28694);const a="Layer does not support extent calculation.";function d(t,e){const r=t.geometry,i=t.toJSON(),s=i;if((0,o.pC)(r)&&(s.geometry=JSON.stringify(r),s.geometryType=(0,n.Ji)(r),s.inSR=r.spatialReference.wkid||JSON.stringify(r.spatialReference)),i.topFilter?.groupByFields&&(s.topFilter.groupByFields=i.topFilter.groupByFields.join(",")),i.topFilter?.orderByFields&&(s.topFilter.orderByFields=i.topFilter.orderByFields.join(",")),i.topFilter&&(s.topFilter=JSON.stringify(s.topFilter)),i.objectIds&&(s.objectIds=i.objectIds.join(",")),i.orderByFields&&(s.orderByFields=i.orderByFields.join(",")),i.outFields&&!(e?.returnCountOnly||e?.returnExtentOnly||e?.returnIdsOnly)?i.outFields.includes("*")?s.outFields="*":s.outFields=i.outFields.join(","):delete s.outFields,i.outSR?s.outSR=i.outSR.wkid||JSON.stringify(i.outSR):r&&i.returnGeometry&&(s.outSR=s.inSR),i.returnGeometry&&delete i.returnGeometry,i.timeExtent){const t=i.timeExtent,{start:e,end:r}=t;null==e&&null==r||(s.time=e===r?e:`${e??"null"},${r??"null"}`),delete i.timeExtent}return s}async function y(t,e,r,i){const o=await w(t,e,"json",i);return(0,u.p)(e,r,o.data),o}async function c(t,e,r){return(0,o.pC)(e.timeExtent)&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:w(t,e,"json",r,{returnIdsOnly:!0})}async function h(t,e,r){return(0,o.pC)(e.timeExtent)&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:w(t,e,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(a);if(e.hasOwnProperty("count"))throw new Error(a);return t}))}function m(t,e,r){return(0,o.pC)(e.timeExtent)&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):w(t,e,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function w(t,e,r,n={},u={}){const a="string"==typeof t?(0,s.mN)(t):t,y=e.geometry?[e.geometry]:[];return n.responseType="pbf"===r?"array-buffer":"json",(0,l.aX)(y,null,n).then((t=>{const l=t&&t[0];(0,o.pC)(l)&&((e=e.clone()).geometry=l);const y=(0,p.A)({...a.query,f:r,...u,...d(e,u)});return(0,i.default)((0,s.v_)(a.path,"queryTopFeatures"),{...n,query:{...y,...n.query}})}))}},28141:(t,e,r)=>{r.d(e,{Z:()=>j});var i,o=r(43697),s=r(66577),n=r(92835),l=r(35454),p=r(96674),u=r(22974),a=r(70586),d=r(5600),y=r(75215),c=r(52011),h=r(30556),m=r(33955);r(67676);let w=i=class extends p.wq{constructor(t){super(t),this.groupByFields=void 0,this.topCount=void 0,this.orderByFields=void 0}clone(){return new i({groupByFields:this.groupByFields,topCount:this.topCount,orderByFields:this.orderByFields})}};(0,o._)([(0,d.Cb)({type:[String],json:{write:!0}})],w.prototype,"groupByFields",void 0),(0,o._)([(0,d.Cb)({type:Number,json:{write:!0}})],w.prototype,"topCount",void 0),(0,o._)([(0,d.Cb)({type:[String],json:{write:!0}})],w.prototype,"orderByFields",void 0),w=i=(0,o._)([(0,c.j)("esri.rest.support.TopFilter")],w);const v=w;var b,F=r(82971);const C=new l.X({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),S=new l.X({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let f=b=class extends p.wq{constructor(t){super(t),this.cacheHint=void 0,this.distance=void 0,this.geometry=null,this.geometryPrecision=void 0,this.maxAllowableOffset=void 0,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.resultType=null,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.start=void 0,this.spatialRelationship="intersects",this.timeExtent=null,this.topFilter=void 0,this.units=null,this.where="1=1"}writeStart(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10}clone(){return new b((0,u.d9)({cacheHint:this.cacheHint,distance:this.distance,geometry:this.geometry,geometryPrecision:this.geometryPrecision,maxAllowableOffset:this.maxAllowableOffset,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,resultType:this.resultType,returnGeometry:this.returnGeometry,returnZ:this.returnZ,returnM:this.returnM,start:this.start,spatialRelationship:this.spatialRelationship,timeExtent:this.timeExtent,topFilter:this.topFilter,units:this.units,where:this.where}))}};(0,o._)([(0,d.Cb)({type:Boolean,json:{write:!0}})],f.prototype,"cacheHint",void 0),(0,o._)([(0,d.Cb)({type:Number,json:{write:{overridePolicy:t=>({enabled:t>0})}}})],f.prototype,"distance",void 0),(0,o._)([(0,d.Cb)({types:s.qM,json:{read:m.im,write:!0}})],f.prototype,"geometry",void 0),(0,o._)([(0,d.Cb)({type:Number,json:{write:!0}})],f.prototype,"geometryPrecision",void 0),(0,o._)([(0,d.Cb)({type:Number,json:{write:!0}})],f.prototype,"maxAllowableOffset",void 0),(0,o._)([(0,d.Cb)({type:Number,json:{read:{source:"resultRecordCount"}}})],f.prototype,"num",void 0),(0,o._)([(0,d.Cb)({json:{write:!0}})],f.prototype,"objectIds",void 0),(0,o._)([(0,d.Cb)({type:[String],json:{write:!0}})],f.prototype,"orderByFields",void 0),(0,o._)([(0,d.Cb)({type:[String],json:{write:!0}})],f.prototype,"outFields",void 0),(0,o._)([(0,d.Cb)({type:F.Z,json:{read:{source:"outSR"},write:{target:"outSR"}}})],f.prototype,"outSpatialReference",void 0),(0,o._)([(0,d.Cb)({type:String,json:{write:!0}})],f.prototype,"resultType",void 0),(0,o._)([(0,d.Cb)({json:{write:!0}})],f.prototype,"returnGeometry",void 0),(0,o._)([(0,d.Cb)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],f.prototype,"returnM",void 0),(0,o._)([(0,d.Cb)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],f.prototype,"returnZ",void 0),(0,o._)([(0,d.Cb)({type:Number,json:{read:{source:"resultOffset"}}})],f.prototype,"start",void 0),(0,o._)([(0,h.c)("start"),(0,h.c)("num")],f.prototype,"writeStart",null),(0,o._)([(0,d.Cb)({type:String,json:{read:{source:"spatialRel",reader:C.read},write:{target:"spatialRel",writer:C.write}}})],f.prototype,"spatialRelationship",void 0),(0,o._)([(0,d.Cb)({type:n.Z,json:{write:!0}})],f.prototype,"timeExtent",void 0),(0,o._)([(0,d.Cb)({type:v,json:{write:!0}})],f.prototype,"topFilter",void 0),(0,o._)([(0,d.Cb)({type:String,json:{read:S.read,write:{writer:S.write,overridePolicy(t){return{enabled:(0,a.pC)(t)&&(0,a.pC)(this.distance)&&this.distance>0}}}}})],f.prototype,"units",void 0),(0,o._)([(0,d.Cb)({type:String,json:{write:!0}})],f.prototype,"where",void 0),f=b=(0,o._)([(0,c.j)("esri.rest.support.TopFeaturesQuery")],f),f.from=(0,y.se)(f);const j=f}}]);