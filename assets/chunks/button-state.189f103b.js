import{Q as o}from"./index.dcc7f37a.js";import{d as c,o as r,c as i,D as a,b as e,_ as l}from"./framework.682d4684.js";import"./icon.vue_vue_type_script_setup_true_lang.c0c1a124.js";import"./text.vue_vue_type_script_setup_true_lang.5a1a4ede.js";import"./button.vue_vue_type_script_setup_true_lang.3c2289b4.js";const p={class:"demo"},u=c({__name:"button-state",setup(b){const s={hover:{backgroundColor:"#0078ff0a",opacity:"0.8",transition:"color 0.54s, opacity 0.25s"},reset:{backgroundColor:"#0078ff00",opacity:"1",transition:"color 0.54s, opacity 0.25s"},active:{boxShadow:"5px 5px 14px #bababb54",transition:"color 0.25s, opacity 0.25s",opacity:"0.6"},mouseUp:{transition:"color 0.54s, opacity 0.25s",boxShadow:""}},n={danger:{fontWeight:"500",color:"rgb(255,255,255)",backgroundColor:"#ff0a0a",borderRadius:"4px !important"},layout:{marginLeft:"8px !important",background:"red"}},t=()=>{console.log("Button Clicked!")};return(d,_)=>(r(),i("div",p,[a(e(o),{class:"button",onClick:t,size:"large",text:"Default",react:s}),a(e(o),{class:"button",onClick:t,text:"Primary",state:"primary"}),a(e(o),{class:"button",onClick:t,text:"Success",state:"success"}),a(e(o),{class:"button",onClick:t,text:"Warning",state:"warning"}),a(e(o),{class:"button",onClick:t,text:"Danger",state:n.danger},null,8,["state"])]))}});const k=l(u,[["__scopeId","data-v-ebe3b4c9"]]);export{k as default};
