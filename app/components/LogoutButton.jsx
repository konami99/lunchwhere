var React = require('react');

var LogoutButton = React.createClass({
    logout: function(e){
        e.preventDefault();
        this.props.onLoggedOut();
    },
    render: function(){
        var username = this.props.username;
        return (
            <div>
                <form onSubmit={this.logout}>
                    <button type="submit" className="button">({username}) Logout</button>
                </form>
            </div>
        );
    }
})
module.exports = LogoutButton;