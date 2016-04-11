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
    
    .when('/signup', {
        templateUrl: 'templates/www/signup/signup.html',
        controller: 'signupCtrl'
    })
    
    .otherwise({
        redirectTo: '/login'
    });
});

app.controller('loginCtrl', function($scope) {
  $scope.user = {
      username: '',
      password: ''
  };
});

app.controller('forgotpasswordCtrl', function($scope) {
  $scope.message = 'Hello from the other side';
});