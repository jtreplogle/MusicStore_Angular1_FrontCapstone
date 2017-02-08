angular
  .module("mmcmStore", ["ngMaterial"])
  .config(function($mdThemingProvider) {

    $mdThemingProvider.theme('default')
      .primaryPalette('pink')
      .accentPalette('orange');
  })
  .directive("helloWorld", function() {
    return {
      template: "<h1>{{ message }}</h1>"
    }
  });