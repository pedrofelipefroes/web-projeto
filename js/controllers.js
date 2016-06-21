app.controller('signinCtrl', ['$scope', 'userService', function($scope, userService) {
    $scope.user = {};

    $scope.userSignup = function (user) {};

//    userService.addUser($scope.newuser.username, $scope.newuser.password);

    $(document).ready(function () {
        $('#amumu').lazylinepainter({
            "svgData": amumu,
            "strokeWidth": 1.5,
            "strokeColor": "#00D8CB"
        }).lazylinepainter('paint');
    });
    
    $(document).ready(function () {
        $('#annie').lazylinepainter({
            "svgData": annie,
            "strokeWidth": 1.5,
            "strokeColor": "#FF5656"
        }).lazylinepainter('paint');
    });

    $(document).ready(function () {
        $('#janna').lazylinepainter({
            "svgData": janna,
            "strokeWidth": 1.5,
            "strokeColor": "#89BDEF"
        }).lazylinepainter('paint');
    });
}]);


app.controller('homeCtrl', ['$scope', 'userService', function($scope, userService) {
    
    $scope.character = [
        { name: soraka, id: '#soraka', color: "#F384CA", duration: 25100 },
        { name: amumu, id: '#amumu', color: "#00D8CB", duration: 17400 },
        { name: fiora, id: '#fiora', color: "#FF5656", duration: 15600 },
        { name: ahri, id: '#ahri', color: "#89BDEF", duration: 29200 },
        { name: annie, id: '#annie', color: "#FF5656", duration: 14700 },
        { name: janna, id: '#janna', color: "#89BDEF", duration: 23600 },
    ];
    
    var draw = function (it) {
        $($scope.character[it].id).removeClass("invisible");
        $($scope.character[it].id).add("invisible");
        
        $($scope.character[it].id).lazylinepainter({
            "svgData": $scope.character[it].name,
            "strokeWidth": 1.5,
            "strokeColor": $scope.character[it].color,
            "onComplete": function () {
                $($scope.character[it].id).addClass("invisible");
                $($scope.character[it].id).removeClass("visible");
                
                if (it == 5) it = it - 5;
                else it = it + 1;
                
                draw(it);
            }
        }).lazylinepainter('paint');
    }
    
    draw(0);
}]);