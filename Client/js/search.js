var React = require('react');
var createReactClass = require('create-react-class');
var ReactDOM = require('react-dom');

var Search =  createReactClass({
    render: function () {
        return (
            <form id="geocoding_form" className="form-horizontal" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <div className="col-xs-12 col-md-6 col-md-offset-3">
                        <div className="input-group">
                            <input type="text" className="form-control" id="address" title="Enter a location name to get it's current weather details." placeholder="Enter a location" 
                            onChange={this.handleChange} />
                            <span className="input-group-btn">
                                <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                            </span>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
});

module.exports = Search;