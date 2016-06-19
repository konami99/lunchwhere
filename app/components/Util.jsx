UsersMock = require('UsersMock');

var Util = 
{
    hasUser: function(username, password){
        for(var i=0; i<UsersMock.length; i++){
            if(UsersMock[i].username===username && UsersMock[i].password===password){
                return true;
            }
        }
        return false;
    }
}

module.exports = Util;