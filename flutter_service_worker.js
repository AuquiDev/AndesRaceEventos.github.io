'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "dd635c95376d5aa4f16022b99764ce16",
"version.json": "875549e4a6b73a99b4bb5295f68245c1",
"index.html": "ad15e1050ea6fe44a54631932132b516",
"/": "ad15e1050ea6fe44a54631932132b516",
"main.dart.js": "94fc317aa82767d33bad862acd7b33d5",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "a6bdc1e0e7a323a7172013e9deb6b50f",
"icons/Icon-192.png": "15b70fcd2b1dc6ddb42e069d07dec3f3",
"icons/Icon-maskable-192.png": "15b70fcd2b1dc6ddb42e069d07dec3f3",
"icons/Icon-maskable-512.png": "8b4f3ea79f2a02865a0c1ff4ee969816",
"icons/Icon-512.png": "8b4f3ea79f2a02865a0c1ff4ee969816",
"manifest.json": "93b3221d2d826daa4c43f72bc5918a03",
"assets/AssetManifest.json": "76295ceae057ddf57aa7639d4808f3c8",
"assets/NOTICES": "4c63cd01a47c2f31c896278467859681",
"assets/FontManifest.json": "f1fb175f1c99b11c0bc9dd3d01b09657",
"assets/AssetManifest.bin.json": "94d20cc54a1ca07df58b4cc6686fe0a8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "27da39372f1c3bf45af8a71ce656876c",
"assets/fonts/MaterialIcons-Regular.otf": "cdd4607f42093f2d53747a4d9de43ee5",
"assets/assets/svg/like.svg": "9c2eebfa1cd4caf7297b062cec99fbf0",
"assets/assets/svg/databaseBlue.svg": "7b192ce0934d7f045494e61b284976bc",
"assets/assets/svg/monitorBlue.svg": "717d0febd8a58eb7dbe8265e8e0020ff",
"assets/assets/svg/equipaje.svg": "ff64977a38335d3e789c3f238a6b5757",
"assets/assets/svg/local_info.svg": "234eaef09e97ff0ea8232ee87406fc6b",
"assets/assets/svg/person.svg": "e08ee3f886140c0c62c3e96ecf96f46c",
"assets/assets/svg/pasaporte.svg": "c13bcd8faa95e17c5fa0ef071a0b29e2",
"assets/assets/svg/config1.svg": "d404a78d53f615ad89025c8b8f05edcb",
"assets/assets/svg/file.svg": "e6111d36903f5a054985ca9898f00a5d",
"assets/assets/svg/certificado.svg": "406cd8152999f52ecd17ab466c97892f",
"assets/assets/svg/off.svg": "9656f67e8cfba2e68697384b6bcde896",
"assets/assets/svg/qrcode.svg": "c20550f1731f30e0cf775b5e7c27bcaa",
"assets/assets/svg/configBlue.svg": "3de09d0d36dd09e1e8e0b939e5da9e07",
"assets/assets/svg/time.svg": "260e569502b9013355239e24fff297cf",
"assets/assets/svg/progress.svg": "83101a592335d6ed393c053513c7cd1f",
"assets/assets/svg/check_point.svg": "13ad24b7a0cf78f1b508c0a7c1272699",
"assets/assets/svg/serverBlue.svg": "881532b77f70abfacf53a28e5d0f67ee",
"assets/assets/svg/check.svg": "593efbc2d48611a0c3eecb628975ce50",
"assets/assets/svg/marker.svg": "d6323821174a75da58eb2773982fc667",
"assets/assets/svg/notification.svg": "d2290a831a02939e2e86bd84f2568194",
"assets/assets/svg/whatsapp.svg": "9b1db846caeb85b156b70b3373fe4ac2",
"assets/assets/svg/sheety.svg": "e2a9c299a3f2591d472239b5de2c7743",
"assets/assets/svg/checkList.svg": "ca30fc6adcc31d45cd108f32bdf15608",
"assets/assets/svg/edit.svg": "1f97c9d4ea6f2b176ae32ce2716293ae",
"assets/assets/svg/homes.svg": "135f815268beae20a5483fce1f2df28c",
"assets/assets/svg/pdf.svg": "22b9e24f3003d5c3232e6a498db074e2",
"assets/assets/svg/genero.svg": "72477c6405ea565e99b01dd60e8ec930",
"assets/assets/svg/printerBlue.svg": "3c295765b33862c27aa36e597d5c0b4a",
"assets/assets/svg/menu.svg": "4ac148ef1b44195a0dbf914b7fd68ac7",
"assets/assets/svg/run.svg": "816170156f54226e79726dbd34db187b",
"assets/assets/svg/checkp.svg": "ae69e401bfcbc51cc067a5a4b8554e61",
"assets/assets/svg/polo.svg": "948df5a2ff4c13fd26411c0deff0658f",
"assets/assets/loties/save.json": "9f8d048b535f032d09566d99de841a6c",
"assets/assets/loties/runner_qrs.json": "a76002a1200fce6bc8ff294fd71eaeb1",
"assets/assets/loties/runner.json": "5eef371e42c4e80c8ff8913e7f1e2b2d",
"assets/assets/loties/saveloties.json": "92bebe98c6ac216e3353ed249a81593c",
"assets/assets/loties/runner_qr.json": "601010393f6d1ffde9c1857a818b656d",
"assets/assets/song/gota.mp3": "adac5bb399daea8a00ce231495a118f4",
"assets/assets/song/tono.mp3": "a9a6c76e37339acdfec582eb8ef38ca9",
"assets/assets/img/logo_ar_red.png": "33b5ca3d39e0b1175846b72687161b41",
"assets/assets/img/300.png": "dac2d2b98916fca030ef945d74d006df",
"assets/assets/img/logo_smallar.png": "14d097f196305bf9c69a25c177f201fd",
"assets/assets/img/terrex.png": "540f47d7bc2a1b51b212e64b62a813b7",
"assets/assets/img/logo_small.png": "3d5a5608ce0674014cda6c0fe5761ec5",
"assets/assets/img/fondo1.jpg": "77e66146e82a97535a7c9e6c5e4252fe",
"assets/assets/img/logo_lachay.png": "e4269d20111ed418ee3d2e8a0e24d423",
"assets/assets/img/logo_pdf.png": "181d3221a3c42d3c3a285e2544f7187f",
"assets/assets/img/adidas.png": "449526c6df00648d874759fe924f8976",
"assets/assets/icon/appstore.png": "ac58bf1226bdb126d65250f46b5be556",
"assets/assets/icon/playstore.png": "eb4f59b9df9f628d17dc5b241aae8737",
"assets/assets/icon/icon_app.png": "eb4f59b9df9f628d17dc5b241aae8737",
"assets/assets/fonts/Quicksand-Bold.ttf": "e8dcee4bbf2288a2d264c76fa547f37a",
"assets/assets/fonts/Quicksand-Medium.ttf": "fd7f304a26dd790aef9f1ae84403eab3",
"assets/assets/fonts/Quicksand-Regular.ttf": "7194c41ffab51721bd84ca104553c4e1",
"assets/assets/fonts/Quicksand-SemiBold.ttf": "025d26a905aa7e016827cdc2b429552f",
"assets/assets/fonts/Quicksand-Light.ttf": "e60d43df6abf50de0980883f4596e268",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
