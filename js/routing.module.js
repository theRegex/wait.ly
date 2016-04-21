waiter.config(function($stateProvider, $urlRouterProvider) {
	 $urlRouterProvider.otherwise('/login');
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
	
 //last edits made here
})