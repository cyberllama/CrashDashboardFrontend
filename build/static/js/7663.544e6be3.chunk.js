"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[7663],{58971:(n,e,t)=>{t.d(e,{G6:()=>F,Ie:()=>T,J9:()=>g,RF:()=>v,U1:()=>w,vY:()=>s,ym:()=>I});var i=t(92026),a=t(77981);const o=(n,e,t)=>[e,t],l=(n,e,t)=>[e,t,n[2]],r=(n,e,t)=>[e,t,n[2],n[3]];function s(n){return n?{originPosition:"upper-left"===n.originPosition?"upperLeft":"lower-left"===n.originPosition?"lowerLeft":n.originPosition,scale:n.tolerance?[n.tolerance,n.tolerance]:[1,1],translate:(0,i.pC)(n.extent)?[n.extent.xmin,n.extent.ymax]:[0,0]}:null}function u({scale:n,translate:e},t){return Math.round((t-e[0])/n[0])}function f({scale:n,translate:e},t){return Math.round((e[1]-t)/n[1])}function m(n,e,t){const i=[];let a,o,l,r;for(let s=0;s<t.length;s++){const m=t[s];s>0?(l=u(n,m[0]),r=f(n,m[1]),l===a&&r===o||(i.push(e(m,l-a,r-o)),a=l,o=r)):(a=u(n,m[0]),o=f(n,m[1]),i.push(e(m,a,o)))}return i.length>0?i:null}function c({scale:n,translate:e},t){return t*n[0]+e[0]}function d({scale:n,translate:e},t){return e[1]-t*n[1]}function p(n,e,t){const i=new Array(t.length);if(!t.length)return i;const[a,o]=n.scale;let l=c(n,t[0][0]),r=d(n,t[0][1]);i[0]=e(t[0],l,r);for(let s=1;s<t.length;s++){const n=t[s];l+=n[0]*a,r-=n[1]*o,i[s]=e(n,l,r)}return i}function x(n,e,t){const i=new Array(t.length);for(let a=0;a<t.length;a++)i[a]=p(n,e,t[a]);return i}function h(n,e,t,i,a){return e.points=function(n,e,t,i){return m(n,t?i?r:l:i?l:o,e)}(n,t.points,i,a)??[],e}function v(n,e,t,i,a){return e.x=u(n,t.x),e.y=f(n,t.y),e!==t&&(i&&(e.z=t.z),a&&(e.m=t.m)),e}function y(n,e,t,i,a){const s=function(n,e,t,i){const a=[],s=t?i?r:l:i?l:o;for(let o=0;o<e.length;o++){const t=m(n,s,e[o]);t&&t.length>=3&&a.push(t)}return a.length?a:null}(n,t.rings,i,a);return s?(e.rings=s,e):null}function z(n,e,t,i,a){const s=function(n,e,t,i){const a=[],s=t?i?r:l:i?l:o;for(let o=0;o<e.length;o++){const t=m(n,s,e[o]);t&&t.length>=2&&a.push(t)}return a.length?a:null}(n,t.paths,i,a);return s?(e.paths=s,e):null}function I(n,e){return n&&e?(0,a.wp)(e)?v(n,{},e,!1,!1):(0,a.l9)(e)?z(n,{},e,!1,!1):(0,a.oU)(e)?y(n,{},e,!1,!1):(0,a.aW)(e)?h(n,{},e,!1,!1):(0,a.YX)(e)?function(n,e,t,i,a){return e.xmin=u(n,t.xmin),e.ymin=f(n,t.ymin),e.xmax=u(n,t.xmax),e.ymax=f(n,t.ymax),e!==t&&(i&&(e.zmin=t.zmin,e.zmax=t.zmax),a&&(e.mmin=t.mmin,e.mmax=t.mmax)),e}(n,{},e,!1,!1):null:null}function g(n,e,t,a,s){return(0,i.pC)(t)&&(e.points=function(n,e,t,i){return p(n,t?i?r:l:i?l:o,e)}(n,t.points,a,s)),e}function w(n,e,t,a,o){return(0,i.Wi)(t)||(e.x=c(n,t.x),e.y=d(n,t.y),e!==t&&(a&&(e.z=t.z),o&&(e.m=t.m))),e}function T(n,e,t,a,s){return(0,i.pC)(t)&&(e.rings=function(n,e,t,i){return x(n,t?i?r:l:i?l:o,e)}(n,t.rings,a,s)),e}function F(n,e,t,a,s){return(0,i.pC)(t)&&(e.paths=function(n,e,t,i){return x(n,t?i?r:l:i?l:o,e)}(n,t.paths,a,s)),e}},57663:(n,e,t)=>{t.r(e),t.d(e,{classBreaks:()=>h,heatmapStatistics:()=>y,histogram:()=>v,summaryStatistics:()=>p,uniqueValues:()=>x});t(59486),t(10064);var i=t(92026),a=t(17842),o=t(78952),l=t(58971),r=t(92975),s=(t(80031),t(27811)),u=t(71486),f=t(819),m=t(585);let c=null;async function d(n,e){if(!e)return[];const{field:t,field2:i,field3:a,fieldDelimiter:l}=n,r=n.valueExpression,s=n.normalizationType,m=n.normalizationField,d=n.normalizationTotal,p=[],x=n.viewInfoParams;let h=null,v=null;if(r){if(!c){const{arcadeUtils:n}=await(0,f.LC)();c=n}h=c.createFunction(r),v=x&&c.getViewInfo({viewingMode:x.viewingMode,scale:x.scale,spatialReference:new o.Z(x.spatialReference)})}const y=n.fieldInfos,z=e[0]&&"declaredClass"in e[0]&&"esri.Graphic"===e[0].declaredClass||!y?null:{fields:y};return e.forEach((n=>{const e=n.attributes;let o;if(r){const e=z?{...n,layer:z}:n,t=c.createExecContext(e,v);o=c.executeFunction(h,t)}else e&&(o=e[t],i&&(o=`${(0,u.wk)(o)}${l}${(0,u.wk)(e[i])}`,a&&(o=`${o}${l}${(0,u.wk)(e[a])}`)));if(s&&"number"==typeof o&&isFinite(o)){const n=e&&parseFloat(e[m]);o=(0,u.fk)(o,s,n,d)}p.push(o)})),p}async function p(n){const{attribute:e,features:t}=n,{normalizationType:i,normalizationField:a,minValue:o,maxValue:l,fieldType:r}=e,s=await d({field:e.field,valueExpression:e.valueExpression,normalizationType:i,normalizationField:a,normalizationTotal:e.normalizationTotal,viewInfoParams:e.viewInfoParams,fieldInfos:e.fieldInfos},t),f=(0,u.S5)({normalizationType:i,normalizationField:a,minValue:o,maxValue:l}),m={value:.5,fieldType:r},c="esriFieldTypeString"===r?(0,u.H0)({values:s,supportsNullCount:f,percentileParams:m}):(0,u.i5)({values:s,minValue:o,maxValue:l,useSampleStdDev:!i,supportsNullCount:f,percentileParams:m});return(0,u.F_)(c,"esriFieldTypeDate"===r)}async function x(n){const{attribute:e,features:t}=n,i=await d({field:e.field,field2:e.field2,field3:e.field3,fieldDelimiter:e.fieldDelimiter,valueExpression:e.valueExpression,viewInfoParams:e.viewInfoParams,fieldInfos:e.fieldInfos},t),a=(0,u.eT)(i);return(0,u.Qm)(a,e.domains,e.returnAllCodedValues,e.fieldDelimiter)}async function h(n){const{attribute:e,features:t}=n,{field:i,normalizationType:a,normalizationField:o,normalizationTotal:l,classificationMethod:r}=e,s=await d({field:i,valueExpression:e.valueExpression,normalizationType:a,normalizationField:o,normalizationTotal:l,viewInfoParams:e.viewInfoParams,fieldInfos:e.fieldInfos},t),f=(0,u.G2)(s,{field:i,normalizationType:a,normalizationField:o,normalizationTotal:l,classificationMethod:r,standardDeviationInterval:e.standardDeviationInterval,numClasses:e.numClasses,minValue:e.minValue,maxValue:e.maxValue});return(0,u.DL)(f,r)}async function v(n){const{attribute:e,features:t}=n,{field:i,normalizationType:a,normalizationField:o,normalizationTotal:l,classificationMethod:r}=e,s=await d({field:i,valueExpression:e.valueExpression,normalizationType:a,normalizationField:o,normalizationTotal:l,viewInfoParams:e.viewInfoParams,fieldInfos:e.fieldInfos},t);return(0,u.oF)(s,{field:i,normalizationType:a,normalizationField:o,normalizationTotal:l,classificationMethod:r,standardDeviationInterval:e.standardDeviationInterval,numBins:e.numBins,minValue:e.minValue,maxValue:e.maxValue})}async function y(n){const{attribute:e,features:t}=n,{field:o,radius:u,fieldOffset:f,transform:c,spatialReference:d,size:p}=e,x=function(n,e,t,a){const o=(0,r.MP)(t)?(0,r.C5)(t):null,s=o?Math.round((o.valid[1]-o.valid[0])/e.scale[0]):null;return n.map((n=>{const t=new m.Z((0,i.Wg)(n.geometry));return(0,l.RF)(e,t,t,t.hasZ,t.hasM),n.geometry=o?function(n,e,t){return n.x<0?n.x+=e:n.x>t&&(n.x-=e),n}(t,s,a[0]):t,n}))}(t,c,d,p),{count:h,min:v,max:y,mean:z,stdDev:I}=function(n,e=18,t,i,o,l){const r=new Float64Array(o*l);e=Math.round((0,a.F2)(e));let u=Number.POSITIVE_INFINITY,f=Number.NEGATIVE_INFINITY,m=0,c=0,d=0,p=0;const x=(0,s.wx)(i,t);for(const{geometry:a,attributes:v}of n){const{x:n,y:t}=a,i=Math.max(0,n-e),h=Math.max(0,t-e),y=Math.min(l,t+e),z=Math.min(o,n+e),I=+x(v);for(let a=h;a<y;a++)for(let l=i;l<z;l++){const i=a*o+l,x=(0,s.If)(l-n,a-t,e),h=r[i];m=r[i]+=x*I;const v=m-h;c+=v,d+=v*v,m<u&&(u=m),m>f&&(f=m),p++}}if(!p)return{mean:0,stddev:0,min:0,max:0,mid:0,count:0};const h=(f-u)/2;return{mean:c/p,stdDev:Math.sqrt((d-c*c/p)/p),min:u,max:f,mid:h,count:p}}(x,u,f,o,p[0],p[1]);return{count:h,min:v,max:y,avg:z,stddev:I}}}}]);
//# sourceMappingURL=7663.544e6be3.chunk.js.map