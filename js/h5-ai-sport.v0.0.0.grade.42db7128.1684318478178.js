import{d as f,u as k,m as y,o as I,c as o,e as n,v as s,A as e,y as a,a3 as p,j as i,P as m,C as N,a2 as C,E as S,G as D,bA as b,a5 as w,_ as $}from"./h5-ai-sport.v0.0.0.index.95bda2e2.1684318478178.js";import{g as L}from"./h5-ai-sport.v0.0.0.gradeLevel.6ea0a11d.1684318478178.js";import{g as V}from"./h5-ai-sport.v0.0.0.teacher.cc7b4fdd.1684318478178.js";import{I as x}from"./h5-ai-sport.v0.0.0.index.9c59126a.1684318478178.js";const h=l=>(S("data-v-c2fe4648"),l=l(),D(),l),B={style:{height:"100%"}},T={class:"home"},j={class:"userInfo"},A={class:"date"},E={class:"sayHi"},G={class:"ellipsis"},z={key:0,class:"schoolView"},F={class:"ellipsis"},H=h(()=>s("div",{class:"banner"},null,-1)),M=h(()=>s("div",{class:"contentTitle"},[s("text",{class:"tit"},"我的班级")],-1)),P={key:0,class:"classList"},U=["onClick"],W={class:"leftContent"},q={class:"class_name"},J={class:"class_overdiv"},K={class:"overvier_item persenNum"},O={class:"overvier_item"},Q=h(()=>s("span",null,"今日运动",-1)),R={class:"timeCount"},X={key:1,class:"noData"},Y={key:0},Z=f({__name:"grade",setup(l){const _=k(),v=()=>{var c=p().day(),d=["日","一","二","三","四","五","六"];return"星期"+d[c]},u=y([]);return I(()=>{V({}).then(c=>{u.value=c.result})}),(c,d)=>{const r=x,g=w;return o(),n("div",B,[s("div",T,[s("div",j,[s("div",A,e(a(p)().month()+1)+"月"+e(a(p)().date())+"日 "+e(v()),1),s("div",E,[i(r,{onClick:d[0]||(d[0]=t=>c.$router.push("/info/accountmanage")),fit:"contain",class:"change-img",src:"https://yunketang-file.dream-sports.cn/static/teacher-change-user.png"}),s("span",null,e(a(p)().hour()>12?"下午好":"上午好")+"，",1),s("span",G,e(a(_).userInfo.nickName)+"老师",1)]),a(_).userInfo.schoolName?(o(),n("div",z,[i(r,{class:"schoolIcon",src:"https://yunketang-file.dream-sports.cn/static/team_icon1.png"}),s("span",F,e(a(_).userInfo.schoolName),1)])):m("",!0)]),H,M,u.value.length?(o(),n("div",P,[(o(!0),n(N,null,C(u.value,t=>(o(),n("div",{class:"class_item",onClick:ss=>c.$router.push(`/classoverview/${t.id}`),key:t.id},[s("div",W,[s("div",q,e(a(L)(t.level))+e(t.gradeName||t.grade+"年级")+" "+e(t.numberName||t.number+"班"),1),s("div",J,[s("div",K,[i(r,{class:"class_item_icon",src:"https://yunketang-file.dream-sports.cn/static/teacher_people_icon.png"}),s("span",null,e(t.total)+"人",1)]),s("div",O,[i(r,{class:"class_item_icon",src:"https://yunketang-file.dream-sports.cn/static/teacher_clock_icon.png"}),Q,s("span",R,e(a(b)(t.time)),1)])])]),i(g,{name:"arrow",size:".45rem",color:"#DDD"})],8,U))),128))])):(o(),n("div",X,[s("div",null,[i(r,{class:"noDataIcon",src:"https://yunketang-file.dream-sports.cn/static/noDatabG.png"}),a(_).userInfo?(o(),n("div",Y,"暂无我的班级数据")):m("",!0)])]))])])}}});const ns=$(Z,[["__scopeId","data-v-c2fe4648"]]);export{ns as default};
