"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[5026],{49215:(e,t,s)=>{var r;s.d(t,{i:()=>r}),function(e){e[e.PROJECT_VERTICES=1]="PROJECT_VERTICES"}(r||(r={}))},15026:(e,t,s)=>{s.r(t),s.d(t,{default:()=>D});var r=s(27366),a=(s(59486),s(52639)),i=s(19545),n=s(76200),o=s(62044),u=s(10064),l=s(93169),d=s(43404),c=s(54472),h=s(92026),p=s(18202),y=s(66978),f=s(35995),m=s(49861),_=(s(25243),s(63780),s(69912)),g=s(53866),b=s(77981),F=s(49215),R=s(63543),S=s(27676),I=s(25899),q=s(62204),w=s(78952);const O=new d.X({originalAndCurrentFeatures:"original-and-current-features",none:"none"});async function C(e){if("string"==typeof e){return(0,f.sJ)(e)||{data:e}}return new Promise(((t,s)=>{const r=new FileReader;r.readAsDataURL(e),r.onload=()=>t((0,f.sJ)(r.result)),r.onerror=e=>s(e)}))}const T=new Set(["Feature Layer","Table"]),x=new d.X({Started:"published",Publishing:"publishing",Stopped:"unavailable"});let E=class extends c.Z{constructor(){super(...arguments),this.type="feature-layer",this.refresh=(0,y.Ds)((async()=>{await this.load();const e=this.sourceJSON.editingInfo?.lastEditDate;if(null==e)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const t=e!==this.sourceJSON.editingInfo?.lastEditDate;return{dataChanged:t,updates:t?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}}))}load(e){const t=(0,h.pC)(e)?e.signal:null,s=this.layer.sourceJSON;return this.addResolvingPromise(this._fetchService(s,t)),Promise.resolve(this)}get queryTask(){const{capabilities:e,parsedUrl:t,dynamicDataSource:s,infoFor3D:r,gdbVersion:a,spatialReference:i,fieldsIndex:n}=this.layer,o=(0,l.Z)("featurelayer-pbf")&&e?.query.supportsFormatPBF&&(0,h.Wi)(r),u=e?.operations?.supportsQueryAttachments??!1;return new S.Z({url:t.path,pbfSupported:o,fieldsIndex:n,infoFor3D:r,dynamicDataSource:s,gdbVersion:a,sourceSpatialReference:i,queryAttachmentsSupported:u})}async addAttachment(e,t){await this.load();const s=e.attributes[this.layer.objectIdField],r=this.layer.parsedUrl.path+"/"+s+"/addAttachment",a=this._getLayerRequestOptions(),i=this._getFormDataForAttachment(t,a.query);try{const e=await(0,n.default)(r,{body:i});return this._createFeatureEditResult(e.data.addAttachmentResult)}catch(o){throw this._createAttachmentErrorResult(s,o)}}async updateAttachment(e,t,s){await this.load();const r=e.attributes[this.layer.objectIdField],a=this.layer.parsedUrl.path+"/"+r+"/updateAttachment",i=this._getLayerRequestOptions({query:{attachmentId:t}}),o=this._getFormDataForAttachment(s,i.query);try{const e=await(0,n.default)(a,{body:o});return this._createFeatureEditResult(e.data.updateAttachmentResult)}catch(u){throw this._createAttachmentErrorResult(r,u)}}async applyEdits(e,t){await this.load();const s=this.layer.infoFor3D,r=(0,h.pC)(s),a=r||(t?.globalIdUsed??!1),o=e.addFeatures?.map((e=>this._serializeFeature(e,s))).filter(h.pC)??[],u=e.updateFeatures?.map((e=>this._serializeFeature(e,s))).filter(h.pC)??[],l=this._getFeatureIds(e.deleteFeatures,a);(0,q.P)(o,u,this.layer.spatialReference);const d=[],c=[],p=[...e.deleteAttachments??[]];for(const i of e.addAttachments??[])d.push(await this._serializeAttachment(i));for(const i of e.updateAttachments??[])c.push(await this._serializeAttachment(i));const y=d.length||c.length||p.length?{adds:d,updates:c,deletes:p}:null;let f,m=null;if(r){m=new Map;const t=[];for(const r of e.addAssets??[])t.push(this._serializeAssetMapEditAndUploadAssets(r,m));const s=await Promise.all(t);f=s.length?{adds:s,updates:[],deletes:[]}:void 0}const _={gdbVersion:t?.gdbVersion||this.layer.gdbVersion,rollbackOnFailure:t?.rollbackOnFailureEnabled,useGlobalIds:a,returnEditMoment:t?.returnEditMoment,usePreviousEditMoment:t?.usePreviousEditMoment,sessionId:t?.sessionId};t?.returnServiceEditsOption?(_.edits=JSON.stringify([{id:this.layer.layerId,adds:o,updates:u,deletes:l,attachments:y,assetMaps:(0,h.Wg)(f)}]),_.returnServiceEditsOption=O.toJSON(t?.returnServiceEditsOption),_.returnServiceEditsInSourceSR=t?.returnServiceEditsInSourceSR):(_.adds=o.length?JSON.stringify(o):null,_.updates=u.length?JSON.stringify(u):null,_.deletes=l.length?a?JSON.stringify(l):l.join(","):null,_.attachments=y&&JSON.stringify(y),_.assetMaps=(0,h.pC)(f)?JSON.stringify(f):void 0);const g=this._getLayerRequestOptions({method:"post",query:_}),b=t?.returnServiceEditsOption?this.layer.url:this.layer.parsedUrl.path,F=await(0,n.default)(b+"/applyEdits",g);if(!this.layer.capabilities.operations?.supportsEditing&&this.layer.effectiveCapabilities?.operations?.supportsEditing){const e=i.id?.findCredential(this.layer.url);await(e?.refreshToken())}if(r&&null!=F.data&&null!=F.data.assetMaps){const e=F.data,t=this.layer.objectIdField,s=[];for(const i of e.addResults)i.success&&s.push(i.objectId);for(const i of e.updateResults)i.success&&s.push(i.objectId);const r=this._createRequestQueryOptions(),a=await(0,n.default)(b+"/query",{...r,query:{f:"json",formatOf3DObjects:"3D_glb",where:`OBJECTID IN (${s.join(",")})`,outFields:`${t}`}});if(a&&a.data&&a.data.assetMaps&&(0,h.pC)(m)){const e=a.data.assetMaps;for(const t of e){const e=m.get(t.parentGlobalId).geometry;(0,h.pC)(e)&&"mesh"===e.type&&e.updateExternalSource({source:[{name:t.assetName,source:t.assetName}],extent:e.extent})}}}return this._createEditsResult(F)}async deleteAttachments(e,t){await this.load();const s=e.attributes[this.layer.objectIdField],r=this.layer.parsedUrl.path+"/"+s+"/deleteAttachments";try{return(await(0,n.default)(r,this._getLayerRequestOptions({query:{attachmentIds:t.join(",")},method:"post"}))).data.deleteAttachmentResults.map(this._createFeatureEditResult)}catch(a){throw this._createAttachmentErrorResult(s,a)}}fetchRecomputedExtents(e={}){const t=e.signal;return this.load({signal:t}).then((async()=>{const t=this._getLayerRequestOptions({...e,query:{returnUpdates:!0}}),{layerId:s,url:r}=this.layer,{data:a}=await(0,n.default)(`${r}/${s}`,t),{id:i,extent:u,fullExtent:l,timeExtent:d}=a,c=u||l;return{id:i,fullExtent:c&&g.Z.fromJSON(c),timeExtent:d&&o.Z.fromJSON({start:d[0],end:d[1]})}}))}async queryAttachments(e,t={}){await this.load();const s=this._getLayerRequestOptions(t);return this.queryTask.executeAttachmentQuery(e,s)}async queryFeatures(e,t){return await this.load(),this.queryTask.execute(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeaturesJSON(e,t){return await this.load(),this.queryTask.executeJSON(e,{...t,query:this._createRequestQueryOptions(t)})}async queryObjectIds(e,t){return await this.load(),this.queryTask.executeForIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeatureCount(e,t){return await this.load(),this.queryTask.executeForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryExtent(e,t){return await this.load(),this.queryTask.executeForExtent(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeatures(e,t){return await this.load(),this.queryTask.executeRelationshipQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeaturesCount(e,t){return await this.load(),this.queryTask.executeRelationshipQueryForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopFeatures(e,t){return await this.load(),this.queryTask.executeTopFeaturesQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopObjectIds(e,t){return await this.load(),this.queryTask.executeForTopIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopExtents(e,t){return await this.load(),this.queryTask.executeForTopExtents(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopCount(e,t){return await this.load(),this.queryTask.executeForTopCount(e,{...t,query:this._createRequestQueryOptions(t)})}async fetchPublishingStatus(){if(!(0,I.M8)(this.layer.url))return"unavailable";const e=(0,f.v_)(this.layer.url,"status"),t=await(0,n.default)(e,{query:{f:"json"}});return x.fromJSON(t.data.status)}_createRequestQueryOptions(e){const t={...this.layer.customParameters,token:this.layer.apiKey,...e?.query};return this.layer.datesInUnknownTimezone&&(t.timeReferenceUnknownClient=!0),t}async _fetchService(e,t){if(!e){const{data:s}=await(0,n.default)(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:(0,l.Z)("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:t}));e=s}this.sourceJSON=this._patchServiceJSON(e);const s=e.type;if(!T.has(s))throw new u.Z("feature-layer-source:unsupported-type",`Source type "${s}" is not supported`)}_patchServiceJSON(e){if("Table"!==e.type&&e.geometryType&&!e?.drawingInfo?.renderer&&!e.defaultSymbol){const t=(0,R.bU)(e.geometryType).renderer;(0,p.RB)("drawingInfo.renderer",t,e)}return"esriGeometryMultiPatch"===e.geometryType&&e.infoFor3D&&(e.geometryType="mesh"),e}_serializeFeature(e,t){const{geometry:s,attributes:r}=e;if((0,h.pC)(t)&&(0,h.pC)(e.geometry)&&"mesh"===e.geometry.type){const s={...r},a=e.geometry,i=a.origin,n=a.transform;if(s[t.transformFieldRoles.originX]=i.x,s[t.transformFieldRoles.originY]=i.y,s[t.transformFieldRoles.originZ]=i.z,(0,h.pC)(n)){const e=n.translation,r=n.scale,a=n.rotation;s[t.transformFieldRoles.translationX]=e[0],s[t.transformFieldRoles.translationY]=-e[2],s[t.transformFieldRoles.translationZ]=e[1],s[t.transformFieldRoles.scaleX]=r[0],s[t.transformFieldRoles.scaleY]=r[1],s[t.transformFieldRoles.scaleZ]=r[2],s[t.transformFieldRoles.rotationX]=a[0],s[t.transformFieldRoles.rotationY]=a[2],s[t.transformFieldRoles.rotationZ]=a[1],s[t.transformFieldRoles.rotationDeg]=a[3]}return{geometry:null,attributes:s}}return(0,h.Wi)(s)?{attributes:r}:"mesh"===s.type||"extent"===s.type?null:{geometry:s.toJSON(),attributes:r}}async _serializeAttachment(e){const{feature:t,attachment:s}=e,{globalId:r,name:a,contentType:i,data:n,uploadId:o}=s,u={globalId:r,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null};if(t&&(u.parentGlobalId="attributes"in t?t.attributes&&t.attributes[this.layer.globalIdField]:t.globalId),o)u.uploadId=o;else if(n){const e=await C(n);e&&(u.contentType=e.mediaType,u.data=e.data),n instanceof File&&(u.name=n.name)}return a&&(u.name=a),i&&(u.contentType=i),u}async _serializeAssetMapEditAndUploadAssets(e,t){const s=this.layer.url;let r=null;try{const t=new Blob([e.data],{type:e.mimeType}),a=new FormData;a.append("f","json"),a.append("file",t,`${e.assetName}`);const i={body:a,method:"post",responseType:"json"},{data:o}=await(0,n.default)(`${s}/uploads/upload`,i);if(!o.success)throw new u.Z("feature-layer-source:upload-failure","Expected upload to be successfull.");r={assetType:e.assetType,assetUploadId:o.item.itemID}}catch(c){r=null}if((0,h.Wi)(r)){const t=await C(new Blob([e.data]));if(!t.isBase64)throw new u.Z("feature-layer-source:uploadAssets-failure","Expected gltf data in base64 format after conversion.");r={assetType:e.assetType,assetData:t.data}}if((0,h.Wi)(r))throw new u.Z("feature-layer-source:uploadAssets-failure","Unable to prepare uploadAsset request options.");const a={method:"post",query:{f:"json",assets:JSON.stringify([r])},responseType:"json"},i=await(0,n.default)((0,f.v_)(this.layer.parsedUrl.path,"uploadAssets"),a);if(1!==i.data.uploadResults.length||!i.data.uploadResults[0].success)throw new u.Z("feature-layer-source:uploadAssets-failure","Bad response.");const o=i.data.uploadResults[0].assetHash,l=[];e.flags&F.i.PROJECT_VERTICES&&l.push("PROJECT_VERTICES");const d={globalId:e.assetMapGlobalId,parentGlobalId:e.featureGlobalId,assetName:e.assetName,assetHash:o,flags:l};return t.set(e.featureGlobalId,e.feature),d}_getFeatureIds(e,t){const s=e?.[0];return s?this._canUseGlobalIds(t,e)?this._getGlobalIdsFromFeatureIdentifier(e):"objectId"in s?this._getObjectIdsFromFeatureIdentifier(e):this._getIdsFromFeatures(e):[]}_getIdsFromFeatures(e){const t=this.layer.objectIdField;return e.map((e=>e.attributes&&e.attributes[t]))}_canUseGlobalIds(e,t){return e&&"globalId"in t[0]}_getObjectIdsFromFeatureIdentifier(e){return e.map((e=>e.objectId))}_getGlobalIdsFromFeatureIdentifier(e){return e.map((e=>e.globalId))}_createEditsResult(e){const t=e.data,{layerId:s}=this.layer,r=[];let a=null;if(Array.isArray(t))for(const o of t)r.push({id:o.id,editedFeatures:o.editedFeatures}),o.id===s&&(a={addResults:o.addResults??[],updateResults:o.updateResults??[],deleteResults:o.deleteResults??[],attachments:o.attachments,editMoment:o.editMoment});else a=t;const i=a?.attachments,n={addFeatureResults:a?.addResults?.map(this._createFeatureEditResult,this)??[],updateFeatureResults:a?.updateResults?.map(this._createFeatureEditResult,this)??[],deleteFeatureResults:a?.deleteResults?.map(this._createFeatureEditResult,this)??[],addAttachmentResults:i&&i.addResults?i.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:i&&i.updateResults?i.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:i&&i.deleteResults?i.deleteResults.map(this._createFeatureEditResult,this):[]};if(a?.editMoment&&(n.editMoment=a.editMoment),r.length>0){n.editedFeatureResults=[];for(const e of r){const{editedFeatures:t}=e,s=t?.spatialReference?new w.Z(t.spatialReference):null;n.editedFeatureResults.push({layerId:e.id,editedFeatures:{adds:t?.adds?.map((e=>this._createEditedFeature(e,s)))||[],updates:t?.updates?.map((e=>({original:this._createEditedFeature(e[0],s),current:this._createEditedFeature(e[1],s)})))||[],deletes:t?.deletes?.map((e=>this._createEditedFeature(e,s)))||[],spatialReference:s}})}}return n}_createEditedFeature(e,t){return new a.Z({attributes:e.attributes,geometry:(0,b.im)({...e.geometry,spatialReference:t})})}_createFeatureEditResult(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new u.Z("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}_createAttachmentErrorResult(e,t){const s=t.details.messages&&t.details.messages[0]||t.message,r=t.details.httpStatus||t.details.messageCode;return{objectId:e,globalId:null,error:new u.Z("feature-layer-source:attachment-failure",s,{code:r})}}_getFormDataForAttachment(e,t){const s=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(s)for(const r in t){const e=t[r];null!=e&&(s.set?s.set(r,e):s.append(r,e))}return s}_getLayerRequestOptions(e={}){const{parsedUrl:t,gdbVersion:s,dynamicDataSource:r}=this.layer;return{...e,query:{gdbVersion:s,layer:r?JSON.stringify({source:r}):void 0,...t.query,f:"json",...this._createRequestQueryOptions(e)},responseType:"json"}}};(0,r._)([(0,m.Cb)()],E.prototype,"type",void 0),(0,r._)([(0,m.Cb)({constructOnly:!0})],E.prototype,"layer",void 0),(0,r._)([(0,m.Cb)({readOnly:!0})],E.prototype,"queryTask",null),E=(0,r._)([(0,_.j)("esri.layers.graphics.sources.FeatureLayerSource")],E);const D=E},27676:(e,t,s)=>{s.d(t,{Z:()=>A});var r=s(27366),a=s(85015),i=s(10064),n=s(93169),o=s(92026),u=s(66978),l=s(35995),d=s(49861),c=(s(25243),s(63780),s(69912)),h=s(64020),p=s(23084),y=s(34211),f=(s(59486),s(5192)),m=s(86638),_=s(53866);var g=s(24246),b=s(77946),F=s(93501),R=s(83406);function S(e,t){return t}function I(e,t,s,r){switch(s){case 0:return C(e,t+r,0);case 1:return"lowerLeft"===e.originPosition?C(e,t+r,1):function({translate:e,scale:t},s,r){return e[r]-s*t[r]}(e,t+r,1)}}function q(e,t,s,r){return 2===s?C(e,t,2):I(e,t,s,r)}function w(e,t,s,r){return 2===s?C(e,t,3):I(e,t,s,r)}function O(e,t,s,r){return 3===s?C(e,t,3):q(e,t,s,r)}function C({translate:e,scale:t},s,r){return e[r]+s*t[r]}class T{constructor(e){this._options=e,this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=S,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{}}createFeatureResult(){return{fields:[],features:[]}}finishFeatureResult(e){if(this._options.applyTransform&&(e.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!e.hasZ)return;const t=(0,F.k)(e.geometryType,this._options.sourceSpatialReference,e.spatialReference);if(!(0,o.Wi)(t))for(const s of e.features)t(s.geometry)}createSpatialReference(){return{}}addField(e,t){const s=e.fields;(0,o.O3)(s),s.push(t);const r=s.map((e=>e.name));this._attributesConstructor=function(){for(const e of r)this[e]=null}}addFeature(e,t){e.features.push(t)}prepareFeatures(e){switch(this._transform=e.transform,this._options.applyTransform&&e.transform&&(this._applyTransform=this._deriveApplyTransform(e)),this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++,e.geometryType){case"esriGeometryPoint":this.addCoordinate=(e,t,s)=>this.addCoordinatePoint(e,t,s),this.createGeometry=e=>this.createPointGeometry(e);break;case"esriGeometryPolygon":this.addCoordinate=(e,t,s)=>this._addCoordinatePolygon(e,t,s),this.createGeometry=e=>this._createPolygonGeometry(e);break;case"esriGeometryPolyline":this.addCoordinate=(e,t,s)=>this._addCoordinatePolyline(e,t,s),this.createGeometry=e=>this._createPolylineGeometry(e);break;case"esriGeometryMultipoint":this.addCoordinate=(e,t,s)=>this._addCoordinateMultipoint(e,t,s),this.createGeometry=e=>this._createMultipointGeometry(e)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,{attributes:new this._attributesConstructor}}allocateCoordinates(){}addLength(e,t,s){0===this._lengths.length&&(this._toAddInCurrentPath=t),this._lengths.push(t)}addQueryGeometry(e,t){const{queryGeometry:s,queryGeometryType:r}=t,a=(0,R.$g)(s.clone(),s,!1,!1,this._transform),i=(0,R.di)(a,r,!1,!1);e.queryGeometryType=r,e.queryGeometry={...i}}createPointGeometry(e){const t={x:0,y:0,spatialReference:e.spatialReference};return e.hasZ&&(t.z=0),e.hasM&&(t.m=0),t}addCoordinatePoint(e,t,s){const r=(0,o.s3)(this._transform,"transform");switch(t=this._applyTransform(r,t,s,0),s){case 0:e.x=t;break;case 1:e.y=t;break;case 2:"z"in e?e.z=t:e.m=t;break;case 3:e.m=t}}_transformPathLikeValue(e,t){let s=0;t<=1&&(s=this._previousCoordinate[t],this._previousCoordinate[t]+=e);const r=(0,o.s3)(this._transform,"transform");return this._applyTransform(r,e,t,s)}_addCoordinatePolyline(e,t,s){this._dehydratedAddPointsCoordinate(e.paths,t,s)}_addCoordinatePolygon(e,t,s){this._dehydratedAddPointsCoordinate(e.rings,t,s)}_addCoordinateMultipoint(e,t,s){0===s&&e.points.push([]);const r=this._transformPathLikeValue(t,s);e.points[e.points.length-1].push(r)}_createPolygonGeometry(e){return{rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createPolylineGeometry(e){return{paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createMultipointGeometry(e){return{points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_dehydratedAddPointsCoordinate(e,t,s){0===s&&0==this._toAddInCurrentPath--&&(e.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const r=this._transformPathLikeValue(t,s),a=e[e.length-1];0===s&&(this._coordinateBufferPtr=0,this._coordinateBuffer=new Array(this._vertexDimension),a.push(this._coordinateBuffer)),this._coordinateBuffer[this._coordinateBufferPtr++]=r}_deriveApplyTransform(e){const{hasZ:t,hasM:s}=e;return t&&s?O:t?q:s?w:I}}var x=s(49818);async function E(e,t,s){const r=(0,p.en)(e),a={...s},i=m.Z.from(t),n=!i.quantizationParameters,{data:o}=await(0,f.qp)(r,i,new T({sourceSpatialReference:i.sourceSpatialReference,applyTransform:n}),a);return o}let D=class extends a.Z{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return(0,l.mN)(this.url)}async execute(e,t){const s=await this.executeJSON(e,t);return this.featureSetFromJSON(e,s,t)}async executeJSON(e,t){const s=this._normalizeQuery(e),r=null!=e.outStatistics?.[0],a=(0,n.Z)("featurelayer-pbf-statistics"),i=!r||a;let o;if(this.pbfSupported&&i)try{o=await E(this.url,s,t)}catch(u){if("query:parsing-pbf"!==u.name)throw u;this.pbfSupported=!1}return this.pbfSupported&&i||(o=await(0,b.F)(this.url,s,t)),this._normalizeFields(o.fields),o}async featureSetFromJSON(e,t,r){if(!this._queryIs3DObjectFormat(e)||(0,o.Wi)(this.infoFor3D)||!t.assetMaps||!t.features||!t.features.length)return x.Z.fromJSON(t);const{meshFeatureSetFromJSON:a}=await(0,u.Hl)(Promise.all([s.e(5158),s.e(7898),s.e(8236)]).then(s.bind(s,58236)),r);return a(e,this.infoFor3D,t)}executeForCount(e,t){return(0,y.P)(this.url,this._normalizeQuery(e),t)}executeForExtent(e,t){return async function(e,t,s){const r=(0,p.en)(e);return(0,f.Vr)(r,m.Z.from(t),{...s}).then((e=>({count:e.data.count,extent:_.Z.fromJSON(e.data.extent)})))}(this.url,this._normalizeQuery(e),t)}executeForIds(e,t){return(0,g.G)(this.url,this._normalizeQuery(e),t)}async executeRelationshipQuery(e,t){const[{default:r},{executeRelationshipQuery:a}]=await(0,u.Hl)(Promise.all([Promise.resolve().then(s.bind(s,99086)),s.e(2964).then(s.bind(s,12964))]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),a(this.url,e,t)}async executeRelationshipQueryForCount(e,t){const[{default:r},{executeRelationshipQueryForCount:a}]=await(0,u.Hl)(Promise.all([Promise.resolve().then(s.bind(s,99086)),s.e(2964).then(s.bind(s,12964))]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),a(this.url,e,t)}async executeAttachmentQuery(e,t){const{executeAttachmentQuery:r,fetchAttachments:a,processAttachmentQueryResult:i}=await(0,u.Hl)(s.e(9301).then(s.bind(s,59301)),t),n=(0,p.en)(this.url);return i(n,await(this.queryAttachmentsSupported?r(n,e,t):a(n,e,t)))}async executeTopFeaturesQuery(e,t){const{executeTopFeaturesQuery:r}=await(0,u.Hl)(s.e(2200).then(s.bind(s,82200)),t);return r(this.parsedUrl,e,this.sourceSpatialReference,t)}async executeForTopIds(e,t){const{executeForTopIds:r}=await(0,u.Hl)(s.e(5182).then(s.bind(s,75182)),t);return r(this.parsedUrl,e,t)}async executeForTopExtents(e,t){const{executeForTopExtents:r}=await(0,u.Hl)(s.e(5641).then(s.bind(s,55641)),t);return r(this.parsedUrl,e,t)}async executeForTopCount(e,t){const{executeForTopCount:r}=await(0,u.Hl)(s.e(9406).then(s.bind(s,19406)),t);return r(this.parsedUrl,e,t)}_normalizeQuery(e){let t=m.Z.from(e);if(t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?h.n.from(e.dynamicDataSource):this.dynamicDataSource),(0,o.pC)(this.infoFor3D)&&this._queryIs3DObjectFormat(e)){t=t===e?t.clone():t,t.formatOf3DObjects=null;for(const e of this.infoFor3D.queryFormats){if("3D_glb"===e){t.formatOf3DObjects=e;break}"3D_gltf"!==e||t.formatOf3DObjects||(t.formatOf3DObjects=e)}if(!t.formatOf3DObjects)throw new i.Z("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if((0,o.Wi)(t.outFields)||!t.outFields.includes("*")){t=t===e?t.clone():t,(0,o.Wi)(t.outFields)&&(t.outFields=[]);const{originX:s,originY:r,originZ:a,translationX:i,translationY:n,translationZ:u,scaleX:l,scaleY:d,scaleZ:c,rotationX:h,rotationY:p,rotationZ:y,rotationDeg:f}=this.infoFor3D.transformFieldRoles;t.outFields.push(s,r,a,i,n,u,l,d,c,h,p,y,f)}}return t}_normalizeFields(e){if((0,o.pC)(this.fieldsIndex)&&(0,o.pC)(e))for(const t of e){const e=this.fieldsIndex.get(t.name);e&&Object.assign(t,e.toJSON())}}_queryIs3DObjectFormat(e){return(0,o.pC)(this.infoFor3D)&&!0===e.returnGeometry&&"xyFootprint"!==e.multipatchOption&&!e.outStatistics}};(0,r._)([(0,d.Cb)({type:h.n})],D.prototype,"dynamicDataSource",void 0),(0,r._)([(0,d.Cb)()],D.prototype,"fieldsIndex",void 0),(0,r._)([(0,d.Cb)()],D.prototype,"gdbVersion",void 0),(0,r._)([(0,d.Cb)()],D.prototype,"infoFor3D",void 0),(0,r._)([(0,d.Cb)({readOnly:!0})],D.prototype,"parsedUrl",null),(0,r._)([(0,d.Cb)()],D.prototype,"pbfSupported",void 0),(0,r._)([(0,d.Cb)()],D.prototype,"queryAttachmentsSupported",void 0),(0,r._)([(0,d.Cb)()],D.prototype,"sourceSpatialReference",void 0),(0,r._)([(0,d.Cb)({type:String})],D.prototype,"url",void 0),D=(0,r._)([(0,c.j)("esri.tasks.QueryTask")],D);const A=D},34211:(e,t,s)=>{s.d(t,{P:()=>n});var r=s(23084),a=s(5192),i=s(86638);async function n(e,t,s){const n=(0,r.en)(e);return(0,a.hH)(n,i.Z.from(t),{...s}).then((e=>e.data.count))}},24246:(e,t,s)=>{s.d(t,{G:()=>n});var r=s(23084),a=s(5192),i=s(86638);async function n(e,t,s){const n=(0,r.en)(e);return(0,a.Ev)(n,i.Z.from(t),{...s}).then((e=>e.data.objectIds))}}}]);
//# sourceMappingURL=5026.cca7b8b9.chunk.js.map