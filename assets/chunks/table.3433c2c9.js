import{w as U}from"./icon.vue_vue_type_script_setup_true_lang.c0c1a124.js";import V from"./pagination.ddc494f5.js";import{d as Y,f as s,e as v,i as q,v as C,R as T,o as l,c as r,x as m,F as y,K as h,b as i,W as B,D as E,t as N,_ as K}from"./framework.682d4684.js";import"./text.vue_vue_type_script_setup_true_lang.5a1a4ede.js";import"./index.dcc7f37a.js";import"./button.vue_vue_type_script_setup_true_lang.3c2289b4.js";const L=U(V),Q={data:{type:Array,default:()=>[]},columns:{type:Array,default:()=>[]},pageNum:{type:Number,default:10},conHig:{type:String,default:"none"},paging:{type:String,default:"none"},pageShow:{type:String,default:"abridge"}},W={class:"table"},j={class:"header-row"},G=Y({__name:"table",props:Q,setup(R){const _=R,{data:b,columns:w,pageNum:z,conHig:g,pageShow:A}=_,x=s(1),d=s([]);s(!1);const c=+z,n=s(1),u=s(null),f=v(()=>Math.ceil(b.length/c)),H=s(c*30),D=v(()=>{const t=(n.value-1)*c,o=t+c;return b.slice(t,o)}),F=v(()=>g==="none"?{maxHeight:"fit-content",overflowY:"clip"}:{small:{overflowY:"auto",maxHeight:"400px"},medium:{padding:"16px"},large:{padding:"10px 64px"},mini:{padding:"4px"}}[g]||"padding:"+g);q(()=>{d.value=Array.from(document.querySelectorAll(".row"));const t=I();t>0&&(H.value=c*t)}),C(()=>{d.value=[]});const I=()=>d.value.length>0?d.value[0].clientHeight:0,M=()=>{var a,k,P;if(_.conHig==="none"||n.value>=f.value)return;const t=((a=u.value)==null?void 0:a.scrollTop)||0,o=((k=u.value)==null?void 0:k.scrollHeight)||0,e=((P=u.value)==null?void 0:P.clientHeight)||0;t+e>=o&&n.value!==f.value&&(n.value+=1,u.value.scrollTop=0,x.value=n.value)};T("scrollPage",n);const O=(t,o)=>{let e;return function(){const p=this,a=arguments;e||(e=setTimeout(()=>{e=null,t.apply(p,a)},o))}};T("scrollPage",x);const S=O(M,200);return(t,o)=>(l(),r("div",W,[m("div",j,[(l(!0),r(y,null,h(i(w),e=>(l(),r("div",{key:e.key,class:"column"},N(e.label),1))),128))]),m("div",{style:B(F.value),ref_key:"body",ref:u,onScroll:o[0]||(o[0]=(...e)=>i(S)&&i(S)(...e))},[m("div",{class:"body-content",style:B({height:H.value+"px"})},[(l(!0),r(y,null,h(D.value,(e,p)=>(l(),r("div",{key:e.id,class:"row",ref_for:!0,ref:"rowRef_"+p},[(l(!0),r(y,null,h(i(w),a=>(l(),r("div",{key:a.key,class:"column"},N(e[a.key]),1))),128))]))),128))],4)],36),E(i(L),{ref:"pagination",current:n.value,"onUpdate:current":o[1]||(o[1]=e=>n.value=e),total:f.value,layout:i(A)},null,8,["current","total","layout"])]))}});const oe=K(G,[["__scopeId","data-v-9fcc162d"]]);export{oe as default};
