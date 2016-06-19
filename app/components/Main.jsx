var React = require('react');
var Nav = require('Nav');

var Main = React.createClass({
    getInitialState: function() {
        return {
            isLoggedIn: false,
            users: [
                {
                    username: "admin",
                    password: "12345",
                    type: "admin"
                },
                {
                    username: "user1",
                    password: "apple",
                    type: "normal"
                }
            ],
            votes: []
        }
    },
    render: function(){
        return (
            <div>
                <Nav/>
                <div className="row">
                    <div className="columns medium-6 large-6 small-centered">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
})

module.exports = Main;