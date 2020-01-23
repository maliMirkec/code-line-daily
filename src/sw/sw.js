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
  suffix: 'v1.6',
  precache: 'precache',
  runtime: 'runtime'
})

workbox.core.skipWaiting()

workbox.core.clientsClaim()

workbox.precaching.cleanupOutdatedCaches()

workbox.precaching.precacheAndRoute([])

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
