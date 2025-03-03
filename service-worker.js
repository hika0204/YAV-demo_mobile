self.addEventListener("install", (event) => {
  console.log("Service Worker installing...");
  event.waitUntil(
    caches.open("pwa-test-cache").then((cache) => {
      return cache.addAll([
        "index.html",
        "manifest.json",
        "service-worker.js",
        "icons/icon-192x192.png",
        "icons/icon-512x512.png"
      ]);
    })
  );
});
