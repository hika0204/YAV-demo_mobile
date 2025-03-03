self.addEventListener("install", (event) => {
  console.log("Service Worker installing...");
  event.waitUntil(
    caches.open("pwa-test-cache").then((cache) => {
      return cache.addAll([
        "/YAV-demo_mobile/index.html",
        "/YAV-demo_mobile/manifest.json",
        "/YAV-demo_mobile/service-worker.js",
        "/YAV-demo_mobile/icons/icon-192x192.png",
        "/YAV-demo_mobile/icons/icon-512x512.png"
      ]);
    })
  );
});
