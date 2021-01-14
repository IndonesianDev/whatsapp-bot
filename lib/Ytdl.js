require('dotenv').config()
var needle = require('needle')

const Ytdl = (link) => new Promise((resolve, reject) => {
    var url = 'https://api.i-tech.id'
    var key = process.env.key

    needle(url + '/dl/yt?key=' + key + '&link=' + link, async (err, resp, body) => {
        try {
            if (body.status !== 'error') {
                resolve(body)
            } else {
                reject(`Error, periksa kembali link dan coba lagi.`)
            }
        } catch (err) {
            reject(err)
        }
    })
})

module.exports = Ytdl