import{w as J,Q as F}from"./icon.vue_vue_type_script_setup_true_lang.4d742590.js";import K from"./pagination.0944b698.js";import{d as X,f as c,e as v,i as Z,v as $,U as M,o as r,c as s,x as m,n as w,b as e,F as x,M as _,Y as g,D as b,z as Q,a as U,t as V,_ as tt}from"./framework.20dc2a15.js";import"./text.vue_vue_type_script_setup_true_lang.01441831.js";import"./index.81accf4f.js";import"./button.vue_vue_type_script_setup_true_lang.2fcb53c8.js";const et=J(K),ot={data:{type:Array,default:()=>[]},columns:{type:Array,default:()=>[]},pageNum:{type:Number,default:10},conHig:{type:String,default:"none"},paging:{type:String,default:"none"},pageShow:{type:String,default:"abridge"},site:{type:String,default:"center"},weight:{type:String,default:"500"},color:{type:String,default:""},font:{type:String,default:""},url:{type:String,default:""},background:{type:String,default:"rgba(255,255,255,0)"}},lt={class:"table"},at=X({__name:"table",props:ot,setup(I){const S=I,{data:H,columns:f,pageNum:O,conHig:y,pageShow:q,site:E,url:k,font:P,color:T,weight:z}=S,N=c(1),d=c([]),i=+O,n=c(1),u=c(null),h=v(()=>Math.ceil(H.length/i)),B=c(i*30),L=v(()=>{const o=(n.value-1)*i,l=o+i;return H.slice(o,l)}),W=v(()=>y==="none"?{maxHeight:"fit-content",overflow:"auto"}:{small:{overflow:"auto",maxHeight:"400px"},medium:{padding:"16px"},large:{padding:"10px 64px"},mini:{padding:"4px"}}[y]||"padding:"+y);Z(()=>{d.value=Array.from(document.querySelectorAll(".row"));const o=Y();o>0&&(B.value=i*o)}),$(()=>{d.value=[]});const A=o=>typeof o.width=="string"?o.width:typeof o.width=="number"?o.width+"px":"110px",Y=()=>d.value.length>0?d.value[0].clientHeight:0,j=()=>{var a,C,D;if(S.conHig==="none"||n.value>=h.value)return;const o=((a=u.value)==null?void 0:a.scrollTop)||0,l=((C=u.value)==null?void 0:C.scrollHeight)||0,t=((D=u.value)==null?void 0:D.clientHeight)||0;o+t>=l&&n.value!==h.value&&(n.value+=1,u.value.scrollTop=0,N.value=n.value)};M("scrollPage",n);const G=(o,l)=>{let t;return function(){const p=this,a=arguments;t||(t=setTimeout(()=>{t=null,o.apply(p,a)},l))}};M("scrollPage",N);const R=G(j,200);return(o,l)=>(r(),s("div",lt,[m("div",{style:g(W.value),ref_key:"body",ref:u,onScroll:l[0]||(l[0]=(...t)=>e(R)&&e(R)(...t))},[m("div",{class:w(["header-row",{"fixed-column-true":e(f).some(t=>t.titleFix)}])},[(r(!0),s(x,null,_(e(f),t=>(r(),s("div",{key:t.key,class:w(["header-title",{"fixed-column":t.fixed}]),style:g({width:A(t)})},[b(e(F),{url:e(k),font:e(P),color:e(T),weight:e(z)},{default:Q(()=>[U(V(t.label),1)]),_:2},1032,["url","font","color","weight"])],6))),128))],2),m("div",{class:"body-content",style:g({height:B.value+"px"})},[(r(!0),s(x,null,_(L.value,(t,p)=>(r(),s("div",{key:t.id,class:"row",ref_for:!0,ref:"rowRef_"+p},[(r(!0),s(x,null,_(e(f),a=>(r(),s("div",{key:a.key,class:w(["column",{"fixed-column":a.fixed}]),style:g({width:A(a)})},[b(e(F),{url:e(k),font:e(P),color:e(T),weight:e(z)},{default:Q(()=>[U(V(t[a.key]),1)]),_:2},1032,["url","font","color","weight"])],6))),128))]))),128))],4)],36),b(e(et),{ref:"pagination",current:n.value,"onUpdate:current":l[1]||(l[1]=t=>n.value=t),total:h.value,layout:e(q),site:e(E)},null,8,["current","total","layout","site"])]))}});const dt=tt(at,[["__scopeId","data-v-81b8115d"]]);export{dt as default};
