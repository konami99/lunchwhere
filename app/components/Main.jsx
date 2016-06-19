var React = require('react');
var Nav = require('Nav');
var {RouteHandler} = require('react-router');

var Main = React.createClass({
    getInitialState: function() {
        return {
            isLoggedIn: false
        }
    },
    handleLoggedIn: function(){
        console.log('handleLoggedIn');
    },
    render: function(){
        return (
            <div>
                <Nav/>
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