import{_ as p,X as u,bm as m,H as v,c as e,e as t,C as y,a2 as f,A as l,v as c,j as h,E as g,G as k,a5 as I}from"./h5-ai-sport.v0.0.0.index.95bda2e2.1684318478178.js";import{a as S}from"./h5-ai-sport.v0.0.0.city.ac6bf508.1684318478178.js";import{u as N}from"./h5-ai-sport.v0.0.0.SchoolConfig.0d638cdc.1684318478178.js";const D=N(),w={data(){return{fromPage:"",text:"",schoolList:""}},mounted:function(){this.fromPage=this.$route.query.fromPage,this.getSchoolList(this.$route.query.id,this.$route.query.keyword)},methods:{getSchoolList(o,a){S({cityId:o,keyword:a}).then(n=>{this.schoolList=n.result})},clickItem(o){let a=this;u({message:`确定选择学校为${o.name}吗？`}).then(()=>{a.fromPage==="edit"?m({schoolId:""}).then(()=>{v("修改成功"),this.$router.go(-2)}):(D.setSchoolInfo(o),this.$router.go(-2))}).catch(()=>{})}}},x=o=>(g("data-v-7b83e3bd"),o=o(),k(),o),L={style:{height:"100%"}},b=x(()=>c("div",{class:"minGaps"},[c("div",{class:"school-content1"},"为您找到以下结果")],-1)),$={key:0,class:"schoolView"},C=["onClick"],P={key:0,class:"schoolName"},q={class:"school-content ellipsis"},B={key:1,class:"schoolName"},T={class:"school-content ellipsis"},V={key:1,style:{"padding-top":"40px","font-size":"28px",color:"#666666"},class:"noDataTips"};function E(o,a,n,G,i,d){const r=I;return e(),t("div",L,[b,i.schoolList.length?(e(),t("div",$,[(e(!0),t(y,null,f(i.schoolList,(s,_)=>(e(),t("div",{onClick:j=>d.clickItem(s),class:"schoolItem",key:_},[s.provinceName||s.cityName||s.countyName?(e(),t("div",P,[c("div",q,l(s.name+" ("+s.provinceName+","+s.cityName+","+s.countyName+")"),1),c("div",null,[h(r,{color:"#D0D0D0",name:"arrow"})])])):(e(),t("div",B,[c("div",T,l(s.name),1),c("div",null,[h(r,{color:"#D0D0D0",name:"arrow"})])]))],8,C))),128))])):(e(),t("div",V,l(i.text),1))])}const H=p(w,[["render",E],["__scopeId","data-v-7b83e3bd"]]);export{H as default};
