(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ot=window,Dt=ot.ShadowRoot&&(ot.ShadyCSS===void 0||ot.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Rt=Symbol(),Kt=new WeakMap;class Pe{constructor(t,r,o){if(this._$cssResult$=!0,o!==Rt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Dt&&t===void 0){const o=r!==void 0&&r.length===1;o&&(t=Kt.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Kt.set(r,t))}return t}toString(){return this.cssText}}const Je=e=>new Pe(typeof e=="string"?e:e+"",void 0,Rt),Y=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((o,s,i)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1],e[0]);return new Pe(r,e,Rt)},Xe=(e,t)=>{Dt?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const o=document.createElement("style"),s=ot.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=r.cssText,e.appendChild(o)})},Zt=Dt?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const o of t.cssRules)r+=o.cssText;return Je(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ht;const st=window,Jt=st.trustedTypes,Ye=Jt?Jt.emptyScript:"",Xt=st.reactiveElementPolyfillSupport,kt={toAttribute(e,t){switch(t){case Boolean:e=e?Ye:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},ke=(e,t)=>t!==e&&(t==t||e==e),pt={attribute:!0,type:String,converter:kt,reflect:!1,hasChanged:ke};class P extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;(r=this.h)!==null&&r!==void 0||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,o)=>{const s=this._$Ep(o,r);s!==void 0&&(this._$Ev.set(s,o),t.push(s))}),t}static createProperty(t,r=pt){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const o=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,o,r);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,r,o){return{get(){return this[r]},set(s){const i=this[t];this[r]=s,this.requestUpdate(t,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||pt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,o=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const s of o)this.createProperty(s,r[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const s of o)r.unshift(Zt(s))}else t!==void 0&&r.push(Zt(t));return r}static _$Ep(t,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,o;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Xe(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var o;return(o=r.hostConnected)===null||o===void 0?void 0:o.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var o;return(o=r.hostDisconnected)===null||o===void 0?void 0:o.call(r)})}attributeChangedCallback(t,r,o){this._$AK(t,o)}_$EO(t,r,o=pt){var s;const i=this.constructor._$Ep(t,o);if(i!==void 0&&o.reflect===!0){const n=(((s=o.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?o.converter:kt).toAttribute(r,o.type);this._$El=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$El=null}}_$AK(t,r){var o;const s=this.constructor,i=s._$Ev.get(t);if(i!==void 0&&this._$El!==i){const n=s.getPropertyOptions(i),u=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?n.converter:kt;this._$El=i,this[i]=u.fromAttribute(r,n.type),this._$El=null}}requestUpdate(t,r,o){let s=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||ke)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),o.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,i)=>this[i]=s),this._$Ei=void 0);let r=!1;const o=this._$AL;try{r=this.shouldUpdate(o),r?(this.willUpdate(o),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var i;return(i=s.hostUpdate)===null||i===void 0?void 0:i.call(s)}),this.update(o)):this._$Ek()}catch(s){throw r=!1,this._$Ek(),s}r&&this._$AE(o)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(o=>{var s;return(s=o.hostUpdated)===null||s===void 0?void 0:s.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,o)=>this._$EO(o,this[o],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}P.finalized=!0,P.elementProperties=new Map,P.elementStyles=[],P.shadowRootOptions={mode:"open"},Xt==null||Xt({ReactiveElement:P}),((ht=st.reactiveElementVersions)!==null&&ht!==void 0?ht:st.reactiveElementVersions=[]).push("1.4.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var vt;const it=window,N=it.trustedTypes,Yt=N?N.createPolicy("lit-html",{createHTML:e=>e}):void 0,A=`lit$${(Math.random()+"").slice(9)}$`,Oe="?"+A,Ge=`<${Oe}>`,L=document,W=(e="")=>L.createComment(e),K=e=>e===null||typeof e!="object"&&typeof e!="function",Ue=Array.isArray,Qe=e=>Ue(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Gt=/-->/g,Qt=/>/g,S=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),te=/'/g,ee=/"/g,Te=/^(?:script|style|textarea|title)$/i,tr=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),G=tr(1),M=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),re=new WeakMap,er=(e,t,r)=>{var o,s;const i=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:t;let n=i._$litPart$;if(n===void 0){const u=(s=r==null?void 0:r.renderBefore)!==null&&s!==void 0?s:null;i._$litPart$=n=new Q(t.insertBefore(W(),u),u,void 0,r!=null?r:{})}return n._$AI(e),n},U=L.createTreeWalker(L,129,null,!1),rr=(e,t)=>{const r=e.length-1,o=[];let s,i=t===2?"<svg>":"",n=I;for(let l=0;l<r;l++){const a=e[l];let p,d,c=-1,m=0;for(;m<a.length&&(n.lastIndex=m,d=n.exec(a),d!==null);)m=n.lastIndex,n===I?d[1]==="!--"?n=Gt:d[1]!==void 0?n=Qt:d[2]!==void 0?(Te.test(d[2])&&(s=RegExp("</"+d[2],"g")),n=S):d[3]!==void 0&&(n=S):n===S?d[0]===">"?(n=s!=null?s:I,c=-1):d[1]===void 0?c=-2:(c=n.lastIndex-d[2].length,p=d[1],n=d[3]===void 0?S:d[3]==='"'?ee:te):n===ee||n===te?n=S:n===Gt||n===Qt?n=I:(n=S,s=void 0);const $=n===S&&e[l+1].startsWith("/>")?" ":"";i+=n===I?a+Ge:c>=0?(o.push(p),a.slice(0,c)+"$lit$"+a.slice(c)+A+$):a+A+(c===-2?(o.push(void 0),l):$)}const u=i+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Yt!==void 0?Yt.createHTML(u):u,o]};class Z{constructor({strings:t,_$litType$:r},o){let s;this.parts=[];let i=0,n=0;const u=t.length-1,l=this.parts,[a,p]=rr(t,r);if(this.el=Z.createElement(a,o),U.currentNode=this.el.content,r===2){const d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(s=U.nextNode())!==null&&l.length<u;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(A)){const m=p[n++];if(d.push(c),m!==void 0){const $=s.getAttribute(m.toLowerCase()+"$lit$").split(A),rt=/([.?@])?(.*)/.exec(m);l.push({type:1,index:i,name:rt[2],strings:$,ctor:rt[1]==="."?sr:rt[1]==="?"?nr:rt[1]==="@"?lr:at})}else l.push({type:6,index:i})}for(const c of d)s.removeAttribute(c)}if(Te.test(s.tagName)){const d=s.textContent.split(A),c=d.length-1;if(c>0){s.textContent=N?N.emptyScript:"";for(let m=0;m<c;m++)s.append(d[m],W()),U.nextNode(),l.push({type:2,index:++i});s.append(d[c],W())}}}else if(s.nodeType===8)if(s.data===Oe)l.push({type:2,index:i});else{let d=-1;for(;(d=s.data.indexOf(A,d+1))!==-1;)l.push({type:7,index:i}),d+=A.length-1}i++}}static createElement(t,r){const o=L.createElement("template");return o.innerHTML=t,o}}function H(e,t,r=e,o){var s,i,n,u;if(t===M)return t;let l=o!==void 0?(s=r._$Cl)===null||s===void 0?void 0:s[o]:r._$Cu;const a=K(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((i=l==null?void 0:l._$AO)===null||i===void 0||i.call(l,!1),a===void 0?l=void 0:(l=new a(e),l._$AT(e,r,o)),o!==void 0?((n=(u=r)._$Cl)!==null&&n!==void 0?n:u._$Cl=[])[o]=l:r._$Cu=l),l!==void 0&&(t=H(e,l._$AS(e,t.values),l,o)),t}class or{constructor(t,r){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var r;const{el:{content:o},parts:s}=this._$AD,i=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:L).importNode(o,!0);U.currentNode=i;let n=U.nextNode(),u=0,l=0,a=s[0];for(;a!==void 0;){if(u===a.index){let p;a.type===2?p=new Q(n,n.nextSibling,this,t):a.type===1?p=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(p=new ar(n,this,t)),this.v.push(p),a=s[++l]}u!==(a==null?void 0:a.index)&&(n=U.nextNode(),u++)}return i}m(t){let r=0;for(const o of this.v)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,r),r+=o.strings.length-2):o._$AI(t[r])),r++}}class Q{constructor(t,r,o,s){var i;this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=o,this.options=s,this._$C_=(i=s==null?void 0:s.isConnected)===null||i===void 0||i}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$C_}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=H(this,t,r),K(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==M&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):Qe(t)?this.O(t):this.$(t)}S(t,r=this._$AB){return this._$AA.parentNode.insertBefore(t,r)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==g&&K(this._$AH)?this._$AA.nextSibling.data=t:this.k(L.createTextNode(t)),this._$AH=t}T(t){var r;const{values:o,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Z.createElement(s.h,this.options)),s);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===i)this._$AH.m(o);else{const n=new or(i,this),u=n.p(this.options);n.m(o),this.k(u),this._$AH=n}}_$AC(t){let r=re.get(t.strings);return r===void 0&&re.set(t.strings,r=new Z(t)),r}O(t){Ue(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,s=0;for(const i of t)s===r.length?r.push(o=new Q(this.S(W()),this.S(W()),this,this.options)):o=r[s],o._$AI(i),s++;s<r.length&&(this._$AR(o&&o._$AB.nextSibling,s),r.length=s)}_$AR(t=this._$AA.nextSibling,r){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,r);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var r;this._$AM===void 0&&(this._$C_=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class at{constructor(t,r,o,s,i){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=r,this._$AM=s,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=g}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,o,s){const i=this.strings;let n=!1;if(i===void 0)t=H(this,t,r,0),n=!K(t)||t!==this._$AH&&t!==M,n&&(this._$AH=t);else{const u=t;let l,a;for(t=i[0],l=0;l<i.length-1;l++)a=H(this,u[o+l],r,l),a===M&&(a=this._$AH[l]),n||(n=!K(a)||a!==this._$AH[l]),a===g?t=g:t!==g&&(t+=(a!=null?a:"")+i[l+1]),this._$AH[l]=a}n&&!s&&this.P(t)}P(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class sr extends at{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===g?void 0:t}}const ir=N?N.emptyScript:"";class nr extends at{constructor(){super(...arguments),this.type=4}P(t){t&&t!==g?this.element.setAttribute(this.name,ir):this.element.removeAttribute(this.name)}}class lr extends at{constructor(t,r,o,s,i){super(t,r,o,s,i),this.type=5}_$AI(t,r=this){var o;if((t=(o=H(this,t,r,0))!==null&&o!==void 0?o:g)===M)return;const s=this._$AH,i=t===g&&s!==g||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==g&&(s===g||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,o;typeof this._$AH=="function"?this._$AH.call((o=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}}class ar{constructor(t,r,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){H(this,t)}}const oe=it.litHtmlPolyfillSupport;oe==null||oe(Z,Q),((vt=it.litHtmlVersions)!==null&&vt!==void 0?vt:it.litHtmlVersions=[]).push("2.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var bt,ft;class y extends P{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,r;const o=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=o.firstChild),o}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=er(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return M}}y.finalized=!0,y._$litElement$=!0,(bt=globalThis.litElementHydrateSupport)===null||bt===void 0||bt.call(globalThis,{LitElement:y});const se=globalThis.litElementPolyfillSupport;se==null||se({LitElement:y});((ft=globalThis.litElementVersions)!==null&&ft!==void 0?ft:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tt=e=>t=>typeof t=="function"?((r,o)=>(customElements.define(r,o),o))(e,t):((r,o)=>{const{kind:s,elements:i}=o;return{kind:s,elements:i,finisher(n){customElements.define(r,n)}}})(e,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ur=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function Ne(e){return(t,r)=>r!==void 0?((o,s,i)=>{s.constructor.createProperty(i,o)})(e,t,r):ur(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var gt;((gt=window.HTMLSlotElement)===null||gt===void 0?void 0:gt.prototype.assignedElements)!=null;var Ot="";function Ut(e){Ot=e}function dr(){if(!Ot){const e=[...document.getElementsByTagName("script")],t=e.find(r=>r.hasAttribute("data-shoelace"));if(t)Ut(t.getAttribute("data-shoelace"));else{const r=e.find(s=>/shoelace(\.min)?\.js($|\?)/.test(s.src));let o="";r&&(o=r.getAttribute("src")),Ut(o.split("/").slice(0,-1).join("/"))}}return Ot.replace(/\/$/,"")}var Le=Object.defineProperty,cr=Object.defineProperties,hr=Object.getOwnPropertyDescriptor,pr=Object.getOwnPropertyDescriptors,ie=Object.getOwnPropertySymbols,vr=Object.prototype.hasOwnProperty,br=Object.prototype.propertyIsEnumerable,ne=(e,t,r)=>t in e?Le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,B=(e,t)=>{for(var r in t||(t={}))vr.call(t,r)&&ne(e,r,t[r]);if(ie)for(var r of ie(t))br.call(t,r)&&ne(e,r,t[r]);return e},Bt=(e,t)=>cr(e,pr(t)),h=(e,t,r,o)=>{for(var s=o>1?void 0:o?hr(t,r):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=(o?n(t,r,s):n(s))||s);return o&&s&&Le(t,r,s),s},fr=Object.defineProperty,gr=Object.getOwnPropertyDescriptor,It=(e,t,r,o)=>{for(var s=o>1?void 0:o?gr(t,r):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=(o?n(t,r,s):n(s))||s);return o&&s&&fr(t,r,s),s};let nt=class extends y{constructor(){super(),this.title="PWA Starter",this.enableBack=!1}static get styles(){return Y`
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
    `}updated(e){e.has("enableBack")&&console.log("enableBack",this.enableBack)}render(){return G`
      <div class="root">
        <img src="/assets/icons/Square44x44Logo.scale-100.png" alt="Notepad logo" />
        <label>
          Untitled - Notepad
        </label>
      </div>
    `}};It([Ne({type:String})],nt.prototype,"title",2);It([Ne({type:Boolean})],nt.prototype,"enableBack",2);nt=It([tt("app-header")],nt);var mr=class extends Event{constructor(e){super("formdata"),this.formData=e}},$r=class extends FormData{constructor(e){var t=(...r)=>{super(...r)};e?(t(e),this.form=e,e.dispatchEvent(new mr(this))):t()}append(e,t){if(!this.form)return super.append(e,t);let r=this.form.elements[e];if(r||(r=document.createElement("input"),r.type="hidden",r.name=e,this.form.appendChild(r)),this.has(e)){const o=this.getAll(e),s=o.indexOf(r.value);s!==-1&&o.splice(s,1),o.push(t),this.set(e,o)}else super.append(e,t);r.value=t}};function _r(){const e=document.createElement("form");let t=!1;return document.body.append(e),e.addEventListener("submit",r=>{new FormData(r.target),r.preventDefault()}),e.addEventListener("formdata",()=>t=!0),e.dispatchEvent(new Event("submit",{cancelable:!0})),e.remove(),t}function le(){!window.FormData||_r()||(window.FormData=$r,window.addEventListener("submit",e=>{e.defaultPrevented||new FormData(e.target)}))}document.readyState==="complete"?le():window.addEventListener("DOMContentLoaded",()=>le());var V=new WeakMap,yr=class{constructor(e,t){(this.host=e).addController(this),this.options=B({form:r=>r.closest("form"),name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>r.disabled,reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,setValue:(r,o)=>{r.value=o}},t),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this)}hostConnected(){this.form=this.options.form(this.host),this.form&&(this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),V.has(this.form)||(V.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()))}hostDisconnected(){this.form&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),V.has(this.form)&&(this.form.reportValidity=V.get(this.form),V.delete(this.form)),this.form=void 0)}handleFormData(e){const t=this.options.disabled(this.host),r=this.options.name(this.host),o=this.options.value(this.host);!t&&typeof r=="string"&&typeof o<"u"&&(Array.isArray(o)?o.forEach(s=>{e.formData.append(r,s.toString())}):e.formData.append(r,o.toString()))}handleFormSubmit(e){const t=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&!t&&!r(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host))}reportFormValidity(){if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const t of e)if(typeof t.reportValidity=="function"&&!t.reportValidity())return!1}return!0}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&["formaction","formmethod","formnovalidate","formtarget"].forEach(o=>{t.hasAttribute(o)&&r.setAttribute(o,t.getAttribute(o))}),this.form.append(r),r.click(),r.remove()}}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}},Vt=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,jt=Symbol(),ae=new Map,Me=class{constructor(e,t){if(this._$cssResult$=!0,t!==jt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=ae.get(this.cssText);return Vt&&e===void 0&&(ae.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}},wr=e=>new Me(typeof e=="string"?e:e+"",jt),ut=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((o,s,i)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1],e[0]);return new Me(r,jt)},Ar=(e,t)=>{Vt?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const o=document.createElement("style"),s=window.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=r.cssText,e.appendChild(o)})},ue=Vt?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const o of t.cssRules)r+=o.cssText;return wr(r)})(e):e,mt,de=window.trustedTypes,xr=de?de.emptyScript:"",ce=window.reactiveElementPolyfillSupport,Tt={toAttribute(e,t){switch(t){case Boolean:e=e?xr:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},He=(e,t)=>t!==e&&(t==t||e==e),$t={attribute:!0,type:String,converter:Tt,reflect:!1,hasChanged:He},k=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,r)=>{const o=this._$Eh(r,t);o!==void 0&&(this._$Eu.set(o,r),e.push(o))}),e}static createProperty(e,t=$t){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,r,t);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(o){const s=this[e];this[t]=o,this.requestUpdate(e,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||$t}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of r)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const o of r)t.unshift(ue(o))}else e!==void 0&&t.push(ue(e));return t}static _$Eh(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$Eg)!==null&&t!==void 0?t:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$Eg)===null||t===void 0||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Ar(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ES(e,t,r=$t){var o,s;const i=this.constructor._$Eh(e,r);if(i!==void 0&&r.reflect===!0){const n=((s=(o=r.converter)===null||o===void 0?void 0:o.toAttribute)!==null&&s!==void 0?s:Tt.toAttribute)(t,r.type);this._$Ei=e,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Ei=null}}_$AK(e,t){var r,o,s;const i=this.constructor,n=i._$Eu.get(e);if(n!==void 0&&this._$Ei!==n){const u=i.getPropertyOptions(n),l=u.converter,a=(s=(o=(r=l)===null||r===void 0?void 0:r.fromAttribute)!==null&&o!==void 0?o:typeof l=="function"?l:null)!==null&&s!==void 0?s:Tt.fromAttribute;this._$Ei=n,this[n]=a(t,u.type),this._$Ei=null}}requestUpdate(e,t,r){let o=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||He)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Ei!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):o=!1),!this.isUpdatePending&&o&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((o,s)=>this[s]=o),this._$Et=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$Eg)===null||e===void 0||e.forEach(o=>{var s;return(s=o.hostUpdate)===null||s===void 0?void 0:s.call(o)}),this.update(r)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$Eg)===null||t===void 0||t.forEach(r=>{var o;return(o=r.hostUpdated)===null||o===void 0?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$ES(r,this[r],t)),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}};k.finalized=!0,k.elementProperties=new Map,k.elementStyles=[],k.shadowRootOptions={mode:"open"},ce==null||ce({ReactiveElement:k}),((mt=globalThis.reactiveElementVersions)!==null&&mt!==void 0?mt:globalThis.reactiveElementVersions=[]).push("1.3.2");var _t,z=globalThis.trustedTypes,he=z?z.createPolicy("lit-html",{createHTML:e=>e}):void 0,x=`lit$${(Math.random()+"").slice(9)}$`,ze="?"+x,Er=`<${ze}>`,D=document,J=(e="")=>D.createComment(e),X=e=>e===null||typeof e!="object"&&typeof e!="function",De=Array.isArray,Sr=e=>{var t;return De(e)||typeof((t=e)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pe=/-->/g,ve=/>/g,C=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,be=/'/g,fe=/"/g,Re=/^(?:script|style|textarea|title)$/i,Cr=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),Ft=Cr(1),E=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),ge=new WeakMap,Pr=(e,t,r)=>{var o,s;const i=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:t;let n=i._$litPart$;if(n===void 0){const u=(s=r==null?void 0:r.renderBefore)!==null&&s!==void 0?s:null;i._$litPart$=n=new dt(t.insertBefore(J(),u),u,void 0,r!=null?r:{})}return n._$AI(e),n},T=D.createTreeWalker(D,129,null,!1),kr=(e,t)=>{const r=e.length-1,o=[];let s,i=t===2?"<svg>":"",n=j;for(let l=0;l<r;l++){const a=e[l];let p,d,c=-1,m=0;for(;m<a.length&&(n.lastIndex=m,d=n.exec(a),d!==null);)m=n.lastIndex,n===j?d[1]==="!--"?n=pe:d[1]!==void 0?n=ve:d[2]!==void 0?(Re.test(d[2])&&(s=RegExp("</"+d[2],"g")),n=C):d[3]!==void 0&&(n=C):n===C?d[0]===">"?(n=s!=null?s:j,c=-1):d[1]===void 0?c=-2:(c=n.lastIndex-d[2].length,p=d[1],n=d[3]===void 0?C:d[3]==='"'?fe:be):n===fe||n===be?n=C:n===pe||n===ve?n=j:(n=C,s=void 0);const $=n===C&&e[l+1].startsWith("/>")?" ":"";i+=n===j?a+Er:c>=0?(o.push(p),a.slice(0,c)+"$lit$"+a.slice(c)+x+$):a+x+(c===-2?(o.push(void 0),l):$)}const u=i+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[he!==void 0?he.createHTML(u):u,o]},lt=class{constructor({strings:e,_$litType$:t},r){let o;this.parts=[];let s=0,i=0;const n=e.length-1,u=this.parts,[l,a]=kr(e,t);if(this.el=lt.createElement(l,r),T.currentNode=this.el.content,t===2){const p=this.el.content,d=p.firstChild;d.remove(),p.append(...d.childNodes)}for(;(o=T.nextNode())!==null&&u.length<n;){if(o.nodeType===1){if(o.hasAttributes()){const p=[];for(const d of o.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(x)){const c=a[i++];if(p.push(d),c!==void 0){const m=o.getAttribute(c.toLowerCase()+"$lit$").split(x),$=/([.?@])?(.*)/.exec(c);u.push({type:1,index:s,name:$[2],strings:m,ctor:$[1]==="."?Ur:$[1]==="?"?Nr:$[1]==="@"?Lr:ct})}else u.push({type:6,index:s})}for(const d of p)o.removeAttribute(d)}if(Re.test(o.tagName)){const p=o.textContent.split(x),d=p.length-1;if(d>0){o.textContent=z?z.emptyScript:"";for(let c=0;c<d;c++)o.append(p[c],J()),T.nextNode(),u.push({type:2,index:++s});o.append(p[d],J())}}}else if(o.nodeType===8)if(o.data===ze)u.push({type:2,index:s});else{let p=-1;for(;(p=o.data.indexOf(x,p+1))!==-1;)u.push({type:7,index:s}),p+=x.length-1}s++}}static createElement(e,t){const r=D.createElement("template");return r.innerHTML=e,r}};function R(e,t,r=e,o){var s,i,n,u;if(t===E)return t;let l=o!==void 0?(s=r._$Cl)===null||s===void 0?void 0:s[o]:r._$Cu;const a=X(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((i=l==null?void 0:l._$AO)===null||i===void 0||i.call(l,!1),a===void 0?l=void 0:(l=new a(e),l._$AT(e,r,o)),o!==void 0?((n=(u=r)._$Cl)!==null&&n!==void 0?n:u._$Cl=[])[o]=l:r._$Cu=l),l!==void 0&&(t=R(e,l._$AS(e,t.values),l,o)),t}var Or=class{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:r},parts:o}=this._$AD,s=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:D).importNode(r,!0);T.currentNode=s;let i=T.nextNode(),n=0,u=0,l=o[0];for(;l!==void 0;){if(n===l.index){let a;l.type===2?a=new dt(i,i.nextSibling,this,e):l.type===1?a=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(a=new Mr(i,this,e)),this.v.push(a),l=o[++u]}n!==(l==null?void 0:l.index)&&(i=T.nextNode(),n++)}return s}m(e){let t=0;for(const r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},dt=class{constructor(e,t,r,o){var s;this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cg=(s=o==null?void 0:o.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=R(this,e,t),X(e)?e===f||e==null||e===""?(this._$AH!==f&&this._$AR(),this._$AH=f):e!==this._$AH&&e!==E&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):Sr(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==f&&X(this._$AH)?this._$AA.nextSibling.data=e:this.k(D.createTextNode(e)),this._$AH=e}T(e){var t;const{values:r,_$litType$:o}=e,s=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=lt.createElement(o.h,this.options)),o);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.m(r);else{const i=new Or(s,this),n=i.p(this.options);i.m(r),this.k(n),this._$AH=i}}_$AC(e){let t=ge.get(e.strings);return t===void 0&&ge.set(e.strings,t=new lt(e)),t}S(e){De(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,o=0;for(const s of e)o===t.length?t.push(r=new dt(this.M(J()),this.M(J()),this,this.options)):r=t[o],r._$AI(s),o++;o<t.length&&(this._$AR(r&&r._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},ct=class{constructor(e,t,r,o,s){this.type=1,this._$AH=f,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=f}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,o){const s=this.strings;let i=!1;if(s===void 0)e=R(this,e,t,0),i=!X(e)||e!==this._$AH&&e!==E,i&&(this._$AH=e);else{const n=e;let u,l;for(e=s[0],u=0;u<s.length-1;u++)l=R(this,n[r+u],t,u),l===E&&(l=this._$AH[u]),i||(i=!X(l)||l!==this._$AH[u]),l===f?e=f:e!==f&&(e+=(l!=null?l:"")+s[u+1]),this._$AH[u]=l}i&&!o&&this.C(e)}C(e){e===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},Ur=class extends ct{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===f?void 0:e}},Tr=z?z.emptyScript:"",Nr=class extends ct{constructor(){super(...arguments),this.type=4}C(e){e&&e!==f?this.element.setAttribute(this.name,Tr):this.element.removeAttribute(this.name)}},Lr=class extends ct{constructor(e,t,r,o,s){super(e,t,r,o,s),this.type=5}_$AI(e,t=this){var r;if((e=(r=R(this,e,t,0))!==null&&r!==void 0?r:f)===E)return;const o=this._$AH,s=e===f&&o!==f||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==f&&(o===f||s);s&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},Mr=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){R(this,e)}},me=window.litHtmlPolyfillSupport;me==null||me(lt,dt),((_t=globalThis.litHtmlVersions)!==null&&_t!==void 0?_t:globalThis.litHtmlVersions=[]).push("2.2.4");var yt,wt,F=class extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=Pr(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return E}};F.finalized=!0,F._$litElement$=!0,(yt=globalThis.litElementHydrateSupport)===null||yt===void 0||yt.call(globalThis,{LitElement:F});var $e=globalThis.litElementPolyfillSupport;$e==null||$e({LitElement:F});((wt=globalThis.litElementVersions)!==null&&wt!==void 0?wt:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var qt=ut`
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
`,Hr=ut`
  ${qt}

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
`,Be=Symbol.for(""),zr=e=>{var t,r;if(((t=e)===null||t===void 0?void 0:t.r)===Be)return(r=e)===null||r===void 0?void 0:r._$litStatic$},_e=(e,...t)=>({_$litStatic$:t.reduce((r,o,s)=>r+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+e[s+1],e[0]),r:Be}),ye=new Map,Dr=e=>(t,...r)=>{const o=r.length;let s,i;const n=[],u=[];let l,a=0,p=!1;for(;a<o;){for(l=t[a];a<o&&(i=r[a],(s=zr(i))!==void 0);)l+=s+t[++a],p=!0;u.push(i),n.push(l),a++}if(a===o&&n.push(t[o]),p){const d=n.join("$$lit$$");(t=ye.get(d))===void 0&&(n.raw=n,ye.set(d,t=n)),r=u}return e(t,...r)},At=Dr(Ft);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Nt=new Set,Rr=new MutationObserver(je),O=new Map,Ie=document.documentElement.dir||"ltr",Ve=document.documentElement.lang||navigator.language,q;Rr.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Br(...e){e.map(t=>{const r=t.$code.toLowerCase();O.has(r)?O.set(r,Object.assign(Object.assign({},O.get(r)),t)):O.set(r,t),q||(q=t)}),je()}function je(){Ie=document.documentElement.dir||"ltr",Ve=document.documentElement.lang||navigator.language,[...Nt.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}var Ir=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Nt.add(this.host)}hostDisconnected(){Nt.delete(this.host)}dir(){return`${this.host.dir||Ie}`.toLowerCase()}lang(){return`${this.host.lang||Ve}`.toLowerCase()}term(e,...t){const r=this.lang().toLowerCase().slice(0,2),o=this.lang().length>2?this.lang().toLowerCase():"",s=O.get(o),i=O.get(r);let n;if(s&&s[e])n=s[e];else if(i&&i[e])n=i[e];else if(q&&q[e])n=q[e];else return console.error(`No translation found for: ${String(e)}`),e;return typeof n=="function"?n(...t):n}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,t)}},Fe=class extends Ir{},Vr={$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"};Br(Vr);var jr=class{constructor(e,...t){this.slotNames=[],(this.host=e).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(e){const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}},qe={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},We=e=>(...t)=>({_$litDirective$:e,values:t}),Ke=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Fr=We(class extends Ke{constructor(e){var t;if(super(e),e.type!==qe.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,o;if(this.et===void 0){this.et=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!(!((r=this.st)===null||r===void 0)&&r.has(i))&&this.et.add(i);return this.render(t)}const s=e.element.classList;this.et.forEach(i=>{i in t||(s.remove(i),this.et.delete(i))});for(const i in t){const n=!!t[i];n===this.et.has(i)||((o=this.st)===null||o===void 0?void 0:o.has(i))||(n?(s.add(i),this.et.add(i)):(s.remove(i),this.et.delete(i)))}return E}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _=e=>e!=null?e:f;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Wt=e=>t=>typeof t=="function"?((r,o)=>(window.customElements.define(r,o),o))(e,t):((r,o)=>{const{kind:s,elements:i}=o;return{kind:s,elements:i,finisher(n){window.customElements.define(r,n)}}})(e,t),qr=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?Bt(B({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function v(e){return(t,r)=>r!==void 0?((o,s,i)=>{s.constructor.createProperty(i,o)})(e,t,r):qr(e,t)}function Ze(e){return v(Bt(B({},e),{state:!0}))}var Wr=({finisher:e,descriptor:t})=>(r,o)=>{var s;if(o===void 0){const i=(s=r.originalKey)!==null&&s!==void 0?s:r.key,n=t!=null?{kind:"method",placement:"prototype",key:i,descriptor:t(r.key)}:Bt(B({},r),{key:i});return e!=null&&(n.finisher=function(u){e(u,i)}),n}{const i=r.constructor;t!==void 0&&Object.defineProperty(r,o,t(o)),e==null||e(i,o)}};function Kr(e,t){return Wr({descriptor:r=>{const o={get(){var s,i;return(i=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(e))!==null&&i!==void 0?i:null},enumerable:!0,configurable:!0};if(t){const s=typeof r=="symbol"?Symbol():"__"+r;o.get=function(){var i,n;return this[s]===void 0&&(this[s]=(n=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(e))!==null&&n!==void 0?n:null),this[s]}}return o}})}var xt;((xt=window.HTMLSlotElement)===null||xt===void 0?void 0:xt.prototype.assignedElements)!=null;var et=class extends F{emit(e,t){const r=new CustomEvent(e,B({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}};h([v()],et.prototype,"dir",2);h([v()],et.prototype,"lang",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var b=class extends et{constructor(){super(...arguments),this.formSubmitController=new yr(this,{form:e=>{if(e.hasAttribute("form")){const t=e.getRootNode(),r=e.getAttribute("form");return t.getElementById(r)}return e.closest("form")}}),this.hasSlotController=new jr(this,"[default]","prefix","suffix"),this.localize=new Fe(this),this.hasFocus=!1,this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button"}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopPropagation();return}this.type==="submit"&&this.formSubmitController.submit(this),this.type==="reset"&&this.formSubmitController.reset(this)}render(){const e=!!this.href,t=e?_e`a`:_e`button`;return At`
      <${t}
        part="base"
        class=${Fr({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${_(e?void 0:this.disabled)}
        type=${_(e?void 0:this.type)}
        name=${_(e?void 0:this.name)}
        value=${_(e?void 0:this.value)}
        href=${_(e?this.href:void 0)}
        target=${_(e?this.target:void 0)}
        download=${_(e?this.download:void 0)}
        rel=${_(e&&this.target?"noreferrer noopener":void 0)}
        role=${_(e?void 0:"button")}
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
        ${this.caret?At`
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
        ${this.loading?At`<sl-spinner></sl-spinner>`:""}
      </${t}>
    `}};b.styles=Hr;h([Kr(".button")],b.prototype,"button",2);h([Ze()],b.prototype,"hasFocus",2);h([v({reflect:!0})],b.prototype,"variant",2);h([v({reflect:!0})],b.prototype,"size",2);h([v({type:Boolean,reflect:!0})],b.prototype,"caret",2);h([v({type:Boolean,reflect:!0})],b.prototype,"disabled",2);h([v({type:Boolean,reflect:!0})],b.prototype,"loading",2);h([v({type:Boolean,reflect:!0})],b.prototype,"outline",2);h([v({type:Boolean,reflect:!0})],b.prototype,"pill",2);h([v({type:Boolean,reflect:!0})],b.prototype,"circle",2);h([v()],b.prototype,"type",2);h([v()],b.prototype,"name",2);h([v()],b.prototype,"value",2);h([v()],b.prototype,"href",2);h([v()],b.prototype,"target",2);h([v()],b.prototype,"download",2);h([v()],b.prototype,"form",2);h([v({attribute:"formaction"})],b.prototype,"formAction",2);h([v({attribute:"formmethod"})],b.prototype,"formMethod",2);h([v({attribute:"formnovalidate",type:Boolean})],b.prototype,"formNoValidate",2);h([v({attribute:"formtarget"})],b.prototype,"formTarget",2);b=h([Wt("sl-button")],b);var Zr=ut`
  ${qt}

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
`,Lt=class extends et{constructor(){super(...arguments),this.localize=new Fe(this)}render(){return Ft`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Lt.styles=Zr;Lt=h([Wt("sl-spinner")],Lt);var Jr={name:"default",resolver:e=>`${dr()}/assets/icons/${e}.svg`},Xr=Jr,we={"check-lg":`
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
  `},Yr={name:"system",resolver:e=>e in we?`data:image/svg+xml,${encodeURIComponent(we[e])}`:""},Gr=Yr,Qr=[Xr,Gr],Mt=[];function to(e){Mt.push(e)}function eo(e){Mt=Mt.filter(t=>t!==e)}function Ae(e){return Qr.find(t=>t.name===e)}var Et=new Map;function ro(e,t="cors"){if(Et.has(e))return Et.get(e);const r=fetch(e,{mode:t}).then(async o=>({ok:o.ok,status:o.status,html:await o.text()}));return Et.set(e,r),r}var St=new Map;async function oo(e){if(St.has(e))return St.get(e);const t=await ro(e),r={ok:t.ok,status:t.status,svg:null};if(t.ok){const o=document.createElement("div");o.innerHTML=t.html;const s=o.firstElementChild;r.svg=(s==null?void 0:s.tagName.toLowerCase())==="svg"?s.outerHTML:""}return St.set(e,r),r}var so=ut`
  ${qt}

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
`;function Ct(e,t){const r=B({waitUntilFirstUpdate:!1},t);return(o,s)=>{const{update:i}=o;if(e in o){const n=e;o.update=function(u){if(u.has(n)){const l=u.get(n),a=this[n];l!==a&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[s](l,a)}i.call(this,u)}}}}var Ht=class extends Ke{constructor(e){if(super(e),this.it=f,e.type!==qe.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===f||e==null)return this.ft=void 0,this.it=e;if(e===E)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this.ft;this.it=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Ht.directiveName="unsafeHTML",Ht.resultType=1;var zt=class extends Ht{};zt.directiveName="unsafeSVG",zt.resultType=2;var io=We(zt),Pt,w=class extends et{constructor(){super(...arguments),this.svg="",this.label="",this.library="default"}connectedCallback(){super.connectedCallback(),to(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),eo(this)}getUrl(){const e=Ae(this.library);return this.name&&e?e.resolver(this.name):this.src}redraw(){this.setIcon()}async setIcon(){var e;const t=Ae(this.library),r=this.getUrl();if(Pt||(Pt=new DOMParser),r)try{const o=await oo(r);if(r!==this.getUrl())return;if(o.ok){const i=Pt.parseFromString(o.svg,"text/html").body.querySelector("svg");i!==null?((e=t==null?void 0:t.mutator)==null||e.call(t,i),this.svg=i.outerHTML,this.emit("sl-load")):(this.svg="",this.emit("sl-error"))}else this.svg="",this.emit("sl-error")}catch{this.emit("sl-error")}else this.svg.length>0&&(this.svg="")}handleChange(){this.setIcon()}render(){const e=typeof this.label=="string"&&this.label.length>0;return Ft` <div
      part="base"
      class="icon"
      role=${_(e?"img":void 0)}
      aria-label=${_(e?this.label:void 0)}
      aria-hidden=${_(e?void 0:"true")}
    >
      ${io(this.svg)}
    </div>`}};w.styles=so;h([Ze()],w.prototype,"svg",2);h([v({reflect:!0})],w.prototype,"name",2);h([v()],w.prototype,"src",2);h([v()],w.prototype,"label",2);h([v({reflect:!0})],w.prototype,"library",2);h([Ct("name"),Ct("src"),Ct("library")],w.prototype,"setIcon",1);w=h([Wt("sl-icon")],w);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var no=Object.defineProperty,lo=Object.getOwnPropertyDescriptor,ao=(e,t,r,o)=>{for(var s=o>1?void 0:o?lo(t,r):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=(o?n(t,r,s):n(s))||s);return o&&s&&no(t,r,s),s};let xe=class extends y{static get styles(){return Y`
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
    `}constructor(){super()}render(){return G`
      <div class="root">
        <div class="menubar">
          <sl-button>File</sl-button>
          <sl-button>Edit</sl-button>
          <sl-button>View</sl-button>
        </div>
        <div class="settings-container">
          <sl-button>
            <sl-icon name="gear" label="Settings"></sl-icon>
          </sl-button>
        </div>
      </div>
    `}};xe=ao([tt("app-menu")],xe);var uo=Object.defineProperty,co=Object.getOwnPropertyDescriptor,ho=(e,t,r,o)=>{for(var s=o>1?void 0:o?co(t,r):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=(o?n(t,r,s):n(s))||s);return o&&s&&uo(t,r,s),s};let Ee=class extends y{static get styles(){return Y`
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
      }

      *:focus {
          outline: none;
      }
    `}constructor(){super()}render(){return G`
      <div class="root" >
        <div class="editor" contenteditable>
          contenteditable
          <br />
          <br />
          TODO:
          <br />
          paste plain text only
        </div>
      </div>
    `}};Ee=ho([tt("app-editor")],Ee);var po=Object.defineProperty,vo=Object.getOwnPropertyDescriptor,bo=(e,t,r,o)=>{for(var s=o>1?void 0:o?vo(t,r):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=(o?n(t,r,s):n(s))||s);return o&&s&&po(t,r,s),s};let Se=class extends y{static get styles(){return Y`
      .root {
        height: 32px;
        width: 100%;
        background-color: #f3f3f3;
        border-top: solid 1.5px #e6e6e6;

      }
    `}constructor(){super()}render(){return G`
      <div class="root">

      </div>
    `}};Se=bo([tt("app-status-bar")],Se);var fo=Object.defineProperty,go=Object.getOwnPropertyDescriptor,mo=(e,t,r,o)=>{for(var s=o>1?void 0:o?go(t,r):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=(o?n(t,r,s):n(s))||s);return o&&s&&fo(t,r,s),s};let $o="/shoelace";Ut($o);let Ce=class extends y{static get styles(){return Y`
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
    `}constructor(){super()}firstUpdated(){}render(){return G`
      <div class="root">
        <app-header></app-header>
        <app-menu></app-menu>
        <app-editor></app-editor>
        <app-status-bar></app-status-bar>
      </div>
    `}};Ce=mo([tt("app-index")],Ce);
//# sourceMappingURL=index.8a544a05.js.map
