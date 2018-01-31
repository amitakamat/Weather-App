const weatherRoutes = require('./weather_routes');

module.exports = function(app) {
    weatherRoutes(app);
};