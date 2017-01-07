// importer notre api
var axios = require('axios');

// Creer une constante qui va garder l'url de de la requete http (qui donne la
// temperature)
// ** Lettre capitate et _ : convention pour declarer une constante
const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=e79147490e7c69925fbd8d90360bfd4d&units=metric";





// ce que j'exporte quand on fait un require('openWeatherMap')
module.exports = {
    // return: parce que je veux envoyer une ou plusieurs valeurs (je veux utiliser ES6 Promises
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location)
        // `` : ES6 Feature => permet d'utiliser l'expression entre ${} comme
        // de la syntaxe javascript
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        return axios.get(requestUrl).then(function (res) {
            // Si un code et un message sont envoye : 
            if(res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else { // Sinon
                return res.data.main.temp;
            }
        }, function(res) { // si une erreur est creer
            // debugger;
            throw new Error(res.response.data.message);
        });
    }
}


