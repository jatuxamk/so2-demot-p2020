const express = require("express");
const app = express();
const portti = 3005;

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {

    res.render("index", {});
    
});

app.listen(portti, () => {

    console.log(`Palvelin käynnistyi porttiin ${portti}`);

});