mainApp.service('HelpscoutAppService', function ($http, $rootScope, $location, $q, HelpscoutLoginService) {
    function getAugmentedHeaders(hdrs) {
        var headers  = hdrs || {};
        if($rootScope.helpscoutAuth) {
            headers.Authorization = $rootScope.helpscoutAuth;
        }
        return headers;
    }

    function getHttpRequest(request) {
        return httpRequest = $http(request).error(function(data, status) {
            if (status === 401) {
                $rootScope.helpscoutAuth = null;
            }
        });
    }

    var serviceObj = function (request) {
        var headers = getAugmentedHeaders(request.headers);
        request.headers = headers;

        if(!request.headers.Authorization) {
            var deferred = $q.defer();
            if($rootScope.currentUser) {
                HelpscoutLoginService.getHelpscoutLoginForUser($rootScope.currentUser.user.userId).success(function (data) {
                    var encodedAuth = btoa(data.helpscoutKey + ":" + data.helpscoutPassword);
                    var authHeaderValue = "Basic " + encodedAuth;

                    request.headers.Authorization = authHeaderValue;
                    $rootScope.helpscoutAuth = authHeaderValue;

                    var httpRequest = getHttpRequest(request);

                    deferred.resolve(httpRequest);
                });
            }
            return deferred.promise;
        }

        return getHttpRequest(request);


    }

    return serviceObj;
});