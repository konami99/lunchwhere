var PlacesMock = require('PlacesMock');
var UsersMock = require('UsersMock');

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

    getPlace: function(placeId){
        for(var i=0;i<PlacesMock.length;i++){
            if(PlacesMock[i].id===placeId){
                return PlacesMock[i];
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
    },

    addVote: function(placeId, userId){
        for(var i=0;i<PlacesMock.length;i++){
            if(PlacesMock[i].id===placeId){
                PlacesMock[i].votes.push(userId);
            }
        }
    }
}

module.exports = Util;