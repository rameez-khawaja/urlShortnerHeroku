const db = require('../dbconfig');

class Url {
    constructor(data){
        this.id = data.id
        this.shorturl = data.shorturl
        this.longurl = data.longurl
    }

    static get all(){
        return new Promise(async (res, req) => {
            try {
                let result = await db.query(`SELECT * FROM urls;`);
                let urls = result.rows.map(r => new Url(r))
                res(urls)
            } catch (err) {
                req(`Error retrieving urls: ${err.message}`)
            }
        })
    }
    static urlShortner(shorturl, longurl) {
        return new Promise (async (res, req) => {
            try {
                let addUrl = await db.query(`INSERT INTO urls (shorturl, longurl) VALUES ($1, $2) RETURNING *;`, [shorturl, longurl] )
                let resolveUrl = new Url(addUrl.rows[0])
                res(resolveUrl)
            } catch (err) {
                req('Error updating Habit');
            }
        });
    }
}

module.exports = Url;
