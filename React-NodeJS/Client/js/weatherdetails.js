var React = require('react');
var createReactClass = require('create-react-class');
var ReactDOM = require('react-dom');
var location = {weatherData: [{"code":200,"data":{"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],
        "base":"stations","main":{"temp":43.77,"pressure":1022,"humidity":75,"temp_min":41,"temp_max":46.4},"visibility":10000,"wind":{"speed":6.93},"clouds":{"all":12},
        "dt":1517332800,"sys":{"type":1,"id":5091,"message":0.0058,"country":"GB","sunrise":1517298051,"sunset":1517330857},"id":2643743,"name":"London","cod":200}}]};

var WeatherDetails =  createReactClass({
    weather: [],
    render: function () {
        console.log(this.weather);
        if(this.weather == 0){
            return null;
        }
        var imgSrc= "http://openweathermap.org/img/w/" + this.weather.weatherData[0].data.weather[0].icon + ".png";
        return (
            <div id="weatherContent" className="form-horizontal">
                <div className="list-group col-xs-12 col-md-6 col-md-offset-3">
                    <div className="content">
                        <label id="headerLabel">Weather at {this.weather.weatherData[0].data.name}, {this.weather.weatherData[0].data.sys.country}.</label>
                        <label id="tempLabel">{this.weather.weatherData[0].data.main.temp} F</label>
                        <img src={imgSrc} id="weatherIcon"/>
                        <div>
                            <div>
                                <label>{this.weather.weatherData[0].data.weather[0].description}</label>
                            </div>
                            <div>
                                <label>Humidity: {this.weather.weatherData[0].data.main.humidity}%</label>
                            </div>
                            <div>
                                <label>Wind: {this.weather.weatherData[0].data.wind.speed} mph</label>
                            </div>
                            <div>
                                <label>Pressure: {this.weather.weatherData[0].data.main.temp} hPa</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = WeatherDetails;