var app = angular.module('playstadiumApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider

    .when('/login', {
        templateUrl: 'templates/www/login/login.html',
        controller: 'loginCtrl'
    })
    
    .when('/forgotpassword', {
        templateUrl: 'templates/www/forgotpassword/forgotpassword.html',
        controller: 'forgotpasswordCtrl'
    })
    
    .otherwise({
        redirectTo: '/login'
    });
});

app.controller('loginCtrl', function($scope) {
  $scope.user = {
      name: '',
      password: ''
  };
});

app.controller('forgotpasswordCtrl', function($scope) {
  $scope.message = 'Hello from the other side';
});