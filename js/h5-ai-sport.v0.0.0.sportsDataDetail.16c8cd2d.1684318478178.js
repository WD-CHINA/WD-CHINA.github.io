import{d as O,N as z,m as r,bH as F,o as G,ax as H,c as n,e as i,v as t,A as s,y as c,a7 as _,P as I,B as L,j as m,C as D,a2 as j,a5 as P,E as U,G as q,bA as x,_ as J}from"./h5-ai-sport.v0.0.0.index.95bda2e2.1684318478178.js";import{_ as K}from"./h5-ai-sport.v0.0.0.ChartLineData.f4d69d55.1684318478178.js";import{A as Q}from"./h5-ai-sport.v0.0.0.index.09dfd800.1684318478178.js";import{f as k}from"./h5-ai-sport.v0.0.0.unit.7fbf2605.1684318478178.js";import{a as W,b as X}from"./h5-ai-sport.v0.0.0.sportscharts.d8070b84.1684318478178.js";import{I as Y}from"./h5-ai-sport.v0.0.0.index.9c59126a.1684318478178.js";import"./h5-ai-sport.v0.0.0.index.9fee9067.1684318478178.js";const l=u=>(U("data-v-3bc11520"),u=u(),q(),u),Z={class:"topTitle"},tt={class:"sportsDataDetail"},et={class:"topOverView"},st={class:"overViewItem"},at={class:"itemInner"},ot={class:"num"},nt=l(()=>t("span",{class:"unit"},"分钟",-1)),it=l(()=>t("div",{class:"item_tit"},"累计运动",-1)),ct={class:"overViewItem"},lt={class:"itemInner"},dt={class:"num"},rt={key:0},_t=l(()=>t("span",{class:"timeNum"},"0",-1)),mt=l(()=>t("span",{class:"unit"},"分",-1)),ut=[_t,mt],pt={key:1},vt={class:"timeNum"},ht={class:"unit"},Tt={key:2},ft={class:"timeNum"},yt=l(()=>t("span",{class:"unit"},"秒",-1)),St=l(()=>t("div",{class:"item_tit"},"今日运动",-1)),gt={class:"overViewItem"},It={class:"itemInner"},Dt={class:"num"},kt=l(()=>t("span",{class:"unit"},"天",-1)),wt=l(()=>t("div",{class:"item_tit"},"连续运动",-1)),bt={class:"overViewItem"},Vt={class:"itemInner"},Ct={class:"num"},Nt={class:"unit"},$t=l(()=>t("div",{class:"item_tit"},"最佳成绩",-1)),jt={class:"data_title"},Bt={class:"data_title_name"},At={class:"f2-container"},Rt={class:"chartyInit"},Et={class:"data_title"},Mt={class:"data_title_name"},Ot={key:0},zt={class:"date_title"},Ft=l(()=>t("div",{class:"title_point"},null,-1)),Gt=l(()=>t("div",{class:"record_point"},null,-1)),Ht={key:0,class:"bestView"},Lt={key:1,class:"noDataTips"},Pt=O({__name:"sportsDataDetail",setup(u){const p=z();function B(e){var a=e;return a=a.split(" ")[1].slice(0,5),a}const T=r(F),f=r(1),w=r([]),v=r(!1),b=r(null),y=r([]),V=r({}),o=r({}),A=e=>{f.value=e.ind,v.value=!1,C()};G(()=>{C(),R()});const C=()=>{let e={type:"sport",gameCode:p.params.code,startTimestamp:T.value[f.value].startTimestamp,userId:p.params.id,endTimestamp:parseInt(new Date().getTime()/1e3)};W(e).then(a=>{y.value=Object.keys(a.result.gameRecords).length?a.result.gameRecords:null;let S=[];a.result.trendChart.forEach(d=>{d.time=Math.ceil(d.time/60),S.push(d.day)}),w.value=a.result.trendChart,H(()=>{var d;(d=b.value)==null||d.init()})}).catch(()=>{})},R=()=>{X({gameCode:p.params.code,userId:p.params.id}).then(e=>{e.result.sportTimeTotal=e.result.sportTimeTotal,e.result.todaySportTimeTotal=e.result.todaySportTimeTotal,o.value=e.result})};return(e,a)=>{const S=P,d=Q,E=K,N=Y;return n(),i(D,null,[t("div",Z,s(e.$route.params.nickName)+"的"+s(e.$route.params.name)+"数据",1),t("div",tt,[t("div",et,[t("div",st,[t("div",at,[t("div",ot,[t("span",null,s(c(_)(o.value.sportTimeTotal).m?c(_)(o.value.sportTimeTotal).m:0),1),nt]),it])]),t("div",ct,[t("div",lt,[t("div",dt,[o.value.todaySportTimeTotal?c(_)(o.value.todaySportTimeTotal).m?(n(),i("span",pt,[t("span",vt,s(c(_)(o.value.todaySportTimeTotal).m),1),t("span",ht,"分"+s(c(_)(o.value.todaySportTimeTotal).s?"":"钟"),1)])):I("",!0):(n(),i("span",rt,ut)),c(_)(o.value.todaySportTimeTotal).s?(n(),i("span",Tt,[t("span",ft,s(c(_)(o.value.todaySportTimeTotal).s),1),yt])):I("",!0)]),St])]),t("div",gt,[t("div",It,[t("div",Dt,[t("span",null,s(o.value.keepDays),1),kt]),wt])]),t("div",bt,[t("div",Vt,[t("div",Ct,[t("span",null,s(o.value.bestScore),1),t("span",Nt,s(c(k)(e.$route.params.code)),1)]),$t])])]),t("div",jt,[t("div",Bt,s(e.$route.params.name)+"数据",1),t("div",{class:"data_title_select",onClick:a[0]||(a[0]=g=>v.value=!0)},[L(s(T.value[f.value].name)+" ",1),m(S,{name:"arrow-down"})])]),m(d,{round:!1,show:v.value,actions:T.value,onCancel:a[1]||(a[1]=g=>v.value=!1),onSelect:A},null,8,["show","actions"]),t("div",At,[t("div",Rt,s(c(k)(e.$route.params.code))+"数",1),m(E,{ref_key:"chart",ref:b,code:e.$route.params.code,data:w.value},null,8,["code","data"])]),t("div",Et,[t("div",Mt,s(e.$route.params.name)+"记录",1)]),y.value?(n(),i("div",Ot,[(n(!0),i(D,null,j(y.value,(g,$)=>(n(),i("div",{class:"recordDay",key:$},[t("div",zt,[Ft,t("div",null,s($),1)]),(n(!0),i(D,null,j(g,(h,M)=>(n(),i("div",{class:"recordItem",key:M},[Gt,t("div",null,s(B(h.createdDate)),1),t("div",null,s(V.value.name),1),t("div",null,s(h.score)+s(c(k)(V.value.code)),1),t("div",null,s(c(x)(h.time)),1),h.hasBestScore?(n(),i("div",Ht,[m(N,{fit:"cover",class:"jiangbei",src:"https://yunketang-file.dream-sports.cn/static/jiangbei.png"}),m(N,{fit:"cover",class:"zuijia",src:"https://yunketang-file.dream-sports.cn/static/bestScore.png"})])):I("",!0)]))),128))]))),128))])):(n(),i("div",Lt,"暂无记录"))])],64)}}});const Xt=J(Pt,[["__scopeId","data-v-3bc11520"]]);export{Xt as default};
