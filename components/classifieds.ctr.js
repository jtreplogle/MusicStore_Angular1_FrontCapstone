(function() {

  "use strict";

  angular
    .module("mmcmStore")
    .controller("classifiedsCtrl", function($scope, $http, classifiedsFactory, $mdSidenav, $mdToast) {

      classifiedsFactory.getClassifieds().then(function(classifieds) {
        $scope.classifieds = classifieds.data;
        $scope.categories = getCategories($scope.classifieds);
        // console.log(data);
      });

      var contact = {
        name: "Jason",
        phone: "(555) 55-5555",
        email: "jason@jasonreplogle.com"
      }    

      $scope.openSidebar = function() {
        $mdSidenav('left').open();
      }

      $scope.closeSidebar = function() {
        $mdSidenav('left').close();
      }

      $scope.saveClassified = function(classified) {
        if(classified) {
          classified.contact= contact;
          $scope.classifieds.push(classified);
          $scope.classified = {};
          $scope.closeSidebar();

          // showToast("Listing Saved!");
       
        }//;
      }

      $scope.editClassified = function(classified) {
        $scope.editing = true;
        $scope.openSidebar();
        $scope.classified = classified;
      }

      $scope.saveEdit = function() {
        $scope.editing = false;
        $scope.classified ={};
        $scope.closeSidebar();

        // showToast("Edit Saved!");
      }

      $scope.deleteClassified = function(classified) {
        var index = $scope.classifieds.indexOf(classified);
        $scope.classifieds.splice(index, 1);
      }

      // function showToast(message) {
      //   $mdToast.show(
      //       $mdToast.simple()
      //       .content(message)
      //       .position('top, right')
      //       .hideDelay(3000)
      //       )
      // }


      function getCategories(classifieds) {
        var categories = [];
        angular.forEach(classifieds, function(item) {
          angular.forEach(item.categories, function(category) {
            categories.push(category);
          });
        });
        return _.uniq(categories);
      }


    });
})();



