var waiter = angular.module('waitLY', ['ui.router','angular-loading-bar'])

  .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
  	cfpLoadingBarProvider.loadingBarTemplate = '<div class="progress"><div class="indeterminate"></div></div>';
    cfpLoadingBarProvider.latencyThreshold = 4;
  }])



