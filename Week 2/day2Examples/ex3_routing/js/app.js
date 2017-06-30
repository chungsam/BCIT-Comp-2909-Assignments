/***************************************** 
 * Declare application reference.
 *****************************************/
// Inject routing service and controller reference.
var cardApp = angular.module('cardApp', ['ngRoute', 'myControllers'])
                     .config(function ($routeProvider) {

    /***************************************** 
    * Define routes.
    *****************************************/
    // For the 'home' page.
    $routeProvider.when("/home", {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl'
    })
    // For the 'detail' page.
    .when('/home/number/:numberID/suit/:suitID', {
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl'
    })
    // For the 'default' page.
    .otherwise({ redirectTo: '/home' });
});
