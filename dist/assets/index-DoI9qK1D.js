import{d as S,n as f,p as b,e as o,c as p,w as a,L as v,o as c,a as r,_ as B,f as n,b as m,t as l,u as e,i,q as I,g as w,h as L,F as N,k}from"./index-nb6LZTbJ.js";const x=[{title:"5xianNote is running",content:"5xianNote is a site about MathNote,now in 2025.it opens!",date:20250129}],A={style:{"text-align":"center"},id:"home-sentences"},M={class:"roboto"},T={class:"roboto"},$={class:"announcement-title",style:"family-font:roboto"},C={class:"announcement-content"},D=S({__name:"index",setup(V){const h=o.length,y=new Date().getDay().toString();let u=f("waiting for sentence..."),_=f("waiting for author..."),g=f("waiting for date...");return b(async()=>{if(u.value=window.localStorage.getItem("today_sentence"),_.value=window.localStorage.getItem("today_author"),g.value=window.localStorage.getItem("today"),u.value===null||g.value!==y)try{const s=await(await fetch("https://open.saintic.com/api/sentence/all")).json();window.localStorage.setItem("today_sentence",s.data.sentence),window.localStorage.setItem("today_author",s.data.author),window.localStorage.setItem("today",y)}catch(t){console.error("Failed to fetch data:",t)}const d=document.querySelector("#home-articles-alert");h===0?d.innerHTML="there isn't anyting here":(d.innerHTML=`文章数量:${h}<br/>`,o.forEach(t=>{d.innerHTML+=`${t.id+1}:${t.title}<br/>`}))}),(d,t)=>(c(),p(v,null,{left:a(()=>[r(B),r(i,{deleteButton:"",noShadow:"",header:"日句"},{default:a(()=>[n("div",A,[t[0]||(t[0]=m(" Sentence:")),t[1]||(t[1]=n("br",null,null,-1)),n("span",M,l(e(u)),1),t[2]||(t[2]=n("br",null,null,-1)),t[3]||(t[3]=m(" Author:")),t[4]||(t[4]=n("br",null,null,-1)),n("span",T,l(e(_)),1)])]),_:1}),r(i,{deleteButton:"",noShadow:"",header:"文章"},{default:a(()=>t[5]||(t[5]=[n("div",{style:{display:"flex",width:"100%","justify-content":"center","font-family":"roboto"},id:"home-articles"},null,-1),n("div",{id:"home-articles-alert",style:{"text-align":"center"}},null,-1)])),_:1})]),right:a(()=>[r(i,{header:"Announcement",deleteButton:""},{default:a(()=>[n("h3",$,l(e(x)[0].title),1),n("div",C,l(e(x)[0].content),1)]),_:1}),e(o)[0]?(c(),p(i,{header:e(o)[0].id+":"+e(o)[0].title,key:e(o)[0].id,path:"/articles/"+e(o)[0].id},{default:a(()=>[m(l(e(o)[0].description),1)]),_:1},8,["header","path"])):I("",!0),r(i,{header:"更多文章",path:"/Articles"},{default:a(()=>[(c(!0),w(N,null,L(e(o),s=>(c(),w("div",{style:{"text-align":"center"},key:s.id},l(s.id+":"+s.title),1))),128))]),_:1})]),_:1}))}}),H=k(D,[["__scopeId","data-v-3232d9d5"]]);export{H as default};
