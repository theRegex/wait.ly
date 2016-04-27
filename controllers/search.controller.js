waiter.controller('search', function($scope,utilities,$state,storage){
 $scope.places = [];
    $scope.getFoodLocations = function() {

        if($scope.places.length < 1){
        utilities.processLocations().
        then(function(res) {
            //sucess
            $scope.places = [];
            $scope.places.push(utilities.lists);

        }, function(error) {
            //error
        })

    }else{
        return false;
    }


    }

    //Following logic has been moved to viewlocation.directive.js due to best practices and testing .-->

    // $scope.viewLocation = function(location){
    // 		var currentSelected = {
    // 			name : location.name,
    //             city : location.city,
    //             state : location.state,
    //             est : location.est//Store location that user wants to view here...
    // 		}

    //         var stringData = JSON.stringify(currentSelected);
    //         var lockedObj = btoa(stringData); // Encrypts object stored in session . 
    //         storage.sessionBucket.clear(); // Only caching one object at a time .
    //         storage.sessionBucket.setItem('location',lockedObj);
    //         $state.go('/locationView');


    // }







})