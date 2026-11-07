// Service worker tối thiểu để điện thoại cho phép "Cài đặt ứng dụng"
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', () => {});
