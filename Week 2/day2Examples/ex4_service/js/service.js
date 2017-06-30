cardApp.factory("cardService", function () {
    // Define this so it can be accessed globally for simplicity.
    var deck = [{ "number": "Q", "suit": "Hearts", "numOrd": 12 },
                { "number": "A", "suit": "Spades", "numOrd": 1 },
                { "number": "J", "suit": "Spades", "numOrd": 11 }];
    return {
        getCards: function () {
            return deck;
        },
        getCard: function (number, suit) {
            for (var i = 0; i < deck.length; i++) {
                if (deck[i].number == number && deck[i].suit == suit) {
                    return deck[i];
                }
            }
        }
    }
});
