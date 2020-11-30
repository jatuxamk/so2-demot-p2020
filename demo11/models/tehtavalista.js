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

        yhteys.query("SELECT * FROM tehtavat", (err, rows)=> {

            callback(err, rows.map((rivi) => {
                if (rivi.suoritettu == 1) {
                    rivi.suoritettu = true;
                } else {
                    rivi.suoritettu = false;
                }
                return rivi;
            }) );

        });


    },
    
    "tallenna" : (data, callback) => {

        fs.writeFile("./models/data.json", JSON.stringify(data, null, 2), (err) => {

            callback(err);

        });

    }


}