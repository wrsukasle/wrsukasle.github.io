
self.addEventListener('install', function(e) {
	alert('Install Event: ' + e);
});

self.addEventListener('activate', function(e) {
	alert('Activate Event: ' + e);
});