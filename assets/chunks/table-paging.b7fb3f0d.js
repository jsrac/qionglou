import{Q as r}from"./index.a029529e.js";import{d,o as u,c as s,D as h,b as a}from"./framework.9358ee34.js";import"./install.89622e44.js";import"./table.31e572f7.js";import"./pagination.320aee85.js";import"./index.3998ad45.js";import"./button.vue_vue_type_script_setup_true_lang.253731fb.js";import"./button.c9c1fe66.js";import"./index.6fbc9339.js";import"./text.vue_vue_type_script_setup_true_lang.0623807a.js";import"./tableColumn.vue_vue_type_script_setup_true_lang.55bc76e6.js";const b={class:"demo"},N=d({__name:"table-paging",setup(k){const n=[{key:"id",label:"Column 1",width:130},{key:"name",label:"Column 2",width:110},{key:"name",label:"Column 3",width:110},{key:"name",label:"Column 4",width:110},{key:"name",label:"Column 5",width:110},{key:"name",label:"Column 6",width:110},{key:"name",label:"Column 7",width:110},{key:"name",label:"Column 8",width:110},{key:"name",label:"Column 8-2",width:110},{key:"name",label:"Column 8-3",width:110},{key:"name",label:"Column 8-4",width:110},{key:"name",label:"Column 8-5",width:110},{key:"name",label:"Column 8-6",width:110},{key:"name",label:"Column 8-7",width:110},{key:"name",label:"Column 9-2",width:110},{key:"name",label:"Column 9-3",width:110},{key:"name",label:"Column 9-4",width:110},{key:"name",label:"Column 9-5",width:110},{key:"name",label:"Column 9-6",width:110},{key:"name",label:"Column 9-7",width:110,fixed:!0,titleFix:!0},{key:"more",label:"Column 9",fixed:!0,width:110,titleFix:!0}],o=l=>{const t=[];for(let e=1;e<=l;e++)t.push({id:e,name:`Person ${e}`,more:"delete",age:Math.floor(Math.random()*100)+1});return t},m={first:"Home",prev:"Prev",next:"Next",last:"Last"},i=o(60);return(l,t)=>(u(),s("div",b,[h(a(r),{columns:n,data:a(i),pageNum:"10",conHig:"small",font:"Brithney",url:"https://fonts.cdnfonts.com/css/brithney",weight:"bold",arrow:m},null,8,["data"])]))}});export{N as default};
