const express = require("express");

const app = express();
const portti = 3008;

app.get("/", (req, res) => {

    res.send("hei!");

});

app.listen(portti, () => {

    console.log(`Palvelin käynnistyi porttiin : ${portti}`);

});