import{F as c}from"./h5-ai-sport.v0.0.0.index.9fee9067.1684318478178.js";import{d as r,c as _,e as d,_ as l}from"./h5-ai-sport.v0.0.0.index.95bda2e2.1684318478178.js";const p={id:"my-chart"},m=r({__name:"ChartLineData",props:{data:null,code:null},setup(n,{expose:a}){const o=n;return a({init:()=>{const e=new c.Chart({el:document.getElementById("my-chart"),pixelRatio:window.devicePixelRatio});return e.source(o.data,{score:{min:0},day:{tickCount:8,min:0}}),e.tooltip({onShow:function(s){const t=s.items;t[0].name=t[0].title,t[0].value=t[0].value+(o.code=="ChuQiu"?" 分":" 个")}}),e.line().position("day*score"),e.point().position("day*score").style({stroke:"#fff",lineWidth:1}),e.render(),e}}),(e,i)=>(_(),d("canvas",p))}});const y=l(m,[["__scopeId","data-v-3eb94ef4"]]);export{y as _};
