var weatherApp = angular.module('weatherApp', []);

weatherApp.controller('AppCtrl', ['$scope', function ($scope) {

    /* This data cannot be changed */
    var weather = [{
            "high": "53",
            "low": "45",
            "text": "Showers",
            "cityName": "Vancouver"
        },
        {
            "high": "76",
            "low": "61",
            "text": "Partly Cloudy",
            "cityName": "Havana Cuba"
        },
        {
            "high": "77",
            "low": "56",
            "text": "Clear",
            "cityName": "San Diego"
        },
        {
            "high": "82",
            "low": "70",
            "text": "Partly Cloudy",
            "cityName": "Honolulu"
        }
    ];

    // Define title model.
    $scope.title = "AngularJS Tutorial";


    $scope.getAllWeather = function () {
        console.log("I am here");
        return weather;
    }

    // Return weather to application.
    $scope.forecast = $scope.getAllWeather();



    // Keep track of current city and forecast.
    $scope.currentCity = null;
    $scope.currentCityForecast = {};

    $scope.showForecast = function (city) {

        $scope.currentCity = city;

        $scope.currentCityForecast = $scope.forecast.find(function (forecast) {
            return forecast.cityName == city;
        })

        // Assign display temperatures.
        $scope.currentCityForecast.displayTempHigh = $scope.currentCityForecast.high;
        $scope.currentCityForecast.displayTempLow = $scope.currentCityForecast.low;
    }

    // Display in either celsius or fahrenheit. Default to fahrenheit on startup.
    $scope.tempScale = 'fahrenheit';

    $scope.convertTemp = function (targetTempScale) {

        switch (targetTempScale) {
            case 'celsius':
                $scope.currentCityForecast.displayTempHigh = ($scope.currentCityForecast.high - 32) * 5 / 9;
                $scope.currentCityForecast.displayTempLow = ($scope.currentCityForecast.low - 32) * 5 / 9;

                break;
            case 'fahrenheit':
                $scope.currentCityForecast.displayTempHigh = $scope.currentCityForecast.high;
                $scope.currentCityForecast.displayTempLow = $scope.currentCityForecast.low;

                break;
        }

    }

    // TODO: Remove after debugging.
    $scope.showAlert = function () {
        console.log($scope.tempScale);

    }

    // For ordering the displayed cities.
    $scope.orderByPropName = 'cityName';
    $scope.orderByReverse = false;

    $scope.sortBy = function (orderPropName) {
        $scope.orderByPropName = orderPropName;
        $scope.orderByReverse =
            $scope.orderByPropName === orderPropName ? !$scope.orderByReverse : false;

        console.log("orderByPropName: " + $scope.orderByPropName);
        console.log("orderByReverse: " + $scope.orderByReverse);
    };


    /* TODO:
    - Shorten variable names in both JS and HTML
    - Go through entire HTML and clean it up
    - Go through entire JS and clean it up
    - Style it so it looks awwwesommmmeee!!

    
    */



}]);