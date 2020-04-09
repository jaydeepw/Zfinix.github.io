'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "0e348a474ed066ee1d2cdb95101eb4ea",
"/": "0e348a474ed066ee1d2cdb95101eb4ea",
"CNAME": "4d10936114b615caa396a41e1b8ab508",
"main.dart.js": "b70f1a0f2b9af494127f01d9cc52aa9c",
"favicon.png": "3aadec6c5323d3582844f64b2ac31638",
"icons/Icon-192.png": "d6af266214af057cb890cee3e1eb3069",
"icons/Icon-512.png": "e4121057f166140348d1b519dea56912",
"manifest.json": "fd2447ee5b2b1b19003ea940f7af37d3",
".git/config": "09b64a35c6e561c2822da55b6e65faa5",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/57/1f5dc73c21292b5339d5f586c4a93e76bf367b": "68cd0ef26010c96c436d9c8cff07ac07",
".git/objects/51/a9b43c63b5831a7544a766fb2964ef95f0a11a": "0de711d60ac09ca34658120f7a453f7f",
".git/objects/3d/23c5c667208b8f8a81ac5f42d7df7f5315a7b9": "34796b6ee42c804a71191a31c28af4b1",
".git/objects/0b/10ed20bedae7e12ea1c5ace48d701598a5622d": "209471e8e9d4b81464b15a229fb73bc6",
".git/objects/5a/b70018a5b1c1f5dac43843ae3e106097064325": "08c184e2439209cce165ed0ea765b9db",
".git/objects/5f/037ea52441b8115264c55a100f4e45768e695b": "1bf02f3396239b8e25b7fc60268d78c7",
".git/objects/ac/1ff0edd208cdda46837a2bb35fe3ebfaa5f8fa": "d53474f874152db5d94b8cb0020ea949",
".git/objects/bb/20eb6c9377f4d09dbc71d552575cfdfec2bcb4": "59c5fa603349d426d162d98aaf32d0da",
".git/objects/da/94afc595d2ba4f3bb1c46934198654c1e09b54": "475ccf321197000ab2e3c9adc554fb55",
".git/objects/bc/f235b0229590f49dbf5eb0e0b3d151eb9817d4": "a7901fb5aee8b33e7e3174a724507a04",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/ca/3cb6b530713ed8759c4bdcae1d149747ac0afd": "10d31ae6eca1fbaa079204a00f5a61d8",
".git/objects/18/5e7edb71daddb30222c6225a260c226ea15fe1": "2d671019296b6a14ff76210aee5e392c",
".git/objects/18/93dff729bc63d03b0106cbe2345833284a4677": "b60b7539a32b6f9db864b8d150e4880b",
".git/objects/4b/aeb0f3fecec291128f04a3f727b4f25d936e9c": "a1fcceef6cade04e86cf5b9cb1fea3a3",
".git/objects/7b/b3e7c948444933e329994af0c6d7f805bf8c19": "655e804b66737ddee7422b17abb976a9",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/44/cae7731e6ea297bbfbae4ff3aa83226f736e1c": "692ad120b68756802dffd37bd1a0b4d5",
".git/objects/2f/b8343928bf8e0a1d89d901636806cb49d9116e": "b4fe6abf943b08a713722633d037b5af",
".git/objects/43/36505b9374791ef26e17033f09888876a9e46b": "1d1d4d51498ee1b8802afe0a561d83fb",
".git/objects/9a/fa33c9e1c713a0cc0eebe94b8f7b38e8550d06": "d371d2638db00098fb80feffc1df3e2e",
".git/objects/09/392dc4feec0403d22d94520ec382609abe9758": "11308d171875c0fa5a66bc7ed58a14f3",
".git/objects/96/23aefaf3bb0f672acabb3647694d572f01bd96": "32dadd2cd896f4714322e578ef2319ea",
".git/objects/5e/07c9b035450d59390f97793a69cd07ca0f180e": "16e29549cc3ea31f6d66b11ac29fdc66",
".git/objects/6c/e93605e2b56bc8f6cd19600e35f258e64ee5b7": "2c8b9fdf7f48826479b815f2edb71b4a",
".git/objects/39/6059fe7581da4f51940d4ed987650fc97c03c0": "60e69cd53e1c6922f0b1c3a2e04fbad5",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0a/119c52b12061eacb5aff722b9dc2b27045aac0": "3761062239933c1faf6161d73e41de2d",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/af/899cbc8b9cc34a943cc585f120ec22d016b196": "e76b4661bf8f694e6375755b8115ef03",
".git/objects/a6/f1bdc03efb27bb42a71e85166fde3baf93d9f9": "935903437a83dfacec4fc649e9a3e3a1",
".git/objects/f0/daa748baab383e2f598a3f6a5d599b8eb83698": "6d4034acb812a75eeccea9106d252e6c",
".git/objects/ff/fe384c75cfb9c082d793067d20105df3383cda": "d740b7d16add3ce3e409de7ec3c9ddc3",
".git/objects/ff/d8169fe9b86d47eff5fdb1f226e58374754730": "1b259870f91d257cac0790183c7a4e67",
".git/objects/79/f86052abb96d58efb28366dabafe43c4987af5": "b66cebbe2e4e3873a05395809cf4eb71",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/76/73ee87ba8a410433e43ed99fe56342b1fab78e": "0bd5299333d5abac7d68fb05292b7f83",
".git/objects/2e/332409b27466c8d12ae1c32fda50bdd951a95e": "9c76525212bb7ee517f1818405d61e21",
".git/objects/8b/8e0690d0162ed7cfd32f06aad09b22233a5b88": "08ef163b0af22bf57748c8cbfa08a022",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "6bb8e3e3d18a00fb4dd0e90b5725a16e",
".git/logs/refs/heads/master": "6bb8e3e3d18a00fb4dd0e90b5725a16e",
".git/logs/refs/remotes/origin/master": "358cb2940827bc2af1cd956957916d25",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "e7ba324596027e273b381c34913f6eaa",
".git/refs/remotes/origin/master": "e7ba324596027e273b381c34913f6eaa",
".git/index": "5154051bcf0f004d72ef06a9e25813b4",
".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
"assets/LICENSE": "6676fde7d60329e2a0c1f87ab6a155f0",
"assets/AssetManifest.json": "06df23761b196dc2193f454ecb732efd",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/images/me.png": "8ccbb76be8a826f72a8246af0ad048a9",
"assets/assets/images/sms.png": "e5729d176390d01fcf30e59c410571c2",
"assets/assets/images/projects.png": "09f0c9f1977c0da31f97ad651d39589d",
"assets/assets/images/in.png": "44d277d5f030f3eb0ca2c38d6afcf20c",
"assets/assets/images/user.png": "8ee71f0b575c54feedf27debe01a4d47",
"assets/assets/images/resume.png": "8ee71f0b575c54feedf27debe01a4d47",
"assets/assets/images/contact.png": "cef4da236bff7b8dc94b32051691dd36",
"assets/assets/images/ig.png": "9e488f2cce58deb0481c03e93f4a72bf",
"assets/assets/images/header.png": "04ba47dad4783a4e2f45738a8cc3794f",
"assets/assets/images/portfolio.png": "cb3a9f1b638c57ae32bd5b24f99516af",
"assets/assets/images/twitter.png": "ad108effd25dbda00ee733c8bca9979a",
"assets/assets/images/share.png": "bce33ec9bd103060f65a6cba7205d853",
"assets/assets/images/back.png": "0d161ece2dfb65f221915a1b31abcdec",
"assets/assets/images/right.png": "b43f51780571b6f88fea7de1be221ae4",
"assets/assets/images/drib.png": "b3d2d4f72fed424c03f415f19ce0d653",
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
