import{af as E,Y as T,ag as I,O,ah as V,ai as M,aj as W,R as C,ak as R,m as P,al as $,j as z,H as N,A as g,l as k,e as F,i as p,am as G,k as J,an as K,ao as Q,ap as U,aq as X,ar as Z,d as x,p as ee,h as S,a as re,B as te,a8 as ae,o as D,q as se,N as ne,L as ie}from"./utils.DahspeCk.js";import{r as ue,b as oe}from"./disclose-version.ClcsAfVQ.js";function fe(e){var r=I,a=O;E(null),T(null);try{return e()}finally{E(r),T(a)}}const ce=new Set,q=new Set;function le(e,r,a,s){function n(t){if(s.capture||b.call(r,t),!t.cancelBubble)return fe(()=>a.call(this,t))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?M(()=>{r.addEventListener(e,n,s)}):r.addEventListener(e,n,s),n}function be(e,r,a,s,n){var t={capture:s,passive:n},o=le(e,r,a,t);(r===document.body||r===window||r===document)&&V(()=>{r.removeEventListener(e,o,t)})}function b(e){var A;var r=this,a=r.ownerDocument,s=e.type,n=((A=e.composedPath)==null?void 0:A.call(e))||[],t=n[0]||e.target,o=0,h=e.__root;if(h){var l=n.indexOf(h);if(l!==-1&&(r===document||r===window)){e.__root=r;return}var d=n.indexOf(r);if(d===-1)return;l<=d&&(o=l)}if(t=n[o]||e.target,t!==r){W(e,"currentTarget",{configurable:!0,get(){return t||a}});var L=I,f=O;E(null),T(null);try{for(var i,u=[];t!==null;){var c=t.assignedSlot||t.parentNode||t.host||null;try{var _=t["__"+s];if(_!==void 0&&!t.disabled)if(C(_)){var[j,...B]=_;j.apply(t,[e,...B])}else _.call(t,e)}catch(y){i?u.push(y):i=y}if(e.cancelBubble||c===r||c===null)break;t=c}if(i){for(let y of u)queueMicrotask(()=>{throw y});throw i}}finally{e.__root=r,delete e.currentTarget,E(L),T(f)}}}const de=["touchstart","touchmove"];function _e(e){return de.includes(e)}let H=!0;function ye(e,r){var a=r==null?"":typeof r=="object"?r+"":r;a!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=a,e.nodeValue=a==null?"":a+"")}function he(e,r){return Y(e,r)}function ge(e,r){R(),r.intro=r.intro??!1;const a=r.target,s=S,n=p;try{for(var t=P(a);t&&(t.nodeType!==8||t.data!==$);)t=z(t);if(!t)throw N;g(!0),k(t),F();const o=Y(e,{...r,anchor:t});if(p===null||p.nodeType!==8||p.data!==G)throw J(),N;return g(!1),o}catch(o){if(o===N)return r.recover===!1&&K(),R(),Q(a),g(!1),he(e,r);throw o}finally{g(s),k(n),ue()}}const v=new Map;function Y(e,{target:r,anchor:a,props:s={},events:n,context:t,intro:o=!0}){R();var h=new Set,l=f=>{for(var i=0;i<f.length;i++){var u=f[i];if(!h.has(u)){h.add(u);var c=_e(u);r.addEventListener(u,b,{passive:c});var _=v.get(u);_===void 0?(document.addEventListener(u,b,{passive:c}),v.set(u,1)):v.set(u,_+1)}}};l(U(ce)),q.add(l);var d=void 0,L=X(()=>{var f=a??r.appendChild(Z());return x(()=>{if(t){ee({});var i=te;i.c=t}n&&(s.$$events=n),S&&oe(f,null),H=o,d=e(f,s)||{},H=!0,S&&(O.nodes_end=p),t&&re()}),()=>{var c;for(var i of h){r.removeEventListener(i,b);var u=v.get(i);--u===0?(document.removeEventListener(i,b),v.delete(i)):v.set(i,u)}q.delete(l),m.delete(d),f!==a&&((c=f.parentNode)==null||c.removeChild(f))}});return m.set(d,L),d}let m=new WeakMap;function we(e){const r=m.get(e);r&&r()}let w=!1;function Ee(e,r,a){const s=a[r]??(a[r]={store:null,source:ae(void 0),unsubscribe:D});if(s.store!==e)if(s.unsubscribe(),s.store=e??null,e==null)s.source.v=void 0,s.unsubscribe=D;else{var n=!0;s.unsubscribe=se(e,t=>{n?s.source.v=t:ie(s.source,t)}),n=!1}return ne(s.source)}function Te(){const e={};return V(()=>{for(var r in e)e[r].unsubscribe()}),e}function Le(e){var r=w;try{return w=!1,[e(),w]}finally{w=r}}export{ye as a,Ee as b,Le as c,H as d,be as e,ge as h,he as m,Te as s,we as u};