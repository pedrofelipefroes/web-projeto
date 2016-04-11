app.controller('loginCtrl', ['$scope', 'userService', function($scope, userService) {
    $scope.newuser = {
        username: '',
        password: ''
    };
    
    userService.addUser($scope.newuser.username, $scope.newuser.password);
}]);

app.controller('forgotpasswordCtrl', ['$scope', function($scope) {
    $scope.message = 'Hello from the other side';
}]);

app.controller('signupCtrl', ['$scope', function($scope) {
    $scope.message = 'Hello from the signup side';
}]);

app.controller('homeCtrl', ['$scope', 'userService', function($scope, userService) {
    $scope.user = userService.getUser;
    
    $scope.message = 'Hello from the home side';
}]);

app.controller('mychampionshipsCtrl', ['$scope', function($scope) {
    $scope.message = 'This is MYYYY championship';
}]);

app.controller('createchampionshipsCtrl', ['$scope', function($scope) {
    $scope.message = 'Hello from the champion side';
}]);