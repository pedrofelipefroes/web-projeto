var app = angular.module('playstadiumApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider

    .when('/login', {
        templateUrl: 'www/templates/login/login.html',
        controller: 'loginCtrl'
    })
    
    .when('/forgotpassword', {
        templateUrl: 'www/templates/forgotpassword/forgotpassword.html',
        controller: 'forgotpasswordCtrl'
    })
    
    .when('/signup', {
        templateUrl: 'www/templates/signup/signup.html',
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

app.controller('signupCtrl', function($scope) {
  $scope.message = 'Hello from the signup side';
});