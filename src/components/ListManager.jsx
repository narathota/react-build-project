var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({
    getInitialState: function () {
        return {items: [], newItemText: ''};
    },
    onChange: function (e) {
        this.setState({newItemText: e.target.value});
    },
    handleSubmit: function (e) {
        e.preventDefault();

        var currentItems = this.state.items;
        //this.state <- changeable data
        //react handle 'this' all the time

        currentItems.push(this.state.newItemText);

        this.setState({items: currentItems, newItemText: ''});
    },

    render: function () {
        return (
            <div className="">
                <div className="col-sm-2 sidebar">
                    <h2>Hello, World</h2>
                </div>
                <div className="col-sm-10 mainbody">
                    <div className="col-sm-6 room">
                        <h1>Brother's Room</h1>
                    </div>
                    <div className="col-sm-6 room">
                        <h1>Brother's Room</h1>
                    </div>
                    <div className="col-sm-6 room panel panel-danger">
                        <div className="panel-heading">
                            <h3>{this.props.title}</h3>
                        </div>
                        <div className="row panel-body">
                            <form onSubmit={this.handleSubmit}>
                                <div className="col-sm-9">
                                    <input className="form-control" onChange={this.onChange}
                                           value={this.state.newItemText}/>
                                </div>
                                <div className="col-sm-2">
                                    <button className="btn btn-primary">Add</button>
                                </div>
                            </form>
                            <List items={this.state.items}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ListManager;
