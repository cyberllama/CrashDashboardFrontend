"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[2200],{82200:(t,e,n)=>{n.r(e),n.d(e,{executeTopFeaturesQuery:()=>s});var r=n(23084),o=n(88031),i=n(49818),u=n(54307);async function s(t,e,n,s){const l=(0,r.en)(t),y={...s},{data:d}=await(0,o.IJ)(l,u.Z.from(e),n,y);return i.Z.fromJSON(d)}},88031:(t,e,n)=>{n.d(e,{IJ:()=>p,m5:()=>f,vB:()=>m,w7:()=>c});var r=n(76200),o=n(92026),i=n(35995),u=n(77981),s=n(91340),l=n(22585),y=n(68620);const d="Layer does not support extent calculation.";function a(t,e){const n=t.geometry,r=t.toJSON(),i=r;if((0,o.pC)(n)&&(i.geometry=JSON.stringify(n),i.geometryType=(0,u.Ji)(n),i.inSR=n.spatialReference.wkid||JSON.stringify(n.spatialReference)),r.topFilter?.groupByFields&&(i.topFilter.groupByFields=r.topFilter.groupByFields.join(",")),r.topFilter?.orderByFields&&(i.topFilter.orderByFields=r.topFilter.orderByFields.join(",")),r.topFilter&&(i.topFilter=JSON.stringify(i.topFilter)),r.objectIds&&(i.objectIds=r.objectIds.join(",")),r.orderByFields&&(i.orderByFields=r.orderByFields.join(",")),r.outFields&&!(e?.returnCountOnly||e?.returnExtentOnly||e?.returnIdsOnly)?r.outFields.includes("*")?i.outFields="*":i.outFields=r.outFields.join(","):delete i.outFields,r.outSR?i.outSR=r.outSR.wkid||JSON.stringify(r.outSR):n&&r.returnGeometry&&(i.outSR=i.inSR),r.returnGeometry&&delete r.returnGeometry,r.timeExtent){const t=r.timeExtent,{start:e,end:n}=t;null==e&&null==n||(i.time=e===n?e:`${e??"null"},${n??"null"}`),delete r.timeExtent}return i}async function p(t,e,n,r){const o=await F(t,e,"json",r);return(0,y.p)(e,n,o.data),o}async function c(t,e,n){return(0,o.pC)(e.timeExtent)&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:F(t,e,"json",n,{returnIdsOnly:!0})}async function f(t,e,n){return(0,o.pC)(e.timeExtent)&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:F(t,e,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(d);if(e.hasOwnProperty("count"))throw new Error(d);return t}))}function m(t,e,n){return(0,o.pC)(e.timeExtent)&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):F(t,e,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}function F(t,e,n,u={},y={}){const d="string"==typeof t?(0,i.mN)(t):t,p=e.geometry?[e.geometry]:[];return u.responseType="pbf"===n?"array-buffer":"json",(0,s.aX)(p,null,u).then((t=>{const s=t&&t[0];(0,o.pC)(s)&&((e=e.clone()).geometry=s);const p=(0,l.A)({...d.query,f:n,...y,...a(e,y)});return(0,r.default)((0,i.v_)(d.path,"queryTopFeatures"),{...u,query:{...p,...u.query}})}))}}}]);
//# sourceMappingURL=2200.1aa59a0f.chunk.js.map