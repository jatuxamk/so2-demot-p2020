const express = require("express");

const app = express();

const portti = 3004;

app.use(express.static("./public"));

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {

    let terveiset = "Heippa!";

    res.render("index", { "terveiset" : terveiset });

});

app.listen(portti, () => {

    console.log(`Palvelin käynnistyi porttiin: ${portti}`);

});