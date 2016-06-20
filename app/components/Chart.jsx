var React = require('react');
var {Link} = require('react-router');

var Chart = React.createClass({
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
module.exports = Chart;