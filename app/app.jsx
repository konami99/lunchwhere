var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Vote = require('Vote');
var Chart = require('Chart');
var Login = require('Login');
var Create = require('Create');

require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();



ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Vote}/>
      <Route path="about" component={Chart}/>
      <Route path="login" component={Login}/>
      <Route path="create" component={Create}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
