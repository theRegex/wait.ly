waiter.service('storage', function($state,notification){
	var storage = this;

	storage.localBucket = localStorage;
	storage.sessionBucket = sessionStorage;

	//compares old data to new data , returns boolean -- TAKES IN ARRAY OF OBJECTS!!
    storage.checkvalue = function(old,newData){
		return old.some(function(index){
			console.log(index.name);
			return index.name == newData.name && index.city == newData.city;
		})
	               
		}


	//saveNewLocation takes in object passed from cache controller
	storage.saveNewLocation = function(data) {
	    var localLocations = [];
	    var local = storage.localBucket.getItem('savedPlaces')

	    if (local == null) {
	        localLocations.push(data);
	        storage.localBucket.setItem('savedPlaces', JSON.stringify(localLocations));
	        notification.savedLocation("Great! Added first location!");
	    } else {

	        var tempData = angular.fromJson(local);
	        

	        //pass current data to be checked via checkValue()
	        var val = storage.checkvalue(tempData, data)

	        if (val == true) {
	        	notification.dataConflict("Location Already Exists");
	            
	            //$state.go('/search');

	        } else {

	            tempData.push(data);
	            localLocations = tempData;
	            storage.localBucket.setItem('savedPlaces', JSON.stringify(localLocations));
	          	notification.savedLocation("Added New Location");
	            
	        }


	    }


	}

	

	       	

	       
	


})