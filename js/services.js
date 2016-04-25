waiter.service('foodLists', function($http, $q,$timeout,cfpLoadingBar) {

    var foodLists = this;
    foodLists.lists = null;
    foodLists.processLocations = function() {
        var defer = $q.defer();
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


