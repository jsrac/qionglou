import{Q as t}from"./index.81accf4f.js";import{d as i,o as l,c as p,D as a,b as c,_ as u}from"./framework.20dc2a15.js";import"./icon.vue_vue_type_script_setup_true_lang.4d742590.js";import"./text.vue_vue_type_script_setup_true_lang.01441831.js";import"./button.vue_vue_type_script_setup_true_lang.2fcb53c8.js";const d={class:"demo"},m=i({__name:"button-expand",setup(_){const e={hover:{backgroundColor:"#0078ff0a",opacity:"0.8",transition:"color 0.54s, opacity 0.25s"},reset:{backgroundColor:"#0078ff00",opacity:"1",transition:"color 0.54s, opacity 0.25s"},active:{transition:"color 0.25s, opacity 0.25s",opacity:"0.6"},mouseUp:{opacity:"1",transition:"color 0.54s, opacity 0.25s"}},n={danger:{fontWeight:"500",color:"rgb(255,255,255)",backgroundColor:"#ff0a0a",borderRadius:"4px !important"},layout:{marginLeft:"8px !important",background:"red"}},o=()=>{console.log("Button Clicked!")},s={sound:{url:"/media/y1818.mp3"},clickSound:{url:"/media/y2018.mp3"}},r={sound:{url:"/media/y2181.mp3"},clickSound:{url:"/media/y2193.mp3"}};return(y,f)=>(l(),p("div",d,[a(c(t),{class:"button",onClick:o,size:"large",text:"Default",react:e,music:r}),a(c(t),{class:"button",onClick:o,text:"Danger",state:n.danger,music:s},null,8,["state"])]))}});const v=u(m,[["__scopeId","data-v-b6993cac"]]);export{v as default};