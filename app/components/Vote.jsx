var React = require('react');
var {Link} = require('react-router');
var PlacesMock = require('PlacesMock');

var PlacesList = React.createClass({
    render: function(){
        var createRow = function(place){
            return (
                <div>
                    <td>11</td>
                    <td>22</td>
                    <td>33</td>
                </div>
            );
        };
        return <tr>{PlacesMock.map(createRow)}</tr>;
    }
});

var Vote = React.createClass({
    render: function(){
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
                    <tbody>
                        <PlacesList/>
                    </tbody>
                </table>
            </div>
        );
    }
})
module.exports = Vote;