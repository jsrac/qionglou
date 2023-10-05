import{_ as $}from"./text.vue_vue_type_script_setup_true_lang.5a1a4ede.js";import{_ as q}from"./icon.vue_vue_type_script_setup_true_lang.c0c1a124.js";import{d as C,e as l,b as t,o as n,c as a,D as p,z as h,a as m,t as y,W as N,x as L,A as V}from"./framework.682d4684.js";const z={weight:{type:String,default:"medium",validator:e=>["demiLight","regular","medium","bold"].includes(e.toString())||typeof e=="number"&&e>=0},width:{type:String,default:"center"},layout:{type:String,default:"right"},url:{type:String,default:""},font:{type:String,default:""},wide:{type:[String,Number],default:"medium",validator:e=>typeof e=="string"?["small","medium","large"].includes(e):typeof e=="number"?e>=0:!1},text:{type:String,default:"divide"},src:{type:String,default:""},alt:{type:String,default:""},type:{type:String,default:"icon"},color:{type:String,default:"default"},theme:{type:String,default:"default"}},B={key:0,class:"ql-divide aid-back text-line-center"},D={key:1,class:"ql-divide aid-back text-line-center"},E={key:2},R={class:"ql-divide aid-back text-line-center"},Q=C({name:"QlDivide",__name:"divide",props:z,setup(e){const g=e,{text:s,theme:r,color:b,width:S,weight:c,type:i,wide:w,src:x,layout:_,url:T,font:Y}=g,v=l(()=>({default:{paddingRight:"15px",paddingLeft:"15px"},dotted:{paddingRight:"15px",paddingLeft:"15px"}})[r]||{}),u=l(()=>({center:{left:"50%",right:"50%"},left:{left:"95%",right:"5%"},right:{left:"5%",right:"95%"}})[S]||{}),o=l(()=>({default:{font:"#9c9c9c",border:"#e3e3e3"}})[b]||{}),k=`
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
    width: ${u.value.right};
    border-block-start: 1px solid transparent;
    border-block-start-color: inherit;
    border-block-end: 0;
    transform: translateY(50%);
    content: '';
    border-style: ${r==="dotted"?"dashed":"double"};
  }
  :where(.aid-back).ql-divide.text-line-center::after {
    position: relative;
    width: ${u.value.left};
    border-block-start: 1px solid transparent;
    border-block-start-color: inherit;
    border-block-end: 0;
    transform: translateY(50%);
    content: '';
    border-style: ${r==="dotted"?"dashed":"double"};
  }
`,f=document.createElement("style");return f.innerHTML=k,document.head.appendChild(f),(d,A)=>t(i)==="text"?(n(),a("div",B,[p($,{weight:t(c),color:o.value.font,style:N([v.value])},{default:h(()=>[m(y(t(s)),1)]),_:1},8,["weight","color","style"])])):t(i)==="line"?(n(),a("div",D)):t(i)==="icon"?(n(),a("div",E,[L("div",R,[p(q,{src:t(x),wide:t(w),layout:t(_),color:o.value.font,weight:t(c)},{default:h(()=>[m(y(t(s)),1)]),_:1},8,["src","wide","layout","color","weight"])])])):V("",!0)}});export{Q as default};
