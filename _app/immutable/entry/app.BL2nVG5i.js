const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.Bk2ImmtS.js","../chunks/index.DTvoPbY1.js","../chunks/preload-helper.C1FmrZbK.js","../chunks/index.CcKK7PG8.js","../chunks/utils.DahspeCk.js","../chunks/index.g5YcAAdQ.js","../chunks/control.CYgJF_JY.js","../chunks/disclose-version.ClcsAfVQ.js","../chunks/legacy.rClDfmsn.js","../chunks/slot.Db0rdiCY.js","../chunks/if.CGyDWAs_.js","../chunks/index-client.vjcglz3y.js","../assets/0.DE3xwElY.css","../nodes/1.C3f7gc_Y.js","../chunks/store.hbNaqIAn.js","../chunks/stores.DZkMW46E.js","../chunks/entry.C_D2GqI2.js","../nodes/2.BIvwltth.js","../nodes/3.Cish6oBE.js","../chunks/html.ChtOiQP7.js","../chunks/Footer.Bci2aSjm.js","../assets/Footer.Csj7P07i.css","../chunks/PlayStoreButton.BfXhhtmK.js","../chunks/props.C8Tf1a1a.js","../assets/PlayStoreButton.kbrhO1p0.css","../assets/3.CDPe5akW.css","../nodes/4.D5PBjDkl.js","../assets/4.Bh4ZEAF-.css","../nodes/5.Cf7CO4nV.js","../chunks/svelte-component.Dl6vL1yN.js","../assets/5.3tyLkpAm.css","../nodes/6.BvVuY-5k.js","../assets/6.CHA_CN8g.css","../nodes/7.BnH0Ns3b.js","../assets/7.Cm5DljkU.css","../nodes/8.BeEpQYwX.js","../assets/8.BatsQ78M.css"])))=>i.map(i=>d[i]);
var M=r=>{throw TypeError(r)};var Y=(r,t,e)=>t.has(r)||M("Cannot "+e);var c=(r,t,e)=>(Y(r,t,"read from private field"),e?e.call(r):t.get(r)),L=(r,t,e)=>t.has(r)?M("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(r):t.set(r,e),A=(r,t,e,i)=>(Y(r,t,"write to private field"),i?i.call(r,e):t.set(r,e),e);import{_ as l}from"../chunks/preload-helper.C1FmrZbK.js";import{av as H,aw as J,F as K,ai as Q,S as U,N as f,$ as W,L as b,ax as X,aj as Z,a8 as $,p as tt,ab as rt,D as et,ay as at,f as O,a as st,az as T,s as ot,c as it,t as nt,r as ct,a0 as D}from"../chunks/utils.DahspeCk.js";import{h as ut,m as _t,u as mt,a as lt}from"../chunks/store.hbNaqIAn.js";import{d as I,a as y,t as z,f as ft}from"../chunks/disclose-version.ClcsAfVQ.js";import{i as V}from"../chunks/if.CGyDWAs_.js";import{c as k}from"../chunks/svelte-component.Dl6vL1yN.js";import{p as w,a as dt}from"../chunks/props.C8Tf1a1a.js";import{o as ht}from"../chunks/index-client.vjcglz3y.js";function q(r,t){return r===t||(r==null?void 0:r[U])===t}function p(r={},t,e,i){return H(()=>{var o,n;return J(()=>{o=n,n=[],K(()=>{r!==e(...n)&&(t(r,...n),o&&q(e(...o),r)&&t(null,...o))})}),()=>{Q(()=>{n&&q(e(...n),r)&&t(null,...n)})}}),r}function gt(r){return class extends vt{constructor(t){super({component:r,...t})}}}var d,u;class vt{constructor(t){L(this,d);L(this,u);var n;var e=new Map,i=(a,s)=>{var h=$(s);return e.set(a,h),h};const o=new Proxy({...t.props||{},$$events:{}},{get(a,s){return f(e.get(s)??i(s,Reflect.get(a,s)))},has(a,s){return s===W?!0:(f(e.get(s)??i(s,Reflect.get(a,s))),Reflect.has(a,s))},set(a,s,h){return b(e.get(s)??i(s,h),h),Reflect.set(a,s,h)}});A(this,u,(t.hydrate?ut:_t)(t.component,{target:t.target,anchor:t.anchor,props:o,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((n=t==null?void 0:t.props)!=null&&n.$$host)||t.sync===!1)&&X(),A(this,d,o.$$events);for(const a of Object.keys(c(this,u)))a==="$set"||a==="$destroy"||a==="$on"||Z(this,a,{get(){return c(this,u)[a]},set(s){c(this,u)[a]=s},enumerable:!0});c(this,u).$set=a=>{Object.assign(o,a)},c(this,u).$destroy=()=>{mt(c(this,u))}}$set(t){c(this,u).$set(t)}$on(t,e){c(this,d)[t]=c(this,d)[t]||[];const i=(...o)=>e.call(this,...o);return c(this,d)[t].push(i),()=>{c(this,d)[t]=c(this,d)[t].filter(o=>o!==i)}}$destroy(){c(this,u).$destroy()}}d=new WeakMap,u=new WeakMap;const kt={};var yt=z('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),Et=z("<!> <!>",1);function Pt(r,t){tt(t,!0);let e=w(t,"components",23,()=>[]),i=w(t,"data_0",3,null),o=w(t,"data_1",3,null);rt(()=>t.stores.page.set(t.page)),et(()=>{t.stores,t.page,t.constructors,e(),t.form,i(),o(),t.stores.page.notify()});let n=T(!1),a=T(!1),s=T(null);ht(()=>{const g=t.stores.page.subscribe(()=>{f(n)&&(b(a,!0),at().then(()=>{b(s,dt(document.title||"untitled page"))}))});return b(n,!0),g});const h=D(()=>t.constructors[1]);var S=Et(),C=O(S);V(C,()=>t.constructors[1],g=>{var m=I();const E=D(()=>t.constructors[0]);var P=O(m);k(P,()=>f(E),(v,x)=>{p(x(v,{get data(){return i()},get form(){return t.form},children:(_,Rt)=>{var j=I(),F=O(j);k(F,()=>f(h),(G,N)=>{p(N(G,{get data(){return o()},get form(){return t.form}}),R=>e()[1]=R,()=>{var R;return(R=e())==null?void 0:R[1]})}),y(_,j)},$$slots:{default:!0}}),_=>e()[0]=_,()=>{var _;return(_=e())==null?void 0:_[0]})}),y(g,m)},g=>{var m=I();const E=D(()=>t.constructors[0]);var P=O(m);k(P,()=>f(E),(v,x)=>{p(x(v,{get data(){return i()},get form(){return t.form}}),_=>e()[0]=_,()=>{var _;return(_=e())==null?void 0:_[0]})}),y(g,m)});var B=ot(C,2);V(B,()=>f(n),g=>{var m=yt(),E=it(m);V(E,()=>f(a),P=>{var v=ft();nt(()=>lt(v,f(s))),y(P,v)}),ct(m),y(g,m)}),y(r,S),st()}const wt=gt(Pt),pt=[()=>l(()=>import("../nodes/0.Bk2ImmtS.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]),import.meta.url),()=>l(()=>import("../nodes/1.C3f7gc_Y.js"),__vite__mapDeps([13,7,4,8,14,15,16,3,6]),import.meta.url),()=>l(()=>import("../nodes/2.BIvwltth.js"),__vite__mapDeps([17,5,6]),import.meta.url),()=>l(()=>import("../nodes/3.Cish6oBE.js"),__vite__mapDeps([18,7,4,8,14,19,20,15,16,3,6,1,2,21,22,23,10,24,25]),import.meta.url),()=>l(()=>import("../nodes/4.D5PBjDkl.js"),__vite__mapDeps([26,2,5,6,7,4,8,14,20,15,16,3,1,21,23,27]),import.meta.url),()=>l(()=>import("../nodes/5.Cf7CO4nV.js"),__vite__mapDeps([28,2,5,6,7,4,8,14,10,29,20,15,16,3,1,21,23,30]),import.meta.url),()=>l(()=>import("../nodes/6.BvVuY-5k.js"),__vite__mapDeps([31,7,4,8,14,10,20,15,16,3,6,1,2,21,19,32]),import.meta.url),()=>l(()=>import("../nodes/7.BnH0Ns3b.js"),__vite__mapDeps([33,7,4,8,14,20,15,16,3,6,1,2,21,19,34]),import.meta.url),()=>l(()=>import("../nodes/8.BeEpQYwX.js"),__vite__mapDeps([35,7,4,8,14,20,15,16,3,6,1,2,21,36]),import.meta.url)],St=[],Ct={"/":[2],"/[lang]":[3],"/[lang]/blog":[4],"/[lang]/blog/[slug]":[5],"/[lang]/help":[6],"/[lang]/privacy":[7],"/[lang]/terms":[8]},jt={handleError:({error:r})=>{console.error(r)},reroute:()=>{}};export{Ct as dictionary,jt as hooks,kt as matchers,pt as nodes,wt as root,St as server_loads};
