if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,i,r)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(i.map(s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}})).then(e=>{const s=r(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-f8d4e228"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.b691ec8b.css",revision:"fdc93e96ee6d85ae31943caf06244cf9"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/23.cfea3e4c.js",revision:"88e7047b9de8788933db02f99d796ede"},{url:"assets/js/24.28ba7a21.js",revision:"5e2a178d2bff5eb8af817308e681bd50"},{url:"assets/js/app.0bee387a.js",revision:"df49bfac4dd05b82340537cf96158162"},{url:"assets/js/layout-Blog.d9ac5648.js",revision:"e4620acd2390549644007724ebeeadf3"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.ce89727d.js",revision:"407c769962d7c3bd7a2d1dca44541079"},{url:"assets/js/layout-Layout.2fa04eeb.js",revision:"44b669bc22cc00b1afca69e414c688ff"},{url:"assets/js/layout-NotFound.ee15398d.js",revision:"d95f27ac0c5fce333a8d962dea9a2810"},{url:"assets/js/page--1b684565.0bcadb28.js",revision:"db16f2d1175f0d4d60e664c53e440767"},{url:"assets/js/page--1bb59a95.4a7ff5c5.js",revision:"075c1b028b5945ca0d2d954028151790"},{url:"assets/js/page--299bf1d6.3600cad4.js",revision:"75a25f66fbcb20a613b93b902512d9a8"},{url:"assets/js/page--2b395795.85bbb86e.js",revision:"a3012b75bf43865d411911ce4067c9ac"},{url:"assets/js/page--47f3cd45.98644e1c.js",revision:"072d9d7e75642bc05f6557a0385f2065"},{url:"assets/js/page--643aca55.52b8c9d0.js",revision:"cd18101678cada75f37778bbd3ccff3d"},{url:"assets/js/page--88e4c9d6.558781f1.js",revision:"95379a14e7c5995de2852c135b2d3677"},{url:"assets/js/page--92b0901a.2c7c6d05.js",revision:"dde3d5bd6a9ac7badd8f05f16fb1098e"},{url:"assets/js/page--acb6e866.9e555955.js",revision:"a64953f8e1716a6140866cf18ca4fba7"},{url:"assets/js/page--e6087d4a.d21c7cb2.js",revision:"28902695a7994efb36d4d481cbf4a493"},{url:"assets/js/page-CommandLine--7e486d04.4f799411.js",revision:"a029305234b607a42bbb6ca192964f5d"},{url:"assets/js/page-Configuration--0d2ffd18.2fa0baa1.js",revision:"50536ac741d7d513b30d33dd0f5ddb31"},{url:"assets/js/page-Home--99ebf2a4.f1f9e5ab.js",revision:"4b9c257517b2f73aa47be2c59a7e589d"},{url:"assets/js/page-Library--4a72c03a.a4a3461c.js",revision:"02823dbe0690c6eb6b9b677537466646"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.8435b144.js",revision:"3128acf7d09f9e7763626982b4e2f9f3"},{url:"assets/js/vendors~photo-swipe.968f7795.js",revision:"cb7f6d3f75f0b2667f26571f6b338377"},{url:"safari-pinned-tab.svg",revision:"01f01e8b72515de9c375f6101d3c0428"},{url:"taplo-icon.svg",revision:"e51572177da96056e8ce111602642097"},{url:"assets/fonts/materialdesignicons-webfont.3d1f8fa2.eot",revision:"3d1f8fa2f06249540889a7bbe69cf5bb"},{url:"assets/fonts/materialdesignicons-webfont.3e722fd5.ttf",revision:"3e722fd57a6db80ee119f0e2c230ccff"},{url:"assets/fonts/materialdesignicons-webfont.4187121a.woff2",revision:"4187121a4353440c2a865dbf1bc1901b"},{url:"assets/fonts/materialdesignicons-webfont.fec1b66a.woff",revision:"fec1b66adcf131415a2511bd77e747cc"},{url:"404.html",revision:"d11606fce3c8f0c9f73e7997e2a45019"},{url:"api/javaScript/classes/_index_.taplo/index.html",revision:"fce9f0e6aa89bd19e819dc65305de90d"},{url:"api/javaScript/globals/index.html",revision:"0e513592115268cfa59974c53ffe929d"},{url:"api/javaScript/index.html",revision:"c9724aa6783f4ff7d74dbea7a1103798"},{url:"api/javaScript/interfaces/_index_.formatoptions/index.html",revision:"ada3191c1122b5f09624f2254aa911fc"},{url:"api/javaScript/interfaces/_index_.formatteroptions/index.html",revision:"7a93a0b19315c637cf9d62f0dade8304"},{url:"api/javaScript/interfaces/_index_.linterror/index.html",revision:"7b5a7d18dcf89f0a0b2338b44241ff2b"},{url:"api/javaScript/interfaces/_index_.lintoptions/index.html",revision:"5667f5c3dd458fe6aea966af3c2aaaea"},{url:"api/javaScript/interfaces/_index_.lintresult/index.html",revision:"dd00c2a48c70b24771313b1331c699ba"},{url:"api/javaScript/interfaces/_index_.range/index.html",revision:"071db9a1fe4c967e42892883d2254966"},{url:"api/javaScript/modules/_index_/index.html",revision:"be45652c042e4c267a2ce5187d625e29"},{url:"cli/index.html",revision:"964332fda2e66ca887e28c4aff183fc8"},{url:"configuration/index.html",revision:"78a838279beceb622f716e5168c2b9d0"},{url:"index.html",revision:"9d75f5217e52d546c619531b9ced1f66"},{url:"lib/index.html",revision:"b34180c1b5a50dd8fe3f053b0f610100"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});