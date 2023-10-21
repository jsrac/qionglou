import{w as V}from"./icon.vue_vue_type_script_setup_true_lang.38342eb7.js";import j from"./pagination.35dabe01.js";import{d as q,f as s,e as x,i as Q,v as W,U as A,o as r,c as i,x as y,n as v,b as l,F as w,M as b,Y as f,D as Y,t as M,_ as G}from"./framework.4772a8a4.js";import"./text.vue_vue_type_script_setup_true_lang.d47241f2.js";import"./index.935c21a7.js";import"./button.vue_vue_type_script_setup_true_lang.69b6d634.js";const J=V(j),K={data:{type:Array,default:()=>[]},columns:{type:Array,default:()=>[]},pageNum:{type:Number,default:10},conHig:{type:String,default:"none"},paging:{type:String,default:"none"},pageShow:{type:String,default:"abridge"},site:{type:String,default:"center"}},X={class:"table"},Z=`
  .table {
    margin: auto;
  }

  .header-row {
    display: flex;
    background-color: #ffffff;
    font-weight: bold;
    height: 57px;
    box-shadow: 0px 7px 14px 0px rgb(230 230 230 / 25%);
    width: max-content;
    align-items: center;
  }

  .header-row .header-title {
  }
  .header-row .column {
    display: flex;
    background-color: #ffffff;
    font-weight: bold;
    height: 57px;
    align-items: center;
  }

  .column {
  }
  .body-content {
   }
  .header-title, .column {
  }
  .row {
    display: flex;
    height: 58px;
    width: max-content;
    align-items: center;
  }

  button {
    margin: 0 5px;
  }

  .fixed-column {
    position: sticky;
    left: 0;
    display: flex;
    right: 0px;
    height: inherit;
    background-color: #ffffff;
    align-items: center;
    justify-content: center;
    box-shadow: 3px 7px 14px -1px rgb(233 231 231);
  }
  .fixed-column-true {
    position: sticky;
    z-index: 1;
    top: 0px
  }
`,$=q({__name:"table",props:K,setup(R){const _=R,{data:H,columns:g,pageNum:C,conHig:h,pageShow:D,site:F}=_,k=s(1),d=s([]);s(!1);const c=+C,a=s(1),u=s(null),m=x(()=>Math.ceil(H.length/c)),S=s(c*30),U=x(()=>{const t=(a.value-1)*c,o=t+c;return H.slice(t,o)}),E=x(()=>h==="none"?{maxHeight:"fit-content",overflow:"auto"}:{small:{overflow:"auto",maxHeight:"400px"},medium:{padding:"16px"},large:{padding:"10px 64px"},mini:{padding:"4px"}}[h]||"padding:"+h);Q(()=>{d.value=Array.from(document.querySelectorAll(".row"));const t=I();t>0&&(S.value=c*t)}),W(()=>{d.value=[]});const P=t=>typeof t.width=="string"?t.width:typeof t.width=="number"?t.width+"px":"110px",I=()=>d.value.length>0?d.value[0].clientHeight:0,L=()=>{var n,B,N;if(_.conHig==="none"||a.value>=m.value)return;const t=((n=u.value)==null?void 0:n.scrollTop)||0,o=((B=u.value)==null?void 0:B.scrollHeight)||0,e=((N=u.value)==null?void 0:N.clientHeight)||0;t+e>=o&&a.value!==m.value&&(a.value+=1,u.value.scrollTop=0,k.value=a.value)};A("scrollPage",a);const T=document.createElement("style");T.innerHTML=Z,document.head.appendChild(T);const O=(t,o)=>{let e;return function(){const p=this,n=arguments;e||(e=setTimeout(()=>{e=null,t.apply(p,n)},o))}};A("scrollPage",k);const z=O(L,200);return(t,o)=>(r(),i("div",X,[y("div",{style:f(E.value),ref_key:"body",ref:u,onScroll:o[0]||(o[0]=(...e)=>l(z)&&l(z)(...e))},[y("div",{class:v(["header-row",{"fixed-column-true":l(g).some(e=>e.titleFix)}])},[(r(!0),i(w,null,b(l(g),e=>(r(),i("div",{key:e.key,class:v(["header-title",{"fixed-column":e.fixed}]),style:f({width:P(e)})},M(e.label),7))),128))],2),y("div",{class:"body-content",style:f({height:S.value+"px"})},[(r(!0),i(w,null,b(U.value,(e,p)=>(r(),i("div",{key:e.id,class:"row",ref_for:!0,ref:"rowRef_"+p},[(r(!0),i(w,null,b(l(g),n=>(r(),i("div",{key:n.key,class:v(["column",{"fixed-column":n.fixed}]),style:f({width:P(n)})},M(e[n.key]),7))),128))]))),128))],4)],36),Y(l(J),{ref:"pagination",current:a.value,"onUpdate:current":o[1]||(o[1]=e=>a.value=e),total:m.value,layout:l(D),site:l(F)},null,8,["current","total","layout","site"])]))}});const re=G($,[["__scopeId","data-v-47489acf"]]);export{re as default};
