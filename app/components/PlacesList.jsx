var React = require('react');
var VoteButton = require('VoteButton');

var PlacesList = React.createClass({
    
    render: function(){
        var userId = this.props.userId;
        var placesObj = this.props.placesObj;

        function renderVoteButton(place){
            if(userId !== ""){
                return <VoteButton placeId={place.id} userId={userId}/>
            }
            else{
                return <div>{place.votes.length} votes</div>
            }
        }

        var createRow = function(place){
            function renderOptions(){
                console.log(userObj);
            }
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