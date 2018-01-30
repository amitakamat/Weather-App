var React = require('react');
var createReactClass = require('create-react-class');
var ReactDOM = require('react-dom');

var WeatherDetails =  createReactClass({
    render: function () {
        return (
            <div id="weatherContent" className="form-horizontal">
                <div className="list-group col-xs-12 col-md-6 col-md-offset-3">
                    <div className="content">
                        <label>Weather at San Francisco, CA is 70F</label>
                        <div class="params">
                            <label>Precipitation:</label>
                            <label>0%</label>
                        </div>
                        <div class="params">
                            <label>Humidity:</label>
                            <label>62%</label>
                        </div>
                        <div class="params">
                            <label htmlFor="rate">Wind:</label>
                            <label>7mph</label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = WeatherDetails;