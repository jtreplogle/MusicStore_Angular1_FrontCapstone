(function() {

  "use strict";

  angular
    .module("mmcmStore")
    .factory("classifiedsFactory", function($http) {

      function getClassifieds() {
        return $http.get('data/classifieds.json')
      }
      
      return {
        getClassifieds: getClassifieds
      }
    });




})();