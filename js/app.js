var app = angular.module('playstadium', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        
    .when('/login', {
        templateUrl: '/templates/login/login.html',
        controller: 'signinCtrl'
    })
    .when('/signup', {
        templateUrl: '/templates/signup/signup.html',
        controller: 'signinCtrl'        
    })
    .when('/forgot', {
        templateUrl: '/templates/forgot/forgot.html',
        controller: 'signinCtrl'
    })
    .when('/home', {
        templateUrl: '/templates/home/home.html',
        controller: 'homeCtrl'
    })
    .otherwise({
        redirectTo: '/home'
    })
})

//var app = angular.module('playstadiumApp', ['ngRoute']);
//
//app.config(function($routeProvider) {
//    $routeProvider
//
//    .when('/login', {
//        templateUrl: 'www/templates/login/login.html',
//        controller: 'loginCtrl'
//    })
//    
//    .when('/forgotpassword', {
//        templateUrl: 'www/templates/forgotpassword/forgotpassword.html',
//        controller: 'forgotpasswordCtrl'
//    })
//    
//    .when('/signup', {
//        templateUrl: 'www/templates/signup/signup.html',
//        controller: 'signupCtrl'
//    })
//    
//    .when('/home', {
//        templateUrl: 'www/templates/home/home.html',
//        controller: 'homeCtrl'
//    })
//    
//    .when('/mychampionships', {
//        templateUrl: 'www/templates/mychampionships/mychampionships.html',
//        controller: 'mychampionshipsCtrl'
//    })
//    
//    .when('/createchampionships', {
//        templateUrl: 'www/templates/createchampionships/createchampionships.html',
//        controller: 'createchampionshipsCtrl'
//    })
//    
//    .when('/maintenance', {
//        templateUrl: 'www/templates/maintenance/maintenance.html'
//    })
//    
//    .when('/error', {
//        templateUrl: 'www/templates/error/error.html'
//    })
//    
//    .otherwise({
//        redirectTo: '/login'
//    });
//});