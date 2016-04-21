waiter.config(function($stateProvider, $urlRouterProvider) {
	 $urlRouterProvider.otherwise('/profile');
	$stateProvider
	.state('/login',{
		url: "/login",
		templateUrl : "/wait.ly/partials/login.html",
		controller : 'login'
		
	})
	.state('/profile',{
		url: "/profile",
		templateUrl : "/wait.ly/partials/profile.html",
		controller : 'profile'
		
	})
	.state('/search',{
		url: "/search",
		templateUrl : "/wait.ly/partials/search.html",
		controller : 'search'
		
	})
	
 //last edits made here
})