var React = require('react');
var VoteButton = require('VoteButton');

var PlacesList = React.createClass({
    
    render: function(){
        var userId = this.props.userId;
        var placesObj = this.props.placesObj;

        function renderVoteButton(place){
            console.log(userId);
            if(!isNaN(parseFloat(userId)) && isFinite(userId)){ //is numeric
                return <VoteButton placeId={place.id} userId={userId}/>
            }
            else if(userId===""){
                return <div>{place.votes.length} votes</div>
            }
            else{
                return <div></div>
            }
        }

        var createRow = function(place){
            return (
                <tr key={place.id}>
                    <td>{place.title}</td>
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