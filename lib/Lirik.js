require('dotenv').config()
var needle = require('needle')
const fs = require('fs-extra')
const setting = JSON.parse(fs.readFileSync('./settings/setting.json'))
let {apitech} = setting
const Lirik = (query) => new Promise((resolve, reject) => {
    var url = 'https://api.i-tech.id'

    needle(url + '/tools/lirik?key=' + apitech + '&query=' + query.replace(/ +/g, '+'), async (err, resp, body) => {
        try {
            if (body.status !== 'error') {
                resolve(body.result)
            } else {
                reject(`Lirik *${query}* tidak ditemukan.`)
            }
        } catch (err) {
            reject(err)
        }
    })
})

module.exports = Lirik
