$(document).ready(function() {
    var degrees = 0;
    var time = 60;
    setInterval(function() {
        $("#slider").css({
            'transform': 'rotate(' + degrees + 'deg)'
        });
        if (degrees === 180) {
            $("#cover").css("transform", "rotate(180deg)");
            $("#cover").css("backgroundColor", "white");
        }
        if (degrees > 360) {
            $("#cover").css("transform", "rotate(0deg)");
            $("#cover").css("backgroundColor", "blue");
            $("#slider").css("transform", "rotate(0deg)");
            degrees = 0;
        }
        $("#clockText").html(time);
        degrees += 6;
        time--;
        if (time < 0) {
            time = 60;
        }
    }, 1000);
});
var myApp = angular.module('myApp', []);

myApp.controller('breakLength', function($scope) {
    $scope.length = 0;
    $scope.decrement = function() {
        if($scope.length > 0) {
          $scope.length--;
        }
    };

    $scope.increment = function() {
        $scope.length++;
    };
});

myApp.controller('sessionLength', function($scope) {
    $scope.length = 0;
    $scope.decrement = function() {
      if($scope.length > 0) {
        $scope.length--;
      }
    };

    $scope.increment = function() {
        $scope.length++;
    };
});
