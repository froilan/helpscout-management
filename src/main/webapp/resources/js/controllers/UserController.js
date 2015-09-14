mainApp.controller('UserController', ['$scope', '$log', '$window','UserService',function($scope, $log, $window, UserService) {
    $scope.email;
    $scope.password;

    $scope.createUser = function() {
        UserService.addNewUser($scope.email, $scope.password).success(function(data) {
            alert("User has been successfully registered");
            $window.location.href = "/helpscout-management/#/settings"
        })
    }

}]);