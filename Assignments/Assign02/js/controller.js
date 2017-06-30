var myControllers = (function () {
    'use strict';
    var ctrls = angular.module('myControllers', []);

    // Parent controller
    ctrls.controller('AppCtrl', ['$scope', function ($scope) {
        $scope.title = "COMP 2909 Assignment 2";
    }]);

    // Child controller (no parameters) - Inject scope.
    ctrls.controller('HomeCtrl', ['$scope', function ($scope) {
        $scope.title = "Home";
    }]);

    // Child controller (no parameters) - Inject scope.
    ctrls.controller('EmailCtrl', ['$scope', 'emailService',
        function ($scope, emailService) {
            $scope.title = "Email Form";
            $scope.submitted = false;
            $scope.emailSent = false;
            
            $scope.sendEmail = function () {
                $scope.submitted = true;

                var address = $scope.email.text;
                var subject = $scope.subject.text;
                var body = $scope.body.text;

                if ($scope.emailForm.$valid) {
                    $scope.emailSent = emailService.sendEmail(
                        address, subject, body);
                };

            }
        }
    ]);

    // Child controller
    ctrls.controller('AboutCtrl', ['$scope', function ($scope) {
        $scope.title = "About";
    }]);

    // // Another child controller - Inject scope and $routeParams service.
    // ctrls.controller('DetailCtrl',
    //     ['$scope', '$routeParams', function ($scope, $routeParams) {
    //         // Define empty object.
    //         $scope.card = {};

    //         // Find card that matches the parameters and assign it to card.
    //         for (var i = 0; i < deck.length; i++) {
    //             if (deck[i].number == $routeParams.numberID
    //             && deck[i].suit == $routeParams.suitID) {
    //                 $scope.card = deck[i];
    //                 break;
    //             }
    //         }
    //     }]);

    return ctrls;
}());