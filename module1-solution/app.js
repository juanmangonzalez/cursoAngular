(function (){
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);


LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
$scope.list = "";
$scope.result = "";
$scope.state = "";
  $scope.checkIsEnough = function() {
    var count = 0;
    var meals = $scope.list.split(',');
    for (var i = 0; i < meals.length; i++) {
        if(meals[i]!=undefined && meals[i].trim()!="") {
          count++;
        }
    }
    if(count>0){
      $scope.state = 'OK';
      $scope.result = count > 3 ? "Too much!" : "Enjoy!";
    }
    else {
      $scope.state = 'ERROR';
      $scope.result = "Please enter data first";
    }

  };

}

})();
