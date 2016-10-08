var Fetch = require('whatwg-fetch');
var baseURL = 'http://localhost:6060';

var service = {
    get: function (url) {
        return fetch(baseURL + url)
            .then(function (response) {
                return response.json();
            });
    }
}

module.exports = service;