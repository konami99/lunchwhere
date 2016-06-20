var React = require('react');
var VoteButton = require('VoteButton');

var PlacesList = React.createClass({
    
    render: function(){
        var userId = this.props.userId;
        var placesObj = this.props.placesObj;
        var createRow = function(place){
            function renderOptions(){
                console.log(userObj);
            }
            return (
                <tr key={place.id}>
                    <td>{place.title}</td>
                    <td>{place.description}</td>
                    <td><VoteButton placeId={place.id} userId={userId}/></td>
                </tr>
            );
        };
        return <tbody>{placesObj.map(createRow)}</tbody>;
    }
});

module.exports = PlacesList;