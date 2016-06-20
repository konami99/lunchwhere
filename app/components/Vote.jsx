var React = require('react');
var {Link} = require('react-router');
var PlacesMock = require('PlacesMock');
var Util = require('Util');
var VoteButton = require('VoteButton');

var PlacesList = React.createClass({
    componentWillMount: function(){
        PlacesMock = PlacesMock;
    },
    render: function(){
        var userObj = this.props.userObj;
        var createRow = function(place){
            function renderOptions(){
                console.log(userObj);
            }
            return (
                <tr key={place.id}>
                    <td>{place.title}</td>
                    <td>{place.description}</td>
                    <td><VoteButton placeId={place.id} userId={userObj.id}/></td>
                </tr>
            );
        };
        return <tbody>{PlacesMock.map(createRow)}</tbody>;
    }
});

var Vote = React.createClass({
    render: function(){
        var userObj = this.props.userObj;
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th width="200">Name</th>
                            <th>Description</th>
                            <th width="150">Options</th>
                        </tr>
                    </thead>
                    <PlacesList userObj={userObj}/>
                </table>
            </div>
        );
    }
})
module.exports = Vote;