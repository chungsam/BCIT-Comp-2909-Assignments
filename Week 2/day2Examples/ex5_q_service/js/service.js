cardApp.factory("cardService", ["$http", "$q", function ($http, $q) {
    var deck = [{ "number": "Q", "suit": "Hearts", "numOrd": 12 },
        { "number": "A", "suit": "Spades", "numOrd": 1 },
        { "number": "J", "suit": "Spades", "numOrd": 11 }];

    return {
        getCards: function () {
            var deferred = $q.defer(); // Set up deferral.
            $http.get("http://ssdprogram.ca/cards.php")
                .success(function (data) {
                    deferred.resolve(data);                // Return resource.
                })
                .error(function () {
                    deferred.reject("*** Rejected! ****");  // Return rejection.
                });;
            return deferred.promise; // Promise to return something once available.
        },

        getCard: function (number, suit) {
            for (var i = 0; i < deck.length; i++) {
                if (deck[i].number == number && deck[i].suit == suit) {
                    return deck[i];
                }
            }
        }
    }
}]);
