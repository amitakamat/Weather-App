var request = require('request');
const apiKey = "e208b16eda228e1382a32f72437949f7";
const weatherAPIURL = "http://api.openweathermap.org/data/2.5/weather?q=";
const paramCelsius = "&units=metric";
const paramFahrenheit = "&units=imperial";

module.exports = function(app) {
    app.get('/weather/:city', (req, res) => {
        console.log("Get request received");
        var url = weatherAPIURL + req.params.city + "&appid=" + apiKey + paramFahrenheit;
        request(url, function (error, response, body) {
            if (!error){
                var details = JSON.parse(body);
                if(response.statusCode == 200) {
                    var responseData = { code:200, data:details};
                    console.log(JSON.stringify(responseData));
                    res.statusCode = 200;
                    res.send(JSON.stringify(responseData));
                }
                else{
                    var responseData = { code:details.cod, data:details.message};
                    console.log(JSON.stringify(responseData));
                    res.send(JSON.stringify(responseData));
                }            
            }
        })
    });
};