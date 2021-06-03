const axios = require("axios").default;
const { config } = require("./config/config");
const readGsheet = require("./libs/readGsheet");
const createTable = require("./libs/createTable");

const express = require("express");
const app = express();
const ejs = require("ejs");

(async () => {
    console.log(await readGsheet(config.url));
})();

(async () => {
    console.log(await createTable(config.url));
})();

// app.use(express.static(__dirname + "/public"));
//---------- Arquivos Estaticos
app.use(express.static("./public"));

// Setup view engine
app.set("views", "./views");
app.set("view engine", "ejs");

// index page
app.get("/", function (req, res) {
    createTable(config.url).then((result) => {
        res.render("index", { innerTable: result });
    });
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
