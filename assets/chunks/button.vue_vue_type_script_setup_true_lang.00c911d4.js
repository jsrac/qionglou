import{w as Y,_ as F,Q as A}from"./icon.vue_vue_type_script_setup_true_lang.52b0b906.js";import{d as G,f as x,aj as H,e as M,i as J,w as K,b as e,o as i,c as d,y as L,Y as S,D as w,z as $,r as X,a as E,t as q}from"./framework.d70efecd.js";const C=Y(F),Z={size:{type:String,default:"normal"},api:{type:String,default:""},url:{type:String,default:""},text:{type:String,default:""},font:{type:String,default:""},src:{type:String,default:""},weight:{type:String,default:"500"},color:{type:String,default:""},layout:{type:String,default:""},state:{type:String,values:["default","primary","success","warning","danger","info","text","api"],default:"default"},wide:{type:[String,Number],default:"medium",validator:a=>typeof a=="string"?["small","medium","large"].includes(a):typeof a=="number"?a>=0:!1},type:{type:String,values:["api","default","icon","font","text"],default:"default"},react:{type:Object,default:{hover:{opacity:"0.8",transition:"color 0.54s, opacity 0.25s"},reset:{opacity:"1",transition:"color 0.54s, opacity 0.25s"},active:{transition:"color 0.25s, opacity 0.25s",opacity:"0.6"},mouseUp:{opacity:"1",transition:"color 0.54s, opacity 0.25s"}}}},_={click:a=>a instanceof MouseEvent},tt={key:0,class:"ql-button"},it=G({name:"QlButton",__name:"button",props:Z,emits:_,setup(a,{emit:U}){const u=x(null),W=a,B=U,f=o=>{B("click",o)},{type:c,react:O,size:k,src:h,text:p,url:g,weight:y,font:v,layout:D,color:b,plain:et,round:ot,circle:rt,disabled:nt,link:st,api:j,wide:z}=W,l=H(W,"state"),Q=x(O),n=x({text:"",classes:{},class:"",state:"",apiStyle:{}}),m=M(()=>k==="normal"?{padding:"10px 15px 10px 15px"}:{small:{padding:"7px"},medium:{padding:"16px"},large:{padding:"10px 64px"},mini:{padding:"4px"}}[k]||"padding:"+k),R=M(()=>typeof l.value=="object"?l.value:{default:{border:"1.5px solid #DADCE0",fontWeight:"500",color:"rgb(0 120 255)",borderRadius:"4px !important"},primary:{fontWeight:"500",color:"rgb(255,255,255)",backgroundColor:"rgb(0, 120, 255)",borderRadius:"4px !important"},success:{fontWeight:"500",color:"rgb(255,255,255)",backgroundColor:"#00dc5c",borderRadius:"4px !important"},warning:{fontWeight:"500",color:"rgb(255,255,255)",backgroundColor:"#fdbf00",borderRadius:"4px !important"},danger:{fontWeight:"500",color:"rgb(255,255,255)",backgroundColor:"#ff0a0a",borderRadius:"4px !important"}}[l.value]||{}),I=M(()=>typeof l.value=="object"?l.value:{default:{fontWeight:"500",color:"rgb(0 120 255)",borderRadius:"4px !important"},primary:{fontWeight:"500",color:"rgb(0, 120, 255)",borderRadius:"4px !important"},success:{fontWeight:"500",color:"#00dc5c",borderRadius:"4px !important"},warning:{fontWeight:"500",color:"#fdbf00",borderRadius:"4px !important"},danger:{fontWeight:"500",color:"#ff0a0a",borderRadius:"4px !important"}}[l.value]||{}),N=()=>typeof n.value.state=="object"?n.value.state:{default:{border:"1.5px solid #DADCE0",fontWeight:"500",color:"rgb(0 120 255)",borderRadius:"4px !important"},primary:{fontWeight:"500",color:"rgb(255,255,255)",backgroundColor:"rgb(0, 120, 255)",borderRadius:"4px !important"},success:{fontWeight:"500",color:"rgb(255,255,255)",backgroundColor:"#00dc5c",borderRadius:"4px !important"},warning:{fontWeight:"500",color:"rgb(255,255,255)",backgroundColor:"#fdbf00",borderRadius:"4px !important"},danger:{fontWeight:"500",color:"rgb(255,255,255)",backgroundColor:"#ff0a0a",borderRadius:"4px !important"}}[n.value.state]||{},s=o=>{const t=u.value,r=Q.value;r&&r[o]&&Object.assign(t.style,r[o])},P=x({}),T=o=>{c==="api"?(n.value.text=o.name,n.value.class=o.message,n.value.state=o.state,o.message==="200"?n.value.apiStyle=N():n.value.text=p):n.value.text=p},V=async()=>{try{if(!j){n.value.text=p;return}const t=await(await fetch(j)).json();T(t)}catch(o){console.error("Error fetching API data:",o)}};return J(()=>{V()}),K(P,o=>{o.message==="200"&&(p.value=o.name)}),(o,t)=>e(c)==="icon"?(i(),d("div",tt,[e(p)?(i(),d("div",{key:1,class:"ql-button",ref_key:"buttonRef",ref:u,onMouseenter:t[0]||(t[0]=r=>s("hover")),onMouseleave:t[1]||(t[1]=r=>s("reset")),onMousedown:t[2]||(t[2]=r=>s("active")),onMouseup:t[3]||(t[3]=r=>s("mouseUp")),onClick:f,style:S([m.value,R.value,n.value.apiStyle])},[w(e(C),{type:"img",src:e(h),wide:e(z),alt:n.value.text,url:e(g),font:e(v),color:e(b),weight:e(y),layout:e(D)},null,8,["src","wide","alt","url","font","color","weight","layout"])],36)):(i(),L(e(C),{key:0,type:"img",src:e(h),wide:e(z)},null,8,["src","wide"]))])):e(c)==="font"?(i(),d("div",{key:1,class:"ql-button",ref_key:"buttonRef",ref:u,onMouseenter:t[4]||(t[4]=r=>s("hover")),onMouseleave:t[5]||(t[5]=r=>s("reset")),onMousedown:t[6]||(t[6]=r=>s("active")),onMouseup:t[7]||(t[7]=r=>s("mouseUp")),onClick:f,style:S([m.value,R.value,n.value.apiStyle])},[w(e(C),{type:"font",src:n.value.text,weight:e(y),font:e(v),url:e(g),color:e(b),layout:e(D)},{default:$(()=>[X(o.$slots,"default")]),_:3},8,["src","weight","font","url","color","layout"])],36)):e(c)==="text"?(i(),d("div",{key:2,class:"ql-button",ref_key:"buttonRef",ref:u,onMouseenter:t[8]||(t[8]=r=>s("hover")),onMouseleave:t[9]||(t[9]=r=>s("reset")),onMousedown:t[10]||(t[10]=r=>s("active")),onMouseup:t[11]||(t[11]=r=>s("mouseUp")),onClick:f,style:S([m.value,I.value,n.value.apiStyle])},[w(e(A),{url:e(g),font:e(v),color:e(b),weight:e(y)},{default:$(()=>[E(q(n.value.text),1)]),_:1},8,["url","font","color","weight"])],36)):(i(),d("div",{key:3,class:"ql-button",ref_key:"buttonRef",ref:u,onMouseenter:t[12]||(t[12]=r=>s("hover")),onMouseleave:t[13]||(t[13]=r=>s("reset")),onMousedown:t[14]||(t[14]=r=>s("active")),onMouseup:t[15]||(t[15]=r=>s("mouseUp")),onClick:f,style:S([m.value,R.value,n.value.apiStyle])},[w(e(A),{url:e(g),font:e(v),color:e(b),weight:e(y)},{default:$(()=>[E(q(n.value.text),1)]),_:1},8,["url","font","color","weight"])],36))}});export{it as _};
