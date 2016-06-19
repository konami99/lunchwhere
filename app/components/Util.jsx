var UsersMock = require('MockObjects');

var Util = 
{
    getUser: function(username, password){
        for(var i=0; i<UsersMock.length; i++){
            if(UsersMock[i].username===username && UsersMock[i].password===password){
                return UsersMock[i];
            }
        }
        return null;
    }
}

module.exports = Util;