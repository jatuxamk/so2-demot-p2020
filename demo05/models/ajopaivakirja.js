const fs = require("fs");
const tiedostonimi = "./models/matkat.json"

module.exports = {
    
    "haeKaikki" : (callback) => {

        fs.readFile(tiedostonimi, "utf-8", (err, data) => {

            if (err) throw err;
            
            callback(JSON.parse(data));

        });

    },

    "lisaaUusi" : (uusiMatka, callback) => {

        fs.readFile(tiedostonimi, "utf-8", (err, data) => {

            if (err) throw err;
            
            let matkat = JSON.parse(data);

            matkat.push(uusiMatka);

            fs.writeFile(tiedostonimi, JSON.stringify(matkat, null, 2), (err) => {

                if (err) throw err; 

                callback();

            });

        }); 

    }

}