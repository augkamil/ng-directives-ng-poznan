angular.element(document).ready(function() {
  angular.module('movieApp',[])
  .controller("AppCtrl", ['$scope', function($scope) {
    $scope.showInfo = function(title) {
      alert("Dodaj do ulubionych filmów: " + title);
    }
  }])
  .directive('movieTitle', function() {
    return {
      restrict: "E",
      scope: {
        title: "@",
        favoriteMovie: "&"
      },
      template: '<div ng-click="favoriteMovie({title: title})"><h3>{{title}}</h3></div>'
    };
  });

  angular.bootstrap(document.getElementById('emptyApp'), ['emptyApp']);
});
