var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');
var List = require('./components/List.jsx');
var Routes = require('./Routes.jsx');
var LeadCapture = require('./components/LeadCapture.jsx');

ReactDOM.render(<List/>, document.getElementById('leadCapture'));
