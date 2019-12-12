// constants
// const CACHE_NAME = 'sb-cache-v1.4'

// const FILES_TO_CACHE = [
// ]

// load workbox
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js')

// output successful message
if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`)
} else {
  console.log(`Boo! Workbox didn't load 😬`)
}

workbox.precaching.precacheAndRoute([
  {
    url: '/404.html',
    revision: '7c7a26ae7037875f173a640bb25987d0'
  },
  {
    url: '/about.html',
    revision: 'fbbae2f0863e5cf12139e38c6d5aa67b'
  },
  {
    url: '/archive.html',
    revision: '851c5617aa64788aa687a67f3f51362e'
  },
  {
    url: '/author/ethan-chin.html',
    revision: '9068bd24d1a3830c2da9420cc0199481'
  },
  {
    url: '/author/silvestar.html',
    revision: 'e86a4645f25d9ac9bab2965d184dc52d'
  },
  {
    url: '/cms/config.yml',
    revision: 'eb3c509ccd62ec5c2cf7d3c8803b6318'
  },
  {
    url: '/cms/index.html',
    revision: 'fdaef0d5ed91af9718aa0f4f88d283a8'
  },
  {
    url: '/commit/config.yml',
    revision: '9cdcb334c4a25d80de91e22d96c44e5d'
  },
  {
    url: '/commit/index.html',
    revision: '15b5a69ee2e8994b28bf3dace694b488'
  },
  {
    url: '/covers.html',
    revision: '0cba2f57137bd0333cde54ea5796b83b'
  },
  {
    url: '/css/foft.css',
    revision: '9b9171167094b6c6d1e01a028b331943'
  },
  {
    url: '/css/foft.min.css',
    revision: 'bb6949eafd2ebb9c1f1b4d83b7bf980a'
  },
  {
    url: '/css/kss.css',
    revision: '6e04585970e6eb652156732ffd240a94'
  },
  {
    url: '/css/kss.min.css',
    revision: '165efced364b69638e61ff149784b4ad'
  },
  {
    url: '/css/style.critical.css',
    revision: '4bab8a60a29ba7041e33db4cb33259e2'
  },
  {
    url: '/css/style.critical.min.css',
    revision: '58b839e03fe4f44c79135e7bd02f1fb4'
  },
  {
    url: '/css/style.css',
    revision: 'df165ca508844ba7e10bd52bf34fbc85'
  },
  {
    url: '/css/style.min.css',
    revision: '6ab75b5832261cc0d1a5747c92ec2337'
  },
  {
    url: '/evergreen.html',
    revision: '61162d110d59dbd6da67bf691b93452d'
  },
  {
    url: '/favicons/android-chrome-192x192.png',
    revision: '455839645ecf1c48af5966bc778c7608'
  },
  {
    url: '/favicons/android-chrome-512x512.png',
    revision: '076fd4d637f582ba4b968d54aff0ddd3'
  },
  {
    url: '/favicons/apple-touch-icon.png',
    revision: 'fe0547bfdd35ab88d7aeb6dbd44a7eaf'
  },
  {
    url: '/favicons/browserconfig.xml',
    revision: 'fa2b295222f96ec4ab21c25113d97a7b'
  },
  {
    url: '/favicons/favicon-16x16.png',
    revision: 'fa0289424a9b06a40f69fe87825f0545'
  },
  {
    url: '/favicons/favicon-32x32.png',
    revision: '0a04363e23d200546c6e29ab3cb4ec2a'
  },
  {
    url: '/favicons/favicon.ico',
    revision: '6db32d7e14151c7288deee14f688fc9b'
  },
  {
    url: '/favicons/html_code.html',
    revision: 'abf03ab4aa6e06bb704087d66b3ce14d'
  },
  {
    url: '/favicons/mstile-144x144.png',
    revision: '751fc0d9e28499edd3cf22096d05e1b5'
  },
  {
    url: '/favicons/mstile-150x150.png',
    revision: 'fcac43f469e9802d87542cb9b679f9bb'
  },
  {
    url: '/favicons/mstile-310x150.png',
    revision: '408f088ded248d963a6aa5baf958c73e'
  },
  {
    url: '/favicons/mstile-310x310.png',
    revision: '973c7d3de8df4386b4122c89db51c0a1'
  },
  {
    url: '/favicons/mstile-70x70.png',
    revision: 'b3c7d0e66bb15c1c9d117a8080115d2b'
  },
  {
    url: '/favicons/README.md',
    revision: '633b265b8866fa95dedc780bfb781ed6'
  },
  {
    url: '/favicons/safari-pinned-tab.svg',
    revision: '3383ff069f49354fd0a81615f867a6fb'
  },
  {
    url: '/favicons/site.webmanifest',
    revision: 'c2181b9c34059112f1ce62eff8e80773'
  },
  {
    url: '/fonts/ptmono/ptmono-regular.woff',
    revision: '238aa98b54b90f8992244da416d85960'
  },
  {
    url: '/fonts/ptmono/ptmono-regular.woff2',
    revision: '0ef08654dc58dc6ad80c5896d30216d9'
  },
  {
    url: '/gfx/jpg/cld-2x.jpg',
    revision: '1a0f01566bc75ef10c380600bab6ae9b'
  },
  {
    url: '/gfx/jpg/cld.jpg',
    revision: 'a8399943932c62b8a2b434912d983cb8'
  },
  {
    url: '/gfx/jpg/cover-2x.jpg',
    revision: 'ccb302ed2b1fdd29e8bbede3eef3873c'
  },
  {
    url: '/gfx/jpg/cover-dark-2x.jpg',
    revision: '01d955ee79c76d95f611b8a175f0b7cb'
  },
  {
    url: '/gfx/jpg/cover-dark.jpg',
    revision: '45b30c3a587d0b2df3388dde1e945b11'
  },
  {
    url: '/gfx/jpg/cover.jpg',
    revision: '380ca97eb538280279b89312eb67e4a1'
  },
  {
    url: '/gfx/png/cld-2x.png',
    revision: '846d1257b43ee02aa62ea760ffbb7e85'
  },
  {
    url: '/gfx/png/cld.png',
    revision: '3d92dac8e9d5653d80b46ed2f2bd78b7'
  },
  {
    url: '/gfx/png/cover-2x.png',
    revision: 'e6568e6ca5c0ece2857711ed8a1455cf'
  },
  {
    url: '/gfx/png/cover-dark-2x.png',
    revision: '73a5949cc3caef3ba6549cb9164818cd'
  },
  {
    url: '/gfx/png/cover-dark.png',
    revision: '2342adf96cde7cb1c6a69c12f6f8a0f9'
  },
  {
    url: '/gfx/png/cover.png',
    revision: '8657201179bdcd215a8bf27af551c280'
  },
  {
    url: '/gfx/svg/cld-dark.svg',
    revision: '5d50949ae0a861237a77c27619822099'
  },
  {
    url: '/gfx/svg/cld-logo-dark.svg',
    revision: '0abf4d69bd5f1ccef6926ba3403cd98f'
  },
  {
    url: '/gfx/svg/cld-logo.svg',
    revision: 'b777815599762bf5336ffe80fb3f3803'
  },
  {
    url: '/gfx/svg/cld.svg',
    revision: '7f53da8b80251e3cf03891868b95a084'
  },
  {
    url: '/gfx/svg/cover.svg',
    revision: '77fd0cad911f21f42cf0b3f5f12839f5'
  },
  {
    url: '/gfx/svg/placeholder.svg',
    revision: '1eda0c585cda4c48690e9dd91d92c43a'
  },
  {
    url: '/gfx/svg/starter-project.svg',
    revision: '618f9b8fcdf52a8a81fb96233554460e'
  },
  {
    url: '/index.html',
    revision: '7f1132a5d70e2ee56aa6474aa95db9f8'
  },
  {
    url: '/js/foftFontLoading.js',
    revision: 'dc7505a9c5876db095687e935ead86f6'
  },
  {
    url: '/js/foftFontLoading.min.js',
    revision: 'dc7505a9c5876db095687e935ead86f6'
  },
  {
    url: '/js/index.js',
    revision: 'af0864145f792abbb23ff16cb2e7fb93'
  },
  {
    url: '/js/index.min.js',
    revision: 'af0864145f792abbb23ff16cb2e7fb93'
  },
  {
    url: '/js/sw.min.js',
    revision: '3c9f6fc3e9fc3761f4806934feb70dd6'
  },
  {
    url: '/mixins/cld.html',
    revision: 'd41d8cd98f00b204e9800998ecf8427e'
  },
  {
    url: '/mixins/variables.html',
    revision: 'd41d8cd98f00b204e9800998ecf8427e'
  },
  {
    url: '/mixins/variables.xml',
    revision: 'd41d8cd98f00b204e9800998ecf8427e'
  },
  {
    url: '/rss.xml',
    revision: '05970ecae6ca0caa2098933a294a0388'
  }
])

// serve all js files with NetworkFirst strategy
workbox.routing.registerRoute(
  /\.js$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'js-cache'
  })
)

// serve all css files with StaleWhileRevalidate strategy
workbox.routing.registerRoute(
  /\.css$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'css-cache'
  })
)

// serve all image files with CacheFirst strategy
workbox.routing.registerRoute(
  /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'image-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 20,
        maxAgeSeconds: 7 * 24 * 60 * 60
      })
    ]
  })
)
