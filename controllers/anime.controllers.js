const api = require("anime-vostfr");

const getAllAnime = async () => {
  const result = await api.loadAnime();
  return result;
};

module.exports.searchAnime = async (req, res) => {
  const { name } = req.body
  const stringName = name.toString()

  try {
    const data = await getAllAnime()
    const animes = await api.searchAnime(data, stringName)
    if (animes.length < 0 || animes.length === 0) return res.status(404).json({ message: "Anime not found" })

    res.status(200).send({animes})
    
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
};

module.exports.getAnime = async (req, res) => {
  const { url } = req.body
  const stringUrl = url.toString()

  try {
    const animeInfo = await api.getMoreInformation(stringUrl)

    res.status(200).send({animeInfo})
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}

module.exports.getEmbed = async (req, res) => {
  const { url } = req.body
  const stringUrl = url.toString()

  try {
    const ep = await api.getEmbed(stringUrl)

    res.status(200).send({ep})
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}