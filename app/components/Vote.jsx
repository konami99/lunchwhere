var React = require('react');
var {Link} = require('react-router');
var PlacesMock = require('PlacesMock');

var PlacesList = React.createClass({
    render: function(){
        var createRow = function(place){
            return (
                <tr key={place.id}>
                    <td>11</td>
                    <td>22</td>
                    <td>33</td>
                </tr>
            );
        };
        return <tbody>{PlacesMock.map(createRow)}</tbody>;
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
                    
                        <PlacesList/>
                    
                </table>
            </div>
        );
    }
})
module.exports = Vote;