waiter.service('storage', function(){
	var storage = this;

	storage.localBucket = localStorage;
	storage.sessionBucket = sessionStorage;
})