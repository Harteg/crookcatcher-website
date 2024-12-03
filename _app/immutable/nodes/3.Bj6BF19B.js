import{h as Pt,a as ot,t as gt}from"../chunks/disclose-version.ClcsAfVQ.js";import{i as St}from"../chunks/legacy.rClDfmsn.js";import{E as Nt,aA as Lt,aB as Ot,av as Bt,O as ct,F as Rt,a5 as Gt,ai as It,o as T,aC as Mt,af as vt,Y as lt,ag as jt,p as qt,f as Ht,t as w,a as Kt,a9 as Ut,c as a,r as s,s as o,w as H,N as ft,L as Wt,aa as Yt}from"../chunks/utils.DahspeCk.js";import{d as Dt,s as Jt,e as Qt,b as Vt,a as S}from"../chunks/store.hbNaqIAn.js";import{h as C}from"../chunks/html.ChtOiQP7.js";import{H as Xt,F as Zt,h as K,s as te,t as ee}from"../chunks/Footer.BVfDSJ0D.js";import{P as ut,F as ae}from"../chunks/PlayStoreButton.CMGK0VrP.js";import{$ as se}from"../chunks/index.DTvoPbY1.js";const re=()=>performance.now(),b={tick:e=>requestAnimationFrame(e),now:()=>re(),tasks:new Set};function mt(e){b.tasks.forEach(t=>{t.c(e)||(b.tasks.delete(t),t.f())}),b.tasks.size!==0&&b.tick(mt)}function ie(e){let t;return b.tasks.size===0&&b.tick(mt),{promise:new Promise(v=>{b.tasks.add(t={c:e,f:v})}),abort(){b.tasks.delete(t)}}}function dt(e,t){e.dispatchEvent(new CustomEvent(t))}function ne(e){if(e==="float")return"cssFloat";if(e==="offset")return"cssOffset";if(e.startsWith("--"))return e;const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(v=>v[0].toUpperCase()+v.slice(1)).join("")}function pt(e){const t={},v=e.split(";");for(const r of v){const[l,c]=r.split(":");if(!l||c===void 0)break;const d=ne(l.trim());t[d]=c.trim()}return t}const oe=e=>e;function N(e,t,v,r){var l=(e&Mt)!==0,c="in",d,h=t.inert,i,u;function m(){var f=jt,y=ct;vt(null),lt(null);try{return d??(d=v()(t,(r==null?void 0:r())??{},{direction:c}))}finally{vt(f),lt(y)}}var g={is_global:l,in(){t.inert=h,i==null||i.abort(),dt(t,"introstart"),i=ht(t,m(),u,1,()=>{dt(t,"introend"),i==null||i.abort(),i=d=void 0})},out(f){{f==null||f(),d=void 0;return}},stop:()=>{i==null||i.abort()}},p=ct;if((p.transitions??(p.transitions=[])).push(g),Dt){var _=l;if(!_){for(var n=p.parent;n&&n.f&Nt;)for(;(n=n.parent)&&!(n.f&Lt););_=!n||(n.f&Ot)!==0}_&&Bt(()=>{Rt(()=>g.in())})}}function ht(e,t,v,r,l){if(Gt(t)){var c,d=!1;return It(()=>{if(!d){var f=t({direction:"in"});c=ht(e,f,v,r,l)}}),{abort:()=>{d=!0,c==null||c.abort()},deactivate:()=>c.deactivate(),reset:()=>c.reset(),t:()=>c.t()}}if(!(t!=null&&t.duration))return l(),{abort:T,deactivate:T,reset:T,t:()=>r};const{delay:h=0,css:i,tick:u,easing:m=oe}=t;var g=[];if(u&&u(0,1),i){var p=pt(i(0,1));g.push(p,p)}var _=()=>1-r,n=e.animate(g,{duration:h});return n.onfinish=()=>{var f=1-r,y=r-f,x=t.duration*Math.abs(y),$=[];if(x>0){if(i)for(var A=Math.ceil(x/16.666666666666668),E=0;E<=A;E+=1){var z=f+y*m(E/A),F=i(z,1-z);$.push(pt(F))}_=()=>{var k=n.currentTime;return f+y*m(k/x)},u&&ie(()=>{if(n.playState!=="running")return!1;var k=_();return u(k,1-k),!0})}n=e.animate($,{duration:x,fill:"forwards"}),n.onfinish=()=>{_=()=>r,u==null||u(r,1-r),l()}},{abort:()=>{n&&(n.cancel(),n.effect=null,n.onfinish=T)},deactivate:()=>{l=T},reset:()=>{},t:()=>_()}}function ce(e){return function(...t){var v=t[0];return v.stopPropagation(),e==null?void 0:e.apply(this,t)}}function ve(e){const t=e-1;return t*t*t+1}function _t(e){const t=typeof e=="string"&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}function L(e,{delay:t=0,duration:v=400,easing:r=ve,x:l=0,y:c=0,opacity:d=0}={}){const h=getComputedStyle(e),i=+h.opacity,u=h.transform==="none"?"":h.transform,m=i*(1-d),[g,p]=_t(l),[_,n]=_t(c);return{delay:t,duration:v,easing:r,css:(f,y)=>`
			transform: ${u} translate(${(1-f)*g}${p}, ${(1-f)*_}${n});
			opacity: ${i-m*y}`}}var le=gt('<meta name="description">'),fe=gt('<header class="app-header"><!></header> <main><div class="container"><section class="section hero-section svelte-tfgpvu" id="section_CC" style="padding-bottom: 5rem;"><div class="text-center"><h1 class="hero-title">👋</h1> <h1 class="hero-title cc-font"> </h1> <p class="hero-subtitle"><!></p> <!></div></section> <section class="section feature-section svelte-tfgpvu" id="section_lockscreen"><div class="feature-grid svelte-tfgpvu"><div class="section_text_right feature-text svelte-tfgpvu"><h2 class="svelte-tfgpvu"><!></h2></div> <div class="feature-image svelte-tfgpvu"><img src="/images/screen_alert_event_shadow.png" alt="Take pictures when the lock pattern is wrong" class="svelte-tfgpvu"></div></div></section> <section class="section feature-section svelte-tfgpvu" style="overflow: hidden"><div class="feature-grid svelte-tfgpvu"><div class="section_text_left feature-text svelte-tfgpvu"><h2 class="svelte-tfgpvu"><!></h2></div> <div class="feature-image svelte-tfgpvu"><img src="/images/ic_earth_dark.svg" alt="Globe showing GPS location tracking capabilities" class="earth-icon svelte-tfgpvu"></div></div></section> <section class="section feature-section email-section svelte-tfgpvu"><div class="feature-grid svelte-tfgpvu"><div class="section_text_left feature-text svelte-tfgpvu"><h2 class="svelte-tfgpvu"><!></h2></div> <div class="feature-image not-mobile svelte-tfgpvu"><img src="/images/paper-plane.svg" style="max-width: 300px;" alt="Email illustration" class="svelte-tfgpvu"></div></div> <img src="/images/blog/email_preview_sm.jpg" alt="Email preview" class="email-preview svelte-tfgpvu"> <button class="expand-button svelte-tfgpvu"> </button></section></div>  <section class="section" style="padding: 0;"><div class="screenshots center svelte-tfgpvu"><img alt="CrookCatcher settings" class="screenshot svelte-tfgpvu" src="/images/screen_config.png" loading="lazy"> <img alt="Main screen of CrookCatcher" class="screenshot svelte-tfgpvu" src="/images/screen_home.png" loading="lazy"> <img alt="List of captured pictures" class="screenshot svelte-tfgpvu" src="/images/screen_crooks.png" loading="lazy"></div></section> <div class="section-divider" style="margin-top: 128px;"></div> <div class="container features-container svelte-tfgpvu" style="margin-top: 128px;"><section class="features-section text-center"><h2 class="section-title cc-font svelte-tfgpvu" style="font-size: 2rem"><!></h2> <p class="section-subtitle svelte-tfgpvu"><!></p> <!></section></div> <div class="container text-center"><p style="font-size: 1.4rem"><!></p></div> <div class="section-divider" style="margin-top: 64px;"></div> <div class="container"><section class="hero-section"><div class="text-center"><img src="/images/crookcatcher_icon.svg" class="top-section-icon svelte-tfgpvu" alt="Crookcatcher icon"> <h2 class="hero-title cc-font">Crook<wbr>Catcher</h2> <p class="hero-subtitle"> </p> <!> <div class="social-link-box svelte-tfgpvu"><a href="https://x.com/CrookCatcherApp" target="_blank" class="svelte-tfgpvu"> </a></div></div></section></div></main> <!>',1);function xe(e,t){qt(t,!1);const v=Jt(),r=()=>Vt(se,"$_",v);let l=Yt(!1);St();var c=fe();Pt(zt=>{var nt=le();w(()=>te(nt,"content",r()("meta.description"))),w(()=>Ut.title=r()("meta.title")),ot(zt,nt)});var d=Ht(c),h=a(d);Xt(h,{}),s(d);var i=o(d,2),u=a(i),m=a(u),g=a(m),p=o(a(g),2),_=a(p,!0);w(()=>S(_,r()("hero.title"))),s(p);var n=o(p,2),f=a(n);C(f,()=>r()("hero.subtitle")),s(n);var y=o(n,2);ut(y,{}),s(g),s(m);var x=o(m,2),$=a(x),A=a($),E=a(A),z=a(E);C(z,()=>r()("features.lockscreen")),s(E),s(A),H(2),s($),s(x);var F=o(x,2),k=a(F),U=a(k),W=a(U),yt=a(W);C(yt,()=>r()("features.gps")),s(W),s(U),H(2),s(k),s(F);var P=o(F,2),O=a(P),Y=a(O),D=a(Y),xt=a(D);C(xt,()=>r()("features.email")),s(D),s(Y),H(2),s(O);var B=o(O,4),bt=a(B,!0);w(()=>S(bt,r()("features.email_expand_btn"))),s(B),s(P),s(u);var R=o(u,2),J=a(R),Q=a(J),V=o(Q,2),kt=o(V,2);s(J),s(R);var G=o(R,4),X=a(G),I=a(X),wt=a(I);C(wt,()=>r()("pro.title")),s(I);var M=o(I,2),Ct=a(M);C(Ct,()=>r()("pro.subtitle")),s(M);var Et=o(M,2);ae(Et,{}),s(X),s(G);var j=o(G,2),Z=a(j),Ft=a(Z);C(Ft,()=>r()("pro.availableInApp")),s(Z),s(j);var tt=o(j,4),et=a(tt),at=a(et),q=o(a(at),4),$t=a(q,!0);w(()=>S($t,r()("download.subtitle"))),s(q);var st=o(q,2);ut(st,{});var rt=o(st,2),it=a(rt),At=a(it,!0);w(()=>S(At,r()("download.follow"))),s(it),s(rt),s(at),s(et),s(tt),s(i);var Tt=o(i,2);Zt(Tt,{}),w(()=>ee(P,"expanded",ft(l))),N(1,g,()=>L,()=>({y:50,duration:1e3,delay:200,opacity:0})),N(1,x,()=>L,()=>({y:50,duration:1e3,delay:400,opacity:0})),N(1,F,()=>L,()=>({y:50,duration:1e3,delay:600,opacity:0})),Qt("click",B,ce(()=>Wt(l,!ft(l)))),N(1,P,()=>L,()=>({y:50,duration:1e3,delay:800,opacity:0})),K(Q),K(V),K(kt),ot(e,c),Kt()}export{xe as component};