const express = require("express");
const app = express();
const cors = require("cors");
const animeRoute = require("./routes/anime.routes");

app.use(cors());
// Initialisation de Express pour utiliser le body des requêtes au format UrlEncoded et JSON
app.use(express.urlencoded({ extended: true }))
app.use(express.json()) // analyse les données entrante dans l'api, voir la doc express

app.use("/api/", animeRoute);

app.listen(5500, () => console.log("Listening on Port 5500"));