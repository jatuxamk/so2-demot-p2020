const restify = require("restify");
const jwt = require("restify-jwt-community");

const server = restify.createServer();

const corsMiddleware = require("restify-cors-middleware");

const cors = corsMiddleware({
                                "origins" : ["http://localhost"]
                            });

const portti = 3011;

const tehtavalista = require("./models/tehtavalista");

server.pre(restify.pre.sanitizePath()); // korjataan ylimääräiset kauttaviivat
server.pre(cors.preflight); // Tehdään pyyntöjä edeltävät CORS-asetukset
server.use(restify.plugins.bodyParser()); // Otetaan mukaan bodyParser
server.use(cors.actual); // Kytketään CORSasetukset/otsikot jokaiseen pyynttöön

server.use(jwt({ "secret" : "SuuriSalaisuus2020!!" }, (err, req, res, next) => { // Tsekataan onko mukana JSON Web Token

    if (err) {
        res.send(401, "Tätä REST APIa voi käyttää ainoastaan asianmukaisella JSON Web Tokenilla. Ota yhteyttä ylläpitoon.");
    } else {
        return next();        
    }

})); 

server.get("/api/tehtavalista", (req, res, next) => {

    tehtavalista.avaa((err, data) => {

        if (!err) {

            res.send(200, data);

        } else {

            res.send(500, {"virhe" : "Tiedostoa ei voitu avata"});
        }    

    }); 

    return next();
});

server.put("/api/tehtavalista", (req, res, next) => {

    tehtavalista.tallenna(req.body, (err) => {

        if (!err) {

            res.send(200);

        } else {

            res.send(500, {"virhe" : "Tiedostoa ei voitu avata"});

        }

    }); 

    return next();
});

server.listen(portti, () => {

    console.log(`Palvelin käynnistyi porttiin ${portti}`);

});