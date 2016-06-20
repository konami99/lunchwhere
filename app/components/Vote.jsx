var React = require('react');
var PlacesList = require('PlacesList');
var PlacesMock = require('PlacesMock');

var Vote = React.createClass({
    componentWillMount: function(){
        PlacesMock = PlacesMock;
    },
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
                    <PlacesList userId={userObj.id} placesObj={PlacesMock}/>
                </table>
            </div>
        );
    }
})
module.exports = Vote;