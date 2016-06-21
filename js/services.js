app.service('userService', function() {
    var user = {
        username: '',
        email: ''
    }
    
    var setUser = function(username, email) {
        user.username = username;
        user.email = email;
    }
    
    return {
        setUser: setUser
    };
});