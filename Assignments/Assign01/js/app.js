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
    $scope.title = "Travel Destinations";


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

        // Show the right forecast icon.
        $scope.showForecastIcon();
    }

    // Pick the right forecast icon based on weather text
    $scope.forecastIconClass = "";

    $scope.showForecastIcon = function() {
        switch ($scope.currentCityForecast.text.toLowerCase()) {
            case 'showers':
                $scope.forecastIconClass = "fa fa-tint fa-5x";
                break;
            case 'clear':
                $scope.forecastIconClass = "fa fa-sun-o fa-5x";
                break;
            case 'partly cloudy':
                $scope.forecastIconClass = "fa fa-cloud fa-5x";
                break;
            default:
                $scope.forecastIconClass = "";
                break;


        }
    }

    // Display in either celsius or fahrenheit. Default to fahrenheit on startup.
    $scope.tempScale = 'fahrenheit';

    $scope.convertTemp = function (targetTempScale) {

        switch (targetTempScale.toLowerCase()) {
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

    // For ordering the displayed cities.
    $scope.orderByPropName = 'cityName';
    $scope.orderByReverse = false;
    $scope.sortIconClass = "fa fa-sort-alpha-asc fa-lg";

    $scope.sortBy = function (orderPropName) {
        $scope.orderByPropName = orderPropName;
        $scope.orderByReverse =
            $scope.orderByPropName === orderPropName ? !$scope.orderByReverse : false;
        
        // Dynamic sort icon
        if ($scope.orderByReverse) {
            $scope.sortIconClass = "fa fa-sort-alpha-desc fa-lg";
        } else {
            $scope.sortIconClass = "fa fa-sort-alpha-asc fa-lg";
        }

        console.log("orderByPropName: " + $scope.orderByPropName);
        console.log("orderByReverse: " + $scope.orderByReverse);
    };


}]);