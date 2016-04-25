waiter.service('storage', function(){
	var storage = this;

	storage.localBucket = localStorage;
	storage.sessionBucket = sessionStorage;


	storage.saveNewLocation = function(data) {
	    var localLocations = [];

	    if (storage.localBucket.getItem('savedPlaces') == null) {
	        localLocations.push(data);
	        var localString = JSON.stringify(localLocations);
	        storage.localBucket.setItem('savedPlaces', localString);
	        console.log("successfully saved first location");
	    } else {
	        var dataCheck = storage.localBucket.getItem('savedPlaces');

	        console.log("successfully grabbed data..");
	        var tempData = angular.fromJson(dataCheck);

	        for (var i = 0; i < tempData.length; i++) {

	            if (tempData[i].name == data.name && tempData[i].city == data.city) {

	                console.log("locations already exsists");
	                break;
	            } else {
	                tempData.push(data);
	                localLocations = tempData;
	                storage.localBucket.setItem('savedPlaces', JSON.stringify(localLocations));
	                console.log("successfully save new location..");

	                break;

	            }
	        }
	    }


	}


})