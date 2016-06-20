var React = require('react');
var {Link, IndexLink} = require('react-router');
var LogoutButton = require('LogoutButton');

var Nav = React.createClass({
    onSearch: function(e){
        e.preventDefault();
        alert('not yet wired up');
    },
    logout: function(){
        this.props.onLoggedOut();
    },
    
    render: function(){
        var that = this;
        var isLoggedIn = this.props.isLoggedIn;
        var userObj = this.props.userObj;
        function handleLoggedOut(){
            that.logout();
        }
        function renderLoginButton(){
            if(isLoggedIn){
                return <LogoutButton username={userObj.username} onLoggedOut={handleLoggedOut}/>
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
        function renderCreateLink(){
            if(isLoggedIn && userObj && userObj.role==="admin"){
                return (
                    <li>
                        <Link to="/create" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Create a New Place</Link>
                    </li>
                )
            }
        }
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">
                            ::We Need To Be Fed::
                        </li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Vote!</IndexLink>
                        </li>
                        <li>
                            <Link to="/chart" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Ranking</Link>
                        </li>
                        {renderCreateLink()}
                        
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


