(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zt=window,qe=Zt.ShadowRoot&&(Zt.ShadyCSS===void 0||Zt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,We=Symbol(),oo=new WeakMap;class Wo{constructor(e,o,i){if(this._$cssResult$=!0,i!==We)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=o}get styleSheet(){let e=this.o;const o=this.t;if(qe&&e===void 0){const i=o!==void 0&&o.length===1;i&&(e=oo.get(o)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&oo.set(o,e))}return e}toString(){return this.cssText}}const ki=t=>new Wo(typeof t=="string"?t:t+"",void 0,We),It=(t,...e)=>{const o=t.length===1?t[0]:e.reduce((i,r,s)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[s+1],t[0]);return new Wo(o,t,We)},Pi=(t,e)=>{qe?t.adoptedStyleSheets=e.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet):e.forEach(o=>{const i=document.createElement("style"),r=Zt.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=o.cssText,t.appendChild(i)})},io=qe?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let o="";for(const i of e.cssRules)o+=i.cssText;return ki(o)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ve;const Qt=window,ro=Qt.trustedTypes,Ti=ro?ro.emptyScript:"",so=Qt.reactiveElementPolyfillSupport,Le={toAttribute(t,e){switch(e){case Boolean:t=t?Ti:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=t!==null;break;case Number:o=t===null?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch{o=null}}return o}},Ko=(t,e)=>e!==t&&(e==e||t==t),ge={attribute:!0,type:String,converter:Le,reflect:!1,hasChanged:Ko};class ut extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var o;(o=this.h)!==null&&o!==void 0||(this.h=[]),this.h.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((o,i)=>{const r=this._$Ep(i,o);r!==void 0&&(this._$Ev.set(r,i),e.push(r))}),e}static createProperty(e,o=ge){if(o.state&&(o.attribute=!1),this.finalize(),this.elementProperties.set(e,o),!o.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,i,o);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,o,i){return{get(){return this[o]},set(r){const s=this[e];this[o]=r,this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||ge}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const o=this.properties,i=[...Object.getOwnPropertyNames(o),...Object.getOwnPropertySymbols(o)];for(const r of i)this.createProperty(r,o[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const o=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)o.unshift(io(r))}else e!==void 0&&o.push(io(e));return o}static _$Ep(e,o){const i=o.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(o=>this.enableUpdating=o),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(o=>o(this))}addController(e){var o,i;((o=this._$ES)!==null&&o!==void 0?o:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var o;(o=this._$ES)===null||o===void 0||o.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,o)=>{this.hasOwnProperty(o)&&(this._$Ei.set(o,this[o]),delete this[o])})}createRenderRoot(){var e;const o=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Pi(o,this.constructor.elementStyles),o}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(o=>{var i;return(i=o.hostConnected)===null||i===void 0?void 0:i.call(o)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(o=>{var i;return(i=o.hostDisconnected)===null||i===void 0?void 0:i.call(o)})}attributeChangedCallback(e,o,i){this._$AK(e,i)}_$EO(e,o,i=ge){var r;const s=this.constructor._$Ep(e,i);if(s!==void 0&&i.reflect===!0){const n=(((r=i.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?i.converter:Le).toAttribute(o,i.type);this._$El=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(e,o){var i;const r=this.constructor,s=r._$Ev.get(e);if(s!==void 0&&this._$El!==s){const n=r.getPropertyOptions(s),a=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?n.converter:Le;this._$El=s,this[s]=a.fromAttribute(o,n.type),this._$El=null}}requestUpdate(e,o,i){let r=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Ko)(this[e],o)?(this._$AL.has(e)||this._$AL.set(e,o),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(o){Promise.reject(o)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,s)=>this[s]=r),this._$Ei=void 0);let o=!1;const i=this._$AL;try{o=this.shouldUpdate(i),o?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var s;return(s=r.hostUpdate)===null||s===void 0?void 0:s.call(r)}),this.update(i)):this._$Ek()}catch(r){throw o=!1,this._$Ek(),r}o&&this._$AE(i)}willUpdate(e){}_$AE(e){var o;(o=this._$ES)===null||o===void 0||o.forEach(i=>{var r;return(r=i.hostUpdated)===null||r===void 0?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((o,i)=>this._$EO(i,this[i],o)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}ut.finalized=!0,ut.elementProperties=new Map,ut.elementStyles=[],ut.shadowRootOptions={mode:"open"},so==null||so({ReactiveElement:ut}),((ve=Qt.reactiveElementVersions)!==null&&ve!==void 0?ve:Qt.reactiveElementVersions=[]).push("1.4.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var be;const Gt=window,gt=Gt.trustedTypes,no=gt?gt.createPolicy("lit-html",{createHTML:t=>t}):void 0,J=`lit$${(Math.random()+"").slice(9)}$`,Xo="?"+J,Li=`<${Xo}>`,bt=document,Ht=(t="")=>bt.createComment(t),Nt=t=>t===null||typeof t!="object"&&typeof t!="function",Yo=Array.isArray,Di=t=>Yo(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",kt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ao=/-->/g,lo=/>/g,it=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),co=/'/g,uo=/"/g,Zo=/^(?:script|style|textarea|title)$/i,Oi=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),Bt=Oi(1),yt=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),ho=new WeakMap,zi=(t,e,o)=>{var i,r;const s=(i=o==null?void 0:o.renderBefore)!==null&&i!==void 0?i:e;let n=s._$litPart$;if(n===void 0){const a=(r=o==null?void 0:o.renderBefore)!==null&&r!==void 0?r:null;s._$litPart$=n=new Vt(e.insertBefore(Ht(),a),a,void 0,o!=null?o:{})}return n._$AI(t),n},mt=bt.createTreeWalker(bt,129,null,!1),Hi=(t,e)=>{const o=t.length-1,i=[];let r,s=e===2?"<svg>":"",n=kt;for(let l=0;l<o;l++){const c=t[l];let p,d,h=-1,m=0;for(;m<c.length&&(n.lastIndex=m,d=n.exec(c),d!==null);)m=n.lastIndex,n===kt?d[1]==="!--"?n=ao:d[1]!==void 0?n=lo:d[2]!==void 0?(Zo.test(d[2])&&(r=RegExp("</"+d[2],"g")),n=it):d[3]!==void 0&&(n=it):n===it?d[0]===">"?(n=r!=null?r:kt,h=-1):d[1]===void 0?h=-2:(h=n.lastIndex-d[2].length,p=d[1],n=d[3]===void 0?it:d[3]==='"'?uo:co):n===uo||n===co?n=it:n===ao||n===lo?n=kt:(n=it,r=void 0);const v=n===it&&t[l+1].startsWith("/>")?" ":"";s+=n===kt?c+Li:h>=0?(i.push(p),c.slice(0,h)+"$lit$"+c.slice(h)+J+v):c+J+(h===-2?(i.push(void 0),l):v)}const a=s+(t[o]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[no!==void 0?no.createHTML(a):a,i]};class Mt{constructor({strings:e,_$litType$:o},i){let r;this.parts=[];let s=0,n=0;const a=e.length-1,l=this.parts,[c,p]=Hi(e,o);if(this.el=Mt.createElement(c,i),mt.currentNode=this.el.content,o===2){const d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(r=mt.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes()){const d=[];for(const h of r.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(J)){const m=p[n++];if(d.push(h),m!==void 0){const v=r.getAttribute(m.toLowerCase()+"$lit$").split(J),g=/([.?@])?(.*)/.exec(m);l.push({type:1,index:s,name:g[2],strings:v,ctor:g[1]==="."?Mi:g[1]==="?"?Ui:g[1]==="@"?Fi:de})}else l.push({type:6,index:s})}for(const h of d)r.removeAttribute(h)}if(Zo.test(r.tagName)){const d=r.textContent.split(J),h=d.length-1;if(h>0){r.textContent=gt?gt.emptyScript:"";for(let m=0;m<h;m++)r.append(d[m],Ht()),mt.nextNode(),l.push({type:2,index:++s});r.append(d[h],Ht())}}}else if(r.nodeType===8)if(r.data===Xo)l.push({type:2,index:s});else{let d=-1;for(;(d=r.data.indexOf(J,d+1))!==-1;)l.push({type:7,index:s}),d+=J.length-1}s++}}static createElement(e,o){const i=bt.createElement("template");return i.innerHTML=e,i}}function wt(t,e,o=t,i){var r,s,n,a;if(e===yt)return e;let l=i!==void 0?(r=o._$Cl)===null||r===void 0?void 0:r[i]:o._$Cu;const c=Nt(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((s=l==null?void 0:l._$AO)===null||s===void 0||s.call(l,!1),c===void 0?l=void 0:(l=new c(t),l._$AT(t,o,i)),i!==void 0?((n=(a=o)._$Cl)!==null&&n!==void 0?n:a._$Cl=[])[i]=l:o._$Cu=l),l!==void 0&&(e=wt(t,l._$AS(t,e.values),l,i)),e}class Ni{constructor(e,o){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var o;const{el:{content:i},parts:r}=this._$AD,s=((o=e==null?void 0:e.creationScope)!==null&&o!==void 0?o:bt).importNode(i,!0);mt.currentNode=s;let n=mt.nextNode(),a=0,l=0,c=r[0];for(;c!==void 0;){if(a===c.index){let p;c.type===2?p=new Vt(n,n.nextSibling,this,e):c.type===1?p=new c.ctor(n,c.name,c.strings,this,e):c.type===6&&(p=new Ii(n,this,e)),this.v.push(p),c=r[++l]}a!==(c==null?void 0:c.index)&&(n=mt.nextNode(),a++)}return s}m(e){let o=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,o),o+=i.strings.length-2):i._$AI(e[o])),o++}}class Vt{constructor(e,o,i,r){var s;this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=e,this._$AB=o,this._$AM=i,this.options=r,this._$C_=(s=r==null?void 0:r.isConnected)===null||s===void 0||s}get _$AU(){var e,o;return(o=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&o!==void 0?o:this._$C_}get parentNode(){let e=this._$AA.parentNode;const o=this._$AM;return o!==void 0&&e.nodeType===11&&(e=o.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,o=this){e=wt(this,e,o),Nt(e)?e===S||e==null||e===""?(this._$AH!==S&&this._$AR(),this._$AH=S):e!==this._$AH&&e!==yt&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):Di(e)?this.O(e):this.$(e)}S(e,o=this._$AB){return this._$AA.parentNode.insertBefore(e,o)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}$(e){this._$AH!==S&&Nt(this._$AH)?this._$AA.nextSibling.data=e:this.k(bt.createTextNode(e)),this._$AH=e}T(e){var o;const{values:i,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Mt.createElement(r.h,this.options)),r);if(((o=this._$AH)===null||o===void 0?void 0:o._$AD)===s)this._$AH.m(i);else{const n=new Ni(s,this),a=n.p(this.options);n.m(i),this.k(a),this._$AH=n}}_$AC(e){let o=ho.get(e.strings);return o===void 0&&ho.set(e.strings,o=new Mt(e)),o}O(e){Yo(this._$AH)||(this._$AH=[],this._$AR());const o=this._$AH;let i,r=0;for(const s of e)r===o.length?o.push(i=new Vt(this.S(Ht()),this.S(Ht()),this,this.options)):i=o[r],i._$AI(s),r++;r<o.length&&(this._$AR(i&&i._$AB.nextSibling,r),o.length=r)}_$AR(e=this._$AA.nextSibling,o){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,o);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var o;this._$AM===void 0&&(this._$C_=e,(o=this._$AP)===null||o===void 0||o.call(this,e))}}class de{constructor(e,o,i,r,s){this.type=1,this._$AH=S,this._$AN=void 0,this.element=e,this.name=o,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=S}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,o=this,i,r){const s=this.strings;let n=!1;if(s===void 0)e=wt(this,e,o,0),n=!Nt(e)||e!==this._$AH&&e!==yt,n&&(this._$AH=e);else{const a=e;let l,c;for(e=s[0],l=0;l<s.length-1;l++)c=wt(this,a[i+l],o,l),c===yt&&(c=this._$AH[l]),n||(n=!Nt(c)||c!==this._$AH[l]),c===S?e=S:e!==S&&(e+=(c!=null?c:"")+s[l+1]),this._$AH[l]=c}n&&!r&&this.P(e)}P(e){e===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class Mi extends de{constructor(){super(...arguments),this.type=3}P(e){this.element[this.name]=e===S?void 0:e}}const Ri=gt?gt.emptyScript:"";class Ui extends de{constructor(){super(...arguments),this.type=4}P(e){e&&e!==S?this.element.setAttribute(this.name,Ri):this.element.removeAttribute(this.name)}}class Fi extends de{constructor(e,o,i,r,s){super(e,o,i,r,s),this.type=5}_$AI(e,o=this){var i;if((e=(i=wt(this,e,o,0))!==null&&i!==void 0?i:S)===yt)return;const r=this._$AH,s=e===S&&r!==S||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==S&&(r===S||s);s&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var o,i;typeof this._$AH=="function"?this._$AH.call((i=(o=this.options)===null||o===void 0?void 0:o.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class Ii{constructor(e,o,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=o,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){wt(this,e)}}const po=Gt.litHtmlPolyfillSupport;po==null||po(Mt,Vt),((be=Gt.litHtmlVersions)!==null&&be!==void 0?be:Gt.litHtmlVersions=[]).push("2.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ye,we;class W extends ut{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,o;const i=super.createRenderRoot();return(e=(o=this.renderOptions).renderBefore)!==null&&e!==void 0||(o.renderBefore=i.firstChild),i}update(e){const o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=zi(o,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return yt}}W.finalized=!0,W._$litElement$=!0,(ye=globalThis.litElementHydrateSupport)===null||ye===void 0||ye.call(globalThis,{LitElement:W});const fo=globalThis.litElementPolyfillSupport;fo==null||fo({LitElement:W});((we=globalThis.litElementVersions)!==null&&we!==void 0?we:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jt=t=>e=>typeof e=="function"?((o,i)=>(customElements.define(o,i),i))(t,e):((o,i)=>{const{kind:r,elements:s}=i;return{kind:r,elements:s,finisher(n){customElements.define(o,n)}}})(t,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bi=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(o){o.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function Jo(t){return(e,o)=>o!==void 0?((i,r,s)=>{r.constructor.createProperty(s,i)})(t,e,o):Bi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vi=({finisher:t,descriptor:e})=>(o,i)=>{var r;if(i===void 0){const s=(r=o.originalKey)!==null&&r!==void 0?r:o.key,n=e!=null?{kind:"method",placement:"prototype",key:s,descriptor:e(o.key)}:{...o,key:s};return t!=null&&(n.finisher=function(a){t(a,s)}),n}{const s=o.constructor;e!==void 0&&Object.defineProperty(o,i,e(i)),t==null||t(s,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Qo(t,e){return Vi({descriptor:o=>{const i={get(){var r,s;return(s=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(t))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(e){const r=typeof o=="symbol"?Symbol():"__"+o;i.get=function(){var s,n;return this[r]===void 0&&(this[r]=(n=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(t))!==null&&n!==void 0?n:null),this[r]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _e;((_e=window.HTMLSlotElement)===null||_e===void 0?void 0:_e.prototype.assignedElements)!=null;var De="";function Oe(t){De=t}function ji(){if(!De){const t=[...document.getElementsByTagName("script")],e=t.find(o=>o.hasAttribute("data-shoelace"));if(e)Oe(e.getAttribute("data-shoelace"));else{const o=t.find(r=>/shoelace(\.min)?\.js($|\?)/.test(r.src));let i="";o&&(i=o.getAttribute("src")),Oe(i.split("/").slice(0,-1).join("/"))}}return De.replace(/\/$/,"")}var Go=Object.defineProperty,qi=Object.defineProperties,Wi=Object.getOwnPropertyDescriptor,Ki=Object.getOwnPropertyDescriptors,te=Object.getOwnPropertySymbols,ti=Object.prototype.hasOwnProperty,ei=Object.prototype.propertyIsEnumerable,mo=(t,e,o)=>e in t?Go(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,E=(t,e)=>{for(var o in e||(e={}))ti.call(e,o)&&mo(t,o,e[o]);if(te)for(var o of te(e))ei.call(e,o)&&mo(t,o,e[o]);return t},H=(t,e)=>qi(t,Ki(e)),Ke=(t,e)=>{var o={};for(var i in t)ti.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(t!=null&&te)for(var i of te(t))e.indexOf(i)<0&&ei.call(t,i)&&(o[i]=t[i]);return o},u=(t,e,o,i)=>{for(var r=i>1?void 0:i?Wi(e,o):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(i?n(e,o,r):n(r))||r);return i&&r&&Go(e,o,r),r};function vo(t){const e=t.tagName.toLowerCase();return t.getAttribute("tabindex")==="-1"||t.hasAttribute("disabled")||t.hasAttribute("aria-disabled")&&t.getAttribute("aria-disabled")!=="false"||e==="input"&&t.getAttribute("type")==="radio"&&!t.hasAttribute("checked")||t.offsetParent===null||window.getComputedStyle(t).visibility==="hidden"?!1:(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(e)}function oi(t){var e,o;const i=[];function r(a){a instanceof HTMLElement&&(i.push(a),a.shadowRoot!==null&&a.shadowRoot.mode==="open"&&r(a.shadowRoot)),[...a.children].forEach(l=>r(l))}r(t);const s=(e=i.find(a=>vo(a)))!=null?e:null,n=(o=i.reverse().find(a=>vo(a)))!=null?o:null;return{start:s,end:n}}var Pt=[],Xi=class{constructor(t){this.tabDirection="forward",this.element=t,this.handleFocusIn=this.handleFocusIn.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this)}activate(){Pt.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Pt=Pt.filter(t=>t!==this.element),document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Pt[Pt.length-1]===this.element}checkFocus(){if(this.isActive()&&!this.element.matches(":focus-within")){const{start:t,end:e}=oi(this.element),o=this.tabDirection==="forward"?t:e;typeof(o==null?void 0:o.focus)=="function"&&o.focus({preventScroll:!0})}}handleFocusIn(){this.checkFocus()}handleKeyDown(t){t.key==="Tab"&&t.shiftKey&&(this.tabDirection="backward"),requestAnimationFrame(()=>this.checkFocus())}handleKeyUp(){this.tabDirection="forward"}};function Yi(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}var ze=new Set;function go(t){ze.add(t),document.body.classList.add("sl-scroll-lock")}function bo(t){ze.delete(t),ze.size===0&&document.body.classList.remove("sl-scroll-lock")}function Zi(t,e,o="vertical",i="smooth"){const r=Yi(t,e),s=r.top+e.scrollTop,n=r.left+e.scrollLeft,a=e.scrollLeft,l=e.scrollLeft+e.offsetWidth,c=e.scrollTop,p=e.scrollTop+e.offsetHeight;(o==="horizontal"||o==="both")&&(n<a?e.scrollTo({left:n,behavior:i}):n+t.clientWidth>l&&e.scrollTo({left:n-e.offsetWidth+t.clientWidth,behavior:i})),(o==="vertical"||o==="both")&&(s<c?e.scrollTo({top:s,behavior:i}):s+t.clientHeight>p&&e.scrollTo({top:s-e.offsetHeight+t.clientHeight,behavior:i}))}var Xe=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ye=Symbol(),yo=new Map,ii=class{constructor(t,e){if(this._$cssResult$=!0,e!==Ye)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=yo.get(this.cssText);return Xe&&t===void 0&&(yo.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}},Ji=t=>new ii(typeof t=="string"?t:t+"",Ye),N=(t,...e)=>{const o=t.length===1?t[0]:e.reduce((i,r,s)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[s+1],t[0]);return new ii(o,Ye)},Qi=(t,e)=>{Xe?t.adoptedStyleSheets=e.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet):e.forEach(o=>{const i=document.createElement("style"),r=window.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=o.cssText,t.appendChild(i)})},wo=Xe?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let o="";for(const i of e.cssRules)o+=i.cssText;return Ji(o)})(t):t,$e,_o=window.trustedTypes,Gi=_o?_o.emptyScript:"",$o=window.reactiveElementPolyfillSupport,He={toAttribute(t,e){switch(e){case Boolean:t=t?Gi:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=t!==null;break;case Number:o=t===null?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch{o=null}}return o}},ri=(t,e)=>e!==t&&(e==e||t==t),xe={attribute:!0,type:String,converter:He,reflect:!1,hasChanged:ri},ht=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,o)=>{const i=this._$Eh(o,e);i!==void 0&&(this._$Eu.set(i,o),t.push(i))}),t}static createProperty(t,e=xe){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,o,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(i){const r=this[t];this[e]=i,this.requestUpdate(t,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||xe}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,o=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of o)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const i of o)e.unshift(wo(i))}else t!==void 0&&e.push(wo(t));return e}static _$Eh(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,o;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Qi(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostConnected)===null||o===void 0?void 0:o.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostDisconnected)===null||o===void 0?void 0:o.call(e)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ES(t,e,o=xe){var i,r;const s=this.constructor._$Eh(t,o);if(s!==void 0&&o.reflect===!0){const n=((r=(i=o.converter)===null||i===void 0?void 0:i.toAttribute)!==null&&r!==void 0?r:He.toAttribute)(e,o.type);this._$Ei=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Ei=null}}_$AK(t,e){var o,i,r;const s=this.constructor,n=s._$Eu.get(t);if(n!==void 0&&this._$Ei!==n){const a=s.getPropertyOptions(n),l=a.converter,c=(r=(i=(o=l)===null||o===void 0?void 0:o.fromAttribute)!==null&&i!==void 0?i:typeof l=="function"?l:null)!==null&&r!==void 0?r:He.fromAttribute;this._$Ei=n,this[n]=c(e,a.type),this._$Ei=null}}requestUpdate(t,e,o){let i=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||ri)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),o.reflect===!0&&this._$Ei!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((i,r)=>this[r]=i),this._$Et=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),(t=this._$Eg)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdate)===null||r===void 0?void 0:r.call(i)}),this.update(o)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(o=>{var i;return(i=o.hostUpdated)===null||i===void 0?void 0:i.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,o)=>this._$ES(o,this[o],e)),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}};ht.finalized=!0,ht.elementProperties=new Map,ht.elementStyles=[],ht.shadowRootOptions={mode:"open"},$o==null||$o({ReactiveElement:ht}),(($e=globalThis.reactiveElementVersions)!==null&&$e!==void 0?$e:globalThis.reactiveElementVersions=[]).push("1.3.2");var Ae,_t=globalThis.trustedTypes,xo=_t?_t.createPolicy("lit-html",{createHTML:t=>t}):void 0,Q=`lit$${(Math.random()+"").slice(9)}$`,si="?"+Q,tr=`<${si}>`,$t=document,Rt=(t="")=>$t.createComment(t),Ut=t=>t===null||typeof t!="object"&&typeof t!="function",ni=Array.isArray,er=t=>{var e;return ni(t)||typeof((e=t)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},Tt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ao=/-->/g,Eo=/>/g,rt=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Co=/'/g,So=/"/g,ai=/^(?:script|style|textarea|title)$/i,or=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),R=or(1),et=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),ko=new WeakMap,ir=(t,e,o)=>{var i,r;const s=(i=o==null?void 0:o.renderBefore)!==null&&i!==void 0?i:e;let n=s._$litPart$;if(n===void 0){const a=(r=o==null?void 0:o.renderBefore)!==null&&r!==void 0?r:null;s._$litPart$=n=new ue(e.insertBefore(Rt(),a),a,void 0,o!=null?o:{})}return n._$AI(t),n},vt=$t.createTreeWalker($t,129,null,!1),rr=(t,e)=>{const o=t.length-1,i=[];let r,s=e===2?"<svg>":"",n=Tt;for(let l=0;l<o;l++){const c=t[l];let p,d,h=-1,m=0;for(;m<c.length&&(n.lastIndex=m,d=n.exec(c),d!==null);)m=n.lastIndex,n===Tt?d[1]==="!--"?n=Ao:d[1]!==void 0?n=Eo:d[2]!==void 0?(ai.test(d[2])&&(r=RegExp("</"+d[2],"g")),n=rt):d[3]!==void 0&&(n=rt):n===rt?d[0]===">"?(n=r!=null?r:Tt,h=-1):d[1]===void 0?h=-2:(h=n.lastIndex-d[2].length,p=d[1],n=d[3]===void 0?rt:d[3]==='"'?So:Co):n===So||n===Co?n=rt:n===Ao||n===Eo?n=Tt:(n=rt,r=void 0);const v=n===rt&&t[l+1].startsWith("/>")?" ":"";s+=n===Tt?c+tr:h>=0?(i.push(p),c.slice(0,h)+"$lit$"+c.slice(h)+Q+v):c+Q+(h===-2?(i.push(void 0),l):v)}const a=s+(t[o]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[xo!==void 0?xo.createHTML(a):a,i]},ee=class{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let r=0,s=0;const n=t.length-1,a=this.parts,[l,c]=rr(t,e);if(this.el=ee.createElement(l,o),vt.currentNode=this.el.content,e===2){const p=this.el.content,d=p.firstChild;d.remove(),p.append(...d.childNodes)}for(;(i=vt.nextNode())!==null&&a.length<n;){if(i.nodeType===1){if(i.hasAttributes()){const p=[];for(const d of i.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(Q)){const h=c[s++];if(p.push(d),h!==void 0){const m=i.getAttribute(h.toLowerCase()+"$lit$").split(Q),v=/([.?@])?(.*)/.exec(h);a.push({type:1,index:r,name:v[2],strings:m,ctor:v[1]==="."?nr:v[1]==="?"?lr:v[1]==="@"?cr:he})}else a.push({type:6,index:r})}for(const d of p)i.removeAttribute(d)}if(ai.test(i.tagName)){const p=i.textContent.split(Q),d=p.length-1;if(d>0){i.textContent=_t?_t.emptyScript:"";for(let h=0;h<d;h++)i.append(p[h],Rt()),vt.nextNode(),a.push({type:2,index:++r});i.append(p[d],Rt())}}}else if(i.nodeType===8)if(i.data===si)a.push({type:2,index:r});else{let p=-1;for(;(p=i.data.indexOf(Q,p+1))!==-1;)a.push({type:7,index:r}),p+=Q.length-1}r++}}static createElement(t,e){const o=$t.createElement("template");return o.innerHTML=t,o}};function xt(t,e,o=t,i){var r,s,n,a;if(e===et)return e;let l=i!==void 0?(r=o._$Cl)===null||r===void 0?void 0:r[i]:o._$Cu;const c=Ut(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((s=l==null?void 0:l._$AO)===null||s===void 0||s.call(l,!1),c===void 0?l=void 0:(l=new c(t),l._$AT(t,o,i)),i!==void 0?((n=(a=o)._$Cl)!==null&&n!==void 0?n:a._$Cl=[])[i]=l:o._$Cu=l),l!==void 0&&(e=xt(t,l._$AS(t,e.values),l,i)),e}var sr=class{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:o},parts:i}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:$t).importNode(o,!0);vt.currentNode=r;let s=vt.nextNode(),n=0,a=0,l=i[0];for(;l!==void 0;){if(n===l.index){let c;l.type===2?c=new ue(s,s.nextSibling,this,t):l.type===1?c=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(c=new dr(s,this,t)),this.v.push(c),l=i[++a]}n!==(l==null?void 0:l.index)&&(s=vt.nextNode(),n++)}return r}m(t){let e=0;for(const o of this.v)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}},ue=class{constructor(t,e,o,i){var r;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cg=(r=i==null?void 0:i.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=xt(this,t,e),Ut(t)?t===A||t==null||t===""?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==et&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):er(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==A&&Ut(this._$AH)?this._$AA.nextSibling.data=t:this.k($t.createTextNode(t)),this._$AH=t}T(t){var e;const{values:o,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=ee.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.m(o);else{const s=new sr(r,this),n=s.p(this.options);s.m(o),this.k(n),this._$AH=s}}_$AC(t){let e=ko.get(t.strings);return e===void 0&&ko.set(t.strings,e=new ee(t)),e}S(t){ni(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const r of t)i===e.length?e.push(o=new ue(this.M(Rt()),this.M(Rt()),this,this.options)):o=e[i],o._$AI(r),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},he=class{constructor(t,e,o,i,r){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,i){const r=this.strings;let s=!1;if(r===void 0)t=xt(this,t,e,0),s=!Ut(t)||t!==this._$AH&&t!==et,s&&(this._$AH=t);else{const n=t;let a,l;for(t=r[0],a=0;a<r.length-1;a++)l=xt(this,n[o+a],e,a),l===et&&(l=this._$AH[a]),s||(s=!Ut(l)||l!==this._$AH[a]),l===A?t=A:t!==A&&(t+=(l!=null?l:"")+r[a+1]),this._$AH[a]=l}s&&!i&&this.C(t)}C(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}},nr=class extends he{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===A?void 0:t}},ar=_t?_t.emptyScript:"",lr=class extends he{constructor(){super(...arguments),this.type=4}C(t){t&&t!==A?this.element.setAttribute(this.name,ar):this.element.removeAttribute(this.name)}},cr=class extends he{constructor(t,e,o,i,r){super(t,e,o,i,r),this.type=5}_$AI(t,e=this){var o;if((t=(o=xt(this,t,e,0))!==null&&o!==void 0?o:A)===et)return;const i=this._$AH,r=t===A&&i!==A||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==A&&(i===A||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;typeof this._$AH=="function"?this._$AH.call((o=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}},dr=class{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){xt(this,t)}},Po=window.litHtmlPolyfillSupport;Po==null||Po(ee,ue),((Ae=globalThis.litHtmlVersions)!==null&&Ae!==void 0?Ae:globalThis.litHtmlVersions=[]).push("2.2.4");var Ee,Ce,Dt=class extends ht{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=ir(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return et}};Dt.finalized=!0,Dt._$litElement$=!0,(Ee=globalThis.litElementHydrateSupport)===null||Ee===void 0||Ee.call(globalThis,{LitElement:Dt});var To=globalThis.litElementPolyfillSupport;To==null||To({LitElement:Dt});((Ce=globalThis.litElementVersions)!==null&&Ce!==void 0?Ce:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var B=N`
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
`,ur=N`
  ${B}

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
    transform: none;
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

  .dialog__close {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-x-large);
    padding: 0 var(--header-spacing);
  }

  .dialog__body {
    flex: 1 1 auto;
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
`;function oe(t,e){return new Promise(o=>{function i(r){r.target===t&&(t.removeEventListener(e,i),o())}t.addEventListener(e,i)})}function nt(t,e,o){return new Promise(i=>{if((o==null?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=t.animate(e,H(E({},o),{duration:hr()?0:o.duration}));r.addEventListener("cancel",i,{once:!0}),r.addEventListener("finish",i,{once:!0})})}function hr(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function pt(t){return Promise.all(t.getAnimations().map(e=>new Promise(o=>{const i=requestAnimationFrame(o);e.addEventListener("cancel",()=>i,{once:!0}),e.addEventListener("finish",()=>i,{once:!0}),e.cancel()})))}var li=new Map,pr=new WeakMap;function fr(t){return t!=null?t:{keyframes:[],options:{duration:0}}}function Lo(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function lt(t,e){li.set(t,fr(e))}function at(t,e,o){const i=pr.get(t);if(i!=null&&i[e])return Lo(i[e],o.dir);const r=li.get(e);return r?Lo(r,o.dir):{keyframes:[],options:{duration:0}}}var Ne=new Set,mr=new MutationObserver(ui),ft=new Map,ci=document.documentElement.dir||"ltr",di=document.documentElement.lang||navigator.language,Ot;mr.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function vr(...t){t.map(e=>{const o=e.$code.toLowerCase();ft.has(o)?ft.set(o,Object.assign(Object.assign({},ft.get(o)),e)):ft.set(o,e),Ot||(Ot=e)}),ui()}function ui(){ci=document.documentElement.dir||"ltr",di=document.documentElement.lang||navigator.language,[...Ne.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}var gr=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Ne.add(this.host)}hostDisconnected(){Ne.delete(this.host)}dir(){return`${this.host.dir||ci}`.toLowerCase()}lang(){return`${this.host.lang||di}`.toLowerCase()}term(t,...e){const o=this.lang().toLowerCase().slice(0,2),i=this.lang().length>2?this.lang().toLowerCase():"",r=ft.get(i),s=ft.get(o);let n;if(r&&r[t])n=r[t];else if(s&&s[t])n=s[t];else if(Ot&&Ot[t])n=Ot[t];else return console.error(`No translation found for: ${String(t)}`),t;return typeof n=="function"?n(...e):n}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,e)}},pe=class extends gr{},br={$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"};vr(br);var hi=class{constructor(t,...e){this.slotNames=[],(this.host=t).addController(this),this.slotNames=e,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(t){const e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()}};function pi(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let o="";return[...e].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(o+=i.textContent)}),o}var fi={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},mi=t=>(...e)=>({_$litDirective$:t,values:e}),vi=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var At=mi(class extends vi{constructor(t){var e;if(super(t),t.type!==fi.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var o,i;if(this.et===void 0){this.et=new Set,t.strings!==void 0&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!(!((o=this.st)===null||o===void 0)&&o.has(s))&&this.et.add(s);return this.render(e)}const r=t.element.classList;this.et.forEach(s=>{s in e||(r.remove(s),this.et.delete(s))});for(const s in e){const n=!!e[s];n===this.et.has(s)||((i=this.st)===null||i===void 0?void 0:i.has(s))||(n?(r.add(s),this.et.add(s)):(r.remove(s),this.et.delete(s)))}return et}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function G(t,e){const o=E({waitUntilFirstUpdate:!1},e);return(i,r)=>{const{update:s}=i;if(t in i){const n=t;i.update=function(a){if(a.has(n)){const l=a.get(n),c=this[n];l!==c&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[r](l,c)}s.call(this,a)}}}}var w=t=>t!=null?t:A;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var V=t=>e=>typeof e=="function"?((o,i)=>(window.customElements.define(o,i),i))(t,e):((o,i)=>{const{kind:r,elements:s}=i;return{kind:r,elements:s,finisher(n){window.customElements.define(o,n)}}})(t,e),yr=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?H(E({},e),{finisher(o){o.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function f(t){return(e,o)=>o!==void 0?((i,r,s)=>{r.constructor.createProperty(s,i)})(t,e,o):yr(t,e)}function Ze(t){return f(H(E({},t),{state:!0}))}var wr=({finisher:t,descriptor:e})=>(o,i)=>{var r;if(i===void 0){const s=(r=o.originalKey)!==null&&r!==void 0?r:o.key,n=e!=null?{kind:"method",placement:"prototype",key:s,descriptor:e(o.key)}:H(E({},o),{key:s});return t!=null&&(n.finisher=function(a){t(a,s)}),n}{const s=o.constructor;e!==void 0&&Object.defineProperty(o,i,e(i)),t==null||t(s,i)}};function O(t,e){return wr({descriptor:o=>{const i={get(){var r,s;return(s=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(t))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(e){const r=typeof o=="symbol"?Symbol():"__"+o;i.get=function(){var s,n;return this[r]===void 0&&(this[r]=(n=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(t))!==null&&n!==void 0?n:null),this[r]}}return i}})}var Se;((Se=window.HTMLSlotElement)===null||Se===void 0?void 0:Se.prototype.assignedElements)!=null;var z=class extends Dt{emit(t,e){const o=new CustomEvent(t,E({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(o),o}};u([f()],z.prototype,"dir",2);u([f()],z.prototype,"lang",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var U=class extends z{constructor(){super(...arguments),this.hasSlotController=new hi(this,"footer"),this.localize=new pe(this),this.open=!1,this.label="",this.noHeader=!1}connectedCallback(){super.connectedCallback(),this.modal=new Xi(this)}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.modal.activate(),go(this))}disconnectedCallback(){super.disconnectedCallback(),bo(this)}async show(){if(!this.open)return this.open=!0,oe(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,oe(this,"sl-after-hide")}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const o=at(this,"dialog.denyClose",{dir:this.localize.dir()});nt(this.panel,o.keyframes,o.options);return}this.hide()}handleKeyDown(t){t.key==="Escape"&&(t.stopPropagation(),this.requestClose("keyboard"))}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.originalTrigger=document.activeElement,this.modal.activate(),go(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([pt(this.dialog),pt(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=at(this,"dialog.show",{dir:this.localize.dir()}),o=at(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([nt(this.panel,e.keyframes,e.options),nt(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.modal.deactivate(),await Promise.all([pt(this.dialog),pt(this.overlay)]);const t=at(this,"dialog.hide",{dir:this.localize.dir()}),e=at(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([nt(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),nt(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,bo(this);const o=this.originalTrigger;typeof(o==null?void 0:o.focus)=="function"&&setTimeout(()=>o.focus()),this.emit("sl-after-hide")}}render(){return R`
      <div
        part="base"
        class=${At({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
        @keydown=${this.handleKeyDown}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${w(this.noHeader?this.label:void 0)}
          aria-labelledby=${w(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":R`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <sl-icon-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="dialog__close"
                    name="x"
                    label=${this.localize.term("close")}
                    library="system"
                    @click="${()=>this.requestClose("close-button")}"
                  ></sl-icon-button>
                </header>
              `}

          <div part="body" class="dialog__body">
            <slot></slot>
          </div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};U.styles=ur;u([O(".dialog")],U.prototype,"dialog",2);u([O(".dialog__panel")],U.prototype,"panel",2);u([O(".dialog__overlay")],U.prototype,"overlay",2);u([f({type:Boolean,reflect:!0})],U.prototype,"open",2);u([f({reflect:!0})],U.prototype,"label",2);u([f({attribute:"no-header",type:Boolean,reflect:!0})],U.prototype,"noHeader",2);u([G("open",{waitUntilFirstUpdate:!0})],U.prototype,"handleOpenChange",1);U=u([V("sl-dialog")],U);lt("dialog.show",{keyframes:[{opacity:0,transform:"scale(0.8)"},{opacity:1,transform:"scale(1)"}],options:{duration:250,easing:"ease"}});lt("dialog.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.8)"}],options:{duration:250,easing:"ease"}});lt("dialog.denyClose",{keyframes:[{transform:"scale(1)"},{transform:"scale(1.02)"},{transform:"scale(1)"}],options:{duration:250}});lt("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});lt("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var _r=N`
  ${B}

  :host {
    display: inline-block;
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus:not(.icon-button--disabled) {
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
`,gi=Symbol.for(""),$r=t=>{var e,o;if(((e=t)===null||e===void 0?void 0:e.r)===gi)return(o=t)===null||o===void 0?void 0:o._$litStatic$},ie=(t,...e)=>({_$litStatic$:e.reduce((o,i,r)=>o+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[r+1],t[0]),r:gi}),Do=new Map,xr=t=>(e,...o)=>{const i=o.length;let r,s;const n=[],a=[];let l,c=0,p=!1;for(;c<i;){for(l=e[c];c<i&&(s=o[c],(r=$r(s))!==void 0);)l+=r+e[++c],p=!0;a.push(s),n.push(l),c++}if(c===i&&n.push(e[i]),p){const d=n.join("$$lit$$");(e=Do.get(d))===void 0&&(n.raw=n,Do.set(d,e=n)),o=a}return t(e,...o)},Jt=xr(R);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var D=class extends z{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}render(){const t=!!this.href,e=t?ie`a`:ie`button`;return Jt`
      <${e}
        part="base"
        class=${At({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${w(t?void 0:this.disabled)}
        type=${w(t?void 0:"button")}
        href=${w(t?this.href:void 0)}
        target=${w(t?this.target:void 0)}
        download=${w(t?this.download:void 0)}
        rel=${w(t&&this.target?"noreferrer noopener":void 0)}
        role=${w(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${w(this.name)}
          library=${w(this.library)}
          src=${w(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};D.styles=_r;u([Ze()],D.prototype,"hasFocus",2);u([O(".icon-button")],D.prototype,"button",2);u([f()],D.prototype,"name",2);u([f()],D.prototype,"library",2);u([f()],D.prototype,"src",2);u([f()],D.prototype,"href",2);u([f()],D.prototype,"target",2);u([f()],D.prototype,"download",2);u([f()],D.prototype,"label",2);u([f({type:Boolean,reflect:!0})],D.prototype,"disabled",2);D=u([V("sl-icon-button")],D);var Ar={name:"default",resolver:t=>`${ji()}/assets/icons/${t}.svg`},Er=Ar,Oo={"check-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
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
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,x:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Cr={name:"system",resolver:t=>t in Oo?`data:image/svg+xml,${encodeURIComponent(Oo[t])}`:""},Sr=Cr,kr=[Er,Sr],Me=[];function Pr(t){Me.push(t)}function Tr(t){Me=Me.filter(e=>e!==t)}function zo(t){return kr.find(e=>e.name===t)}var ke=new Map;function Lr(t,e="cors"){if(ke.has(t))return ke.get(t);const o=fetch(t,{mode:e}).then(async i=>({ok:i.ok,status:i.status,html:await i.text()}));return ke.set(t,o),o}var Pe=new Map;async function Dr(t){if(Pe.has(t))return Pe.get(t);const e=await Lr(t),o={ok:e.ok,status:e.status,svg:null};if(e.ok){const i=document.createElement("div");i.innerHTML=e.html;const r=i.firstElementChild;o.svg=(r==null?void 0:r.tagName.toLowerCase())==="svg"?r.outerHTML:""}return Pe.set(t,o),o}var Or=N`
  ${B}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    contain: strict;
    box-sizing: content-box !important;
  }

  .icon,
  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,Re=class extends vi{constructor(t){if(super(t),this.it=A,t.type!==fi.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===A||t==null)return this.ft=void 0,this.it=t;if(t===et)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this.ft;this.it=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}};Re.directiveName="unsafeHTML",Re.resultType=1;var Ue=class extends Re{};Ue.directiveName="unsafeSVG",Ue.resultType=2;var zr=mi(Ue),Te,Y=class extends z{constructor(){super(...arguments),this.svg="",this.label="",this.library="default"}connectedCallback(){super.connectedCallback(),Pr(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Tr(this)}getUrl(){const t=zo(this.library);return this.name&&t?t.resolver(this.name):this.src}redraw(){this.setIcon()}async setIcon(){var t;const e=zo(this.library),o=this.getUrl();if(Te||(Te=new DOMParser),o)try{const i=await Dr(o);if(o!==this.getUrl())return;if(i.ok){const s=Te.parseFromString(i.svg,"text/html").body.querySelector("svg");s!==null?((t=e==null?void 0:e.mutator)==null||t.call(e,s),this.svg=s.outerHTML,this.emit("sl-load")):(this.svg="",this.emit("sl-error"))}else this.svg="",this.emit("sl-error")}catch{this.emit("sl-error")}else this.svg.length>0&&(this.svg="")}handleChange(){this.setIcon()}render(){const t=typeof this.label=="string"&&this.label.length>0;return R` <div
      part="base"
      class="icon"
      role=${w(t?"img":void 0)}
      aria-label=${w(t?this.label:void 0)}
      aria-hidden=${w(t?void 0:"true")}
    >
      ${zr(this.svg)}
    </div>`}};Y.styles=Or;u([Ze()],Y.prototype,"svg",2);u([f({reflect:!0})],Y.prototype,"name",2);u([f()],Y.prototype,"src",2);u([f()],Y.prototype,"label",2);u([f({reflect:!0})],Y.prototype,"library",2);u([G("name"),G("src"),G("library")],Y.prototype,"setIcon",1);Y=u([V("sl-icon")],Y);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Hr{constructor(){this.eventHandlers=new Map}fire(e,o){const i=this.eventHandlers.get(e);if(i&&i.length)for(const r of i)r(o)}add(e,o){let i=this.eventHandlers.get(e);i||(i=[],this.eventHandlers.set(e,i)),i.push(o)}remove(e,o){const i=this.eventHandlers.get(e);if(i)for(let r=0;r<i.length;r++)i[r]===o&&(i.splice(r,1),r--)}}class b{constructor(){this._eventDispatcher=new Hr}static get instance(){return this._instance||(this._instance=new b),this._instance}on(e,o){this._eventDispatcher.add(e,o)}removeListener(e,o){this._eventDispatcher.remove(e,o)}get isDirty(){return(this.fileContents||"")!==this.editorContents}get fileContents(){return this._fileContents}set fileContents(e){this._fileContents=e,this._eventDispatcher.fire(M.fileChanged)}get editorContents(){return this._editorContents}set editorContents(e){this._editorContents=e,this._eventDispatcher.fire(M.editorChanged)}async setFileHandle(e){try{const o=await e.getFile();return this.fileName=e.name,this.fileContents=await o.text(),this.fileHandle=e,!0}catch{this.fileHandle=void 0,this.fileName=void 0,this.fileContents=void 0}return!1}newFile(e=!1){if(!e&&this.isDirty){this.handleAboutToLoseChanges("new");return}this.fileHandle=void 0,this.fileName=void 0,this.fileContents=void 0}async openFile(e=!1){if(!e&&this.isDirty)return this.handleAboutToLoseChanges("open"),!1;try{const o=await window.showOpenFilePicker(),i=o.length?o[0]:null;return i?this.setFileHandle(i):!1}catch{}return!1}async saveFile(){if(!this.fileHandle)return this.saveAsFile();try{const e=await this.fileHandle.createWritable();return await e.write(this.editorContents||""),await e.close(),this.fileContents=this.editorContents,!0}catch{}return!1}async saveAsFile(){const e={types:[{description:"Text Files",accept:{"text/plain":[".txt"]}}]};try{const o=await window.showSaveFilePicker(e);if(o){this.fileHandle=o,this.fileName=o.name;const i=await this.fileHandle.createWritable();return await i.write(this.editorContents||""),await i.close(),this.fileContents=this.editorContents,!0}}catch{}return!1}handleAboutToLoseChanges(e){this._eventDispatcher.fire(M.decideOnChanges,e)}}const M={fileChanged:"notepad-file-changed",editorChanged:"notepad-editor-contents-changed",decideOnChanges:"notepad-need-to-decide-on-changes"};var Nr=Object.defineProperty,Mr=Object.getOwnPropertyDescriptor,Je=(t,e,o,i)=>{for(var r=i>1?void 0:i?Mr(e,o):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(i?n(e,o,r):n(r))||r);return i&&r&&Nr(e,o,r),r};let re=class extends W{constructor(){super(),this.title="Untitled",this.edited=!1,this.onFileChangedHandler=this.updateTitle.bind(this),b.instance.on(M.fileChanged,this.onFileChangedHandler),b.instance.on(M.editorChanged,this.onFileChangedHandler)}static get styles(){return It`
      :host {
        display: block;
        width: env(titlebar-area-width, 100%);
        height: env(titlebar-area-height, 33px);
        min-height: env(titlebar-area-height, 33px);
      }

     .root {
        position: fixed;

        left: env(titlebar-area-x, 0);
        top: env(titlebar-area-y, 0);
        width: env(titlebar-area-width, 100%);
        height: env(titlebar-area-height, 33px);
        app-region: drag;

        background-color: #f0f4f9;
        display: flex;
        flex-direction: row;
        align-items: center;
        align-content: center;
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
    `}disconnectedCallback(){b.instance.removeListener(M.fileChanged,this.onFileChangedHandler),b.instance.removeListener(M.editorChanged,this.onFileChangedHandler)}firstUpdated(t){this.updateTitle()}updateTitle(){this.title=b.instance.fileName||"Untitled",this.edited=b.instance.isDirty,document.title=this.title}render(){return Bt`
      <div class="root">
        <img src="/assets/icons/Square44x44Logo.scale-100.png" alt="Notepad logo" />
        <label>
          ${this.edited?"*":""}${this.title} - Notepad
        </label>
      </div>
    `}};Je([Jo()],re.prototype,"title",2);Je([Jo()],re.prototype,"edited",2);re=Je([jt("app-header")],re);var Rr=class extends Event{constructor(t){super("formdata"),this.formData=t}},Ur=class extends FormData{constructor(t){var e=(...o)=>{super(...o)};t?(e(t),this.form=t,t.dispatchEvent(new Rr(this))):e()}append(t,e){if(!this.form)return super.append(t,e);let o=this.form.elements[t];if(o||(o=document.createElement("input"),o.type="hidden",o.name=t,this.form.appendChild(o)),this.has(t)){const i=this.getAll(t),r=i.indexOf(o.value);r!==-1&&i.splice(r,1),i.push(e),this.set(t,i)}else super.append(t,e);o.value=e}};function Fr(){const t=document.createElement("form");let e=!1;return document.body.append(t),t.addEventListener("submit",o=>{new FormData(o.target),o.preventDefault()}),t.addEventListener("formdata",()=>e=!0),t.dispatchEvent(new Event("submit",{cancelable:!0})),t.remove(),e}function Ho(){!window.FormData||Fr()||(window.FormData=Ur,window.addEventListener("submit",t=>{t.defaultPrevented||new FormData(t.target)}))}document.readyState==="complete"?Ho():window.addEventListener("DOMContentLoaded",()=>Ho());var Lt=new WeakMap,Ir=class{constructor(t,e){(this.host=t).addController(this),this.options=E({form:o=>o.closest("form"),name:o=>o.name,value:o=>o.value,defaultValue:o=>o.defaultValue,disabled:o=>o.disabled,reportValidity:o=>typeof o.reportValidity=="function"?o.reportValidity():!0,setValue:(o,i)=>{o.value=i}},e),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this)}hostConnected(){this.form=this.options.form(this.host),this.form&&(this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Lt.has(this.form)||(Lt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()))}hostDisconnected(){this.form&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Lt.has(this.form)&&(this.form.reportValidity=Lt.get(this.form),Lt.delete(this.form)),this.form=void 0)}handleFormData(t){const e=this.options.disabled(this.host),o=this.options.name(this.host),i=this.options.value(this.host);!e&&typeof o=="string"&&typeof i<"u"&&(Array.isArray(i)?i.forEach(r=>{t.formData.append(o,r.toString())}):t.formData.append(o,i.toString()))}handleFormSubmit(t){const e=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&!e&&!o(this.host)&&(t.preventDefault(),t.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host))}reportFormValidity(){if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if(typeof e.reportValidity=="function"&&!e.reportValidity())return!1}return!0}doAction(t,e){if(this.form){const o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&["formaction","formmethod","formnovalidate","formtarget"].forEach(i=>{e.hasAttribute(i)&&o.setAttribute(i,e.getAttribute(i))}),this.form.append(o),o.click(),o.remove()}}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}},Br=N`
  ${B}

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
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
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

  /* When disabled, prevent mouse events from bubbling up */
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

  .button__label ::slotted(sl-icon) {
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
    font-size: var(--sl-button-font-size-small);
    height: var(--sl-input-height-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    font-size: var(--sl-button-font-size-medium);
    height: var(--sl-input-height-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    font-size: var(--sl-button-font-size-large);
    height: var(--sl-input-height-large);
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
    display: flex;
    align-items: center;
  }

  .button--caret .button__caret svg {
    width: 1em;
    height: 1em;
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
    transform: translateY(-50%) translateX(50%);
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    transform: translateY(-50%) translateX(-50%);
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
  :host(.sl-button-group__button:not(.sl-button-group__button--focus, .sl-button-group__button--first, .sl-button-group__button--radio, [variant='default']):not(:hover, :active, :focus))
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

  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,_=class extends z{constructor(){super(...arguments),this.formSubmitController=new Ir(this,{form:t=>{if(t.hasAttribute("form")){const e=t.getRootNode(),o=t.getAttribute("form");return e.getElementById(o)}return t.closest("form")}}),this.hasSlotController=new hi(this,"[default]","prefix","suffix"),this.localize=new pe(this),this.hasFocus=!1,this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button"}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){if(this.disabled||this.loading){t.preventDefault(),t.stopPropagation();return}this.type==="submit"&&this.formSubmitController.submit(this),this.type==="reset"&&this.formSubmitController.reset(this)}render(){const t=!!this.href,e=t?ie`a`:ie`button`;return Jt`
      <${e}
        part="base"
        class=${At({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${w(t?void 0:this.disabled)}
        type=${w(t?void 0:this.type)}
        name=${w(t?void 0:this.name)}
        value=${w(t?void 0:this.value)}
        href=${w(t?this.href:void 0)}
        target=${w(t?this.target:void 0)}
        download=${w(t?this.download:void 0)}
        rel=${w(t&&this.target?"noreferrer noopener":void 0)}
        role=${w(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <span part="prefix" class="button__prefix">
          <slot name="prefix"></slot>
        </span>
        <span part="label" class="button__label">
          <slot></slot>
        </span>
        <span part="suffix" class="button__suffix">
          <slot name="suffix"></slot>
        </span>
        ${this.caret?Jt`
                <span part="caret" class="button__caret">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              `:""}
        ${this.loading?Jt`<sl-spinner></sl-spinner>`:""}
      </${e}>
    `}};_.styles=Br;u([O(".button")],_.prototype,"button",2);u([Ze()],_.prototype,"hasFocus",2);u([f({reflect:!0})],_.prototype,"variant",2);u([f({reflect:!0})],_.prototype,"size",2);u([f({type:Boolean,reflect:!0})],_.prototype,"caret",2);u([f({type:Boolean,reflect:!0})],_.prototype,"disabled",2);u([f({type:Boolean,reflect:!0})],_.prototype,"loading",2);u([f({type:Boolean,reflect:!0})],_.prototype,"outline",2);u([f({type:Boolean,reflect:!0})],_.prototype,"pill",2);u([f({type:Boolean,reflect:!0})],_.prototype,"circle",2);u([f()],_.prototype,"type",2);u([f()],_.prototype,"name",2);u([f()],_.prototype,"value",2);u([f()],_.prototype,"href",2);u([f()],_.prototype,"target",2);u([f()],_.prototype,"download",2);u([f()],_.prototype,"form",2);u([f({attribute:"formaction"})],_.prototype,"formAction",2);u([f({attribute:"formmethod"})],_.prototype,"formMethod",2);u([f({attribute:"formnovalidate",type:Boolean})],_.prototype,"formNoValidate",2);u([f({attribute:"formtarget"})],_.prototype,"formTarget",2);_=u([V("sl-button")],_);var Vr=N`
  ${B}

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
    mix-blend-mode: multiply;
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
`,Fe=class extends z{constructor(){super(...arguments),this.localize=new pe(this)}render(){return R`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Fe.styles=Vr;Fe=u([V("sl-spinner")],Fe);var jr=N`
  ${B}

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
    color: var(--color);
    box-shadow: var(--sl-shadow-large);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,P=class extends z{constructor(){super(...arguments),this.localize=new pe(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handleMenuItemActivate=this.handleMenuItemActivate.bind(this),this.handlePanelSelect=this.handlePanelSelect.bind(this),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.handleDocumentMouseDown=this.handleDocumentMouseDown.bind(this),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.querySelector("slot").assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.querySelector("slot").assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleDocumentKeyDown(t){var e;if(t.key==="Escape"){this.hide(),this.focusOnTrigger();return}if(t.key==="Tab"){if(this.open&&((e=document.activeElement)==null?void 0:e.tagName.toLowerCase())==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var o,i,r;const s=((o=this.containingElement)==null?void 0:o.getRootNode())instanceof ShadowRoot?(r=(i=document.activeElement)==null?void 0:i.shadowRoot)==null?void 0:r.activeElement:document.activeElement;(!this.containingElement||(s==null?void 0:s.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}}handleDocumentMouseDown(t){const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()}handleMenuItemActivate(t){const e=t.target;Zi(e,this.panel)}handlePanelSelect(t){const e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}handleTriggerClick(){this.open?this.hide():this.show()}handleTriggerKeyDown(t){if(t.key==="Escape"){this.focusOnTrigger(),this.hide();return}if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}const e=this.getMenu();if(e){const o=e.defaultSlot.assignedElements({flatten:!0}),i=o[0],r=o[o.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||this.show(),o.length>0&&requestAnimationFrame(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(e.setCurrentItem(i),i.focus()),(t.key==="ArrowUp"||t.key==="End")&&(e.setCurrentItem(r),r.focus())}));const s=["Tab","Shift","Meta","Ctrl","Alt"];this.open&&!s.includes(t.key)&&e.typeToSelect(t)}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const o=this.trigger.querySelector("slot").assignedElements({flatten:!0}).find(r=>oi(r).start);let i;if(o){switch(o.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":i=o.button;break;default:i=o}i.setAttribute("aria-haspopup","true"),i.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,oe(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,oe(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-activate",this.handleMenuItemActivate),this.panel.addEventListener("sl-select",this.handlePanelSelect),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel.removeEventListener("sl-activate",this.handleMenuItemActivate),this.panel.removeEventListener("sl-select",this.handlePanelSelect),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await pt(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=at(this,"dropdown.show",{dir:this.localize.dir()});await nt(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await pt(this);const{keyframes:t,options:e}=at(this,"dropdown.hide",{dir:this.localize.dir()});await nt(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return R`
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
        class=${At({dropdown:!0,"dropdown--open":this.open})}
      >
        <span
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
        >
          <slot name="trigger" @slotchange=${this.handleTriggerSlotChange}></slot>
        </span>

        <div
          part="panel"
          class="dropdown__panel"
          aria-hidden=${this.open?"false":"true"}
          aria-labelledby="dropdown"
        >
          <slot></slot>
        </div>
      </sl-popup>
    `}};P.styles=jr;u([O(".dropdown")],P.prototype,"popup",2);u([O(".dropdown__trigger")],P.prototype,"trigger",2);u([O(".dropdown__panel")],P.prototype,"panel",2);u([f({type:Boolean,reflect:!0})],P.prototype,"open",2);u([f({reflect:!0})],P.prototype,"placement",2);u([f({type:Boolean,reflect:!0})],P.prototype,"disabled",2);u([f({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],P.prototype,"stayOpenOnSelect",2);u([f({attribute:!1})],P.prototype,"containingElement",2);u([f({type:Number})],P.prototype,"distance",2);u([f({type:Number})],P.prototype,"skidding",2);u([f({type:Boolean})],P.prototype,"hoist",2);u([G("open",{waitUntilFirstUpdate:!0})],P.prototype,"handleOpenChange",1);P=u([V("sl-dropdown")],P);lt("dropdown.show",{keyframes:[{opacity:0,transform:"scale(0.9)"},{opacity:1,transform:"scale(1)"}],options:{duration:100,easing:"ease"}});lt("dropdown.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.9)"}],options:{duration:100,easing:"ease"}});var qr=N`
  ${B}

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
    transform: rotate(45deg);
    background: var(--arrow-color);
    z-index: -1;
  }
`;function Et(t){return t.split("-")[0]}function qt(t){return t.split("-")[1]}function Wt(t){return["top","bottom"].includes(Et(t))?"x":"y"}function Qe(t){return t==="y"?"height":"width"}function No(t,e,o){let{reference:i,floating:r}=t;const s=i.x+i.width/2-r.width/2,n=i.y+i.height/2-r.height/2,a=Wt(e),l=Qe(a),c=i[l]/2-r[l]/2,p=a==="x";let d;switch(Et(e)){case"top":d={x:s,y:i.y-r.height};break;case"bottom":d={x:s,y:i.y+i.height};break;case"right":d={x:i.x+i.width,y:n};break;case"left":d={x:i.x-r.width,y:n};break;default:d={x:i.x,y:i.y}}switch(qt(e)){case"start":d[a]-=c*(o&&p?-1:1);break;case"end":d[a]+=c*(o&&p?-1:1)}return d}var Wr=async(t,e,o)=>{const{placement:i="bottom",strategy:r="absolute",middleware:s=[],platform:n}=o,a=await(n.isRTL==null?void 0:n.isRTL(e));let l=await n.getElementRects({reference:t,floating:e,strategy:r}),{x:c,y:p}=No(l,i,a),d=i,h={},m=0;for(let v=0;v<s.length;v++){const{name:g,fn:$}=s[v],{x,y:T,data:C,reset:k}=await $({x:c,y:p,initialPlacement:i,placement:d,strategy:r,middlewareData:h,rects:l,platform:n,elements:{reference:t,floating:e}});c=x!=null?x:c,p=T!=null?T:p,h=H(E({},h),{[g]:E(E({},h[g]),C)}),k&&m<=50&&(m++,typeof k=="object"&&(k.placement&&(d=k.placement),k.rects&&(l=k.rects===!0?await n.getElementRects({reference:t,floating:e,strategy:r}):k.rects),{x:c,y:p}=No(l,d,a)),v=-1)}return{x:c,y:p,placement:d,strategy:r,middlewareData:h}};function bi(t){return typeof t!="number"?function(e){return E({top:0,right:0,bottom:0,left:0},e)}(t):{top:t,right:t,bottom:t,left:t}}function se(t){return H(E({},t),{top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height})}async function Ge(t,e){var o;e===void 0&&(e={});const{x:i,y:r,platform:s,rects:n,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:p="viewport",elementContext:d="floating",altBoundary:h=!1,padding:m=0}=e,v=bi(m),g=a[h?d==="floating"?"reference":"floating":d],$=se(await s.getClippingRect({element:(o=await(s.isElement==null?void 0:s.isElement(g)))==null||o?g:g.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:c,rootBoundary:p,strategy:l})),x=se(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:d==="floating"?H(E({},n.floating),{x:i,y:r}):n.reference,offsetParent:await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),strategy:l}):n[d]);return{top:$.top-x.top+v.top,bottom:x.bottom-$.bottom+v.bottom,left:$.left-x.left+v.left,right:x.right-$.right+v.right}}var Kr=Math.min,st=Math.max;function Ie(t,e,o){return st(t,Kr(e,o))}var Xr=t=>({name:"arrow",options:t,async fn(e){const{element:o,padding:i=0}=t!=null?t:{},{x:r,y:s,placement:n,rects:a,platform:l}=e;if(o==null)return{};const c=bi(i),p={x:r,y:s},d=Wt(n),h=qt(n),m=Qe(d),v=await l.getDimensions(o),g=d==="y"?"top":"left",$=d==="y"?"bottom":"right",x=a.reference[m]+a.reference[d]-p[d]-a.floating[m],T=p[d]-a.reference[d],C=await(l.getOffsetParent==null?void 0:l.getOffsetParent(o));let k=C?d==="y"?C.clientHeight||0:C.clientWidth||0:0;k===0&&(k=a.floating[m]);const ct=x/2-T/2,dt=c[g],Ct=k-v[m]-c[$],j=k/2-v[m]/2+ct,L=Ie(dt,j,Ct),q=(h==="start"?c[g]:c[$])>0&&j!==L&&a.reference[m]<=a.floating[m];return{[d]:p[d]-(q?j<dt?dt-j:Ct-j:0),data:{[d]:L,centerOffset:j-L}}}}),Yr={left:"right",right:"left",bottom:"top",top:"bottom"};function ne(t){return t.replace(/left|right|bottom|top/g,e=>Yr[e])}function Zr(t,e,o){o===void 0&&(o=!1);const i=qt(t),r=Wt(t),s=Qe(r);let n=r==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(n=ne(n)),{main:n,cross:ne(n)}}var Jr={start:"end",end:"start"};function Mo(t){return t.replace(/start|end/g,e=>Jr[e])}var Qr=["top","right","bottom","left"];Qr.reduce((t,e)=>t.concat(e,e+"-start",e+"-end"),[]);var Gr=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o;const{placement:i,middlewareData:r,rects:s,initialPlacement:n,platform:a,elements:l}=e,c=t,{mainAxis:p=!0,crossAxis:d=!0,fallbackPlacements:h,fallbackStrategy:m="bestFit",flipAlignment:v=!0}=c,g=Ke(c,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","flipAlignment"]),$=Et(i),x=h||($===n||!v?[ne(n)]:function(L){const q=ne(L);return[Mo(L),q,Mo(q)]}(n)),T=[n,...x],C=await Ge(e,g),k=[];let ct=((o=r.flip)==null?void 0:o.overflows)||[];if(p&&k.push(C[$]),d){const{main:L,cross:q}=Zr(i,s,await(a.isRTL==null?void 0:a.isRTL(l.floating)));k.push(C[L],C[q])}if(ct=[...ct,{placement:i,overflows:k}],!k.every(L=>L<=0)){var dt,Ct;const L=((dt=(Ct=r.flip)==null?void 0:Ct.index)!=null?dt:0)+1,q=T[L];if(q)return{data:{index:L,overflows:ct},reset:{placement:q}};let Xt="bottom";switch(m){case"bestFit":{var j;const eo=(j=ct.map(Yt=>[Yt,Yt.overflows.filter(St=>St>0).reduce((St,Si)=>St+Si,0)]).sort((Yt,St)=>Yt[1]-St[1])[0])==null?void 0:j[0].placement;eo&&(Xt=eo);break}case"initialPlacement":Xt=n}if(i!==Xt)return{reset:{placement:Xt}}}return{}}}},ts=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:o,y:i}=e,r=await async function(s,n){const{placement:a,platform:l,elements:c}=s,p=await(l.isRTL==null?void 0:l.isRTL(c.floating)),d=Et(a),h=qt(a),m=Wt(a)==="x",v=["left","top"].includes(d)?-1:1,g=p&&m?-1:1,$=typeof n=="function"?n(s):n;let{mainAxis:x,crossAxis:T,alignmentAxis:C}=typeof $=="number"?{mainAxis:$,crossAxis:0,alignmentAxis:null}:E({mainAxis:0,crossAxis:0,alignmentAxis:null},$);return h&&typeof C=="number"&&(T=h==="end"?-1*C:C),m?{x:T*g,y:x*v}:{x:x*v,y:T*g}}(e,t);return{x:o+r.x,y:i+r.y,data:r}}}};function es(t){return t==="x"?"y":"x"}var os=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:i,placement:r}=e,s=t,{mainAxis:n=!0,crossAxis:a=!1,limiter:l={fn:x=>{let{x:T,y:C}=x;return{x:T,y:C}}}}=s,c=Ke(s,["mainAxis","crossAxis","limiter"]),p={x:o,y:i},d=await Ge(e,c),h=Wt(Et(r)),m=es(h);let v=p[h],g=p[m];if(n){const x=h==="y"?"bottom":"right";v=Ie(v+d[h==="y"?"top":"left"],v,v-d[x])}if(a){const x=m==="y"?"bottom":"right";g=Ie(g+d[m==="y"?"top":"left"],g,g-d[x])}const $=l.fn(H(E({},e),{[h]:v,[m]:g}));return H(E({},$),{data:{x:$.x-o,y:$.y-i}})}}},Ro=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:o,rects:i,platform:r,elements:s}=e,n=t,{apply:a=()=>{}}=n,l=Ke(n,["apply"]),c=await Ge(e,l),p=Et(o),d=qt(o);let h,m;p==="top"||p==="bottom"?(h=p,m=d===(await(r.isRTL==null?void 0:r.isRTL(s.floating))?"start":"end")?"left":"right"):(m=p,h=d==="end"?"top":"bottom");const v=st(c.left,0),g=st(c.right,0),$=st(c.top,0),x=st(c.bottom,0),T={availableHeight:i.floating.height-(["left","right"].includes(o)?2*($!==0||x!==0?$+x:st(c.top,c.bottom)):c[h]),availableWidth:i.floating.width-(["top","bottom"].includes(o)?2*(v!==0||g!==0?v+g:st(c.left,c.right)):c[m])};await a(E(E({},e),T));const C=await r.getDimensions(s.floating);return i.floating.width!==C.width||i.floating.height!==C.height?{reset:{rects:!0}}:{}}}};function yi(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}function Z(t){if(t==null)return window;if(!yi(t)){const e=t.ownerDocument;return e&&e.defaultView||window}return t}function Kt(t){return Z(t).getComputedStyle(t)}function K(t){return yi(t)?"":t?(t.nodeName||"").toLowerCase():""}function wi(){const t=navigator.userAgentData;return t!=null&&t.brands?t.brands.map(e=>e.brand+"/"+e.version).join(" "):navigator.userAgent}function F(t){return t instanceof Z(t).HTMLElement}function ot(t){return t instanceof Z(t).Element}function to(t){return typeof ShadowRoot>"u"?!1:t instanceof Z(t).ShadowRoot||t instanceof ShadowRoot}function fe(t){const{overflow:e,overflowX:o,overflowY:i}=Kt(t);return/auto|scroll|overlay|hidden/.test(e+i+o)}function is(t){return["table","td","th"].includes(K(t))}function Uo(t){const e=/firefox/i.test(wi()),o=Kt(t);return o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].includes(o.willChange)||e&&o.willChange==="filter"||e&&!!o.filter&&o.filter!=="none"}function _i(){return!/^((?!chrome|android).)*safari/i.test(wi())}var Fo=Math.min,zt=Math.max,ae=Math.round;function X(t,e,o){var i,r,s,n;e===void 0&&(e=!1),o===void 0&&(o=!1);const a=t.getBoundingClientRect();let l=1,c=1;e&&F(t)&&(l=t.offsetWidth>0&&ae(a.width)/t.offsetWidth||1,c=t.offsetHeight>0&&ae(a.height)/t.offsetHeight||1);const p=ot(t)?Z(t):window,d=!_i()&&o,h=(a.left+(d&&(i=(r=p.visualViewport)==null?void 0:r.offsetLeft)!=null?i:0))/l,m=(a.top+(d&&(s=(n=p.visualViewport)==null?void 0:n.offsetTop)!=null?s:0))/c,v=a.width/l,g=a.height/c;return{width:v,height:g,top:m,right:h+v,bottom:m+g,left:h,x:h,y:m}}function tt(t){return(e=t,(e instanceof Z(e).Node?t.ownerDocument:t.document)||window.document).documentElement;var e}function me(t){return ot(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function $i(t){return X(tt(t)).left+me(t).scrollLeft}function rs(t,e,o){const i=F(e),r=tt(e),s=X(t,i&&function(l){const c=X(l);return ae(c.width)!==l.offsetWidth||ae(c.height)!==l.offsetHeight}(e),o==="fixed");let n={scrollLeft:0,scrollTop:0};const a={x:0,y:0};if(i||!i&&o!=="fixed")if((K(e)!=="body"||fe(r))&&(n=me(e)),F(e)){const l=X(e,!0);a.x=l.x+e.clientLeft,a.y=l.y+e.clientTop}else r&&(a.x=$i(r));return{x:s.left+n.scrollLeft-a.x,y:s.top+n.scrollTop-a.y,width:s.width,height:s.height}}function xi(t){return K(t)==="html"?t:t.assignedSlot||t.parentNode||(to(t)?t.host:null)||tt(t)}function Io(t){return F(t)&&getComputedStyle(t).position!=="fixed"?t.offsetParent:null}function Be(t){const e=Z(t);let o=Io(t);for(;o&&is(o)&&getComputedStyle(o).position==="static";)o=Io(o);return o&&(K(o)==="html"||K(o)==="body"&&getComputedStyle(o).position==="static"&&!Uo(o))?e:o||function(i){let r=xi(i);for(to(r)&&(r=r.host);F(r)&&!["html","body"].includes(K(r));){if(Uo(r))return r;r=r.parentNode}return null}(t)||e}function Bo(t){if(F(t))return{width:t.offsetWidth,height:t.offsetHeight};const e=X(t);return{width:e.width,height:e.height}}function Ai(t){const e=xi(t);return["html","body","#document"].includes(K(e))?t.ownerDocument.body:F(e)&&fe(e)?e:Ai(e)}function le(t,e){var o;e===void 0&&(e=[]);const i=Ai(t),r=i===((o=t.ownerDocument)==null?void 0:o.body),s=Z(i),n=r?[s].concat(s.visualViewport||[],fe(i)?i:[]):i,a=e.concat(n);return r?a:a.concat(le(n))}function Vo(t,e,o){return e==="viewport"?se(function(i,r){const s=Z(i),n=tt(i),a=s.visualViewport;let l=n.clientWidth,c=n.clientHeight,p=0,d=0;if(a){l=a.width,c=a.height;const h=_i();(h||!h&&r==="fixed")&&(p=a.offsetLeft,d=a.offsetTop)}return{width:l,height:c,x:p,y:d}}(t,o)):ot(e)?function(i,r){const s=X(i,!1,r==="fixed"),n=s.top+i.clientTop,a=s.left+i.clientLeft;return{top:n,left:a,x:a,y:n,right:a+i.clientWidth,bottom:n+i.clientHeight,width:i.clientWidth,height:i.clientHeight}}(e,o):se(function(i){var r;const s=tt(i),n=me(i),a=(r=i.ownerDocument)==null?void 0:r.body,l=zt(s.scrollWidth,s.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),c=zt(s.scrollHeight,s.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0);let p=-n.scrollLeft+$i(i);const d=-n.scrollTop;return Kt(a||s).direction==="rtl"&&(p+=zt(s.clientWidth,a?a.clientWidth:0)-l),{width:l,height:c,x:p,y:d}}(tt(t)))}function ss(t){const e=le(t),o=["absolute","fixed"].includes(Kt(t).position)&&F(t)?Be(t):t;return ot(o)?e.filter(i=>ot(i)&&function(r,s){const n=s.getRootNode==null?void 0:s.getRootNode();if(r.contains(s))return!0;if(n&&to(n)){let a=s;do{if(a&&r===a)return!0;a=a.parentNode||a.host}while(a)}return!1}(i,o)&&K(i)!=="body"):[]}var ns={getClippingRect:function(t){let{element:e,boundary:o,rootBoundary:i,strategy:r}=t;const s=[...o==="clippingAncestors"?ss(e):[].concat(o),i],n=s[0],a=s.reduce((l,c)=>{const p=Vo(e,c,r);return l.top=zt(p.top,l.top),l.right=Fo(p.right,l.right),l.bottom=Fo(p.bottom,l.bottom),l.left=zt(p.left,l.left),l},Vo(e,n,r));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:o,strategy:i}=t;const r=F(o),s=tt(o);if(o===s)return e;let n={scrollLeft:0,scrollTop:0};const a={x:0,y:0};if((r||!r&&i!=="fixed")&&((K(o)!=="body"||fe(s))&&(n=me(o)),F(o))){const l=X(o,!0);a.x=l.x+o.clientLeft,a.y=l.y+o.clientTop}return H(E({},e),{x:e.x-n.scrollLeft+a.x,y:e.y-n.scrollTop+a.y})},isElement:ot,getDimensions:Bo,getOffsetParent:Be,getDocumentElement:tt,getElementRects:t=>{let{reference:e,floating:o,strategy:i}=t;return{reference:rs(e,Be(o),i),floating:H(E({},Bo(o)),{x:0,y:0})}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>Kt(t).direction==="rtl"};function as(t,e,o,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:n=!0,animationFrame:a=!1}=i,l=r&&!a,c=s&&!a,p=l||c?[...ot(t)?le(t):[],...le(e)]:[];p.forEach(v=>{l&&v.addEventListener("scroll",o,{passive:!0}),c&&v.addEventListener("resize",o)});let d,h=null;if(n){let v=!0;h=new ResizeObserver(()=>{v||o(),v=!1}),ot(t)&&!a&&h.observe(t),h.observe(e)}let m=a?X(t):null;return a&&function v(){const g=X(t);!m||g.x===m.x&&g.y===m.y&&g.width===m.width&&g.height===m.height||o(),m=g,d=requestAnimationFrame(v)}(),o(),()=>{var v;p.forEach(g=>{l&&g.removeEventListener("scroll",o),c&&g.removeEventListener("resize",o)}),(v=h)==null||v.disconnect(),h=null,a&&cancelAnimationFrame(d)}}var ls=(t,e,o)=>Wr(t,e,E({platform:ns},o)),y=class extends z{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="initial",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){this.stop()}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof HTMLElement?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');if(this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),!this.anchorEl)throw new Error("Invalid anchor element: no anchor could be found using the anchor slot or the anchor attribute.");this.start()}start(){!this.anchorEl||(this.cleanup=as(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}reposition(){if(!this.active||!this.anchorEl)return;const t=[ts({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Ro({apply:({rects:e})=>{const o=this.sync==="width"||this.sync==="both",i=this.sync==="height"||this.sync==="both";this.popup.style.width=o?`${e.reference.width}px`:"",this.popup.style.height=i?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(Gr({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(os({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Ro({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:o})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${o}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(Xr({element:this.arrowEl,padding:this.arrowPadding})),ls(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy}).then(({x:e,y:o,middlewareData:i,placement:r})=>{const s=getComputedStyle(this).direction==="rtl",n={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${e}px`,top:`${o}px`}),this.arrow){const a=i.arrow.x,l=i.arrow.y;let c="",p="",d="",h="";if(this.arrowPlacement==="start"){const m=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";c=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",p=s?m:"",h=s?"":m}else if(this.arrowPlacement==="end"){const m=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";p=s?"":m,h=s?m:"",d=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(h=typeof a=="number"?"calc(50% - var(--arrow-size-diagonal))":"",c=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(h=typeof a=="number"?`${a}px`:"",c=typeof l=="number"?`${l}px`:"");Object.assign(this.arrowEl.style,{top:c,right:p,bottom:d,left:h,[n]:"calc(var(--arrow-size-diagonal) * -1)"})}}),this.emit("sl-reposition")}render(){return R`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${At({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?R`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};y.styles=qr;u([O(".popup")],y.prototype,"popup",2);u([O(".popup__arrow")],y.prototype,"arrowEl",2);u([f()],y.prototype,"anchor",2);u([f({type:Boolean,reflect:!0})],y.prototype,"active",2);u([f({reflect:!0})],y.prototype,"placement",2);u([f({reflect:!0})],y.prototype,"strategy",2);u([f({type:Number})],y.prototype,"distance",2);u([f({type:Number})],y.prototype,"skidding",2);u([f({type:Boolean})],y.prototype,"arrow",2);u([f({attribute:"arrow-placement"})],y.prototype,"arrowPlacement",2);u([f({attribute:"arrow-padding",type:Number})],y.prototype,"arrowPadding",2);u([f({type:Boolean})],y.prototype,"flip",2);u([f({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],y.prototype,"flipFallbackPlacements",2);u([f({attribute:"flip-fallback-strategy"})],y.prototype,"flipFallbackStrategy",2);u([f({type:Object})],y.prototype,"flipBoundary",2);u([f({attribute:"flip-padding",type:Number})],y.prototype,"flipPadding",2);u([f({type:Boolean})],y.prototype,"shift",2);u([f({type:Object})],y.prototype,"shiftBoundary",2);u([f({attribute:"shift-padding",type:Number})],y.prototype,"shiftPadding",2);u([f({attribute:"auto-size"})],y.prototype,"autoSize",2);u([f()],y.prototype,"sync",2);u([f({type:Object})],y.prototype,"autoSizeBoundary",2);u([f({attribute:"auto-size-padding",type:Number})],y.prototype,"autoSizePadding",2);y=u([V("sl-popup")],y);var cs=N`
  ${B}

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
`,ce=class extends z{constructor(){super(...arguments),this.typeToSelectString=""}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}getAllItems(t={includeDisabled:!0}){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.getAttribute("role")!=="menuitem"||!t.includeDisabled&&e.disabled))}getCurrentItem(){return this.getAllItems({includeDisabled:!1}).find(t=>t.getAttribute("tabindex")==="0")}setCurrentItem(t){const e=this.getAllItems({includeDisabled:!1}),o=t.disabled?e[0]:t;e.forEach(i=>{i.setAttribute("tabindex",i===o?"0":"-1")})}typeToSelect(t){var e;const o=this.getAllItems({includeDisabled:!1});clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?t.metaKey||t.ctrlKey?this.typeToSelectString="":this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const i of o){const r=(e=i.shadowRoot)==null?void 0:e.querySelector("slot:not([name])");if(pi(r).toLowerCase().trim().startsWith(this.typeToSelectString)){this.setCurrentItem(i),i.focus();break}}}handleClick(t){const o=t.target.closest("sl-menu-item");(o==null?void 0:o.disabled)===!1&&this.emit("sl-select",{detail:{item:o}})}handleKeyDown(t){if(t.key==="Enter"){const e=this.getCurrentItem();t.preventDefault(),e==null||e.click()}if(t.key===" "&&t.preventDefault(),["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems({includeDisabled:!1}),o=this.getCurrentItem();let i=o?e.indexOf(o):0;if(e.length>0){t.preventDefault(),t.key==="ArrowDown"?i++:t.key==="ArrowUp"?i--:t.key==="Home"?i=0:t.key==="End"&&(i=e.length-1),i<0&&(i=e.length-1),i>e.length-1&&(i=0),this.setCurrentItem(e[i]),e[i].focus();return}}this.typeToSelect(t)}handleMouseDown(t){const e=t.target;e.getAttribute("role")==="menuitem"&&this.setCurrentItem(e)}handleSlotChange(){const t=this.getAllItems({includeDisabled:!1});t.length>0&&this.setCurrentItem(t[0])}render(){return R`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};ce.styles=cs;u([O("slot")],ce.prototype,"defaultSlot",2);ce=u([V("sl-menu")],ce);var ds=N`
  ${B}

  :host {
    display: block;
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
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix ::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix ::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:focus) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'])) .menu-item,
  :host(:focus-visible:not(.sl-focus-invisible):not([aria-disabled='true'])) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
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
`,I=class extends z{constructor(){super(...arguments),this.checked=!1,this.value="",this.disabled=!1}firstUpdated(){this.setAttribute("role","menuitem")}getTextLabel(){return pi(this.defaultSlot)}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleDefaultSlotChange(){const t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("sl-label-change"))}render(){return R`
      <div
        part="base"
        class=${At({"menu-item":!0,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--has-submenu":!1})}
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check-lg" library="system" aria-hidden="true"></sl-icon>
        </span>

        <span part="prefix" class="menu-item__prefix">
          <slot name="prefix"></slot>
        </span>

        <span part="label" class="menu-item__label">
          <slot @slotchange=${this.handleDefaultSlotChange}></slot>
        </span>

        <span part="suffix" class="menu-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span class="menu-item__chevron">
          <sl-icon name="chevron-right" library="system" aria-hidden="true"></sl-icon>
        </span>
      </div>
    `}};I.styles=ds;u([O("slot:not([name])")],I.prototype,"defaultSlot",2);u([O(".menu-item")],I.prototype,"menuItem",2);u([f({type:Boolean,reflect:!0})],I.prototype,"checked",2);u([f()],I.prototype,"value",2);u([f({type:Boolean,reflect:!0})],I.prototype,"disabled",2);u([G("checked")],I.prototype,"handleCheckedChange",1);u([G("disabled")],I.prototype,"handleDisabledChange",1);I=u([V("sl-menu-item")],I);var us=N`
  ${B}

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
`,Ft=class extends z{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};Ft.styles=us;u([f({type:Boolean,reflect:!0})],Ft.prototype,"vertical",2);u([G("vertical")],Ft.prototype,"handleVerticalChange",1);Ft=u([V("sl-divider")],Ft);var hs=Object.defineProperty,ps=Object.getOwnPropertyDescriptor,fs=(t,e,o,i)=>{for(var r=i>1?void 0:i?ps(e,o):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(i?n(e,o,r):n(r))||r);return i&&r&&hs(e,o,r),r};let jo=class extends W{static get styles(){return It`
      .root {
        height: 36px;
        width: 100%;
        background-color: #f0f4f9;
        border-bottom: solid 1.5px #e6e6e6;
        display: flex;
        flex-direction: row;
        align-items: flex-end;

        --sl-color-neutral-0: transparent; /* background */
        --sl-color-neutral-300: transparent; /* border */
        --sl-color-neutral-700: #191919; /* color */

        --sl-color-primary-50: #e4e4e4; /* hover background */
        --sl-color-primary-100: #f3f3f3; /* click background */
        --sl-color-primary-300: transparent; /* hover border */
        --sl-color-primary-400: transparent; /* click border */
        --sl-color-primary-700: #191919; /* hover color */

        --sl-input-height-medium: 32px;

        --sl-button-font-size-medium: 14px;
        --sl-input-font-family: "Segoe UI Variable", "Segoe UI", sand-serif;
        --sl-font-weight-semibold: 400;

        --sl-spacing-medium: 8px;
      }

      sl-menu {
        --sl-color-neutral-0: #191919; /* color */
        --sl-color-primary-600: #e4e4e4; /* hover background */
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
        font-size: 42px;
      }
    `}constructor(){super()}render(){return Bt`
      <div class="root">
        <div class="menubar">
          <sl-dropdown>
            <sl-button slot="trigger">File</sl-button>
            <sl-menu @sl-select=${t=>this.menuItemClicked(t.detail.item.value)}>
              <sl-menu-item value="new">New</sl-menu-item>
              <sl-menu-item value="new-window">New window</sl-menu-item>
              <sl-menu-item value="open">Open</sl-menu-item>
              <sl-menu-item value="save">Save</sl-menu-item>
              <sl-menu-item value="save-as">Save as</sl-menu-item>
              <sl-divider></sl-divider>
              <sl-menu-item value="page-setup">Page setup</sl-menu-item>
              <sl-menu-item value="print">Print</sl-menu-item>
              <sl-divider></sl-divider>
              <sl-menu-item value="exit">Exit</sl-menu-item>
            </sl-menu>
          </sl-dropdown>
          <sl-button>Edit</sl-button>
          <sl-button>View</sl-button>
        </div>
        <div class="settings-container">
          <sl-button>
            <sl-icon name="gear" label="Settings"></sl-icon>
          </sl-button>
        </div>
      </div>
    `}async menuItemClicked(t){switch(t){case"new":b.instance.newFile();break;case"new-window":window.open("/","","width=1200, height=750");break;case"open":b.instance.openFile();break;case"save":b.instance.saveFile();break;case"save-as":b.instance.saveAsFile();break;case"print":var e=await fetch("http://localhost:7083");console.log(await e.text());break;default:console.log(`${t} NOT IMPLEMENTED`)}}};jo=fs([jt("app-menu")],jo);var ms=Object.defineProperty,vs=Object.getOwnPropertyDescriptor,Ei=(t,e,o,i)=>{for(var r=i>1?void 0:i?vs(e,o):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(i?n(e,o,r):n(r))||r);return i&&r&&ms(e,o,r),r};let Ve=class extends W{constructor(){super(),this.onFileChangedHandler=this.setEditorContents.bind(this),b.instance.on(M.fileChanged,this.onFileChangedHandler)}static get styles(){return It`
      :host {
        display: block
      }

      .root {
        background-color: white;
        /* padding: 16px; */
        font-family: "Lucida Console";
        font-size: 12pt;
        font-style: regular;
        height: 100%;
      }

      .editor {
        padding: 16px;
        min-height: calc(100% - 32px);
        min-width: calc(100% - 32px);
        width: max-content;
        white-space: pre;
        overflow-wrap: normal;
      }

      *:focus {
          outline: none;
      }
    `}disconnectedCallback(){b.instance.removeListener(M.fileChanged,this.onFileChangedHandler)}firstUpdated(t){var e;this.setEditorContents(),(e=this.editor)==null||e.focus()}setEditorContents(){this.editor&&(this.editor.textContent=b.instance.fileContents||"",b.instance.editorContents=this.editor.innerText)}render(){return Bt`
      <div class="root" >
        <div class="editor"
          contenteditable
          spellcheck="false"
          @input=${t=>b.instance.editorContents=t.target.innerText}
          @keydown=${this.handleTab}
          @paste=${this.pasteAsPlainText}></div>
      </div>
    `}pasteAsPlainText(t){var o;t.preventDefault();var e=(o=t.clipboardData)==null?void 0:o.getData("text/plain");e&&document.execCommand("insertHTML",!1,e)}handleTab(t){t.keyCode==9&&(t.preventDefault(),document.execCommand("insertHTML",!1,"&#009"))}};Ei([Qo(".editor",!0)],Ve.prototype,"editor",2);Ve=Ei([jt("app-editor")],Ve);var gs=Object.defineProperty,bs=Object.getOwnPropertyDescriptor,ys=(t,e,o,i)=>{for(var r=i>1?void 0:i?bs(e,o):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(i?n(e,o,r):n(r))||r);return i&&r&&gs(e,o,r),r};let qo=class extends W{static get styles(){return It`
      .root {
        height: 32px;
        width: 100%;
        background-color: #f3f3f3;
        border-top: solid 1.5px #e6e6e6;

      }
    `}constructor(){super()}render(){return Bt`
      <div class="root">

      </div>
    `}};qo=ys([jt("app-status-bar")],qo);var ws=Object.defineProperty,_s=Object.getOwnPropertyDescriptor,Ci=(t,e,o,i)=>{for(var r=i>1?void 0:i?_s(e,o):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(i?n(e,o,r):n(r))||r);return i&&r&&ws(e,o,r),r};let $s="/shoelace";Oe($s);let je=class extends W{constructor(){super(),"launchQueue"in window?window.launchQueue.setConsumer(t=>{if(!!t.files.length)for(const e of t.files)b.instance.setFileHandle(e)}):console.error("File Handling API is not supported!"),document.addEventListener("keydown",t=>{t.ctrlKey&&t.key==="s"&&(t.preventDefault(),b.instance.saveFile())}),window.addEventListener("beforeunload",t=>{if(b.instance.isDirty){const e=`Do you want to save changes to ${b.instance.fileName||"Untitled"}`;return t.returnValue=e,e}}),b.instance.on(M.decideOnChanges,t=>this.showDialog(t))}static get styles(){return It`
      .root {
        display: flex;
        flex-direction: column;
        height: 100vh;
        overflow: hidden;
      }

      app-editor {
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: auto;
        overflow: auto;


        /* background-color: pink; //todo - remove */
      }
      app-editor::-webkit-scrollbar {
        width: 14px;
        height: 14px;
      }

      app-editor::-webkit-scrollbar-track {

      }

      app-editor::-webkit-scrollbar-thumb {
        background-color: #8a8a8a;
        border: 4px solid rgba(0, 0, 0, 0);
        background-clip: padding-box;
        border-radius: 9999px;
      }

      /* app-header,
      app-menu {
        flex-grow: 0;
        flex-shrink: 0;
      } */
    `}showDialog(t){this.afterDialogAction=t,this.dialog.show()}async continueFromDialog(t){var e;t&&await b.instance.saveFile(),(e=this.dialog)==null||e.hide(),this.afterDialogAction==="open"?b.instance.openFile(!0):b.instance.newFile(!0)}render(){return Bt`
      <div class="root">
        <app-header></app-header>
        <app-menu></app-menu>
        <app-editor></app-editor>
        <app-status-bar></app-status-bar>
        <sl-dialog label="Notepad" class="dialog">
          Do you want to save changes to ${b.instance.fileName||"Untitled"}?
          <sl-button slot="footer" variant="primary" @click=${()=>this.continueFromDialog(!0)}>Save</sl-button>
          <sl-button slot="footer" @click=${()=>this.continueFromDialog(!1)}>Don't save</sl-button>
          <sl-button slot="footer" @click=${()=>{var t;return(t=this.dialog)==null?void 0:t.hide()}}>Cancel</sl-button>
        </sl-dialog>
      </div>
    `}};Ci([Qo(".dialog",!0)],je.prototype,"dialog",2);je=Ci([jt("app-index")],je);
//# sourceMappingURL=index.cbbb632c.js.map
