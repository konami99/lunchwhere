var React = require('react');
var Util = require('Util');

var LogoutButton = React.createClass({
    onClickEvent: function(e){
        e.preventDefault();
        var placeId = this.props.placeId;
        var userId = this.props.userId;
        console.log("i'm in votebutton. placeid= "+placeId+" ,userId= "+userId);
    },
    render: function(){
        
        return (
            <button type="button" onClick={this.onClickEvent} className="hollow button">Vote</button>      
        );
    }
})
module.exports = LogoutButton;