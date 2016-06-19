var React = require('react');
var {Link, IndexLink} = require('react-router');
var LogoutButton = require('LogoutButton');

var Nav = React.createClass({
    onSearch: function(e){
        e.preventDefault();
        alert('not yet wired up');
    },
    render: function(){
        var isLoggedIn = this.props.isLoggedIn;
        function renderLoginButton(){
            if(isLoggedIn){
                return <LogoutButton/>
            }
            else{
                return (
                    <ul className="menu">
                        <li>
                            <Link to="/login" className="button">Login</Link>
                        </li>
                    </ul>
                )
            }
        }
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">
                            Lunch:
                        </li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Vote</IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Chart</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    {renderLoginButton()}
                </div>
            </div>
        );
    }
})
module.exports = Nav;


