const Url = require('../models/Urls');

async function getAll (req, res) {
    try {
        const urls = await Url.all
        res.status(200).json(urls)
    } catch (err) {
        res.status(500).send({ err })
    }
}

async function addUrl (req, res) {
    try {
        const urls = await Url.urlShortner(req.body.shortUrl, req.body.longUrl)
        res.status(200).json(urls)
    } catch (err) {
        res.status(500).send({ err })
    }
}

module.exports = {getAll, addUrl}
