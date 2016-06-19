var React = require('react');
var {Link} = require('react-router');
var PlacesMock = require('PlacesMock');
var Util = require('Util');
var VoteButton = require('VoteButton');

var PlacesList = React.createClass({

    render: function(){
        var createRow = function(place){
            function renderOptions(){
                console.log(this.props.userObj);
            }
            return (
                <tr key={place.id}>
                    <td>{place.title}</td>
                    <td>{place.description}</td>
                    <td><VoteButton placeId={place.id}/>{renderOptions()}</td>
                </tr>
            );
        };
        return <tbody>{PlacesMock.map(createRow)}</tbody>;
    }
});

var Vote = React.createClass({
    render: function(){
        var userObj = this.prop.userObj;
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
                    <PlacesList/>
                </table>
            </div>
        );
    }
})
module.exports = Vote;