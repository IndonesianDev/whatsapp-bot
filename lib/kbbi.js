const { fetchJson } = require('../tools/fetcher')

/**
 * Get Indonesian word definition from KBBI (Kamus Besar Bahasa Indonesia).
 * @param {String} kata
 */
module.exports = kbbi = (kata) => new Promise((resolve, reject) => {
    console.log(`Searching definition for ${kata} in KBBI...`)
    fetchJson('https://api.i-tech.id/tools/kbbi?key=' + 'pab6wC-VGepxy-pWNxDH-4vJPi3-NxI0tg' + '&query=' + kata)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})
