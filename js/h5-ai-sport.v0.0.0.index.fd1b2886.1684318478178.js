var G=(e,h,r)=>new Promise((x,i)=>{var w=a=>{try{t(r.next(a))}catch(s){i(s)}},v=a=>{try{t(r.throw(a))}catch(s){i(s)}},t=a=>a.done?x(a.value):Promise.resolve(a.value).then(w,v);t((r=r.apply(e,h)).next())});import{_ as y}from"./h5-ai-sport.v0.0.0.GameOverDialog.d582f100.1684318478178.js";import{_ as k,a as ee}from"./h5-ai-sport.v0.0.0.GameCounter.ab805804.1684318478178.js";import{g as R,s as ae,c as te,_ as le}from"./h5-ai-sport.v0.0.0.utils.18f0aaca.1684318478178.js";import{m as l,o as oe,M as ue,N as re,O as ne,d as se,c as P,e as ce,j as U,y as c,L as j,P as $,Q as ve,R as z,S as K,v as Q,b as ie,_ as me}from"./h5-ai-sport.v0.0.0.index.95bda2e2.1684318478178.js";import{v as H,s as fe,a as q,b as _e}from"./h5-ai-sport.v0.0.0.bgAudio.2915f8b6.1684318478178.js";import{u as de}from"./h5-ai-sport.v0.0.0.Setting.214989f5.1684318478178.js";import"./h5-ai-sport.v0.0.0.index.9c59126a.1684318478178.js";const ge=(e,h,r,x,i)=>{const w=e[12].y,v=e[14].y,t=e[16].y,a=Math.abs(w-t),s=Math.abs(v-t);let o=0,m=0;const f=Math.abs(e[5].x-e[6].x),M=Math.abs(e[15].x-e[16].x),_=Math.abs(e[11].x-e[16].x),p=Math.abs(e[12].x-e[15].x),D=Math.abs(_-p);a>=s&&Math.abs(e[16].y-e[14].y)!==0?(o=180-(R(Math.abs(e[16].x-e[14].x)/Math.abs(e[16].y-e[14].y))+R(Math.abs(e[12].x-e[14].x)/Math.abs(e[12].y-e[14].y))),m=180-(R(Math.abs(e[15].x-e[13].x)/Math.abs(e[15].y-e[13].y))+R(Math.abs(e[11].x-e[13].x)/Math.abs(e[11].y-e[13].y)))):a<s&&(o=90-(R(Math.abs(e[16].x-e[14].x)/Math.abs(e[16].y-e[14].y))+R(Math.abs(e[12].x-e[14].x)/Math.abs(e[12].y-e[14].y))),m=90-(R(Math.abs(e[15].x-e[13].x)/Math.abs(e[15].y-e[13].y))+R(Math.abs(e[11].x-e[13].x)/Math.abs(e[11].y-e[13].y))));const n=o>60&&o<140&&m>60&&m<140&&M>f&&D<50&&a/s<1.5&&a/s>.9;console.log("%c [ canStart ]-24-「check.ts」","font-size:13px; background:#a9a8cb; color:#edecff;",n),h.value.at(-1)===!1?n&&r.value&&(i.value=setInterval(()=>{x.value+=1,x.value&&H("https://go-ran-pic.lovedabai.com/sound/Sport_Ball_appear.mp3")},1e3),h.value.push(!0),r.value=!1):h.value.at(-1)===!0&&!n&&!r.value&&(clearInterval(i.value),i.value=void 0,h.value.push(!1),r.value=!0)};function he(){const e=de(),h=re(),r=60,x=["appear","tooClose","start","timeOut","comeOn","5","4","3","2","1","keepMoving","endsoon","adjustAngle"],i={},w=[1,2,3],v=l(!0),t=l(0),a=l(0),s=l(3),o=l(r),m=l(0),f=l(!1),M=l(!1),_=l(),p=l(),D=l(),n=l(),d=l(),T=l(),g=l(),I=l(10),B=l([!1]),C=l(!0),N=l(),O=l(0),E=l(0);oe(()=>{x.forEach(u=>{const S=u==="appear"?"Sport_Ball_appear":u;i[u]=`https://go-ran-pic.lovedabai.com/sound/${S}.mp3`})}),ue(()=>{V(),fe(),q()});const b=u=>{H(i[`${u}`])},J=(u,S,A)=>{ae(u),te(u,S,A)&&(!f.value&&!_.value?(a.value=3,s.value=w.at(-1),X()):a.value||(v.value=!1,ge(u,B,C,t,N),F()))},W=()=>{t.value>=1&&ne({code:h.name,score:t.value>0?t.value-1:0,time:r-o.value,photos:[]}).then(u=>{O.value=u.result.exceedRate?Number((u.result.exceedRate*100).toFixed(2)):0,E.value=u.result.integral})},X=()=>{let u=3;v.value=!1,clearInterval(p.value),p.value=setInterval(()=>G(this,null,function*(){u>0?(yield b(u),yield u--):(b("start"),clearInterval(p.value),e.bgMusic&&_e("https://yunketang-file.dream-sports.cn/sound/sport_background_music_03.mp3"))}),1e3),_.value=setInterval(()=>{a.value>0?(a.value--,s.value=w[a.value===2?1:0]):(clearInterval(_.value),_.value=void 0,a.value=0,f.value=!0,Y())},1e3)},Y=()=>{D.value=setInterval(()=>{o.value>0?(o.value===21&&b("comeOn"),o.value--,o.value==0?b("timeOut"):o.value<=5&&b(o.value)):(clearInterval(D.value),L())},1e3)},Z=()=>{g.value=setInterval(()=>{I.value>1?I.value-=1:(clearInterval(g.value),V())},1e3)},L=()=>{clearInterval(p.value),clearInterval(_.value),clearInterval(D.value),clearInterval(n.value),clearInterval(d.value),clearInterval(T.value),clearInterval(g.value),p.value=void 0,_.value=void 0,D.value=void 0,n.value=0,d.value=void 0,T.value=void 0,g.value=void 0,clearInterval(N.value),N.value=void 0};function V(){v.value=!0,t.value=0,o.value=r,a.value=0,s.value=3,m.value=0,f.value=!1,M.value=!1,I.value=10,B.value=[!1],C.value=!0,L(),q()}function F(u=!1){if(M.value){L();return}m.value!==o.value&&(m.value=o.value,u?d.value||(d.value=setInterval(()=>{if(n.value=n.value?n.value+1:1,n.value===3)b("keepMoving");else if(n.value===6)b("keepMoving");else if(n.value===9&&o.value>10){let S=5;clearInterval(T.value),T.value=setInterval(()=>{S>0?(S<=3?b(S):S===5&&b("endsoon"),S--):(b("timeOut"),clearInterval(d.value),clearInterval(T.value),M.value=!0,f.value=!1,n.value=0,d.value=void 0,W(),L(),Z())},1e3)}},1e3)):(clearInterval(d.value),clearInterval(T.value),n.value=0,d.value=void 0))}return{num:t,time:o,countDownSrc:s,countDown:a,gameStart:f,gameEnd:M,showTip:v,startSport:J,isOutScreen:F,reStartTimer:g,reStartCountDown:I,resetSport:V,notMovingTimerInt:d,notMovingTimer:n,timer:_,rate:O,integral:E}}const be={id:"sport-model"},xe={class:"fetch-box"},Me={src:"https://yunketang-file.dream-sports.cn/static/ready_tips_positive.png",class:"img-tips"},pe=se({__name:"index",setup(e){const h=ie(),{num:r,time:x,countDownSrc:i,countDown:w,gameStart:v,gameEnd:t,showTip:a,startSport:s,isOutScreen:o,reStartTimer:m,reStartCountDown:f,resetSport:M,rate:_,integral:p}=he(),D=g=>{if(g.length>0){let I=g[0].keypoints,B=.2,C=[0,1,5,6,11,15,12,16];if(x.value<=0&&(t.value=!0,m.value=setInterval(()=>{f.value>1?f.value-=1:(clearInterval(m.value),M())})),t.value)return;s(I,B,C)}else v.value&&!t.value&&o(!0)},n=g=>{g&&v.value&&!t.value&&o(!0),a.value=!0},d=()=>{h.back()},T=()=>{M()};return(g,I)=>{const B=le,C=k,N=ee,O=y;return P(),ce("div",be,[U(B,{onUpdate:D,onError:n}),U(C,{score:c(r),"game-duration":c(x)},null,8,["score","game-duration"]),c(w)?(P(),j(N,{key:0,"start-count-down":c(i)},null,8,["start-count-down"])):$("",!0),c(t)?(P(),j(O,{key:1,modelValue:c(r),"onUpdate:modelValue":I[0]||(I[0]=E=>ve(r)?r.value=E:null),rate:c(_),integral:c(p),reStartCountDown:c(f),onBack:d,onRestart:T},null,8,["modelValue","rate","integral","reStartCountDown"])):$("",!0),z(Q("div",xe,null,512),[[K,!c(t)&&!c(v)||c(a)]]),z(Q("img",Me,null,512),[[K,c(a)&&!c(t)]])])}}});const Oe=me(pe,[["__scopeId","data-v-ca72ab91"]]);export{Oe as default};
