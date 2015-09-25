var mainApp = angular.module("mainApp", ["ngRoute", "ngCookies"]);

mainApp.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
    $routeProvider.

        when('/dashboard', {
            templateUrl: 'pages/dashboard.html'
        }).

        when('/settings', {
            templateUrl: 'pages/settings.html'
        }).

        when('/login', {
            templateUrl: 'pages/login.html'
        }).

        when('/register', {
            templateUrl: 'pages/register.html'
        }).

        otherwise({
            redirectTo: '/dashboard'
        });

}]);

mainApp.run(['$rootScope', '$http', '$cookieStore', function($rootScope, $http, $cookieStore) {
    $rootScope.currentUser = {};
    var currentUser = $cookieStore.get('currentUser');
    if(currentUser) {
        $rootScope.currentUser = currentUser;
    }
}]);