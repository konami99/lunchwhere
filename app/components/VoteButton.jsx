var React = require('react');
var Util = require('Util');

var LogoutButton = React.createClass({
    onClickEvent: function(e){
        e.preventDefault();
        var placeId = this.props.placeId;
        
    },
    render: function(){
        
        return (
            <button type="button" onClick={this.onClickEvent} className="hollow button">Vote</button>      
        );
    }
})
module.exports = LogoutButton;