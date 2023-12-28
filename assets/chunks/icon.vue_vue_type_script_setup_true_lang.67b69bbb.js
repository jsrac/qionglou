import{Q as y}from"./index.6fbc9339.js";import{d as b,e as r,o as s,c as a,Y as l,D as g,z as h,a as S,t as w,n as k,b as v,x as d,r as N}from"./framework.9358ee34.js";const D={src:{type:String,required:!0},layout:{type:String,default:"right"},type:{type:String,default:"img"},alt:{type:String,default:""},weight:{type:String,default:"regular",validator:e=>["demiLight","regular","medium","bold"].includes(e)},size:{type:[String,Number],default:"medium",validator:e=>typeof e=="string"?["small","medium","large"].includes(e):typeof e=="number"?e>=0:!1},ani:{type:String,default:"none",validator:e=>["none","rotate","linear"].includes(e)},wide:{type:[String,Number],default:"medium",validator:e=>typeof e=="string"?["small","medium","large"].includes(e):typeof e=="number"?e>=0:!1},high:{type:[String,Number],default:"none",validator:e=>typeof e=="string"?["none","small","medium","large"].includes(e):typeof e=="number"?e>=0:!1},font:{type:String,default:""},url:{type:String,default:""},color:{type:String,default:"black"}},_={class:"icon-container"},B=["src","alt"],C={key:2},O=d("p",null,"Icon: Error Type",-1),T=[O],Y=b({name:"QlIcon",__name:"icon",props:D,setup(e){const{src:q,type:x,alt:Q,weight:V,size:$,ani:f,wide:n,high:i,font:E,url:I,color:L,layout:o}=e,p=r(()=>typeof n=="number"?`${n}px`:{small:"14px",medium:"16px",large:"18px"}[n]||n),u=r(()=>({down:{flexDirection:"column"},upper:{flexDirection:"column-reverse"},left:{flexDirection:"row-reverse"}})[o]||{});r(()=>({down:{marginTop:"0.4vw"},upper:{marginBottom:"0.4vw"},left:{marginLeft:"0.4vw"},right:{marginRight:"0.4vw"}})[o]||{});const m=r(()=>typeof o=="object"?o:{}),c=r(()=>typeof i=="number"?`${i}px`:{small:"14px",medium:"16px",large:"18px"}[i]||i),z=r(()=>f==="rotate"?"rotate-animation":f==="linear"?"linear-animation":"");return(t,j)=>(s(),a("div",_,[t.type==="font"?(s(),a("div",{key:0,class:"ql-icon_fon 111t",style:l([{display:"flex"},[u.value]])},[g(v(y),{style:l({width:p.value,height:c.value}),class:k([z.value]),url:t.url,font:t.font,color:t.color},{default:h(()=>[S(w(t.src),1)]),_:1},8,["style","class","url","font","color"]),d("div",{style:l([m.value])},[N(t.$slots,"default")],4)],4)):t.type==="img"?(s(),a("div",{key:1,class:"ql-icon",style:l([u.value])},[d("img",{src:t.src,alt:t.alt,style:l({width:p.value,height:c.value})},null,12,B),g(v(y),{style:l([m.value,u.value]),weight:t.weight,size:t.size,color:t.color,url:t.url,font:t.font},{default:h(()=>[S(w(t.alt),1)]),_:1},8,["style","weight","size","color","url","font"])],4)):(s(),a("div",C,T))]))}});export{Y as _};
