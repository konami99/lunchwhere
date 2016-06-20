var React = require('react');
var PlacesMock = require('PlacesMock');
var VoteButton = require('VoteButton');

var PlacesList = React.createClass({
    componentWillMount: function(){
        PlacesMock = PlacesMock;
    },
    render: function(){
        var userId = this.props.userId;
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
        return <tbody>{PlacesMock.map(createRow)}</tbody>;
    }
});

module.exports = PlacesList;