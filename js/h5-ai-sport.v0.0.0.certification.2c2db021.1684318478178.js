import{d as g,b as y,u as k,m as w,c as r,e as l,v as e,j as d,y as o,A as a,P as u,L as N,X as S,bn as b,H as B,ad as C,E as x,G as A,_ as D}from"./h5-ai-sport.v0.0.0.index.95bda2e2.1684318478178.js";import{A as E}from"./h5-ai-sport.v0.0.0.index.09dfd800.1684318478178.js";import{I as V}from"./h5-ai-sport.v0.0.0.index.9c59126a.1684318478178.js";const i=n=>(x("data-v-1866dd25"),n=n(),A(),n),j={style:{height:"100%"}},R={class:"already-have"},U={class:"name"},$={class:"nameicon"},G=i(()=>e("div",{class:"ready-tit"},"已认证",-1)),H={key:0,class:"ready-tit"},L={class:"readey-img"},P={class:"already-have-con"},T={class:"cer-container"},X=i(()=>e("div",{class:"cer-container-l"},"学校",-1)),q={class:"cer-container-r"},z={class:"cer-container"},F=i(()=>e("div",{class:"cer-container-l"},"班级",-1)),J={class:"cer-container-r"},K={class:"cer-container"},M=i(()=>e("div",{class:"cer-container-l"},"学籍号",-1)),O={class:"cer-container-r"},Q=g({__name:"certification",setup(n){const h=y(),s=k(),t=w(!1),m=[{name:"解绑认证",id:1}],v=()=>{S({message:"退出认证后，你的运动数据将不会同步至学校数据后台哦，确认退出吗？"}).then(()=>{b({}).then(()=>{t.value=!1,s.setUserInfo(),B("解绑成功"),h.back()})}).catch(()=>{t.value=!1})};return(W,c)=>{const _=V,f=C,p=E;return r(),l("div",j,[e("div",R,[d(_,{round:"",width:"2.89rem",height:"2.89rem",fit:"cover",src:o(s).userInfo.avatar?o(s).userInfo.avatar:"https://yunketang-file.dream-sports.cn/avatar/defaultAvatar.jpg"},null,8,["src"]),e("div",U,a(o(s).userInfo.nickName),1),e("div",$,[G,o(s).userInfo.schoolInnerId?u("",!0):(r(),l("div",H,"未认证")),e("div",L,[o(s).userInfo.schoolInnerId?(r(),N(_,{key:0,onClick:c[0]||(c[0]=I=>t.value=!0),round:"",width:".37rem",height:".37rem",fit:"contain",src:"https://yunketang-file.dream-sports.cn/static/cerimgmini.png"})):u("",!0)])])]),d(f,{id:"van-dialog","confirm-button-color":"#0074E8"}),e("div",P,[e("div",T,[X,e("div",q,a(o(s).userInfo.schoolName),1)]),e("div",z,[F,e("div",J,a(o(s).userInfo.gradeName)+a(o(s).userInfo.teamNumerName),1)]),e("div",K,[M,e("div",O,a(o(s).userInfo.number),1)])]),d(p,{show:t.value,actions:m,onClose:c[1]||(c[1]=I=>t.value=!1),onSelect:v},null,8,["show"])])}}});const se=D(Q,[["__scopeId","data-v-1866dd25"]]);export{se as default};
