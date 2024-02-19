"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[4650],{94650:(e,a,r)=>{r.r(a),r.d(a,{fromUrl:()=>d});var t=r(10064),n=r(92026),s=r(35995),l=r(25899),i=r(74368),y=r(37933),o=r(19610),u=r(41226);const c={FeatureLayer:!0,SceneLayer:!0};async function d(e){const a=e.properties?.customParameters,d=await async function(e,a){let r=(0,l.Qc)(e);if((0,n.Wi)(r)&&(r=await async function(e,a){const r=await(0,u.T)(e,{customParameters:a});let t=null,i=null;const y=r.type;if("Feature Layer"===y||"Table"===y?(t="FeatureServer",i=r.id??null):"indexedVector"===y?t="VectorTileServer":r.hasOwnProperty("mapName")?t="MapServer":r.hasOwnProperty("bandCount")&&r.hasOwnProperty("pixelSizeX")?t="ImageServer":r.hasOwnProperty("maxRecordCount")&&r.hasOwnProperty("allowGeometryUpdates")?t="FeatureServer":r.hasOwnProperty("streamUrls")?t="StreamServer":b(r)?(t="SceneServer",i=r.id):r.hasOwnProperty("layers")&&b(r.layers?.[0])&&(t="SceneServer"),!t)return null;const o=null!=i?(0,l.DR)(e):null;return{title:(0,n.pC)(o)&&r.name||(0,s.vt)(e),serverType:t,sublayer:i,url:{path:(0,n.pC)(o)?o.serviceUrl:(0,s.mN)(e).path}}}(e,a)),(0,n.Wi)(r))throw new t.Z("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:d,sublayer:f}=r;let w;const h={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(d){case"MapServer":w=null!=f?"FeatureLayer":await async function(e,a){return(await(0,u.T)(e,{customParameters:a})).tileInfo}(e,a)?"TileLayer":"MapImageLayer";break;case"ImageServer":{const r=await(0,u.T)(e,{customParameters:a}),{tileInfo:t,cacheType:n}=r;w=t?"LERC"!==t?.format?.toUpperCase()||n&&"elevation"!==n.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{const e=await(0,u.T)(r.url.path,{customParameters:a});if(w="SceneLayer",e){const a=e?.layers;if("Voxel"===e?.layerType)w="VoxelLayer";else if(a?.length){const e=a[0]?.layerType;null!=e&&null!=y.fb[e]&&(w=y.fb[e])}}break}default:w=h[d]}const m="FeatureServer"===d,p={parsedUrl:r,Constructor:null,layerOrTableId:m?f:void 0,sublayerIds:null,tableIds:null};if(c[w]&&null==f){const r=await async function(e,a,r){let t,n=!1;if("FeatureServer"===a){const a=await(0,i.V)(e,{customParameters:r});n=!!a.layersJSON,t=a.layersJSON||a.serviceJSON}else t=await(0,u.T)(e,{customParameters:r});const s=t?.layers,l=t?.tables;return{layerIds:s?.map((e=>e.id)).reverse()||[],tableIds:l?.map((e=>e.id)).reverse()||[],layerInfos:n?s:[],tableInfos:n?l:[]}}(e,d,a);m&&(p.sublayerInfos=r.layerInfos,p.tableInfos=r.tableInfos),1!==r.layerIds.length+r.tableIds.length?(p.sublayerIds=r.layerIds,p.tableIds=r.tableIds):m&&(p.layerOrTableId=r.layerIds[0]??r.tableIds[0],p.sourceJSON=r.layerInfos?.[0]??r.tableInfos?.[0])}return p.Constructor=await async function(e){return(0,o.T[e])()}(w),p}(e.url,a),w={...e.properties,url:e.url};if(!d.sublayerIds)return null!=d.layerOrTableId&&(w.layerId=d.layerOrTableId,w.sourceJSON=d.sourceJSON),new d.Constructor(w);const h=new(0,(await r.e(5069).then(r.bind(r,65069))).default)({title:d.parsedUrl.title});return function(e,a,r){function t(e,t){const s={...r,layerId:e,sublayerTitleMode:"service-name"};return(0,n.pC)(t)&&(s.sourceJSON=t),new a.Constructor(s)}a.sublayerIds.forEach((r=>{const n=t(r,f(a.sublayerInfos,r));e.add(n)})),a.tableIds.forEach((r=>{const n=t(r,f(a.tableInfos,r));e.tables.add(n)}))}(h,d,w),h}function f(e,a){return e?e.find((e=>e.id===a)):null}function b(e){return null!=e&&e.hasOwnProperty("store")&&e.hasOwnProperty("id")&&"number"==typeof e.id}},74368:(e,a,r)=>{r.d(a,{V:()=>n});var t=r(41226);async function n(e,a){const r=await(0,t.T)(e,a);r.layers=r.layers.filter(s);const n={serviceJSON:r};if((r.currentVersion??0)<10.5)return n;const l=await(0,t.T)(e+"/layers",a);return n.layersJSON={layers:l.layers.filter(s),tables:l.tables},n}function s(e){return!e.type||"Feature Layer"===e.type}},19610:(e,a,r)=>{r.d(a,{T:()=>t});const t={BingMapsLayer:async()=>(await r.e(165).then(r.bind(r,60165))).default,BuildingSceneLayer:async()=>(await Promise.all([r.e(4395),r.e(9973),r.e(5675),r.e(6505)]).then(r.bind(r,66505))).default,CSVLayer:async()=>(await r.e(8435).then(r.bind(r,98435))).default,DimensionLayer:async()=>(await r.e(7406).then(r.bind(r,47406))).default,ElevationLayer:async()=>(await r.e(6816).then(r.bind(r,46816))).default,FeatureLayer:async()=>(await Promise.resolve().then(r.bind(r,64326))).default,GeoJSONLayer:async()=>(await Promise.resolve().then(r.bind(r,5064))).default,GeoRSSLayer:async()=>(await r.e(54).then(r.bind(r,70054))).default,GroupLayer:async()=>(await r.e(5069).then(r.bind(r,65069))).default,ImageryLayer:async()=>(await Promise.all([r.e(5345),r.e(9672),r.e(132),r.e(8137)]).then(r.bind(r,98137))).default,ImageryTileLayer:async()=>(await Promise.all([r.e(5345),r.e(394),r.e(9672),r.e(5179),r.e(132),r.e(3938)]).then(r.bind(r,83938))).default,IntegratedMeshLayer:async()=>(await Promise.all([r.e(4395),r.e(6251)]).then(r.bind(r,56251))).default,KMLLayer:async()=>(await r.e(3838).then(r.bind(r,13838))).default,LineOfSightLayer:async()=>(await r.e(4910).then(r.bind(r,44910))).default,MapImageLayer:async()=>(await Promise.all([r.e(680),r.e(9583)]).then(r.bind(r,19583))).default,MapNotesLayer:async()=>(await r.e(9622).then(r.bind(r,69622))).default,MediaLayer:async()=>(await r.e(8839).then(r.bind(r,88839))).default,OGCFeatureLayer:async()=>(await r.e(8701).then(r.bind(r,98701))).default,OpenStreetMapLayer:async()=>(await r.e(1656).then(r.bind(r,31656))).default,OrientedImageryLayer:async()=>(await r.e(5440).then(r.bind(r,15440))).default,PointCloudLayer:async()=>(await Promise.all([r.e(4395),r.e(9532)]).then(r.bind(r,9532))).default,RouteLayer:async()=>(await Promise.all([r.e(729),r.e(8257)]).then(r.bind(r,88257))).default,SceneLayer:async()=>(await Promise.all([r.e(4395),r.e(9973),r.e(5675),r.e(5838)]).then(r.bind(r,5838))).default,StreamLayer:async()=>(await r.e(2668).then(r.bind(r,2668))).default,SubtypeGroupLayer:async()=>(await r.e(255).then(r.bind(r,50255))).default,TileLayer:async()=>(await Promise.all([r.e(680),r.e(2977)]).then(r.bind(r,42977))).default,UnknownLayer:async()=>(await r.e(4917).then(r.bind(r,74917))).default,UnsupportedLayer:async()=>(await r.e(8101).then(r.bind(r,88101))).default,VectorTileLayer:async()=>(await Promise.all([r.e(969),r.e(8889)]).then(r.bind(r,47409))).default,VoxelLayer:async()=>(await Promise.all([r.e(4395),r.e(1080)]).then(r.bind(r,11080))).default,WFSLayer:async()=>(await Promise.all([r.e(2622),r.e(8566)]).then(r.bind(r,38566))).default,WMSLayer:async()=>(await r.e(4227).then(r.bind(r,84227))).default,WMTSLayer:async()=>(await r.e(6951).then(r.bind(r,46951))).default,WebTileLayer:async()=>(await r.e(9200).then(r.bind(r,89200))).default}},41226:(e,a,r)=>{r.d(a,{T:()=>n});var t=r(76200);async function n(e,a){const{data:r}=await(0,t.default)(e,{responseType:"json",query:{f:"json",...a?.customParameters,token:a?.apiKey}});return r}}}]);
//# sourceMappingURL=4650.c4307fe6.chunk.js.map