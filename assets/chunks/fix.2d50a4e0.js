import{d as l,e as r,o as i,c as p,r as c,n as d,W as u,b as f}from"./framework.682d4684.js";const m={position:{type:String,default:"top",validator:e=>["top","bottom","left","right"].includes(e)},zIndex:{type:Number,default:100}},_=l({name:"QlFix",__name:"fix",props:m,setup(e){const t=e,{position:o,zIndex:s}=t,n=r(()=>[`ql-fix-${o}`]);return(a,x)=>(i(),p("div",{class:d(`${n.value} ql-fix`),style:u({zIndex:f(s)})},[c(a.$slots,"default")],6))}});export{_ as default};
