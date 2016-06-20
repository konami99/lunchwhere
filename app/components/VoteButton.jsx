var React = require('react');
var Util = require('Util');

var VoteButton = React.createClass({
    getInitialState: function(){
        var initialVoteCount = Util.getPlace(this.props.placeId).votes.length;
        return {
            voteCount: initialVoteCount
        }
    },
    onClickEvent: function(e){
        e.preventDefault();
        var placeId = this.props.placeId;
        var userId = this.props.userId;
        Util.addVote(placeId, userId);
        this.setState({
            voteCount: Util.getPlace(placeId).votes.length
        });
        
    },
    render: function(){
        
        return (
            <button type="button" onClick={this.onClickEvent} className="button">Vote ({this.state.voteCount})</button>      
        );
    }
})
module.exports = VoteButton;