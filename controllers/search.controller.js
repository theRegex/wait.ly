waiter.controller('search', function($scope,foodLists,$state,storage){
 $scope.places = [];
    $scope.getFoodLocations = function() {

        if($scope.places.length < 1){
        foodLists.processLocations().
        then(function(res) {
            //sucess
            $scope.places = [];
            $scope.places.push(foodLists.lists);

        }, function(error) {
            //error
        })

    }else{
        return false;
    }


    }


    $scope.viewLocation = function(location){
    		var currentSelected = {
    			name : location.name,
                city : location.city,
                state : location.state,
                est : location.est//Store location that user wants to view here...
    		}

            var stringData = JSON.stringify(currentSelected);
            var lockedObj = btoa(stringData); // Encrypts object stored in session . 
            storage.sessionBucket.clear(); // Only caching one object at a time .
            storage.sessionBucket.setItem('location',lockedObj);
            $state.go('/locationView');


    }







})