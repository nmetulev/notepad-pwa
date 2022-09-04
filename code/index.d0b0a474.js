(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol(),K=new Map;class at{constructor(t,e){if(this._$cssResult$=!0,e!==W)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=K.get(this.cssText);return V&&t===void 0&&(K.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const vt=r=>new at(typeof r=="string"?r:r+"",W),E=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new at(e,W)},$t=(r,t)=>{V?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=window.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)})},J=V?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return vt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var L;const Z=window.trustedTypes,ft=Z?Z.emptyScript:"",F=window.reactiveElementPolyfillSupport,k={toAttribute(r,t){switch(t){case Boolean:r=r?ft:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},ht=(r,t)=>t!==r&&(t==t||r==r),D={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:ht};class g extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Eh(i,e);s!==void 0&&(this._$Eu.set(s,i),t.push(s))}),t}static createProperty(t,e=D){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||D}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(J(s))}else t!==void 0&&e.push(J(t));return e}static _$Eh(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return $t(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=D){var s,n;const o=this.constructor._$Eh(t,i);if(o!==void 0&&i.reflect===!0){const d=((n=(s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==null&&n!==void 0?n:k.toAttribute)(e,i.type);this._$Ei=t,d==null?this.removeAttribute(o):this.setAttribute(o,d),this._$Ei=null}}_$AK(t,e){var i,s,n;const o=this.constructor,d=o._$Eu.get(t);if(d!==void 0&&this._$Ei!==d){const l=o.getPropertyOptions(d),a=l.converter,u=(n=(s=(i=a)===null||i===void 0?void 0:i.fromAttribute)!==null&&s!==void 0?s:typeof a=="function"?a:null)!==null&&n!==void 0?n:k.fromAttribute;this._$Ei=d,this[d]=u(e,l.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||ht)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Ei!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((s,n)=>this[n]=s),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$Eg)===null||t===void 0||t.forEach(s=>{var n;return(n=s.hostUpdate)===null||n===void 0?void 0:n.call(s)}),this.update(i)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$ES(i,this[i],e)),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},F==null||F({ReactiveElement:g}),((L=globalThis.reactiveElementVersions)!==null&&L!==void 0?L:globalThis.reactiveElementVersions=[]).push("1.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var z;const m=globalThis.trustedTypes,G=m?m.createPolicy("lit-html",{createHTML:r=>r}):void 0,f=`lit$${(Math.random()+"").slice(9)}$`,dt="?"+f,_t=`<${dt}>`,A=document,x=(r="")=>A.createComment(r),C=r=>r===null||typeof r!="object"&&typeof r!="function",ct=Array.isArray,gt=r=>{var t;return ct(r)||typeof((t=r)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Q=/-->/g,X=/>/g,_=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Y=/'/g,tt=/"/g,pt=/^(?:script|style|textarea|title)$/i,yt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),O=yt(1),b=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),et=new WeakMap,mt=(r,t,e)=>{var i,s;const n=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let o=n._$litPart$;if(o===void 0){const d=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;n._$litPart$=o=new U(t.insertBefore(x(),d),d,void 0,e!=null?e:{})}return o._$AI(r),o},y=A.createTreeWalker(A,129,null,!1),At=(r,t)=>{const e=r.length-1,i=[];let s,n=t===2?"<svg>":"",o=S;for(let l=0;l<e;l++){const a=r[l];let u,h,c=-1,v=0;for(;v<a.length&&(o.lastIndex=v,h=o.exec(a),h!==null);)v=o.lastIndex,o===S?h[1]==="!--"?o=Q:h[1]!==void 0?o=X:h[2]!==void 0?(pt.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=_):h[3]!==void 0&&(o=_):o===_?h[0]===">"?(o=s!=null?s:S,c=-1):h[1]===void 0?c=-2:(c=o.lastIndex-h[2].length,u=h[1],o=h[3]===void 0?_:h[3]==='"'?tt:Y):o===tt||o===Y?o=_:o===Q||o===X?o=S:(o=_,s=void 0);const H=o===_&&r[l+1].startsWith("/>")?" ":"";n+=o===S?a+_t:c>=0?(i.push(u),a.slice(0,c)+"$lit$"+a.slice(c)+f+H):a+f+(c===-2?(i.push(void 0),l):H)}const d=n+(r[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[G!==void 0?G.createHTML(d):d,i]};class P{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const d=t.length-1,l=this.parts,[a,u]=At(t,e);if(this.el=P.createElement(a,i),y.currentNode=this.el.content,e===2){const h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(s=y.nextNode())!==null&&l.length<d;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(f)){const v=u[o++];if(h.push(c),v!==void 0){const H=s.getAttribute(v.toLowerCase()+"$lit$").split(f),N=/([.?@])?(.*)/.exec(v);l.push({type:1,index:n,name:N[2],strings:H,ctor:N[1]==="."?wt:N[1]==="?"?St:N[1]==="@"?xt:R})}else l.push({type:6,index:n})}for(const c of h)s.removeAttribute(c)}if(pt.test(s.tagName)){const h=s.textContent.split(f),c=h.length-1;if(c>0){s.textContent=m?m.emptyScript:"";for(let v=0;v<c;v++)s.append(h[v],x()),y.nextNode(),l.push({type:2,index:++n});s.append(h[c],x())}}}else if(s.nodeType===8)if(s.data===dt)l.push({type:2,index:n});else{let h=-1;for(;(h=s.data.indexOf(f,h+1))!==-1;)l.push({type:7,index:n}),h+=f.length-1}n++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function w(r,t,e=r,i){var s,n,o,d;if(t===b)return t;let l=i!==void 0?(s=e._$Cl)===null||s===void 0?void 0:s[i]:e._$Cu;const a=C(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),a===void 0?l=void 0:(l=new a(r),l._$AT(r,e,i)),i!==void 0?((o=(d=e)._$Cl)!==null&&o!==void 0?o:d._$Cl=[])[i]=l:e._$Cu=l),l!==void 0&&(t=w(r,l._$AS(r,t.values),l,i)),t}class bt{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:A).importNode(i,!0);y.currentNode=n;let o=y.nextNode(),d=0,l=0,a=s[0];for(;a!==void 0;){if(d===a.index){let u;a.type===2?u=new U(o,o.nextSibling,this,t):a.type===1?u=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(u=new Ct(o,this,t)),this.v.push(u),a=s[++l]}d!==(a==null?void 0:a.index)&&(o=y.nextNode(),d++)}return n}m(t){let e=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class U{constructor(t,e,i,s){var n;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=(n=s==null?void 0:s.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=w(this,t,e),C(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==b&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):gt(t)?this.S(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==p&&C(this._$AH)?this._$AA.nextSibling.data=t:this.k(A.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,n=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=P.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.m(i);else{const o=new bt(n,this),d=o.p(this.options);o.m(i),this.k(d),this._$AH=o}}_$AC(t){let e=et.get(t.strings);return e===void 0&&et.set(t.strings,e=new P(t)),e}S(t){ct(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new U(this.A(x()),this.A(x()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class R{constructor(t,e,i,s,n){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(n===void 0)t=w(this,t,e,0),o=!C(t)||t!==this._$AH&&t!==b,o&&(this._$AH=t);else{const d=t;let l,a;for(t=n[0],l=0;l<n.length-1;l++)a=w(this,d[i+l],e,l),a===b&&(a=this._$AH[l]),o||(o=!C(a)||a!==this._$AH[l]),a===p?t=p:t!==p&&(t+=(a!=null?a:"")+n[l+1]),this._$AH[l]=a}o&&!s&&this.C(t)}C(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class wt extends R{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===p?void 0:t}}const Et=m?m.emptyScript:"";class St extends R{constructor(){super(...arguments),this.type=4}C(t){t&&t!==p?this.element.setAttribute(this.name,Et):this.element.removeAttribute(this.name)}}class xt extends R{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=(i=w(this,t,e,0))!==null&&i!==void 0?i:p)===b)return;const s=this._$AH,n=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==p&&(s===p||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class Ct{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){w(this,t)}}const it=window.litHtmlPolyfillSupport;it==null||it(P,U),((z=globalThis.litHtmlVersions)!==null&&z!==void 0?z:globalThis.litHtmlVersions=[]).push("2.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var B,j;class $ extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=mt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return b}}$.finalized=!0,$._$litElement$=!0,(B=globalThis.litElementHydrateSupport)===null||B===void 0||B.call(globalThis,{LitElement:$});const st=globalThis.litElementPolyfillSupport;st==null||st({LitElement:$});((j=globalThis.litElementVersions)!==null&&j!==void 0?j:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=r=>t=>typeof t=="function"?((e,i)=>(window.customElements.define(e,i),i))(r,t):((e,i)=>{const{kind:s,elements:n}=i;return{kind:s,elements:n,finisher(o){window.customElements.define(e,o)}}})(r,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pt=(r,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,r)}};function ut(r){return(t,e)=>e!==void 0?((i,s,n)=>{s.constructor.createProperty(n,i)})(r,t,e):Pt(r,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var I;((I=window.HTMLSlotElement)===null||I===void 0?void 0:I.prototype.assignedElements)!=null;var Ot=Object.defineProperty,Ut=Object.getOwnPropertyDescriptor,q=(r,t,e,i)=>{for(var s=i>1?void 0:i?Ut(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&Ot(t,e,s),s};let M=class extends ${constructor(){super(),this.title="PWA Starter",this.enableBack=!1}static get styles(){return E`
      :host {
        display: block;
        width: env(titlebar-area-width, 100%);
        height: env(titlebar-area-height, 33px);
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
    `}updated(r){r.has("enableBack")&&console.log("enableBack",this.enableBack)}render(){return O`
      <div class="root">
        <img src="/assets/icons/Square44x44Logo.scale-100.png" alt="Notepad logo" />
        <label>
          Untitled - Notepad
        </label>
      </div>
    `}};q([ut({type:String})],M.prototype,"title",2);q([ut({type:Boolean})],M.prototype,"enableBack",2);M=q([T("app-header")],M);var Tt=Object.defineProperty,Ht=Object.getOwnPropertyDescriptor,Nt=(r,t,e,i)=>{for(var s=i>1?void 0:i?Ht(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&Tt(t,e,s),s};let rt=class extends ${static get styles(){return E`
      .root {
        height: 48px;
        width: 100%;
        background-color: #f0f4f9;

      }
    `}constructor(){super()}render(){return O`
      <div class="root">

      </div>
    `}};rt=Nt([T("app-menu")],rt);var Mt=Object.defineProperty,Rt=Object.getOwnPropertyDescriptor,Lt=(r,t,e,i)=>{for(var s=i>1?void 0:i?Rt(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&Mt(t,e,s),s};let nt=class extends ${static get styles(){return E`
      :host {
        display: block
      }

      .root {
        background-color: white;
        padding: 16px;
        font-family: "Lucida Console";
        font-size: 12pt;
        font-style: regular;
        overflow: scroll;
      }

      .editor {

      }

      *:focus {
          outline: none;
      }
    `}constructor(){super()}render(){return O`
      <div class="root" >
        <div class="editor" contenteditable>
          contenteditable
        </div>
      </div>
    `}};nt=Lt([T("app-editor")],nt);var Dt=Object.defineProperty,zt=Object.getOwnPropertyDescriptor,Bt=(r,t,e,i)=>{for(var s=i>1?void 0:i?zt(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&Dt(t,e,s),s};let ot=class extends ${static get styles(){return E`
      .root {
        height: 32px;
        width: 100%;
        background-color: lightgray

      }
    `}constructor(){super()}render(){return O`
      <div class="root">

      </div>
    `}};ot=Bt([T("app-status-bar")],ot);const Vt=E``;var jt=Object.defineProperty,It=Object.getOwnPropertyDescriptor,kt=(r,t,e,i)=>{for(var s=i>1?void 0:i?It(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&jt(t,e,s),s};let lt=class extends ${static get styles(){return E`
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
        background-color: pink; //todo - remove
      }

      /* app-header,
      app-menu {
        flex-grow: 0;
        flex-shrink: 0;
      } */
    `}constructor(){super()}firstUpdated(){}render(){return O`
      <div class="root">
        <app-header></app-header>
        <app-menu></app-menu>
        <app-editor></app-editor>
        <app-status-bar></app-status-bar>
      </div>
    `}};lt=kt([T("app-index")],lt);
//# sourceMappingURL=index.d0b0a474.js.map
