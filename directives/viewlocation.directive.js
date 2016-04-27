//This directive is for handling "click to view" location in dom ... 
//Directive grabs current object clicked , stores the object in session storage for cache controller to capture and present . 

waiter.directive('viewLocation',function($state,storage){
	// Runs during compile
	return {
		   restrict: 'A', 
		   controller:"search",
			link: function($scope, element, attrs) {

			//For testing purposes . To be removed in production . 
			console.log(attrs.myLocation);


			element.bind("click", function(location){

					 //attrs.location will return string value of current object stored in attribute;
					var location = attrs.myLocation;

		            // Encrypts object stored in session . 
		            var lockedObj = btoa(location); 

		            // Only caching one object at a time .
		            storage.sessionBucket.clear(); 


		            //No need to stringify since already handled by angular.
		            storage.sessionBucket.setItem('location',lockedObj);


		            //sends user to cache controller.
		            $state.go('/locationView');
		            
      		 });
		}
	};
});