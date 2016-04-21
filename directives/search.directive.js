waiter.directive('searchinit',function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		   scope: {}, // {} = isolate, true = child, false/undefined = no change
		//   controller:,
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		   restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		   template: '<input type="text" class="form-control" ng-model="search">',
		// templateUrl: '',
		   replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, element, attrs) {
			 element.bind("click", function(e){
         
       });
		}
	};
});