import{ar as c,b as y,as as E,h as o,al as g,j as h,A as p,l,i as f,m as _,O as m,at as C,au as A,e as w}from"./utils.DahspeCk.js";let r;function I(){r=void 0}function M(e){let t=null,n=o;var d;if(o){for(t=f,r===void 0&&(r=_(document.head));r!==null&&(r.nodeType!==8||r.data!==g);)r=h(r);r===null?p(!1):r=l(h(r))}o||(d=document.head.appendChild(c()));try{y(()=>e(d),E)}finally{n&&(p(!0),r=f,l(t))}}function b(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function u(e,t){var n=m;n.nodes_start===null&&(n.nodes_start=e,n.nodes_end=t)}function x(e,t){var n=(t&C)!==0,d=(t&A)!==0,s,i=!e.startsWith("<!>");return()=>{if(o)return u(f,null),f;s===void 0&&(s=b(i?e:"<!>"+e),n||(s=_(s)));var a=d?document.importNode(s,!0):s.cloneNode(!0);if(n){var v=_(a),T=a.lastChild;u(v,T)}else u(a,a);return a}}function O(e,t){var n=x(e,t);return()=>N(n())}function N(e){if(o)return e;const t=e.nodeType===11,n=e.tagName==="SCRIPT"?[e]:e.querySelectorAll("script"),d=m;for(const i of n){const a=document.createElement("script");for(var s of i.attributes)a.setAttribute(s.name,s.value);a.textContent=i.textContent,(t?e.firstChild===i:e===i)&&(d.nodes_start=a),(t?e.lastChild===i:e===i)&&(d.nodes_end=a),i.replaceWith(a)}return e}function P(e=""){if(!o){var t=c(e+"");return u(t,t),t}var n=f;return n.nodeType!==3&&(n.before(n=c()),l(n)),u(n,n),n}function D(){if(o)return u(f,null),f;var e=document.createDocumentFragment(),t=document.createComment(""),n=c();return e.append(t,n),u(t,n),e}function F(e,t){if(o){m.nodes_end=f,w();return}e!==null&&e.before(t)}const R="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(R);export{F as a,u as b,b as c,D as d,O as e,P as f,M as h,I as r,x as t};