var myControllers = (function () {
    'use strict';
    var ctrls = angular.module('myControllers', []);

    // Define this so it can be accessed globally for simplicity.
    var deck = [{ "number": "Q", "suit": "Hearts", "numOrd": 12 },
                { "number": "A", "suit": "Spades", "numOrd": 1 },
                { "number": "J", "suit": "Spades", "numOrd": 11 }];

    // Parent controller
    ctrls.controller('AppCtrl', ['$scope', function ($scope) {
        $scope.title = "AngularJS Tutorial";
    }]);

    // Child controller (no parameters) - Inject scope.
    ctrls.controller('ListCtrl', ['$scope', function ($scope) {
        $scope.cards = deck;
    }]);

    // Another child controller - Inject scope and $routeParams service.
    ctrls.controller('DetailCtrl',
        ['$scope', '$routeParams', function ($scope, $routeParams) {
            // Define empty object.
            $scope.card = {};

            // Find card that matches the parameters and assign it to card.
            for (var i = 0; i < deck.length; i++) {
                if (deck[i].number == $routeParams.numberID
                && deck[i].suit == $routeParams.suitID) {
                    $scope.card = deck[i];
                    break;
                }
            }
        }]);

    return ctrls;
}());
