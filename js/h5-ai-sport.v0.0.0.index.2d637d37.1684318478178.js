var F=(s,d,n)=>new Promise((S,m)=>{var k=e=>{try{t(n.next(e))}catch(i){m(i)}},c=e=>{try{t(n.throw(e))}catch(i){m(i)}},t=e=>e.done?S(e.value):Promise.resolve(e.value).then(k,c);t((n=n.apply(s,d)).next())});import{_ as Y,a as Z,b as A}from"./h5-ai-sport.v0.0.0.GameCounterHorizontal.c6af1adf.1684318478178.js";import{s as ee,b as ae,i as te,_ as le}from"./h5-ai-sport.v0.0.0.utils.18f0aaca.1684318478178.js";import{m as a,o as ne,M as oe,N as se,O as ue,d as re,c as N,e as ve,j as P,y as v,L as G,P as U,Q as ce,R as j,S as L,v as $,b as ie,_ as _e}from"./h5-ai-sport.v0.0.0.index.95bda2e2.1684318478178.js";import{v as q,s as me,a as Q,b as fe}from"./h5-ai-sport.v0.0.0.bgAudio.2915f8b6.1684318478178.js";import{u as pe}from"./h5-ai-sport.v0.0.0.Setting.214989f5.1684318478178.js";import"./h5-ai-sport.v0.0.0.index.9c59126a.1684318478178.js";const de=(s,d,n,S,m)=>{const k=s[11].x;console.log("%c [ keypoints ]-5-「check.ts」","font-size:13px; background:#d43828; color:#ff7c6c;",s);const c=s[12].x,t=s[11].y,e=s[12].y,i=s[13].x,o=s[14].x,y=s[13].y,f=s[14].y,g=(k+c)/2,_=(t+e)/2,h=(i+o)/2,x=(y+f)/2,r=Math.abs(_-x)/Math.abs(g-h)<3.5&&Math.abs(_-x)/Math.abs(g-h)>.2;d.value.at(-1)===!1?r&&n.value&&(m.value=setInterval(()=>{S.value+=1,S.value&&q("https://go-ran-pic.lovedabai.com/sound/Sport_Ball_appear.mp3")},1e3),d.value.push(!0),n.value=!1):d.value.at(-1)===!0&&!r&&!n.value&&(clearInterval(m.value),m.value=void 0,d.value.push(!1),n.value=!0)};function ge(){const s=pe(),d=se(),n=60,S=["appear","tooClose","start","timeOut","comeOn","5","4","3","2","1","keepMoving","endsoon","adjustAngle"],m={},k=[1,2,3],c=a(!0),t=a(0),e=a(0),i=a(3),o=a(n),y=a(0),f=a(!1),g=a(!1),_=a(),h=a(),x=a(),u=a(),r=a(),D=a(),p=a(),w=a(10),M=a([!1]),T=a(!0),B=a(),C=a(0),O=a(0);ne(()=>{S.forEach(l=>{const b=l==="appear"?"Sport_Ball_appear":l;m[l]=`https://go-ran-pic.lovedabai.com/sound/${b}.mp3`})}),oe(()=>{E(),me(),Q()});const I=l=>{q(m[`${l}`])},H=(l,b,z)=>{ee(l),ae(l,b,z)&&te(z)&&(!f.value&&!_.value?(e.value=3,i.value=k.at(-1),K()):e.value||(c.value=!1,de(l,M,T,t,B),V()))},J=()=>{t.value>=1&&ue({code:d.name,score:t.value>0?t.value-1:0,time:n-o.value,photos:[]}).then(l=>{C.value=l.result.exceedRate?Number((l.result.exceedRate*100).toFixed(2)):0,O.value=l.result.integral})},K=()=>{let l=3;c.value=!1,clearInterval(h.value),h.value=setInterval(()=>F(this,null,function*(){l>0?(yield I(l),yield l--):(I("start"),clearInterval(h.value),s.bgMusic&&fe("https://yunketang-file.dream-sports.cn/sound/sport_background_music_03.mp3"))}),1e3),_.value=setInterval(()=>{e.value>0?(e.value--,i.value=k[e.value===2?1:0]):(clearInterval(_.value),_.value=void 0,e.value=0,f.value=!0,W())},1e3)},W=()=>{x.value=setInterval(()=>{o.value>0?(o.value===21&&I("comeOn"),o.value--,o.value==0?I("timeOut"):o.value<=5&&I(o.value)):(clearInterval(x.value),R())},1e3)},X=()=>{p.value=setInterval(()=>{w.value>1?w.value-=1:(clearInterval(p.value),E())},1e3)},R=()=>{clearInterval(h.value),clearInterval(_.value),clearInterval(x.value),clearInterval(u.value),clearInterval(r.value),clearInterval(D.value),clearInterval(p.value),clearInterval(B.value),h.value=void 0,_.value=void 0,x.value=void 0,u.value=0,r.value=void 0,D.value=void 0,p.value=void 0,B.value=void 0};function E(){c.value=!0,t.value=0,o.value=n,e.value=0,i.value=3,y.value=0,f.value=!1,g.value=!1,w.value=10,M.value=[!1],T.value=!0,R(),Q()}function V(l=!1){if(g.value){R();return}y.value!==o.value&&(y.value=o.value,l?r.value||(r.value=setInterval(()=>{if(u.value=u.value?u.value+1:1,u.value===3)I("keepMoving");else if(u.value===6)I("keepMoving");else if(u.value===9&&o.value>10){let b=5;clearInterval(D.value),D.value=setInterval(()=>{b>0?(b<=3?I(b):b===5&&I("endsoon"),b--):(I("timeOut"),clearInterval(r.value),clearInterval(D.value),g.value=!0,f.value=!1,u.value=0,r.value=void 0,J(),R(),X())},1e3)}},1e3)):(clearInterval(r.value),clearInterval(D.value),u.value=0,r.value=void 0))}return{num:t,time:o,countDownSrc:i,countDown:e,gameStart:f,gameEnd:g,showTip:c,startSport:H,isOutScreen:V,reStartTimer:p,reStartCountDown:w,resetSport:E,notMovingTimerInt:r,notMovingTimer:u,timer:_,rate:C,integral:O}}const he={id:"sport-model"},Ie={class:"fetch-box"},Se={src:"https://yunketang-file.dream-sports.cn/static/ready_tips_positive.png",class:"img-tips"},xe=re({__name:"index",setup(s){const d=ie(),{num:n,time:S,countDownSrc:m,countDown:k,gameStart:c,gameEnd:t,showTip:e,startSport:i,isOutScreen:o,reStartTimer:y,reStartCountDown:f,resetSport:g,rate:_,integral:h}=ge(),x=p=>{if(p.length>0){let w=p[0].keypoints,M=.2,T=[0,1,5,6,11,15,12,16];if(S.value<=0&&(t.value=!0,y.value=setInterval(()=>{f.value>1?f.value-=1:(clearInterval(y.value),g())})),t.value)return;i(w,M,T)}else c.value&&!t.value&&o(!0)},u=p=>{p&&c.value&&!t.value&&o(!0),e.value=!0},r=()=>{d.back()},D=()=>{g()};return(p,w)=>{const M=le,T=Y,B=Z,C=A;return N(),ve("div",he,[P(M,{onUpdate:x,onError:u}),P(T,{score:v(n),"game-duration":v(S)},null,8,["score","game-duration"]),v(k)?(N(),G(B,{key:0,"start-count-down":v(m)},null,8,["start-count-down"])):U("",!0),v(t)?(N(),G(C,{key:1,modelValue:v(n),"onUpdate:modelValue":w[0]||(w[0]=O=>ce(n)?n.value=O:null),rate:v(_),integral:v(h),reStartCountDown:v(f),onBack:r,onRestart:D},null,8,["modelValue","rate","integral","reStartCountDown"])):U("",!0),j($("div",Ie,null,512),[[L,!v(t)&&!v(c)||v(e)]]),j($("img",Se,null,512),[[L,v(e)&&!v(t)]])])}}});const Ce=_e(xe,[["__scopeId","data-v-40ca7be5"]]);export{Ce as default};
