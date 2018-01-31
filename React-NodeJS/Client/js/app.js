var React = require('react');
var createReactClass = require('create-react-class');
var ReactDOM = require('react-dom');
var Search = require('./search');
var WeatherDetails = require('./weatherdetails');

var Header = createReactClass({
    render: function () {
        return (
            <header>
                <h1>Weather Application</h1>
            </header>
        );
    }
});

var App = createReactClass({
    render: function () {
        return (
            <div>
                <Header/>
                <Search onSearch={this.searchForAddress} />
                <WeatherDetails/>
            </div>
        );
    }
});

ReactDOM.render(<App/>,  document.getElementById("app"));
