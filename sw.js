if(!self.define){let e,s={};const a=(a,r)=>(a=new URL(a+".js",r).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(r,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let n={};const c=e=>a(e,o),t={module:{uri:o},exports:n,require:c};s[o]=Promise.all(r.map((e=>t[e]||c(e)))).then((e=>(i(...e),n)))}}define(["./workbox-5ac1b792"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/icons/LargeTile.scale-100.png",revision:"4af3f863e4684bc0ef223c6f0b766d39"},{url:"assets/icons/LargeTile.scale-125.png",revision:"955ed92e4265b4cc660c9570424a3fbc"},{url:"assets/icons/LargeTile.scale-150.png",revision:"a7c03144f54988d80bad1b4482d61daf"},{url:"assets/icons/LargeTile.scale-200.png",revision:"aacd94baba94fe0ca792ea6e2d5b6e96"},{url:"assets/icons/LargeTile.scale-400.png",revision:"231ad51b9e90597faa267ba8e009c641"},{url:"assets/icons/SmallTile.scale-100.png",revision:"c9c2d25db4c7a77596354945e52a3b78"},{url:"assets/icons/SmallTile.scale-125.png",revision:"b32a2c097dd17285580ae0d55cc61584"},{url:"assets/icons/SmallTile.scale-150.png",revision:"840292ad840831fce8a77af0dde499d7"},{url:"assets/icons/SmallTile.scale-200.png",revision:"3be0f27280663b8b2297298fc1f716fe"},{url:"assets/icons/SmallTile.scale-400.png",revision:"64d697c8f4117e5ff4fe3b220419f5d8"},{url:"assets/icons/SplashScreen.scale-100.png",revision:"05f4a94aae9c662daf364271633904d2"},{url:"assets/icons/SplashScreen.scale-125.png",revision:"6387ace1296fead91090379727e9bb07"},{url:"assets/icons/SplashScreen.scale-150.png",revision:"bfd65c587b6dffd7667e377f4d83da3b"},{url:"assets/icons/SplashScreen.scale-200.png",revision:"02c046b74cfa41a973c49a8e7e959032"},{url:"assets/icons/SplashScreen.scale-400.png",revision:"13ffe51c21409c86066781f28295e0a5"},{url:"assets/icons/Square150x150Logo.scale-100.png",revision:"f68fd3902af8b541f20e89e3f031f21d"},{url:"assets/icons/Square150x150Logo.scale-125.png",revision:"18dd3ff82ddab7c234a6ac580f2eaad5"},{url:"assets/icons/Square150x150Logo.scale-150.png",revision:"fae7167ad6e9702c88eb8f38fb84d079"},{url:"assets/icons/Square150x150Logo.scale-200.png",revision:"95d632c6ab92fb2628eec46fc0bb7116"},{url:"assets/icons/Square150x150Logo.scale-400.png",revision:"f3bd471a755fc199e82a8eeb12a56b47"},{url:"assets/icons/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"77d9d8e71b93a9afb1d60278c26b53b4"},{url:"assets/icons/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"5fdf8a82e80d3d80535e754ca5d506bb"},{url:"assets/icons/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"feca8addce15b296ac9735f17bed5577"},{url:"assets/icons/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"ce21c5910627183dfe63dd5c6a4638cf"},{url:"assets/icons/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"7264937c57ffdc7977874dfa3f273003"},{url:"assets/icons/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"6064c120006584c7f863281acf70216b"},{url:"assets/icons/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"2aa564d244289d7abc7ee26de84bb8be"},{url:"assets/icons/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"5540ac9e92966ade482f6c5b7853c596"},{url:"assets/icons/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"4395bf0336d632c94db6ac0f7dffce06"},{url:"assets/icons/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"6e2d832bc373b82420c0426751ab5611"},{url:"assets/icons/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"80bfb8153cf3f24f06a13e57b0d11ba5"},{url:"assets/icons/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"d3633577d16a4211f463dc246dfbaa66"},{url:"assets/icons/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"14c10181fcadbdf3c65d85906212c85b"},{url:"assets/icons/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"16deb0828b4dfb2aecf09e08db6a5c56"},{url:"assets/icons/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"e36fad74e337fed76bb205f3a63925b4"},{url:"assets/icons/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"77d9d8e71b93a9afb1d60278c26b53b4"},{url:"assets/icons/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"5fdf8a82e80d3d80535e754ca5d506bb"},{url:"assets/icons/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"feca8addce15b296ac9735f17bed5577"},{url:"assets/icons/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"ce21c5910627183dfe63dd5c6a4638cf"},{url:"assets/icons/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"7264937c57ffdc7977874dfa3f273003"},{url:"assets/icons/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"6064c120006584c7f863281acf70216b"},{url:"assets/icons/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"2aa564d244289d7abc7ee26de84bb8be"},{url:"assets/icons/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"5540ac9e92966ade482f6c5b7853c596"},{url:"assets/icons/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"4395bf0336d632c94db6ac0f7dffce06"},{url:"assets/icons/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"6e2d832bc373b82420c0426751ab5611"},{url:"assets/icons/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"80bfb8153cf3f24f06a13e57b0d11ba5"},{url:"assets/icons/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"d3633577d16a4211f463dc246dfbaa66"},{url:"assets/icons/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"14c10181fcadbdf3c65d85906212c85b"},{url:"assets/icons/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"16deb0828b4dfb2aecf09e08db6a5c56"},{url:"assets/icons/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"e36fad74e337fed76bb205f3a63925b4"},{url:"assets/icons/Square44x44Logo.scale-100.png",revision:"4395bf0336d632c94db6ac0f7dffce06"},{url:"assets/icons/Square44x44Logo.scale-125.png",revision:"3b722e40af029bacd9cfd7cd1c9eff3f"},{url:"assets/icons/Square44x44Logo.scale-150.png",revision:"50ecfdbb0d563ac27a07c0e111f8a23f"},{url:"assets/icons/Square44x44Logo.scale-200.png",revision:"5d79c73ea7407aa097ff8c3d95486ac1"},{url:"assets/icons/Square44x44Logo.scale-400.png",revision:"d05da9ffdacf7f7f0c40142399083c32"},{url:"assets/icons/Square44x44Logo.targetsize-16.png",revision:"77d9d8e71b93a9afb1d60278c26b53b4"},{url:"assets/icons/Square44x44Logo.targetsize-20.png",revision:"5fdf8a82e80d3d80535e754ca5d506bb"},{url:"assets/icons/Square44x44Logo.targetsize-24.png",revision:"feca8addce15b296ac9735f17bed5577"},{url:"assets/icons/Square44x44Logo.targetsize-256.png",revision:"ce21c5910627183dfe63dd5c6a4638cf"},{url:"assets/icons/Square44x44Logo.targetsize-30.png",revision:"7264937c57ffdc7977874dfa3f273003"},{url:"assets/icons/Square44x44Logo.targetsize-32.png",revision:"6064c120006584c7f863281acf70216b"},{url:"assets/icons/Square44x44Logo.targetsize-36.png",revision:"2aa564d244289d7abc7ee26de84bb8be"},{url:"assets/icons/Square44x44Logo.targetsize-40.png",revision:"5540ac9e92966ade482f6c5b7853c596"},{url:"assets/icons/Square44x44Logo.targetsize-44.png",revision:"4395bf0336d632c94db6ac0f7dffce06"},{url:"assets/icons/Square44x44Logo.targetsize-48.png",revision:"6e2d832bc373b82420c0426751ab5611"},{url:"assets/icons/Square44x44Logo.targetsize-60.png",revision:"80bfb8153cf3f24f06a13e57b0d11ba5"},{url:"assets/icons/Square44x44Logo.targetsize-64.png",revision:"d3633577d16a4211f463dc246dfbaa66"},{url:"assets/icons/Square44x44Logo.targetsize-72.png",revision:"14c10181fcadbdf3c65d85906212c85b"},{url:"assets/icons/Square44x44Logo.targetsize-80.png",revision:"16deb0828b4dfb2aecf09e08db6a5c56"},{url:"assets/icons/Square44x44Logo.targetsize-96.png",revision:"e36fad74e337fed76bb205f3a63925b4"},{url:"assets/icons/StoreLogo.scale-100.png",revision:"ecfe301fe57d79b6c4e8e9324afff794"},{url:"assets/icons/StoreLogo.scale-125.png",revision:"747824c7bbece57bc87b9807a67316a8"},{url:"assets/icons/StoreLogo.scale-150.png",revision:"36fd29108629b2d295cfc5b00a0bb440"},{url:"assets/icons/StoreLogo.scale-200.png",revision:"33c823e844a3119187054d89bf758edd"},{url:"assets/icons/StoreLogo.scale-400.png",revision:"5e53188737ca94ba1f34efae38656b73"},{url:"assets/icons/Wide310x150Logo.scale-100.png",revision:"f3079421bd42be2f8f6a24af91256453"},{url:"assets/icons/Wide310x150Logo.scale-125.png",revision:"349c7b32793f917aacf063caa887440e"},{url:"assets/icons/Wide310x150Logo.scale-150.png",revision:"b81f25ab9b0d7b15ded1d300a7ab7679"},{url:"assets/icons/Wide310x150Logo.scale-200.png",revision:"05f4a94aae9c662daf364271633904d2"},{url:"assets/icons/Wide310x150Logo.scale-400.png",revision:"02c046b74cfa41a973c49a8e7e959032"},{url:"assets/readme/build-output.png",revision:"ee332fabed8b56f4aae86902c18146a2"},{url:"assets/readme/codespace-button.png",revision:"be7f5a61d03a119f2e297d15df7dfab2"},{url:"assets/readme/copy-starter.png",revision:"969196419238157c3d673545c2daed32"},{url:"assets/readme/git-clone.png",revision:"65897273261e49c6c9148df875e13e4d"},{url:"assets/readme/intro.png",revision:"cd10ec0be4be4b10195986d075904542"},{url:"assets/readme/local-button.png",revision:"1b40f28a11a334cc90e6802070b9eae1"},{url:"assets/readme/new-repo-from-starter.png",revision:"184b8b88c43aa759948968f69251200e"},{url:"assets/readme/pwa-running.png",revision:"a5a5ef96823c312160626df383d0925d"},{url:"assets/readme/pwa-starter-overview.png",revision:"480b506d1a2a832131525fd4d0fd7478"},{url:"assets/readme/static-web-app-slash.png",revision:"865934771530a3b8f9e10aae8d0423d9"},{url:"assets/readme/use-this-template.png",revision:"2d67dfcbdc3c8c6f8b5fefcd0016021f"},{url:"assets/readme/vscode-in-browser.png",revision:"fc3d41a79144a5bb00a423b78ec73c1f"},{url:"assets/screenshots/screen.png",revision:"808ac8889e4c17f3f83fd9235f1aa28d"},{url:"code/app-about.8fc789bc.js",revision:null},{url:"code/index.5e73f5ec.js",revision:null},{url:"code/index.c492f108.css",revision:null},{url:"index.html",revision:"d6114e5f3a9461c78f4d379b6bab725a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/unpkg\.com\/.*/i,new e.CacheFirst({cacheName:"unpkg-libs-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=sw.js.map
