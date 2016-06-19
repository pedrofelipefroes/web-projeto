app.service('userService', function() {
    var user = [{
        username: '',
        password: ''
    }];
    
    var addUser = function(n, p) {
        user.push({
            username: n,
            password: p
        })
    }
    
    var getUser = function() {
        return user;
    }
    
    return {
        addUser: addUser,
        getUser: getUser
    };
})