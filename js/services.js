waiter.service('utilities', function($http, $q,cfpLoadingBar) {
//May need to change name of service....
    var utilities = this;
    var defer = $q.defer();
    utilities.lists = null;
    utilities.username = "John Doe";
    //Get user location every time service is called . This makes sure to deliver closest locations .
    utilities.getUserLocation = function(){


    }



    //Prototype : grabs searched for locations json via http with defer promise. 
    utilities.processLocations = function(location) {
        
        $http.get("mock_data/places.json")
            .success(function(res) {
            
                utilities.lists = angular.fromJson(res)
                var cResponse = angular.fromJson(res)
                console.clear() // for testing
                console.log("success!" + cResponse)
           
                defer.resolve(res);
                cfpLoadingBar.complete();

            }).error(function(err, status) {
                defer.reject(err)
                console.log("Error in processLocations!::" + err + ":" + +res)
            })
        return defer.promise;

    }





    return utilities;
})


