import{d as c,e,o as h,c as d,r as m,n as p,W as y}from"./framework.682d4684.js";const w=c({name:"QlMain",__name:"main",props:{layout:{type:[Object,Function,Array]},color:{type:[Object,Function,Array]},site:{type:[Object,Function,Array]},wide:{type:[Object,Function,Array]},high:{type:[Object,Function,Array]}},setup(n){const t=n,o=e(()=>`ql-main-${t.layout}`),r=e(()=>`ql-main-site-${t.site}`),i=e(()=>t.wide),s=e(()=>t.high),u=e(()=>({auto:t.high==="auto","ql-main-height":t.high!=="auto"})),l=e(()=>({auto:t.wide==="auto","ql-main-width":t.wide!=="auto"}));return(a,g)=>(h(),d("div",{class:p(["ql-main",[o.value,u.value,l.value,r.value]]),style:y({width:i.value,height:s.value,background:a.color})},[m(a.$slots,"default")],6))}});export{w as default};