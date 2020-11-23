const restify = require("restify");

const server = restify.createServer();

const portti = 3010;

const tehtavalista = require("./models/tehtavalista");


server.pre(restify.pre.sanitizePath()); // korjataan ylimääräiset kauttaviivat
server.use(restify.plugins.bodyParser()); // Otetaan mukaan bodyParser


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


server.get("/api/restesim", (req, res, next) => {

    let resdata = {
                    "metodi" : "GET",
                    "toiminto" : "Haetaan kaikki restesim-kokoelman elementit"
                  }

    res.send(resdata);

    return next();

});

server.get("/api/restesim/:id", (req, res, next) => {

    let resdata = {
                    "metodi" : "GET",
                    "toiminto" : "Haetaan tietty elementti restesim-kokoelmasta. Elementti on tarkennettu id:llä.",
                    "id" : req.params.id
                  }

    res.send(resdata);

    return next();

});


server.post("/api/restesim", (req, res, next) => {

    let resdata = {
                    "metodi" : "POST",
                    "toiminto" : "Lisätään uusi elementti restesim-kokoelmaan seuraavin tiedoin",
                    "tiedot" : req.body
                  }

    res.send(resdata);

    return next();

});

server.put("/api/restesim/:id", (req, res, next) => {

    let resdata = {
                    "metodi" : "PUT",
                    "toiminto" : "Muokataan tietyn elementin (id) tietoja restesim-kokoelmassa seuraavin tiedoin",
                    "id" : req.params.id,
                    "tiedot" : req.body
                  }

    res.send(resdata);

    return next();

});


server.del("/api/restesim/:id", (req, res, next) => {

    let resdata = {
                    "metodi" : "DELETE",
                    "toiminto" : "Poistetaan tietty elementti restesim-kokoelmasta",
                    "id" : req.params.id
                  }

    res.send(resdata);

    return next();

});

server.listen(portti, () => {

    console.log(`Palvelin käynnistyi porttiin ${portti}`);

});