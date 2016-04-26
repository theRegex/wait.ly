waiter.service('storage', function($state){
	var storage = this;

	storage.localBucket = localStorage;
	storage.sessionBucket = sessionStorage;

	//compares old data to new data , returns boolean 
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
	        console.log("successfully saved first location");//to be changed to notification
	    } else {

	        var tempData = angular.fromJson(local);
	        console.log("successfully grabbed data.."); //For testing only , to be removed in production

	        //pass current data to be checked via checkValue()
	        var val = storage.checkvalue(tempData, data)

	        if (val == true) {

	            console.log("items exists")//to be changed to notification
	            $state.go('/search');

	        } else {

	            tempData.push(data);
	            localLocations = tempData;
	            storage.localBucket.setItem('savedPlaces', JSON.stringify(localLocations));
	            console.log("successfully save new location..:" + data.name); //to be changed to notification
	        }


	    }


	}

	

	       	

	       
	


})