mainApp.service('UserService', function($http){
    this.addNewUser = function(email, password) {
        var userObject = {
            email : email,
            password :password
        };

        var req = {
            method: 'POST',
            url: '/helpscout-management/api/user',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(userObject)
        }

        return $http(req);

        //.success(function(response) {
        //    alert('ADDED');
        //});

    }
});