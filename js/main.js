
var app = angular.module('store', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {templateUrl: 'modal/overview.html'})
        .when('/help', {templateUrl: 'modal/help.html'})
        .otherwise({redirectTo: 'modal/404.html'})
    }])
