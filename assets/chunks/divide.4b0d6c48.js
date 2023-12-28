import{_ as $}from"./text.vue_vue_type_script_setup_true_lang.0623807a.js";import{_ as q}from"./icon.vue_vue_type_script_setup_true_lang.67b69bbb.js";import{d as C,e as l,b as t,o as n,c as a,D as f,z as m,a as h,t as y,Y as N,x as L,A as V}from"./framework.9358ee34.js";import"./index.6fbc9339.js";import"./install.89622e44.js";const z={weight:{type:String,default:"medium",validator:e=>["demiLight","regular","medium","bold"].includes(e.toString())||typeof e=="number"&&e>=0},width:{type:String,default:"center"},layout:{type:String,default:"right"},url:{type:String,default:""},font:{type:String,default:""},wide:{type:[String,Number],default:"medium",validator:e=>typeof e=="string"?["small","medium","large"].includes(e):typeof e=="number"?e>=0:!1},text:{type:String,default:"divide"},src:{type:String,default:""},alt:{type:String,default:""},type:{type:String,default:"icon"},color:{type:String,default:"default"},theme:{type:String,default:"default"}},B={key:0,class:"ql-divide aid-back text-line-center"},D={key:1,class:"ql-divide aid-back text-line-center"},Y={key:2},E={class:"ql-divide aid-back text-line-center"},F=C({name:"QlDivide",__name:"divide",props:z,setup(e){const g=e,{text:s,theme:r,color:b,width:S,weight:c,type:i,wide:w,src:x,layout:_,url:R,font:T}=g,v=l(()=>({default:{paddingRight:"15px",paddingLeft:"15px"},dotted:{paddingRight:"15px",paddingLeft:"15px"}})[r]||{}),p=l(()=>({center:{left:"50%",right:"50%"},left:{left:"95%",right:"5%"},right:{left:"5%",right:"95%"}})[S]||{}),o=l(()=>({default:{font:"#9c9c9c",border:"#e3e3e3"}})[b]||{}),k=`
  .ql-divide {
    display: flex;
    align-items: center;
    margin: 16px 0;
    font-weight: 500;
    font-size: 16px;
    white-space: nowrap;
    text-align: center;
    border-block-start: 0 ${o.value.border};
  }

  :where(.aid-back).ql-divide.text-line-center::before {
    position: relative;
    width: ${p.value.right};
    border-block-start: 1px solid transparent;
    border-block-start-color: inherit;
    border-block-end: 0;
    transform: translateY(50%);
    content: '';
    border-style: ${r==="dotted"?"dashed":"double"};
  }
  :where(.aid-back).ql-divide.text-line-center::after {
    position: relative;
    width: ${p.value.left};
    border-block-start: 1px solid transparent;
    border-block-start-color: inherit;
    border-block-end: 0;
    transform: translateY(50%);
    content: '';
    border-style: ${r==="dotted"?"dashed":"double"};
  }
`,u=document.createElement("style");return u.innerHTML=k,document.head.appendChild(u),(d,A)=>t(i)==="text"?(n(),a("div",B,[f($,{weight:t(c),color:o.value.font,style:N([v.value])},{default:m(()=>[h(y(t(s)),1)]),_:1},8,["weight","color","style"])])):t(i)==="line"?(n(),a("div",D)):t(i)==="icon"?(n(),a("div",Y,[L("div",E,[f(q,{src:t(x),wide:t(w),layout:t(_),color:o.value.font,weight:t(c)},{default:m(()=>[h(y(t(s)),1)]),_:1},8,["src","wide","layout","color","weight"])])])):V("",!0)}});export{F as default};
