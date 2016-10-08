var React = require('react');
var EmailField = require('./EmailField.jsx');
var NameField = require('./NameField.jsx');

var LeadCapture = React.createClass({
    onSubmit: function (e) {
        if (!this.refs.fieldEmail.state.value) {
            alert("Email is not valid");
        } else {
            var httpRequestBody = {
                //send request to email host
                email: this.refs.fieldEmail.state.value,
                firstName: this.refs.fieldName.state.value
            };

            this.refs.fieldEmail.clear();
            this.refs.fieldName.clear();
        }
    },
    render: function () {
        return(
            <div>
                <div className="col-sm-3">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <NameField type="First" ref="fieldName"/><br/>
                            <EmailField ref="fieldEmail"/>
                            <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = LeadCapture;