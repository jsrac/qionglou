import{Q as r}from"./index.a04aaf42.js";import{d as m,o as c,c as _,D as l,b as e,_ as d}from"./framework.515a0def.js";import"./icon.vue_vue_type_script_setup_true_lang.e5a64090.js";import"./text.vue_vue_type_script_setup_true_lang.6aa91f11.js";import"./table.85aa8022.js";import"./pagination.75872ea8.js";import"./index.8316c9d0.js";import"./button.vue_vue_type_script_setup_true_lang.70e33a10.js";const p={class:"demo"},i=m({__name:"table-base",setup(u){const o=[{key:"name",label:"Name"},{key:"age",label:"Age"}],n=(s=>{const t=[];for(let a=1;a<=s;a++)t.push({id:a,name:`Person ${a}`,age:Math.floor(Math.random()*100)+1});return t})(60);return(s,t)=>(c(),_("div",p,[l(e(r),{columns:o,data:e(n),pageNum:"10",conHig:"none"},null,8,["data"]),l(e(r),{columns:o,data:e(n),pageNum:"10",conHig:"small"},null,8,["data"])]))}});const N=d(i,[["__scopeId","data-v-231481f6"]]);export{N as default};