mainApp.service('MainAppService', function ($http, $rootScope, $location, $q) {
    function getAugmentedHeaders(hdrs) {
        var headers  = hdrs || {};
        if($rootScope.currentUser && $rootScope.currentUser.auth) {
            headers.Authorization = $rootScope.currentUser.auth;
        }
        return headers;
    }

    var serviceObj = function (request) {
        var headers = getAugmentedHeaders(request.headers);
        request.headers = headers;
        return $http(request).error(function(data, status) {
            if (status === 401) {
                $location.url('/login');
            }
        });

    }

    return serviceObj;
});