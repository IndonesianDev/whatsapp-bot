const translate = require('@vitalets/google-translate-api')

/**
 * Translate Text
 * @param  {String} text
 * @param  {String} lang
 */

module.exports = doing = (text, lang) => new Promise((resolve, reject) => {
    console.log(`Translate text to ${lang}...`)
    translate(text, { tld: 'cn', to: lang })
        .then((text) => resolve(text.data[0]))
    translate(text, { client: 'gtx', to: lang })
        .then((res) => resolve(res.text))
        .catch((err) => reject(err))
})
