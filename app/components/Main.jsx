var React = require('react');
var Nav = require('Nav');
var {RouteHandler} = require('react-router');

var Main = React.createClass({
    getInitialState: function() {
        return {
            isLoggedIn: false,
            userid: '',
            username: ''
        }
    },
    handleLoggedIn: function(id, username){
        console.log(id);
        console.log(username);
        this.setState({
            isLoggedIn: true,
            userid: id,
            username: username
        });
    },
    handleLoggedOut: function(){
        console.log('here!');
    },
    render: function(){
        var isLoggedIn = this.state.isLoggedIn;
        return (
            <div>
                <Nav isLoggedIn={isLoggedIn} onLoggedOut={this.handleLoggedOut}/>
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