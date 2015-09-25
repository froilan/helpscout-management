mainApp.controller('LoginController', ['$scope', '$log', '$cookieStore', '$location', '$rootScope', 'AuthenticationService',
        function($scope, $log, $cookieStore, $location, $rootScope, AuthenticationService) {
    $scope.email;
    $scope.password;

    $scope.login = function() {
        var encodedAuth = btoa($scope.email + ":" + $scope.password);
        var authHeaderValue = "Basic " + encodedAuth;

        AuthenticationService.authenticateLogin(authHeaderValue).success(function(data, status) {
            var currentUser = {
                user: {
                    userId: data.userId,
                    email: data.email,
                },
                auth: authHeaderValue
            };
            $rootScope.currentUser = currentUser;
            $cookieStore.put('currentUser', currentUser);
            $location.url('/dashboard');
        }).error(function() {
            alert("Invalid Username and Password.");
            $scope.email = "";
            $scope.password = "";
        });
    }

}]);