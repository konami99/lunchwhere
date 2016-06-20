var React = require('react');
var {Link} = require('react-router');
var Util = require('Util');
var PlacesList = require('PlacesList');

var Chart = React.createClass({
    render: function(){
        var orderedPlacesObj = Util.orderPlacesByVotes();
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
                    <PlacesList userId="" placesObj={orderedPlacesObj}/>
                </table>
            </div>
        );
    }
})
module.exports = Chart;