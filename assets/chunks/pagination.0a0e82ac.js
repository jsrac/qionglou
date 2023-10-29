import{Q as g}from"./index.81accf4f.js";import{aj as D,e as T,f as E,w as N,U,S as V,o as n,c as s,b as t,Y as R,y as f,A as i,F as h,M as P,n as H,h as W}from"./framework.20dc2a15.js";import"./icon.vue_vue_type_script_setup_true_lang.4d742590.js";import"./text.vue_vue_type_script_setup_true_lang.01441831.js";import"./button.vue_vue_type_script_setup_true_lang.2fcb53c8.js";const Y={current:{type:Number},total:{type:Number},layout:{type:String,default:"abridge"},site:{type:String,default:"center"},weight:{type:String,default:"500"},color:{type:String},font:{type:String,default:""},url:{type:String,default:""},btType:{type:String,default:""},source:{type:Object},arrow:{type:Object}},q={key:0},G={key:1},J={key:0},K={key:1},rt={__name:"pagination",props:Y,setup(A){const j=A;let{current:l,total:o,layout:F,site:M,url:u,font:a,color:c,weight:p,arrow:k}=j;const $=D(j,"source"),m=W(),C=T(()=>typeof $.value=="object"?$.value:{prev:`
      <svg width="13" height="19" viewBox="0 0 13 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0H13L3 9.5L13 19H10L0 9.5L10 0Z" fill="#B3B3B3"/>
      </svg>
    `,first:`
      <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.92308 0H10L3.07692 6.5L10 13H6.92308L0 6.5L6.92308 0Z" fill="#007FFF"/>
      </svg>
    `,next:`
      <svg width="13" height="19" viewBox="0 0 13 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 0H0L10 9.5L0 19H3L13 9.5L3 0Z" fill="#B3B3B3"/>
      </svg>
    `,end:`
      <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.07692 0H0L6.92308 6.5L0 13H3.07692L10 6.5L3.07692 0Z" fill="#007FFF"/>
      </svg>
    `}||{}),L=T(()=>typeof k=="object"?k:{first:"首页",prev:"上一页",next:"下一页",last:"尾页"}||{}),_={primary:{fontWeight:"500",color:"rgb(255,255,255)",backgroundColor:"rgb(0 120 255)",borderRadius:"4px !important"},text:{}},I=T(()=>typeof M=="object"?M:{center:{alignItems:"center",justifyContent:"center",display:"flex",marginTop:"10px"},right:{alignItems:"center",marginTop:"10px",display:"flex",justifyContent:"end"},left:{display:"flex",alignItems:"inherit",marginTop:"10px",justifyContent:"flex-start"}}[M]||{}),S=()=>{const r=o,y=l,e=2;let x=Math.max(1,y-e),z=Math.min(r,y+e);const w=[];for(let B=x;B<=z;B++)w.push(B);return x>1&&(w.unshift("..."),w.unshift(1)),z<r&&(w.push("..."),w.push(r)),w},d=E(S());N([l,o],()=>{d.value=S()}),U("provideCurrentPage",()=>{m==null||m.appContext.app.emit("update:current",l)});const b=r=>{r>=1&&r<=o&&(l=r,d.value=S(),m.emit("update:current",l))},v=r=>b(r),O=()=>b(l-1),Z=()=>b(l+1),Q=V("scrollPage");return N(Q,r=>{b(l+1)}),(r,y)=>(n(),s(h,null,[t(k)?i("",!0):(n(),s("div",{key:0,style:R([I.value])},[t(l)!==1?(n(),f(t(g),{key:0,onClick:y[0]||(y[0]=e=>v(1)),type:"text",innerHTML:C.value.first,url:t(u),font:t(a),color:t(c),weight:t(p)},null,8,["innerHTML","url","font","color","weight"])):i("",!0),t(l)!==1?(n(),f(t(g),{key:1,onClick:O,disabled:t(l)===1,innerHTML:C.value.prev,type:"text",url:t(u),font:t(a),color:t(c),weight:t(p)},null,8,["disabled","innerHTML","url","font","color","weight"])):i("",!0),t(F)==="abridge"?(n(),s(h,{key:2},[d.value[0]>2?(n(),s("span",q,"...")):i("",!0),(n(!0),s(h,null,P(d.value,e=>(n(),f(t(g),{key:e,onClick:x=>v(e),state:t(l)===e?_.primary:"default",class:H({active:t(l)===e}),type:"text",text:e,url:t(u),font:t(a),color:t(c),weight:t(p)},null,8,["onClick","state","class","text","url","font","color","weight"]))),128)),d.value[d.value.length-1]<t(o)-1?(n(),s("span",G,"...")):i("",!0)],64)):(n(!0),s(h,{key:3},P(t(o),e=>(n(),f(t(g),{key:e,onClick:x=>v(e),class:H({active:t(l)===e}),type:"text",text:e,url:t(u),font:t(a),color:t(c),weight:t(p)},null,8,["onClick","class","text","url","font","color","weight"]))),128)),t(l)<t(o)?(n(),f(t(g),{key:4,onClick:Z,disabled:t(l)===t(o),type:"text",innerHTML:C.value.next,url:t(u),font:t(a),color:t(c),weight:t(p)},null,8,["disabled","innerHTML","url","font","color","weight"])):i("",!0),t(l)<t(o)?(n(),f(t(g),{key:5,onClick:y[1]||(y[1]=e=>v(t(o))),type:"text",innerHTML:C.value.end,url:t(u),font:t(a),color:t(c),weight:t(p)},null,8,["innerHTML","url","font","color","weight"])):i("",!0)],4)),t(k)?(n(),s("div",{key:1,style:R([I.value])},[t(l)!==1?(n(),f(t(g),{key:0,onClick:y[2]||(y[2]=e=>v(1)),type:"text",text:L.value.first,url:t(u),font:t(a),color:t(c),weight:t(p)},null,8,["text","url","font","color","weight"])):i("",!0),t(l)!==1?(n(),f(t(g),{key:1,onClick:O,disabled:t(l)===1,text:L.value.prev,type:"text",url:t(u),font:t(a),color:t(c),weight:t(p)},null,8,["disabled","text","url","font","color","weight"])):i("",!0),t(F)==="abridge"?(n(),s(h,{key:2},[d.value[0]>2?(n(),s("span",J,"...")):i("",!0),(n(!0),s(h,null,P(d.value,e=>(n(),f(t(g),{key:e,onClick:x=>v(e),state:t(l)===e?_.primary:"default",class:H({active:t(l)===e}),type:"text",text:e,url:t(u),font:t(a),color:t(c),weight:t(p)},null,8,["onClick","state","class","text","url","font","color","weight"]))),128)),d.value[d.value.length-1]<t(o)-1?(n(),s("span",K,"...")):i("",!0)],64)):(n(!0),s(h,{key:3},P(t(o),e=>(n(),f(t(g),{key:e,onClick:x=>v(e),class:H({active:t(l)===e}),type:"text",text:e,url:t(u),font:t(a),color:t(c),weight:t(p)},null,8,["onClick","class","text","url","font","color","weight"]))),128)),t(l)<t(o)?(n(),f(t(g),{key:4,onClick:Z,disabled:t(l)===t(o),type:"text",text:L.value.next,url:t(u),font:t(a),color:t(c),weight:t(p)},null,8,["disabled","text","url","font","color","weight"])):i("",!0),t(l)<t(o)?(n(),f(t(g),{key:5,onClick:y[3]||(y[3]=e=>v(t(o))),type:"text",text:L.value.last,url:t(u),font:t(a),color:t(c),weight:t(p)},null,8,["text","url","font","color","weight"])):i("",!0)],4)):i("",!0)],64))}};export{rt as default};
