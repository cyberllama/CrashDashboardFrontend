"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[8643],{35270:(e,t,o)=>{o.d(t,{B7:()=>a,St:()=>l,VL:()=>n,h$:()=>i,rW:()=>p});const r={transparent:[0,0,0,0],black:[0,0,0,1],silver:[192,192,192,1],gray:[128,128,128,1],white:[255,255,255,1],maroon:[128,0,0,1],red:[255,0,0,1],purple:[128,0,128,1],fuchsia:[255,0,255,1],green:[0,128,0,1],lime:[0,255,0,1],olive:[128,128,0,1],yellow:[255,255,0,1],navy:[0,0,128,1],blue:[0,0,255,1],teal:[0,128,128,1],aqua:[0,255,255,1],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],blanchedalmond:[255,235,205,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],oldlace:[253,245,230,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],rebeccapurple:[102,51,153,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],whitesmoke:[245,245,245,1],yellowgreen:[154,205,50,1]};function l(e){return r[e]||r[e.toLowerCase()]}function i(e){return r[e]??r[e.toLowerCase()]}function n(e){return[...i(e)]}function s(e,t,o){o<0&&++o,o>1&&--o;const r=6*o;return r<1?e+(t-e)*r:2*o<1?t:3*o<2?e+(t-e)*(2/3-o)*6:e}function a(e,t,o,r=1){const l=(e%360+360)%360/360,i=o<=.5?o*(t+1):o+t-o*t,n=2*o-i;return[Math.round(255*s(n,i,l+1/3)),Math.round(255*s(n,i,l)),Math.round(255*s(n,i,l-1/3)),r]}function p(e){const t=e.length>5,o=t?8:4,r=(1<<o)-1,l=t?1:17,i=t?9===e.length:5===e.length;let n=Number("0x"+e.substr(1));if(isNaN(n))return null;const s=[0,0,0,1];let a;return i&&(a=n&r,n>>=o,s[3]=l*a/255),a=n&r,n>>=o,s[2]=l*a,a=n&r,n>>=o,s[1]=l*a,a=n&r,n>>=o,s[0]=l*a,s}},23030:(e,t,o)=>{o.d(t,{Z:()=>f});var r,l=o(43697),i=o(22974),n=o(5600),s=o(75215),a=o(36030),p=o(52011),d=o(25848),u=o(66338),c=o(22303),y=o(96674);let h=r=class extends y.wq{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new r({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:(0,i.d9)(this.color)})}};(0,l._)([(0,n.Cb)({type:String,json:{write:!0}})],h.prototype,"description",void 0),(0,l._)([(0,n.Cb)({type:String,json:{write:!0}})],h.prototype,"label",void 0),(0,l._)([(0,n.Cb)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],h.prototype,"minValue",void 0),(0,l._)([(0,n.Cb)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],h.prototype,"maxValue",void 0),(0,l._)([(0,n.Cb)({type:c.Z,json:{type:[s.z8],write:!0}})],h.prototype,"color",void 0),h=r=(0,l._)([(0,p.j)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],h);const b=h;var m;let g=m=class extends d.Z{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new m({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:(0,i.d9)(this.colorClassBreakInfos),legendOptions:(0,i.d9)(this.legendOptions)})}};(0,l._)([(0,a.J)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],g.prototype,"type",void 0),(0,l._)([(0,n.Cb)({json:{write:!0},type:String})],g.prototype,"field",void 0),(0,l._)([(0,n.Cb)({type:u.I,json:{write:!0}})],g.prototype,"legendOptions",void 0),(0,l._)([(0,n.Cb)({type:d.Z.fieldTransformTypeKebabDict.apiValues,json:{type:d.Z.fieldTransformTypeKebabDict.jsonValues,read:d.Z.fieldTransformTypeKebabDict.read,write:d.Z.fieldTransformTypeKebabDict.write}})],g.prototype,"fieldTransformType",void 0),(0,l._)([(0,n.Cb)({type:[b],json:{write:!0}})],g.prototype,"colorClassBreakInfos",void 0),g=m=(0,l._)([(0,p.j)("esri.renderers.PointCloudClassBreaksRenderer")],g);const f=g},25848:(e,t,o)=>{o.d(t,{Z:()=>T});var r,l=o(43697),i=o(35454),n=o(96674),s=o(22974),a=o(5600),p=(o(75215),o(52011));o(67676);let d=r=class extends n.wq{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new r({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};(0,l._)([(0,a.Cb)({type:String,json:{write:!0}})],d.prototype,"field",void 0),(0,l._)([(0,a.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],d.prototype,"minValue",void 0),(0,l._)([(0,a.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],d.prototype,"maxValue",void 0),d=r=(0,l._)([(0,p.j)("esri.renderers.support.pointCloud.ColorModulation")],d);const u=d,c=new i.X({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let y=class extends n.wq{};(0,l._)([(0,a.Cb)({type:c.apiValues,readOnly:!0,nonNullable:!0,json:{type:c.jsonValues,read:!1,write:c.write}})],y.prototype,"type",void 0),y=(0,l._)([(0,p.j)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],y);const h=y;var b,m=o(36030);let g=b=class extends h{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new b({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};(0,l._)([(0,m.J)({pointCloudFixedSizeAlgorithm:"fixed-size"})],g.prototype,"type",void 0),(0,l._)([(0,a.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],g.prototype,"size",void 0),(0,l._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],g.prototype,"useRealWorldSymbolSizes",void 0),g=b=(0,l._)([(0,p.j)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],g);const f=g;var w;let v=w=class extends h{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new w({scaleFactor:this.scaleFactor})}};(0,l._)([(0,m.J)({pointCloudSplatAlgorithm:"splat"})],v.prototype,"type",void 0),(0,l._)([(0,a.Cb)({type:Number,value:1,nonNullable:!0,json:{write:!0}})],v.prototype,"scaleFactor",void 0),v=w=(0,l._)([(0,p.j)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],v);const C={key:"type",base:h,typeMap:{"fixed-size":f,splat:v}},j=(0,i.w)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let _=class extends n.wq{constructor(e){super(e),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:(0,s.d9)(this.pointSizeAlgorithm),colorModulation:(0,s.d9)(this.colorModulation),pointsPerInch:(0,s.d9)(this.pointsPerInch)}}};(0,l._)([(0,a.Cb)({type:j.apiValues,readOnly:!0,nonNullable:!0,json:{type:j.jsonValues,read:!1,write:j.write}})],_.prototype,"type",void 0),(0,l._)([(0,a.Cb)({types:C,json:{write:!0}})],_.prototype,"pointSizeAlgorithm",void 0),(0,l._)([(0,a.Cb)({type:u,json:{write:!0}})],_.prototype,"colorModulation",void 0),(0,l._)([(0,a.Cb)({json:{write:!0},nonNullable:!0,type:Number})],_.prototype,"pointsPerInch",void 0),_=(0,l._)([(0,p.j)("esri.renderers.PointCloudRenderer")],_),(_||(_={})).fieldTransformTypeKebabDict=new i.X({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});const T=_},14008:(e,t,o)=>{o.d(t,{Z:()=>y});var r,l=o(43697),i=o(22974),n=o(5600),s=(o(75215),o(36030)),a=o(52011),p=o(25848),d=o(66338),u=o(21849);let c=r=class extends p.Z{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new r({...this.cloneProperties(),field:(0,i.d9)(this.field),fieldTransformType:(0,i.d9)(this.fieldTransformType),stops:(0,i.d9)(this.stops),legendOptions:(0,i.d9)(this.legendOptions)})}};(0,l._)([(0,s.J)({pointCloudStretchRenderer:"point-cloud-stretch"})],c.prototype,"type",void 0),(0,l._)([(0,n.Cb)({json:{write:!0},type:String})],c.prototype,"field",void 0),(0,l._)([(0,n.Cb)({type:d.I,json:{write:!0}})],c.prototype,"legendOptions",void 0),(0,l._)([(0,n.Cb)({type:p.Z.fieldTransformTypeKebabDict.apiValues,json:{type:p.Z.fieldTransformTypeKebabDict.jsonValues,read:p.Z.fieldTransformTypeKebabDict.read,write:p.Z.fieldTransformTypeKebabDict.write}})],c.prototype,"fieldTransformType",void 0),(0,l._)([(0,n.Cb)({type:[u.Z],json:{write:!0}})],c.prototype,"stops",void 0),c=r=(0,l._)([(0,a.j)("esri.renderers.PointCloudStretchRenderer")],c);const y=c},46329:(e,t,o)=>{o.d(t,{Z:()=>f});var r,l=o(43697),i=o(22974),n=o(5600),s=o(75215),a=o(36030),p=o(52011),d=o(25848),u=o(66338),c=o(22303),y=o(96674);let h=r=class extends y.wq{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new r({description:this.description,label:this.label,values:(0,i.d9)(this.values),color:(0,i.d9)(this.color)})}};(0,l._)([(0,n.Cb)({type:String,json:{write:!0}})],h.prototype,"description",void 0),(0,l._)([(0,n.Cb)({type:String,json:{write:!0}})],h.prototype,"label",void 0),(0,l._)([(0,n.Cb)({type:[String],json:{write:!0}})],h.prototype,"values",void 0),(0,l._)([(0,n.Cb)({type:c.Z,json:{type:[s.z8],write:!0}})],h.prototype,"color",void 0),h=r=(0,l._)([(0,p.j)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],h);const b=h;var m;let g=m=class extends d.Z{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new m({...this.cloneProperties(),field:(0,i.d9)(this.field),fieldTransformType:(0,i.d9)(this.fieldTransformType),colorUniqueValueInfos:(0,i.d9)(this.colorUniqueValueInfos),legendOptions:(0,i.d9)(this.legendOptions)})}};(0,l._)([(0,a.J)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],g.prototype,"type",void 0),(0,l._)([(0,n.Cb)({json:{write:!0},type:String})],g.prototype,"field",void 0),(0,l._)([(0,n.Cb)({type:d.Z.fieldTransformTypeKebabDict.apiValues,json:{type:d.Z.fieldTransformTypeKebabDict.jsonValues,read:d.Z.fieldTransformTypeKebabDict.read,write:d.Z.fieldTransformTypeKebabDict.write}})],g.prototype,"fieldTransformType",void 0),(0,l._)([(0,n.Cb)({type:[b],json:{write:!0}})],g.prototype,"colorUniqueValueInfos",void 0),(0,l._)([(0,n.Cb)({type:u.I,json:{write:!0}})],g.prototype,"legendOptions",void 0),g=m=(0,l._)([(0,p.j)("esri.renderers.PointCloudUniqueValueRenderer")],g);const f=g},66338:(e,t,o)=>{o.d(t,{I:()=>a});var r,l=o(43697),i=o(96674),n=o(5600),s=(o(75215),o(67676),o(52011));let a=r=class extends i.wq{constructor(){super(...arguments),this.title=null}clone(){return new r({title:this.title})}};(0,l._)([(0,n.Cb)({type:String,json:{write:!0}})],a.prototype,"title",void 0),a=r=(0,l._)([(0,s.j)("esri.renderers.support.LegendOptions")],a)},21849:(e,t,o)=>{o.d(t,{Z:()=>c});var r,l=o(43697),i=o(22303),n=o(96674),s=o(5600),a=o(75215),p=(o(67676),o(52011)),d=o(30556);let u=r=class extends n.wq{constructor(e){super(e),this.color=null,this.label=null,this.value=null}writeValue(e,t,o){t[o]=e??0}clone(){return new r({color:this.color&&this.color.clone(),label:this.label,value:this.value})}};(0,l._)([(0,s.Cb)({type:i.Z,json:{type:[a.z8],write:!0}})],u.prototype,"color",void 0),(0,l._)([(0,s.Cb)({type:String,json:{write:!0}})],u.prototype,"label",void 0),(0,l._)([(0,s.Cb)({type:Number,json:{write:{writerEnsuresNonNull:!0}}})],u.prototype,"value",void 0),(0,l._)([(0,d.c)("value")],u.prototype,"writeValue",null),u=r=(0,l._)([(0,p.j)("esri.renderers.visualVariables.support.ColorStop")],u);const c=u}}]);