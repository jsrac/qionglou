import{_ as N,f as A,e as l,a2 as j,c as T,x as a,r as U,y as z,G as F,a3 as _,a4 as m,$ as u,n as v,D as w,z as D,T as L,a1 as s,o as g,t as G,u as R,l as S,I as p,a5 as J,a6 as Q,a7 as q,a8 as K,a9 as W,aa as X,ab as Y,ac as Z,ad as $,ae as ee,d as oe,i as te,af as ne,ag as ae,ah as se,ai as ie}from"./chunks/framework.682d4684.js";import{t as P}from"./chunks/theme.57fd1f2b.js";const x=Object.assign({"../QlDocAds.vue":()=>s(()=>import("./chunks/QlDocAds.f5a94d85.js"),["assets/chunks/QlDocAds.f5a94d85.js","assets/chunks/framework.682d4684.js"]),"../../zh-cn/get-started/basic/button.vue":()=>s(()=>import("./chunks/button.c14e3210.js"),["assets/chunks/button.c14e3210.js","assets/chunks/index.ee0efade.js","assets/chunks/text.vue_vue_type_script_setup_true_lang.5a1a4ede.js","assets/chunks/framework.682d4684.js","assets/chunks/button.vue_vue_type_script_setup_true_lang.41c186f8.js","assets/chunks/divide.vue_vue_type_script_setup_true_lang.994f71c1.js","assets/chunks/icon.vue_vue_type_script_setup_true_lang.3eb05da4.js"]),"../../../packages/components/button/src/button.vue":()=>s(()=>import("./chunks/button.83d7d77f.js"),["assets/chunks/button.83d7d77f.js","assets/chunks/button.vue_vue_type_script_setup_true_lang.41c186f8.js","assets/chunks/index.ee0efade.js","assets/chunks/text.vue_vue_type_script_setup_true_lang.5a1a4ede.js","assets/chunks/framework.682d4684.js"]),"../../../packages/components/col/src/col.vue":()=>s(()=>import("./chunks/col.906ca04d.js"),["assets/chunks/col.906ca04d.js","assets/chunks/framework.682d4684.js"]),"../../../packages/components/dialog/src/dialog.vue":()=>s(()=>import("./chunks/dialog.58e2344e.js"),["assets/chunks/dialog.58e2344e.js","assets/chunks/framework.682d4684.js"]),"../../../packages/components/divide/src/divide.vue":()=>s(()=>import("./chunks/divide.c143ce43.js"),["assets/chunks/divide.c143ce43.js","assets/chunks/divide.vue_vue_type_script_setup_true_lang.994f71c1.js","assets/chunks/text.vue_vue_type_script_setup_true_lang.5a1a4ede.js","assets/chunks/framework.682d4684.js","assets/chunks/icon.vue_vue_type_script_setup_true_lang.3eb05da4.js","assets/chunks/index.ee0efade.js"]),"../../../packages/components/drawer/src/drawer.vue":()=>s(()=>import("./chunks/drawer.1b8c3afe.js"),["assets/chunks/drawer.1b8c3afe.js","assets/chunks/framework.682d4684.js"]),"../../../packages/components/fix/src/fix.vue":()=>s(()=>import("./chunks/fix.2d50a4e0.js"),["assets/chunks/fix.2d50a4e0.js","assets/chunks/framework.682d4684.js"]),"../../../packages/components/icon/src/icon.vue":()=>s(()=>import("./chunks/icon.a26c6509.js"),["assets/chunks/icon.a26c6509.js","assets/chunks/icon.vue_vue_type_script_setup_true_lang.3eb05da4.js","assets/chunks/index.ee0efade.js","assets/chunks/text.vue_vue_type_script_setup_true_lang.5a1a4ede.js","assets/chunks/framework.682d4684.js"]),"../../../packages/components/loading/src/loading.vue":()=>s(()=>import("./chunks/loading.0eaa84ab.js"),["assets/chunks/loading.0eaa84ab.js","assets/chunks/framework.682d4684.js"]),"../../../packages/components/main/src/main.vue":()=>s(()=>import("./chunks/main.205667cb.js"),["assets/chunks/main.205667cb.js","assets/chunks/framework.682d4684.js"]),"../../../packages/components/per/src/per.vue":()=>s(()=>import("./chunks/per.6df1ba0c.js"),["assets/chunks/per.6df1ba0c.js","assets/chunks/framework.682d4684.js"]),"../../../packages/components/text/src/text.vue":()=>s(()=>import("./chunks/text.ebbbcba7.js"),["assets/chunks/text.ebbbcba7.js","assets/chunks/text.vue_vue_type_script_setup_true_lang.5a1a4ede.js","assets/chunks/framework.682d4684.js"]),"../../../start/App.vue":()=>s(()=>import("./chunks/App.5615d6fb.js"),[])}),f=new Map,re={props:{codeStr:String,htmlStr:String,description:String,codePath:String,language:{default:"vue",type:String}},setup(t,e){const{codePath:n,codeStr:o,htmlStr:h,description:C}=t,{slots:i}=e,d=A(!1),E=A(!1),V=l(()=>!!(i!=null&&i.default)),k=l(()=>decodeURIComponent(o??"")),O=l(()=>decodeURIComponent(h??"")),H=l(()=>decodeURIComponent(C??"")),M=n&&x[n]?j(x[n]):null;return{isHover:E,codePath:n,hasSlot:V,demoSlot:M,isExpanded:d,decodedCodeStr:k,decodedHtmlStr:O,decodedDesc:H,onCopy:b=>{try{navigator.clipboard.writeText(k.value);let r=b.target;r.tagName&&r.tagName.toUpperCase()!=="DIV"&&(r=r.parentNode);const y=`${r.className}-done`;r.classList.add(y),clearTimeout(f.get(r));const B=setTimeout(()=>{r.classList.remove(y),r.blur(),f.delete(r)},1500);f.set(r,B)}catch(r){console.log("failed to do copy",r)}},onClickControl:()=>{d.value=!d.value,E.value=d.value}}}},ce={class:"__vpdemo-slot"},de=["innerHTML"],le=["innerHTML"],pe={class:"__vpdemo-show"},_e=["innerHTML"],me=a("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},[a("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m7 8l-4 4l4 4m10-8l4 4l-4 4M14 4l-4 16"})],-1),ue=[me],ve=a("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},[a("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"},[a("rect",{width:"12",height:"12",x:"8",y:"8",rx:"2"}),a("path",{d:"M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"})])],-1),ge=[ve];function fe(t,e,n,o,h,C){return g(),T("div",{class:v(["__vpdemo",o.isHover&&"__vpdemo-hover"]),onMouseenter:e[4]||(e[4]=i=>o.isHover=!0),onMouseleave:e[5]||(e[5]=i=>o.isHover=!1)},[a("div",ce,[o.hasSlot?U(t.$slots,"default",{key:0}):o.codePath?(g(),z(F(o.demoSlot),{key:1})):(g(),T("div",{key:2,innerHTML:o.decodedCodeStr},null,8,de)),_(a("div",{class:"__vpdemo-show_desc",innerHTML:o.decodedDesc},null,8,le),[[m,o.decodedDesc]])]),_(a("div",pe,[a("div",{class:"__vpdemo-show-copy",title:"copy",onClick:e[0]||(e[0]=u((...i)=>o.onCopy&&o.onCopy(...i),["stop"]))}),a("div",{class:v(["__vpdemo-show-code","language-"+n.language]),innerHTML:o.decodedHtmlStr},null,10,_e)],512),[[m,o.isExpanded]]),a("div",{class:"__vpdemo-control",onClick:e[1]||(e[1]=(...i)=>o.onClickControl&&o.onClickControl(...i))},[w(L,{name:"arrow-slide"},{default:D(()=>[a("i",{class:v(["__vpdemo-control-icon",o.isExpanded?"__vpdemo-control-icon_up":"__vpdemo-control-icon_down"])},null,2)]),_:1}),w(L,{name:"text-slide"},{default:D(()=>[_(a("span",{class:"__vpdemo-control-tip"},G(o.isExpanded?"Collapse":"Expand"),513),[[m,o.isHover]])]),_:1})]),a("div",{class:"__vpdemo-control-code",title:"code",onClick:e[2]||(e[2]=u((...i)=>o.onClickControl&&o.onClickControl(...i),["stop"]))},ue),a("div",{class:"__vpdemo-control-copy",title:"copy",onClick:e[3]||(e[3]=u((...i)=>o.onCopy&&o.onCopy(...i),["stop"]))},ge)],34)}const he=N(re,[["render",fe]]);const Ce={...P,Layout:{...P.Layout},enhanceApp({app:t}){t.component("demo",he)},setup(){const{lang:t}=R();S(()=>{p&&(document.cookie=`nf_lang=${t.value}; expires=Mon, 1 Jan 2024 00:00:00 UTC; path=/`)})}};function I(t){if(t.extends){const e=I(t.extends);return{...e,...t,async enhanceApp(n){e.enhanceApp&&await e.enhanceApp(n),t.enhanceApp&&await t.enhanceApp(n)}}}return t}const c=I(Ce),Ee=oe({name:"VitePressApp",setup(){const{site:t}=R();return te(()=>{S(()=>{document.documentElement.lang=t.value.lang,document.documentElement.dir=t.value.dir})}),ne(),ae(),se(),c.setup&&c.setup(),()=>ie(c.Layout)}});async function ke(){const t=Ae(),e=ye();e.provide(Q,t);const n=q(t.route);return e.provide(K,n),e.component("Content",W),e.component("ClientOnly",X),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),c.enhanceApp&&await c.enhanceApp({app:e,router:t,siteData:Y}),{app:e,router:t,data:n}}function ye(){return Z(Ee)}function Ae(){let t=p,e;return $(n=>{let o=ee(n);return t&&(e=o),(t||e===o)&&(o=o.replace(/\.js$/,".lean.js")),p&&(t=!1),s(()=>import(o),[])},c.NotFound)}p&&ke().then(({app:t,router:e,data:n})=>{e.go().then(()=>{J(e.route,n.site),t.mount("#app")})});export{ke as createApp};
