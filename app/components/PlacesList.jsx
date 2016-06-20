var React = require('react');
var VoteButton = require('VoteButton');

var PlacesList = React.createClass({
    
    render: function(){
        var userId = this.props.userId;
        var placesObj = this.props.placesObj;

        function renderVoteButton(place){
            if(!isNaN(parseFloat(userId)) && isFinite(userId)){ //is numeric
                return <VoteButton placeId={place.id} userId={userId}/>
            }
            else if(userId===""){
                return <div>{place.votes.length} votes</div>
            }
            else{
                return <div><a className="disabled button" href="#">You have to login to vote</a></div>
            }
        }

        var createRow = function(place){
            return (
                <tr key={place.id}>
                    <td>{place.name}</td>
                    <td>{place.description}</td>
                    <td>
                        {renderVoteButton(place)}
                    </td>
                </tr>
            );
        };
        return <tbody>{placesObj.map(createRow)}</tbody>;
    }
});

module.exports = PlacesList;