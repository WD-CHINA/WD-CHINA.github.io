import{f as q,t as E,n as K,ar as D,d as J,m as V,Y as Q,aI as re,h as ve,q as d,i as U,aw as C,aJ as fe,aK as de,aL as he,o as F,aM as ge,aN as we,aO as me,M as ye,ay as pe,j as M,aP as j,ax as G,aQ as I,p as be,aR as R,w as Z,as as Se}from"./h5-ai-sport.v0.0.0.index.95bda2e2.1684318478178.js";const[ee,z]=q("swipe"),Te={loop:E,width:K,height:K,vertical:Boolean,autoplay:D(0),duration:D(500),touchable:E,lazyRender:Boolean,initialSwipe:D(0),indicatorColor:String,showIndicators:E,stopPropagation:E},te=Symbol(ee);var xe=J({name:ee,props:Te,emits:["change","dragStart","dragEnd"],setup(a,{emit:p,slots:g}){const u=V(),h=V(),t=Q({rect:null,width:0,height:0,offset:0,active:0,swiping:!1});let b=!1;const r=re(),{children:w,linkChildren:o}=ve(te),i=d(()=>w.length),s=d(()=>t[a.vertical?"height":"width"]),v=d(()=>a.vertical?r.deltaY.value:r.deltaX.value),y=d(()=>t.rect?(a.vertical?t.rect.height:t.rect.width)-s.value*i.value:0),O=d(()=>s.value?Math.ceil(Math.abs(y.value)/s.value):i.value),k=d(()=>i.value*s.value),$=d(()=>(t.active+i.value)%i.value),Y=d(()=>{const e=a.vertical?"vertical":"horizontal";return r.direction.value===e}),ae=d(()=>{const e={transitionDuration:`${t.swiping?0:a.duration}ms`,transform:`translate${a.vertical?"Y":"X"}(${t.offset}px)`};if(s.value){const l=a.vertical?"height":"width",n=a.vertical?"width":"height";e[l]=`${k.value}px`,e[n]=a[n]?`${a[n]}px`:""}return e}),ie=e=>{const{active:l}=t;return e?a.loop?R(l+e,-1,i.value):R(l+e,0,O.value):l},B=(e,l=0)=>{let n=e*s.value;a.loop||(n=Math.min(n,-y.value));let f=l-n;return a.loop||(f=R(f,y.value,0)),f},m=({pace:e=0,offset:l=0,emitChange:n})=>{if(i.value<=1)return;const{active:f}=t,c=ie(e),P=B(c,l);if(a.loop){if(w[0]&&P!==y.value){const _=P<y.value;w[0].setOffset(_?k.value:0)}if(w[i.value-1]&&P!==0){const _=P>0;w[i.value-1].setOffset(_?-k.value:0)}}t.active=c,t.offset=P,n&&c!==f&&p("change",$.value)},A=()=>{t.swiping=!0,t.active<=-1?m({pace:i.value}):t.active>=i.value&&m({pace:-i.value})},ne=()=>{A(),r.reset(),I(()=>{t.swiping=!1,m({pace:-1,emitChange:!0})})},N=()=>{A(),r.reset(),I(()=>{t.swiping=!1,m({pace:1,emitChange:!0})})};let X;const T=()=>clearTimeout(X),x=()=>{T(),a.autoplay>0&&i.value>1&&(X=setTimeout(()=>{N(),x()},+a.autoplay))},S=(e=+a.initialSwipe)=>{if(!u.value)return;const l=()=>{var n,f;if(!j(u)){const c={width:u.value.offsetWidth,height:u.value.offsetHeight};t.rect=c,t.width=+((n=a.width)!=null?n:c.width),t.height=+((f=a.height)!=null?f:c.height)}i.value&&(e=Math.min(i.value-1,e),e===-1&&(e=i.value-1)),t.active=e,t.swiping=!0,t.offset=B(e),w.forEach(c=>{c.setOffset(0)}),x()};j(u)?G().then(l):l()},H=()=>S(t.active);let L;const le=e=>{!a.touchable||e.touches.length>1||(r.start(e),b=!1,L=Date.now(),T(),A())},se=e=>{a.touchable&&t.swiping&&(r.move(e),Y.value&&(!a.loop&&(t.active===0&&v.value>0||t.active===i.value-1&&v.value<0)||(be(e,a.stopPropagation),m({offset:v.value}),b||(p("dragStart"),b=!0))))},W=()=>{if(!a.touchable||!t.swiping)return;const e=Date.now()-L,l=v.value/e;if((Math.abs(l)>.25||Math.abs(v.value)>s.value/2)&&Y.value){const f=a.vertical?r.offsetY.value:r.offsetX.value;let c=0;a.loop?c=f>0?v.value>0?-1:1:0:c=-Math[v.value>0?"ceil":"floor"](v.value/s.value),m({pace:c,emitChange:!0})}else v.value&&m({pace:0});b=!1,t.swiping=!1,p("dragEnd"),x()},oe=(e,l={})=>{A(),r.reset(),I(()=>{let n;a.loop&&e===i.value?n=t.active===0?0:e:n=e%i.value,l.immediate?I(()=>{t.swiping=!1}):t.swiping=!1,m({pace:n-t.active,emitChange:!0})})},ce=(e,l)=>{const n=l===$.value,f=n?{backgroundColor:a.indicatorColor}:void 0;return M("i",{style:f,class:z("indicator",{active:n})},null)},ue=()=>{if(g.indicator)return g.indicator({active:$.value,total:i.value});if(a.showIndicators&&i.value>1)return M("div",{class:z("indicators",{vertical:a.vertical})},[Array(i.value).fill("").map(ce)])};return U({prev:ne,next:N,state:t,resize:H,swipeTo:oe}),o({size:s,props:a,count:i,activeIndicator:$}),C(()=>a.initialSwipe,e=>S(+e)),C(i,()=>S(t.active)),C(()=>a.autoplay,x),C([fe,de],H),C(he(),e=>{e==="visible"?x():T()}),F(S),ge(()=>S(t.active)),we(()=>S(t.active)),me(T),ye(T),pe("touchmove",se,{target:h}),()=>{var e;return M("div",{ref:u,class:z()},[M("div",{ref:h,style:ae.value,class:z("track",{vertical:a.vertical}),onTouchstartPassive:le,onTouchend:W,onTouchcancel:W},[(e=g.default)==null?void 0:e.call(g)]),ue()])}}});const Ae=Z(xe),[Pe,Ce]=q("swipe-item");var Me=J({name:Pe,setup(a,{slots:p}){let g;const u=Q({offset:0,inited:!1,mounted:!1}),{parent:h,index:t}=Se(te);if(!h)return;const b=d(()=>{const o={},{vertical:i}=h.props;return h.size.value&&(o[i?"height":"width"]=`${h.size.value}px`),u.offset&&(o.transform=`translate${i?"Y":"X"}(${u.offset}px)`),o}),r=d(()=>{const{loop:o,lazyRender:i}=h.props;if(!i||g)return!0;if(!u.mounted)return!1;const s=h.activeIndicator.value,v=h.count.value-1,y=s===0&&o?v:s-1,O=s===v&&o?0:s+1;return g=t.value===s||t.value===y||t.value===O,g}),w=o=>{u.offset=o};return F(()=>{G(()=>{u.mounted=!0})}),U({setOffset:w}),()=>{var o;return M("div",{class:Ce(),style:b.value},[r.value?(o=p.default)==null?void 0:o.call(p):null])}}});const Ee=Z(Me);export{Ee as S,Ae as a};
