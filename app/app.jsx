var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Vote = require('Vote');
var Chart = require('Chart');

require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Vote}/>
      <Route path="about" component={Chart}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
