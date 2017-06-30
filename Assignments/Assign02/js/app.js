/***************************************** 
 * Declare application reference.
 *****************************************/
// Inject routing service and controller reference.
var emailApp = angular.module('emailApp', ['ngRoute', 'myControllers'])
                     .config(function ($routeProvider) {

    /***************************************** 
    * Define routes.
    *****************************************/
    // For the 'home' page.
    $routeProvider.when("/home", {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
    })
    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
    })

    // For the 'default' page.
    .otherwise({ redirectTo: '/home' });
});
