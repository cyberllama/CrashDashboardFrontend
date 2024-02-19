"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[1486],{96783:(e,n,t)=>{t.d(n,{Z:()=>d});var l=t(27366),a=t(43404),i=t(46784),r=t(49861),o=(t(25243),t(63780),t(27135)),s=t(69912);const u=new a.X({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation",esriClassifyDefinedInterval:"defined-interval"}),c=new a.X({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"});let f=class extends i.wq{constructor(e){super(e),this.type="class-breaks-definition",this.breakCount=null,this.classificationField=null,this.classificationMethod=null,this.normalizationField=null,this.normalizationType=null}set standardDeviationInterval(e){"standard-deviation"===this.classificationMethod&&this._set("standardDeviationInterval",e)}set definedInterval(e){"defined-interval"===this.classificationMethod&&this._set("definedInterval",e)}};(0,l._)([(0,o.J)({classBreaksDef:"class-breaks-definition"})],f.prototype,"type",void 0),(0,l._)([(0,r.Cb)({json:{write:!0}})],f.prototype,"breakCount",void 0),(0,l._)([(0,r.Cb)({json:{write:!0}})],f.prototype,"classificationField",void 0),(0,l._)([(0,r.Cb)({type:String,json:{read:u.read,write:u.write}})],f.prototype,"classificationMethod",void 0),(0,l._)([(0,r.Cb)({json:{write:!0}})],f.prototype,"normalizationField",void 0),(0,l._)([(0,r.Cb)({json:{read:c.read,write:c.write}})],f.prototype,"normalizationType",void 0),(0,l._)([(0,r.Cb)({value:null,json:{write:!0}})],f.prototype,"standardDeviationInterval",null),(0,l._)([(0,r.Cb)({value:null,json:{write:!0}})],f.prototype,"definedInterval",null),f=(0,l._)([(0,s.j)("esri.rest.support.ClassBreaksDefinition")],f);const d=f},51905:(e,n,t)=>{t.d(n,{k:()=>i});const l=t(32718).Z.getLogger("esri.rest.support.generateRendererUtils");function a(e,n){return Number(e.toFixed(n))}function i(e){const{normalizationTotal:n}=e;return{classBreaks:r(e),normalizationTotal:n}}function r(e){const n=e.definition,{classificationMethod:t,normalizationType:l,definedInterval:i}=n,r=n.breakCount??1,c=[];let f=e.values;if(0===f.length)return[];f=f.sort(((e,n)=>e-n));const d=f[0],m=f[f.length-1];if("equal-interval"===t)if(f.length>=r){const e=(m-d)/r;let n=d;for(let t=1;t<r;t++){const i=a(d+t*e,6);c.push({minValue:n,maxValue:i,label:o(n,i,l)}),n=i}c.push({minValue:n,maxValue:m,label:o(n,m,l)})}else f.forEach((e=>{c.push({minValue:e,maxValue:e,label:o(e,e,l)})}));else if("natural-breaks"===t){const n=s(f),t=e.valueFrequency||n.valueFrequency,i=u(n.uniqueValues,t,r);let p=d;for(let e=1;e<r;e++)if(n.uniqueValues.length>e){const t=a(n.uniqueValues[i[e]],6);c.push({minValue:p,maxValue:t,label:o(p,t,l)}),p=t}c.push({minValue:p,maxValue:m,label:o(p,m,l)})}else if("quantile"===t)if(f.length>=r&&d!==m){let e=d,n=Math.ceil(f.length/r),t=0;for(let a=1;a<r;a++){let i=n+t-1;i>f.length&&(i=f.length-1),i<0&&(i=0),c.push({minValue:e,maxValue:f[i],label:o(e,f[i],l)}),e=f[i],t+=n,n=Math.ceil((f.length-t)/(r-a))}c.push({minValue:e,maxValue:m,label:o(e,m,l)})}else{let e=-1;for(let n=0;n<f.length;n++){const t=f[n];t!==e&&(e=t,c.push({minValue:e,maxValue:t,label:o(e,t,l)}),e=t)}}else if("standard-deviation"===t){const e=function(e){let n=0;for(let t=0;t<e.length;t++)n+=e[t];return n/=e.length,n}(f),n=function(e,n){let t=0;for(let l=0;l<e.length;l++){const a=e[l];t+=(a-n)*(a-n)}return t/=e.length,Math.sqrt(t)}(f,e);if(0===n)c.push({minValue:f[0],maxValue:f[0],label:o(f[0],f[0],l)});else{const t=function(e,n,t,l,a){let i=Math.max(l-e,n-l)/a/t;return i=i>=1?1:i>=.5?.5:.25,i}(d,m,r,e,n)*n;let i=0,s=d;for(let n=r;n>=1;n--){const r=a(e-(n-.5)*t,6);c.push({minValue:s,maxValue:r,label:o(s,r,l)}),s=r,i++}let u=a(e+.5*t,6);c.push({minValue:s,maxValue:u,label:o(s,u,l)}),s=u,i++;for(let n=1;n<=r;n++)u=i===2*r?m:a(e+(n+.5)*t,6),c.push({minValue:s,maxValue:u,label:o(s,u,l)}),s=u,i++}}else if("defined-interval"===t){if(!i)return c;const e=f[0],n=f[f.length-1],t=Math.ceil((n-e)/i);let r=e;for(let s=1;s<t;s++){const n=a(e+s*i,6);c.push({minValue:r,maxValue:n,label:o(r,n,l)}),r=n}c.push({minValue:r,maxValue:n,label:o(r,n,l)})}return c}function o(e,n,t){let l=null;return l=e===n?t&&"percent-of-total"===t?e+"%":e.toString():t&&"percent-of-total"===t?e+"% - "+n+"%":e+" - "+n,l}function s(e){const n=[],t=[];let l=Number.MIN_VALUE,a=1,i=-1;for(let r=0;r<e.length;r++){const o=e[r];o===l?(a++,t[i]=a):null!==o&&(n.push(o),l=o,a=1,t.push(a),i++)}return{uniqueValues:n,valueFrequency:t}}function u(e,n,t){const l=e.length,a=[];t>l&&(t=l);for(let r=0;r<t;r++)a.push(Math.round(r*l/t-1));a.push(l-1);let i=c(a,e,n,t);return function(e,n,t,l,a,i){let r=0,o=0,s=0,u=0,c=!0;for(let d=0;d<2&&c;d++){0===d&&(c=!1);for(let d=0;d<i-1;d++)for(;t[d+1]+1!==t[d+2];){t[d+1]=t[d+1]+1;const i=f(d,t,l,a);s=i.sbMean,r=i.sbSdcm;const m=f(d+1,t,l,a);if(u=m.sbMean,o=m.sbSdcm,!(r+o<n[d]+n[d+1])){t[d+1]=t[d+1]-1;break}n[d]=r,n[d+1]=o,e[d]=s,e[d+1]=u,c=!0}for(let d=i-1;d>0;d--)for(;t[d]!==t[d-1]+1;){t[d]=t[d]-1;const i=f(d-1,t,l,a);s=i.sbMean,r=i.sbSdcm;const m=f(d,t,l,a);if(u=m.sbMean,o=m.sbSdcm,!(r+o<n[d-1]+n[d])){t[d]=t[d]+1;break}n[d-1]=r,n[d]=o,e[d-1]=s,e[d]=u,c=!0}}return c}(i.mean,i.sdcm,a,e,n,t)&&(i=c(a,e,n,t)),a}function c(e,n,t,l){let a=[],i=[],r=[],o=0;const s=[],u=[];for(let p=0;p<l;p++){const l=f(p,e,n,t);s.push(l.sbMean),u.push(l.sbSdcm),o+=u[p]}let c,d=o,m=!0;for(;m||o<d;){m=!1,a=[];for(let n=0;n<l;n++)a.push(e[n]);for(let t=0;t<l;t++)for(let a=e[t]+1;a<=e[t+1];a++)if(c=n[a],t>0&&a!==e[t+1]&&Math.abs(c-s[t])>Math.abs(c-s[t-1]))e[t]=a;else if(t<l-1&&e[t]!==a-1&&Math.abs(c-s[t])>Math.abs(c-s[t+1])){e[t+1]=a-1;break}d=o,o=0,i=[],r=[];for(let a=0;a<l;a++){i.push(s[a]),r.push(u[a]);const l=f(a,e,n,t);s[a]=l.sbMean,u[a]=l.sbSdcm,o+=u[a]}}if(o>d){for(let n=0;n<l;n++)e[n]=a[n],s[n]=i[n],u[n]=r[n];o=d}return{mean:s,sdcm:u}}function f(e,n,t,a){let i=0,r=0;for(let l=n[e]+1;l<=n[e+1];l++){const e=a[l];i+=t[l]*e,r+=e}r<=0&&l.warn("Exception in Natural Breaks calculation");const o=i/r;let s=0;for(let l=n[e]+1;l<=n[e+1];l++)s+=a[l]*(t[l]-o)**2;return{sbMean:o,sbSdcm:s}}},71486:(e,n,t)=>{t.d(n,{DL:()=>C,F_:()=>T,G2:()=>D,H0:()=>h,Lq:()=>V,Qm:()=>k,S5:()=>p,XL:()=>v,eT:()=>F,fk:()=>z,i5:()=>b,oF:()=>N,wk:()=>m});var l=t(96783),a=t(51905);const i="<Null>",r="equal-interval",o=1,s=5,u=10,c=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,f=new Set(["esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]),d=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function m(e){return null==e||"string"==typeof e&&!e?i:e}function p(e){const n=null!=e.normalizationField||null!=e.normalizationType,t=null!=e.minValue||null!=e.maxValue,l=!!e.sqlExpression&&e.supportsSQLExpression;return!n&&!t&&!l}function h(e){const n=e.returnDistinct?[...new Set(e.values)]:e.values,t=n.filter((e=>null!=e)).length,l={count:t};return e.supportsNullCount&&(l.nullcount=n.length-t),e.percentileParams&&(l.median=v(n,e.percentileParams)),l}function b(e){const{values:n,useSampleStdDev:t,supportsNullCount:l}=e;let a=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,r=null,o=null,s=null,u=null,c=0;const f=null==e.minValue?-1/0:e.minValue,d=null==e.maxValue?1/0:e.maxValue;for(const p of n)Number.isFinite(p)?p>=f&&p<=d&&(r=null===r?p:r+p,a=Math.min(a,p),i=Math.max(i,p),c++):"string"==typeof p&&c++;if(c&&null!=r){o=r/c;let e=0;for(const t of n)Number.isFinite(t)&&t>=f&&t<=d&&(e+=(t-o)**2);u=t?c>1?e/(c-1):0:c>0?e/c:0,s=Math.sqrt(u)}else a=null,i=null;const m={avg:o,count:c,max:i,min:a,stddev:s,sum:r,variance:u};return l&&(m.nullcount=n.length-c),e.percentileParams&&(m.median=v(n,e.percentileParams)),m}function v(e,n){const{fieldType:t,value:l,orderBy:a,isDiscrete:i}=n,r=V(t,"desc"===a);if(0===(e=[...e].filter((e=>null!=e)).sort(((e,n)=>r(e,n)))).length)return null;if(l<=0)return e[0];if(l>=1)return e[e.length-1];const o=(e.length-1)*l,s=Math.floor(o),u=s+1,c=o%1,f=e[s],d=e[u];return u>=e.length||i||"string"==typeof f||"string"==typeof d?f:f*(1-c)+d*c}function V(e,n){const t=n?1:-1,l=function(e){return e?(e,n)=>{const t=g(e,n,!0);return null!=t?t:n-e}:(e,n)=>{const t=g(e,n,!1);return null!=t?t:e-n}}(n),a=y(n);if(!e||!["esriFieldTypeDate","esriFieldTypeString","esriFieldTypeGUID","esriFieldTypeGlobalID",...f].includes(e))return(e,n)=>"number"==typeof e&&"number"==typeof n?l(e,n):"string"==typeof e&&"string"==typeof n?a(e,n):t;if("esriFieldTypeDate"===e)return(e,n)=>{const a=new Date(e).getTime(),i=new Date(n).getTime();return isNaN(a)||isNaN(i)?t:l(a,i)};if(f.has(e))return(e,n)=>l(e,n);if("esriFieldTypeString"===e)return(e,n)=>a(e,n);if("esriFieldTypeGUID"===e||"esriFieldTypeGlobalID"===e){const e=y(n);return(n,t)=>e(x(n),x(t))}return n?(e,n)=>1:(e,n)=>-1}function g(e,n,t){if(t){if(null==e)return null==n?0:1;if(null==n)return-1}else{if(null==e)return null==n?0:-1;if(null==n)return 1}return null}function y(e){return e?(e,n)=>{const t=g(e,n,!0);return null!=t?t:(e=e.toUpperCase())>(n=n.toUpperCase())?-1:e<n?1:0}:(e,n)=>{const t=g(e,n,!1);return null!=t?t:(e=e.toUpperCase())<(n=n.toUpperCase())?-1:e>n?1:0}}function x(e){return e.substr(24,12)+e.substr(19,4)+e.substr(16,2)+e.substr(14,2)+e.substr(11,2)+e.substr(9,2)+e.substr(6,2)+e.substr(4,2)+e.substr(2,2)+e.substr(0,2)}function T(e,n){let t;for(t in e)d.includes(t)&&(Number.isFinite(e[t])||(e[t]=null));return n?(["avg","stddev","variance"].forEach((n=>{null!=e[n]&&(e[n]=Math.ceil(e[n]))})),e):e}function F(e){const n={};for(let t of e)(null==t||"string"==typeof t&&""===t.trim())&&(t=null),null==n[t]?n[t]={count:1,data:t}:n[t].count++;return{count:n}}function M(e){return"coded-value"!==e?.type?[]:e.codedValues.map((e=>e.code))}function k(e,n,t,l){const a=e.count,i=[];if(t&&n){const e=[],t=M(n[0]);for(const a of t)if(n[1]){const t=M(n[1]);for(const i of t)if(n[2]){const t=M(n[2]);for(const n of t)e.push(`${m(a)}${l}${m(i)}${l}${m(n)}`)}else e.push(`${m(a)}${l}${m(i)}`)}else e.push(a);for(const n of e)a.hasOwnProperty(n)||(a[n]={data:n,count:0})}for(const r in a){const e=a[r];i.push({value:e.data,count:e.count,label:e.label})}return{uniqueValueInfos:i}}function z(e,n,t,l){let a=null;switch(n){case"log":0!==e&&(a=Math.log(e)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(l)&&0!==l&&(a=e/l*100);break;case"field":Number.isFinite(t)&&0!==t&&(a=e/t);break;case"natural-log":e>0&&(a=Math.log(e));break;case"square-root":e>0&&(a=e**.5)}return a}function D(e,n){const t=I({field:n.field,normalizationType:n.normalizationType,normalizationField:n.normalizationField,classificationMethod:n.classificationMethod,standardDeviationInterval:n.standardDeviationInterval,breakCount:n.numClasses||s});return e=function(e,n,t){const l=n??-1/0,a=t??1/0;return e.filter((e=>Number.isFinite(e)&&e>=l&&e<=a))}(e,n.minValue,n.maxValue),(0,a.k)({definition:t,values:e,normalizationTotal:n.normalizationTotal})}function I(e){const{breakCount:n,field:t,normalizationField:a,normalizationType:i}=e,s=e.classificationMethod||r,u="standard-deviation"===s?e.standardDeviationInterval||o:void 0;return new l.Z({breakCount:n,classificationField:t,classificationMethod:s,normalizationField:"field"===i?a:void 0,normalizationType:i,standardDeviationInterval:u})}function C(e,n){let t=e.classBreaks;const l=t.length,a=t[0].minValue,i=t[l-1].maxValue,r="standard-deviation"===n,o=c;return t=t.map((e=>{const n=e.label,t={minValue:e.minValue,maxValue:e.maxValue,label:n};if(r&&n){const e=n.match(o)?.map((e=>+e.trim()))??[];2===e.length?(t.minStdDev=e[0],t.maxStdDev=e[1],e[0]<0&&e[1]>0&&(t.hasAvg=!0)):1===e.length&&(n.includes("<")?(t.minStdDev=null,t.maxStdDev=e[0]):n.includes(">")&&(t.minStdDev=e[0],t.maxStdDev=null))}return t})),{minValue:a,maxValue:i,classBreakInfos:t,normalizationTotal:e.normalizationTotal}}function N(e,n){const t=S(e,n),l=t.intervals,a=t.min??0,i=t.max??0,r=l.map(((e,n)=>({minValue:l[n][0],maxValue:l[n][1],count:0})));for(const o of e)if(null!=o&&o>=a&&o<=i){const e=w(l,o);e>-1&&r[e].count++}return{bins:r,minValue:a,maxValue:i,normalizationTotal:n.normalizationTotal}}function S(e,n){const{field:t,classificationMethod:l,standardDeviationInterval:a,normalizationType:i,normalizationField:r,normalizationTotal:o,minValue:s,maxValue:c}=n,f=n.numBins||u;let d=null,m=null,h=null;if(l&&"equal-interval"!==l||i){const{classBreaks:n}=D(e,{field:t,normalizationType:i,normalizationField:r,normalizationTotal:o,classificationMethod:l,standardDeviationInterval:a,minValue:s,maxValue:c,numClasses:f});d=n[0].minValue,m=n[n.length-1].maxValue,h=n.map((e=>[e.minValue,e.maxValue]))}else{if(null!=s&&null!=c)d=s,m=c;else{const n=b({values:e,minValue:s,maxValue:c,useSampleStdDev:!i,supportsNullCount:p({normalizationType:i,normalizationField:r,minValue:s,maxValue:c})});d=n.min??null,m=n.max??null}h=function(e,n,t){const l=(n-e)/t,a=[];let i,r=e;for(let o=1;o<=t;o++)i=r+l,i=Number(i.toFixed(16)),a.push([r,o===t?n:i]),r=i;return a}(d??0,m??0,f)}return{min:d,max:m,intervals:h}}function w(e,n){let t=-1;for(let l=e.length-1;l>=0;l--)if(n>=e[l][0]){t=l;break}return t}}}]);
//# sourceMappingURL=1486.0d8c2bb7.chunk.js.map