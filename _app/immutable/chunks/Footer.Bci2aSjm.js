import{a as P,t as G}from"./disclose-version.ClcsAfVQ.js";import{i as la}from"./legacy.rClDfmsn.js";import{ar as ma,b as wa,aD as fa,h as $,l as Y,e as Aa,R as Ea,ap as oa,y as Na,z as aa,A as q,i as H,aE as S,x as ca,d as va,g as $a,ai as ya,O as ea,aF as K,aG as ra,aH as V,aI as Ia,ao as Ta,aJ as Ca,n as La,m as Ha,am as ba,ag as ka,aK as Ra,a8 as Da,J as sa,aL as Ma,j as Sa,aM as B,Q as ta,aN as Oa,p as ua,t as y,a as da,c as N,s as C,r as A,N as J,a1 as Fa}from"./utils.DahspeCk.js";import{s as _a,e as za,a as b,b as k}from"./store.hbNaqIAn.js";import{p as pa}from"./stores.DZkMW46E.js";import{s as Ya,a as qa,$ as ha}from"./index.DTvoPbY1.js";import{g as Ja}from"./entry.C_D2GqI2.js";function Pa(e,a){return a}function Ba(e,a,r,s){for(var i=[],v=a.length,o=0;o<v;o++)Ia(a[o].e,i,!0);var p=v>0&&i.length===0&&r!==null;if(p){var m=r.parentNode;Ta(m),m.append(r),s.clear(),T(e,a[0].prev,a[v-1].next)}Ca(i,()=>{for(var g=0;g<v;g++){var c=a[g];p||(s.delete(c.k),T(e,c.prev,c.next)),La(c.e,!p)}})}function Ga(e,a,r,s,i,v=null){var o=e,p={flags:a,items:new Map,first:null},m=(a&fa)!==0;if(m){var g=e;o=$?Y(Ha(g)):g.appendChild(ma())}$&&Aa();var c=null,x=!1;wa(()=>{var t=r(),f=Ea(t)?t:t==null?[]:oa(t),n=f.length;if(x&&n===0)return;x=n===0;let w=!1;if($){var h=o.data===Na;h!==(n===0)&&(o=aa(),Y(o),q(!1),w=!0)}if($){for(var d=null,E,_=0;_<n;_++){if(H.nodeType===8&&H.data===ba){o=H,w=!0,q(!1);break}var l=f[_],u=s(l,_);E=ga(H,p,d,null,l,u,_,i,a),p.items.set(u,E),d=E}n>0&&Y(aa())}if(!$){var O=ka;Ka(f,p,o,i,a,(O.f&S)!==0,s)}v!==null&&(n===0?c?ca(c):c=va(()=>v(o)):c!==null&&$a(c,()=>{c=null})),w&&q(!0),r()}),$&&(o=H)}function Ka(e,a,r,s,i,v,o){var U,X,W,Z;var p=(i&Ra)!==0,m=(i&(K|V))!==0,g=e.length,c=a.items,x=a.first,t=x,f,n=null,w,h=[],d=[],E,_,l,u;if(p)for(u=0;u<g;u+=1)E=e[u],_=o(E,u),l=c.get(_),l!==void 0&&((U=l.a)==null||U.measure(),(w??(w=new Set)).add(l));for(u=0;u<g;u+=1){if(E=e[u],_=o(E,u),l=c.get(_),l===void 0){var O=t?t.e.nodes_start:r;n=ga(O,a,n,n===null?a.first:n.next,E,_,u,s,i),c.set(_,n),h=[],d=[],t=n.next;continue}if(m&&Va(l,E,u,i),l.e.f&S&&(ca(l.e),p&&((X=l.a)==null||X.unfix(),(w??(w=new Set)).delete(l))),l!==t){if(f!==void 0&&f.has(l)){if(h.length<d.length){var M=d[0],I;n=M.prev;var Q=h[0],F=h[h.length-1];for(I=0;I<h.length;I+=1)ia(h[I],M,r);for(I=0;I<d.length;I+=1)f.delete(d[I]);T(a,Q.prev,F.next),T(a,n,Q),T(a,F,M),t=M,n=F,u-=1,h=[],d=[]}else f.delete(l),ia(l,t,r),T(a,l.prev,l.next),T(a,l,n===null?a.first:n.next),T(a,n,l),n=l;continue}for(h=[],d=[];t!==null&&t.k!==_;)(v||!(t.e.f&S))&&(f??(f=new Set)).add(t),d.push(t),t=t.next;if(t===null)continue;l=t}h.push(l),n=l,t=l.next}if(t!==null||f!==void 0){for(var L=f===void 0?[]:oa(f);t!==null;)(v||!(t.e.f&S))&&L.push(t),t=t.next;var z=L.length;if(z>0){var xa=i&fa&&g===0?r:null;if(p){for(u=0;u<z;u+=1)(W=L[u].a)==null||W.measure();for(u=0;u<z;u+=1)(Z=L[u].a)==null||Z.fix()}Ba(a,L,xa,c)}}p&&ya(()=>{var j;if(w!==void 0)for(l of w)(j=l.a)==null||j.apply()}),ea.first=a.first&&a.first.e,ea.last=n&&n.e}function Va(e,a,r,s){s&K&&ra(e.v,a),s&V?ra(e.i,r):e.i=r}function ga(e,a,r,s,i,v,o,p,m){var g=(m&K)!==0,c=(m&Ma)===0,x=g?c?Da(i):sa(i):i,t=m&V?sa(o):o,f={i:t,v:x,k:v,a:null,e:null,prev:r,next:s};try{return f.e=va(()=>p(e,x,t),$),f.e.prev=r&&r.e,f.e.next=s&&s.e,r===null?a.first=f:(r.next=f,r.e.next=f.e),s!==null&&(s.prev=f,s.e.prev=f.e),f}finally{}}function ia(e,a,r){for(var s=e.next?e.next.e.nodes_start:r,i=a?a.e.nodes_start:r,v=e.e.nodes_start;v!==s;){var o=Sa(v);i.before(v),v=o}}function T(e,a,r){a===null?e.first=r:(a.next=r,a.e.next=r&&r.e),r!==null&&(r.prev=a,r.e.prev=a&&a.e)}function R(e,a,r,s){var i=e.__attributes??(e.__attributes={});$&&(i[a]=e.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&e.nodeName==="LINK")||i[a]!==(i[a]=r)&&(a==="style"&&"__styles"in e&&(e.__styles={}),a==="loading"&&(e[B]=r),r==null?e.removeAttribute(a):typeof r!="string"&&Qa(e).includes(a)?e[a]=r:e.setAttribute(a,r))}var na=new Map;function Qa(e){var a=na.get(e.nodeName);if(a)return a;na.set(e.nodeName,a=[]);for(var r,s=ta(e),i=Element.prototype;i!==s;){r=Oa(s);for(var v in r)r[v].set&&a.push(v);s=ta(s)}return a}function ne(e){if(!$&&e.loading==="lazy"){var a=e.src;e[B]=null,e.loading="eager",e.removeAttribute("src"),requestAnimationFrame(()=>{e[B]!=="eager"&&(e.loading="lazy"),e.src=a})}}function le(e,a){var r=e.__className,s=Ua(a);$&&e.className===s?e.__className=s:(r!==s||$&&e.className!==s)&&(a==null?e.removeAttribute("class"):e.className=s,e.__className=s)}function Ua(e){return e??""}function D(e,a,r){if(r){if(e.classList.contains(a))return;e.classList.add(a)}else{if(!e.classList.contains(a))return;e.classList.remove(a)}}var Xa=G('<button class="lang-button svelte-1n2dx4w"> </button>'),Wa=G('<header class="header-fixed svelte-1n2dx4w"><div class="header-row svelte-1n2dx4w"><a class="header-button header-logo svelte-1n2dx4w"><span class="cc-font svelte-1n2dx4w">CrookCatcher</span></a> <div class="spacer svelte-1n2dx4w"></div> <a class="header-button svelte-1n2dx4w" title="Help"> </a> <div class="lang-switcher svelte-1n2dx4w"></div></div></header>');function fe(e,a){ua(a,!1);const r=_a(),s=()=>k(pa,"$page",r),i=()=>k(qa,"$locale",r),v=()=>k(ha,"$_",r),o=[{code:"en",name:"EN"},{code:"fr",name:"FR"}];async function p(w){const d=s().url.pathname.replace(/^\/(en|fr)/,"");await Ya(w),Ja(`/${w}${d}`)}la();var m=Wa(),g=N(m),c=N(g),x=C(c,4);const t=Fa(()=>s().url.pathname.includes("/help"));var f=N(x,!0);y(()=>b(f,v()("nav.help"))),A(x);var n=C(x,2);Ga(n,5,()=>o,Pa,(w,h)=>{let d=()=>J(h).code,E=()=>J(h).name;var _=Xa(),l=N(_,!0);A(_),y(()=>{D(_,"active",i()===d()),b(l,E())}),za("click",_,()=>p(d())),P(w,_)}),A(n),A(g),A(m),y(()=>{R(c,"href",`/${i()??""}`),R(x,"href",`/${i()??""}/help`),D(x,"active",J(t))}),P(e,m),da()}var Za=G('<footer class="svelte-1xpfc0a"><div class="footer-content svelte-1xpfc0a"><div class="footer-left"><span class="cc-font" style="font-size: 20px;">CrookCatcher</span></div> <div class="footer-right"><ul class="footer-links svelte-1xpfc0a"><li><a href="help" class="svelte-1xpfc0a"> </a></li> <li><a href="terms" class="svelte-1xpfc0a"> </a></li> <li><a href="privacy" class="svelte-1xpfc0a"> </a></li></ul></div></div> <div class="copyright svelte-1xpfc0a"></div></footer>');function oe(e,a){ua(a,!1);const r=_a(),s=()=>k(ha,"$_",r),i=()=>k(pa,"$page",r),v=new Date().getFullYear();la();var o=Za(),p=N(o),m=C(N(p),2),g=N(m),c=N(g),x=N(c);y(()=>R(x,"title",s()("footer.help")));var t=N(x,!0);y(()=>b(t,s()("footer.help"))),A(x),A(c);var f=C(c,2),n=N(f);y(()=>R(n,"title",s()("footer.terms")));var w=N(n,!0);y(()=>b(w,s()("footer.terms"))),A(n),A(f);var h=C(f,2),d=N(h);y(()=>R(d,"title",s()("footer.privacy")));var E=N(d,!0);y(()=>b(E,s()("footer.privacy"))),A(d),A(h),A(g),A(m),A(p);var _=C(p,2);_.textContent=`Copyright © ${v??""} Jakob Harteg`,A(o),y(()=>{D(x,"active",i().url.pathname==="/help"),D(n,"active",i().url.pathname==="/terms"),D(d,"active",i().url.pathname==="/privacy")}),P(e,o),da()}export{oe as F,fe as H,le as a,Ga as e,ne as h,Pa as i,R as s,D as t};
