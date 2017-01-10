'use strict';

/* Controllers */

var personalControllers = angular.module('personalControllers', []);

// create the controller and inject Angular's $scope
personalControllers.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

personalControllers.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

personalControllers.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});

personalControllers.controller('generalmillsController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});

personalControllers.controller('sparkstarterController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});