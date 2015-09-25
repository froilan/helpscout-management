mainApp.service('HelpscoutLoginService', function($http, MainAppService){
    this.createOrUpdateHelpscoutLogin = function(id, user, key, password) {
        var helpscoutLogin = {
            helpscoutLoginId: id,
            user: user,
            helpscoutKey : key,
            helpscoutPassword :password
        };

        var req = {
            method: 'POST',
            url: '/helpscout-management/api/helpscoutLogin',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(helpscoutLogin)
        }

        return MainAppService(req).success(function(data) {
            alert("Helpscout Login Details successfully saved.")
        });
    }

    this.getHelpscoutLoginForUser = function(userId) {
        var req = {
            method: 'GET',
            url: '/helpscout-management/api/helpscoutLogin/' + userId,
            data: null,
            headers: {
                'ContentType': 'application/json'
            }
        }

        return MainAppService(req);
    }

    this.validateHelpscoutLogin = function(key, password) {
        var encodedHeplscoutApiAuth = btoa(key + ":" + password);
        var helpscoutApiAuthHeaderValue = "Basic " + encodedHeplscoutApiAuth;
        var req = {
            method: 'GET',
            url: 'https://api.helpscout.net/v1/mailboxes.json',
            headers: {
                'Authorization': helpscoutApiAuthHeaderValue
            }
        }

        return $http(req);
    }
});