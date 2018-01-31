var React = require('react');
var createReactClass = require('create-react-class');
var ReactDOM = require('react-dom');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var WeatherDetails = require('./weatherdetails');

var Search =  createReactClass({
    
    handleSubmit: function() {
        var location = document.getElementById("location").value;
        var getUrl = "http://localhost:8000/weather/" + location;
        event.preventDefault();
        event.stopPropagation();
        var xmlhttp = new XMLHttpRequest(); 
        console.log("Making a GET request on " + getUrl);


        WeatherDetails.weather =  {weatherData: [{"code":200,"data":{"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],
        "base":"stations","main":{"temp":43.77,"pressure":1022,"humidity":75,"temp_min":41,"temp_max":46.4},"visibility":10000,"wind":{"speed":6.93},"clouds":{"all":12},
        "dt":1517332800,"sys":{"type":1,"id":5091,"message":0.0058,"country":"GB","sunrise":1517298051,"sunset":1517330857},"id":2643743,"name":"London","cod":200}}]};
        
        WeatherDetails.render();
        /*$.get(getUrl).done(function (data) {
            console.log(data);
        });
        $.ajax({
            type: 'get',
            url: getUrl,
            //data: formData,
            success: function(results) {
                console.log(results);
              //$('ul#response').html(results);
            }
          });
        xmlhttp.open("GET", url, true); 
        xmlhttp.send();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                data = this.responseText;
                data = JSON.parse(data);
                alert(data);
            }
        }*/
        //fetch(url, { method: 'get', mode: 'no-cors', }).then(() => { console.log('Works!'); });
        return false;
    },

    render: function () {
        return (
            <form id="geocoding_form" className="form-horizontal" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <div className="col-xs-12 col-md-6 col-md-offset-3">
                        <div className="input-group">
                            <input type="text" className="form-control" id="location" title="Enter a location name to get it's current weather details." placeholder="Enter a location" required/>
                            <button type="submit" className="input-group-btn glyphicon glyphicon-search search-btn" aria-hidden="true">
                            </button>
                        </div>
                    </div>
                    <label id="infoLabel">Enter a city name or city, country name. Eg Mumbai or Mumbai,India</label>
                </div>
            </form>
        );
    }
});

module.exports = Search;