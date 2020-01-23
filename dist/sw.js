// load workbox
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js')

// output successful message
if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`)
} else {
  console.log(`Boo! Workbox didn't load 😬`)
}

workbox.setConfig({ debug: true })

workbox.core.setCacheNameDetails({
  prefix: 'cld',
  suffix: 'v1.7',
  precache: 'precache',
  runtime: 'runtime'
})

workbox.core.skipWaiting()

workbox.core.clientsClaim()

workbox.precaching.cleanupOutdatedCaches()

workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "78e9c24b502afde43661ceed9826beed"
  },
  {
    "url": "about.html",
    "revision": "b585635c2730d6decef6927cc7890eb5"
  },
  {
    "url": "archive.html",
    "revision": "40d7fe11287b2d80949df272b1300d04"
  },
  {
    "url": "author/ethan-chin.html",
    "revision": "c8b513a35e0c0c0a69b81817ecd8db7a"
  },
  {
    "url": "author/heithem-moumni.html",
    "revision": "98e447ee81de9a6cb277eabad4053e54"
  },
  {
    "url": "author/silvestar.html",
    "revision": "eef8f60911ad5b37a42e4dc130bc4d74"
  },
  {
    "url": "commit/index.html",
    "revision": "15b5a69ee2e8994b28bf3dace694b488"
  },
  {
    "url": "covers.html",
    "revision": "14eb84ae4b16476f8183643d9bd10b41"
  },
  {
    "url": "css/foft.css",
    "revision": "d0db9a35d504736371b30962b204db4b"
  },
  {
    "url": "css/foft.min.css",
    "revision": "2c3b25cea60fac701d48ec7ac85efde5"
  },
  {
    "url": "css/style.critical.css",
    "revision": "315a51c870485e1b3d2e1d5cb83e7770"
  },
  {
    "url": "css/style.critical.min.css",
    "revision": "2c62b2fcf36e35d911f72cd55377089b"
  },
  {
    "url": "css/style.css",
    "revision": "f43d5d73737bacdaf3415f4b1bec37b5"
  },
  {
    "url": "css/style.min.css",
    "revision": "80cb7117bd83640405de3ce9c69cb191"
  },
  {
    "url": "evergreen.html",
    "revision": "d581745c9ff6decc1db68c2951535603"
  },
  {
    "url": "favicons/favicon.ico",
    "revision": "6db32d7e14151c7288deee14f688fc9b"
  },
  {
    "url": "favicons/html_code.html",
    "revision": "abf03ab4aa6e06bb704087d66b3ce14d"
  },
  {
    "url": "favicons/site.webmanifest",
    "revision": "274e27a8869592d66b12e0f02ea5a1d4"
  },
  {
    "url": "fonts/ptmono/ptmono-regular.woff",
    "revision": "238aa98b54b90f8992244da416d85960"
  },
  {
    "url": "fonts/ptmono/ptmono-regular.woff2",
    "revision": "0ef08654dc58dc6ad80c5896d30216d9"
  },
  {
    "url": "gfx/jpg/cld-2x.jpg",
    "revision": "1a0f01566bc75ef10c380600bab6ae9b"
  },
  {
    "url": "gfx/jpg/cld.jpg",
    "revision": "a8399943932c62b8a2b434912d983cb8"
  },
  {
    "url": "gfx/jpg/cover-2x.jpg",
    "revision": "ccb302ed2b1fdd29e8bbede3eef3873c"
  },
  {
    "url": "gfx/jpg/cover-dark-2x.jpg",
    "revision": "01d955ee79c76d95f611b8a175f0b7cb"
  },
  {
    "url": "gfx/jpg/cover-dark.jpg",
    "revision": "45b30c3a587d0b2df3388dde1e945b11"
  },
  {
    "url": "gfx/jpg/cover.jpg",
    "revision": "380ca97eb538280279b89312eb67e4a1"
  },
  {
    "url": "gfx/png/cld-2x.png",
    "revision": "846d1257b43ee02aa62ea760ffbb7e85"
  },
  {
    "url": "gfx/png/cld.png",
    "revision": "3d92dac8e9d5653d80b46ed2f2bd78b7"
  },
  {
    "url": "gfx/png/cover-2x.png",
    "revision": "e6568e6ca5c0ece2857711ed8a1455cf"
  },
  {
    "url": "gfx/png/cover-dark-2x.png",
    "revision": "73a5949cc3caef3ba6549cb9164818cd"
  },
  {
    "url": "gfx/png/cover-dark.png",
    "revision": "2342adf96cde7cb1c6a69c12f6f8a0f9"
  },
  {
    "url": "gfx/png/cover.png",
    "revision": "8657201179bdcd215a8bf27af551c280"
  },
  {
    "url": "gfx/svg/cld-dark.svg",
    "revision": "5d50949ae0a861237a77c27619822099"
  },
  {
    "url": "gfx/svg/cld-logo-dark.svg",
    "revision": "0abf4d69bd5f1ccef6926ba3403cd98f"
  },
  {
    "url": "gfx/svg/cld-logo.svg",
    "revision": "b777815599762bf5336ffe80fb3f3803"
  },
  {
    "url": "gfx/svg/cld.svg",
    "revision": "7f53da8b80251e3cf03891868b95a084"
  },
  {
    "url": "gfx/svg/cover.svg",
    "revision": "77fd0cad911f21f42cf0b3f5f12839f5"
  },
  {
    "url": "gfx/svg/placeholder.svg",
    "revision": "1eda0c585cda4c48690e9dd91d92c43a"
  },
  {
    "url": "gfx/svg/starter-project.svg",
    "revision": "618f9b8fcdf52a8a81fb96233554460e"
  },
  {
    "url": "index.html",
    "revision": "f2f551b1e8d416913ef3b1a5a4e7c4b2"
  },
  {
    "url": "js/foftFontLoading.js",
    "revision": "dc7505a9c5876db095687e935ead86f6"
  },
  {
    "url": "js/foftFontLoading.min.js",
    "revision": "dc7505a9c5876db095687e935ead86f6"
  },
  {
    "url": "js/index.js",
    "revision": "af0864145f792abbb23ff16cb2e7fb93"
  },
  {
    "url": "js/index.min.js",
    "revision": "af0864145f792abbb23ff16cb2e7fb93"
  },
  {
    "url": "line/2019-08-01.html",
    "revision": "cac928d1cf2f3a23d1207c413442dc0e"
  },
  {
    "url": "line/2019-08-02.html",
    "revision": "62ed538d46bc8ccc6a91387e1b7c41c7"
  },
  {
    "url": "line/2019-08-03.html",
    "revision": "5c45b50e5f884e537fd6f8fe9891fc93"
  },
  {
    "url": "line/2019-08-04.html",
    "revision": "07de182efb34386b7792cfd13451e9ff"
  },
  {
    "url": "line/2019-08-05.html",
    "revision": "ae5741da3a8004a382dc95123462b8e5"
  },
  {
    "url": "line/2019-08-06.html",
    "revision": "fb0eae438665dffd429d8023de8e2c33"
  },
  {
    "url": "line/2019-08-07.html",
    "revision": "8f903dcaa4730658544f35119b4a5eb8"
  },
  {
    "url": "line/2019-08-08.html",
    "revision": "46db2e7b6d8df4ea727d51a4968297d8"
  },
  {
    "url": "line/2019-08-09.html",
    "revision": "d875de53b56402b45107a9b52605d5ed"
  },
  {
    "url": "line/2019-08-12.html",
    "revision": "47078d8d71c51c4d47cecb222861f693"
  },
  {
    "url": "line/2019-08-13.html",
    "revision": "c3b8a856b6f9bea102a7eb15d71f7c15"
  },
  {
    "url": "line/2019-08-14.html",
    "revision": "f1780bd017fae95514994b0357d893e6"
  },
  {
    "url": "line/2019-08-15.html",
    "revision": "3faff3cff63ccf6621425864e76c7f1a"
  },
  {
    "url": "line/2019-08-16.html",
    "revision": "9e78c6e2c1d8267afb2ba25a840d07cf"
  },
  {
    "url": "line/2019-08-26.html",
    "revision": "8ffc800a96da912f1fd6f8e783e219ad"
  },
  {
    "url": "line/2019-08-27.html",
    "revision": "5ef4942fa1beecdbbd6fd335ac75f5ef"
  },
  {
    "url": "line/2019-08-28.html",
    "revision": "da7ac0dfcdfa7d05ca7dc0ae2251c9f4"
  },
  {
    "url": "line/2019-08-29.html",
    "revision": "57b43c334650fee709ebef7028de7d1b"
  },
  {
    "url": "line/2019-08-30.html",
    "revision": "c16b6d52d35e29c594a8613393e952a6"
  },
  {
    "url": "line/2019-09-02.html",
    "revision": "87193ef805e7e596fd43d875c547833f"
  },
  {
    "url": "line/2019-09-03.html",
    "revision": "12d726971b21c031a117e0615766c904"
  },
  {
    "url": "line/2019-09-04.html",
    "revision": "ffff06e54eb3feb18f01b262e736d343"
  },
  {
    "url": "line/2019-09-05.html",
    "revision": "2949d41baaf6da794162b09b53a99dbe"
  },
  {
    "url": "line/2019-09-06.html",
    "revision": "0e4811043382dbccf66e9c618d018140"
  },
  {
    "url": "line/2019-09-09.html",
    "revision": "4dc9b3d4699d47fc0fa9817f6d169616"
  },
  {
    "url": "line/2019-09-10.html",
    "revision": "01f3a9e0c7b4f57375d49b0f97d2ad68"
  },
  {
    "url": "line/2019-09-11.html",
    "revision": "2174a1c1378a1a4e55d8cdbfc1f7dcff"
  },
  {
    "url": "line/2019-09-12.html",
    "revision": "3d8318125ad47c3f66a89ed851e9f758"
  },
  {
    "url": "line/2019-09-13.html",
    "revision": "10fcb3bb1edbacbf604d344aceeaff4c"
  },
  {
    "url": "line/2019-09-16.html",
    "revision": "72c7a196384b68d1ddf783dc0b82dacc"
  },
  {
    "url": "line/2019-09-17.html",
    "revision": "0de9ebf5e7cd05b0698c766f34fdbf4a"
  },
  {
    "url": "line/2019-09-18.html",
    "revision": "7364682512480857f3b938e2d23f3fd5"
  },
  {
    "url": "line/2019-09-19.html",
    "revision": "ea66d7b4950b5b8893fa2b12a2f423b0"
  },
  {
    "url": "line/2019-09-20.html",
    "revision": "d474888a98ccbd172d1be906e0f18772"
  },
  {
    "url": "line/2019-09-23.html",
    "revision": "f8f6779795a79dbdce559158cdae99af"
  },
  {
    "url": "line/2019-09-24.html",
    "revision": "31be2d429fea6730d70cffa85cb91868"
  },
  {
    "url": "line/2019-09-25.html",
    "revision": "01f55a6417e871788b87fdcfbcc1c7d1"
  },
  {
    "url": "line/2019-09-26.html",
    "revision": "3aec864e6e58ea261dfcec3eb4db184f"
  },
  {
    "url": "line/2019-09-27.html",
    "revision": "3555109d954c860c3abf8b2410237cc8"
  },
  {
    "url": "line/2019-09-30.html",
    "revision": "65ffb04dd626465358e4cbb81cc91cb0"
  },
  {
    "url": "line/2019-10-01.html",
    "revision": "3407fb05c83fa83e5ee4a321d9c28dc2"
  },
  {
    "url": "line/2019-10-02.html",
    "revision": "6fe5ce8c906838ad6002c58a2db6e314"
  },
  {
    "url": "line/2019-10-03.html",
    "revision": "e4c4c8eab8c30a249115f43782454ab8"
  },
  {
    "url": "line/2019-10-04.html",
    "revision": "3a47927f05a755808adf4a7c3fcaa836"
  },
  {
    "url": "line/2019-10-14.html",
    "revision": "a624b8c1d7f0991905ebf6eb3d02ef01"
  },
  {
    "url": "line/2019-10-15.html",
    "revision": "c706e7e8ffc95b840a14e3855cf02a55"
  },
  {
    "url": "line/2019-10-16.html",
    "revision": "8fa779aa5984692beeee802444a8ec42"
  },
  {
    "url": "line/2019-10-17.html",
    "revision": "356352cc0ba6f8c82eb360d2f3c0ac9a"
  },
  {
    "url": "line/2019-10-18.html",
    "revision": "2c88b96381b3bf5366aca9973df2287b"
  },
  {
    "url": "line/2019-10-21.html",
    "revision": "98a545349687548cae02c5a6dccfc80a"
  },
  {
    "url": "line/2019-10-22.html",
    "revision": "46cd1fc485b5623c6f89ee3039a92321"
  },
  {
    "url": "line/2019-10-23.html",
    "revision": "e765b6f57e28b0dd7929cb87188e72b9"
  },
  {
    "url": "line/2019-10-24.html",
    "revision": "5f5015f1b54e664bdd03a8f4247fc30b"
  },
  {
    "url": "line/2019-10-25.html",
    "revision": "df3887f1cb2b3ed56a18c4af326f0721"
  },
  {
    "url": "line/2019-10-28.html",
    "revision": "245e4994aa89989b78da848d1dcdab80"
  },
  {
    "url": "line/2019-10-29.html",
    "revision": "a54b8e8a1af9d6af6710495f1353713c"
  },
  {
    "url": "line/2019-10-30.html",
    "revision": "e320ca3ce286e3ab90353c7640d4b6fb"
  },
  {
    "url": "line/2019-10-31.html",
    "revision": "fca6665eae672cde602ddc5da7ab6b72"
  },
  {
    "url": "line/2019-11-01.html",
    "revision": "1dbfaea7d860634b370bc37d0c25b52c"
  },
  {
    "url": "line/2019-11-04.html",
    "revision": "cb5b6eaa6f84400cbdff135c23a13ad9"
  },
  {
    "url": "line/2019-11-05.html",
    "revision": "e958d48ebf73d55d56e7d5f3e750972a"
  },
  {
    "url": "line/2019-11-06.html",
    "revision": "74b90ef15ea94c53519d95d858dbbe37"
  },
  {
    "url": "line/2019-11-07.html",
    "revision": "48b8e25246e671433cbd102d1f9bc9f9"
  },
  {
    "url": "line/2019-11-08.html",
    "revision": "586650e18831c3064489b0a718125360"
  },
  {
    "url": "line/2019-11-11.html",
    "revision": "2b05b41f1df1a5ce5946bd5531c23d6e"
  },
  {
    "url": "line/2019-11-12.html",
    "revision": "a340d06c9fed6a6e2a676b9c82867b40"
  },
  {
    "url": "line/2019-11-13.html",
    "revision": "aa96cb27d073ca24a5c98ac5402353d5"
  },
  {
    "url": "line/2019-11-14.html",
    "revision": "74df4d3cab0bf229cbe01b99e3eb29dd"
  },
  {
    "url": "line/2019-11-15.html",
    "revision": "7920b570f24267e8ba2c7cdb30a4c277"
  },
  {
    "url": "line/2019-11-18.html",
    "revision": "fc42d7e7d850489955d243e11345f537"
  },
  {
    "url": "line/2019-11-19.html",
    "revision": "8ca6774eead10bd8d611b2f46ae9df7c"
  },
  {
    "url": "line/2019-11-20.html",
    "revision": "b1deb3ae7b2218b6ee662dc42da88835"
  },
  {
    "url": "line/2019-11-21.html",
    "revision": "af21bc847981087f24de9817b05a0b15"
  },
  {
    "url": "line/2019-11-22.html",
    "revision": "6c400ca61d86a1e03efd1f70ad34f341"
  },
  {
    "url": "line/2019-11-25.html",
    "revision": "639010315c7593da12ea4240c26c39e3"
  },
  {
    "url": "line/2019-11-26.html",
    "revision": "2e4c97d99a85e822a39cb44af5eb8d5b"
  },
  {
    "url": "line/2019-11-27.html",
    "revision": "7682222555dda5ce47885c6445710a02"
  },
  {
    "url": "line/2019-11-28.html",
    "revision": "932d6e20f80512a10b8ec77ef1abcd47"
  },
  {
    "url": "line/2019-11-29.html",
    "revision": "4dc20c21e67cdd7e4a66896e4c380c0e"
  },
  {
    "url": "line/2019-12-02.html",
    "revision": "0c30efa2825cba7e7a4d28552db90357"
  },
  {
    "url": "line/2019-12-03.html",
    "revision": "b0580a0567ad2bc1c348a04bcd231699"
  },
  {
    "url": "line/2019-12-04.html",
    "revision": "3c3cf16276371dfee0ede58185281a8b"
  },
  {
    "url": "line/2019-12-05.html",
    "revision": "8408c5ae608b42622786de068a9f3055"
  },
  {
    "url": "line/2019-12-06.html",
    "revision": "ab0fc51998a5f74df913853d86e24219"
  },
  {
    "url": "line/2019-12-09.html",
    "revision": "84890341815dda83186ad4b3c36057ec"
  },
  {
    "url": "line/2019-12-10.html",
    "revision": "ec3e9f44a9069f4e56ea2e825cef4efe"
  },
  {
    "url": "line/2019-12-11.html",
    "revision": "dc7a952f5825591174161bdf52662de4"
  },
  {
    "url": "line/2019-12-12.html",
    "revision": "cae7b90dd6cd90c0fde0f5a9da1c6a7e"
  },
  {
    "url": "line/2019-12-13.html",
    "revision": "96cbe2eddddad91ddc4099b8863a3eed"
  },
  {
    "url": "line/2019-12-16.html",
    "revision": "cf7ee2fb6529d2c5d3a3313946d12088"
  },
  {
    "url": "line/2019-12-17.html",
    "revision": "8c565208dd5683844d51b71386c9e60c"
  },
  {
    "url": "line/2019-12-18.html",
    "revision": "0079d5d7dc0fe71575da97a9294fb350"
  },
  {
    "url": "line/2019-12-19.html",
    "revision": "a9b6c216d4560c1231b9ff4b0c2812d0"
  },
  {
    "url": "line/2019-12-20.html",
    "revision": "563bf3c268b1257ac93834bc9469ddd2"
  },
  {
    "url": "line/2019-12-23.html",
    "revision": "bab9a257cde2b6430ca0110e9b5be9b7"
  },
  {
    "url": "line/2019-12-27.html",
    "revision": "2089d6a2819cba4906c877ba8b8527a9"
  },
  {
    "url": "line/2019-12-30.html",
    "revision": "60ffca25f6097cd55adb28a8b1c603f3"
  },
  {
    "url": "line/2019-12-31.html",
    "revision": "7c6ad03e77217de6eb88e2e5c31e470c"
  },
  {
    "url": "line/2020-01-02.html",
    "revision": "13ace9bd7ac0881f92349a8b0a3017dd"
  },
  {
    "url": "line/2020-01-03.html",
    "revision": "2e66c1eeb6422e37433940fd98bb77fc"
  },
  {
    "url": "line/2020-01-07.html",
    "revision": "b4c671fcdbb33e689bddf52dce6d71e3"
  },
  {
    "url": "line/2020-01-08.html",
    "revision": "e39a2b7da42a531d77c0095ccaaa72a9"
  },
  {
    "url": "line/2020-01-09.html",
    "revision": "26687905c4f2029b2854d087601d5514"
  },
  {
    "url": "line/2020-01-10.html",
    "revision": "7d01f9a069a756d05404fb119791d3c8"
  },
  {
    "url": "line/2020-01-13.html",
    "revision": "5c38e3336f2ec125286aebe0e8016ee2"
  },
  {
    "url": "line/2020-01-14.html",
    "revision": "dbc7241c1204445cbf1f357a2aa63974"
  },
  {
    "url": "line/2020-01-16.html",
    "revision": "50deb9eb38174e601eb567064155836d"
  },
  {
    "url": "line/2020-01-17.html",
    "revision": "d8196d361546d973c9f5cc96512ca8a5"
  },
  {
    "url": "line/2020-01-20.html",
    "revision": "6007b9d04b27c86a00c9e8dbac5c7c83"
  },
  {
    "url": "line/2020-01-23.html",
    "revision": "4b7d0db554e6bf0767431f60bd85081e"
  },
  {
    "url": "line/2020-01-24.html",
    "revision": "bc30dcf5b60ab3cde9f3039367652962"
  }
])

// Serve all html files with StaleWhileRevalidate strategy
workbox.routing.registerRoute(
  /\.html$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'cld-html-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 20,
        maxAgeSeconds: 60 * 60
      }),
      new workbox.broadcastUpdate.Plugin({
        channelName: 'html-updates'
      })
    ]
  })
)

// Serve all css files with StaleWhileRevalidate strategy
workbox.routing.registerRoute(
  /\.js$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'cld-js-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 20,
        maxAgeSeconds: 60 * 60
      }),
      new workbox.broadcastUpdate.Plugin({
        channelName: 'js-updates'
      })
    ]
  })
)

// Serve all css files with StaleWhileRevalidate strategy
workbox.routing.registerRoute(
  /\.css$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'cld-css-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 20,
        maxAgeSeconds: 60 * 60
      }),
      new workbox.broadcastUpdate.Plugin({
        channelName: 'css-updates'
      })
    ]
  })
)

// Serve all other assets with CacheFirst strategy
workbox.routing.registerRoute(
  /\.(?:png|jpg|jpeg|svg|gif|webp|ico|webmanifest|eot,ttf,woff,woff2)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'cld-asset-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30,
        maxAgeSeconds: 30 * 24 * 60 * 60
      })
    ]
  })
)
