import{u as d}from"./asyncData.1ec0465c.js";import{e as l,M as f,N as p,B as v,O as m,P as g,J as h,Q as _,L as s}from"./entry.2fa3e2d2.js";import{_ as y}from"./nuxt-link.203ebf77.js";const L=l({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(u){const{query:t}=f(u),n=p(()=>{var a;return typeof((a=t.value)==null?void 0:a.params)=="function"?t.value.params():t.value});if(!n.value&&v("dd-navigation").value){const{navigation:a}=m();return{navigation:a}}const{data:o}=await d(`content-navigation-${g(n.value)}`,()=>_(n.value));return{navigation:o}},render(u){const t=h(),{navigation:n}=u,o=e=>s(y,{to:e._path},()=>e.title),a=(e,i)=>s("ul",i?{"data-level":i}:null,e.map(r=>r.children?s("li",null,[o(r),a(r.children,i+1)]):s("li",null,o(r)))),c=e=>a(e,0);return t!=null&&t.default?t.default({navigation:n,...this.$attrs}):c(n)}});export{L as default};
