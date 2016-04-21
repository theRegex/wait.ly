waiter.service('foodLists', function($http, $q) {

    var foodLists = this;
    foodLists.lists = null;
    foodLists.processLocations = function() {
        var defer = $q.defer();
        $http.get("mock_data/places.json")
            .success(function(res) {

                foodLists.lists = angular.fromJson(res);
                var cResponse = angular.fromJson(res);;
                console.log("success!" + cResponse)
                defer.resolve(res);

            }).error(function(err, status) {
                defer.reject(err)
                console.log("Error in processLocations!::" + err + ":" + +res)
            })

        return defer.promise;

    }

    return foodLists;
})
