const fs = require("fs")

module.exports = {

    "avaa" : (callback) => {

        fs.readFile("./models/data.json", (err, data) => {

            callback(err, JSON.parse(data));

        });

    },
    
    "tallenna" : (data, callback) => {

        fs.writeFile("./models/data.json", JSON.stringify(data, null, 2), (err) => {

            callback(err);

        });

    }


}