"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[5641],{55641:(t,e,n)=>{n.r(e),n.d(e,{executeForTopExtents:()=>s});n(59486);var r=n(23084),o=n(88031),i=n(54307),u=n(53866);async function s(t,e,n){const s=(0,r.en)(t),l=await(0,o.m5)(s,i.Z.from(e),{...n});return{count:l.data.count,extent:u.Z.fromJSON(l.data.extent)}}},88031:(t,e,n)=>{n.d(e,{IJ:()=>c,m5:()=>f,vB:()=>m,w7:()=>p});var r=n(76200),o=n(92026),i=n(35995),u=n(77981),s=n(91340),l=n(22585),d=n(68620);const y="Layer does not support extent calculation.";function a(t,e){const n=t.geometry,r=t.toJSON(),i=r;if((0,o.pC)(n)&&(i.geometry=JSON.stringify(n),i.geometryType=(0,u.Ji)(n),i.inSR=n.spatialReference.wkid||JSON.stringify(n.spatialReference)),r.topFilter?.groupByFields&&(i.topFilter.groupByFields=r.topFilter.groupByFields.join(",")),r.topFilter?.orderByFields&&(i.topFilter.orderByFields=r.topFilter.orderByFields.join(",")),r.topFilter&&(i.topFilter=JSON.stringify(i.topFilter)),r.objectIds&&(i.objectIds=r.objectIds.join(",")),r.orderByFields&&(i.orderByFields=r.orderByFields.join(",")),r.outFields&&!(e?.returnCountOnly||e?.returnExtentOnly||e?.returnIdsOnly)?r.outFields.includes("*")?i.outFields="*":i.outFields=r.outFields.join(","):delete i.outFields,r.outSR?i.outSR=r.outSR.wkid||JSON.stringify(r.outSR):n&&r.returnGeometry&&(i.outSR=i.inSR),r.returnGeometry&&delete r.returnGeometry,r.timeExtent){const t=r.timeExtent,{start:e,end:n}=t;null==e&&null==n||(i.time=e===n?e:`${e??"null"},${n??"null"}`),delete r.timeExtent}return i}async function c(t,e,n,r){const o=await F(t,e,"json",r);return(0,d.p)(e,n,o.data),o}async function p(t,e,n){return(0,o.pC)(e.timeExtent)&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:F(t,e,"json",n,{returnIdsOnly:!0})}async function f(t,e,n){return(0,o.pC)(e.timeExtent)&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:F(t,e,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(y);if(e.hasOwnProperty("count"))throw new Error(y);return t}))}function m(t,e,n){return(0,o.pC)(e.timeExtent)&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):F(t,e,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}function F(t,e,n,u={},d={}){const y="string"==typeof t?(0,i.mN)(t):t,c=e.geometry?[e.geometry]:[];return u.responseType="pbf"===n?"array-buffer":"json",(0,s.aX)(c,null,u).then((t=>{const s=t&&t[0];(0,o.pC)(s)&&((e=e.clone()).geometry=s);const c=(0,l.A)({...y.query,f:n,...d,...a(e,d)});return(0,r.default)((0,i.v_)(y.path,"queryTopFeatures"),{...u,query:{...c,...u.query}})}))}}}]);
//# sourceMappingURL=5641.598cef9a.chunk.js.map