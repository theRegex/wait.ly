waiter.controller('cache', function($scope,storage){
	
	//Get the cached location..
	$scope.sessionObj = storage.sessionBucket.getItem('location');
	
	//Convert cache location into object
	$scope.cacheData = angular.fromJson(atob($scope.sessionObj));
	console.log("Now in CACHE controller: " + $scope.cacheData);

	//clear out storage data trails
	storage.sessionBucket.clear();

	$scope.waitTime = null;


	$scope.getWaitTime = function(){

		//get wait time from services and assign to $scope.waitTime
	}



	//save function for cached location which is handled by storage controller...
	$scope.save = function(){
		storage.saveNewLocation($scope.cacheData);
	}



	
	//Option to submit a wait time which will be handled by services
	$scope.setWaitTime = function(time){
	//push new wait time to services
	}



	






})