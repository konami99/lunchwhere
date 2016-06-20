var React = require('react');
var {Link} = require('react-router');

var Util = require('Util');

var PlacesList = require('PlacesList');


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
                    <PlacesList userId={userObj.id}/>
                </table>
            </div>
        );
    }
})
module.exports = Vote;