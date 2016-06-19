var React = require('react');
var {Link} = require('react-router');
var Util = require('Util');

var Login = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();
        var username = this.refs.username.value;
        var password = this.refs.password.value;

        if(Util.hasUser(username, password)){
            this.props.onLoggedIn(username);
            this.props.history.push('/');
        }
    },
    render: function(){
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="row">
                        <div className="small-3 columns">
                            <label className="text-right middle">Username</label>
                        </div>
                        <div className="small-9 columns">
                            <input type="text" id="middle-label" ref="username"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="small-3 columns">
                            <label className="text-right middle">Password</label>
                        </div>
                        <div className="small-9 columns">
                            <input type="password" id="middle-label" ref="password"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="small-3 columns">
                            
                        </div>
                        <div className="small-9 columns">
                            <button type="submit" className="hollow button">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
})
module.exports = Login;