const tesseract = require("node-tesseract-ocr")

const imagetotext = (buffer) => {
    return new Promise((resolve, reject) => {
        const config = {
            lang: "eng",
            oem: 1,
            psm: 3,
                        }
        tesseract.recognize(buffer, config)
            .then(result => {
                resolve(result)
            })
            .catch(err => {
                reject(err)
            })
    })
}

module.exports = imagetotext
//INSTALL TESSERACT-OCR DULU YAAA ADA DI README MD
