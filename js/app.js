var waiter = angular.module('waitLY', []);

waiter.service('foodLists', function($http, $q) {

    var foodLists = this;
    foodLists.lists = null;
    foodLists.processLocations = function() {
        var defer = $q.defer();
        $http.get("mock_data/places.json")
            .success(function(res) {

                foodLists.lists = res;
                var cResponse = JSON.stringify(res);
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




waiter.controller('locationSearch', function($scope, foodLists) {
    $scope.places = [];
    $scope.getFoodLocations = function() {
        foodLists.processLocations().
        then(function(res) {
            //sucess
            $scope.places.push(foodLists.lists);

        }, function(e) {
            //error
        })
    }

    $scope.getFoodLocations();
})
