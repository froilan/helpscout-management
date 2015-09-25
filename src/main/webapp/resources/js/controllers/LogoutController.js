mainApp.controller('LogoutController', ['$scope', '$log', '$location', 'AuthenticationService',
    function($scope, $log, $location, AuthenticationService) {

        $scope.logout = function() {
            AuthenticationService.removeUserDetails();
            $location.url('/login');
        }

    }]);