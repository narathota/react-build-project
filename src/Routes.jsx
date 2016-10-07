var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var HashHistory = ReactRouter.hashHistory;

var Base = require('./components/Base.jsx');
var Page1 = require('./components/Page1.jsx');
var Page2 = require('./components/Page2.jsx');

var Routes = (
    <Router history={HashHistory}>
        <Route path="/" component={Page1}/>
        <Route path="/page2" component={Page2}/>
        {/*<Route path="/" component={Base} />*/}
    </Router>
);

module.exports = Routes;