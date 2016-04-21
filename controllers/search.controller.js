waiter.controller('search', function($scope,foodLists){
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