var myControllers = (function () {
    'use strict';
    var ctrls = angular.module('myControllers', []);


    // Parent controller
    ctrls.controller('AppCtrl', ['$scope', 'cardService',
        function ($scope, cardService) {
            $scope.title = "AngularJS Tutorial";

            $scope.cards = cardService.getCards();

            $scope.getPlayingCard = function (cardNum, suit) {
                $scope.card = cardService.getCard(cardNum, suit);
            }
        }]);

    return ctrls;
}());
