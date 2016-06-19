var {UsersMock, PlacesMock} = require('MockObjects');

var Util = 
{
    getUser: function(username, password){
        for(var i=0; i<UsersMock.length; i++){
            if(UsersMock[i].username===username && UsersMock[i].password===password){
                return UsersMock[i];
            }
        }
        return null;
    },

    insertPlace: function(title, description){
        PlacesMock.push(
            {
                id: (PlacesMock.length+1),
                title: title,
                description: description
            }
        )
    }
}

module.exports = Util;