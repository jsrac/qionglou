import{_ as S,f as m,w as P,l as j,o,c as u,x as p,b as l,F as k,A as f,K as C,t as y,h as A}from"./framework.682d4684.js";const D={current:{type:Number},total:{type:Number},layout:{type:String}};const E={class:"pagination"},F=["disabled"],I={key:0},M={key:1},V=["onClick"],K={key:2},L={key:3},O=["onClick"],Q=["disabled"],T=Object.assign({name:"QlPagination"},{__name:"pagination",props:D,setup(x){const w=x,{current:r,total:s,layout:N,showSeparator:q}=w,n=m(r),g=A(),e=m([]);P(()=>r,a=>{n.value=a});const d=()=>{const a=s,c=r,t=2;let v=Math.max(1,c-t),b=Math.min(a,c+t);const i=[];for(let h=v;h<=b;h++)i.push(h);return v>1&&(i.unshift("..."),i.unshift(1)),b<a&&(i.push("..."),i.push(a)),i};j(()=>{e.value=d()});const _=a=>{a>=1&&a<=s&&(n.value=a,g.emit("update:current",a))},$=()=>{n.value>1&&(n.value--,e.value.includes(n.value)||(e.value=d()),g.emit("update:current",n.value))},B=()=>{n.value<s&&(n.value++,e.value.includes(n.value)||(e.value=d()),g.emit("update:current",n.value))};return P([r,s],()=>{e.value=d()}),(a,c)=>(o(),u("div",E,[p("button",{onClick:c[0]||(c[0]=t=>_(1))},"首页"),p("button",{onClick:$,disabled:n.value==="1"},"上一页",8,F),l(N)==="abridge"?(o(),u(k,{key:0},[e.value[0]!==1?(o(),u("button",I,"1")):f("",!0),e.value[0]>2?(o(),u("span",M,"...")):f("",!0),(o(!0),u(k,null,C(e.value,t=>(o(),u("button",{key:t,onClick:v=>_(t)},y(t),9,V))),128)),e.value[e.value.length-1]<l(s)-1?(o(),u("span",K,"...")):f("",!0),e.value[e.value.length-1]!==l(s)?(o(),u("button",L,y(l(s)),1)):f("",!0)],64)):(o(!0),u(k,{key:1},C(l(s),t=>(o(),u("button",{key:t,onClick:v=>_(t)},y(t),9,O))),128)),p("button",{onClick:B,disabled:l(r)===l(s)},"下一页",8,Q),p("button",{onClick:c[1]||(c[1]=t=>_(l(s)))},"尾页")]))}}),G=S(T,[["__scopeId","data-v-2ea81c1c"]]);export{G as default};
