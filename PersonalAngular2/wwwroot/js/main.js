'use strict';

/* App Module */

var personalApp = angular.module('personalApp', ['ngRoute']);

personalApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});


// configure our routes
personalApp.config(function($routeProvider) {
    $routeProvider

        // route for the home view
        .when('/', {
            templateUrl : 'home.html',
            controller  : 'mainController'
        })

        // route for the about view
        .when('/about', {
            templateUrl : 'views/about.html',
            controller  : 'aboutController'
        })

        // route for the general mills view
        .when('/generalmills', {
            templateUrl : 'views/generalmills.html',
            controller  : 'mainController'
        })
        
        // route for the general mills view
        .when('/sparkstarter', {
            templateUrl : 'views/sparkstarter.html',
            controller  : 'mainController'
        });
});
