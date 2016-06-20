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

    insertPlace: function(name, description){
        PlacesMock.push(
            {
                id: (PlacesMock.length+1),
                name: name,
                description: description,
                votes: []
            }
        )
    },

    addVote: function(placeId, userId){
        for(var i=0;i<PlacesMock.length;i++){
            if(PlacesMock[i].id===placeId){
                PlacesMock[i].votes.push(userId);
            }
        }
    },

    orderPlacesByVotes: function(){
        var PlacesMockClone = PlacesMock.slice(0);
        PlacesMockClone.sort(function(placeA, placeB){
            return placeB.votes.length - placeA.votes.length;
        });
        console.log(PlacesMockClone);
        return PlacesMockClone;
    }

}

module.exports = Util;