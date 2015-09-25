mainApp.service('AuthenticationService', ['$http', '$cookieStore', '$rootScope',
        function($http, $cookieStore, $rootScope){

    this.authenticateLogin = function(authHeaderValue) {
        var req = {
            method: 'GET',
            url: '/helpscout-management/api/authenticate',
            headers: {
                'Authorization': authHeaderValue
            }
        }

        return $http(req);
    }

    this.removeUserDetails = function() {
        $rootScope.currentUser = {};
        $cookieStore.remove('currentUser');
    }
}]);
