var waiter = angular.module('waitLY', ['ui.router','firebase','angular-loading-bar','cgNotify'])
.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
  	cfpLoadingBarProvider.loadingBarTemplate = '<div class="progress"><div class="indeterminate"></div></div>';
    cfpLoadingBarProvider.latencyThreshold = 4;
  }]).controller('waiterDb', ['$scope', function($scope){
  	$scope.ref = new Firebase("https://wait-ly.firebaseio.com/");
  }])



