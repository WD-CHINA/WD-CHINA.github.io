var w=(e,i,s)=>new Promise((l,t)=>{var o=h=>{try{r(s.next(h))}catch(c){t(c)}},a=h=>{try{r(s.throw(h))}catch(c){t(c)}},r=h=>h.done?l(h.value):Promise.resolve(h.value).then(o,a);r((s=s.apply(e,i)).next())});import{a as O,_ as G}from"./h5-ai-sport.v0.0.0.GameCounter.ab805804.1684318478178.js";import{_ as C,c as u,e as d,P as m,z as f,T as A,H as N,U as b,O as R,v as n,R as _,S as v,L as I,j as W,A as y,E as D,G as H}from"./h5-ai-sport.v0.0.0.index.95bda2e2.1684318478178.js";import{l as E,v as M,c as L,d as j,e as F,b as U,s as z,a as B}from"./h5-ai-sport.v0.0.0.bgAudio.2915f8b6.1684318478178.js";import{G as V}from"./h5-ai-sport.v0.0.0.gamescorebg.759a4196.1684318478178.js";import"./h5-ai-sport.v0.0.0.index.9c59126a.1684318478178.js";const X={props:{skinCode:String,normalBallShow:Boolean,normalTouchPoint:Object,specialBallShow:Boolean,specialTouchPoint:Object},data(){return{skin:{backgroundTop:0,backgroundBottom:"",code:"he31a5958p",name:"默认皮肤",exchangeIntegral:0,cover:"https://go-ran-pic.lovedabai.com/game-skin/cover_normal.png",preview:"https://go-ran-pic.lovedabai.com/game-skin/preview_normal.png",ballProfectUrl:"https://go-ran-pic.lovedabai.com/game-skin/ball_normal_add.png",ballNormalUrl:"https://go-ran-pic.lovedabai.com/game-skin/ball_normal_normal.png",ballBadUrl:"https://go-ran-pic.lovedabai.com/game-skin/ball_normal_reduce.png"}}},mounted(){},methods:{ballType(e){switch(e){case 1:case 2:case 3:case 4:case 5:case 6:case 7:return{type:"ballProfectUrl",name:"加分球"};case 8:case 9:return{type:"ballBadUrl",name:"减分球"};case 10:return{type:"die",name:"死亡球"};default:return""}}}},Y={class:"skinBg"},q=["src"],K=["src"],Q=["src"],J=["src"];function Z(e,i,s,l,t,o){return u(),d("div",Y,[t.skin.backgroundTop?(u(),d("img",{key:0,src:t.skin.backgroundTop,class:"top"},null,8,q)):m("",!0),t.skin.backgroundBottom?(u(),d("img",{key:1,src:t.skin.backgroundBottom,class:"bottom"},null,8,K)):m("",!0),s.normalBallShow?(u(),d("img",{key:2,class:"touchPoint normal",style:f("width:"+(s.normalTouchPoint.w+"px")+";height:"+(s.normalTouchPoint.w+"px")+";right:"+(s.normalTouchPoint.x+"px")+";top:"+(s.normalTouchPoint.y+"px")+";"),src:s.skinCode=="he31a5958p"?t.skin.ballNormalUrl:t.skin.ballNormalUrl[s.normalTouchPoint.type]},null,12,Q)):m("",!0),s.specialBallShow?(u(),d("img",{key:3,class:"touchPoint",style:f("width:"+(s.specialTouchPoint.w+"px")+";height:"+(s.specialTouchPoint.w+"px")+";right:"+(s.specialTouchPoint.x+"px")+";top:"+(s.specialTouchPoint.y+"px")+";line-height:"+(s.specialTouchPoint.w+"px")),src:t.skin[o.ballType(s.specialTouchPoint.type).type]},null,12,J)):m("",!0)])}const $=C(X,[["render",Z],["__scopeId","data-v-f5719101"]]);function p(e,i){switch(arguments.length){case 1:return parseInt(Math.random()*e+1,10);case 2:return parseInt(Math.random()*(i-e+1)+e,10);default:return 0}}const x=(e,i)=>{const s={x:e.x,y:e.y},l={x:e.x+e.width,y:e.y+e.height},t={x:i.x,y:i.y},o={x:i.x+i.width,y:i.y+i.height};return!(s.x>o.x||t.x>l.x||s.y>o.y||t.y>l.y)};function P(e,i,s,l){let t=e-s,o=i-l;return Math.round(Math.abs(Math.sqrt(Math.pow(t,2)+Math.pow(o,2)))*100)/100}function ee(e,i){for(var s=e[0],l=e[1],t=!1,o=0,a=i.length-1;o<i.length;a=o++){var r=i[o][0],h=i[o][1],c=i[a][0],g=i[a][1],k=h>l!=g>l&&s<(c-r)*(l-h)/(g-h)+r;k&&(t=!t)}return t}function te(e,i,s,l){let t=[{x:i.left,y:i.top},{x:i.left+i.width,y:i.top},{x:i.left+i.width,y:i.top+i.height},{x:i.left,y:i.top+i.height}];e.beginPath(),e.lineWidth=10,e.strokeStyle="#07c160",e.moveTo(t[0].x,t[0].y),l<=s*.25?e.lineTo((t[1].x-t[0].x)*l/(s*.25)+t[0].x,t[0].y):l<=s*.5?(e.lineTo(t[1].x,t[1].y),e.lineTo(t[2].x,(t[2].y-t[1].y)*(l-s*.25)/(s*.25)+t[1].y)):l<=s*.75?(e.lineTo(t[1].x,t[1].y),e.lineTo(t[2].x,t[2].y),e.lineTo(t[2].x-Math.abs(t[3].x-t[2].x)*(l-s*.5)/(s*.25),t[3].y)):(e.lineTo(t[1].x,t[1].y),e.lineTo(t[2].x,t[2].y),e.lineTo(t[3].x,t[3].y),e.lineTo(t[0].x,t[3].y-Math.abs(t[0].y-t[3].y)*(l-s*.75)/(s*.25))),e.stroke()}function ie(e,i,s){i.width<2*s&&(s=i.width/2),i.height<2*s&&(s=i.height/2),e.lineWidth=4,e.strokeStyle="#FFF",e.beginPath(),e.moveTo(i.left+s,i.top),e.arcTo(i.left+i.width,i.top,i.left+i.width,i.top+i.height,s),e.arcTo(i.left+i.width,i.top+i.height,i.left,i.top+i.height,s),e.arcTo(i.left,i.top+i.height,i.left,i.top,s),e.arcTo(i.left,i.top,i.left+i.width,i.top,s),e.closePath(),e.stroke()}const se=60,oe=["1","2","3","start","tipsOpenCloseAudio","tipsInArea","Sport_Ball_appear","Sport_Ball_Beng","Sport_Ball_getScore"];let S;const le={data(){return{GameSoreBg:V,classifier:null,ctx:null,canvasImg:"",frameCtx:null,audioCtx:null,base64Data:"",audioSrc:"",voicesObj:{},startBtn:null,startNum:4,score:0,gameTime:0,videoHeight:"",videoWidth:"",ballInterval:3e3,ballShowTime:3e3,normalTouchTime:0,specialTouchTime:0,ballShowInterval:null,specialBallShowInterval:null,ballShowInter:null,aniCanvas:null,poseStorage:[],maxFrameArr:500,useframeLength:30,minConfidence:.1,needPoseInd:[0,6,7,15,16],exceedRate:0,videoArea:{width:"",height:"",left:"",top:""},rightAnkle:null,leftEye:null,falseTime:0,setPointTimeOut:null,cameraListener:null,predicting:!1,startRegionShow:!1,normalTouchPoint:null,normalBallShow:!1,specialTouchPoint:null,specialBallShow:!1,gameStart:!1,mapping:{size:0,x:0,y:0,angle:""},gameDuration:se,frameArea:{width:"",height:"",left:"",top:""},tipsShow:!1,tips:"",guide:1,touchesCount:0,integral:0,startCountDown:"hide",challengeGameRecordId:"",homeUserId:"",hideCamera:!0,userInfo:{skinCode:""},scoreNum:0,inGameGoout:!1,challengerInfo:{score:""},homeUserInfo:"",homeTouchesCound:"",myGameRecordShow:!1,challengePageShow:!1,finishPageShow:!1,preparationBoxShow:!1,suspendOC:!1,showImg:!0,callbackUrl:"",code:"",showDialog:!1,rfId:null,net:null,frameNum:0}},created(){return w(this,null,function*(){S=yield E(),this.downloadVoice()})},mounted(){return w(this,null,function*(){A("模型加载中..."),this.showImg=!1,yield this.getDom(),yield this.setupCamera(),this.ctx=document.getElementById("stage").getContext("2d"),this.frameCtx=document.getElementById("frameCanvas").getContext("2d"),this.aniCanvas=document.getElementById("aniCanvas").getContext("2d"),yield this.initClassifier(),setTimeout(()=>{this.setOpenExecute()},1e3)})},onBeforeUnmount(){cancelAnimationFrame(this.rfId),z(),B()},methods:{reset(){clearInterval(this.gameCountdownInter),clearTimeout(this.setPointTimeOut),clearTimeout(this.showLevelTime),clearInterval(this.int),clearInterval(this.specialBallShowInterval),this.setOpenExecute()},getDom(){const e=document.body.clientWidth,i=document.body.clientHeight;this.videoWidth=e,this.videoHeight=i},setupCamera(){return w(this,null,function*(){let e=document.getElementById("video"),i=yield navigator.mediaDevices.getUserMedia({audio:!1,video:{width:640,height:480,facingMode:"user"}}).catch(s=>{N("获取授权失败"),b()});return e.srcObject=i,e.setAttribute("webkit-playsinline",!0),e.setAttribute("playsinline",!0),e.play(),new Promise(s=>{e.onloadedmetadata=()=>{s(e)}})})},noChallenge(){this.myGameRecordShow=!1,this.setOpenExecute()},downloadVoice(){oe.forEach(e=>{this.voicesObj[e]=`https://go-ran-pic.lovedabai.com/sound/${e}.mp3`})},setOpenExecute(){this.poseStorage=[],this.challengePageShow=!1,this.startRegionShow=!1,this.finishPageShow=!1,this.preparationBoxShow=!0,ie(this.frameCtx,this.frameArea,1),this.renderPrediction()},renderPrediction(){return w(this,null,function*(){yield this.executeClassify(),this.rfId=requestAnimationFrame(this.renderPrediction)})},playAudio(e){M(e)},setMapping(e,i,s,l){let t={x:(e+s)/2,y:(i+l)/2};const o=s-e,a=l-i,r=Math.atan2(a,o)*(180/Math.PI),c=Math.sqrt(Math.pow(o,2)+Math.pow(a,2))*4.4;this.mapping.x=e-c*.39,this.mapping.y=t.y-c*.465,this.mapping.size=c,this.mapping.angle=r},frameStorage(e){e.score&&e.score>.1&&(this.poseStorage.length<=this.maxFrameArr?this.poseStorage.push(e.keypoints):this.poseStorage.splice(0,250))},executeClassify(){let e=this;if(e.frameNum++,S&&e.frameNum%5==0){let i;e.showImg?i=document.getElementById("image"):i=document.getElementById("video");const l=document.getElementById("output").getContext("2d");L(S,i,l,e.videoWidth,e.videoHeight).then(t=>{if(b(),t.length>0){let o=t[0]?t[0].keypoints:[];if(l.scale(-1,1),l.translate(e.videoWidth,0),l.drawImage(i,0,0,e.videoWidth,e.videoHeight),l.clearRect(0,0,e.videoWidth,e.videoHeight),j(o,l),F(o,l),this.frameStorage(t[0]),!this.gameStart&&!this.finishPageShow){let a=this.testingInFrame(this.frameArea,this.poseStorage.slice(-this.useframeLength),this.needPoseInd,this.useframeLength,!0);a?te(this.aniCanvas,this.frameArea,this.useframeLength,a):this.aniCanvas.clearRect(0,0,this.videoWidth,this.videoHeight),a>=this.useframeLength&&this.startTimeInter()}else if(this.gameStart&&this.startNum==-1){if(this.testingInFrame(this.videoArea,this.poseStorage.slice(-this.useframeLength),this.needPoseInd,this.useframeLength,!1)>this.useframeLength*.3){this.inGameGoout&&(e.inGameGoout=!1,e.inGameGoout_play=!1,e.suspendOC_play=!1);let a=this.testingOpenCloseStatus(this.poseStorage.slice(-20));a?a>20&&(e.clearPoint(),e.suspendOC=!0,e.suspendOC_play||(e.suspendOC_play=!0,e.playAudio(e.voicesObj.tipsOpenCloseAudio))):this.suspendOC&&(e.setPointTimeOut=setTimeout(()=>{e.setPointStart()},e.ballInterval),e.suspendOC_play=!1,e.suspendOC=!1)}else e.clearPoint(),e.tips="请全身位于视频区域",e.suspendOC=!0,e.inGameGoout=!0,e.inGameGoout_play||(e.inGameGoout_play=!0,e.playAudio(e.voicesObj.tipsInArea));this.rightAnkle=o[16],this.leftEye=o[1],this.leftHip=o[11],this.leftShoulder=o[6],this.rightShoulder=o[5],this.leftWrist=o[10],this.rightWrist=o[9];for(let a=0;a<o.length&&(o[a].name.indexOf("wrist")!=-1&&o[a].score>.2&&this.handleTouchPoint(o[a]),!!this.gameStart);a++);}this.predicting=!1}}).catch(t=>{console.log("%c [ err ]-403-「index.vue」","font-size:13px; background:#f5c8dc; color:#ffffff;",t),this.predicting=!1})}},initClassifier(){this.pointSize=parseInt(this.videoHeight*.12),this.normalTouchPoint={w:this.pointSize,x:"",y:"",type:1},this.specialTouchPoint={w:this.pointSize,x:"",y:"",type:0};let e={width:this.videoWidth*.6,height:this.videoHeight*.85,left:this.videoWidth*.2,top:this.videoHeight*.1};this.videoArea={width:this.videoWidth,height:this.videoHeight,left:0,top:0},this.frameArea=e},gameCountdown(){this.gameCountdownInter=setInterval(()=>{this.gameDuration-=1,this.gameTime+=1,this.gameDuration<1&&(clearInterval(this.gameCountdownInter),this.gameOver())},1e3)},initGameData(){this.preparationBoxShow=!1,this.score=0,this.gameTime=0,this.gameStart=!0,this.gameDuration=60,this.touchesCount=0,this.suspendOC=!1,this.inGameGoout=!1,this.inGameGoout_play=!1,this.suspendOC_play=!1,this.startNum=4,this.ballInterval=3e3},startTimeInter(){this.initGameData(),this.int=setInterval(this.clock,1e3),setTimeout(()=>{U("https://yunketang-file.dream-sports.cn/sound/sport_background_music_03.mp3"),this.gameCountdown(),this.setPointTimeOut=setTimeout(()=>{this.setPointStart()},this.ballInterval),this.ballShowInter=setInterval(()=>{this.ballInterval<=3e3&&this.ballInterval>1e3&&(this.ballInterval-=100)},2e3)},4e3)},clock(){this.startNum-=1,this.startNum<0?(this.startCountDown="hide",clearInterval(this.int)):this.startNum==0?(this.startCountDown="start",this.playAudio(this.voicesObj.start)):(this.startCountDown=this.startNum,this.playAudio(this.voicesObj[this.startCountDown+""]))},subMitFinish(){this.score&&R({code:"ChuQiu",score:this.score,time:this.gameTime,challengeGameRecordId:this.challengeGameRecordId}).then(e=>{this.gameRecordId=e.result.gameRecordId,this.exceedRate=parseInt(e.result.exceedRate*100),this.integral=e.result.integral})},gameOver(){this.challengerInfo.score=this.score,this.finishPageShow=!0,this.normalBallShow=!1,this.specialBallShow=!1,this.gameStart=!1,this.preparationBoxShow=!1,this.continuousNum=0,clearInterval(this.gameCountdownInter),this.continuousNum=0,this.subMitFinish(),clearInterval(this.ballShowInter),this.aniCanvas.clearRect(0,0,this.videoWidth,this.videoHeight),B()},region_x(e){let i=this.normalTouchPoint,s=10;switch(e){case 1:return p(0,20);case 2:return p(this.frameArea.left+this.frameArea.width,this.videoWidth-(i.w+s))}},region_y(e){let i=this.normalTouchPoint,s=250,l=this.leftEye.y,t=this.leftHip.y,o=this.rightAnkle.y,a=this.leftShoulder.y;switch(e){case 1:return p(l-i.w<s?s:l-i.w,a-i.w);case 2:return p(t-i.w,o-i.w-s)}},setNormal(){this.normalBallShow=!0,this.specialBallShow=!1,this.ballShowInterval=setInterval(()=>{this.normalTouchTime+=100,this.normalBallShow?this.normalTouchTime>this.ballShowTime&&(this.normalTouchTime=0,clearInterval(this.ballShowInterval),this.normalBallShow=!1,this.missNormalBall()):(this.normalTouchTime=0,clearInterval(this.ballShowInterval),this.setPointTimeOut=setTimeout(()=>{this.setPointStart()},this.ballInterval))},100)},setSpecial(){this.specialBallShow=!0,this.normalBallShow=!0,this.specialBallShowInterval=setInterval(()=>{this.specialTouchTime+=100,this.normalTouchTime+=100,!this.normalBallShow&&!this.specialBallShow?(this.specialTouchTime=0,this.normalTouchTime=0,clearInterval(this.specialBallShowInterval),this.setPointTimeOut=setTimeout(()=>{this.setPointStart()},this.ballInterval)):!this.normalBallShow&&this.specialTouchTime>this.ballShowTime?(this.specialTouchTime=0,this.normalTouchTime=0,this.specialBallShow=!1,clearInterval(this.specialBallShowInterval),this.setPointTimeOut=setTimeout(()=>{this.setPointStart()},this.ballInterval)):!this.specialBallShow&&this.normalTouchTime>this.ballShowTime?(this.specialTouchTime=0,this.normalTouchTime=0,this.normalBallShow=!1,clearInterval(this.specialBallShowInterval),this.missNormalBall()):this.normalTouchTime>this.ballShowTime&&this.specialTouchTime>this.ballShowTime&&(this.specialTouchTime=0,this.normalTouchTime=0,this.specialBallShow=!1,this.normalBallShow=!1,clearInterval(this.specialBallShowInterval),this.missNormalBall())},100)},clearPoint(){this.specialBallShow=!1,this.normalBallShow=!1,clearTimeout(this.setPointTimeOut)},setPointStart(){if(this.normalTouchTime=0,this.specialTouchTime=0,this.gameStart&&!this.suspendOC&&!this.inGameGoout){this.scoreNum=0,this.playAudio(this.voicesObj.Sport_Ball_appear),clearInterval(this.ballShowInterval),this.normalXRegion=p(1,2),this.gameDuration>20?this.normalYRegion=this.normalYRegion==1?2:1:this.normalYRegion=p(1,2);let e=p(2,5)<=2;if(this.normalTouchPoint.x=this.region_x(this.normalXRegion),this.normalTouchPoint.y=this.region_y(this.normalYRegion),this.normalTouchPoint.type=p(0,2),e&&this.gameDuration>9){let i=this.normalXRegion==1?2:1,s=p(1,2),l=p(1,this.score>=5?9:7);this.specialTouchPoint.x=this.region_x(i),this.specialTouchPoint.y=this.region_y(s),this.specialTouchPoint.type=l,this.setSpecial()}else this.setNormal()}},testingInFrame(e,i,s,l,t){let o=[[e.left,e.top],[e.left+e.width,e.top],[e.left+e.width,e.top+e.height],[e.left,e.top+e.height]],a=[];for(let h=0;h<i.length;h++){let c=!0;for(let g=0;g<s.length;g++)if(i[h].length){if(!ee([i[h][s[g]].x,i[h][s[g]].y],o)){c=!1;break}}else{c=!1;break}a.push(c)}let r=0;return a.forEach(h=>{h?r+=1:t&&(r=0)}),r},testingOpenCloseStatus(e){let i=[];e.forEach(t=>{if(t[11].score>.2&&t[15].score>.2&&t[16].score>.2){let o=P(t[11].x,t[11].y,t[15].x,t[15].y),a=P(t[15].x,t[15].y,t[16].x,t[16].y);a>o*.5?i.push(1):a<o*.2&&i.push(2)}});let s=0,l=0;return i.forEach(t=>{t==1?l++:t==2&&s++}),l!=0&&s!=0?this.falseTime=0:this.falseTime++,this.falseTime},handleTouchPoint(e){let i=this.normalTouchPoint,s=this.specialTouchPoint,l={x:i.x,y:i.y,width:i.w,height:i.w},t={x:s.x,y:s.y,width:s.w,height:s.w},o={x:parseInt(e.x),y:parseInt(e.y),width:i.w/4,height:i.w/4};var a=0;x(l,o)&&this.normalBallShow&&!this.suspendOC&&!this.inGameGoout&&(this.scoreNum=0,this.playAudio(this.voicesObj.Sport_Ball_getScore),this.normalTouchTime<500&&(this.normalTouchTime=500),a=parseInt(this.ballShowTime/this.normalTouchTime*2+1),this.score=this.score+a,this.scoreNum="+"+a,this.normalBallShow=!1,this.touchesCount+=1);var r=0;x(t,o)&&this.specialBallShow&&!this.suspendOC&&!this.inGameGoout&&(this.scoreNum=0,s.type==10?(this.playAudio(this.voicesObj.Sport_Ball_Beng),this.gameOver(1)):s.type<=7?(this.playAudio(this.voicesObj.Sport_Ball_getScore),r=8):s.type<=9&&(this.playAudio(this.voicesObj.Sport_Ball_Beng),r=-5),this.score=this.score+r,this.scoreNum=r>0?"+"+r:r,this.specialBallShow=!1,this.touchesCount+=1)},missNormalBall(){this.continuousNum=0,this.gameStart&&(this.setPointTimeOut=setTimeout(()=>{this.setPointStart()},this.ballInterval))}}},T=e=>(D("data-v-4332a8df"),e=e(),H(),e),ae=["src"],ne=["width","height"],he=["width","height"],re=["width","height"],ce=["height","width"],ue=["height","width"],me={class:"readTipsView"},de={class:"frameTipsImg",src:"https://go-ran.oss-cn-shanghai.aliyuncs.com/static/ready_tips_positive.png"},pe={key:2,class:"scoreNum"},ge={key:3,class:"tipsMask"},fe={key:0,class:"tipsdata"},we={key:1,src:"https://go-ran.oss-cn-shanghai.aliyuncs.com/static/suspendOC.png"},_e={key:4,class:"finishPage"},ve={class:"result_view"},ye={class:"result_score_view"},Te=T(()=>n("div",{class:"result_score"},null,-1)),Se=T(()=>n("div",{class:"result_defen"},"快来看看本次获得的成绩吧！",-1)),be={class:"result_evaluate"},Ie={class:"result_info_body"},Be={class:"info_item"},xe={class:"result_count"},Pe=T(()=>n("div",{class:"result_cishu"},"触球次数",-1)),Ce={class:"info_item"},ke={class:"result_count"},Oe=T(()=>n("div",{class:"result_cishu"},"时长(s)",-1)),Ge=["src"],Ae={class:"finishBottom"},Ne=T(()=>n("div",null,"再玩一局",-1)),Re=[Ne];function We(e,i,s,l,t,o){const a=O,r=$,h=G;return u(),d("div",{class:"page__bd",style:f({width:t.videoWidth+"px",height:t.videoHeight+"px"})},[n("div",{id:"main",style:f({width:t.videoWidth+"px",height:t.videoHeight+"px"})},[_(n("img",{id:"image",src:t.base64Data,style:f({width:t.videoWidth+"px",height:t.videoHeight+"px"}),alt:""},null,12,ae),[[v,t.showImg]]),n("canvas",{id:"output",width:t.videoWidth,style:{transform:"scaleX(-1)"},height:t.videoHeight},null,8,ne),n("canvas",{id:"stage",width:t.videoWidth,height:t.videoHeight},null,8,he),_(n("video",{id:"video",width:t.videoWidth,height:t.videoHeight,style:{transform:"scaleX(-1)","object-fit":"cover"},"webkit-playsinline":"true",playsinline:"true"},null,8,re),[[v,!t.showImg]]),_(n("canvas",{height:t.videoHeight,width:t.videoWidth,id:"frameCanvas",class:"frameCanvas"},null,8,ce),[[v,t.preparationBoxShow]]),_(n("canvas",{height:t.videoHeight,width:t.videoWidth,id:"aniCanvas",class:"frameCanvas aniCanvas"},null,8,ue),[[v,t.preparationBoxShow]]),n("div",me,[n("div",{style:f("width:"+t.frameArea.width*.8+"px;")},[_(n("img",de,null,512),[[v,t.preparationBoxShow]])],4)]),t.startCountDown!="hide"?(u(),I(a,{key:0,"start-count-down":t.startCountDown},null,8,["start-count-down"])):m("",!0),W(r,{"skin-code":"he31a5958p","special-ball-show":t.specialBallShow,"normal-ball-show":t.normalBallShow,"special-touch-point":t.specialTouchPoint,"normal-touch-point":t.normalTouchPoint},null,8,["special-ball-show","normal-ball-show","special-touch-point","normal-touch-point"]),t.gameStart&&!t.finishPageShow?(u(),I(h,{key:1,score:t.score,"game-duration":t.gameDuration,"game-type":"game"},null,8,["score","game-duration"])):m("",!0),t.scoreNum?(u(),d("div",pe,y(t.scoreNum),1)):m("",!0),(t.suspendOC||t.inGameGoout)&&t.gameStart?(u(),d("div",ge,[t.inGameGoout?(u(),d("div",fe,y(t.tips),1)):m("",!0),t.suspendOC?(u(),d("img",we)):m("",!0)])):m("",!0),t.finishPageShow?(u(),d("div",_e,[n("div",ve,[n("div",ye,[Te,Se,n("div",be,"好厉害！！你已超越了"+y(t.exceedRate||0)+"%的小伙伴",1),n("div",Ie,[n("div",Be,[n("div",xe,y(t.touchesCount),1),Pe]),n("div",Ce,[n("div",ke,y(t.gameTime),1),Oe])])]),n("img",{class:"result_bg",src:t.GameSoreBg},null,8,Ge)]),n("div",Ae,[n("div",{class:"againBtn",onClick:i[0]||(i[0]=(...c)=>o.reset&&o.reset(...c))},Re)])])):m("",!0)],4)],4)}const Fe=C(le,[["render",We],["__scopeId","data-v-4332a8df"]]);export{Fe as default};
