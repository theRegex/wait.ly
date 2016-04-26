waiter.service('foodLists', function($http, $q,$timeout,cfpLoadingBar) {
//May need to change name of service....
    var foodLists = this;
    var defer = $q.defer();
    foodLists.lists = null;

    //Prototype : grabs searched for locations json via http with defer promise. 
    foodLists.processLocations = function() {
        
        $http.get("mock_data/places.json")
            .success(function(res) {
            
                foodLists.lists = angular.fromJson(res)
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





    return foodLists;
})


