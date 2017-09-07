(function () {
    'use strict'

    angular.module('myApp', [])
        .controller('myCtrl', ['$scope', function ($scope) {

            $scope.string = '';
            $scope.msg = '';

            $scope.myFunc = function () {
                if ($scope.string == "") {
                    return $scope.msg = "Please enter data first!";
                  
                }
                var elemets = $scope.string.split(',');
                if (elemets.length <= 3)
                    $scope.msg = "Enjoy!";

                else
                    $scope.msg = "Too much!";

            };
        }]);
})();
