import{w as O}from"./icon.vue_vue_type_script_setup_true_lang.e5a64090.js";import V from"./pagination.66fdbfb7.js";import{d as q,f as s,e as x,i as Q,v as W,U as N,o as l,c as r,x as m,F as y,M as v,b as i,Y as f,D as Y,n as A,t as M,_ as G}from"./framework.515a0def.js";import"./text.vue_vue_type_script_setup_true_lang.6aa91f11.js";import"./index.38583f13.js";import"./button.vue_vue_type_script_setup_true_lang.e985f7d1.js";const J=O(V),K={data:{type:Array,default:()=>[]},columns:{type:Array,default:()=>[]},pageNum:{type:Number,default:10},conHig:{type:String,default:"none"},paging:{type:String,default:"none"},pageShow:{type:String,default:"abridge"},site:{type:String,default:"center"}},X={class:"table"},Z={class:"header-row"},$=`
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
    box-shadow: 0px 7px 14px 0px rgb(230 230 230 / 25%);
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
    box-shadow: 3px 7px 14px -1px rgb(201 201 201);
  }
  .fixed-column-true {
    position: sticky;
    left: 0;
    display: flex;
    right: 0px;
    height: inherit;
    background-color: #ffffff;
    align-items: center;
    justify-content: center;
    z-index: -10;
    box-shadow: 3px 1px 18px -2px rgb(201 201 201);
  }
`,ee=q({__name:"table",props:K,setup(R){const b=R,{data:w,columns:_,pageNum:C,conHig:g,pageShow:D,site:U}=b,k=s(1),u=s([]);s(!1);const c=+C,a=s(1),d=s(null),h=x(()=>Math.ceil(w.length/c)),H=s(c*30),j=x(()=>{const e=(a.value-1)*c,o=e+c;return w.slice(e,o)}),E=x(()=>g==="none"?{maxHeight:"fit-content",overflow:"auto"}:{small:{overflow:"auto",maxHeight:"400px"},medium:{padding:"16px"},large:{padding:"10px 64px"},mini:{padding:"4px"}}[g]||"padding:"+g);Q(()=>{u.value=Array.from(document.querySelectorAll(".row"));const e=F();e>0&&(H.value=c*e)}),W(()=>{u.value=[]});const S=e=>typeof e.width=="string"?e.width:typeof e.width=="number"?e.width+"px":"110px",F=()=>u.value.length>0?u.value[0].clientHeight:0,I=()=>{var n,z,B;if(b.conHig==="none"||a.value>=h.value)return;const e=((n=d.value)==null?void 0:n.scrollTop)||0,o=((z=d.value)==null?void 0:z.scrollHeight)||0,t=((B=d.value)==null?void 0:B.clientHeight)||0;e+t>=o&&a.value!==h.value&&(a.value+=1,d.value.scrollTop=0,k.value=a.value)};N("scrollPage",a);const P=document.createElement("style");P.innerHTML=$,document.head.appendChild(P);const L=(e,o)=>{let t;return function(){const p=this,n=arguments;t||(t=setTimeout(()=>{t=null,e.apply(p,n)},o))}};N("scrollPage",k);const T=L(I,200);return(e,o)=>(l(),r("div",X,[m("div",{style:f(E.value),ref_key:"body",ref:d,onScroll:o[0]||(o[0]=(...t)=>i(T)&&i(T)(...t))},[m("div",Z,[(l(!0),r(y,null,v(i(_),t=>(l(),r("div",{key:t.key,class:A(["header-title",{"fixed-column":t.fixed}]),style:f({width:S(t)})},M(t.label),7))),128))]),m("div",{class:"body-content",style:f({height:H.value+"px"})},[(l(!0),r(y,null,v(j.value,(t,p)=>(l(),r("div",{key:t.id,class:"row",ref_for:!0,ref:"rowRef_"+p},[(l(!0),r(y,null,v(i(_),n=>(l(),r("div",{key:n.key,class:A(["column",{"fixed-column":n.fixed}]),style:f({width:S(n)})},M(t[n.key]),7))),128))]))),128))],4)],36),Y(i(J),{ref:"pagination",current:a.value,"onUpdate:current":o[1]||(o[1]=t=>a.value=t),total:h.value,layout:i(D),site:i(U)},null,8,["current","total","layout","site"])]))}});const ie=G(ee,[["__scopeId","data-v-52e9a7d7"]]);export{ie as default};
