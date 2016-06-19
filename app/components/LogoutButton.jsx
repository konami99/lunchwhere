var React = require('react');

var LogoutButton = React.createClass({
    logout: function(e){
        e.preventDefault();
        this.props.onLoggedOut();
    },
    render: function(){
        return (
            <div>
                <form onSubmit={this.logout}>
                    <button type="submit" className="hollow button">Logout</button>
                </form>
            </div>
        );
    }
})
module.exports = LogoutButton;