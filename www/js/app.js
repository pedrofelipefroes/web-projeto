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
    
    .when('/home', {
        templateUrl: 'www/templates/home/home.html',
        controller: 'homeCtrl'
    })
    
    .when('/createchampionship', {
        templateUrl: 'www/templates/createchampionship/createchampionship.html',
        controller: 'createchampionshipCtrl'
    })
    
    .when('/error', {
        templateUrl: 'www/templates/error/error.html'
    })
    
    .otherwise({
        redirectTo: '/login'
    });
});