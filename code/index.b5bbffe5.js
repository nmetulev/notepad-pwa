(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ue=window,Ns=Ue.ShadowRoot&&(Ue.ShadyCSS===void 0||Ue.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Us=Symbol(),ti=new WeakMap;class qi{constructor(t,s,i){if(this._$cssResult$=!0,i!==Us)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o;const s=this.t;if(Ns&&t===void 0){const i=s!==void 0&&s.length===1;i&&(t=ti.get(s)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ti.set(s,t))}return t}toString(){return this.cssText}}const To=e=>new qi(typeof e=="string"?e:e+"",void 0,Us),Ut=(e,...t)=>{const s=e.length===1?e[0]:t.reduce((i,o,n)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1],e[0]);return new qi(s,e,Us)},zo=(e,t)=>{Ns?e.adoptedStyleSheets=t.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet):t.forEach(s=>{const i=document.createElement("style"),o=Ue.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=s.cssText,e.appendChild(i)})},ei=Ns?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let s="";for(const i of t.cssRules)s+=i.cssText;return To(s)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var us;const qe=window,si=qe.trustedTypes,Oo=si?si.emptyScript:"",ii=qe.reactiveElementPolyfillSupport,Ts={toAttribute(e,t){switch(t){case Boolean:e=e?Oo:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=e!==null;break;case Number:s=e===null?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},Wi=(e,t)=>t!==e&&(t==t||e==e),ps={attribute:!0,type:String,converter:Ts,reflect:!1,hasChanged:Wi};class qt extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var s;(s=this.h)!==null&&s!==void 0||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((s,i)=>{const o=this._$Ep(i,s);o!==void 0&&(this._$Ev.set(o,i),t.push(o))}),t}static createProperty(t,s=ps){if(s.state&&(s.attribute=!1),this.finalize(),this.elementProperties.set(t,s),!s.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,s);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,s,i){return{get(){return this[s]},set(o){const n=this[t];this[s]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||ps}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const s=this.properties,i=[...Object.getOwnPropertyNames(s),...Object.getOwnPropertySymbols(s)];for(const o of i)this.createProperty(o,s[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const s=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const o of i)s.unshift(ei(o))}else t!==void 0&&s.push(ei(t));return s}static _$Ep(t,s){const i=s.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(s=>s(this))}addController(t){var s,i;((s=this._$ES)!==null&&s!==void 0?s:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var s;(s=this._$ES)===null||s===void 0||s.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,s)=>{this.hasOwnProperty(s)&&(this._$Ei.set(s,this[s]),delete this[s])})}createRenderRoot(){var t;const s=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return zo(s,this.constructor.elementStyles),s}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var i;return(i=s.hostConnected)===null||i===void 0?void 0:i.call(s)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(s=>{var i;return(i=s.hostDisconnected)===null||i===void 0?void 0:i.call(s)})}attributeChangedCallback(t,s,i){this._$AK(t,i)}_$EO(t,s,i=ps){var o;const n=this.constructor._$Ep(t,i);if(n!==void 0&&i.reflect===!0){const r=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:Ts).toAttribute(s,i.type);this._$El=t,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,s){var i;const o=this.constructor,n=o._$Ev.get(t);if(n!==void 0&&this._$El!==n){const r=o.getPropertyOptions(n),c=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:Ts;this._$El=n,this[n]=c.fromAttribute(s,r.type),this._$El=null}}requestUpdate(t,s,i){let o=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Wi)(this[t],s)?(this._$AL.has(t)||this._$AL.set(t,s),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(s){Promise.reject(s)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,n)=>this[n]=o),this._$Ei=void 0);let s=!1;const i=this._$AL;try{s=this.shouldUpdate(i),s?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var n;return(n=o.hostUpdate)===null||n===void 0?void 0:n.call(o)}),this.update(i)):this._$Ek()}catch(o){throw s=!1,this._$Ek(),o}s&&this._$AE(i)}willUpdate(t){}_$AE(t){var s;(s=this._$ES)===null||s===void 0||s.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((s,i)=>this._$EO(i,this[i],s)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}qt.finalized=!0,qt.elementProperties=new Map,qt.elementStyles=[],qt.shadowRootOptions={mode:"open"},ii==null||ii({ReactiveElement:qt}),((us=qe.reactiveElementVersions)!==null&&us!==void 0?us:qe.reactiveElementVersions=[]).push("1.4.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var fs;const We=window,Yt=We.trustedTypes,oi=Yt?Yt.createPolicy("lit-html",{createHTML:e=>e}):void 0,$t=`lit$${(Math.random()+"").slice(9)}$`,Ki="?"+$t,Lo=`<${Ki}>`,Xt=document,we=(e="")=>Xt.createComment(e),_e=e=>e===null||typeof e!="object"&&typeof e!="function",Zi=Array.isArray,Po=e=>Zi(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",ae=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ni=/-->/g,ri=/>/g,Rt=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),li=/'/g,ai=/"/g,Gi=/^(?:script|style|textarea|title)$/i,Ro=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),T=Ro(1),St=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),ci=new WeakMap,Do=(e,t,s)=>{var i,o;const n=(i=s==null?void 0:s.renderBefore)!==null&&i!==void 0?i:t;let r=n._$litPart$;if(r===void 0){const c=(o=s==null?void 0:s.renderBefore)!==null&&o!==void 0?o:null;n._$litPart$=r=new ze(t.insertBefore(we(),c),c,void 0,s!=null?s:{})}return r._$AI(e),r},Zt=Xt.createTreeWalker(Xt,129,null,!1),Fo=(e,t)=>{const s=e.length-1,i=[];let o,n=t===2?"<svg>":"",r=ae;for(let l=0;l<s;l++){const d=e[l];let f,h,m=-1,p=0;for(;p<d.length&&(r.lastIndex=p,h=r.exec(d),h!==null);)p=r.lastIndex,r===ae?h[1]==="!--"?r=ni:h[1]!==void 0?r=ri:h[2]!==void 0?(Gi.test(h[2])&&(o=RegExp("</"+h[2],"g")),r=Rt):h[3]!==void 0&&(r=Rt):r===Rt?h[0]===">"?(r=o!=null?o:ae,m=-1):h[1]===void 0?m=-2:(m=r.lastIndex-h[2].length,f=h[1],r=h[3]===void 0?Rt:h[3]==='"'?ai:li):r===ai||r===li?r=Rt:r===ni||r===ri?r=ae:(r=Rt,o=void 0);const v=r===Rt&&e[l+1].startsWith("/>")?" ":"";n+=r===ae?d+Lo:m>=0?(i.push(f),d.slice(0,m)+"$lit$"+d.slice(m)+$t+v):d+$t+(m===-2?(i.push(void 0),l):v)}const c=n+(e[s]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[oi!==void 0?oi.createHTML(c):c,i]};class xe{constructor({strings:t,_$litType$:s},i){let o;this.parts=[];let n=0,r=0;const c=t.length-1,l=this.parts,[d,f]=Fo(t,s);if(this.el=xe.createElement(d,i),Zt.currentNode=this.el.content,s===2){const h=this.el.content,m=h.firstChild;m.remove(),h.append(...m.childNodes)}for(;(o=Zt.nextNode())!==null&&l.length<c;){if(o.nodeType===1){if(o.hasAttributes()){const h=[];for(const m of o.getAttributeNames())if(m.endsWith("$lit$")||m.startsWith($t)){const p=f[r++];if(h.push(m),p!==void 0){const v=o.getAttribute(p.toLowerCase()+"$lit$").split($t),y=/([.?@])?(.*)/.exec(p);l.push({type:1,index:n,name:y[2],strings:v,ctor:y[1]==="."?Io:y[1]==="?"?No:y[1]==="@"?Uo:ts})}else l.push({type:6,index:n})}for(const m of h)o.removeAttribute(m)}if(Gi.test(o.tagName)){const h=o.textContent.split($t),m=h.length-1;if(m>0){o.textContent=Yt?Yt.emptyScript:"";for(let p=0;p<m;p++)o.append(h[p],we()),Zt.nextNode(),l.push({type:2,index:++n});o.append(h[m],we())}}}else if(o.nodeType===8)if(o.data===Ki)l.push({type:2,index:n});else{let h=-1;for(;(h=o.data.indexOf($t,h+1))!==-1;)l.push({type:7,index:n}),h+=$t.length-1}n++}}static createElement(t,s){const i=Xt.createElement("template");return i.innerHTML=t,i}}function Jt(e,t,s=e,i){var o,n,r,c;if(t===St)return t;let l=i!==void 0?(o=s._$Cl)===null||o===void 0?void 0:o[i]:s._$Cu;const d=_e(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==d&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),d===void 0?l=void 0:(l=new d(e),l._$AT(e,s,i)),i!==void 0?((r=(c=s)._$Cl)!==null&&r!==void 0?r:c._$Cl=[])[i]=l:s._$Cu=l),l!==void 0&&(t=Jt(e,l._$AS(e,t.values),l,i)),t}class Mo{constructor(t,s){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var s;const{el:{content:i},parts:o}=this._$AD,n=((s=t==null?void 0:t.creationScope)!==null&&s!==void 0?s:Xt).importNode(i,!0);Zt.currentNode=n;let r=Zt.nextNode(),c=0,l=0,d=o[0];for(;d!==void 0;){if(c===d.index){let f;d.type===2?f=new ze(r,r.nextSibling,this,t):d.type===1?f=new d.ctor(r,d.name,d.strings,this,t):d.type===6&&(f=new Ho(r,this,t)),this.v.push(f),d=o[++l]}c!==(d==null?void 0:d.index)&&(r=Zt.nextNode(),c++)}return n}m(t){let s=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,s),s+=i.strings.length-2):i._$AI(t[s])),s++}}class ze{constructor(t,s,i,o){var n;this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=i,this.options=o,this._$C_=(n=o==null?void 0:o.isConnected)===null||n===void 0||n}get _$AU(){var t,s;return(s=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&s!==void 0?s:this._$C_}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&t.nodeType===11&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=Jt(this,t,s),_e(t)?t===B||t==null||t===""?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==St&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):Po(t)?this.O(t):this.$(t)}S(t,s=this._$AB){return this._$AA.parentNode.insertBefore(t,s)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==B&&_e(this._$AH)?this._$AA.nextSibling.data=t:this.k(Xt.createTextNode(t)),this._$AH=t}T(t){var s;const{values:i,_$litType$:o}=t,n=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=xe.createElement(o.h,this.options)),o);if(((s=this._$AH)===null||s===void 0?void 0:s._$AD)===n)this._$AH.m(i);else{const r=new Mo(n,this),c=r.p(this.options);r.m(i),this.k(c),this._$AH=r}}_$AC(t){let s=ci.get(t.strings);return s===void 0&&ci.set(t.strings,s=new xe(t)),s}O(t){Zi(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,o=0;for(const n of t)o===s.length?s.push(i=new ze(this.S(we()),this.S(we()),this,this.options)):i=s[o],i._$AI(n),o++;o<s.length&&(this._$AR(i&&i._$AB.nextSibling,o),s.length=o)}_$AR(t=this._$AA.nextSibling,s){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,s);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var s;this._$AM===void 0&&(this._$C_=t,(s=this._$AP)===null||s===void 0||s.call(this,t))}}class ts{constructor(t,s,i,o,n){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=s,this._$AM=o,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=B}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,s=this,i,o){const n=this.strings;let r=!1;if(n===void 0)t=Jt(this,t,s,0),r=!_e(t)||t!==this._$AH&&t!==St,r&&(this._$AH=t);else{const c=t;let l,d;for(t=n[0],l=0;l<n.length-1;l++)d=Jt(this,c[i+l],s,l),d===St&&(d=this._$AH[l]),r||(r=!_e(d)||d!==this._$AH[l]),d===B?t=B:t!==B&&(t+=(d!=null?d:"")+n[l+1]),this._$AH[l]=d}r&&!o&&this.P(t)}P(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class Io extends ts{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===B?void 0:t}}const Bo=Yt?Yt.emptyScript:"";class No extends ts{constructor(){super(...arguments),this.type=4}P(t){t&&t!==B?this.element.setAttribute(this.name,Bo):this.element.removeAttribute(this.name)}}class Uo extends ts{constructor(t,s,i,o,n){super(t,s,i,o,n),this.type=5}_$AI(t,s=this){var i;if((t=(i=Jt(this,t,s,0))!==null&&i!==void 0?i:B)===St)return;const o=this._$AH,n=t===B&&o!==B||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==B&&(o===B||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var s,i;typeof this._$AH=="function"?this._$AH.call((i=(s=this.options)===null||s===void 0?void 0:s.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class Ho{constructor(t,s,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Jt(this,t)}}const di=We.litHtmlPolyfillSupport;di==null||di(xe,ze),((fs=We.litHtmlVersions)!==null&&fs!==void 0?fs:We.litHtmlVersions=[]).push("2.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ms,gs;class lt extends qt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,s;const i=super.createRenderRoot();return(t=(s=this.renderOptions).renderBefore)!==null&&t!==void 0||(s.renderBefore=i.firstChild),i}update(t){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Do(s,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return St}}lt.finalized=!0,lt._$litElement$=!0,(ms=globalThis.litElementHydrateSupport)===null||ms===void 0||ms.call(globalThis,{LitElement:lt});const hi=globalThis.litElementPolyfillSupport;hi==null||hi({LitElement:lt});((gs=globalThis.litElementVersions)!==null&&gs!==void 0?gs:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ht=e=>t=>typeof t=="function"?((s,i)=>(customElements.define(s,i),i))(e,t):((s,i)=>{const{kind:o,elements:n}=i;return{kind:o,elements:n,finisher(r){customElements.define(s,r)}}})(e,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vo=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(s){s.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(s){s.createProperty(t.key,e)}};function Oe(e){return(t,s)=>s!==void 0?((i,o,n)=>{o.constructor.createProperty(n,i)})(e,t,s):Vo(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function V(e){return Oe({...e,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jo=({finisher:e,descriptor:t})=>(s,i)=>{var o;if(i===void 0){const n=(o=s.originalKey)!==null&&o!==void 0?o:s.key,r=t!=null?{kind:"method",placement:"prototype",key:n,descriptor:t(s.key)}:{...s,key:n};return e!=null&&(r.finisher=function(c){e(c,n)}),r}{const n=s.constructor;t!==void 0&&Object.defineProperty(s,i,t(i)),e==null||e(n,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Yi(e,t){return jo({descriptor:s=>{const i={get(){var o,n;return(n=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(e))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(t){const o=typeof s=="symbol"?Symbol():"__"+s;i.get=function(){var n,r;return this[o]===void 0&&(this[o]=(r=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(e))!==null&&r!==void 0?r:null),this[o]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var bs;((bs=window.HTMLSlotElement)===null||bs===void 0?void 0:bs.prototype.assignedElements)!=null;var zs="";function Os(e){zs=e}function qo(e=""){if(!zs){const t=[...document.getElementsByTagName("script")],s=t.find(i=>i.hasAttribute("data-shoelace"));if(s)Os(s.getAttribute("data-shoelace"));else{const i=t.find(n=>/shoelace(\.min)?\.js($|\?)/.test(n.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(n.src));let o="";i&&(o=i.getAttribute("src")),Os(o.split("/").slice(0,-1).join("/"))}}return zs.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var Xi=Object.defineProperty,Wo=Object.defineProperties,Ko=Object.getOwnPropertyDescriptor,Zo=Object.getOwnPropertyDescriptors,ui=Object.getOwnPropertySymbols,Go=Object.prototype.hasOwnProperty,Yo=Object.prototype.propertyIsEnumerable,vs=(e,t)=>{if(t=Symbol[e])return t;throw Error("Symbol."+e+" is not defined")},pi=(e,t,s)=>t in e?Xi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Pt=(e,t)=>{for(var s in t||(t={}))Go.call(t,s)&&pi(e,s,t[s]);if(ui)for(var s of ui(t))Yo.call(t,s)&&pi(e,s,t[s]);return e},Le=(e,t)=>Wo(e,Zo(t)),a=(e,t,s,i)=>{for(var o=i>1?void 0:i?Ko(t,s):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(i?r(t,s,o):r(o))||o);return i&&o&&Xi(t,s,o),o},Xo=function(e,t){this[0]=e,this[1]=t},Jo=e=>{var t=e[vs("asyncIterator")],s=!1,i,o={};return t==null?(t=e[vs("iterator")](),i=n=>o[n]=r=>t[n](r)):(t=t.call(e),i=n=>o[n]=r=>{if(s){if(s=!1,n==="throw")throw r;return r}return s=!0,{done:!1,value:new Xo(new Promise(c=>{var l=t[n](r);if(!(l instanceof Object))throw TypeError("Object expected");c(l)}),1)}}),o[vs("iterator")]=()=>o,i("next"),"throw"in t?i("throw"):o.throw=n=>{throw n},"return"in t&&i("return"),o};function Qo(e){return Boolean(e.offsetParent||e.offsetWidth||e.offsetHeight||e.getClientRects().length)}function tn(e){const t=e.tagName.toLowerCase();return e.getAttribute("tabindex")==="-1"||e.hasAttribute("disabled")||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||!Qo(e)||window.getComputedStyle(e).visibility==="hidden"?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(t)}function en(e){var t,s;const i=Ls(e),o=(t=i[0])!=null?t:null,n=(s=i[i.length-1])!=null?s:null;return{start:o,end:n}}function Ls(e){const t=[];function s(i){if(i instanceof Element){if(i.hasAttribute("inert"))return;!t.includes(i)&&tn(i)&&t.push(i);const o=n=>{var r;return((r=n.getRootNode({composed:!0}))==null?void 0:r.host)!==e};i instanceof HTMLSlotElement&&o(i)&&i.assignedElements({flatten:!0}).forEach(n=>{s(n)}),i.shadowRoot!==null&&i.shadowRoot.mode==="open"&&s(i.shadowRoot)}[...i.children].forEach(o=>s(o))}return s(e),t.sort((i,o)=>{const n=Number(i.getAttribute("tabindex"))||0;return(Number(o.getAttribute("tabindex"))||0)-n})}function*Ji(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*Jo(Ji(e.shadowRoot.activeElement))))}function sn(){return[...Ji()].pop()}var ce=[],on=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.checkFocus()},this.handleKeyDown=t=>{var s,i;if(t.key!=="Tab"||this.isExternalActivated)return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward",t.preventDefault();const o=Ls(this.element),n=sn();let r=o.findIndex(l=>l===n);if(r===-1){this.currentFocus=o[0],(s=this.currentFocus)==null||s.focus({preventScroll:!0});return}const c=this.tabDirection==="forward"?1:-1;r+c>=o.length?r=0:r+c<0?r=o.length-1:r+=c,this.currentFocus=o[r],(i=this.currentFocus)==null||i.focus({preventScroll:!0}),setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e}activate(){ce.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){ce=ce.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return ce[ce.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=Ls(this.element);if(!this.element.matches(":focus-within")){const t=e[0],s=e[e.length-1],i=this.tabDirection==="forward"?t:s;typeof(i==null?void 0:i.focus)=="function"&&(this.currentFocus=i,i.focus({preventScroll:!0}))}}}};function nn(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var Ps=new Set;function rn(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function fi(e){if(Ps.add(e),!document.body.classList.contains("sl-scroll-lock")){const t=rn();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function mi(e){Ps.delete(e),Ps.size===0&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scroll-lock-size"))}function ln(e,t,s="vertical",i="smooth"){const o=nn(e,t),n=o.top+t.scrollTop,r=o.left+t.scrollLeft,c=t.scrollLeft,l=t.scrollLeft+t.offsetWidth,d=t.scrollTop,f=t.scrollTop+t.offsetHeight;(s==="horizontal"||s==="both")&&(r<c?t.scrollTo({left:r,behavior:i}):r+e.clientWidth>l&&t.scrollTo({left:r-t.offsetWidth+e.clientWidth,behavior:i})),(s==="vertical"||s==="both")&&(n<d?t.scrollTo({top:n,behavior:i}):n+e.clientHeight>f&&t.scrollTo({top:n-t.offsetHeight+e.clientHeight,behavior:i}))}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const He=globalThis,Hs=He.ShadowRoot&&(He.ShadyCSS===void 0||He.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Vs=Symbol(),gi=new WeakMap;class Qi{constructor(t,s,i){if(this._$cssResult$=!0,i!==Vs)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o;const s=this.t;if(Hs&&t===void 0){const i=s!==void 0&&s.length===1;i&&(t=gi.get(s)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&gi.set(s,t))}return t}toString(){return this.cssText}}const an=e=>new Qi(typeof e=="string"?e:e+"",void 0,Vs),M=(e,...t)=>{const s=e.length===1?e[0]:t.reduce((i,o,n)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1],e[0]);return new Qi(s,e,Vs)},cn=(e,t)=>{if(Hs)e.adoptedStyleSheets=t.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of t){const i=document.createElement("style"),o=He.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=s.cssText,e.appendChild(i)}},bi=Hs?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let s="";for(const i of t.cssRules)s+=i.cssText;return an(s)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:dn,defineProperty:hn,getOwnPropertyDescriptor:un,getOwnPropertyNames:pn,getOwnPropertySymbols:fn,getPrototypeOf:mn}=Object,Ct=globalThis,vi=Ct.trustedTypes,gn=vi?vi.emptyScript:"",ys=Ct.reactiveElementPolyfillSupport,ge=(e,t)=>e,Qt={toAttribute(e,t){switch(t){case Boolean:e=e?gn:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=e!==null;break;case Number:s=e===null?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},js=(e,t)=>!dn(e,t),yi={attribute:!0,type:String,converter:Qt,reflect:!1,hasChanged:js};var Bi,Ni;(Bi=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(Ni=Ct.litPropertyMetadata)!=null||(Ct.litPropertyMetadata=new WeakMap);class Wt extends HTMLElement{static addInitializer(t){var s;this._$Ei(),((s=this.l)!=null?s:this.l=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=yi){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,s);o!==void 0&&hn(this.prototype,t,o)}}static getPropertyDescriptor(t,s,i){var r;const{get:o,set:n}=(r=un(this.prototype,t))!=null?r:{get(){return this[s]},set(c){this[s]=c}};return{get(){return o==null?void 0:o.call(this)},set(c){const l=o==null?void 0:o.call(this);n.call(this,c),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){var s;return(s=this.elementProperties.get(t))!=null?s:yi}static _$Ei(){if(this.hasOwnProperty(ge("elementProperties")))return;const t=mn(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ge("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ge("properties"))){const s=this.properties,i=[...pn(s),...fn(s)];for(const o of i)this.createProperty(o,s[o])}const t=this[Symbol.metadata];if(t!==null){const s=litPropertyMetadata.get(t);if(s!==void 0)for(const[i,o]of s)this.elementProperties.set(i,o)}this._$Eh=new Map;for(const[s,i]of this.elementProperties){const o=this._$Eu(s,i);o!==void 0&&this._$Eh.set(o,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const s=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const o of i)s.unshift(bi(o))}else t!==void 0&&s.push(bi(t));return s}static _$Eu(t,s){const i=s.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(s=>s(this))}addController(t){var s,i;((s=this._$ES)!=null?s:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)==null||i.call(t))}removeController(t){var s;(s=this._$ES)==null||s.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){var s;const t=(s=this.shadowRoot)!=null?s:this.attachShadow(this.constructor.shadowRootOptions);return cn(t,this.constructor.elementStyles),t}connectedCallback(){var t,s;(t=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(s=this._$ES)==null||s.forEach(i=>{var o;return(o=i.hostConnected)==null?void 0:o.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)==null||t.forEach(s=>{var i;return(i=s.hostDisconnected)==null?void 0:i.call(s)})}attributeChangedCallback(t,s,i){this._$AK(t,i)}_$EO(t,s){var n;const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(o!==void 0&&i.reflect===!0){const r=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:Qt).toAttribute(s,i.type);this._$Em=t,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(t,s){var n;const i=this.constructor,o=i._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const r=i.getPropertyOptions(o),c=typeof r.converter=="function"?{fromAttribute:r.converter}:((n=r.converter)==null?void 0:n.fromAttribute)!==void 0?r.converter:Qt;this._$Em=o,this[o]=c.fromAttribute(s,r.type),this._$Em=null}}requestUpdate(t,s,i,o=!1,n){var r;if(t!==void 0){if(i!=null||(i=this.constructor.getPropertyOptions(t)),!((r=i.hasChanged)!=null?r:js)(o?n:this[t],s))return;this.C(t,s,i)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,s,i){var o;this._$AL.has(t)||this._$AL.set(t,s),i.reflect===!0&&this._$Em!==t&&((o=this._$Ej)!=null?o:this._$Ej=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(s){Promise.reject(s)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[n,r]of this._$Ep)this[n]=r;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[n,r]of o)r.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.C(n,this[n],r)}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),(i=this._$ES)==null||i.forEach(o=>{var n;return(n=o.hostUpdate)==null?void 0:n.call(o)}),this.update(s)):this._$ET()}catch(o){throw t=!1,this._$ET(),o}t&&this._$AE(s)}willUpdate(t){}_$AE(t){var s;(s=this._$ES)==null||s.forEach(i=>{var o;return(o=i.hostUpdated)==null?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(s=>this._$EO(s,this[s]))),this._$ET()}updated(t){}firstUpdated(t){}}var Ui;Wt.elementStyles=[],Wt.shadowRootOptions={mode:"open"},Wt[ge("elementProperties")]=new Map,Wt[ge("finalized")]=new Map,ys==null||ys({ReactiveElement:Wt}),((Ui=Ct.reactiveElementVersions)!=null?Ui:Ct.reactiveElementVersions=[]).push("2.0.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const be=globalThis,Ke=be.trustedTypes,wi=Ke?Ke.createPolicy("lit-html",{createHTML:e=>e}):void 0,to="$lit$",kt=`lit$${(Math.random()+"").slice(9)}$`,eo="?"+kt,bn=`<${eo}>`,It=document,$e=()=>It.createComment(""),ke=e=>e===null||typeof e!="object"&&typeof e!="function",so=Array.isArray,vn=e=>so(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",ws=`[ 	
\f\r]`,de=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_i=/-->/g,xi=/>/g,Dt=RegExp(`>|${ws}(?:([^\\s"'>=/]+)(${ws}*=${ws}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$i=/'/g,ki=/"/g,io=/^(?:script|style|textarea|title)$/i,yn=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),x=yn(1),et=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),Ci=new WeakMap,Mt=It.createTreeWalker(It,129);function oo(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return wi!==void 0?wi.createHTML(t):t}const wn=(e,t)=>{const s=e.length-1,i=[];let o,n=t===2?"<svg>":"",r=de;for(let c=0;c<s;c++){const l=e[c];let d,f,h=-1,m=0;for(;m<l.length&&(r.lastIndex=m,f=r.exec(l),f!==null);)m=r.lastIndex,r===de?f[1]==="!--"?r=_i:f[1]!==void 0?r=xi:f[2]!==void 0?(io.test(f[2])&&(o=RegExp("</"+f[2],"g")),r=Dt):f[3]!==void 0&&(r=Dt):r===Dt?f[0]===">"?(r=o!=null?o:de,h=-1):f[1]===void 0?h=-2:(h=r.lastIndex-f[2].length,d=f[1],r=f[3]===void 0?Dt:f[3]==='"'?ki:$i):r===ki||r===$i?r=Dt:r===_i||r===xi?r=de:(r=Dt,o=void 0);const p=r===Dt&&e[c+1].startsWith("/>")?" ":"";n+=r===de?l+bn:h>=0?(i.push(d),l.slice(0,h)+to+l.slice(h)+kt+p):l+kt+(h===-2?c:p)}return[oo(e,n+(e[s]||"<?>")+(t===2?"</svg>":"")),i]};class Ce{constructor({strings:t,_$litType$:s},i){let o;this.parts=[];let n=0,r=0;const c=t.length-1,l=this.parts,[d,f]=wn(t,s);if(this.el=Ce.createElement(d,i),Mt.currentNode=this.el.content,s===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=Mt.nextNode())!==null&&l.length<c;){if(o.nodeType===1){if(o.hasAttributes())for(const h of o.getAttributeNames())if(h.endsWith(to)){const m=f[r++],p=o.getAttribute(h).split(kt),v=/([.?@])?(.*)/.exec(m);l.push({type:1,index:n,name:v[2],strings:p,ctor:v[1]==="."?xn:v[1]==="?"?$n:v[1]==="@"?kn:es}),o.removeAttribute(h)}else h.startsWith(kt)&&(l.push({type:6,index:n}),o.removeAttribute(h));if(io.test(o.tagName)){const h=o.textContent.split(kt),m=h.length-1;if(m>0){o.textContent=Ke?Ke.emptyScript:"";for(let p=0;p<m;p++)o.append(h[p],$e()),Mt.nextNode(),l.push({type:2,index:++n});o.append(h[m],$e())}}}else if(o.nodeType===8)if(o.data===eo)l.push({type:2,index:n});else{let h=-1;for(;(h=o.data.indexOf(kt,h+1))!==-1;)l.push({type:7,index:n}),h+=kt.length-1}n++}}static createElement(t,s){const i=It.createElement("template");return i.innerHTML=t,i}}function te(e,t,s=e,i){var r,c,l;if(t===et)return t;let o=i!==void 0?(r=s._$Co)==null?void 0:r[i]:s._$Cl;const n=ke(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==n&&((c=o==null?void 0:o._$AO)==null||c.call(o,!1),n===void 0?o=void 0:(o=new n(e),o._$AT(e,s,i)),i!==void 0?((l=s._$Co)!=null?l:s._$Co=[])[i]=o:s._$Cl=o),o!==void 0&&(t=te(e,o._$AS(e,t.values),o,i)),t}class _n{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var d;const{el:{content:s},parts:i}=this._$AD,o=((d=t==null?void 0:t.creationScope)!=null?d:It).importNode(s,!0);Mt.currentNode=o;let n=Mt.nextNode(),r=0,c=0,l=i[0];for(;l!==void 0;){if(r===l.index){let f;l.type===2?f=new Pe(n,n.nextSibling,this,t):l.type===1?f=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(f=new Cn(n,this,t)),this._$AV.push(f),l=i[++c]}r!==(l==null?void 0:l.index)&&(n=Mt.nextNode(),r++)}return Mt.currentNode=It,o}p(t){let s=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,s),s+=i.strings.length-2):i._$AI(t[s])),s++}}class Pe{get _$AU(){var t,s;return(s=(t=this._$AM)==null?void 0:t._$AU)!=null?s:this._$Cv}constructor(t,s,i,o){var n;this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=i,this.options=o,this._$Cv=(n=o==null?void 0:o.isConnected)!=null?n:!0}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=te(this,t,s),ke(t)?t===O||t==null||t===""?(this._$AH!==O&&this._$AR(),this._$AH=O):t!==this._$AH&&t!==et&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):vn(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==O&&ke(this._$AH)?this._$AA.nextSibling.data=t:this.$(It.createTextNode(t)),this._$AH=t}g(t){var n;const{values:s,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Ce.createElement(oo(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===o)this._$AH.p(s);else{const r=new _n(o,this),c=r.u(this.options);r.p(s),this.$(c),this._$AH=r}}_$AC(t){let s=Ci.get(t.strings);return s===void 0&&Ci.set(t.strings,s=new Ce(t)),s}T(t){so(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,o=0;for(const n of t)o===s.length?s.push(i=new Pe(this.k($e()),this.k($e()),this,this.options)):i=s[o],i._$AI(n),o++;o<s.length&&(this._$AR(i&&i._$AB.nextSibling,o),s.length=o)}_$AR(t=this._$AA.nextSibling,s){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,s);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var s;this._$AM===void 0&&(this._$Cv=t,(s=this._$AP)==null||s.call(this,t))}}class es{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,i,o,n){this.type=1,this._$AH=O,this._$AN=void 0,this.element=t,this.name=s,this._$AM=o,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=O}_$AI(t,s=this,i,o){const n=this.strings;let r=!1;if(n===void 0)t=te(this,t,s,0),r=!ke(t)||t!==this._$AH&&t!==et,r&&(this._$AH=t);else{const c=t;let l,d;for(t=n[0],l=0;l<n.length-1;l++)d=te(this,c[i+l],s,l),d===et&&(d=this._$AH[l]),r||(r=!ke(d)||d!==this._$AH[l]),d===O?t=O:t!==O&&(t+=(d!=null?d:"")+n[l+1]),this._$AH[l]=d}r&&!o&&this.O(t)}O(t){t===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class xn extends es{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===O?void 0:t}}class $n extends es{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==O)}}class kn extends es{constructor(t,s,i,o,n){super(t,s,i,o,n),this.type=5}_$AI(t,s=this){var r;if((t=(r=te(this,t,s,0))!=null?r:O)===et)return;const i=this._$AH,o=t===O&&i!==O||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==O&&(i===O||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var s,i;typeof this._$AH=="function"?this._$AH.call((i=(s=this.options)==null?void 0:s.host)!=null?i:this.element,t):this._$AH.handleEvent(t)}}class Cn{constructor(t,s,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){te(this,t)}}const _s=be.litHtmlPolyfillSupport;var Hi;_s==null||_s(Ce,Pe),((Hi=be.litHtmlVersions)!=null?Hi:be.litHtmlVersions=[]).push("3.0.2");const Sn=(e,t,s)=>{var n,r;const i=(n=s==null?void 0:s.renderBefore)!=null?n:t;let o=i._$litPart$;if(o===void 0){const c=(r=s==null?void 0:s.renderBefore)!=null?r:null;i._$litPart$=o=new Pe(t.insertBefore($e(),c),c,void 0,s!=null?s:{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ve extends Wt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s,i;const t=super.createRenderRoot();return(i=(s=this.renderOptions).renderBefore)!=null||(s.renderBefore=t.firstChild),t}update(t){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Sn(s,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return et}}var Vi;ve._$litElement$=!0,ve.finalized=!0,(Vi=globalThis.litElementHydrateSupport)==null||Vi.call(globalThis,{LitElement:ve});const xs=globalThis.litElementPolyfillSupport;xs==null||xs({LitElement:ve});var ji;((ji=globalThis.litElementVersions)!=null?ji:globalThis.litElementVersions=[]).push("4.0.1");var N=M`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,An=M`
  ${N}

  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,En=M`
  ${N}

  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,Tn=M`
  ${N}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,zn={name:"default",resolver:e=>qo(`assets/icons/${e}.svg`)},On=zn,Si={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-files" viewBox="0 0 16 16" part="svg">
      <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"></path>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Ln={name:"system",resolver:e=>e in Si?`data:image/svg+xml,${encodeURIComponent(Si[e])}`:""},Pn=Ln,Rn=[On,Pn],Rs=[];function Dn(e){Rs.push(e)}function Fn(e){Rs=Rs.filter(t=>t!==e)}function Ai(e){return Rn.find(t=>t.name===e)}function R(e,t){const s=Pt({waitUntilFirstUpdate:!1},t);return(i,o)=>{const{update:n}=i,r=Array.isArray(e)?e:[e];i.update=function(c){r.forEach(l=>{const d=l;if(c.has(d)){const f=c.get(d),h=this[d];f!==h&&(!s.waitUntilFirstUpdate||this.hasUpdated)&&this[o](f,h)}}),n.call(this,c)}}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mn={attribute:!0,type:String,converter:Qt,reflect:!1,hasChanged:js},In=(e=Mn,t,s)=>{const{kind:i,metadata:o}=s;let n=globalThis.litPropertyMetadata.get(o);if(n===void 0&&globalThis.litPropertyMetadata.set(o,n=new Map),n.set(s.name,e),i==="accessor"){const{name:r}=s;return{set(c){const l=t.get.call(this);t.set.call(this,c),this.requestUpdate(r,l,e)},init(c){return c!==void 0&&this.C(r,void 0,e),c}}}if(i==="setter"){const{name:r}=s;return function(c){const l=this[r];t.call(this,c),this.requestUpdate(r,l,e)}}throw Error("Unsupported decorator location: "+i)};function u(e){return(t,s)=>typeof s=="object"?In(e,t,s):((i,o,n)=>{const r=o.hasOwnProperty(n);return o.constructor.createProperty(n,r?{...i,wrapped:!0}:i),r?Object.getOwnPropertyDescriptor(o,n):void 0})(e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function U(e){return u({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ei=(e,t,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function S(e,t){return(s,i,o)=>{const n=r=>{var c,l;return(l=(c=r.renderRoot)==null?void 0:c.querySelector(e))!=null?l:null};if(t){const{get:r,set:c}=typeof i=="object"?s:o!=null?o:(()=>{const l=Symbol();return{get(){return this[l]},set(d){this[l]=d}}})();return Ei(s,i,{get(){if(t){let l=r.call(this);return l===void 0&&(l=n(this),c.call(this,l)),l}return n(this)}})}return Ei(s,i,{get(){return n(this)}})}}var D=class extends ve{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const s=new CustomEvent(e,Pt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(s),s}static define(e,t=this,s={}){const i=customElements.get(e);if(!i){customElements.define(e,class extends t{},s);return}let o=" (unknown version)",n=o;"version"in t&&t.version&&(o=" v"+t.version),"version"in i&&i.version&&(n=" v"+i.version),!(o&&n&&o===n)&&console.warn(`Attempted to register <${e}>${o}, but <${e}>${n} has already been registered.`)}};D.version="2.11.2";D.dependencies={};a([u()],D.prototype,"dir",2);a([u()],D.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bn=(e,t)=>t===void 0?(e==null?void 0:e._$litType$)!==void 0:(e==null?void 0:e._$litType$)===t,no=e=>e.strings===void 0,Nn={},Un=(e,t=Nn)=>e._$AH=t;var he=Symbol(),Ie=Symbol(),$s,ks=new Map,j=class extends D{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var s;let i;if(t!=null&&t.spriteSheet)return x`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`;try{if(i=await fetch(e,{mode:"cors"}),!i.ok)return i.status===410?he:Ie}catch{return Ie}try{const o=document.createElement("div");o.innerHTML=await i.text();const n=o.firstElementChild;if(((s=n==null?void 0:n.tagName)==null?void 0:s.toLowerCase())!=="svg")return he;$s||($s=new DOMParser);const c=$s.parseFromString(n.outerHTML,"text/html").body.querySelector("svg");return c?(c.part.add("svg"),document.adoptNode(c)):he}catch{return he}}connectedCallback(){super.connectedCallback(),Dn(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Fn(this)}getIconSource(){const e=Ai(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:s}=this.getIconSource(),i=s?Ai(this.library):void 0;if(!t){this.svg=null;return}let o=ks.get(t);if(o||(o=this.resolveIcon(t,i),ks.set(t,o)),!this.initialRender)return;const n=await o;if(n===Ie&&ks.delete(t),t===this.getIconSource().url){if(Bn(n)){this.svg=n;return}switch(n){case Ie:case he:this.svg=null,this.emit("sl-error");break;default:this.svg=n.cloneNode(!0),(e=i==null?void 0:i.mutator)==null||e.call(i,this.svg),this.emit("sl-load")}}}render(){return this.svg}};j.styles=Tn;a([U()],j.prototype,"svg",2);a([u({reflect:!0})],j.prototype,"name",2);a([u()],j.prototype,"src",2);a([u()],j.prototype,"label",2);a([u({reflect:!0})],j.prototype,"library",2);a([R("label")],j.prototype,"handleLabelChange",1);a([R(["name","src","library"])],j.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ss=e=>(...t)=>({_$litDirective$:e,values:t});class is{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,i){this._$Ct=t,this._$AM=s,this._$Ci=i}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K=ss(class extends is{constructor(e){var t;if(super(e),e.type!==vt.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var i,o;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!((i=this.st)!=null&&i.has(n))&&this.it.add(n);return this.render(t)}const s=e.element.classList;for(const n of this.it)n in t||(s.remove(n),this.it.delete(n));for(const n in t){const r=!!t[n];r===this.it.has(n)||((o=this.st)==null?void 0:o.has(n))||(r?(s.add(n),this.it.add(n)):(s.remove(n),this.it.delete(n)))}return et}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ro=Symbol.for(""),Hn=e=>{if((e==null?void 0:e.r)===ro)return e==null?void 0:e._$litStatic$},Ze=(e,...t)=>({_$litStatic$:t.reduce((s,i,o)=>s+(n=>{if(n._$litStatic$!==void 0)return n._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${n}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+e[o+1],e[0]),r:ro}),Ti=new Map,Vn=e=>(t,...s)=>{const i=s.length;let o,n;const r=[],c=[];let l,d=0,f=!1;for(;d<i;){for(l=t[d];d<i&&(n=s[d],(o=Hn(n))!==void 0);)l+=o+t[++d],f=!0;d!==i&&c.push(n),r.push(l),d++}if(d===i&&r.push(t[i]),f){const h=r.join("$$lit$$");(t=Ti.get(h))===void 0&&(r.raw=r,Ti.set(h,t=r)),s=c}return e(t,...s)},Ve=Vn(x);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=e=>e!=null?e:O;var Z=class extends D{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?Ze`a`:Ze`button`;return Ve`
      <${t}
        part="base"
        class=${K({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${P(e?void 0:this.disabled)}
        type=${P(e?void 0:"button")}
        href=${P(e?this.href:void 0)}
        target=${P(e?this.target:void 0)}
        download=${P(e?this.download:void 0)}
        rel=${P(e&&this.target?"noreferrer noopener":void 0)}
        role=${P(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${P(this.name)}
          library=${P(this.library)}
          src=${P(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};Z.styles=En;Z.dependencies={"sl-icon":j};a([S(".icon-button")],Z.prototype,"button",2);a([U()],Z.prototype,"hasFocus",2);a([u()],Z.prototype,"name",2);a([u()],Z.prototype,"library",2);a([u()],Z.prototype,"src",2);a([u()],Z.prototype,"href",2);a([u()],Z.prototype,"target",2);a([u()],Z.prototype,"download",2);a([u()],Z.prototype,"label",2);a([u({type:Boolean,reflect:!0})],Z.prototype,"disabled",2);var lo=new Map,jn=new WeakMap;function qn(e){return e!=null?e:{keyframes:[],options:{duration:0}}}function zi(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function at(e,t){lo.set(e,qn(t))}function nt(e,t,s){const i=jn.get(e);if(i!=null&&i[t])return zi(i[t],s.dir);const o=lo.get(t);return o?zi(o,s.dir):{keyframes:[],options:{duration:0}}}function At(e,t){return new Promise(s=>{function i(o){o.target===e&&(e.removeEventListener(t,i),s())}e.addEventListener(t,i)})}function rt(e,t,s){return new Promise(i=>{if((s==null?void 0:s.duration)===1/0)throw new Error("Promise-based animations must be finite.");const o=e.animate(t,Le(Pt({},s),{duration:Wn()?0:s.duration}));o.addEventListener("cancel",i,{once:!0}),o.addEventListener("finish",i,{once:!0})})}function Wn(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function pt(e){return Promise.all(e.getAnimations().map(t=>new Promise(s=>{const i=requestAnimationFrame(s);t.addEventListener("cancel",()=>i,{once:!0}),t.addEventListener("finish",()=>i,{once:!0}),t.cancel()})))}function Oi(e,t){return e.map(s=>Le(Pt({},s),{height:s.height==="auto"?`${t}px`:s.height}))}var Re=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=s=>{const i=s.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function Kn(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let s="";return[...t].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(s+=i.textContent)}),s}const Ds=new Set,Zn=new MutationObserver(ho),Kt=new Map;let ao=document.documentElement.dir||"ltr",co=document.documentElement.lang||navigator.language,Ft;Zn.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Gn(...e){e.map(t=>{const s=t.$code.toLowerCase();Kt.has(s)?Kt.set(s,Object.assign(Object.assign({},Kt.get(s)),t)):Kt.set(s,t),Ft||(Ft=t)}),ho()}function ho(){ao=document.documentElement.dir||"ltr",co=document.documentElement.lang||navigator.language,[...Ds.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}class Yn{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Ds.add(this.host)}hostDisconnected(){Ds.delete(this.host)}dir(){return`${this.host.dir||ao}`.toLowerCase()}lang(){return`${this.host.lang||co}`.toLowerCase()}getTranslationData(t){var s,i;const o=new Intl.Locale(t.replace(/_/g,"-")),n=o==null?void 0:o.language.toLowerCase(),r=(i=(s=o==null?void 0:o.region)===null||s===void 0?void 0:s.toLowerCase())!==null&&i!==void 0?i:"",c=Kt.get(`${n}-${r}`),l=Kt.get(n);return{locale:o,language:n,region:r,primary:c,secondary:l}}exists(t,s){var i;const{primary:o,secondary:n}=this.getTranslationData((i=s.lang)!==null&&i!==void 0?i:this.lang());return s=Object.assign({includeFallback:!1},s),!!(o&&o[t]||n&&n[t]||s.includeFallback&&Ft&&Ft[t])}term(t,...s){const{primary:i,secondary:o}=this.getTranslationData(this.lang());let n;if(i&&i[t])n=i[t];else if(o&&o[t])n=o[t];else if(Ft&&Ft[t])n=Ft[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof n=="function"?n(...s):n}date(t,s){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),s).format(t)}number(t,s){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),s).format(t)}relativeTime(t,s,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(t,s)}}var wt=class extends Yn{},mt=class extends D{constructor(){super(...arguments),this.hasSlotController=new Re(this,"footer"),this.localize=new wt(this),this.modal=new on(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),fi(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),mi(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const s=nt(this,"dialog.denyClose",{dir:this.localize.dir()});rt(this.panel,s.keyframes,s.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),fi(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([pt(this.dialog),pt(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=nt(this,"dialog.show",{dir:this.localize.dir()}),s=nt(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([rt(this.panel,t.keyframes,t.options),rt(this.overlay,s.keyframes,s.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([pt(this.dialog),pt(this.overlay)]);const e=nt(this,"dialog.hide",{dir:this.localize.dir()}),t=nt(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([rt(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),rt(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,mi(this);const s=this.originalTrigger;typeof(s==null?void 0:s.focus)=="function"&&setTimeout(()=>s.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,At(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,At(this,"sl-after-hide")}render(){return x`
      <div
        part="base"
        class=${K({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${P(this.noHeader?this.label:void 0)}
          aria-labelledby=${P(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":x`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <slot part="body" class="dialog__body" tabindex="-1"></slot>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};mt.styles=An;mt.dependencies={"sl-icon-button":Z};a([S(".dialog")],mt.prototype,"dialog",2);a([S(".dialog__panel")],mt.prototype,"panel",2);a([S(".dialog__overlay")],mt.prototype,"overlay",2);a([u({type:Boolean,reflect:!0})],mt.prototype,"open",2);a([u({reflect:!0})],mt.prototype,"label",2);a([u({attribute:"no-header",type:Boolean,reflect:!0})],mt.prototype,"noHeader",2);a([R("open",{waitUntilFirstUpdate:!0})],mt.prototype,"handleOpenChange",1);at("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});at("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});at("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});at("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});at("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});mt.define("sl-dialog");var Xn={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Gn(Xn);class Fs{constructor(){this.eventHandlers=new Map}fire(t,s){const i=this.eventHandlers.get(t);if(i&&i.length)for(const o of i)o(s)}add(t,s){let i=this.eventHandlers.get(t);i||(i=[],this.eventHandlers.set(t,i)),i.push(s)}remove(t,s){const i=this.eventHandlers.get(t);if(i)for(let o=0;o<i.length;o++)i[o]===s&&(i.splice(o,1),o--)}}class b{constructor(){this._eventDispatcher=new Fs,localStorage.getItem("notepadSettings")||(this.theme="system",this.font={family:"times_new_roman",style:"regular",size:11},this.wrap=!0,this.open_behavior=!0,this.start_behavior=!0,this.zoom=100,this.displayFontSize=11,this.showingStatusBar=!0,this.matchCaseForSearchResult=!1,this.wrapSearchResults=!0)}static get instance(){if(!this._instance){let t=localStorage.getItem("notepadSettings");if(t){let s=JSON.parse(t);this._instance=new b,Object.assign(this._instance,s),this._instance._eventDispatcher=new Fs}else this._instance=new b}return this._instance}on(t,s){this._eventDispatcher.add(t,s)}removeListener(t,s){this._eventDispatcher.remove(t,s)}writeSettings(){localStorage.setItem("notepadSettings",JSON.stringify(this))}get theme(){return this._theme}set theme(t){this._theme!==t&&(this._theme=t,this.writeSettings(),this._eventDispatcher.fire(tt.themeChanged))}get font(){return this._font}set font(t){this._font=t,this.displayFontSize=this._font.size*(this._zoom/100),this.writeSettings(),this._eventDispatcher.fire(tt.settingsChanged)}get wrap(){return this._wrap}set wrap(t){this._wrap=t,this.writeSettings(),this._eventDispatcher.fire(tt.settingsChanged)}get open_behavior(){return this._open_behavior}set open_behavior(t){this._open_behavior=t,this.writeSettings(),this._eventDispatcher.fire(tt.settingsChanged)}get start_behavior(){return this._start_behavior}set start_behavior(t){this._start_behavior=t,this.writeSettings(),this._eventDispatcher.fire(tt.settingsChanged)}get zoom(){return this._zoom}set zoom(t){this._zoom=Math.max(10,Math.min(t,500)),this.displayFontSize=this._zoom/100*this._font.size,this._eventDispatcher.fire(tt.zoomChanged)}get displayFontSize(){return this._displayFontSize}set displayFontSize(t){this._displayFontSize=t,this._eventDispatcher.fire(tt.settingsChanged)}get showingStatusBar(){return this._showingStatusBar}set showingStatusBar(t){this._showingStatusBar=t,this._eventDispatcher.fire(tt.showingStatusBarChanged)}get wrapSearchResults(){return this._wrapSearchResults}set wrapSearchResults(t){this._wrapSearchResults=t}get matchCaseForSearchResult(){return this._matchCaseForSearchResult}set matchCaseForSearchResult(t){this._matchCaseForSearchResult=t,this.writeSettings(),g.instance.selection&&g.instance.selection.removeAllRanges(),g.instance.substringToFind.length>0&&g.instance.findSubstringPositions(g.instance.substringToFind)}}const tt={themeChanged:"settings-theme-changed",settingsChanged:"settings-changed",zoomChanged:"zoom-changed",showingStatusBarChanged:"showing-status-bar-changed",matchCaseSettingChanged:"match-case-setting-changed"};class g{constructor(){this._eventDispatcher=new Fs,this._cursorPosition={start:1,end:1,line:1},this._encoding="UTF-8",this._fileEnding="Windows (CRLF)",this._substringToFind="",this._findListIndex=0,this._findPositions=[]}static get instance(){return this._instance||(this._instance=new g),this._instance}on(t,s){this._eventDispatcher.add(t,s)}removeListener(t,s){this._eventDispatcher.remove(t,s)}writeSettings(t,s){localStorage.setItem(`${t}-state-setting`,JSON.stringify(s))}get isDirty(){return(this.fileContents||"")!==this.editorContents}get fileContents(){return this._fileContents}set fileContents(t){this._fileContents=t,this._eventDispatcher.fire(E.fileChanged)}get editorContents(){return this._editorContents}set editorContents(t){this._editorContents=t,localStorage.setItem("lastSession",encodeURIComponent(this._editorContents)),this._eventDispatcher.fire(E.editorChanged)}get cursorPosition(){return this._cursorPosition}set cursorPosition(t){this._cursorPosition=t,this._eventDispatcher.fire(E.cursorPositionChanged)}get selection(){return this._selection}set selection(t){this._selection=t}get editorDiv(){return this._editorDiv}set editorDiv(t){this._editorDiv=t}get encoding(){return this._encoding}set encoding(t){this._encoding=t,this._eventDispatcher.fire(E.encodingChanged)}getEncoding(t){const s=new FileReader,i=[239,187,191],o=t.slice(0,i.length);s.onloadend=n=>{const r=new Uint8Array(n.target.result);let c=!0;for(let l=0;l<i.length;l++)if(r[l]!==i[l]){c=!1;break}c?this.encoding="UTF-8 with BOM":this.encoding="UTF-8"},s.onerror=()=>{console.log("Error reading the file")},s.readAsArrayBuffer(o)}get fileEnding(){return this._fileEnding}set fileEnding(t){this._fileEnding=t,this._eventDispatcher.fire(E.fileEndingChanged)}getCarraigeReturn(t){const s=new FileReader;s.onload=()=>{const i=s.result;if(i){const o=new TextDecoder("utf-8").decode(i),n=o.includes(`\r
`),r=o.includes(`
`),c=o.includes("\r")&&!o.includes(`
`);n?this.fileEnding="Windows (CRLF)":r?this.fileEnding="Unix (LF)":c?this.fileEnding="Macintosh (CR)":this.fileEnding="Windows (CRLF)"}else console.error("Buffer is null")},s.onerror=()=>{console.error("Error reading file:",s.error)},s.readAsArrayBuffer(t)}async setFileHandle(t){try{const s=await t.getFile();return this.getCarraigeReturn(s),this.getEncoding(s),this.fileName=t.name,this.fileContents=await s.text(),this.fileHandle=t,!0}catch{this.fileHandle=void 0,this.fileContents=void 0,this.fileName=void 0}return!1}newFile(t=!1){if(!t&&this.isDirty){this.handleAboutToLoseChanges("new");return}this.fileHandle=void 0,this.fileName=void 0,this.fileContents=void 0}async openFile(t=!1){if(!t&&this.isDirty)return this.handleAboutToLoseChanges("open"),!1;try{const s={types:[{description:"Text Files",accept:{"text/plain":[".txt",".bat",".ini",".log"],"text/html":[".html"],"text/css":[".css"],"application/javascript":[".js"],"application/xml":[".xml"],"text/markdown":[".md"]}}]},i=await window.showOpenFilePicker(s),o=i.length?i[0]:null;return o?this.setFileHandle(o):!1}catch{}return!1}async saveFile(){if(!this.fileHandle)return this.saveAsFile();try{const t=await this.fileHandle.createWritable();return await t.write(this.editorContents||""),await t.close(),this.fileContents=this.editorContents,!0}catch{}return!1}async saveAsFile(){const t={types:[{description:"Text Files",accept:{"text/plain":[".txt"]}}]};try{const s=await window.showSaveFilePicker(t);if(s){this.fileHandle=s,this.fileName=s.name;const i=await this.fileHandle.createWritable();return await i.write(this.editorContents||""),await i.close(),this.fileContents=this.editorContents,!0}}catch{}return!1}handleAboutToLoseChanges(t){this._eventDispatcher.fire(E.decideOnChanges,t)}async cut(){const s=this._selection.toString();navigator.clipboard.writeText(s).then(()=>{document.execCommand("cut")}).catch(i=>{console.error("Failed to cut text: ",i)}),this._eventDispatcher.fire(E.insertedText)}async copy(){const s=this._selection.toString();navigator.clipboard.writeText(s).then(()=>{}).catch(i=>{console.error("Failed to copy text: ",i)})}async paste(){const t=this._selection;navigator.clipboard.readText().then(s=>{if(s){if(!t.rangeCount)return!1;t.deleteFromDocument(),t.getRangeAt(0).insertNode(document.createTextNode(s)),t.collapseToEnd()}this._eventDispatcher.fire(E.insertedText)})}async delete(){const t=this._selection;t.deleteFromDocument(),t.removeAllRanges(),this._eventDispatcher.fire(E.insertedText)}selectAll(){var t=document.createRange();t.selectNodeContents(this._editorDiv);var s=this._selection;s.removeAllRanges(),s.addRange(t)}async insertTimeDate(){const t=this._selection,s=this.getCurrentDateTimeFormatted(),i=t.getRangeAt(0),o=document.createTextNode(s);i.deleteContents(),i.insertNode(o),i.setStartAfter(o),i.collapse(!0),t.removeAllRanges(),t.addRange(i),this._eventDispatcher.fire(E.insertedText)}getCurrentDateTimeFormatted(){const t=new Date,s=t.getHours().toString().padStart(2,"0"),i=t.getMinutes().toString().padStart(2,"0"),o=(t.getMonth()+1).toString().padStart(2,"0"),n=t.getDate().toString().padStart(2,"0"),r=t.getFullYear();return`${s}:${i} ${o}/${n}/${r}`}get substringToFind(){return this._substringToFind}set substringToFind(t){this._substringToFind=t,this.writeSettings("search-string",this._substringToFind),this._findListIndex=0,this.findSubstringPositions(this.substringToFind)}get findPositions(){return this._findPositions}set findPositions(t){this._findPositions=t}findSubstringPositions(t){let s=0,i=[];const o=b.instance.matchCaseForSearchResult?t:t.toLowerCase(),n=b.instance.matchCaseForSearchResult?this._editorContents:this._editorContents.toLowerCase();for(;s<n.length;){let r=n.indexOf(o,s);if(r===-1)break;let c=r+o.length;i.push({startIndex:r,endIndex:c}),s=r+1}this._findPositions=i}search(t){const s=this._editorDiv;if(!s||this.findPositions.length==0)return;const{startIndex:i,endIndex:o}=this.findPositions[t];let n=0,r=null,c=0,l=null,d=0;const f=h=>{h.childNodes.forEach(m=>{if(m.nodeType===Node.TEXT_NODE){const p=m.textContent.length;!r&&n+p>=i&&(r=m,c=i-n),!l&&n+p>=o&&(l=m,d=o-n),n+=p}else m.nodeType===Node.ELEMENT_NODE&&((m.nodeName==="BR"||m.nodeName==="DIV"||m.nodeName==="P")&&n++,f(m))})};if(f(s),r&&l){const h=document.createRange(),m=this._selection;try{h.setStart(r,c),h.setEnd(l,d),m.removeAllRanges(),m.addRange(h);let p=document.createElement("span");h.insertNode(p),p.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"}),p.parentNode.removeChild(p)}catch(p){console.error("Error setting range:",p)}}}get findListIndex(){return this._findListIndex}set findListIndex(t){t<0&&(b.instance.wrapSearchResults?t=this._findPositions.length-1:t=0),t>=this._findPositions.length&&(b.instance.wrapSearchResults?t=0:t=this._findPositions.length-1),this._findListIndex=t,this.findPositions.length>0&&this.search(this.findListIndex)}replace(t){if(this.substringToFind.length==0)return;const s=this.selection;if(this.search(this.findListIndex),s&&s.rangeCount>0){const i=s.getRangeAt(0);i.deleteContents(),i.insertNode(document.createTextNode(t))}this.findListIndex++,this.search(this.findListIndex),this._eventDispatcher.fire(E.insertedText)}replaceAll(t){if(this.substringToFind.length==0||this.findPositions.length==0)return;this.findListIndex=0;const s=this.selection;for(let i=0;i<this.findPositions.length;i++){this.search(i);const o=s.getRangeAt(0);o.deleteContents(),o.insertNode(document.createTextNode(t))}this._eventDispatcher.fire(E.insertedText)}print(){var t=this.editorContents,s=document.createElement("iframe");s.style.display="none",document.body.appendChild(s);var i=s.contentDocument;i.open(),i.write("<html><head><title>Print</title></head><body><pre>"+t+"</pre></body></html>"),i.close(),s.contentWindow.print(),s.parentNode.removeChild(s)}}const E={fileChanged:"notepad-file-changed",editorChanged:"notepad-editor-contents-changed",decideOnChanges:"notepad-need-to-decide-on-changes",cursorPositionChanged:"cursor-position-changed",encodingChanged:"encoding-changed",fileEndingChanged:"file-ending-changed",insertedText:"insert-text-to-editor",findSubstringChanged:"find-substring-changed",showFindInput:"show-find-input"};var Jn=Object.defineProperty,Qn=Object.getOwnPropertyDescriptor,os=(e,t,s,i)=>{for(var o=i>1?void 0:i?Qn(t,s):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(i?r(t,s,o):r(o))||o);return i&&o&&Jn(t,s,o),o};let Se=class extends lt{constructor(){super(),this.title="Untitled",this.settingsShowing=!1,this.edited=!1,this.onFileChangedHandler=this.updateTitle.bind(this),g.instance.on(E.fileChanged,this.onFileChangedHandler),g.instance.on(E.editorChanged,this.onFileChangedHandler)}static get styles(){return Ut`
      :host {
        display: block;
        width: env(titlebar-area-width, 100%);
        min-height: env(titlebar-area-height, 33px);
      }

     .root {
        position: fixed;

        left: env(titlebar-area-x, 0);
        top: env(titlebar-area-y, 0);
        width: env(titlebar-area-width, 100%);
        height: env(titlebar-area-height, 33px);
        app-region: drag;

        background: var(--settings-background);
        color: var(--text-color);
        display: flex;
        flex-direction: row;
        align-items: center;
        font-family: Segoe UI Variable Text, Segoe UI, SegoeUI, Helvetica Neue, Helvetica, Arial, sans-serif;
    }

    .root img {
      margin-left: 14px;
      height: 18px;
      width: 18px;
    }

    .root label {
      font-size: 12px;
      margin-left: 16px;
    }

    #back-button {
      background-color: transparent;
      border: none;
      margin-left: 5px;
      padding: 3px 5px;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      app-region: no-drag;
    }
    #back-button:hover {
        background-color: var(--back-button-hover-color);
      }

      sl-icon {
        color: var(--text-color);
      }

      .tab {
        box-sizing: border-box;
        background-color: var(--menu-background-color);
        height: 85%;
        align-self: flex-end;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 235px;
        padding: 10px;
        padding-right: 5px;

      }

      .tab h1 {
        all: unset;
      }

      .indicators {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        border-radius: 4px;
        box-sizing: border-box;
        font-size: 16px;
        height: 30px;
        width: 30px;
      }

      .edited-icon {
        font-size: 24px;
        color: #a0a0a0;
      }

      sl-icon {
        border-radius: 4px;
      }

      sl-icon:hover {
        background-color: var(--menu-button-hover-background-color);
      }



    `}connectedCallback(){super.connectedCallback(),this.updateTitle()}disconnectedCallback(){g.instance.removeListener(E.fileChanged,this.onFileChangedHandler),g.instance.removeListener(E.editorChanged,this.onFileChangedHandler)}updateTitle(){this.title=g.instance.fileName||"Untitled",this.edited=g.instance.isDirty,document.title=this.title,this.requestUpdate()}backToEditor(){const e=new CustomEvent("showEditor",{bubbles:!0});this.dispatchEvent(e)}render(){return T`
      <div class="root">
        ${this.settingsShowing?T`
            <button id="back-button" type="button" @click=${()=>this.backToEditor()}><sl-icon name="arrow-left"></sl-icon></button>
          `:null}
        <img src="/assets/icons/Square44x44Logo.scale-100.png" alt="Notepad logo" />
        ${this.settingsShowing?T`
          <label>
            Notepad
          </label>
          `:T`
          <label class="tab">
            <h1>${this.title}</h1>
            <div class="indicators">
              ${this.edited?T`<sl-icon name="dot" label="dot" class="edited-icon"></sl-icon>`:T`<sl-icon name="x" label="x" class="close-icon"></sl-icon>`}
            </div>
          </label>
          `}


      </div>
    `}};os([Oe()],Se.prototype,"title",2);os([Oe({type:Boolean})],Se.prototype,"settingsShowing",2);os([V()],Se.prototype,"edited",2);Se=os([Ht("app-header")],Se);var tr=M`
  ${N}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`,uo=class extends D{constructor(){super(...arguments),this.localize=new wt(this)}render(){return x`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};uo.styles=tr;var ue=new WeakMap,pe=new WeakMap,Cs=new WeakSet,Be=new WeakMap,ns=class{constructor(e,t){this.handleFormData=s=>{const i=this.options.disabled(this.host),o=this.options.name(this.host),n=this.options.value(this.host),r=this.host.tagName.toLowerCase()==="sl-button";!i&&!r&&typeof o=="string"&&o.length>0&&typeof n<"u"&&(Array.isArray(n)?n.forEach(c=>{s.formData.append(o,c.toString())}):s.formData.append(o,n.toString()))},this.handleFormSubmit=s=>{var i;const o=this.options.disabled(this.host),n=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=ue.get(this.form))==null||i.forEach(r=>{this.setUserInteracted(r,!0)})),this.form&&!this.form.noValidate&&!o&&!n(this.host)&&(s.preventDefault(),s.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Be.set(this.host,[])},this.handleInteraction=s=>{const i=Be.get(this.host);i.includes(s.type)||i.push(s.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const s=this.form.querySelectorAll("*");for(const i of s)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=Pt({form:s=>{if(s.hasAttribute("form")&&s.getAttribute("form")!==""){const i=s.getRootNode(),o=s.getAttribute("form");if(o)return i.getElementById(o)}return s.closest("form")},name:s=>s.name,value:s=>s.value,defaultValue:s=>s.defaultValue,disabled:s=>{var i;return(i=s.disabled)!=null?i:!1},reportValidity:s=>typeof s.reportValidity=="function"?s.reportValidity():!0,setValue:(s,i)=>s.value=i,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),Be.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Be.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,ue.has(this.form)?ue.get(this.form).add(this.host):ue.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),pe.has(this.form)||(pe.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var e;this.form&&((e=ue.get(this.form))==null||e.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),pe.has(this.form)&&(this.form.reportValidity=pe.get(this.form),pe.delete(this.form))),this.form=void 0}setUserInteracted(e,t){t?Cs.add(e):Cs.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const s=document.createElement("button");s.type=e,s.style.position="absolute",s.style.width="0",s.style.height="0",s.style.clipPath="inset(50%)",s.style.overflow="hidden",s.style.whiteSpace="nowrap",t&&(s.name=t.name,s.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{t.hasAttribute(i)&&s.setAttribute(i,t.getAttribute(i))})),this.form.append(s),s.click(),s.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,s=Boolean(Cs.has(t)),i=Boolean(t.required);t.toggleAttribute("data-required",i),t.toggleAttribute("data-optional",!i),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&s),t.toggleAttribute("data-user-valid",e&&s)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},rs=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),er=Object.freeze(Le(Pt({},rs),{valid:!1,valueMissing:!0})),sr=Object.freeze(Le(Pt({},rs),{valid:!1,customError:!0})),ir=M`
  ${N}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      .sl-button-group__button:not(
          .sl-button-group__button--first,
          .sl-button-group__button--radio,
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,k=class extends D{constructor(){super(...arguments),this.formControlController=new ns(this,{form:e=>{if(e.hasAttribute("form")){const t=e.getRootNode(),s=e.getAttribute("form");return t.getElementById(s)}return e.closest("form")},assumeInteractionOn:["click"]}),this.hasSlotController=new Re(this,"[default]","prefix","suffix"),this.localize=new wt(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:rs}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?Ze`a`:Ze`button`;return Ve`
      <${t}
        part="base"
        class=${K({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${P(e?void 0:this.disabled)}
        type=${P(e?void 0:this.type)}
        title=${this.title}
        name=${P(e?void 0:this.name)}
        value=${P(e?void 0:this.value)}
        href=${P(e?this.href:void 0)}
        target=${P(e?this.target:void 0)}
        download=${P(e?this.download:void 0)}
        rel=${P(e?this.rel:void 0)}
        role=${P(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Ve` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Ve`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};k.styles=ir;k.dependencies={"sl-icon":j,"sl-spinner":uo};a([S(".button")],k.prototype,"button",2);a([U()],k.prototype,"hasFocus",2);a([U()],k.prototype,"invalid",2);a([u()],k.prototype,"title",2);a([u({reflect:!0})],k.prototype,"variant",2);a([u({reflect:!0})],k.prototype,"size",2);a([u({type:Boolean,reflect:!0})],k.prototype,"caret",2);a([u({type:Boolean,reflect:!0})],k.prototype,"disabled",2);a([u({type:Boolean,reflect:!0})],k.prototype,"loading",2);a([u({type:Boolean,reflect:!0})],k.prototype,"outline",2);a([u({type:Boolean,reflect:!0})],k.prototype,"pill",2);a([u({type:Boolean,reflect:!0})],k.prototype,"circle",2);a([u()],k.prototype,"type",2);a([u()],k.prototype,"name",2);a([u()],k.prototype,"value",2);a([u()],k.prototype,"href",2);a([u()],k.prototype,"target",2);a([u()],k.prototype,"rel",2);a([u()],k.prototype,"download",2);a([u()],k.prototype,"form",2);a([u({attribute:"formaction"})],k.prototype,"formAction",2);a([u({attribute:"formenctype"})],k.prototype,"formEnctype",2);a([u({attribute:"formmethod"})],k.prototype,"formMethod",2);a([u({attribute:"formnovalidate",type:Boolean})],k.prototype,"formNoValidate",2);a([u({attribute:"formtarget"})],k.prototype,"formTarget",2);a([R("disabled",{waitUntilFirstUpdate:!0})],k.prototype,"handleDisabledChange",1);k.define("sl-button");j.define("sl-icon");var or=M`
  ${N}

  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,nr=M`
  ${N}

  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }
`;const Et=Math.min,X=Math.max,Ge=Math.round,Ne=Math.floor,Tt=e=>({x:e,y:e}),rr={left:"right",right:"left",bottom:"top",top:"bottom"},lr={start:"end",end:"start"};function Ms(e,t,s){return X(e,Et(t,s))}function se(e,t){return typeof e=="function"?e(t):e}function zt(e){return e.split("-")[0]}function ie(e){return e.split("-")[1]}function po(e){return e==="x"?"y":"x"}function qs(e){return e==="y"?"height":"width"}function De(e){return["top","bottom"].includes(zt(e))?"y":"x"}function Ws(e){return po(De(e))}function ar(e,t,s){s===void 0&&(s=!1);const i=ie(e),o=Ws(e),n=qs(o);let r=o==="x"?i===(s?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(r=Ye(r)),[r,Ye(r)]}function cr(e){const t=Ye(e);return[Is(e),t,Is(t)]}function Is(e){return e.replace(/start|end/g,t=>lr[t])}function dr(e,t,s){const i=["left","right"],o=["right","left"],n=["top","bottom"],r=["bottom","top"];switch(e){case"top":case"bottom":return s?t?o:i:t?i:o;case"left":case"right":return t?n:r;default:return[]}}function hr(e,t,s,i){const o=ie(e);let n=dr(zt(e),s==="start",i);return o&&(n=n.map(r=>r+"-"+o),t&&(n=n.concat(n.map(Is)))),n}function Ye(e){return e.replace(/left|right|bottom|top/g,t=>rr[t])}function ur(e){return{top:0,right:0,bottom:0,left:0,...e}}function fo(e){return typeof e!="number"?ur(e):{top:e,right:e,bottom:e,left:e}}function Xe(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Li(e,t,s){let{reference:i,floating:o}=e;const n=De(t),r=Ws(t),c=qs(r),l=zt(t),d=n==="y",f=i.x+i.width/2-o.width/2,h=i.y+i.height/2-o.height/2,m=i[c]/2-o[c]/2;let p;switch(l){case"top":p={x:f,y:i.y-o.height};break;case"bottom":p={x:f,y:i.y+i.height};break;case"right":p={x:i.x+i.width,y:h};break;case"left":p={x:i.x-o.width,y:h};break;default:p={x:i.x,y:i.y}}switch(ie(t)){case"start":p[r]-=m*(s&&d?-1:1);break;case"end":p[r]+=m*(s&&d?-1:1);break}return p}const pr=async(e,t,s)=>{const{placement:i="bottom",strategy:o="absolute",middleware:n=[],platform:r}=s,c=n.filter(Boolean),l=await(r.isRTL==null?void 0:r.isRTL(t));let d=await r.getElementRects({reference:e,floating:t,strategy:o}),{x:f,y:h}=Li(d,i,l),m=i,p={},v=0;for(let y=0;y<c.length;y++){const{name:$,fn:w}=c[y],{x:C,y:z,data:I,reset:L}=await w({x:f,y:h,initialPlacement:i,placement:m,strategy:o,middlewareData:p,rects:d,platform:r,elements:{reference:e,floating:t}});if(f=C!=null?C:f,h=z!=null?z:h,p={...p,[$]:{...p[$],...I}},L&&v<=50){v++,typeof L=="object"&&(L.placement&&(m=L.placement),L.rects&&(d=L.rects===!0?await r.getElementRects({reference:e,floating:t,strategy:o}):L.rects),{x:f,y:h}=Li(d,m,l)),y=-1;continue}}return{x:f,y:h,placement:m,strategy:o,middlewareData:p}};async function Ks(e,t){var s;t===void 0&&(t={});const{x:i,y:o,platform:n,rects:r,elements:c,strategy:l}=e,{boundary:d="clippingAncestors",rootBoundary:f="viewport",elementContext:h="floating",altBoundary:m=!1,padding:p=0}=se(t,e),v=fo(p),$=c[m?h==="floating"?"reference":"floating":h],w=Xe(await n.getClippingRect({element:(s=await(n.isElement==null?void 0:n.isElement($)))==null||s?$:$.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(c.floating)),boundary:d,rootBoundary:f,strategy:l})),C=h==="floating"?{...r.floating,x:i,y:o}:r.reference,z=await(n.getOffsetParent==null?void 0:n.getOffsetParent(c.floating)),I=await(n.isElement==null?void 0:n.isElement(z))?await(n.getScale==null?void 0:n.getScale(z))||{x:1,y:1}:{x:1,y:1},L=Xe(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({rect:C,offsetParent:z,strategy:l}):C);return{top:(w.top-L.top+v.top)/I.y,bottom:(L.bottom-w.bottom+v.bottom)/I.y,left:(w.left-L.left+v.left)/I.x,right:(L.right-w.right+v.right)/I.x}}const fr=e=>({name:"arrow",options:e,async fn(t){const{x:s,y:i,placement:o,rects:n,platform:r,elements:c,middlewareData:l}=t,{element:d,padding:f=0}=se(e,t)||{};if(d==null)return{};const h=fo(f),m={x:s,y:i},p=Ws(o),v=qs(p),y=await r.getDimensions(d),$=p==="y",w=$?"top":"left",C=$?"bottom":"right",z=$?"clientHeight":"clientWidth",I=n.reference[v]+n.reference[p]-m[p]-n.floating[v],L=m[p]-n.reference[p],F=await(r.getOffsetParent==null?void 0:r.getOffsetParent(d));let G=F?F[z]:0;(!G||!await(r.isElement==null?void 0:r.isElement(F)))&&(G=c.floating[z]||n.floating[v]);const dt=I/2-L/2,xt=G/2-y[v]/2-1,ne=Et(h[w],xt),re=Et(h[C],xt),Q=ne,le=G-y[v]-re,Y=G/2-y[v]/2+dt,ht=Ms(Q,Y,le),ut=!l.arrow&&ie(o)!=null&&Y!=ht&&n.reference[v]/2-(Y<Q?ne:re)-y[v]/2<0,bt=ut?Y<Q?Y-Q:Y-le:0;return{[p]:m[p]+bt,data:{[p]:ht,centerOffset:Y-ht-bt,...ut&&{alignmentOffset:bt}},reset:ut}}}),mr=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var s,i;const{placement:o,middlewareData:n,rects:r,initialPlacement:c,platform:l,elements:d}=t,{mainAxis:f=!0,crossAxis:h=!0,fallbackPlacements:m,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:y=!0,...$}=se(e,t);if((s=n.arrow)!=null&&s.alignmentOffset)return{};const w=zt(o),C=zt(c)===c,z=await(l.isRTL==null?void 0:l.isRTL(d.floating)),I=m||(C||!y?[Ye(c)]:cr(c));!m&&v!=="none"&&I.push(...hr(c,y,v,z));const L=[c,...I],F=await Ks(t,$),G=[];let dt=((i=n.flip)==null?void 0:i.overflows)||[];if(f&&G.push(F[w]),h){const Q=ar(o,r,z);G.push(F[Q[0]],F[Q[1]])}if(dt=[...dt,{placement:o,overflows:G}],!G.every(Q=>Q<=0)){var xt,ne;const Q=(((xt=n.flip)==null?void 0:xt.index)||0)+1,le=L[Q];if(le)return{data:{index:Q,overflows:dt},reset:{placement:le}};let Y=(ne=dt.filter(ht=>ht.overflows[0]<=0).sort((ht,ut)=>ht.overflows[1]-ut.overflows[1])[0])==null?void 0:ne.placement;if(!Y)switch(p){case"bestFit":{var re;const ht=(re=dt.map(ut=>[ut.placement,ut.overflows.filter(bt=>bt>0).reduce((bt,Eo)=>bt+Eo,0)]).sort((ut,bt)=>ut[1]-bt[1])[0])==null?void 0:re[0];ht&&(Y=ht);break}case"initialPlacement":Y=c;break}if(o!==Y)return{reset:{placement:Y}}}return{}}}};async function gr(e,t){const{placement:s,platform:i,elements:o}=e,n=await(i.isRTL==null?void 0:i.isRTL(o.floating)),r=zt(s),c=ie(s),l=De(s)==="y",d=["left","top"].includes(r)?-1:1,f=n&&l?-1:1,h=se(t,e);let{mainAxis:m,crossAxis:p,alignmentAxis:v}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...h};return c&&typeof v=="number"&&(p=c==="end"?v*-1:v),l?{x:p*f,y:m*d}:{x:m*d,y:p*f}}const br=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:s,y:i}=t,o=await gr(t,e);return{x:s+o.x,y:i+o.y,data:o}}}},vr=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:s,y:i,placement:o}=t,{mainAxis:n=!0,crossAxis:r=!1,limiter:c={fn:$=>{let{x:w,y:C}=$;return{x:w,y:C}}},...l}=se(e,t),d={x:s,y:i},f=await Ks(t,l),h=De(zt(o)),m=po(h);let p=d[m],v=d[h];if(n){const $=m==="y"?"top":"left",w=m==="y"?"bottom":"right",C=p+f[$],z=p-f[w];p=Ms(C,p,z)}if(r){const $=h==="y"?"top":"left",w=h==="y"?"bottom":"right",C=v+f[$],z=v-f[w];v=Ms(C,v,z)}const y=c.fn({...t,[m]:p,[h]:v});return{...y,data:{x:y.x-s,y:y.y-i}}}}},Pi=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:s,rects:i,platform:o,elements:n}=t,{apply:r=()=>{},...c}=se(e,t),l=await Ks(t,c),d=zt(s),f=ie(s),h=De(s)==="y",{width:m,height:p}=i.floating;let v,y;d==="top"||d==="bottom"?(v=d,y=f===(await(o.isRTL==null?void 0:o.isRTL(n.floating))?"start":"end")?"left":"right"):(y=d,v=f==="end"?"top":"bottom");const $=p-l[v],w=m-l[y],C=!t.middlewareData.shift;let z=$,I=w;if(h){const F=m-l.left-l.right;I=f||C?Et(w,F):F}else{const F=p-l.top-l.bottom;z=f||C?Et($,F):F}if(C&&!f){const F=X(l.left,0),G=X(l.right,0),dt=X(l.top,0),xt=X(l.bottom,0);h?I=m-2*(F!==0||G!==0?F+G:X(l.left,l.right)):z=p-2*(dt!==0||xt!==0?dt+xt:X(l.top,l.bottom))}await r({...t,availableWidth:I,availableHeight:z});const L=await o.getDimensions(n.floating);return m!==L.width||p!==L.height?{reset:{rects:!0}}:{}}}};function Ot(e){return mo(e)?(e.nodeName||"").toLowerCase():"#document"}function J(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function _t(e){var t;return(t=(mo(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function mo(e){return e instanceof Node||e instanceof J(e).Node}function yt(e){return e instanceof Element||e instanceof J(e).Element}function ft(e){return e instanceof HTMLElement||e instanceof J(e).HTMLElement}function Ri(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof J(e).ShadowRoot}function Fe(e){const{overflow:t,overflowX:s,overflowY:i,display:o}=st(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+s)&&!["inline","contents"].includes(o)}function yr(e){return["table","td","th"].includes(Ot(e))}function Zs(e){const t=Gs(),s=st(e);return s.transform!=="none"||s.perspective!=="none"||(s.containerType?s.containerType!=="normal":!1)||!t&&(s.backdropFilter?s.backdropFilter!=="none":!1)||!t&&(s.filter?s.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(s.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(s.contain||"").includes(i))}function wr(e){let t=ee(e);for(;ft(t)&&!ls(t);){if(Zs(t))return t;t=ee(t)}return null}function Gs(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ls(e){return["html","body","#document"].includes(Ot(e))}function st(e){return J(e).getComputedStyle(e)}function as(e){return yt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function ee(e){if(Ot(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Ri(e)&&e.host||_t(e);return Ri(t)?t.host:t}function go(e){const t=ee(e);return ls(t)?e.ownerDocument?e.ownerDocument.body:e.body:ft(t)&&Fe(t)?t:go(t)}function Ae(e,t,s){var i;t===void 0&&(t=[]),s===void 0&&(s=!0);const o=go(e),n=o===((i=e.ownerDocument)==null?void 0:i.body),r=J(o);return n?t.concat(r,r.visualViewport||[],Fe(o)?o:[],r.frameElement&&s?Ae(r.frameElement):[]):t.concat(o,Ae(o,[],s))}function bo(e){const t=st(e);let s=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const o=ft(e),n=o?e.offsetWidth:s,r=o?e.offsetHeight:i,c=Ge(s)!==n||Ge(i)!==r;return c&&(s=n,i=r),{width:s,height:i,$:c}}function Ys(e){return yt(e)?e:e.contextElement}function Gt(e){const t=Ys(e);if(!ft(t))return Tt(1);const s=t.getBoundingClientRect(),{width:i,height:o,$:n}=bo(t);let r=(n?Ge(s.width):s.width)/i,c=(n?Ge(s.height):s.height)/o;return(!r||!Number.isFinite(r))&&(r=1),(!c||!Number.isFinite(c))&&(c=1),{x:r,y:c}}const _r=Tt(0);function vo(e){const t=J(e);return!Gs()||!t.visualViewport?_r:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function xr(e,t,s){return t===void 0&&(t=!1),!s||t&&s!==J(e)?!1:t}function Bt(e,t,s,i){t===void 0&&(t=!1),s===void 0&&(s=!1);const o=e.getBoundingClientRect(),n=Ys(e);let r=Tt(1);t&&(i?yt(i)&&(r=Gt(i)):r=Gt(e));const c=xr(n,s,i)?vo(n):Tt(0);let l=(o.left+c.x)/r.x,d=(o.top+c.y)/r.y,f=o.width/r.x,h=o.height/r.y;if(n){const m=J(n),p=i&&yt(i)?J(i):i;let v=m.frameElement;for(;v&&i&&p!==m;){const y=Gt(v),$=v.getBoundingClientRect(),w=st(v),C=$.left+(v.clientLeft+parseFloat(w.paddingLeft))*y.x,z=$.top+(v.clientTop+parseFloat(w.paddingTop))*y.y;l*=y.x,d*=y.y,f*=y.x,h*=y.y,l+=C,d+=z,v=J(v).frameElement}}return Xe({width:f,height:h,x:l,y:d})}function $r(e){let{rect:t,offsetParent:s,strategy:i}=e;const o=ft(s),n=_t(s);if(s===n)return t;let r={scrollLeft:0,scrollTop:0},c=Tt(1);const l=Tt(0);if((o||!o&&i!=="fixed")&&((Ot(s)!=="body"||Fe(n))&&(r=as(s)),ft(s))){const d=Bt(s);c=Gt(s),l.x=d.x+s.clientLeft,l.y=d.y+s.clientTop}return{width:t.width*c.x,height:t.height*c.y,x:t.x*c.x-r.scrollLeft*c.x+l.x,y:t.y*c.y-r.scrollTop*c.y+l.y}}function kr(e){return Array.from(e.getClientRects())}function yo(e){return Bt(_t(e)).left+as(e).scrollLeft}function Cr(e){const t=_t(e),s=as(e),i=e.ownerDocument.body,o=X(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),n=X(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let r=-s.scrollLeft+yo(e);const c=-s.scrollTop;return st(i).direction==="rtl"&&(r+=X(t.clientWidth,i.clientWidth)-o),{width:o,height:n,x:r,y:c}}function Sr(e,t){const s=J(e),i=_t(e),o=s.visualViewport;let n=i.clientWidth,r=i.clientHeight,c=0,l=0;if(o){n=o.width,r=o.height;const d=Gs();(!d||d&&t==="fixed")&&(c=o.offsetLeft,l=o.offsetTop)}return{width:n,height:r,x:c,y:l}}function Ar(e,t){const s=Bt(e,!0,t==="fixed"),i=s.top+e.clientTop,o=s.left+e.clientLeft,n=ft(e)?Gt(e):Tt(1),r=e.clientWidth*n.x,c=e.clientHeight*n.y,l=o*n.x,d=i*n.y;return{width:r,height:c,x:l,y:d}}function Di(e,t,s){let i;if(t==="viewport")i=Sr(e,s);else if(t==="document")i=Cr(_t(e));else if(yt(t))i=Ar(t,s);else{const o=vo(e);i={...t,x:t.x-o.x,y:t.y-o.y}}return Xe(i)}function wo(e,t){const s=ee(e);return s===t||!yt(s)||ls(s)?!1:st(s).position==="fixed"||wo(s,t)}function Er(e,t){const s=t.get(e);if(s)return s;let i=Ae(e,[],!1).filter(c=>yt(c)&&Ot(c)!=="body"),o=null;const n=st(e).position==="fixed";let r=n?ee(e):e;for(;yt(r)&&!ls(r);){const c=st(r),l=Zs(r);!l&&c.position==="fixed"&&(o=null),(n?!l&&!o:!l&&c.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||Fe(r)&&!l&&wo(e,r))?i=i.filter(f=>f!==r):o=c,r=ee(r)}return t.set(e,i),i}function Tr(e){let{element:t,boundary:s,rootBoundary:i,strategy:o}=e;const r=[...s==="clippingAncestors"?Er(t,this._c):[].concat(s),i],c=r[0],l=r.reduce((d,f)=>{const h=Di(t,f,o);return d.top=X(h.top,d.top),d.right=Et(h.right,d.right),d.bottom=Et(h.bottom,d.bottom),d.left=X(h.left,d.left),d},Di(t,c,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function zr(e){return bo(e)}function Or(e,t,s){const i=ft(t),o=_t(t),n=s==="fixed",r=Bt(e,!0,n,t);let c={scrollLeft:0,scrollTop:0};const l=Tt(0);if(i||!i&&!n)if((Ot(t)!=="body"||Fe(o))&&(c=as(t)),i){const d=Bt(t,!0,n,t);l.x=d.x+t.clientLeft,l.y=d.y+t.clientTop}else o&&(l.x=yo(o));return{x:r.left+c.scrollLeft-l.x,y:r.top+c.scrollTop-l.y,width:r.width,height:r.height}}function Fi(e,t){return!ft(e)||st(e).position==="fixed"?null:t?t(e):e.offsetParent}function _o(e,t){const s=J(e);if(!ft(e))return s;let i=Fi(e,t);for(;i&&yr(i)&&st(i).position==="static";)i=Fi(i,t);return i&&(Ot(i)==="html"||Ot(i)==="body"&&st(i).position==="static"&&!Zs(i))?s:i||wr(e)||s}const Lr=async function(e){let{reference:t,floating:s,strategy:i}=e;const o=this.getOffsetParent||_o,n=this.getDimensions;return{reference:Or(t,await o(s),i),floating:{x:0,y:0,...await n(s)}}};function Pr(e){return st(e).direction==="rtl"}const je={convertOffsetParentRelativeRectToViewportRelativeRect:$r,getDocumentElement:_t,getClippingRect:Tr,getOffsetParent:_o,getElementRects:Lr,getClientRects:kr,getDimensions:zr,getScale:Gt,isElement:yt,isRTL:Pr};function Rr(e,t){let s=null,i;const o=_t(e);function n(){clearTimeout(i),s&&s.disconnect(),s=null}function r(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),n();const{left:d,top:f,width:h,height:m}=e.getBoundingClientRect();if(c||t(),!h||!m)return;const p=Ne(f),v=Ne(o.clientWidth-(d+h)),y=Ne(o.clientHeight-(f+m)),$=Ne(d),C={rootMargin:-p+"px "+-v+"px "+-y+"px "+-$+"px",threshold:X(0,Et(1,l))||1};let z=!0;function I(L){const F=L[0].intersectionRatio;if(F!==l){if(!z)return r();F?r(!1,F):i=setTimeout(()=>{r(!1,1e-7)},100)}z=!1}try{s=new IntersectionObserver(I,{...C,root:o.ownerDocument})}catch{s=new IntersectionObserver(I,C)}s.observe(e)}return r(!0),n}function Dr(e,t,s,i){i===void 0&&(i={});const{ancestorScroll:o=!0,ancestorResize:n=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,d=Ys(e),f=o||n?[...d?Ae(d):[],...Ae(t)]:[];f.forEach(w=>{o&&w.addEventListener("scroll",s,{passive:!0}),n&&w.addEventListener("resize",s)});const h=d&&c?Rr(d,s):null;let m=-1,p=null;r&&(p=new ResizeObserver(w=>{let[C]=w;C&&C.target===d&&p&&(p.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{p&&p.observe(t)})),s()}),d&&!l&&p.observe(d),p.observe(t));let v,y=l?Bt(e):null;l&&$();function $(){const w=Bt(e);y&&(w.x!==y.x||w.y!==y.y||w.width!==y.width||w.height!==y.height)&&s(),y=w,v=requestAnimationFrame($)}return s(),()=>{f.forEach(w=>{o&&w.removeEventListener("scroll",s),n&&w.removeEventListener("resize",s)}),h&&h(),p&&p.disconnect(),p=null,l&&cancelAnimationFrame(v)}}const Fr=(e,t,s)=>{const i=new Map,o={platform:je,...s},n={...o.platform,_c:i};return pr(e,t,{...o,platform:n})};function Mr(e){return Ir(e)}function Ss(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Ir(e){for(let t=e;t;t=Ss(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=Ss(e);t;t=Ss(t)){if(!(t instanceof Element))continue;const s=getComputedStyle(t);if(s.display!=="contents"&&(s.position!=="static"||s.filter!=="none"||t.tagName==="BODY"))return t}return null}function Br(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e}var A=class extends D{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||Br(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){!this.anchorEl||(this.cleanup=Dr(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[br({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Pi({apply:({rects:s})=>{const i=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${s.reference.width}px`:"",this.popup.style.height=o?`${s.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(mr({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(vr({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(Pi({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:s,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${s}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(fr({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?s=>je.getOffsetParent(s,Mr):je.getOffsetParent;Fr(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:Le(Pt({},je),{getOffsetParent:t})}).then(({x:s,y:i,middlewareData:o,placement:n})=>{const r=getComputedStyle(this).direction==="rtl",c={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${s}px`,top:`${i}px`}),this.arrow){const l=o.arrow.x,d=o.arrow.y;let f="",h="",m="",p="";if(this.arrowPlacement==="start"){const v=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";f=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",h=r?v:"",p=r?"":v}else if(this.arrowPlacement==="end"){const v=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=r?"":v,p=r?v:"",m=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(p=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",f=typeof d=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(p=typeof l=="number"?`${l}px`:"",f=typeof d=="number"?`${d}px`:"");Object.assign(this.arrowEl.style,{top:f,right:h,bottom:m,left:p,[c]:"calc(var(--arrow-size-diagonal) * -1)"})}}),this.emit("sl-reposition")}render(){return x`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${K({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?x`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};A.styles=nr;a([S(".popup")],A.prototype,"popup",2);a([S(".popup__arrow")],A.prototype,"arrowEl",2);a([u()],A.prototype,"anchor",2);a([u({type:Boolean,reflect:!0})],A.prototype,"active",2);a([u({reflect:!0})],A.prototype,"placement",2);a([u({reflect:!0})],A.prototype,"strategy",2);a([u({type:Number})],A.prototype,"distance",2);a([u({type:Number})],A.prototype,"skidding",2);a([u({type:Boolean})],A.prototype,"arrow",2);a([u({attribute:"arrow-placement"})],A.prototype,"arrowPlacement",2);a([u({attribute:"arrow-padding",type:Number})],A.prototype,"arrowPadding",2);a([u({type:Boolean})],A.prototype,"flip",2);a([u({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],A.prototype,"flipFallbackPlacements",2);a([u({attribute:"flip-fallback-strategy"})],A.prototype,"flipFallbackStrategy",2);a([u({type:Object})],A.prototype,"flipBoundary",2);a([u({attribute:"flip-padding",type:Number})],A.prototype,"flipPadding",2);a([u({type:Boolean})],A.prototype,"shift",2);a([u({type:Object})],A.prototype,"shiftBoundary",2);a([u({attribute:"shift-padding",type:Number})],A.prototype,"shiftPadding",2);a([u({attribute:"auto-size"})],A.prototype,"autoSize",2);a([u()],A.prototype,"sync",2);a([u({type:Object})],A.prototype,"autoSizeBoundary",2);a([u({attribute:"auto-size-padding",type:Number})],A.prototype,"autoSizePadding",2);var q=class extends D{constructor(){super(...arguments),this.localize=new wt(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var s,i,o;const n=((s=this.containingElement)==null?void 0:s.getRootNode())instanceof ShadowRoot?(o=(i=document.activeElement)==null?void 0:i.shadowRoot)==null?void 0:o.activeElement:document.activeElement;(!this.containingElement||(n==null?void 0:n.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const s=t.getAllItems(),i=s[0],o=s[s.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),s.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(i),i.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(o),o.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(i=>en(i).start);let s;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":s=t.button;break;default:s=t}s.setAttribute("aria-haspopup","true"),s.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,At(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,At(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-select",this.handlePanelSelect),this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await pt(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=nt(this,"dropdown.show",{dir:this.localize.dir()});await rt(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await pt(this);const{keyframes:e,options:t}=nt(this,"dropdown.hide",{dir:this.localize.dir()});await rt(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return x`
      <sl-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        class=${K({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};q.styles=or;q.dependencies={"sl-popup":A};a([S(".dropdown")],q.prototype,"popup",2);a([S(".dropdown__trigger")],q.prototype,"trigger",2);a([S(".dropdown__panel")],q.prototype,"panel",2);a([u({type:Boolean,reflect:!0})],q.prototype,"open",2);a([u({reflect:!0})],q.prototype,"placement",2);a([u({type:Boolean,reflect:!0})],q.prototype,"disabled",2);a([u({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],q.prototype,"stayOpenOnSelect",2);a([u({attribute:!1})],q.prototype,"containingElement",2);a([u({type:Number})],q.prototype,"distance",2);a([u({type:Number})],q.prototype,"skidding",2);a([u({type:Boolean})],q.prototype,"hoist",2);a([R("open",{waitUntilFirstUpdate:!0})],q.prototype,"handleOpenChange",1);at("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});at("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});q.define("sl-dropdown");var Nr=M`
  ${N}

  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,Xs=class extends D{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const t=["menuitem","menuitemcheckbox"],s=e.composedPath().find(o=>{var n;return t.includes(((n=o==null?void 0:o.getAttribute)==null?void 0:n.call(o,"role"))||"")});if(!s)return;const i=s;i.type==="checkbox"&&(i.checked=!i.checked),this.emit("sl-select",{detail:{item:i}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){const t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t==null||t.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),s=this.getCurrentItem();let i=s?t.indexOf(s):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?i++:e.key==="ArrowUp"?i--:e.key==="Home"?i=0:e.key==="End"&&(i=t.length-1),i<0&&(i=t.length-1),i>t.length-1&&(i=0),this.setCurrentItem(t[i]),t[i].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=e.getAttribute("role"))!=null?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(s=>{s.setAttribute("tabindex",s===e?"0":"-1")})}render(){return x`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Xs.styles=Nr;a([S("slot")],Xs.prototype,"defaultSlot",2);Xs.define("sl-menu");var Ur=M`
  ${N}

  :host {
    --submenu-offset: -2px;

    /* Private */
    --safe-triangle-cursor-x: 0;
    --safe-triangle-cursor-y: 0;
    --safe-triangle-submenu-start-x: 0;
    --safe-triangle-submenu-start-y: 0;
    --safe-triangle-submenu-end-x: 0;
    --safe-triangle-submenu-end-y: 0;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x) var(--safe-triangle-cursor-y),
      var(--safe-triangle-submenu-start-x) var(--safe-triangle-submenu-start-y),
      var(--safe-triangle-submenu-end-x) var(--safe-triangle-submenu-end-y)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ye=(e,t)=>{var i;const s=e._$AN;if(s===void 0)return!1;for(const o of s)(i=o._$AO)==null||i.call(o,t,!1),ye(o,t);return!0},Je=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while((s==null?void 0:s.size)===0)},xo=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),jr(t)}};function Hr(e){this._$AN!==void 0?(Je(this),this._$AM=e,xo(this)):this._$AM=e}function Vr(e,t=!1,s=0){const i=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(i))for(let n=s;n<i.length;n++)ye(i[n],!1),Je(i[n]);else i!=null&&(ye(i,!1),Je(i));else ye(this,e)}const jr=e=>{var t,s;e.type==vt.CHILD&&((t=e._$AP)!=null||(e._$AP=Vr),(s=e._$AQ)!=null||(e._$AQ=Hr))};class qr extends is{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,i){super._$AT(t,s,i),xo(this),this.isConnected=t._$AU}_$AO(t,s=!0){var i,o;t!==this.isConnected&&(this.isConnected=t,t?(i=this.reconnected)==null||i.call(this):(o=this.disconnected)==null||o.call(this)),s&&(ye(this,t),Je(this))}setValue(t){if(no(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wr=()=>new Kr;class Kr{}const As=new WeakMap,Zr=ss(class extends qr{render(e){return O}update(e,[t]){var i;const s=t!==this.G;return s&&this.G!==void 0&&this.ot(void 0),(s||this.rt!==this.lt)&&(this.G=t,this.ct=(i=e.options)==null?void 0:i.host,this.ot(this.lt=e.element)),O}ot(e){var t;if(typeof this.G=="function"){const s=(t=this.ct)!=null?t:globalThis;let i=As.get(s);i===void 0&&(i=new WeakMap,As.set(s,i)),i.get(this.G)!==void 0&&this.G.call(this.ct,void 0),i.set(this.G,e),e!==void 0&&this.G.call(this.ct,e)}else this.G.value=e}get rt(){var e,t,s;return typeof this.G=="function"?(t=As.get((e=this.ct)!=null?e:globalThis))==null?void 0:t.get(this.G):(s=this.G)==null?void 0:s.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var Gr=class{constructor(e,t,s){this.popupRef=Wr(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=i=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${i.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${i.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=i=>{switch(i.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":i.target!==this.host&&(i.preventDefault(),i.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(i);break}},this.handleClick=i=>{var o;i.target===this.host?(i.preventDefault(),i.stopPropagation()):i.target instanceof Element&&(i.target.tagName==="sl-menu-item"||((o=i.target.role)==null?void 0:o.startsWith("menuitem")))&&this.disableSubmenu()},this.handleFocusOut=i=>{i.relatedTarget&&i.relatedTarget instanceof Element&&this.host.contains(i.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=i=>{i.stopPropagation()},this.handlePopupReposition=()=>{const i=this.host.renderRoot.querySelector("slot[name='submenu']"),o=i==null?void 0:i.assignedElements({flatten:!0}).filter(f=>f.localName==="sl-menu")[0],n=this.localize.dir()==="rtl";if(!o)return;const{left:r,top:c,width:l,height:d}=o.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${n?r+l:r}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${c}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${n?r+l:r}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${c+d}px`)},(this.host=e).addController(this),this.hasSlotController=t,this.localize=s}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){const t=this.host.renderRoot.querySelector("slot[name='submenu']");if(!t){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let s=null;for(const i of t.assignedElements())if(s=i.querySelectorAll("sl-menu-item, [role^='menuitem']"),s.length!==0)break;if(!(!s||s.length===0)){s[0].setAttribute("tabindex","0");for(let i=1;i!==s.length;++i)s[i].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?s[0]instanceof HTMLElement&&s[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{s[0]instanceof HTMLElement&&s[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay):this.setSubmenuState(!0)}disableSubmenu(){clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!((e=this.host.parentElement)!=null&&e.computedStyleMap))return;const t=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((o,n)=>{var r;const c=(r=t.get(n))!=null?r:new CSSUnitValue(0,"px"),d=(c instanceof CSSUnitValue?c:new CSSUnitValue(0,"px")).to("px");return o-d.value},0);this.skidding=i}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const e=this.localize.dir()==="ltr";return this.isConnected?x`
      <sl-popup
        ${Zr(this.popupRef)}
        placement=${e?"right-start":"left-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:x` <slot name="submenu" hidden></slot> `}},it=class extends D{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.disabled=!1,this.localize=new wt(this),this.hasSlotController=new Re(this,"submenu"),this.submenuController=new Gr(this,this.hasSlotController,this.localize),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return Kn(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e=this.localize.dir()==="rtl",t=this.submenuController.isExpanded();return x`
      <div
        id="anchor"
        part="base"
        class=${K({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!t}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${e?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
      </div>
    `}};it.styles=Ur;it.dependencies={"sl-icon":j,"sl-popup":A};a([S("slot:not([name])")],it.prototype,"defaultSlot",2);a([S(".menu-item")],it.prototype,"menuItem",2);a([u()],it.prototype,"type",2);a([u({type:Boolean,reflect:!0})],it.prototype,"checked",2);a([u()],it.prototype,"value",2);a([u({type:Boolean,reflect:!0})],it.prototype,"disabled",2);a([R("checked")],it.prototype,"handleCheckedChange",1);a([R("disabled")],it.prototype,"handleDisabledChange",1);a([R("type")],it.prototype,"handleTypeChange",1);it.define("sl-menu-item");var Yr=M`
  ${N}

  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,cs=class extends D{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};cs.styles=Yr;a([u({type:Boolean,reflect:!0})],cs.prototype,"vertical",2);a([R("vertical")],cs.prototype,"handleVerticalChange",1);cs.define("sl-divider");var Xr=Object.defineProperty,Jr=Object.getOwnPropertyDescriptor,Qr=(e,t,s,i)=>{for(var o=i>1?void 0:i?Jr(t,s):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(i?r(t,s,o):r(o))||o);return i&&o&&Xr(t,s,o),o};let Mi=class extends lt{static get styles(){return Ut`
      .root {
        height: 36px;
        width: 100%;
        background-color: var(--menu-background-color);
        border-bottom: solid 1.5px var(--status-bar-border-color);
        display: flex;
        flex-direction: row;
        align-items: center;

        --sl-color-neutral-0: transparent; /* background of buttons */
        --sl-color-neutral-300: transparent; /* border of buttons */
        --sl-color-neutral-700: var(--text-color); /* text color of buttons */

        --sl-color-primary-50: var(--menu-button-hover-background-color); /* hover background */
        --sl-color-primary-100: var(--menu-button-click-background-color); /* click background */
        --sl-color-primary-300: transparent; /* hover border */
        --sl-color-primary-400: transparent; /* click border */
        --sl-color-primary-700: var(--text-color); /* hover color */

        --sl-input-height-medium: 32px;

        --sl-button-font-size-medium: 14px;
        --sl-input-font-family: "Segoe UI Variable", "Segoe UI", sand-serif;
        --sl-font-weight-semibold: 400;

        --sl-spacing-medium: 8px;
      }

      sl-menu {
        background-color: var(--menu-dropdown-background-color);
        border-color: var(--menu-dropdown-background-color);
        color: var(--text-color);
        width: 300px;
        padding: 5px;
      }

      sl-menu-item::part(base){
        border-radius: 4px;
        width: 100%;
      }

      sl-menu-item:hover {
        cursor: default;
      }

      sl-menu-item::part(base):hover{
        cursor: default;
        color: var(--text-color);
        background-color: var(--menu-item-hover-background-color);
      }

      sl-menu-item::part(label){
        font-size: 14px;
      }

      .no-check-menu sl-menu-item::part(checked-icon){
        display: none;
      }
      .no-check-menu sl-menu-item::part(submenu-icon){
        display: none;
      }

      .with-shortcut::part(label){
        display: grid;
        grid-template-columns: 2fr 1fr;
        place-items: flex-start;
        place-content: center;
      }

      .with-shortcut p {
        margin: 0;
        width: min-content;
      }

      .subtext {
        color: var(--subtext-color);
      }

      sl-divider {
        --color: var(--divider-color);
      }

      .menubar {
        flex-grow: 1;
        display: flex;
        flex-direction: row;
        justify-content: left;
        padding-left: 4px;
        margin-bottom: 2px;
      }

      .menubar sl-button {
        margin-right: 8px;
      }

      .settings-container {
        margin-right: 8px;
      }

      .settings-wheel {
        fill: var(--text-color);
        font-size: 18px;
      }
      .settings-button::part(label) {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}constructor(){super()}render(){return T`
      <div class="root">
        <div class="menubar">
          <sl-dropdown>
            <sl-button slot="trigger">File</sl-button>
            <sl-menu class="no-check-menu" @sl-select=${e=>this.menuItemClicked("file",e.detail.item.value)}>
              <sl-menu-item class="with-shortcut" value="new"><p>New</p><p class="subtext">Ctrl+N</p></sl-menu-item>
              <sl-menu-item class="with-shortcut" value="new-window"><p>New Window</p><p class="subtext">Ctrl+Shift+N</p></sl-menu-item>
              <sl-menu-item class="with-shortcut" value="open"><p>Open</p><p class="subtext">Ctrl+O</p></sl-menu-item>
              <sl-menu-item class="with-shortcut" value="save"><p>Save</p><p class="subtext">Ctrl+S</p></sl-menu-item>
              <sl-menu-item class="with-shortcut" value="save-as"><p>Save as</p><p class="subtext">Ctrl+Shift+S</p></sl-menu-item>
              <sl-divider></sl-divider>
              <sl-menu-item value="page-setup">Page setup</sl-menu-item>
              <sl-menu-item class="with-shortcut" value="print"><p>Print</p><p class="subtext">Ctrl+P</p></sl-menu-item>
              <sl-divider></sl-divider>
              <sl-menu-item class="with-shortcut" value="close-window"><p>Close window</p><p class="subtext">Ctrl+Shift+W</p></sl-menu-item>
              <sl-divider></sl-divider>
              <sl-menu-item value="exit">Exit</sl-menu-item>
            </sl-menu>
          </sl-dropdown>
          <sl-dropdown>
            <sl-button slot="trigger">Edit</sl-button>
            <sl-menu class="no-check-menu" @sl-select=${e=>this.menuItemClicked("edit",e.detail.item.value)}>
              <sl-menu-item class="with-shortcut" value="undo"><p>Undo</p><p class="subtext">Ctrl+Z</p></sl-menu-item>
              <sl-divider></sl-divider>
              <sl-menu-item class="with-shortcut" value="cut"><p>Cut</p><p class="subtext">Ctrl+X</p></sl-menu-item>
              <sl-menu-item class="with-shortcut" value="copy"><p>Copy</p><p class="subtext">Ctrl+C</p></sl-menu-item>
              <sl-menu-item class="with-shortcut" value="paste"><p>Paste</p><p class="subtext">Ctrl+V</p></sl-menu-item>
              <sl-menu-item class="with-shortcut" value="delete"><p>Delete</p><p class="subtext">Del</p></sl-menu-item>
              <sl-divider></sl-divider>
              <sl-menu-item class="with-shortcut" value="find"><p>Find</p><p class="subtext">Ctrl+F</p></sl-menu-item>
              <sl-menu-item class="with-shortcut" value="find-next"><p>Find next</p><p class="subtext">F3</p></sl-menu-item>
              <sl-menu-item class="with-shortcut" value="find-previous"><p>Find previous</p><p class="subtext">Shift+F3</p></sl-menu-item>
              <sl-menu-item class="with-shortcut" value="replace"><p>Replace</p><p class="subtext">Ctrl+H</p></sl-menu-item>
              <sl-menu-item class="with-shortcut" value="go-to"><p>Go to</p><p class="subtext">Ctrl+G</p></sl-menu-item>
              <sl-divider></sl-divider>
              <sl-menu-item class="with-shortcut" value="select-all"><p>Select all</p><p class="subtext">Ctrl+A</p></sl-menu-item>
              <sl-menu-item class="with-shortcut" value="time-date"><p>Time/Date</p><p class="subtext">F5</p></sl-menu-item>
              <sl-divider></sl-divider>
              <sl-menu-item value="font">Font</sl-menu-item>
            </sl-menu>
          </sl-dropdown>
          <sl-dropdown>
            <sl-button slot="trigger">View</sl-button>
            <sl-menu class="zoom-menu" @sl-select=${e=>this.menuItemClicked("view",e.detail.item.value)}>
            <sl-menu-item>
              Zoom
              <sl-menu class="zoom-submenu" slot="submenu">
                <sl-menu-item class="with-shortcut" value="zoom-in" @click=${()=>b.instance.zoom+=10}><p>Zoom in</p><p class="subtext">Ctrl+Plus</p></sl-menu-item>
                <sl-menu-item class="with-shortcut" value="zoom-out" @click=${()=>b.instance.zoom-=10}><p>Zoom out</p><p class="subtext">Ctrl+Minus</p></sl-menu-item>
                <sl-menu-item class="with-shortcut" value="restore" @click=${()=>b.instance.zoom=100}><p>Restore default zoom</p><p class="subtext">Ctrl+0</p></sl-menu-item>
              </sl-menu>
            </sl-menu-item>
            <sl-menu-item type="checkbox" value="status-bar" @click=${()=>b.instance.showingStatusBar=!b.instance.showingStatusBar} ?checked=${b.instance.showingStatusBar}>Status Bar</sl-menu-item>
            <sl-menu-item type="checkbox" value="word-wrap" @click=${()=>b.instance.wrap=!b.instance.wrap} ?checked=${b.instance.wrap}>Word wrap</sl-menu-item>
            </sl-menu>
          </sl-dropdown>
        </div>
        <div class="settings-container">
          <sl-button class="settings-button" @click=${()=>this.showSettingsPage()}>
            <svg class="settings-wheel" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M1.91 7.38A8.5 8.5 0 0 1 3.7 4.3a.5.5 0 0 1 .54-.13l1.92.68a1 1 0 0 0 1.32-.76l.36-2a.5.5 0 0 1 .4-.4 8.53 8.53 0 0 1 3.55 0c.2.04.35.2.38.4l.37 2a1 1 0 0 0 1.32.76l1.92-.68a.5.5 0 0 1 .54.13 8.5 8.5 0 0 1 1.78 3.08c.06.2 0 .4-.15.54l-1.56 1.32a1 1 0 0 0 0 1.52l1.56 1.32a.5.5 0 0 1 .15.54 8.5 8.5 0 0 1-1.78 3.08.5.5 0 0 1-.54.13l-1.92-.68a1 1 0 0 0-1.32.76l-.37 2a.5.5 0 0 1-.38.4 8.53 8.53 0 0 1-3.56 0 .5.5 0 0 1-.39-.4l-.36-2a1 1 0 0 0-1.32-.76l-1.92.68a.5.5 0 0 1-.54-.13 8.5 8.5 0 0 1-1.78-3.08.5.5 0 0 1 .15-.54l1.56-1.32a1 1 0 0 0 0-1.52L2.06 7.92a.5.5 0 0 1-.15-.54Zm1.06 0 1.3 1.1a2 2 0 0 1 0 3.04l-1.3 1.1c.3.79.72 1.51 1.25 2.16l1.6-.58a2 2 0 0 1 2.63 1.53l.3 1.67a7.56 7.56 0 0 0 2.5 0l.3-1.67a2 2 0 0 1 2.64-1.53l1.6.58a7.5 7.5 0 0 0 1.24-2.16l-1.3-1.1a2 2 0 0 1 0-3.04l1.3-1.1a7.5 7.5 0 0 0-1.25-2.16l-1.6.58a2 2 0 0 1-2.63-1.53l-.3-1.67a7.55 7.55 0 0 0-2.5 0l-.3 1.67A2 2 0 0 1 5.81 5.8l-1.6-.58a7.5 7.5 0 0 0-1.24 2.16ZM7.5 10a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm1 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z"/></svg>
          </sl-button>
        </div>
      </div>
    `}showSettingsPage(){const e=new CustomEvent("showSettingsPage",{bubbles:!0});this.dispatchEvent(e)}async menuItemClicked(e,t){if(e==="file"){await this.fileMenuItemClicked(t);return}if(e==="edit"){await this.editMenuItemClicked(t);return}}async fileMenuItemClicked(e){switch(e){case"new":g.instance.newFile();break;case"new-window":window.open("/","","width=1200, height=750");break;case"open":g.instance.openFile();break;case"save":g.instance.saveFile();break;case"save-as":g.instance.saveAsFile();break;case"print":g.instance.print();break;default:console.log(`${e} NOT IMPLEMENTED`)}}async editMenuItemClicked(e){switch(e){case"cut":g.instance.cut();break;case"copy":g.instance.copy();break;case"paste":g.instance.paste();break;case"delete":g.instance.delete();break;case"find":const t=new Event("show-find-input",{bubbles:!0,composed:!0});this.dispatchEvent(t);break;case"find-next":g.instance.findListIndex+=1;break;case"find-previous":g.instance.findListIndex-=1;break;case"select-all":g.instance.selectAll();break;case"time-date":g.instance.insertTimeDate();break;default:console.log(`${e} NOT IMPLEMENTED`)}}};Mi=Qr([Ht("app-menu")],Mi);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $o={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ko=e=>(...t)=>({_$litDirective$:e,values:t});class Co{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,i){this._$Ct=t,this._$AM=s,this._$Ci=i}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Js=ko(class extends Co{constructor(e){var t;if(super(e),e.type!==$o.ATTRIBUTE||e.name!=="style"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,s)=>{const i=e[s];return i==null?t:t+`${s=s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(e,[t]){const{style:s}=e.element;if(this.vt===void 0){this.vt=new Set;for(const i in t)this.vt.add(i);return this.render(t)}this.vt.forEach(i=>{t[i]==null&&(this.vt.delete(i),i.includes("-")?s.removeProperty(i):s[i]="")});for(const i in t){const o=t[i];o!=null&&(this.vt.add(i),i.includes("-")?s.setProperty(i,o):s[i]=o)}return St}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tl=ko(class extends Co{constructor(e){var t;if(super(e),e.type!==$o.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var s,i;if(this.nt===void 0){this.nt=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!(!((s=this.st)===null||s===void 0)&&s.has(n))&&this.nt.add(n);return this.render(t)}const o=e.element.classList;this.nt.forEach(n=>{n in t||(o.remove(n),this.nt.delete(n))});for(const n in t){const r=!!t[n];r===this.nt.has(n)||((i=this.st)===null||i===void 0?void 0:i.has(n))||(r?(o.add(n),this.nt.add(n)):(o.remove(n),this.nt.delete(n)))}return St}});var el=Object.defineProperty,sl=Object.getOwnPropertyDescriptor,ds=(e,t,s,i)=>{for(var o=i>1?void 0:i?sl(t,s):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(i?r(t,s,o):r(o))||o);return i&&o&&el(t,s,o),o};let Ee=class extends lt{constructor(){super(),this.selectedFonts={family:"Consolas",style:"regular",size:11},this.wrapWords=!1,this.onFileChangedHandler=this.setEditorContents.bind(this),g.instance.on(E.fileChanged,this.onFileChangedHandler),g.instance.on(E.insertedText,this.updateText),b.instance.on(tt.settingsChanged,()=>this.updateSettings(this))}static get styles(){return Ut`
      :host {
        display: block
      }

      .root {
        background-color: var(--editor-background-color);
        color: var(--text-color);
        /* padding: 16px; */
        font-family: "Lucida Console";
        font-size: 12pt;
        font-style: regular;
        height: 100%;
      }

      .editor {
        padding: 16px;
        min-height: 100%;
        min-width: 100%;
        overflow-wrap: normal;
        box-sizing: border-box;
        line-height: 1.2;
      }

      .editor.wrap {
        white-space: pre-wrap;
        word-break: break-all;
      }

      .editor.no-wrap {
        white-space: pre;
        width: max-content;
        word-break: unset;
      }

      *:focus {
          outline: none;
      }
    `}disconnectedCallback(){localStorage.setItem("lastSession",encodeURIComponent(g.instance.editorContents)),g.instance.removeListener(E.fileChanged,this.onFileChangedHandler)}firstUpdated(e){var t;this.setEditorContents(),(t=this.editor)==null||t.focus(),this.updateCursorPosition(),g.instance.editorDiv=this.shadowRoot.querySelector(".editor"),g.instance.selection=this.shadowRoot.getSelection()}setEditorContents(){this.editor&&(this.editor.textContent=g.instance.fileContents||"",localStorage.getItem("lastSession")&&b.instance.start_behavior&&this.editor.textContent.length===0&&(this.editor.textContent=decodeURIComponent(localStorage.getItem("lastSession"))),g.instance.editorContents=this.editor.textContent)}updateText(){g.instance.editorContents=g.instance.editorDiv.innerText}updateSettings(e){e.requestUpdate()}decideFontWeight(){const e=b.instance.font.style;return e.includes("light")?"300":e.includes("semilight")?"350":e.includes("medium")?"500":e.includes("demi")||e.includes("semibold")?"600":e.includes("bold")?"bold":e.includes("black")?"900":"unset"}updateCursorPosition(){const e=this.shadowRoot.querySelector(".editor"),t=this.shadowRoot.getSelection();if(t.rangeCount>0){const s=t.getRangeAt(0),i=s.startOffset,o=s.endOffset,n=e.getBoundingClientRect(),r=s.getBoundingClientRect(),c=parseInt(getComputedStyle(e).lineHeight);let l=Math.floor((r.top-n.top)/c)+1;l=Math.max(l,1),e.textContent===""&&(l=1),g.instance.cursorPosition={start:i+1,end:o+1,line:l}}}render(){const e={"font-size":b.instance.displayFontSize.toString()+"px","font-family":b.instance.font.family,"font-style":b.instance.font.style.includes("italic")?"italic":"unset","font-weight":this.decideFontWeight(),"font-stretch":b.instance.font.style.includes("narrow")||b.instance.font.style.includes("condensed")?"condensed":"unset"},t={wrap:b.instance.wrap,"no-wrap":!b.instance.wrap};return T`
      <div class="root" style=${Js(e)}>
        <div class="${tl(t)} editor"
          contenteditable
          spellcheck="false"
          @input=${()=>this.updateText()}
          @keydown=${this.handleTab}
          @paste=${this.pasteAsPlainText}
          @click=${()=>this.updateCursorPosition()}
          @keyup=${()=>this.updateCursorPosition()}></div>
      </div>
    `}pasteAsPlainText(e){var s;e.preventDefault();var t=(s=e.clipboardData)==null?void 0:s.getData("text/plain");t&&document.execCommand("insertHTML",!1,t)}handleTab(e){e.key=="Tab"&&(e.preventDefault(),document.execCommand("insertHTML",!1,"&#009"))}};ds([Oe({type:Object})],Ee.prototype,"selectedFonts",2);ds([Oe({type:Boolean})],Ee.prototype,"wrapWords",2);ds([Yi(".editor",!0)],Ee.prototype,"editor",2);Ee=ds([Ht("app-editor")],Ee);var il=M`
  ${N}

  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,ct=class extends D{constructor(){super(...arguments),this.localize=new wt(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const t of e)t.type==="attributes"&&t.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await pt(this.body);const{keyframes:t,options:s}=nt(this,"details.show",{dir:this.localize.dir()});await rt(this.body,Oi(t,this.body.scrollHeight),s),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await pt(this.body);const{keyframes:t,options:s}=nt(this,"details.hide",{dir:this.localize.dir()});await rt(this.body,Oi(t,this.body.scrollHeight),s),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,At(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,At(this,"sl-after-hide")}render(){const e=this.localize.dir()==="rtl";return x`
      <details
        part="base"
        class=${K({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":e})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};ct.styles=il;ct.dependencies={"sl-icon":j};a([S(".details")],ct.prototype,"details",2);a([S(".details__header")],ct.prototype,"header",2);a([S(".details__body")],ct.prototype,"body",2);a([S(".details__expand-icon-slot")],ct.prototype,"expandIconSlot",2);a([u({type:Boolean,reflect:!0})],ct.prototype,"open",2);a([u()],ct.prototype,"summary",2);a([u({type:Boolean,reflect:!0})],ct.prototype,"disabled",2);a([R("open",{waitUntilFirstUpdate:!0})],ct.prototype,"handleOpenChange",1);at("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});at("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});ct.define("sl-details");var So=M`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,ol=M`
  ${N}
  ${So}

  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,nl=M`
  ${N}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Me=class extends D{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=fe(e.target);t==null||t.classList.add("sl-button-group__button--focus")}handleBlur(e){const t=fe(e.target);t==null||t.classList.remove("sl-button-group__button--focus")}handleMouseOver(e){const t=fe(e.target);t==null||t.classList.add("sl-button-group__button--hover")}handleMouseOut(e){const t=fe(e.target);t==null||t.classList.remove("sl-button-group__button--hover")}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const s=e.indexOf(t),i=fe(t);i&&(i.classList.add("sl-button-group__button"),i.classList.toggle("sl-button-group__button--first",s===0),i.classList.toggle("sl-button-group__button--inner",s>0&&s<e.length-1),i.classList.toggle("sl-button-group__button--last",s===e.length-1),i.classList.toggle("sl-button-group__button--radio",i.tagName.toLowerCase()==="sl-radio-button"))})}render(){return x`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};Me.styles=nl;a([S("slot")],Me.prototype,"defaultSlot",2);a([U()],Me.prototype,"disableRole",2);a([u()],Me.prototype,"label",2);function fe(e){var t;const s="sl-button, sl-radio-button";return(t=e.closest(s))!=null?t:e.querySelector(s)}var H=class extends D{constructor(){super(...arguments),this.formControlController=new ns(this),this.hasSlotController=new Re(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const e=this.required&&!this.value;return this.customValidityMessage!==""?sr:e?er:rs}get validationMessage(){const e=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:e?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(e){const t=e.target.closest("sl-radio, sl-radio-button"),s=this.getAllRadios(),i=this.value;t.disabled||(this.value=t.value,s.forEach(o=>o.checked=o===t),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(e){var t;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key))return;const s=this.getAllRadios().filter(c=>!c.disabled),i=(t=s.find(c=>c.checked))!=null?t:s[0],o=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1,n=this.value;let r=s.indexOf(i)+o;r<0&&(r=s.length-1),r>s.length-1&&(r=0),this.getAllRadios().forEach(c=>{c.checked=!1,this.hasButtonGroup||(c.tabIndex=-1)}),this.value=s[r].value,s[r].checked=!0,this.hasButtonGroup?s[r].shadowRoot.querySelector("button").focus():(s[r].tabIndex=0,s[r].focus()),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input")),e.preventDefault()}handleLabelClick(){const e=this.getAllRadios(),s=e.find(i=>i.checked)||e[0];s&&s.focus()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}async syncRadioElements(){var e,t;const s=this.getAllRadios();if(await Promise.all(s.map(async i=>{await i.updateComplete,i.checked=i.value===this.value,i.size=this.size})),this.hasButtonGroup=s.some(i=>i.tagName.toLowerCase()==="sl-radio-button"),!s.some(i=>i.checked))if(this.hasButtonGroup){const i=(e=s[0].shadowRoot)==null?void 0:e.querySelector("button");i&&(i.tabIndex=0)}else s[0].tabIndex=0;if(this.hasButtonGroup){const i=(t=this.shadowRoot)==null?void 0:t.querySelector("sl-button-group");i&&(i.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const e=this.required&&!this.value,t=this.customValidityMessage!=="";return e||t?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const e=this.validity.valid;return this.errorMessage=this.customValidityMessage||e?"":this.validationInput.validationMessage,this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),e}setCustomValidity(e=""){this.customValidityMessage=e,this.errorMessage=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),s=this.label?!0:!!e,i=this.helpText?!0:!!t,o=x`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return x`
      <fieldset
        part="form-control"
        class=${K({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":s,"form-control--has-help-text":i})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${s?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?x`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${o}
                </sl-button-group>
              `:o}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};H.styles=ol;H.dependencies={"sl-button-group":Me};a([S("slot:not([name])")],H.prototype,"defaultSlot",2);a([S(".radio-group__validation-input")],H.prototype,"validationInput",2);a([U()],H.prototype,"hasButtonGroup",2);a([U()],H.prototype,"errorMessage",2);a([U()],H.prototype,"defaultValue",2);a([u()],H.prototype,"label",2);a([u({attribute:"help-text"})],H.prototype,"helpText",2);a([u()],H.prototype,"name",2);a([u({reflect:!0})],H.prototype,"value",2);a([u({reflect:!0})],H.prototype,"size",2);a([u({reflect:!0})],H.prototype,"form",2);a([u({type:Boolean,reflect:!0})],H.prototype,"required",2);a([R("size",{waitUntilFirstUpdate:!0})],H.prototype,"handleSizeChange",1);a([R("value")],H.prototype,"handleValueChange",1);H.define("sl-radio-group");var rl=M`
  ${N}

  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`,gt=class extends D{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return x`
      <span
        part="base"
        class=${K({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?x` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};gt.styles=rl;gt.dependencies={"sl-icon":j};a([U()],gt.prototype,"checked",2);a([U()],gt.prototype,"hasFocus",2);a([u()],gt.prototype,"value",2);a([u({reflect:!0})],gt.prototype,"size",2);a([u({type:Boolean,reflect:!0})],gt.prototype,"disabled",2);a([R("checked")],gt.prototype,"handleCheckedChange",1);a([R("disabled",{waitUntilFirstUpdate:!0})],gt.prototype,"handleDisabledChange",1);gt.define("sl-radio");var ll=M`
  ${N}

  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,Vt=class extends D{constructor(){super(...arguments),this.localize=new wt(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return x`
      <span
        part="base"
        class=${K({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?x`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};Vt.styles=ll;Vt.dependencies={"sl-icon-button":Z};a([u({reflect:!0})],Vt.prototype,"variant",2);a([u({reflect:!0})],Vt.prototype,"size",2);a([u({type:Boolean,reflect:!0})],Vt.prototype,"pill",2);a([u({type:Boolean})],Vt.prototype,"removable",2);var al=M`
  ${N}
  ${So}

  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix */
  .select__prefix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`,Ao=(e="value")=>(t,s)=>{const i=t.constructor,o=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(n,r,c){var l;const d=i.getPropertyOptions(e),f=typeof d.attribute=="string"?d.attribute:e;if(n===f){const h=d.converter||Qt,p=(typeof h=="function"?h:(l=h==null?void 0:h.fromAttribute)!=null?l:Qt.fromAttribute)(c,d.type);this[e]!==p&&(this[s]=p)}o.call(this,n,r,c)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Bs extends is{constructor(t){if(super(t),this.et=O,t.type!==vt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===O||t==null)return this.vt=void 0,this.et=t;if(t===et)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.vt;this.et=t;const s=[t];return s.raw=s,this.vt={_$litType$:this.constructor.resultType,strings:s,values:[]}}}Bs.directiveName="unsafeHTML",Bs.resultType=1;const cl=ss(Bs);var _=class extends D{constructor(){super(...arguments),this.formControlController=new ns(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Re(this,"help-text","label"),this.localize=new wt(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this.value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=e=>x`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${t=>this.handleTagRemove(t,e)}
      >
        ${e.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{const t=e.target,s=t.closest(".select__clear")!==null,i=t.closest("sl-icon-button")!==null;if(!(s||i)){if(e.key==="Escape"&&this.open&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key==="Enter"||e.key===" "&&this.typeToSelectString===""){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const o=this.getAllOptions(),n=o.indexOf(this.currentOption);let r=Math.max(0,n);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key==="ArrowDown"?(r=n+1,r>o.length-1&&(r=0)):e.key==="ArrowUp"?(r=n-1,r<0&&(r=o.length-1)):e.key==="Home"?r=0:e.key==="End"&&(r=o.length-1),this.setCurrentOption(o[r])}if(e.key.length===1||e.key==="Backspace"){const o=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key==="Backspace")return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const n of o)if(n.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(n);break}}}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()}}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),this.open=!1}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){const s=e.composedPath().some(i=>i instanceof Element&&i.tagName.toLowerCase()==="sl-icon-button");this.disabled||s||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.stopPropagation(),this.handleDocumentKeyDown(e)}handleClearClick(e){e.stopPropagation(),this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){const s=e.target.closest("sl-option"),i=this.value;s&&!s.disabled&&(this.multiple?this.toggleOptionSelection(s):this.setSelectedOptions(s),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==i&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value],s=[];customElements.get("sl-option")?(e.forEach(i=>s.push(i.value)),this.setSelectedOptions(e.filter(i=>t.includes(i.value)))):customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange())}handleTagRemove(e,t){e.stopPropagation(),this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(e){this.getAllOptions().forEach(s=>{s.current=!1,s.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){const t=this.getAllOptions(),s=Array.isArray(e)?e:[e];t.forEach(i=>i.selected=!1),s.length&&s.forEach(i=>i.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){var e,t,s,i;this.selectedOptions=this.getAllOptions().filter(o=>o.selected),this.multiple?(this.value=this.selectedOptions.map(o=>o.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length)):(this.value=(t=(e=this.selectedOptions[0])==null?void 0:e.value)!=null?t:"",this.displayLabel=(i=(s=this.selectedOptions[0])==null?void 0:s.getTextLabel())!=null?i:""),this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){const s=this.getTag(e,t);return x`<div @sl-remove=${i=>this.handleTagRemove(i,e)}>
          ${typeof s=="string"?cl(s):s}
        </div>`}else if(t===this.maxOptionsVisible)return x`<sl-tag>+${this.selectedOptions.length-t}</sl-tag>`;return x``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(s=>t.includes(s.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await pt(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:e,options:t}=nt(this,"select.show",{dir:this.localize.dir()});await rt(this.popup.popup,e,t),this.currentOption&&ln(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await pt(this);const{keyframes:e,options:t}=nt(this,"select.hide",{dir:this.localize.dir()});await rt(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,At(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,At(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),s=this.label?!0:!!e,i=this.helpText?!0:!!t,o=this.clearable&&!this.disabled&&this.value.length>0,n=this.placeholder&&this.value.length===0;return x`
      <div
        part="form-control"
        class=${K({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":i})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${s?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${K({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":n,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?x`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${o?x`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};_.styles=al;_.dependencies={"sl-icon":j,"sl-popup":A,"sl-tag":Vt};a([S(".select")],_.prototype,"popup",2);a([S(".select__combobox")],_.prototype,"combobox",2);a([S(".select__display-input")],_.prototype,"displayInput",2);a([S(".select__value-input")],_.prototype,"valueInput",2);a([S(".select__listbox")],_.prototype,"listbox",2);a([U()],_.prototype,"hasFocus",2);a([U()],_.prototype,"displayLabel",2);a([U()],_.prototype,"currentOption",2);a([U()],_.prototype,"selectedOptions",2);a([u()],_.prototype,"name",2);a([u({converter:{fromAttribute:e=>e.split(" "),toAttribute:e=>e.join(" ")}})],_.prototype,"value",2);a([Ao()],_.prototype,"defaultValue",2);a([u({reflect:!0})],_.prototype,"size",2);a([u()],_.prototype,"placeholder",2);a([u({type:Boolean,reflect:!0})],_.prototype,"multiple",2);a([u({attribute:"max-options-visible",type:Number})],_.prototype,"maxOptionsVisible",2);a([u({type:Boolean,reflect:!0})],_.prototype,"disabled",2);a([u({type:Boolean})],_.prototype,"clearable",2);a([u({type:Boolean,reflect:!0})],_.prototype,"open",2);a([u({type:Boolean})],_.prototype,"hoist",2);a([u({type:Boolean,reflect:!0})],_.prototype,"filled",2);a([u({type:Boolean,reflect:!0})],_.prototype,"pill",2);a([u()],_.prototype,"label",2);a([u({reflect:!0})],_.prototype,"placement",2);a([u({attribute:"help-text"})],_.prototype,"helpText",2);a([u({reflect:!0})],_.prototype,"form",2);a([u({type:Boolean,reflect:!0})],_.prototype,"required",2);a([u()],_.prototype,"getTag",2);a([R("disabled",{waitUntilFirstUpdate:!0})],_.prototype,"handleDisabledChange",1);a([R("value",{waitUntilFirstUpdate:!0})],_.prototype,"handleValueChange",1);a([R("open",{waitUntilFirstUpdate:!0})],_.prototype,"handleOpenChange",1);at("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});at("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});_.define("sl-select");var dl=M`
  ${N}

  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,ot=class extends D{constructor(){super(...arguments),this.localize=new wt(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){var e;return((e=this.textContent)!=null?e:"").trim()}render(){return x`
      <div
        part="base"
        class=${K({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};ot.styles=dl;ot.dependencies={"sl-icon":j};a([S(".option__label")],ot.prototype,"defaultSlot",2);a([U()],ot.prototype,"current",2);a([U()],ot.prototype,"selected",2);a([U()],ot.prototype,"hasHover",2);a([u({reflect:!0})],ot.prototype,"value",2);a([u({type:Boolean,reflect:!0})],ot.prototype,"disabled",2);a([R("disabled")],ot.prototype,"handleDisabledChange",1);a([R("selected")],ot.prototype,"handleSelectedChange",1);a([R("value")],ot.prototype,"handleValueChange",1);ot.define("sl-option");var hl=M`
  ${N}

  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ul=ss(class extends is{constructor(e){if(super(e),e.type!==vt.PROPERTY&&e.type!==vt.ATTRIBUTE&&e.type!==vt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!no(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===et||t===O)return t;const s=e.element,i=e.name;if(e.type===vt.PROPERTY){if(t===s[i])return et}else if(e.type===vt.BOOLEAN_ATTRIBUTE){if(!!t===s.hasAttribute(i))return et}else if(e.type===vt.ATTRIBUTE&&s.getAttribute(i)===t+"")return et;return Un(e),t}});var W=class extends D{constructor(){super(...arguments),this.formControlController=new ns(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){return x`
      <label
        part="base"
        class=${K({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
      >
        <input
          class="switch__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${P(this.value)}
          .checked=${ul(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          role="switch"
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        />

        <span part="control" class="switch__control">
          <span part="thumb" class="switch__thumb"></span>
        </span>

        <div part="label" class="switch__label">
          <slot></slot>
        </div>
      </label>
    `}};W.styles=hl;a([S('input[type="checkbox"]')],W.prototype,"input",2);a([U()],W.prototype,"hasFocus",2);a([u()],W.prototype,"title",2);a([u()],W.prototype,"name",2);a([u()],W.prototype,"value",2);a([u({reflect:!0})],W.prototype,"size",2);a([u({type:Boolean,reflect:!0})],W.prototype,"disabled",2);a([u({type:Boolean,reflect:!0})],W.prototype,"checked",2);a([Ao("checked")],W.prototype,"defaultChecked",2);a([u({reflect:!0})],W.prototype,"form",2);a([u({type:Boolean,reflect:!0})],W.prototype,"required",2);a([R("checked",{waitUntilFirstUpdate:!0})],W.prototype,"handleCheckedChange",1);a([R("disabled",{waitUntilFirstUpdate:!0})],W.prototype,"handleDisabledChange",1);W.define("sl-switch");async function pl(){if("queryLocalFonts"in window)try{const e=await window.queryLocalFonts();return Es(fl(e))}catch(e){return console.error("Error accessing local fonts:",e),Es(Ii())}else return Es(Ii())}function fl(e){return e.reduce((t,s)=>{const{family:i,style:o}=s;return t[i]||(t[i]=[]),t[i].includes(o)||t[i].push(o),t},{})}function Ii(){const e=["Arial","Calibri","Consolas","Georgia","Impact","Magneto","Segoe UI","Tahoma","Times New Roman","Verdana"],t=["regular","bold","italic","bold_italic"];return e.reduce((s,i)=>(s[i]=t,s),{})}function Es(e){return Object.keys(e).reduce((t,s)=>{const i=s.toLowerCase().split(" ").join("_");let o=e[s].map(n=>n.toLowerCase().split(" ").join("_"));return o=o.filter(n=>ml.includes(n)),o.length===0&&(o=["regular","bold","italic","bold_italic"]),t[i]={full_name:s,styles:o},t},{})}const ml=["regular","bold","italic","bold_italic","narrow","narrow_italic","narrow_bold_italic","black","light","light_italic","medium","demi","demibold","demibold_italic","semibold","semibold_italic","semilight","semilight_italic","oblique","bold_oblique","semibold_condensed","bold_condensed","light_condensed","condensed_bold","condensed_bold_italic","condensed_italic","condensed"];var gl=Object.defineProperty,bl=Object.getOwnPropertyDescriptor,Qs=(e,t,s,i)=>{for(var o=i>1?void 0:i?bl(t,s):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(i?r(t,s,o):r(o))||o);return i&&o&&gl(t,s,o),o};let Qe=class extends lt{constructor(){super(),this.availableFonts={},this.neededIconColor=""}static get styles(){return Ut`

      * {
        box-sizing: border-box;
        font-family: "Segoe UI";
      }

      .root {
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .root h1 {
        padding-left: 20px;
      }

      .controls {
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding: 0 20px;
      }

      sl-details {
        border-radius: 3px;
      }

      sl-details::part(base){
        background-color: var(--details-header-color);
        border-color: var(--details-border-color);
        border-radius: 3px;
      }

      sl-details::part(header){
        background-color: var(--details-header-color);
        padding: 10px;
        height: 30px;
        border-radius: 3px;
      }

      sl-details::part(content){
        background-color: var(--details-content-color);
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 3px;
        border-top: 1px solid var(--settings-border-color);
      }

      sl-details::part(summary-icon){
        rotate: none;
        transition: none;
      }

      /* @keyframes rotateAnimation {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(180deg);
        }
      } */

      .icon-header, .non-collapsable-setting {
        display: flex;
        align-items: center;
      }

      .non-collapsable-setting {
        justify-content: space-between;
        border: 1px solid var(--details-border-color);;
        background-color: var(--details-header-color);
        padding: 10px 15px;
        height: 50px;
        box-sizing: unset;
        border-radius: 3px;
      }

      .ncs-item {
        align-items: center;
      }

      .icon-header div, .ncs-item div {
        display: flex;
        flex-direction: column;
      }

      .non-collapsable-setting div {
        display: flex;
      }

      .flip_icon {
        transform: scale(-1,1);
      }

      .settings-icon, sl-icon {
        margin-right: 15px;
        font-size: 12px;
        fill: var(--text-color)
      }

      h1, h2, p {
        margin: 0;
      }

      h1 {
        font-size: 38px;
        font-weight: 600;
      }

      h2, h3 {
        font-size: 14px;
        font-weight: normal;
      }

      p {
        font-size: 12px;
      }

      .font-options, .font-option {
        display: flex;
        justify-content: space-between;
      }

      .font-options {
        flex-direction: column;
      }

      .font-option {
        border-bottom: 1px solid #e5e5e5;
        align-items: center;
        padding: 10px;
      }

      .font-options:last-child {
        border-bottom: unset;
      }

      h3 {
        margin: 15px;
        margin-left: 43px;
      }

      #font-details::part(content){
        padding: 0;
      }

      .font-demo {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
      }

      .font-option sl-select {
        margin-right: 10px;
      }

      sl-select::part(combobox){
        color: var(--text-color);
        background-color: var(--select-background-color);
        border-color: var(--select-border-color);
      }

      sl-select::part(display-input){
        color: var(--text-color);
      }

      sl-select::part(listbox){
        background-color: var(--select-dropdown-background-color);
        border-color: var(--select-dropdown-background-color);
      }

      sl-select::part(expand-icon){
        font-size: 12px;
      }

      sl-option::part(label){
        color: var(--text-color);
      }

      sl-option::part(base){
        background-color: var(--select-dropdown-background-color);
      }

      sl-option::part(base):hover{
        background-color: var(--option-hover-background-color);
      }

      sl-option::part(checked-icon){
        color: var(--text-color);
      }

      sl-switch {
        margin-right: 10px;
      }

      sl-switch::part(control) {
        --height: 21px;
        --width: 48px;
        --sl-color-primary-600: var(--switch-background-color);
      }

      sl-switch::part(thumb){
        width: 15px;
        height: 15px;
        background-color: var(--switch-thumb-color)
      }

      #open-behavior-select{
        width: fit-content;
      }

      #open-behavior-select::part(display-input){
        font-size: 14px;
        white-space: nowrap;
      }

      .about-this-app {
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding-left: 20px;
      }

      .about-this-app h2 {
        font-weight: bold;
      }
      .about-this-app h2, .about-this-app p {
        font-size: 16px;
      }

      .links {
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: fit-content;
      }

      .links button {
        all: unset;
      }

      .links a, .links button {
        color: var(--link-text-color);
        text-decoration: none;
        font-size: 16px;
        padding: 5px 0;
        width: fit-content;
        padding: 5px 20px;
        border-radius: 3px;
      }

      .links a:visited, .links a:active {
        color: var(--link-text-color)
      }

      .links button {
        all: unset;
        color: var(--link-text-color);
        font-size: 16px;
        padding: 5px 0;
        width: fit-content;
        padding: 5px 20px;
        border-radius: 3px;
      }

      .links button:hover {
        cursor: pointer;
        background-color: var(--link-hover-background-color);
        color: var(--link-hover-text-color);
      }

      .links a:hover {
        background-color: var(--link-hover-background-color);
        color: var(--link-hover-text-color);
      }

      .buttons {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: fit-content;
        padding-left: 20px;
      }

      .buttons * {
        all: unset;
        background-color: var(--button-background-color);
        border-radius: 3px;
        border: 1px solid var(--button-border-color);
        padding: 5px 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
      }

      .buttons *:hover {
        cursor: default;
        background-color: var(--button-hover-background-color);
      }

      #app-theme-details::part(content), #start-behavior-details::part(content){
        padding: 20px 43px;
      }
      sl-radio-group::part(form-control-input){
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      sl-radio::part(base){
        display: flex;
        align-items: center;
      }
      sl-radio::part(control){
        height: 20px;
        width: 20px;
        background-color: var(--radio-pit-color);
        border-color: #949494;
      }
      sl-radio::part(control):hover  {
        background-color: var(--radio-hover-color);
        cursor: default;
      }
      sl-radio::part(control--checked)  {
        color: var(--radio-pit-color);
        background-color: var(--radio-background-color);
        border-color: var(--radio-background-color);
      }
      sl-radio::part(control--checked):hover  {
        color: var(--radio-pit-color);
        background-color: var(--radio-background-color);
        border-color: var(--radio-background-color);
      }

      .subtext {
        color: var(--subtext-color);
      }
    `}async connectedCallback(){super.connectedCallback(),this.availableFonts=await pl()}updateTheme(){let e=this.shadowRoot.querySelector("#theme-group");b.instance.theme=e.value}updateFont(){var o,n,r;const e=(o=this.shadowRoot)==null?void 0:o.querySelector("#family-select"),t=(n=this.shadowRoot)==null?void 0:n.querySelector("#style-select"),s=(r=this.shadowRoot)==null?void 0:r.querySelector("#size-select");let i={family:e.value,style:t.value,size:parseInt(s.value)};b.instance.font=i,this.requestUpdate()}toggleWordsWrapping(){const t=this.shadowRoot.querySelector("sl-switch").checked;b.instance.wrap=t}updateStartBehvaior(){let e=this.shadowRoot.querySelector("#start-group");b.instance.start_behavior=e.value==="true"}generateFontGroups(){if(this.availableFonts&&Object.keys(this.availableFonts).length>0)return T`
      <div class="font-option">
        <h3 id="font-family">Family</h3>
        <sl-select id="family-select" aria-labelledby="font-family" value=${b.instance.font.family} @sl-change=${()=>this.updateFont()}>
          ${Object.keys(this.availableFonts).map(e=>T`<sl-option value="${e}">${this.availableFonts[e].full_name}</sl-option>`)}
        </sl-select>
      </div>
      <div class="font-option">
        <h3 id="font-style">Style</h3>
        <sl-select id="style-select" aria-labelledby="font-style" value=${this.availableFonts[b.instance.font.family].styles.includes(b.instance.font.style)?b.instance.font.style:this.availableFonts[b.instance.font.family].styles[0]} @sl-change=${()=>this.updateFont()}>
          ${this.availableFonts[b.instance.font.family].styles.map(e=>T`<sl-option value="${e}">${e.split("_").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}</sl-option>`)}
        </sl-select>
      </div>
    `}getColorMode(){const e=document.documentElement;getComputedStyle(e).getPropertyValue("--text-color").trim()!=="#191919"&&(this.neededIconColor="_white")}decideFontWeight(){const e=b.instance.font.style;return e.includes("light")?"300":e.includes("semilight")?"350":e.includes("medium")?"500":e.includes("demi")||e.includes("semibold")?"600":e.includes("bold")?"bold":e.includes("black")?"900":"unset"}decideFontStyle(){const e=b.instance.font.style;return e.includes("italic")?"italic":e.includes("oblique")?"oblique":"unset"}render(){const e={"font-size":b.instance.font.size.toString()+"px","font-family":b.instance.font.family,"font-style":this.decideFontStyle(),"font-weight":this.decideFontWeight(),"font-stretch":b.instance.font.style.includes("narrow")||b.instance.font.style.includes("condensed")?"condensed":"unset",margin:"10px"};return T`
      <div class="root">
        <h1>Settings</h1>
        <div class="controls">
            <sl-details id="app-theme-details">
            <sl-icon name="chevron-up" label="chevron-up" slot="expand-icon"></sl-icon>
            <sl-icon name="chevron-down" label="chevron-down" slot="collapse-icon"></sl-icon>
                <div class="icon-header" slot="summary">
                  ${me.theme}
                  <div>
                      <h2 id="app-theme">App theme</h2>
                      <p class="subtext"> Select which app theme to display</p>
                  </div>
                </div>
                <sl-radio-group aria-labelledby="app-theme" id="theme-group" value=${b.instance.theme} @sl-change=${()=>this.updateTheme()}>
                    <sl-radio value="light">Light</sl-radio>
                    <sl-radio value="dark">Dark</sl-radio>
                    <sl-radio value="system">Use system setting</sl-radio>
                </sl-radio-group>
            </sl-details>
            <sl-details id="font-details">
              <sl-icon name="chevron-up" label="chevron-up" slot="expand-icon"></sl-icon>
              <sl-icon name="chevron-down" label="chevron-down" slot="collapse-icon"></sl-icon>
              <div class="icon-header" slot="summary">
                  ${me.font}
                  <h2>Font</h2>
              </div>
              <div class="font-options">

                  ${this.generateFontGroups()}

                  <div class="font-option">
                      <h3 id="font-size">Size</h3>
                      <sl-select id="size-select" aria-labelledby="font-size" value=${b.instance.font.size} @sl-change=${()=>this.updateFont()}>
                          ${vl.map(t=>T`<sl-option value=${t}>${t}</sl-option>`)}
                      </sl-select>
                  </div>
                  <div class="font-demo">
                      <p style=${Js(e)}>The sound of ocean waves calms my soul.</p>
                  </div>
                </div>
            </sl-details>
            <div class="non-collapsable-setting">
              <div class="ncs-item">
                  ${me.wrap}
                  <div>
                      <h2 id="app-theme">Word wrap</h2>
                      <p class="subtext">Fit text within window by default</p>
                  </div>
              </div>
              <sl-switch @sl-change=${()=>this.toggleWordsWrapping()} .checked=${b.instance.wrap}>${b.instance.wrap?"On":"Off"}</sl-switch>
          </div>
        <div class="non-collapsable-setting">
            <div class="ncs-item">
              ${me.open}
              <div>
                  <h2 id="opening-files">Opening files</h2>
                  <p class="subtext">Choose where your files are opened</p>
              </div>
            </div>
            <sl-select id="open-behavior-select" aria-labelledby="opening-files" value="${b.instance.open_behavior}">
                <sl-option value="true">Open in a new tab</sl-option>
                <sl-option value="false">Open in a new window</sl-option>
            </sl-select>
        </div>
          <sl-details id="start-behavior-details">
            <sl-icon name="chevron-up" label="chevron-up" slot="expand-icon"></sl-icon>
            <sl-icon name="chevron-down" label="chevron-down" slot="collapse-icon"></sl-icon>
            <div class="icon-header" slot="summary">
                ${me.tab}
                <h2 id="start-behavior">When Notepad (PWA) starts</h2>
            </div>
            <sl-radio-group id="start-group" aria-labelledby="start-behavior" value=${b.instance.start_behavior} @sl-change=${()=>this.updateStartBehvaior()}>
                <sl-radio value="true">Open content from the previous session</sl-radio>
                <sl-radio value="false">Open a new window</sl-radio>
            </sl-radio-group>
        </sl-details>
        </div>
        <!-- <div class="about-this-app">
            <h2>About this app</h2>
            <p>Windows Notepad 11.2310.12.0<br>
            © 2023 Microsoft. All rights reserved.</p>
        </div>
        <div class="links">
            <a href="https://www.microsoft.com/en-us/Useterms/Retail/Windows/10/UseTerms_Retail_Windows_10_English.htm" target="_blank" rel="noopener">Microsoft Software License Terms</a>
            <a href="https://www.microsoft.com/en-us/servicesagreement" target="_blank" rel="noopener">Microsoft Services Agreement</a>
            <a href="https://privacy.microsoft.com/en-us/privacystatement" target="_blank" rel="noopener">Microsoft Privacy Statement</a>
            <button>Third-Party Software Acknowledgements</button>
        </div>
        <div class="buttons">
            <button>Send feedback</button>
            <a class="link-button" href="https://support.microsoft.com/en-us/windows/help-in-notepad-4d68c388-2ff2-0e7f-b706-35fb2ab88a8c" target="_blank" rel="noopener">Help</a>
        </div> -->
      </div>
    `}};Qs([V()],Qe.prototype,"availableFonts",2);Qs([V()],Qe.prototype,"neededIconColor",2);Qe=Qs([Ht("app-settings")],Qe);const vl=[8,9,10,11,12,14,16,18,20,22,24,26,28,36,48,72],me={theme:T`<svg class="settings-icon" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.75 6.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm3 1a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm2.5 1.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM13.25 14a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm.45-11a7.82 7.82 0 0 0-7.93.17 9.6 9.6 0 0 0-3.25 3.89 5.9 5.9 0 0 0-.62 2.43c0 .8.27 1.57.94 2.12.61.5 1.14.74 1.66.77.51.02.92-.19 1.23-.37l.2-.12c.24-.15.44-.27.69-.35.28-.09.64-.12 1.16.04.19.06.3.14.38.24.09.1.16.26.2.47.06.21.09.46.1.76.02.1.02.24.03.37l.04.58c.05.67.17 1.44.57 2.14.42.7 1.1 1.3 2.2 1.68 1.6.54 3.07.1 4.21-.8a7.46 7.46 0 0 0 2.37-3.6C19.2 9.16 17.68 5.04 13.7 3ZM6.3 4.01a6.82 6.82 0 0 1 6.94-.14c3.5 1.8 4.87 5.4 3.69 9.25a6.46 6.46 0 0 1-2.04 3.1 3.33 3.33 0 0 1-3.26.64c-.9-.3-1.38-.76-1.66-1.24a4 4 0 0 1-.44-1.7l-.04-.54-.02-.41c-.03-.31-.06-.63-.13-.93-.07-.3-.2-.6-.4-.86-.22-.26-.5-.46-.87-.57a2.85 2.85 0 0 0-1.75-.03c-.38.12-.7.32-.95.47l-.14.09c-.29.16-.48.24-.68.23-.22-.01-.55-.12-1.08-.55-.38-.31-.57-.76-.57-1.34 0-.6.19-1.29.52-2.01A8.63 8.63 0 0 1 6.3 4.02Z"/></svg>`,font:T`<svg class="settings-icon" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 2c.2 0 .4.13.47.32L8.9 8.57v.02l.18.44-.53 1.4-.46-1.17H3.91l-.94 2.42a.5.5 0 1 1-.94-.36L3.1 8.59v-.02l2.43-6.25A.5.5 0 0 1 6 2ZM4.3 8.26h3.4L6 3.88 4.3 8.26Zm8.17-2.94a.5.5 0 0 0-.94 0L7.15 17H6.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-.28l1.13-3h5.37l1.15 3h-.37a.5.5 0 1 0 0 1h2a.5.5 0 1 0 0-1h-.56L12.47 5.32ZM14.34 13H9.72l2.29-6.09L14.34 13Z"/></svg>`,wrap:T`<svg class="settings-icon" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 4.5c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5Zm0 5c0-.28.22-.5.5-.5H16a3 3 0 1 1 0 6h-4.3l.65.65a.5.5 0 0 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 0 1 .7.7l-.64.65H16a2 2 0 1 0 0-4H2.5a.5.5 0 0 1-.5-.5Zm0 5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Z"/></svg>`,open:T`<svg class="settings-icon" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-2.5a.5.5 0 0 1 1 0V14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h2.5a.5.5 0 0 1 0 1H6Zm5-.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V4.7l-4.15 4.15a.5.5 0 0 1-.7-.7L15.29 4H11.5a.5.5 0 0 1-.5-.5Z"/></svg>`,tab:T`<svg class="settings-icon flip_icon" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9ZM16 6v-.5c0-.83-.67-1.5-1.5-1.5H9v1.5c0 .28.22.5.5.5H16ZM8 4H5.5C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V7H9.5A1.5 1.5 0 0 1 8 5.5V4Z"/></svg>`};var yl=Object.defineProperty,wl=Object.getOwnPropertyDescriptor,jt=(e,t,s,i)=>{for(var o=i>1?void 0:i?wl(t,s):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(i?r(t,s,o):r(o))||o);return i&&o&&yl(t,s,o),o};let Lt=class extends lt{constructor(){super(),this.start=0,this.end=0,this.line=0,this.lineEnding="Windows (CRLF)",this.encoding="UTF-8",this.zoom=100,g.instance.on(E.cursorPositionChanged,()=>this.handleCursorUpdate(this)),g.instance.on(E.fileEndingChanged,()=>this.handleDataChange(this,"file-ending")),g.instance.on(E.encodingChanged,()=>this.handleDataChange(this,"encoding")),b.instance.on(tt.zoomChanged,()=>this.handleDataChange(this,"zoom"))}static get styles(){return Ut`
      .root {
        height: 16px;
        width: 100%;
        background-color: var(--status-bar-background-color);
        border-top: solid 1.5px var(--status-bar-border-color);
        display: grid;
        grid-template-columns: 6fr 13fr 5fr 10fr 10fr;
        padding: 7px;
        font-family: "Segoe UI Variable Text", "Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 12px;
        color: var(--status-bar-text-color);
      }

      .position, .zoom, .line-endings {
        border-right: 1px solid var(--status-bar-gap-color);
      }

      .root > * {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-left: 10px;
      }
    `}disconnectedCallback(){g.instance.removeListener(E.cursorPositionChanged,this.handleCursorUpdate),g.instance.removeListener(E.fileEndingChanged,()=>this.handleDataChange(this,"file-ending")),g.instance.removeListener(E.encodingChanged,()=>this.handleDataChange(this,"encoding"))}handleCursorUpdate(e){if(g.instance.cursorPosition){const t=g.instance.cursorPosition;e.start=t.start,e.end=g.instance.cursorPosition.end,e.line=g.instance.cursorPosition.line}}handleDataChange(e,t){switch(t){case"file-ending":g.instance.fileEnding&&(e.lineEnding=g.instance.fileEnding);break;case"encoding":g.instance.encoding&&(e.encoding=g.instance.encoding);break;case"zoom":b.instance.zoom&&(e.zoom=b.instance.zoom);break;default:console.log(`No implementation for ${t}`)}this.requestUpdate()}render(){return T`
      <div class="root">
        <div class="position">
          Ln ${this.line}, Col ${this.end}
        </div>
        <div class="zoom">${g.instance.editorContents.length} characters</div>
        <div class="zoom">${this.zoom}%</div>
        <div class="line-endings">${this.lineEnding}</div>
        <div class="text-type">${this.encoding}</div>
      </div>
    `}};jt([V()],Lt.prototype,"start",2);jt([V()],Lt.prototype,"end",2);jt([V()],Lt.prototype,"line",2);jt([V()],Lt.prototype,"lineEnding",2);jt([V()],Lt.prototype,"encoding",2);jt([V()],Lt.prototype,"zoom",2);Lt=jt([Ht("app-status-bar")],Lt);var _l=Object.defineProperty,xl=Object.getOwnPropertyDescriptor,hs=(e,t,s,i)=>{for(var o=i>1?void 0:i?xl(t,s):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(i?r(t,s,o):r(o))||o);return i&&o&&_l(t,s,o),o};let Te=class extends lt{constructor(){super(),this.showClear=!1,this.showReplace=!1,this.inputValue="",localStorage.getItem("search-string-setting-state")&&(g.instance.substringToFind=JSON.parse(localStorage.getItem("search-string-setting-state"))),localStorage.getItem("notepadSettings")&&(b.instance.matchCaseForSearchResult=JSON.parse(localStorage.getItem("notepadSettings")).matchCaseForSearchResult||!1),this.inputValue=g.instance.substringToFind}static get styles(){return Ut`

    * {
        box-sizing: border-box;
    }

    .root {
        display: flex;
        flex-direction: column;
        width: fit-content;
        align-items: center;
        justify-content: center;
        padding: 8px;
        border: 1px solid #bfbfbf;
        background-color: #fbfbfb;
        border-radius: 8px;
        gap: 10px;
        box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
    }

    .find-holder {
      display: flex;
      width: 100%;
      gap: 10px;
    }

    .replace-holder {
      display: flex;
      width: 100%;
      gap: 10px;
    }

    .ghost {
      height: 35px;
      width: 35px;
    }

    .input-and-actions {
      background-color: #ffffff;
      border-radius: 4px;
      border: 1px solid #e5e5e5;
      border-bottom: 1px solid #000000;
      width: 250px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 5px;
    }

    .the-input {
        width: 100%;
        border: none;
        outline: none;
    }

    .the-input:focus-visible {
        outline: none;
    }

    .input-and-actions:focus-within {
        outline: none;
        border-bottom: 2px solid var(--link-text-color);
    }

    .icon-button {
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border: none;
        width: 35px;
        height: 35px;
        border-radius: 8px;
    }

    .icon-button:hover {
        background-color: #f3f3f3;
    }

    .search-action {
        padding: 5px 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border: none;
        width: 35px;
        height: 25px;
        border-radius: 8px;
    }

    .search-action:hover {
        background-color: #f3f3f3;
    }

    sl-menu {
        background-color: var(--menu-dropdown-background-color);
        border-color: var(--menu-dropdown-background-color);
        color: var(--text-color);
        padding: 5px;
        --auto-size-available-height: calc(var(--auto-size-available-height) + 20px);
    }

    sl-menu-item::part(base){
        border-radius: 4px;
        width: 100%;
    }

    sl-menu-item:hover {
        cursor: default;
    }

    sl-menu-item::part(base):hover{
        cursor: default;
        color: var(--text-color);
        background-color: var(--menu-item-hover-background-color);
    }

    sl-menu-item::part(label){
        font-size: 14px;
    }

    .replace-holder button {
      all: unset;
      background-color: var(--button-background-color);
      border-radius: 3px;
      border: 1px solid var(--button-border-color);
      padding: 5px 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      width: 18%;
    }

    .replace-holder button:hover {
      cursor: default;
      background-color: var(--button-hover-background-color);
    }

    #replace-form {
      display: flex;
      gap: 10px;
    }

    .replace-input-box {
      width: 245px;
    }

    `}firstUpdated(){let e=this.shadowRoot.querySelector("input");e==null||e.focus()}updateSubstringToFind(){const t=this.shadowRoot.querySelector("input").value;t.length===0?this.showClear=!1:this.showClear=!0,g.instance.substringToFind=t,this.requestUpdate()}handleSubmit(e){e.preventDefault(),g.instance.search(g.instance.findListIndex)}updateIndex(e){g.instance.findListIndex+=e}clearInput(){const e=this.shadowRoot.querySelector("input");e.value="",this.showClear=!0,g.instance.selection.removeAllRanges(),g.instance.substringToFind=""}handleCloseComponent(){this.dispatchEvent(new Event("close-find-input",{bubbles:!0,composed:!0}))}menuItemClicked(e){switch(e){case"match-case":b.instance.matchCaseForSearchResult=!b.instance.matchCaseForSearchResult;break;case"wrap":b.instance.wrapSearchResults=!b.instance.wrapSearchResults;break;default:console.log(`${e} NOT IMPLEMENTED`)}}handleShowingReplace(){this.showReplace=!this.showReplace,this.requestUpdate()}handleReplace(e){const t=this.shadowRoot.getElementById("replace-form"),i=new FormData(t).get("replaceText");e?g.instance.replaceAll(i):g.instance.replace(i)}render(){const e={display:this.showReplace?"flex":"none"};return T`
        <div class="root">
          <div class="find-holder">
            <button type="button" class="icon-button" value="show-more" @click=${()=>this.handleShowingReplace()}><sl-icon name="chevron-up" label="chevron-up"></sl-icon></button>

            <form class="input-and-actions" @submit=${t=>this.handleSubmit(t)}>
              <input .value=${this.inputValue} class="the-input" placeholder="Find" @input=${()=>this.updateSubstringToFind()} />
              ${this.showClear?T`<button type="button" class="search-action" value="clear" @click=${()=>this.clearInput()}><sl-icon name="x-lg" label="close"></sl-icon></button>`:null}
              <button type="button" class="search-action" value="search" @click=${()=>g.instance.search(g.instance.findListIndex)}><sl-icon name="search" label="search"></sl-icon></button>
            </form>
            <button type="button" class="icon-button" value="previous" @click=${()=>this.updateIndex(1)}><sl-icon name="arrow-down" label="arrow-down"></sl-icon></button>
            <button type="button" class="icon-button" value="next" @click=${()=>this.updateIndex(-1)}><sl-icon name="arrow-up" label="arrow-up"></sl-icon></button>
            <sl-dropdown placement="bottom">
                <button type="button" slot="trigger" class="icon-button" value="options"><sl-icon name="sliders" label="sliders"></sl-icon></button>
                <sl-menu class="zoom-menu" @sl-select=${t=>this.menuItemClicked(t.detail.item.value)}>
                    <sl-menu-item type="checkbox" value="match-case" ?checked=${b.instance.matchCaseForSearchResult}>Match case</sl-menu-item>
                    <sl-menu-item type="checkbox" value="wrap" ?checked=${b.instance.wrapSearchResults}>Wrap around</sl-menu-item>
                </sl-menu>
            </sl-dropdown>
            <button type="button" class="icon-button" value="close" @click=${()=>this.handleCloseComponent()}><sl-icon name="x-lg" label="close"></sl-icon></button>
          </div>

          <div class="replace-holder" style=${Js(e)}>
          <div class="ghost"></div>
          <form id="replace-form" @submit=${t=>t.preventDefault()}>
            <div class="input-and-actions replace-input-box"><input name="replaceText" class="the-input" placeholder="Replace" /></div>
            <button type="submit" @click=${()=>this.handleReplace(!1)}>Replace</button>
            <button type="submit" @click=${()=>this.handleReplace(!0)}>Replace all</button>
          </form>
          </div>

        </div>
    `}};hs([V()],Te.prototype,"showClear",2);hs([V()],Te.prototype,"showReplace",2);hs([V()],Te.prototype,"inputValue",2);Te=hs([Ht("find-input")],Te);var $l=Object.defineProperty,kl=Object.getOwnPropertyDescriptor,oe=(e,t,s,i)=>{for(var o=i>1?void 0:i?kl(t,s):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(i?r(t,s,o):r(o))||o);return i&&o&&$l(t,s,o),o};let Cl="/shoelace";Os(Cl);let Nt=class extends lt{constructor(){super(),this.showSettings=!1,this.showingStatusBar=!0,this.showingFindInput=!1,"launchQueue"in window?window.launchQueue.setConsumer(e=>{if(!!e.files.length)for(const t of e.files)g.instance.setFileHandle(t)}):console.error("File Handling API is not supported!"),document.addEventListener("keydown",e=>{e.ctrlKey&&e.key==="s"&&(e.preventDefault(),g.instance.saveFile())}),document.addEventListener("keydown",e=>{e.ctrlKey&&(e.key==="+"||e.key==="=")&&(e.preventDefault(),b.instance.zoom+=10)}),document.addEventListener("keydown",e=>{e.ctrlKey&&(e.key==="-"||e.key==="_")&&(e.preventDefault(),b.instance.zoom+=-10)}),document.addEventListener("keydown",e=>{e.ctrlKey&&(e.key==="0"||e.key===")")&&(e.preventDefault(),b.instance.zoom=100)}),document.addEventListener("keydown",e=>{e.ctrlKey&&e.key==="f"&&(e.preventDefault(),this.showingFindInput=!0)}),window.addEventListener("beforeunload",e=>{if(g.instance.isDirty){const t=`Do you want to save changes to ${g.instance.fileName||"Untitled"}`;return e.returnValue=t,t}}),g.instance.on(E.decideOnChanges,e=>this.showDialog(e)),b.instance.on(tt.showingStatusBarChanged,()=>this.toggleStatusBar())}static get styles(){return Ut`

      .root {
        display: flex;
        flex-direction: column;
        height: 100vh;
        overflow: hidden;
        position: relative;
      }

      .root.settings-root {
        justify-content: flex-start;
        backdrop-filter: blur(1px);

        background: var(--settings-background);
        color: var(--text-color);
        /* background: -moz-linear-gradient(45deg, hsla(207, 48%, 95%, 1) 0%, hsla(34, 57%, 95%, 1) 100%);
        background: -webkit-linear-gradient(45deg, hsla(207, 48%, 95%, 1) 0%, hsla(34, 57%, 95%, 1) 100%); */
        filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#EEF4F9", endColorstr="#F9F2E9", GradientType=1 );
        overflow-y: auto;
      }

      app-editor {
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: auto;
        overflow: auto;


        /* background-color: pink; //todo - remove */
      }
      app-editor::-webkit-scrollbar {
        width: 4px;
        height: 14px;
      }

      app-editor::-webkit-scrollbar-thumb {
        background-color: #a1a1a1;
        border: 4px solid rgba(0, 0, 0, 0);
        background-clip: padding-box;
        border-radius: 9999px;
      }

      .search-holder {
      position: absolute;
      width: 100%;
      top: 75px; /* Fixed distance from the top */
      left: 50%;
      transform: translate(-50%, 0);
      display: flex;
      align-items: flex-start; /* Align items at the top */
      justify-content: center;
      height: auto; /* Let the height adjust to the content */
    }

      /* app-header,
      app-menu {
        flex-grow: 0;
        flex-shrink: 0;
      } */
    `}connectedCallback(){super.connectedCallback(),b.instance.on(tt.themeChanged,this.updateTheme),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",this.updateTheme),this.updateTheme()}toggleStatusBar(){console.log(b.instance.showingStatusBar),this.showingStatusBar=b.instance.showingStatusBar,this.requestUpdate()}showDialog(e){this.afterDialogAction=e,this.dialog.show()}async continueFromDialog(e){var t;e&&await g.instance.saveFile(),(t=this.dialog)==null||t.hide(),this.afterDialogAction==="open"?g.instance.openFile(!0):g.instance.newFile(!0)}updateStateForSettingsPage(){this.showSettings=!0,this.shadowRoot.querySelector(".root").classList.add("settings-root")}backToEditor(){this.showSettings=!1,this.shadowRoot.querySelector(".root").classList.remove("settings-root")}updateSettings(){this.appSettings=JSON.parse(localStorage.getItem("notepadSettings"))}updateTheme(){let e=document.querySelector("html");b.instance.theme==="system"?window.matchMedia("(prefers-color-scheme: dark)").matches?e.classList.add("dark-mode"):e.classList.remove("dark-mode"):b.instance.theme==="light"?e.classList.remove("dark-mode"):e.classList.add("dark-mode")}render(){return T`
      <div class="root" @show-find-input=${()=>this.showingFindInput=!0} @close-find-input=${()=>this.showingFindInput=!1}>
        <app-header .settingsShowing=${this.showSettings} @showEditor=${()=>this.backToEditor()}></app-header>
        ${this.showSettings?T`
            <app-settings></app-settings>
          `:T`
            <app-menu @showSettingsPage=${()=>this.updateStateForSettingsPage()}></app-menu>
            <app-editor
              .fontStyles=${b.instance.font}
            ></app-editor>
            ${this.showingStatusBar?T`<app-status-bar></app-status-bar>`:null}
          `}

        <sl-dialog label="Notepad" class="dialog">
          Do you want to save changes to ${g.instance.fileName||"Untitled"}?
          <sl-button slot="footer" variant="primary" @click=${()=>this.continueFromDialog(!0)}>Save</sl-button>
          <sl-button slot="footer" @click=${()=>this.continueFromDialog(!1)}>Don't save</sl-button>
          <sl-button slot="footer" @click=${()=>{var e;return(e=this.dialog)==null?void 0:e.hide()}}>Cancel</sl-button>
        </sl-dialog>

        ${this.showingFindInput?T`<div class="search-holder"><find-input></find-input></div>`:null}
      </div>
    `}};oe([V()],Nt.prototype,"appSettings",2);oe([V()],Nt.prototype,"showSettings",2);oe([V()],Nt.prototype,"showingStatusBar",2);oe([V()],Nt.prototype,"showingFindInput",2);oe([Yi(".dialog",!0)],Nt.prototype,"dialog",2);Nt=oe([Ht("app-index")],Nt);
//# sourceMappingURL=index.b5bbffe5.js.map
