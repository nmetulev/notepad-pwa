if(!self.define){let e,n={};const s=(s,i)=>(s=new URL(s+".js",i).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,t)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(n[o])return;let c={};const r=e=>s(e,o),l={module:{uri:o},exports:c,require:r};n[o]=Promise.all(i.map((e=>l[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-5ac1b792"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"code/app-about.8fc789bc.js",revision:null},{url:"code/index.5e73f5ec.js",revision:null},{url:"code/index.c492f108.css",revision:null},{url:"index.html",revision:"f495fc1b94bf713c6913668e49352ff9"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/unpkg\.com\/.*/i,new e.CacheFirst({cacheName:"unpkg-libs-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=sw.js.map
