import{b as h,a as C}from"./button.c9c1fe66.js";import{d as v,f as r,a2 as _,e as g,o,y as w,z as B,c as l,r as u,A as a,F as q,n as E,I as K}from"./framework.9358ee34.js";const $={key:1},F=v({name:"ql-button",inheritAttrs:!1,__name:"button",props:h,emits:C,setup(i,{expose:c,emit:d}){const t=i,f=d,n=r();_(),c({ref:n.value});const p=g(()=>["ql-button--"+t.type,"ql-button--"+t.size]),m=e=>{!t.disabled&&!t.loading&&f("click",e)},s=r(!1),y=e=>{switch(e.key){case"Enter":if(!t.keyboard)return;s.value=!1}},k=e=>{switch(e.key){case"Enter":if(!t.keyboard||t.loading){e.preventDefault();return}s.value=!0}},b=()=>{s.value=!1};return(e,z)=>(o(),w(K("button"),{ref_key:"_ref",ref:n,type:e.attrType,class:E(["ql-button",...p.value]),onClick:m,onKeyup:y,onKeydown:k,onBlur:b},{default:B(()=>[e.loading?(o(),l(q,{key:0},[e.$slots.loading?u(e.$slots,"loading",{key:0}):a("",!0)],64)):a("",!0),e.$slots.default?(o(),l("span",$,[u(e.$slots,"default")])):a("",!0)]),_:3},40,["type","class"]))}});export{F as _};
