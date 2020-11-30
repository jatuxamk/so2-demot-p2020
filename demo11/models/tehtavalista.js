const mysql = require("mysql");
const yhteys = mysql.createConnection({
                                        "host" : "localhost",
                                        "user"  : "root",
                                        "password" : "",
                                        "database" : "tehtavalista"
                                      });

yhteys.connect((err) => {

    if (!err) {

        console.log("Yhteys tietokantapalvelimeen avattu!");
    } else {

        throw err;
    }

});


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