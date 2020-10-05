const fs = require("fs");
const tiedostonimi = "./models/matkat.json"

module.exports = {
    
    "haeKaikki" : (callback) => {

        fs.readFile(tiedostonimi, "utf-8", (err, data) => {

            if (err) throw err;
            
            callback(JSON.parse(data));

        });

    },

    "lisaaUusi" : () => {

        
    }

}