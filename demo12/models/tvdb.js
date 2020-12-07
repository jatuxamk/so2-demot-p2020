const restify = require("restify-clients");

let apiUrl = "https://api.thetvdb.com";

let kayttajatiedot = {
                        "apikey": "BGX6UYSAR7CF7V37",
                        "userkey": "2YXQD8INL5NGAD25",
                        "username": "jatuxamk"
                    }

let client;

restify.createJsonClient(apiUrl).post("/login", kayttajatiedot, (err, req, res, data) => {

    let token = data.token;

    client = restify.createJSONClient({
                                        "url" : apiUrl,
                                        "headers" : {
                                                        "Authorization" : `Bearer ${token}`,
                                                        "Accept-Language" : "fi,en"
                                                    }
                                    });

});

module.exports = {

    "haeSuosikit" : () => {

        return new Promise((resolve, reject) =>{

            client.get("/user/favorites", (err, req, res, data) => {

                if (!err) {
                    resolve(data.data.favorites);                    
                } else {
                    reject(err);                    
                }

            });

        });

    },

    "haeSarjanTiedot" : (id) => {

        return new Promise((resolve, reject) => {

            client.get(`/series/${id}`, (err, req, res, sarjainfo) => {

                if (!err) {
                    resolve(sarjainfo.data);                    
                } else {
                    reject(err);                    
                }

            });

        });

    }, 

    "lisaaSuosikiksi" : (id) => {

        return new Promise((resolve, reject) => {

            client.put(`/user/favorites/${id}`, (err, req, res, info) => {

                if (!err) {
                    resolve(info);
                } else {
                    reject(err);
                }

            });


        });


    }



}