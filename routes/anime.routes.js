const express = require("express");
const router = express.Router();
const animeController = require("../controllers/anime.controllers.js");

router.get("/search", animeController.searchAnime);
router.get("/anime", animeController.getAnime);
router.get("/anime/ep", animeController.getEmbed);

module.exports = router;