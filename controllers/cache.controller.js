waiter.controller('cache', function($scope,storage){
	
	$scope.sessionObj = storage.sessionBucket.getItem('location');
	
	$scope.cacheData = angular.fromJson(atob($scope.sessionObj));
	console.log($scope.cacheData);

	storage.sessionBucket.clear();
})