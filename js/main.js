var app = angular.module('socialBotApp',['ngRoute','ngStorage']);

app.config(function($routeProvider){
    $routeProvider
        .when('/website',{
          templateUrl: '../website.html',
          controller: function($scope,$localStorage) {
            $scope.websiteData = {};
            $scope.addWebsite = function() {
              $localStorage.data = [];
              $localStorage.data.push($scope.websiteData);
            }
          }
        })
        .when('/plugin',{
          templateUrl: '../plugin.html',
          controller: function($scope,$localStorage,$location) {
            if($localStorage.data !== undefined && $localStorage.data[0].website !== undefined) {
              $scope.link = $localStorage.data[0].website+"/install";
            } else {
              $location.path('website');
            }
          }
        })
        .when('/socialauth',{
          templateUrl: '../social.html'
        })
        .when('/schedule',{
          templateUrl: '../schedule.html'
        })
        .when('/review',{
          templateUrl: '../review.html'
        });
});
