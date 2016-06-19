var React = require('react');
var Util = require('Util');

var LogoutButton = React.createClass({
    onClickEvent: function(e){
        e.preventDefault();
        console.log('onClickEvent');
    },
    render: function(){
        var placeId = this.props.placeId;
        return (
            <button type="button" onClick={this.onClickEvent(placeId)} className="hollow button">Logout</button>      
        );
    }
})
module.exports = LogoutButton;