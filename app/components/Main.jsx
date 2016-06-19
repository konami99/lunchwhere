var React = require('react');
var Nav = require('Nav');
var {RouteHandler} = require('react-router');

var Main = React.createClass({
    getInitialState: function() {
        return {
            isLoggedIn: false,
            user: ''
        }
    },
    handleLoggedIn: function(userObj){
        console.log(userObj);
        this.setState({
            isLoggedIn: true,
            user: userObj
        });
    },
    handleLoggedOut: function(){
        this.setState({
            isLoggedIn: false,
            user: ''
        });
    },
    render: function(){
        var isLoggedIn = this.state.isLoggedIn;
        var user = this.state.user;
        return (
            <div>
                <Nav isLoggedIn={isLoggedIn} onLoggedOut={this.handleLoggedOut} userObj={user}/>
                <div className="row">
                    <div className="columns medium-6 large-6 small-centered">
                        {React.cloneElement(this.props.children, {onLoggedIn: this.handleLoggedIn})}
                    </div>
                </div>
                
            </div>
        )
    }
})

module.exports = Main;