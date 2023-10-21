import{w as H,_ as J,Q as O}from"./icon.vue_vue_type_script_setup_true_lang.38342eb7.js";import{d as K,f as i,aj as L,e as D,i as Q,w as X,b as e,o as u,c as g,y as Z,Y as k,D as R,z as A,r as _,a as I,t as N}from"./framework.4772a8a4.js";const j=H(J),tt={size:{type:String,default:"normal"},music:{type:String},api:{type:String,default:""},url:{type:String,default:""},text:{type:String,default:""},font:{type:String,default:""},src:{type:String,default:""},weight:{type:String,default:"500"},color:{type:String,default:""},layout:{type:String,default:""},state:{type:String,values:["default","primary","success","warning","danger","info","text","api"],default:"default"},wide:{type:[String,Number],default:"medium",validator:l=>typeof l=="string"?["small","medium","large"].includes(l):typeof l=="number"?l>=0:!1},type:{type:String,values:["api","default","icon","font","text"],default:"default"},react:{type:Object,default:{hover:{opacity:"0.8",transition:"color 0.54s, opacity 0.25s"},reset:{opacity:"1",transition:"color 0.54s, opacity 0.25s"},active:{transition:"color 0.25s, opacity 0.25s",opacity:"0.6"},mouseUp:{opacity:"1",transition:"color 0.54s, opacity 0.25s"}}}},et={click:l=>l instanceof MouseEvent},ot={key:0,class:"ql-button"},dt=K({name:"QlButton",__name:"button",props:tt,emits:et,setup(l,{emit:nt}){const p=i(null),z=l,{type:y,react:P,size:$,src:E,text:d,url:c,weight:v,font:b,layout:q,color:m,plain:rt,round:st,circle:lt,disabled:at,link:it,api:U,wide:B,music:f}=z,a=L(z,"state"),T=i(P),r=i({text:"",classes:{},class:"",state:"",apiStyle:{}}),x=D(()=>$==="normal"?{padding:"10px 15px 10px 15px"}:{small:{padding:"7px"},medium:{padding:"16px"},large:{padding:"10px 64px"},mini:{padding:"4px"}}[$]||"padding:"+$),M=D(()=>typeof a.value=="object"?a.value:{default:{border:"1.5px solid #DADCE0",fontWeight:"500",color:"rgb(0 120 255)",borderRadius:"4px !important"},primary:{fontWeight:"500",color:"rgb(255,255,255)",backgroundColor:"rgb(0, 120, 255)",borderRadius:"4px !important"},success:{fontWeight:"500",color:"rgb(255,255,255)",backgroundColor:"#00dc5c",borderRadius:"4px !important"},warning:{fontWeight:"500",color:"rgb(255,255,255)",backgroundColor:"#fdbf00",borderRadius:"4px !important"},danger:{fontWeight:"500",color:"rgb(255,255,255)",backgroundColor:"#ff0a0a",borderRadius:"4px !important"}}[a.value]||{}),V=D(()=>typeof a.value=="object"?a.value:{default:{fontWeight:"500",color:"rgb(0 120 255)",borderRadius:"4px !important"},primary:{fontWeight:"500",color:"rgb(0, 120, 255)",borderRadius:"4px !important"},success:{fontWeight:"500",color:"#00dc5c",borderRadius:"4px !important"},warning:{fontWeight:"500",color:"#fdbf00",borderRadius:"4px !important"},danger:{fontWeight:"500",color:"#ff0a0a",borderRadius:"4px !important"}}[a.value]||{}),Y=()=>typeof r.value.state=="object"?r.value.state:{default:{border:"1.5px solid #DADCE0",fontWeight:"500",color:"rgb(0 120 255)",borderRadius:"4px !important"},primary:{fontWeight:"500",color:"rgb(255,255,255)",backgroundColor:"rgb(0, 120, 255)",borderRadius:"4px !important"},success:{fontWeight:"500",color:"rgb(255,255,255)",backgroundColor:"#00dc5c",borderRadius:"4px !important"},warning:{fontWeight:"500",color:"rgb(255,255,255)",backgroundColor:"#fdbf00",borderRadius:"4px !important"},danger:{fontWeight:"500",color:"rgb(255,255,255)",backgroundColor:"#ff0a0a",borderRadius:"4px !important"}}[r.value.state]||{},s=n=>{const t=p.value,o=T.value;o&&o[n]&&Object.assign(t.style,o[n])},h=i({}),F=n=>{y==="api"?(r.value.text=n.name,r.value.class=n.message,r.value.state=n.state,n.message==="200"?r.value.apiStyle=Y():r.value.text=d):r.value.text=d},G=async()=>{try{if(!U){r.value.text=d;return}const t=await(await fetch(U)).json();F(t)}catch(n){console.error("Error fetching API data:",n)}},C=i(null),W=i(null);Q(()=>{f&&(C.value=f.sound?new Audio(f.sound.url):null,W.value=f.clickSound?new Audio(f.clickSound.url):null)});const S=()=>{C.value&&C.value.play()},w=()=>{W.value&&W.value.play()};return Q(()=>{G()}),X(h,n=>{n.message==="200"&&(d.value=n.name)}),(n,t)=>e(y)==="icon"?(u(),g("div",ot,[e(d)?(u(),g("div",{key:1,class:"ql-button",ref_key:"buttonRef",ref:p,onMouseenter:t[0]||(t[0]=o=>{S(),s("hover")}),onMouseleave:t[1]||(t[1]=o=>s("reset")),onMousedown:t[2]||(t[2]=o=>s("active")),onMouseup:t[3]||(t[3]=o=>s("mouseUp")),onClick:t[4]||(t[4]=o=>{w()}),style:k([x.value,M.value,r.value.apiStyle])},[R(e(j),{type:"img",src:e(E),wide:e(B),alt:r.value.text,url:e(c),font:e(b),color:e(m),weight:e(v),layout:e(q)},null,8,["src","wide","alt","url","font","color","weight","layout"])],36)):(u(),Z(e(j),{key:0,type:"img",src:e(E),wide:e(B)},null,8,["src","wide"]))])):e(y)==="font"?(u(),g("div",{key:1,class:"ql-button",onMouseenter:t[5]||(t[5]=o=>{S(),s("hover")}),onClick:t[6]||(t[6]=o=>{w()}),ref_key:"buttonRef",ref:p,onMouseleave:t[7]||(t[7]=o=>s("reset")),onMousedown:t[8]||(t[8]=o=>s("active")),onMouseup:t[9]||(t[9]=o=>s("mouseUp")),style:k([x.value,M.value,r.value.apiStyle])},[R(e(j),{type:"font",src:r.value.text,weight:e(v),font:e(b),url:e(c),color:e(m),layout:e(q)},{default:A(()=>[_(n.$slots,"default")]),_:3},8,["src","weight","font","url","color","layout"])],36)):e(y)==="text"?(u(),g("div",{key:2,class:"ql-button",ref_key:"buttonRef",ref:p,onMouseenter:t[10]||(t[10]=o=>{S(),s("hover")}),onMouseleave:t[11]||(t[11]=o=>s("reset")),onMousedown:t[12]||(t[12]=o=>s("active")),onMouseup:t[13]||(t[13]=o=>s("mouseUp")),onClick:t[14]||(t[14]=o=>{w()}),style:k([x.value,V.value,r.value.apiStyle])},[R(e(O),{url:e(c),font:e(b),color:e(m),weight:e(v)},{default:A(()=>[I(N(r.value.text),1)]),_:1},8,["url","font","color","weight"])],36)):(u(),g("div",{key:3,class:"ql-button",ref_key:"buttonRef",ref:p,onMouseenter:t[15]||(t[15]=o=>{S(),s("hover")}),onMouseleave:t[16]||(t[16]=o=>s("reset")),onMousedown:t[17]||(t[17]=o=>s("active")),onMouseup:t[18]||(t[18]=o=>s("mouseUp")),onClick:t[19]||(t[19]=o=>{w()}),style:k([x.value,M.value,r.value.apiStyle])},[R(e(O),{url:e(c),font:e(b),color:e(m),weight:e(v)},{default:A(()=>[I(N(r.value.text),1)]),_:1},8,["url","font","color","weight"])],36))}});export{dt as _};