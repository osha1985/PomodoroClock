var myApp = angular.module('myApp', []);
myApp.controller('MainController', function($scope, $interval) {
    var timer = undefined;
    $scope.breakLength = 0;
    $scope.sessionLength = 0;
    $scope.timerStarted = false;
    $scope.Math = window.Math;
    $scope.coverStyle = {};
    $scope.sliderStyle = {};
    $scope.decrementBreakLength = function() {
        if ($scope.breakLength > 0) {
            $scope.breakLength--;
        }
    };
    $scope.incrementBreakLength = function() {
        $scope.breakLength++;
    };
    $scope.decrementSessionLength = function() {
        if ($scope.sessionLength > 0) {
            $scope.sessionLength--;
        }
    };
    $scope.incrementSessionLength = function() {
        $scope.sessionLength++;
    };
    $scope.toggleTimer = function() {
        $scope.timerStarted = !$scope.timerStarted;
        $scope.time = $scope.sessionLength * 60;
        if (angular.isDefined(timer)) {
            $interval.cancel(timer);
            timer = undefined;
        } else {
            timer = startTimer($scope, $interval);
        }
    }
});

function startTimer($scope, $interval) {
    var degrees = 0;
    var timerInterval = (6 / $scope.sessionLength);
    var stop = $interval(function() {
        degrees += timerInterval;
        $scope.sliderStyle.transform = `rotate(${degrees}deg)`;
        $scope.time--;
        if($scope.time <= 0) {
          $interval.cancel(stop);
        }
        if (degrees == 180) {
            $scope.coverStyle.transform = "rotate(180deg)";
            $scope.coverStyle.backgroundColor = "white";
        } else if (degrees >= 360) {
            $scope.coverStyle.transform = "rotate(0deg)";
            $scope.coverStyle.backgroundColor = "blue";
            $scope.coverStyle.transform = "rotate(0deg)";
            degrees = 0;
        }
    }, 1000);
    stop.catch(function() {
        $scope.sliderStyle.transform = "rotate(0deg)";
        $scope.coverStyle.transform = "rotate(0deg)";
        $scope.coverStyle.backgroundColor = "blue";
        degrees = 0;
    });
    return stop;
}
