app.controller('signinCtrl', ['$http', '$scope', 'userService', function($http, $scope, userService) {
    $scope.user = {};

    $scope.userSignup = function (user) {};

//    userService.addUser($scope.newuser.username, $scope.newuser.password);

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


//
//app.controller('forgotpasswordCtrl', ['$scope', function($scope) {
//    $scope.message = 'Hello from the other side';
//}]);
//
//app.controller('signupCtrl', ['$scope', function($scope) {
//    $scope.message = 'Hello from the signup side';
//}]);
//
//app.controller('homeCtrl', ['$scope', 'userService', function($scope, userService) {
//    $scope.user = userService.getUser;
//
//    var imagem = document.getElementById('slide');
//    var intervaloSlide = setInterval(slideShow, 3000);
//    var servidorDasImagens = 'img/slideshow/';
//    var todasAsImagens = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg'];
//
//    function slideShow() {
//        for (var i = 0; i < todasAsImagens.length; i++) {
//            if (imagem.src.indexOf(todasAsImagens[i]) != -1) {
//                if (i != todasAsImagens.length-1)
//                    imagem.src = servidorDasImagens+todasAsImagens[i+1];
//                else
//                    imagem.src = servidorDasImagens+todasAsImagens[0];
//                break;
//            }
//        }
//    }
//
//    $scope.news = 'Notícias';
//    $scope.patchnews = 'Patch-fixes';
//}]);
//
//app.controller('mychampionshipsCtrl', ['$scope', function($scope) {
//    $scope.message = 'This is MYYYY championship';
//}]);
//
//app.controller('createchampionshipsCtrl', ['$scope', function($scope) {
//    $scope.message = 'Hello from the champion side';
//}]);
