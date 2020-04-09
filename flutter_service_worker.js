'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "0e348a474ed066ee1d2cdb95101eb4ea",
"/": "0e348a474ed066ee1d2cdb95101eb4ea",
"main.dart.js": "d1689e9c540087e8ba282817a7ee7d88",
"favicon.png": "3aadec6c5323d3582844f64b2ac31638",
"icons/Icon-192.png": "d6af266214af057cb890cee3e1eb3069",
"icons/Icon-512.png": "e4121057f166140348d1b519dea56912",
"manifest.json": "fd2447ee5b2b1b19003ea940f7af37d3",
"assets/LICENSE": "6676fde7d60329e2a0c1f87ab6a155f0",
"assets/AssetManifest.json": "3d91338c1ee114e3a83b8a7c0413f282",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/images/me.png": "8ccbb76be8a826f72a8246af0ad048a9",
"assets/assets/images/sms.png": "e5729d176390d01fcf30e59c410571c2",
"assets/assets/images/projects.png": "09f0c9f1977c0da31f97ad651d39589d",
"assets/assets/images/in.png": "08fe605e8827fc1a26166fe795e9243f",
"assets/assets/images/user.png": "8ee71f0b575c54feedf27debe01a4d47",
"assets/assets/images/resume.png": "8ee71f0b575c54feedf27debe01a4d47",
"assets/assets/images/contact.png": "cef4da236bff7b8dc94b32051691dd36",
"assets/assets/images/ig.png": "9e488f2cce58deb0481c03e93f4a72bf",
"assets/assets/images/header.png": "04ba47dad4783a4e2f45738a8cc3794f",
"assets/assets/images/portfolio.png": "cb3a9f1b638c57ae32bd5b24f99516af",
"assets/assets/images/twitter.png": "cd41d1500437719998567f9d8b5742a2",
"assets/assets/images/share.png": "bce33ec9bd103060f65a6cba7205d853",
"assets/assets/images/back.png": "0d161ece2dfb65f221915a1b31abcdec",
"assets/assets/images/right.png": "b43f51780571b6f88fea7de1be221ae4",
"assets/assets/images/drib.png": "bfffad10e2c884a67c99ad1f19cc59f4",
"assets/assets/images/bg.png": "4526b71dc0cabae77447045c50b1df2d"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
