import{d as R,m as _,N as M,b as q,o as O,T as z,U as H,c as n,e as c,v as s,j as l,x as y,C as x,a2 as T,L as P,B as V,P as J,H as K,D as Q,V as W,A as d,y as p,bA as B,E as X,G as Y,a5 as Z,_ as ee}from"./h5-ai-sport.v0.0.0.index.95bda2e2.1684318478178.js";import{C as ae}from"./h5-ai-sport.v0.0.0.index.b4b23dd4.1684318478178.js";import{a as te,T as se}from"./h5-ai-sport.v0.0.0.index.c132801b.1684318478178.js";import{D as oe,a as ne}from"./h5-ai-sport.v0.0.0.index.2f82156f.1684318478178.js";import"./h5-ai-sport.v0.0.0.index.250d1fd0.1684318478178.js";import{f as le,j as re}from"./h5-ai-sport.v0.0.0.teacher.cc7b4fdd.1684318478178.js";import{f as $}from"./h5-ai-sport.v0.0.0.unit.7fbf2605.1684318478178.js";import{I as ce}from"./h5-ai-sport.v0.0.0.index.9c59126a.1684318478178.js";import"./h5-ai-sport.v0.0.0.use-id.63b167f5.1684318478178.js";import"./h5-ai-sport.v0.0.0.use-tab-status.b97a6de6.1684318478178.js";import"./h5-ai-sport.v0.0.0.index.1828ee52.1684318478178.js";const ie=k=>(X("data-v-afaa62ee"),k=k(),Y(),k),de={style:{height:"100%"}},ue={class:"finishList"},me={class:"drapBox"},_e={key:0,class:"rank_item_div"},pe={class:"rank_item_left"},ve=["onClick"],he={class:"rightLeft"},ke={class:"nickName ellipsis"},fe={key:0,class:"rightRight ellipsis"},ge={style:{width:"25%"}},ye={style:{width:"35%"},class:"time"},Ie={key:1,class:"rightRight"},be={style:{"margin-right":"20px","text-align":"left"}},Ce={key:1,class:"noData"},De=ie(()=>s("div",null,[s("image",{class:"noDataIcon",src:"https://yunketang-file.dream-sports.cn/static/noDatabG.png"}),s("div",null,"暂无数据")],-1)),we=[De],xe={key:0,class:"write-text"},Te=R({__name:"list",setup(k){const i=_([]),v=M(),E=q(),f=_([]),b=_([]),h=_(""),r=_(""),m=_(!1);O(()=>{le({id:v.params.taskId}).then(t=>{let a=t.result,u=[];Object.assign(u,a.taskGames),u.length>1&&u.unshift({name:"全部",code:"all"}),b.value=u,r.value=u[0].code,a.type==="week"&&a.itemFinishSummary.forEach(o=>{f.value.push({text:`第${o.number}周(${o.startDay}-${o.endDay})`,value:o.number+"",taskItemId:o.taskItemId})}),a.type==="day"&&a.itemFinishSummary.forEach(o=>{f.value.push({text:o.startDay.replace("/","月")+"日",value:o.number+"",taskItemId:o.taskItemId})}),h.value=f.value[0].value,C()})});const C=()=>{z("加载中..."),re({taskId:v.params.taskId,number:h.value,gameCode:r.value=="all"?"":r.value}).then(t=>{i.value=t.result}).finally(()=>{H()})},S=t=>{r.value=t,m.value=!1,C()},U=()=>{i.value.filter(a=>a.checked).length===i.value.length?m.value=!0:m.value=!1},N=()=>{i.value.filter(t=>{t.checked=m.value})},L=()=>{let t=[];if(i.value.find(a=>{a.checked&&t.push(a.testerId)}),t.length===0)return K("请选择学生");E.push(`/taskdetails/remarks/${t}/${v.params.taskItemId}`)};return(t,a)=>{const u=oe,o=ne,A=te,G=se,D=ae,I=Z,j=ce,F=Q;return n(),c("div",de,[s("div",ue,[s("div",me,[l(o,{"active-color":"#0074E8"},{default:y(()=>[l(u,{modelValue:h.value,"onUpdate:modelValue":a[0]||(a[0]=e=>h.value=e),options:f.value},null,8,["modelValue","options"])]),_:1})]),l(G,{onChange:S,"swipe-threshold":5,active:r.value,"onUpdate:active":a[1]||(a[1]=e=>r.value=e)},{default:y(()=>[(n(!0),c(x,null,T(b.value,(e,g)=>(n(),P(A,{title:e.name,name:e.code,key:g},null,8,["title","name"]))),128))]),_:1},8,["active"]),i.value.length?(n(),c("div",_e,[(n(!0),c(x,null,T(i.value,(e,g)=>(n(),c("div",{class:"rank_item",key:e.testerId},[s("div",pe,[l(D,{shape:"square",modelValue:e.checked,"onUpdate:modelValue":w=>e.checked=w,onClick:U},null,8,["modelValue","onUpdate:modelValue"]),s("span",{class:W("rankNum num"+(g+1))},d(g+1),3),l(I,{color:e.hasFinish?"#48C97A":"#EDEDED",name:"checked"},null,8,["color"]),l(j,{class:"rank_avatar",round:"",fit:"cover",src:e.avatar||"https://yunketang-file.dream-sports.cn/avatar/defaultAvatar.jpg"},null,8,["src"])]),s("div",{class:"rank_item_right",onClick:w=>t.$router.push(`/taskdetails/record/${e.testerId}/${h.value}/${p(v).params.taskItemId}/${p(v).params.taskId}`)},[s("div",he,[s("div",ke,d(e.nickName),1)]),r.value!="all"?(n(),c("div",fe,[s("div",ge,d(e.score)+d(p($)(r.value)),1),s("div",ye,d(p(B)(e.time)),1),s("div",null,d(e.avgScoreMinute)+d(p($)(r.value))+"/分",1),l(I,{color:"#BEBDC0",name:"arrow"})])):(n(),c("div",Ie,[s("span",be,d(p(B)(e.time)),1),l(I,{color:"#BEBDC0",name:"arrow"})]))],8,ve)]))),128))])):(n(),c("div",Ce,we))]),i.value.length>0?(n(),c("div",xe,[l(D,{modelValue:m.value,"onUpdate:modelValue":a[2]||(a[2]=e=>m.value=e),class:"box",shape:"square",onClick:N},{default:y(()=>[V("全选")]),_:1},8,["modelValue"]),l(F,{round:"",type:"primary",onClick:L},{default:y(()=>[V("写评语")]),_:1})])):J("",!0)])}}});const Fe=ee(Te,[["__scopeId","data-v-afaa62ee"]]);export{Fe as default};
