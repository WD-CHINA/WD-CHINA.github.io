import{d as A,m as _,Y as V,N as R,o as F,bH as g,ax as j,c as r,e as l,v as e,j as n,A as c,y as i,x as w,B as D,C as G,a2 as H,D as O,a5 as z,E as M,G as P,V as U,P as Y,bA as q,a7 as J,_ as K}from"./h5-ai-sport.v0.0.0.index.95bda2e2.1684318478178.js";import{a as Q,T as W}from"./h5-ai-sport.v0.0.0.index.c132801b.1684318478178.js";import{_ as X}from"./h5-ai-sport.v0.0.0.ChartLine.714f9a00.1684318478178.js";import{A as Z}from"./h5-ai-sport.v0.0.0.index.09dfd800.1684318478178.js";import{g as ee}from"./h5-ai-sport.v0.0.0.gradeLevel.6ea0a11d.1684318478178.js";import{b as te,c as ae}from"./h5-ai-sport.v0.0.0.teacher.cc7b4fdd.1684318478178.js";import{I as se}from"./h5-ai-sport.v0.0.0.index.9c59126a.1684318478178.js";import"./h5-ai-sport.v0.0.0.use-id.63b167f5.1684318478178.js";import"./h5-ai-sport.v0.0.0.use-tab-status.b97a6de6.1684318478178.js";import"./h5-ai-sport.v0.0.0.index.1828ee52.1684318478178.js";import"./h5-ai-sport.v0.0.0.index.9fee9067.1684318478178.js";const k=m=>(M("data-v-d963903a"),m=m(),P(),m),oe={class:"classOverdiv"},ne={class:"classInfo"},ce={class:"info"},re={class:"schoolName ellipsis"},le={class:"levelNumber"},ie={class:"data_title"},de=k(()=>e("div",{class:"data_title_name"},"班级运动时长",-1)),_e={class:"f2-container"},me=k(()=>e("div",{class:"chartyInit"},"分钟",-1)),ve={class:"rankBody"},ue={class:"rankTab"},pe={key:0,class:"rank_item_div"},he=["onClick"],fe={class:"rank_item_left"},ge={class:"rank_item_right"},ke={class:"nickName ellipsis"},Ne={key:0,class:"teacherIcon"},be={class:"rightRight"},Ie={style:{"margin-right":"20px"}},ye={key:1,class:"noData"},Te=k(()=>e("div",null,"暂无数据",-1)),Ce=A({__name:"overview",setup(m){const u=_(1),v=_(!1),d=_("today"),N=_([]),b=_(null),t=V({rankList:[],schoolName:"",level:"",gradeName:"",grade:"",numberName:"",number:"",total:""}),p=R();F(()=>{I(),y()});const I=()=>{te({type:d.value,teamId:p.params.teamId}).then(a=>{t.rankList=a.result.rankList,t.schoolName=a.result.schoolName,t.level=a.result.level,t.gradeName=a.result.gradeName,t.grade=a.result.grade,t.numberName=a.result.numberName,t.number=a.result.number,t.total=a.result.total})},S=a=>{d.value=a,I()},B=a=>{u.value=a.ind,y(),v.value=!1},y=()=>{ae({teamId:p.params.teamId,startTimestamp:g[u.value].startTimestamp,endTimestamp:parseInt(new Date().getTime()/1e3)}).then(a=>{a.result.forEach(s=>{s.time=parseFloat((s.time/60).toFixed(1))}),N.value=a.result,j(()=>{var s;(s=b.value)==null||s.init()})})};return(a,s)=>{const h=se,E=O,T=z,x=Z,L=X,C=Q,$=W;return r(),l("div",oe,[e("div",ne,[e("div",ce,[n(h,{src:"https://yunketang-file.dream-sports.cn/static/classData_icon.png"}),e("div",null,[e("div",re,c(t.schoolName),1),e("div",le,c(i(ee)(t.level))+" "+c(t.gradeName||t.grade+"年级")+c(t.numberName||t.number+"班")+" "+c(t.total)+"人 ",1)])]),n(E,{round:"",icon:"share",class:"sharebtn",to:`/invite/${i(p).params.teamId}`},{default:w(()=>[D(" 邀请学生 ")]),_:1},8,["to"])]),e("div",ie,[de,e("div",{class:"pickerBtn",onClick:s[0]||(s[0]=o=>v.value=!0)},[e("span",null,c(i(g)[u.value].name),1),n(T,{color:"#D0D0D0",name:"arrow-down"})])]),n(x,{round:!1,show:v.value,actions:i(g),onClose:s[1]||(s[1]=o=>v.value=!1),onSelect:B},null,8,["show","actions"]),e("div",_e,[me,n(L,{ref_key:"chart",ref:b,data:N.value},null,8,["data"])]),e("div",ve,[e("div",ue,[n($,{color:"#0074E8","title-active-color":"#0074E8",onChange:S,"line-width":"100",active:d.value,"onUpdate:active":s[2]||(s[2]=o=>d.value=o)},{default:w(()=>[n(C,{title:"今日运动时长",name:"today"}),n(C,{title:"累计运动时长",name:"all"})]),_:1},8,["active"])]),t.rankList.length?(r(),l("div",pe,[(r(!0),l(G,null,H(t.rankList,(o,f)=>(r(),l("div",{class:"rank_item",onClick:we=>a.$router.push(`/teachercharts/sportsdata/${o.id}/${o.nickName}`),key:f},[e("div",fe,[e("span",{class:U("rankNum num"+(f+1))},c(f+1),3),n(h,{round:"",fit:"cover",class:"rank_avatar",src:o.avatar||"https://yunketang-file.dream-sports.cn/avatar/defaultAvatar.jpg"},null,8,["src"])]),e("div",ge,[e("div",ke,[D(c(o.nickName)+" ",1),o.roleCode=="ROLE_TEACHER"?(r(),l("div",Ne,"老师")):Y("",!0)]),e("div",be,[e("span",Ie,c(d.value==="today"?i(q)(o.time):i(J)(o.time).m+"分钟"),1),n(T,{color:"#BEBDC0",name:"arrow"})])])],8,he))),128))])):(r(),l("div",ye,[e("div",null,[n(h,{class:"noDataIcon",src:"https://yunketang-file.dream-sports.cn/static/noDatabG.png"}),Te])]))])])}}});const je=K(Ce,[["__scopeId","data-v-d963903a"]]);export{je as default};
