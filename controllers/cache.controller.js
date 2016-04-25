waiter.controller('cache', function($scope,storage){
	
	$scope.sessionObj = storage.sessionBucket.getItem('location');
	
	$scope.cacheData = angular.fromJson(atob($scope.sessionObj));
	console.log("Now in CACHE controller: " + $scope.cacheData);

	$scope.save = function(){
		storage.saveNewLocation($scope.cacheData);
	}
	//storage.sessionBucket.clear();




})