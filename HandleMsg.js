require('dotenv').config()
const { decryptMedia } = require('@open-wa/wa-automate')
const moment = require('moment-timezone')
moment.tz.setDefault('Asia/Jakarta').locale('id')
const axios = require('axios')
const { spawn } = require('child_process')
const fetch = require('node-fetch')
const appRoot = require('app-root-path')
const emojiUnicode = require('emoji-unicode')
const toMs = require('ms')
const low = require('lowdb')
const requests = require("node-fetch")
const ms = require('parse-ms')
const FileSync = require('lowdb/adapters/FileSync')
const feature = require('./lib/poll');
const ffmpeg = require('fluent-ffmpeg')
const util = require('util')
const quiziz = require('quizizz.js')
const hackq = new quiziz.QuizizzClient();
const { Readable, Writable } = require('stream')
const db_group = new FileSync(appRoot+'/lib/data/group.json')
const db = low(db_group)
const notice = ['piyobot', 'piyobot']
const { getUser, getPost, searchUser } = require('./lib/Insta')
const path = require('path')
const bent = require('bent')
const Math_js = require('mathjs')
const fs = require('fs-extra')
const errorImg = 'https://i.imgur.com/VKoNMIR.png'
db.defaults({ group: []}).write()
var tanggal  = moment.tz('Asia/Jakarta').format('YYYY-MM-DD')

const { 
    removeBackgroundFromImageBase64
} = require('remove.bg')

const {
    exec
} = require('child_process')
const {
    insert
} = require('././database')
const { 
    menuId,
    menupremium, 
    menuhiburan,
    nsfwmenu,
    menulama,
    menubaru,
    diamondd,
    payment,
    mentol,
    wibuarea,
    Toxic,
    menunulis,
    help,
    diamond,
    rules,
    ownermenu,
    songmenu,
    menutobat,
    menupenting,
    Jsholat,
    tiktokmenu,
    Lirik,
    cekResi, 
    urlShortener, 
    meme, 
    translate, 
    nekopoi,
    brainly,
    getLocationData,
    images,
    premium,
    sewa,
    resep,
    nsfw,
    ptlcewek,
    kbbi,
    rugapoi,
    rugaapi
} = require('./lib')

const { 
    msgFilter, 
    color, 
    processTime,
    createcode,
    isUrl
} = require('./utils')

const { uploadImages } = require('./utils/fetcher')
const { imagetotext  } = require('./lib/rdt')

//////////////////////////////FOLDER SYSTEM///////////////////////////////////
const banned = JSON.parse(fs.readFileSync('./settings/banned.json'))
const simi = JSON.parse(fs.readFileSync('./settings/simi.json'))
const chatt = JSON.parse(fs.readFileSync('./settings/piyo.json'))
const ngegas = JSON.parse(fs.readFileSync('./settings/ngegas.json'))
const setting = JSON.parse(fs.readFileSync('./settings/setting.json'))
const isPorn = JSON.parse(fs.readFileSync('./settings/antiporn.json'))
const uang = JSON.parse(fs.readFileSync('./settings/uang.json'))
const kuis = JSON.parse(fs.readFileSync('./settings/kuis.json'))
const code15 = JSON.parse(fs.readFileSync('./settings/code15.json'))
const code30 = JSON.parse(fs.readFileSync('./settings/code30.json'))
const code60 = JSON.parse(fs.readFileSync('./settings/code60.json'))
const premiumcode = JSON.parse(fs.readFileSync('./settings/premiumcode.json'))
const _nsfw = JSON.parse(fs.readFileSync('./settings/nsfw.json'))
const _welcome = JSON.parse(fs.readFileSync('./settings/welcome.json'))
const _reminder = JSON.parse(fs.readFileSync('./settings/reminder.json'))
const _autostiker = JSON.parse(fs.readFileSync('./settings/autostiker.json'))
const _afk = JSON.parse(fs.readFileSync('./settings/afk.json'))
const _premium = JSON.parse(fs.readFileSync('./settings/premium.json'))
const _sewa = JSON.parse(fs.readFileSync('./settings/sewa.json'))
const _biodata = JSON.parse(fs.readFileSync('./settings/biodata.json'))
const _registered = JSON.parse(fs.readFileSync('./settings/registered.json'))
const _tebak = JSON.parse(fs.readFileSync('./settings/tebakgambar.json'))
///////////////////////////////////////////////////////////////////////////////


/////////////////////////////////LET SYSTEM////////////////////////////////////
let dbcot = JSON.parse(fs.readFileSync('./settings/bacot.json'))
let updatepiyobot = JSON.parse(fs.readFileSync('./settings/update.json'))
let adminNumber = JSON.parse(fs.readFileSync('./settings/admin.json'))
let limit = JSON.parse(fs.readFileSync('./settings/limit.json'))
let stickerspam = JSON.parse(fs.readFileSync('./settings/stickerspam.json'))
let antisticker = JSON.parse(fs.readFileSync('./settings/antisticker.json'))
///////////////////////////////////////////////////////////////////////////////

/////////////////////////////////SETTING///////////////////////////////////////
let { 
    ownerNumber,
    groupLimit,
    limitCount, 
    memberLimit,
    prefix,
    apikeyz,
    lolhuman,
    vhtearkey
} = setting
///////////////////////////////API JSON///////////////////////////////////////
const {
    apiNoBg,
    apiSimi
} = JSON.parse(fs.readFileSync('./settings/api.json'))
//////////////////////////////////////////////////////////////////////////////

function formatin(duit){
    let	reverse = duit.toString().split('').reverse().join('');
    let ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join('.').split('').reverse().join('');
    return ribuan;
}

const inArray = (needle, haystack) => {
    let length = haystack.length;
    for(let i = 0; i < length; i++) {
    if(haystack[i].id == needle) return i;
    }
    return false;
}

module.exports = HandleMsg = async (piyo, message) => {
    try {
        const { type, id, content, from, t, sender, isGroupMsg, chat, chatId, caption, isMedia, mimetype, quotedMsg, author, quotedMsgObj, mentionedJidList } = message
        let { body } = message
        var { items, name, formattedTitle } = chat
        let { text } = message
        let { pushname, verifiedName, formattedName } = sender
        pushname = pushname || verifiedName || formattedName // verifiedName is the name of someone who uses a business account
        const botNumber = await piyo.getHostNumber() + '@c.us'
        const groupId = isGroupMsg ? chat.groupMetadata.id : ''
        const groupAdmins = isGroupMsg ? await piyo.getGroupAdmins(groupId) : ''
        const groupMembers = isGroupMsg ? await piyo.getGroupMembersId(groupId) : ''
        const isOwner = sender.id === ownerNumber.includes
        const isGroupAdmins = groupAdmins.includes(sender.id) || false
        const chats = (type === 'chat') ? body : (type === 'image' || type === 'video') ? caption : ''
        const pengirim = sender.id
	const pengirimm = JSON.parse(fs.readFileSync('./settings/registered.json'))
        const uwong = pengirimm[Math.floor(Math.random() * pengirimm.length)];
        const serial = sender.id
        const time = moment(t * 1000).format('DD/MM/YY HH:mm:ss')
        const timee = moment(t * 1000).format('HH:mm:ss')
        const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
        const { ind } = require('./message/text/lang/')
        const isAdmin = adminNumber.includes(sender.id)
	const isPremium = premium.checkPremiumUser(sender.id, _premium)
	const isSewa = sewa.checkSewa(chat.id , _sewa)
        const userId = sender.id.substring(9, 13)
        const isRegistered = _registered.includes(sender.id)
        global.pollfile = 'poll_Config_' + chat.id + '.json'
        global.voterslistfile = 'poll_voters_Config_' + chat.id + '.json'
        const isAutoStikerOn = isGroupMsg ? _autostiker.includes(chat.id) : false
        // Bot Prefix
        body = (type === 'chat' && body.startsWith(prefix)) ? body : (((type === 'image' || type === 'video') && caption) && caption.startsWith(prefix)) ? caption : ''
        const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        const commandd = caption || body || ''
        const arg = body.substring(body.indexOf(' ') + 1)
        const validMessage = caption ? caption : body;
        const arguments = validMessage.trim().split(' ').slice(1)
        const args = body.trim().split(/ +/).slice(1)
        const argv = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        const isCmd = body.startsWith(prefix)
        const arghh =  commandd.split(' ')
        const argus = commandd.split(' ')
        const uaOverride = process.env.UserAgent
        const q = args.join(' ')
        const ar = body.trim().split(/ +/).slice(1)
        const url = args.length !== 0 ? args[0] : ''
        const errorurl2 = 'https://steamuserimages-a.akamaihd.net/ugc/954087817129084207/5B7E46EE484181A676C02DFCAD48ECB1C74BC423/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
        const errorur121= 'https://i.imgur.com/VKoNMIR.png'
        const _antilink = JSON.parse(fs.readFileSync('./settings/antilink.json'))
	const isNsfw = isGroupMsg ? _nsfw.includes(chat.id) : false
        const isWelcomeOn = isGroupMsg ? _welcome.includes(chat.id) : false
	const isKuis = isGroupMsg ? kuis.includes(chat.id) : false
	const isAntiPorn = isGroupMsg ? isPorn.includes(chat.id) : false
        const isImage = type === 'image'
        const reason = q ? q : 'Nothing.'
        const isQuotedImage = quotedMsg && quotedMsg.type === 'image'
        const isQuotedVideo = quotedMsg && quotedMsg.type === 'video'
        const isQuotedFile  = quotedMsg && quotedMsg.type === 'file'
        const isQuotedAudio  = quotedMsg && quotedMsg.type === 'audio'
        const isQuotedGif = quotedMsg && quotedMsg.type === 'gif'
	const isQuotedSticker = quotedMsg && quotedMsg.type === 'sticker'
        const cecan = [
            {
            lahwoi : "Pacar piyo yang ke 1",
            imagex : "https://i.ibb.co/VT4ggGj/Instagram.jpg",
            },
            {
            lahwoi : "Pacar piyo yang ke 2",
            imagex : "https://i.ibb.co/x1nD1HD/Instagram-1.jpg",
            },
            {
            lahwoi : "Pacar piyo yang ke 3",
            imagex : "https://i.ibb.co/ZXPPFKF/Argumentasi-Dimensi.jpg",
            },
            {
            lahwoi : "Pacar piyo yang ke 4",   
            imagex : "https://i.ibb.co/NpY5ZBR/image.jpg",
            },
            {
            lahwoi : "Pacar piyo yang ke 5",
            imagex : "https://i.ibb.co/PWsL6HF/download-1.jpg",
            },
            {
            lahwoi : "Pacar piyo yang ke 6",
            imagex :"https://i.ibb.co/JFkDWjB/RASANYA-ANJING-BANGET.jpg",
            },
            {
            lahwoi : "Pacar piyo yang ke 7",
            imagex : "https://i.ibb.co/5W2gMq6/download-2.jpg",
            },
            {
            lahwoi : "Pacar piyo yang ke 8",
            imagex : "https://i.ibb.co/QNWhdgC/download-3.jpg",
            },
            {
            lahwoi : "Pacar piyo yang ke terakhir",
            imagex : "https://i.ibb.co/RS1vWC3/Blur.jpg"
            }
        ]
        const santet = [
            'Muntah Paku',
            'Meninggoy',
            'Berak Paku',
            'Muntah Rambut',
            'Ketempelan MONYET!!!',
            'Berak di Celana Terus',
            'Menjadi Gila',
            'Menjadi manusiawi',
            'jomblo selamanya',
            'ga bisa berak',
            'ketiban pesawat',
	    'jadi anak mulung',
	    'ga jadi pacar zeus',
	    'jadi jelek'
            ]
	
        const kutuk = [
            'Sapi',
            'Batu',
            'Babi',
            'Anak soleh dan soleha',
            'pohon pisang',
            'janda',
            'bangsat',
            'buaya',
            'Jangkrik',
            'Kambbiingg',
            'Bajing',
            'kang seblak',
            'kang gorengan',
            'kang siomay',
            'badut ancol',
            'Tai',
            'Kebo',
            'Badak biar Asli',
            'tai kotok',
            'Bwebwek',
            'Orang Suksesss...... tapi boong',
            'Beban Keluarga' //tambahin  aja
            ]
        const estetek = [
            "https://i.ibb.co/Xk1kggV/Aesthetic-Wallpaper-for-Phone.jpg",
            "https://i.ibb.co/wBNyv8X/image.jpg",
            "https://i.ibb.co/hgcJbg7/Leaving-Facebook.jpg",
            "https://i.ibb.co/27TW3bT/Pinterest.jpg",
            "https://i.ibb.co/2MR16Ct/Image-about-vintage-in-ALittle-Bit-Of-This-And-That-by-Little-Nerdy-Gnome.jpg",
            "https://i.ibb.co/WfrzTWH/minteyroul-on-We-Heart-It.jpg",
            "https://i.ibb.co/dMpkfWT/1001-Kreative-Aesthetic-Wallpaper-Ideen-f-r-das-Handy.jpg",
            "https://i.ibb.co/cN3Br2J/red-grunge-wallpaper-dark-edgy-aesthetic-collage-background-trendy-cool-dark-red-iphone-wallpaper.jpg",
            "https://i.ibb.co/c8QMXZv/ee16de425985d4a1b628dddc1461b546.jpg"
        ]
        const kapan = [
            '1 Minggu lagi',
            '1 Bulan lagi',
            '1 Tahun lagi',
            '100 tahun lagi',
            'gatau',
            '2030'
            ]
        
        const rate = [
            '100%',
            '95%',
            '90%',
            '85%',
            '80%',
            '75%',
            '70%',
            '65%',
            '60%',
            '55%',
            '50%',
            '45%',
            '40%',
            '35%',
            '30%',
            '25%',
            '20%',
            '15%',
            '10%',
            '5%'
            ]
        const nomormutualan = ['Isi nomor yang ada di registered']
	// [IDENTIFY]
	const isOwnerBot = ownerNumber.includes(pengirim)
        const isBanned = banned.includes(pengirim)
        const isSimi = simi.includes(chatId)
        const isChat = chatt.includes(chatId)
        const isDetectorOn = _antilink.includes(chat.id)
        const isInviteLink = await piyo.inviteInfo(body)
	const isNgegas = ngegas.includes(chatId)
	const isKode = premiumcode.includes(q)
        const AntiStickerSpam = antisticker.includes(chatId)
        // Log
        if (isCmd && !isGroupMsg && !isBanned) console.log(color('[CMD]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        if (isCmd && isGroupMsg && !isBanned) console.log(color('[CMD]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle))

        // IsBanned
        if (isCmd && isBanned && !isGroupMsg) return console.log(color('[BAN]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        if (isCmd && isBanned && isGroupMsg) return console.log(color('[BAN]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle))
	    
// Serial Number Generator
function GenerateRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Generates a random alphanumberic character
function GenerateRandomChar() {
    var chars = "1234567890ABCDEFGIJKLMNOPQRSTUVWXYZ";
    var randomNumber = GenerateRandomNumber(0,chars.length - 1);
    return chars[randomNumber];
}
// Generates a Serial Number, based on a certain mask
function GenerateSerialNumber(mask){
    var serialNumber = "";
    if(mask != null){
        for(var i=0; i < mask.length; i++){
            var maskChar = mask[i];
            serialNumber += maskChar == "0" ? GenerateRandomChar() : maskChar;
        }
    }
    return serialNumber;
}

const SN = GenerateSerialNumber("000000000000000000000000")
////////////////////////////////////////AFK///////////////////////////////////////////
const addAfk = (userId, time) => {
            let obj = {id: `${userId}`, time: `${time}` , reason: `${reason}`}
            _afk.push(obj)
            fs.writeFileSync('./settings/afk.json', JSON.stringify(_afk))
        }

        const getAfk = (userId) => {
            let isAfk = false
            Object.keys(_afk).forEach((i) => {
                if (_afk[i].id === userId) {
                    isAfk = true
                }
            })
            return isAfk
        }

const getAfkReason = (userId) => {
            let position = false
            Object.keys(_afk).forEach((i) => {
                if (_afk[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _afk[position].reason
            }
        }

        const getAfkTime = (userId) => {
            let position = false
            Object.keys(_afk).forEach((i) => {
                if (_afk[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _afk[position].time
            }
        }

        const getAfkId = (userId) => {
            let position = false
            Object.keys(_afk).forEach((i) => {
                if (_afk[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _afk[position].id
            }
        }
////////////////////////////////////////AFK///////////////////////////////////////////
////////////////////////////////REPLY WITH AUDIO////////////////////////////////////////
const vn = [
        './media/an2.ogg',
        './media/an1.ogg',
        './media/ana4.ogg'
        ]
//AUTOMATE
if (chats == 'assalamualaikum'){
    piyo.sendPtt(from, './media/ana3.ogg' , id)
}
if (chats == 'Assalamualaikum'){
    piyo.sendPtt(from, './media/ana3.ogg' , id)
}
if (chats == 'p'){
    if (!isGroupMsg){
        let randomvn = vn[Math.floor(Math.random() * vn.length)]
        piyo.sendPtt(from , randomvn , id)
}
}
if (chats == 'P'){
    if (!isGroupMsg){
        let randomvn = vn[Math.floor(Math.random() * vn.length)]
        piyo.sendPtt(from , randomvn , id)
}
}
if (chats == 'bot'){
    if (!isGroupMsg){
        let randomvn = vn[Math.floor(Math.random() * vn.length)]
        piyo.sendPtt(from , randomvn , id)
}
}
if (chats == 'bot'){
    if (isGroupMsg){
        let randomvn = vn[Math.floor(Math.random() * vn.length)]
        piyo.sendPtt(from , randomvn , id)
}
}
if (chats == 'bot ini owner'){
    if (isOwnerBot){
        piyo.sendPtt(from , './media/owner.ogg' , id)
}
}
if (chats == 'kontol'){
    piyo.sendPtt(from, './media/ana2.ogg' , id)
}
if (chats == 'memek'){
    piyo.sendPtt(from, './media/ana2.ogg' , id)
}
if (chats == 'anjing'){
    piyo.sendPtt(from, './media/ana2.ogg' , id)
}
if (chats == 'bangsat'){
    piyo.sendPtt(from, './media/ana2.ogg' , id)
}
if (chats == 'ngentot'){
    piyo.sendPtt(from, './media/ana2.ogg' , id)
}
if (chats == 'babi'){
    piyo.sendPtt(from, './media/ana2.ogg' , id)
}
if (chats == 'monyet'){
    piyo.sendPtt(from, './media/ana2.ogg' , id)
}
if (chats == 'Bot'){
        let randomvn = vn[Math.floor(Math.random() * vn.length)]
        piyo.sendPtt(from , randomvn , id)
}
//////////////////////////////////////REMINDER///////////////////////////////////////
const addReminder = (userId, message, time) => {
    const obj = { id: userId, msg: message, time: Date.now() + toMs(time) }
    _reminder.push(obj)
    fs.writeFileSync('./settings/reminder.json', JSON.stringify(_reminder))
}

const getReminderTime = (userId) => {
    let position = false
    Object.keys(_reminder).forEach((i) => {
        if(_reminder[i].id === userId) {
            position = i
        }
    })
    if (position !== false) {
        return _reminder[position].time
    }
}

const getReminderMsg = (userId) => {
    let position = false
    Object.keys(_reminder).forEach((i) => {
        if (_reminder[i].id === userId) {
            position = i
        }
    })
    if (position !== false) {
        return _reminder[position].msg
    }
}

const getReminderPosition = (userId) => {
    let position = false
    Object.keys(_reminder).forEach((i) => {
        if (_reminder[i].id === userId) {
            position = i
        }
    })
    return position
}
//////////////////////////////////////TEBAK GAMBAR/////////////////////////////////
if (isGroupMsg){
if (_tebak.includes(chats))
    {
        await piyo.reply(from, `Jawaban Benar , Kamu mendapatkan 5 Points` , id)
        let tebak = _tebak.indexOf(chats);
        _tebak.splice(tebak,1)
        fs.writeFileSync('./settings/tebakgambar.json', JSON.stringify(_tebak , null, 2))
        let kuiis = kuis.indexOf(chatId)
        kuis.splice(kuiis,1)
        fs.writeFileSync('./settings/kuis.json', JSON.stringify(kuis , null, 2))
    }
}
//////////////////////////////////////PREMIUM CODE///////////////////////////////////
if (code15.includes(q))
{
    let hari = '15'
    await piyo.reply(from, `Sukses Memasukan Premium Code 15 Hari` , id)
    premium.addPremiumUser(sender.id, '15d', _premium)
    await piyo.reply(from, `*「 PREMIUM 15 HARI 」*\n\n➸ *NAMA*: ${pushname}\n➸ *ID*: ${sender.id}\n➸ *Expired*: ${ms(toMs(hari)).days} day(s) ${ms(toMs(hari)).hours} hour(s) ${ms(toMs(hari)).minutes} minute(s)`, id)
    let codee = code15.indexOf(q);
    code15.splice(codee,1)
    fs.writeFileSync('./settings/code15.json', JSON.stringify(code15 , null, 2))
    let prem = premiumcode.indexOf(q);
    premiumcode.splice(prem,1)
    fs.writeFileSync('./settings/premiumcode.json', JSON.stringify(premiumcode , null, 2))
}

if (code30.includes(q))
{
    let hari = '30d'
    await piyo.reply(from, `Sukses Memasukan Premium Code 30 Hari / 1BULAN` , id)
    premium.addPremiumUser(sender.id, '30d', _premium)
    await piyo.reply(from, `*「 PREMIUM 30 HARI 」*\n\n➸ *NAMA*: ${pushname}\n➸ *ID*: ${sender.id}\n➸ *Expired*: ${ms(toMs(hari)).days} day(s) ${ms(toMs(hari)).hours} hour(s) ${ms(toMs(hari)).minutes} minute(s)`, id)
    let codeee = code30.indexOf(q);
    code30.splice(codeee,1)
    fs.writeFileSync('./settings/code30.json', JSON.stringify(code30 , null, 2))
    let prem = premiumcode.indexOf(q);
    premiumcode.splice(prem,1)
    fs.writeFileSync('./settings/premiumcode.json', JSON.stringify(premiumcode , null, 2))
}

if (code60.includes(q))
{
    let hari = '60d'
    await piyo.reply(from, `Sukses Memasukan Premium Code 60 Hari / 2BULAN` , id)
    premium.addPremiumUser(sender.id, '60d', _premium)
    await piyo.reply(from, `*「 PREMIUM 60 HARI 」*\n\n➸ *NAMA*: ${pushname}\n➸ *ID*: ${sender.id}\n➸ *Expired*: ${ms(toMs(hari)).days} day(s) ${ms(toMs(hari)).hours} hour(s) ${ms(toMs(hari)).minutes} minute(s)`, id)
    let codeeee = code60.indexOf(q);
    code60.splice(codeeee,1)
    fs.writeFileSync('./settings/code60.json', JSON.stringify(code60 , null, 2))
    let prem = premiumcode.indexOf(q);
    premiumcode.splice(prem,1)
    fs.writeFileSync('./settings/premiumcode.json', JSON.stringify(premiumcode , null, 2))
}
//////////////////////////////////////REMINDER///////////////////////////////////////
const isAfkOn = getAfk(sender.id)
// AFK
        if (isGroupMsg) {
            const checking = getAfk(sender.id)
            for (let ment of mentionedJidList) {
                if (getAfk(ment)) {
                    const getId = getAfkId(ment)
                    const getReason = getAfkReason(getId)
                    const getTime = getAfkTime(getId)
                    await piyo.reply(from, ind.afkMentioned(getReason, getTime), id)
                }
            }
            if (checking && !isCmd) {
                _afk.splice(sender.id, 1)
                fs.writeFileSync('./settings/afk.json', JSON.stringify(_afk))
                await piyo.sendText(from, ind.afkDone(pushname))
            }
        }
//////////////////////////////////////FUNCTION BALANCE/////////////////////////////////////
        const addATM = (serial) => {
            const obj = {id: serial, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./settings/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (serial, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === serial) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount;
                fs.writeFileSync('./settings/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (serial) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === serial) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (serial, amount) => {
            let position = false
            Object.keys(limit).forEach((i) => {
                if (limit[i].id === serial) {
                    position = i
                }
            })
            if (position !== false) {
                limit[position].limit -= amount;
                fs.writeFileSync('./settings/limit.json', JSON.stringify(limit))
            }
        }
            
        const confirmATM = (serial, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === serial) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./settings/uang.json', JSON.stringify(uang))
            }
        }
	
            if (isRegistered) {
            const checkATM = checkATMuser(serial)
            try {
                if (checkATM === undefined) addATM(serial)
                const uangsaku = Math.floor(Math.random() * 10) + 50
                addKoinUser(serial, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
//////////////////////////////////////ANTI STICKER SPAM////////////////////////////////
function isStickerMsg(id){
    if (isOwnerBot, isAdmin) {return false;}
    let found = false;
    for (let i of stickerspam){
        if(i.id === id){
            if (i.msg >= 5) {
                found === true 
                piyo.reply(from, '*「 𝗔𝗡𝗧𝗜 𝗦𝗣𝗔𝗠 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 」*\nKamu telah SPAM STICKER di grup, kamu akan di kick otomatis oleh Piyobot', message.id).then(() => {
                    piyo.removeParticipant(groupId, id)
                }).then(() => {
                    const cus = id
                    var found = false
                    Object.keys(stickerspam).forEach((i) => {
                        if(stickerspam[i].id == cus){
                            found = i
                        }
                    })
                    if (found !== false) {
                        stickerspam[found].msg = 1;
                        const resultx = 'Database telah direset!'
                        console.log(stickerspam[found])
                        fs.writeFileSync('./settings/stickerspam.json',JSON.stringify(stickerspam));
                        piyo.reply(from, resultx)
                    } else {
                            piyo.reply(from, `Nomor itu tidak terdaftar didalam database!`, id)
                    }
                })
                return true;
            }else{
                found === true
                return false;
            }   
        }
    }
    if (found === false){
        let obj = {id: `${id}`, msg:1};
        stickerspam.push(obj);
        fs.writeFileSync('./settings/stickerspam.json',JSON.stringify(stickerspam));
        return false;
    }  
}
function addStickerCount(id){
    if (isOwnerBot, isAdmin) {return;}
    var found = false
    Object.keys(stickerspam).forEach((i) => {
        if(stickerspam[i].id == id){
            found = i
        }
    })
    if (found !== false) {
        stickerspam[found].msg += 1;
        fs.writeFileSync('./settings/stickerspam.json',JSON.stringify(stickerspam));
    }
}

if (isGroupMsg && AntiStickerSpam && !isGroupAdmins && !isAdmin && !isOwner){
    if(stickermsg === true){
        if(isStickerMsg(serial)) return
        addStickerCount(serial)
    }
}
///////////////////////////////////////////////////////////BASS////////////////////////////////////
function stream2Buffer(cb = noop) {
    return new Promise(resolve => {
        let write = new Writable()
        write.data = []
        write.write = function (chunk) {
            this.data.push(chunk)
        }
        write.on('finish', function () {
            resolve(Buffer.concat(this.data))
        })

        cb(write)
    })
}

/**
 * Convert Buffer to Readable Stream
 * @param {Buffer} buffer
 * @returns {ReadableStream}
 */
function buffer2Stream(buffer) {
    return new Readable({
        read() {
            this.push(buffer)
            this.push(null)
        }
    })
}
	     
//////////////
if (!isGroupMsg && isMedia && isImage && !isCmd)
    {
            const mediaData = await decryptMedia(message, uaOverride)
            const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
            await piyo.sendImageAsSticker(from, imageBase64)
                .then(async () => {
                    console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                })
                .catch(async (err) => {
                    console.error(err)
                    await piyo.reply(from, `Error!\n${err}`, id)
                })
        }
// Anti-Porn Lol Human , Diusahakan apikeya beli premium atau vip
// Thanks to Vide Frelan  / vide fikri 
// Kalo mau yang detek sticker juga , chat saya aja
if (isGroupMsg && isAntiPorn && !isGroupAdmins && isBotGroupAdmins) {
    if (type === 'image') {
    const datafacol = await decryptMedia(message)
    const fotofacol = await uploadImages(datafacol, `fotoface.${sender.id}`)
    const getnsfw = await axios.get(`https://lolhuman.herokuapp.com/api/nsfwcheck?apikey=${lolhuman}&img=${fotofacol}`)
    const persen = getnsfw.data.result
    console.log(persen)
    if (Number(getnsfw.data.result.split('%')[0]) >= 30.00) return piyo.reply(from, `*Terdeteksi Mengirim Gambar Yang Berbau Porno*\nKeyakinan Gambar : ${persen}`, id).then(() => piyo.removeParticipant(groupId, sender.id))
    }
}
// Anti-group link detector
        if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && isDetectorOn && !isOwner) {
            if (chats.match(new RegExp(/(https:\/\/chat.whatsapp.com)/gi))) {
                await piyo.reply(from, ind.linkDetected(), id)
                await piyo.removeParticipant(groupId, sender.id)
            }
        }
        function isLimit(id){
                    if (isOwnerBot) {return false;}
                    let found = false;
                    for (let i of limit){
                        if(i.id === id){
                            let limits = i.limit;
                            if (limits >= limitCount) {
                                found = true;
                                piyo.reply(from, `Perintah BOT anda sudah mencapai batas, coba esok hari :)`, id)
                                return true;
                            }else{
                                limit
                                found = true;
                                return false;
                            }
                        }
                    }
                    if (found === false){
                        let obj = {id: `${id}`, limit:1};
                        limit.push(obj);
                        fs.writeFileSync('./settings/limit.json',JSON.stringify(limit));
                        return false;
                    }  
                }
       function limitAdd (id) {
                    if (isOwnerBot) {return;}
                    var found = false;
                    Object.keys(limit).forEach((i) => {
                        if(limit[i].id == id){
                            found = i
                        }
                    })
                    if (found !== false) {
                        limit[found].limit += 1;
                        fs.writeFileSync('./settings/limit.json',JSON.stringify(limit));
                    }
                }
	    function baseURI(buffer = Buffer.from([]), metatype = 'text/plain') {
                return `data:${metatype};base64,${buffer.toString('base64')}`
            }
	 // PREMIUM + SEWA
	premium.expiredCheck(_premium)
	sewa.expiredCheck(_sewa , piyo , message , groupId)
        switch (command) {
        // Menu and TnC

///////////////////////////////////////////////////MENU////////////////////////////////////////////////////////////
case 'speed':
case 'ping':
            await piyo.sendText(from, `Pong!!!!\nSpeed: ${processTime(t, moment())} _Second_`)
            break
case 'tnc':
            await piyo.sendText(from, menuId.textTnC())
            break
case 'menuhiburan':        
        await piyo.sendText(from, menuId.textmenuhiburan (pushname))
        break
case 'nulis': {                   
        await piyo.sendText(from, menuId.textmenunulis())
                }
        break
case 'mentol':       
        await piyo.sendText(from, menuId.textmentol (pushname))
        break
case 'menulogo':
        await piyo.sendText(from, menuId.menulogo (pushname))
        break
case 'menusticker':
        await piyo.sendText(from, menuId.menusticker (pushname))
        break
case 'menuhiburan':  
        await piyo.sendText(from, menuId.textmenuhiburan (pushname))
        break
case 'menutobat':      
        await piyo.sendText(from, menuId.textmenutobat (pushname))
        break
case 'wibuarea':
        await piyo.sendText(from, menuId.textwibuarea (pushname))
        break
case 'menupremium':
                await piyo.sendText(from, menuId.textmenupremium (pushname))
        break
case 'menupenting':      
                await piyo.sendText(from, menuId.textmenupenting (pushname))
        break
case 'help':
        const contol = await piyo.getAllChatIds()
        const premiu = isPremium ? 'Premium' : 'Free'
        await piyo.sendText(from, menuId.texthelp(pushname, premiu , _registered , contol))
        break
case 'menubaru':
	const nadhirasayang = './media/azure.png'
        await piyo.sendFile(from, nadhirasayang , 'piyo.png' , menuId.textmenubaru(pushname))
        break
case 'menulama':            
        const updater = updatepiyobot ? 'yes' : 'no'
        await piyo.sendText(from, menuId.textmenulama(pushname, updater))
        .then(() => ((isGroupMsg) && (isGroupAdmins)) ? piyo.sendText(from, `Menu Admin Grup: *${prefix}menuadmin*`) : null)
        break
case 'menu':
        const premi = isPremium ? 'Premium' : 'Free'
        const coloo = await piyo.getAllChatIds()
        let tod = `${timee}`;
        await piyo.sendText(from, menuId.textmenu(pushname, premi , _registered , coloo , tod))
        break
case 'rules':
case 'rule':
            await piyo.sendText(from, menuId.textRules())
            break
case 'ownermenu':
	    if (!isOwnerBot) return piyo.reply(from, 'Fitur ini hanya untuk owner' , id)
            await piyo.sendText(from, menuId.textownermenu())
            break
case 'menuadmin':            
            if (!isGroupMsg) return piyo.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
            if (!isGroupAdmins) return piyo.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id)
            await piyo.sendText(from, menuId.textAdmin())
            break
            case 'donate':
case 'donasi':
            await piyo.sendText(from, menuId.textDonasi())
            break
case 'ownerbot':
            await piyo.sendContact(from, ownerNumber)
            .then(() => piyo.sendText(from, 'Jika kalian ingin request fitur silahkan chat nomor owner!'))
            break
case 'bal':
             if (!isRegistered) return piyo.reply(from, `Maaf ${pushname}, sepertinya kamu belum terdaftar sebagai user Piyobot, untuk pendaftaran bisa menggunakan /register nama | Jenis Kelamin. Contoh: /register ${pushname}|cewe`, id)
             const kantong = checkATMuser(serial)
             piyo.reply(from, `Halo ${pushname}, Kamu Memiliki Uang Sejumlah Rp. ${kantong}`, id)
             break
///////////////////////////////////////////////////MENU STICKER////////////////////////////////////////////////////
case 'stickermeme':               
            if ((isMedia || isQuotedImage) && args.length >= 2) {
                const top = arg.split('|')[0]
                const bottom = arg.split('|')[1]
                const encryptMedia = isQuotedImage ? quotedMsg : message
                const mediaData = await decryptMedia(encryptMedia, uaOverride)
                const getUrl = await uploadImages(mediaData, false)
                const ImageBase64 = await meme.custom(getUrl, top, bottom)
                piyo.sendImageAsSticker(from, ImageBase64, '', null, true)
                    .then(() => {
                        piyo.reply(from, 'Ini makasih!',id)
                    })
                    .catch(() => {
                        piyo.reply(from, 'Ada yang error!')
                    })
            } else {
                await piyo.reply(from, `Tidak ada gambar! Silahkan kirim gambar dengan caption ${prefix}meme <teks_atas> | <teks_bawah>\ncontoh: ${prefix}meme teks atas | teks bawah`, id)
            }
            break
case 'addsticker':
            if (!q) return piyo.reply(from, `Hai  Kak ${pushname} untuk menggunakan fitur save stiker ketik */addsticker* _Nama nya_`, id)
            if (quotedMsg) {
                if (quotedMsg.type === 'sticker') {
                    try {
                        mediaData = await decryptMedia(quotedMsg, uaOverride)
                        fs.writeFileSync(`./media/sticker/${q}.jpg`, mediaData)
                        piyo.reply(from, `Stiker berhasil tersimpan!\n\nUntuk melihat list ketik */liststiker*`, id)
                    } catch(err) {
                        piyo.reply(from, `Gagal save sticker!`, id)
                        piyo.reply(ownerNumber, util.format(err), id)
                    }
                } else {
                    piyo.reply(from, `Harus reply stiker!`, id)
                }
            } else {
                piyo.reply(from, `Gaada data yang direply gan`, id)
            }
            break
case 'liststiker':
            const liststicker = fs.readdirSync('./media/sticker/')
            let capliststik = `Ketik perintah */getstiker _Nama nya_* untuk mengambil data stiker\n\n*Jumlah stiker* : ${liststicker.length}\n\n*Stiker tersimpan :*\n`
            for (let i = 0; i < liststicker.length; i++) {
                capliststik += `\n➣ ${liststicker[i].replace('.jpg','')}`
            }
            piyo.reply(from, capliststik, id)
            break

case 'getstiker':
            if (!q) return piyo.reply(from, `Hai Kak ${pushname} untuk menggunakan fitur get stiker ketik */getstiker* _Nama nya_`, id)
            try {
                const datastick = await fs.readFileSync('./media/sticker/' + q + '.jpg', { encoding: "base64" })
		const imageBase64 = `data:image/jpeg;base64,${datastick.toString('base64')}`
                await piyo.sendImageAsSticker(from, imageBase64 , { author: 'Piyo', pack: 'Piyo BOT' })
            } catch (err){
                piyo.reply(from, `Kesalahan mengambil stiker! cek kembali nama stiker dengan ketik */liststiker*`)
            }
            break

case 'delstiker':
            if (isOwnerBot) return piyo.reply(from, `Hanya untuk owner bot!`, id)
            try {
                await fs.unlinkSync('./media/sticker/' + q + '.jpg').then(() => {
                    piyo.reply(from, `Menghapus Stiker ${q}`, id)
                })
            } catch (err) {

            }
            break
			
case 'takestick':
                    if (quotedMsg && quotedMsg.type == 'sticker') {
                        if (!q.includes('|')) return await piyo.reply(from, `Untuk mengubah watermark sticker, reply sticker dengan caption ${prefix}takestick package_name | author_name\n\nContoh: ${prefix}takestick piyo | bot`, id)
                        await piyo.reply(from, ind.wait(), id)
                        const packnames = q.substring(0, q.indexOf('|') - 1)
                        const authors = q.substring(q.lastIndexOf('|') + 2)
                        const mediaData = await decryptMedia(quotedMsg)
                        const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                        await piyo.sendImageAsSticker(from, imageBase64, { author: `${authors}`, pack: `${packnames}` })
                        .catch(async (err) => {
                            console.error(err)
                            await piyo.reply(from, 'Error!', id)
                        })
                    } else {
                        await piyo.reply(from, `Reply sticker yang ingin dicolong dengan caption ${prefix}takestick package_name | author_name\n\nContoh: ${prefix}takestick piyo | bot`, id)
                    }
        break			
case 'stimg':
case 'toimg':                                
            if (quotedMsg && quotedMsg.type == 'sticker') {
                const mediaData = await decryptMedia(quotedMsg)
                piyo.reply(from, `Sedamg di proses! Silahkan tunggu sebentar...`, id)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await piyo.sendFile(from, imageBase64, 'imgsticker.jpg', 'Berhasil convert Sticker to Image!', id)
                .then(() => {
                    console.log(`Sticker to Image Processed for ${processTime(t, moment())} Seconds`)
                })
        } else if (!quotedMsg) return piyo.reply(from, `Format salah, silahkan tag sticker yang ingin dijadikan gambar!`, id)
        break
case 'sticker':
case 'stiker':
           if (isMedia && isImage || isQuotedImage) {
                    try {
                await piyo.reply(from, ind.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const _mimetype = isQuotedImage ? quotedMsg.mimetype : mimetype
		    const author = 'isi nama lo'
		    const pack = 'isi pack nya'
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
                    await piyo.sendImageAsSticker(from, imageBase64, { author: `${author}`, pack: `${pack}` })
                    console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                } catch (err) {
                    console.error(err)
                    await piyo.reply(from, 'Error!', id)
                }
            } else if (args[0] === 'nobg') {
                if (isMedia || isQuotedImage) {
                                const encryptMedia = isQuotedImage ? quotedMsg : message
                		const _mimetype = isQuotedImage ? quotedMsg.mimetype : mimetype
                		const mediaData = await decryptMedia(encryptMedia, uaOverride)
                		const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
                                await piyo.sendImageAsSticker(from, imageBase64, {keepScale: true, removebg: true})
                            } else {
                                await piyo.reply(from, 'Format pesan salah...', id)
                            }} else if (args.length === 1) {
                if (!isUrl(url)) { await piyo.reply(from, 'Maaf, link yang kamu kirim tidak valid.', id) }
                piyo.sendStickerfromUrl(from, url).then((r) => (!r && r !== undefined)
                    ? piyo.sendText(from, 'Maaf, link yang kamu kirim tidak memuat gambar.')
                    : piyo.reply(from, 'Here\'s your sticker')).then(() => console.log(`Sticker Processed for ${processTime(t, moment())} Second`))
            } else {
                await piyo.reply(from, `Tidak ada gambar! Untuk menggunakan ${prefix}sticker\n\n\nKirim gambar dengan caption\n${prefix}sticker <biasa>\n${prefix}sticker nobg <tanpa background>\n\natau Kirim pesan dengan\n${prefix}sticker <link_gambar>`, id)
                await piyo.sendFile(from, './media/tutorial.png', id)
            } if (isMedia && type === 'video' || mimetype === 'image/gif') {
                await piyo.reply(from, ind.wait(), id)
                try {
                    const mediaData = await decryptMedia(message, uaOverride)
                    await piyo.sendMp4AsSticker(from, mediaData, { fps: 24, startTime: `00:00:00.0`, endTime : `00:00:05.0`, loop: 0 })
                        .then(async () => {
                            console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                            await piyo.sendText(from, ind.ok())
                        })
                } catch (err) {
                    console.error(err)
                    await piyo.reply(from, ind.videoLimit(), id)
                }
            } else if (isQuotedGif || isQuotedVideo) {
                await piyo.reply(from, ind.wait(), id)
                try {
                    const mediaData = await decryptMedia(quotedMsg, uaOverride)
                    await piyo.sendMp4AsSticker(from, mediaData, { fps: 24, startTime: `00:00:00.0`, endTime : `00:00:05.0`, loop: 0 })
                        .then(async () => {
                            console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                            await piyo.sendText(from, ind.ok())
                        })
                } catch (err) {
                    console.error(err)
                    await piyo.reply(from, ind.videoLimit(), id)
                }
            } 
            break
case 'stickergif':
case 'stikergif':             
                    if (isLimit(serial)) return piyo.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)                   
                    if (isMedia && type === 'video' || mimetype === 'image/gif') {
                        await piyo.reply(from, ind.wait(), id)
                        try {
                            const mediaData = await decryptMedia(message, uaOverride)
                            await piyo.sendMp4AsSticker(from, mediaData, { fps: 24, startTime: `00:00:00.0`, endTime : `00:00:05.0`, loop: 0 })
                                .then(async () => {
                                    console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                                    await piyo.sendText(from, ind.ok())
                                })
                        } catch (err) {
                            console.error(err)
                            await piyo.reply(from, ind.videoLimit(), id)
                        }
                    } else if (isQuotedGif || isQuotedVideo) {
                        await piyo.reply(from, ind.wait(), id)
                        try {
                            const mediaData = await decryptMedia(quotedMsg, uaOverride)
                            await piyo.sendMp4AsSticker(from, mediaData, { fps: 24, startTime: `00:00:00.0`, endTime : `00:00:05.0`, loop: 0 })
                                .then(async () => {
                                    console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                                    await piyo.sendText(from, ind.ok())
                                })
                        } catch (err) {
                            console.error(err)
                            await piyo.reply(from, ind.videoLimit(), id)
                        }
                    } else {
                        await piyo.reply(from, ind.wrongFormat(), id)
                    }
                break
case 'stikergiphy':
case 'stickergiphy':               
                if (args.length !== 1) return piyo.reply(from, `Maaf, format pesan salah.\nKetik pesan dengan ${prefix}stickergiphy <link_giphy>`, id)
                const isGiphy = url.match(new RegExp(/https?:\/\/(www\.)?giphy.com/, 'gi'))
                const isMediaGiphy = url.match(new RegExp(/https?:\/\/media.giphy.com\/media/, 'gi'))
                if (isGiphy) {
                    const getGiphyCode = url.match(new RegExp(/(\/|\-)(?:.(?!(\/|\-)))+$/, 'gi'))
                    if (!getGiphyCode) { return piyo.reply(from, 'Gagal mengambil kode giphy', id) }
                    const giphyCode = getGiphyCode[0].replace(/[-\/]/gi, '')
                    const smallGifUrl = 'https://media.giphy.com/media/' + giphyCode + '/giphy-downsized.gif'
                    piyo.sendGiphyAsSticker(from, smallGifUrl).then(() => {
                        piyo.reply(from, 'Here\'s your sticker')
                        console.log(`Sticker Processed for ${processTime(t, moment())} Second`)
                    }).catch((err) => console.log(err))
                } else if (isMediaGiphy) {
                    const gifUrl = url.match(new RegExp(/(giphy|source).(gif|mp4)/, 'gi'))
                    if (!gifUrl) { return piyo.reply(from, 'Gagal mengambil kode giphy', id) }
                    const smallGifUrl = url.replace(gifUrl[0], 'giphy-downsized.gif')
                    piyo.sendGiphyAsSticker(from, smallGifUrl)
                    .then(() => {
                        piyo.reply(from, 'Here\'s your sticker')
                        console.log(`Sticker Processed for ${processTime(t, moment())} Second`)
                    })
                    .catch(() => {
                        piyo.reply(from, `Ada yang error!`, id)
                    })
                } else {
                    await piyo.reply(from, 'Maaf, command sticker giphy hanya bisa menggunakan link dari giphy.  [Giphy Only]', id)
                }
                break
case 'stickertottext':
case 'stikerteks':
                      if (arguments.length < 1) return await piyo.reply(from, '_⚠️ Contoh Penggunaan Perintah : /stikerteks <kalimat>_', id);
                      const teksLink = rugaapi.tosticker(arguments);
                      await piyo.sendStickerfromUrl(from, teksLink);
                      break
case 'findsticker':
case 'findstiker':
                            if (args.length == 0) return piyo.reply(from, `Kirim perintah *${prefix}findsticker namastiker*\nContoh : *${prefix}findsticker pentol*`, id)
                            await piyo.reply(from, ind.wait(), id)
                            try {
                            const stck = await axios.get('https://api.vhtear.com/wasticker?query=' + body.slice(7) + `&apikey=${vhtearkey}`)
                            for (let i = 0; i < stck.data.result.data.length; i++) {
                            await piyo.sendStickerfromUrl(from, stck.data.result.data[i])
                            console.log('Sukses mengirim sticker finder!')
                            }
                         } catch (err) {
                                console.error(err)
                                    await piyo.reply(from, `Ada yang Error!\nmungkin kata kunci yang anda cari tidak ada`, id)
                           }
                            break
case 'linesticker':   		
                            await piyo.reply(from, ind.wait(), id)
                                rugaapi.linesticker()
                                .then(async ({ result }) => {
                                let lines = `_*Hasil Pencarian*_\n`
                            for (let i = 0; i < result.hasil.length; i++) {
                                lines +=  `\n\n*Judul* : ${result.hasil[i].title}\n\nURL: ${result.hasil[i].uri}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                            }
                                piyo.reply(from, lines, id);
                        })
                        break
case 'stickerlightning':
case 'slightning':                
                                if (isMedia && type === 'image' || isQuotedImage) {
                                    await piyo.reply(from, ind.wait(), id)
                                    const encryptMedia = isQuotedImage ? quotedMsg : message
                                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                                    const imageLink = await uploadImages(mediaData, `lightning.${sender.id}`)
                                    rugaapi.stickerLight(imageLink)
                                        .then(async ({ result }) => {
                                            await piyo.sendStickerfromUrl(from, result.imgUrl)
                                                .then(async () => {
                                                    console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                                                    await piyo.sendText(from, ind.ok())
                                                })
                                        })
                                        .catch(async (err) => {
                                            console.error(err)
                                            await piyo.reply(from, `Error!\n${err}`, id)
                                        })
                                } else {
                                    await piyo.reply(from, ind.wrongFormat(), id)
                                }
                            break
case 'stickerfire':
case 'sfiree':
                                
                                if (isMedia && type === 'image' || isQuotedImage) {
                                    await piyo.reply(from, ind.wait(), id)
                                    const encryptMedia = isQuotedImage ? quotedMsg : message
                                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                                    const imageLink = await uploadImages(mediaData, `fire.${sender.id}`)
                                    rugaapi.stickerFire(imageLink)
                                        .then(async ({ result }) => {
                                            await piyo.sendStickerfromUrl(from, result.imgUrl)
                                                .then(async () => {
                                                    console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                                                    await piyo.sendText(from, ind.ok())
                                                })
                                        })
                                        .catch(async (err) => {
                                            console.error(err)
                                            await piyo.reply(from, `Error!\n${err}`, id)
                                        })
                                } else {
                                    await piyo.reply(from, ind.wrongFormat(), err)
                                }
                            break
case 'ttp':
                                const lttp2 = ["Orange","White","Green","Black","Purple","Red","Yellow","Blue","Navy","Grey","Magenta","Brown","Gold"]
                                const rttp2 = lttp2[Math.floor(Math.random() * (lttp2.length))]
                                await piyo.sendStickerfromUrl(from, `https://api.vhtear.com/textmaker?text=${q}&warna=${rttp2}&apikey=${vhtearkey}`)
                                break
case 'ttp2':
                                await piyo.sendStickerfromUrl(from, `https://api.vhtear.com/textxgif?text=${q}&apikey=${vhtearkey}`)
                                break
case 'blackbird':
                                    if (!q) return piyo.reply(from, `Ketik /blackbird teksnya` , id)
                                    await piyo.sendStickerfromUrl(from, `https://piyoz.my.id/api/flamingtext/blackbird?text=${q}`)
                                    break
case 'memo':
                                    if (!q) return piyo.reply(from, `Ketik /memo teksnya` , id)
                                    await piyo.sendStickerfromUrl(from, `https://piyoz.my.id/api/flamingtext/memories?text=${q}`)
                                    break
case 'water':
                                    if (!q) return piyo.reply(from, `Ketik /water teksnya` , id)
                                    await piyo.sendStickerfromUrl(from, `https://piyoz.my.id/api/flamingtext/water?text=${q}`)
                                    break

case 'ttg':
                                    if (!q) return await piyo.reply(from, ind.wrongFormat(), id)
                                        await piyo.reply(from, ind.wait(), id)
                                        await piyo.sendStickerfromUrl(from, `https://api.vhtear.com/textxgif?text=${q}&apikey=${vhtearkey}`)
                                            .then(() => console.log('Success creating GIF!'))
                                            .catch(async (err) => {
                                                console.error(err)
                                                await piyo.reply(from, 'Error!', id)
                                            })
                                    break
/////////////////////////////////////////////MENU LOGO////////////////////////////////////////////////////////////
case '8bit':
    const bit1 = q.substring(0, q.indexOf('|') - 1)
    const bit2 = q.substring(q.lastIndexOf('|') + 2)
    if (!q) return await piyo.reply(from, `Salah kak, /8bit nama kaka | nama kaka` , id)
    await piyo.reply(from, ind.wait() , id)
    console.log('Creating 8bit  Maker')
    await piyo.sendFileFromUrl(from, `https://videfikri.com/api/textmaker/8bit/?text1=${bit1}&text2=${bit2}` , 'piyo.jpg' , 'Nih Kak' , id)
    break
case 'shadow':
    if (!q) return await piyo.reply(from, `Ketik /shadow teksnya` , id)
    await piyo.reply(from, ind.wait() , id)
    console.log('Creating shadow  Maker')
    await piyo.sendFileFromUrl(from, `https://videfikri.com/api/textmaker/shadowtext/?text=${q}` , 'piyo.jpg' , 'Nih Kak' , id)
    break
case 'burn':
    if (!q) return await piyo.reply(from, `Ketik /burn teksnya` , id)
    await piyo.reply(from, ind.wait() , id)
    console.log('Creating burn  Maker')
    await piyo.sendFileFromUrl(from, `https://videfikri.com/api/textmaker/burnpaper/?text=${q}` , 'piyo.jpg' , 'Nih Kak' , id)
    break
case 'kopi':
    if (!q) return await piyo.reply(from, `Ketik /coffe teksnya` , id)
    await piyo.reply(from, ind.wait() , id)
    console.log('Creating coffe  Maker')
    await piyo.sendFileFromUrl(from, `https://videfikri.com/api/textmaker/coffeecup/?text=${q}` , 'piyo.jpg' , 'Nih Kak' , id)
    break
case 'love':
    if (!q) return await piyo.reply(from, `Ketik /love teksnya` , id)
    await piyo.reply(from, ind.wait() , id)
    console.log('Creating love  Maker')
    await piyo.sendFileFromUrl(from, `https://videfikri.com/api/textmaker/lovemsg/?text=${q}` , 'piyo.jpg' , 'Nih Kak' , id)
    break
case 'wood':
    if (!q) return await piyo.reply(from, `Ketik /wood teksnya` , id)
    await piyo.reply(from, ind.wait() , id)
    console.log('Creating wood  Maker')
    await piyo.sendFileFromUrl(from, `https://videfikri.com/api/textmaker/woodblock/?text=${q}` , 'piyo.jpg' , 'Nih Kak' , id)
    break
case 'potter':
    if (!q) return await piyo.reply(from, `Ketik /potter teksnya` , id)
    await piyo.reply(from, ind.wait() , id)
    console.log('Creating boards  harry poter')
    await piyo.sendFileFromUrl(from, `https://videfikri.com/api/textmaker/hpotter/?text=${q}` , 'piyo.jpg' , 'Nih Kak' , id)
    break
case 'tlight':
    if (!q) return await piyo.reply(from, `Ketik /tlight teksnya` , id)
    await piyo.reply(from, ind.wait() , id)
    console.log('Creating tlight')
    const yo5 = await axios.get(`https://api.zeks.xyz/api/tlight?text=${q}&apikey=administrator`)
    await piyo.sendFileFromUrl(from, yo5.data.result, 'error.jpg' , 'Kalo filenya berbentuk dokumen berarti eror' , id)
    break
case '3d':
    if (!q) return await piyo.reply(from, `Ketik /3d teksnya` , id)
    await piyo.reply(from, ind.wait() , id)
    console.log('Creating 3d')
    const yo6 = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=administrator&text=${q}`)
    await piyo.sendFileFromUrl(from, yo6.data.result, 'error.jpg' , 'Kalo filenya berbentuk dokumen berarti eror' , id)
    break
case 'pubg':
            if (!q) return piyo.reply(from, `Ketik /pubg teksnya` , id)
                piyo.reply(from, 'Tunggu Ya Anjing', id)
                const pubg1 = q.substring(0, q.indexOf('|') - 1)
                const pubg2 = q.substring(q.lastIndexOf('|') + 2)
                const pabji = await axios.get(`https://api.zeks.xyz/api/pubglogo?text1=${pubg1}&text2=${pubg2}&apikey=administrator`)
                piyo.sendFileFromUrl(from, pabji.data.result, 'pubg.jpg' ,'neh kak', id)
            break
case 'csgo':
            if (!q) return piyo.reply(from, `Salahkak , ketik /csgo teksnya` , id)
            const csgo = await axios.get(`https://api.zeks.xyz/api/cslogo?text=${q}&apikey=administrator`)
            piyo.sendFileFromUrl(from, csgo.data.result, 'pubg.jpg', 'jan epep burik tuh', id)
            break			
case 'blackpink':            
    piyo.reply(from, ind.wait(), id)
    const blpk = body.slice(11)
    if (blpk.length > 10) return piyo.reply(from, '*Teks Terlalu Panjang!*\n_Maksimal 10 huruf!_', id)
    await piyo.sendFileFromUrl(from, `https://api.zeks.xyz/api/logobp?text=${blpk}&apikey=apivinz`, 'blackpink.jpg', '', id)
    break 
case 'pornhub':
    if (args.length == 2) return piyo.reply(from, `Kirim perintah */pornhub [ |Teks1|Teks2 ]*, contoh */pornhub |Alvio|Piyobot*`, id)
    argz = body.trim().split('|')
    if (argz.length >= 2) {
        piyo.reply(from, ind.wait(), id)
        const lpornhub = argz[1]
        const lpornhub2 = argz[2]
        if (lpornhub.length > 10) return piyo.reply(from, '*Teks1 Terlalu Panjang!*\n_Maksimal 10 huruf!_', id)
        if (lpornhub2.length > 10) return piyo.reply(from, '*Teks2 Terlalu Panjang!*\n_Maksimal 10 huruf!_', id)
        piyo.sendFileFromUrl(from, `https://api.zeks.xyz/api/phlogo?text1=${lpornhub}&text2=${lpornhub2}&apikey=apivinz`)
    } else {
        await piyo.reply(from, `Wrong Format!\n[❗] Kirim perintah */pornhub [ |Teks1|Teks2 ]*, contoh */pornhub |Piyo|Alvio*`, id)
    }
    break
case 'mlmaker':
    const ml1 = q.substring(0, q.indexOf('|') - 1)
    const ml2 = q.substring(q.lastIndexOf('|') + 2)
    if (!q) return await piyo.reply(from, ind.wrongFormat(), id)
    await piyo.reply(from, ind.wait(), id)
    console.log('Creating ML maker text...')
    await piyo.sendFileFromUrl(from, `https://api.vhtear.com/logoml?hero=${ml1}&text=${ml2}&apikey=${vhtearkey}`, 'error.jpg', '', id)
    .then(() => console.log('Success creating image!'))
            .catch(async (err) => {
                console.error(err)
                await piyo.reply(from, `Ada yang Error!\n${err}`, id)
            })
break
case 'ffmaker':
    const ff1 = q.substring(0, q.indexOf('|') - 1)
    const ff2 = q.substring(q.lastIndexOf('|') + 2)
    if (!q) return await piyo.reply(from, `Salah kak, /ffmaker alok | nama kaka` , id)
    await piyo.reply(from, ind.wait() , id)
    console.log('Creating FF Maker')
    await piyo.sendFileFromUrl(from, `https://api.zeks.xyz/api/epep?text=${q}&apikey=apivinz`, 'error.jpg', '', id)
    await piyo.sendText(from, `Nih kak` , id)
    .then(() => console.log('Success creating image!'))
            .catch(async (err) => {
                console.error(err)
                await piyo.reply(from, `Ada yang Error!\n${err}`, id)
            })
            break
case 'bannerff':
                if (isLimit(serial)) return piyo.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                if (!q) return piyo.reply(from, `Kirim perintah /bannerff [ |Teks1|Teks2 ], contoh /bannerff |hana|Cahntex sangad`, id)
                argz = body.trim().split('|')
                if (argz.length >= 2) {
                    piyo.reply(from, ind.wait(), id)
                    const lepepyy = argz[1]
                    const lepepyy2 = argz[2]
                    if (lepepyy.length > 10) return piyo.reply(from, 'Teks1 Terlalu Panjang!\n_Maksimal 10 huruf!_', id)
                    piyo.sendFileFromUrl(from, `https://api.vhtear.com/bannerff?title=${lepepyy}&text=${lepepyy2}&apikey=${vhtearkey}`, 'epep.jpg', `text buriq gini ada peminat hadeh`, id)
                    await limitAdd(serial)
                } else {
                    await piyo.reply(from, `Wrong Format!\n[❗] Kirim perintah /bannerff [ |Teks1|Teks2 ], contoh /bannerff |hana|Cahntex sangad`, id)
                }
                break
case 'gmlogo':
    if(!q) return piyo.reply(from, `apa teksnya`, id)
    piyo.reply(from, ind.wait(), id)
    await piyo.sendFileFromUrl(from, `https://api.vhtear.com/gamelogo?text=${q}&apikey=${vhtearkey}`, 'error.jpg', '', id)
    .then(() => console.log('Success creating image!'))
            .catch(async (err) => {
                console.error(err)
                await piyo.reply(from, `Ada yang Error!\n${err}`, id)
            })
break
case 'wolf2':
        if (args.length === 0) return piyo.reply(from, `Kirim perintah *${prefix}wolf2 [ |Teks1|Teks2 ]*, contoh *${prefix}wolf2 |aqulzz|xinz*`, id)
        argz = body.trim().split('|')
        if (argz.length === 3) {
            piyo.reply(from, 'Tunggu sebentar dan pastikan format yang anda masukkan benar', id)
            const wolf12 = argz[1]
            const wolf22 = argz[2]
            piyo.sendFileFromUrl(from, `https://api.zeks.xyz/api/wolflogo?apikey=apivinz&text1=${wolf12}&text2=${wolf22}`, 'wolf2.jpg', 'neh bang', id)
        } else {
            await piyo.reply(from, `Wrong Formt!\n[❗] Kirim perintah *${prefix}wolf2 [ |Teks1|Teks2 ]*, contoh *${prefix}wolf2 |piyo|bot*`, id)
        }
        break
case 'wolf':
        if (args.length === 0) return piyo.reply(from, `Kirim perintah *${prefix}wolf [ |Teks1|Teks2 ]*, contoh *${prefix}wolf |aqulzz|xinz*`, id)
        argz = body.trim().split('|')
        if (argz.length === 3) {
            piyo.reply(from, 'Tunggu sebentar dan pastikan format yang anda masukkan benar', id)
            const wolf1 = argz[1]
            const wolf2 = argz[2]
            piyo.sendFileFromUrl(from, `https://api.zeks.xyz/api/wolflogo?apikey=apivinz&text1=${wolf1}&text2=${wolf2}`, 'wolf2.jpg', 'neh bang', id)
        } else {
            await piyo.reply(from, `Wrong Formt!\n[❗] Kirim perintah *${prefix}wolf2 [ |Teks1|Teks2 ]*, contoh *${prefix}wolf2 |piyo|bot*`, id)
        }
        break
case 'ninja':
            if (args.length === 0) return piyo.reply(from, `Kirim perintah *${prefix}ninja [ |Teks1|Teks2 ]*, contoh *${prefix}ninja |aqulzz|xinz*`, id)
            argz = body.trim().split('|')
            if (argz.length === 3) {
                piyo.reply(from, 'Tunggu sebentar dan pastikan format yang anda masukkan benar', id)
                const ninja1 = argz[1]
                const ninja2 = argz[2]
                const nanji = await axios.get(`https://tobz-api.herokuapp.com/api/textpro?theme=ninjalogo&text1=${ninja1}&text2=${ninja2}&apikey=BotWeA`)
                piyo.sendFileFromUrl(from, nanji.data.result, 'ninja.jpg', 'neh bang', id)
            } else {
                await piyo.reply(from, `Wrong Format!\n[❗] Kirim perintah *${prefix}ninja [ |Teks1|Teks2 ]*, contoh *${prefix}ninja |aqulzz|xinz*`, id)
            }
            break
case 'galaxytext':
if (args.length == 0) return piyo.reply(from, `Membuat Text jadi Gambar galaxy\nPemakaian: ${prefix}galaxytext [teks]\n\ncontoh: ${prefix}galaxytext Piyo`, id)
                await piyo.reply(from, `Wait....`, id)
            console.log('Creating galaxytext text...')
            const galaxytext = body.slice(12)
            await piyo.sendFileFromUrl(from, `https://api.vhtear.com/galaxytext?text=${q}&apikey=${vhtearkey}`, '', 'Nih...', id)
                .then(() => console.log('Success creting image!'))
                .catch(async (err) => {
                    console.error(err)
                    await piyo.reply(from, `Error!`, id)
                })
        break
case 'partytext':
if (args.length == 0) return piyo.reply(from, `Membuat Text jadi Gambar ala ala party\nPemakaian: ${prefix}partytext [teks]\n\ncontoh: ${prefix}partytext piyo`, id)
                await piyo.reply(from, `Wait....`, id)
            console.log('Creating partytext text...')
            const llpartytext = body.slice(11)
            await piyo.sendFileFromUrl(from, `https://api.vhtear.com/partytext?text=${q}&apikey=${vhtearkey}`, '', 'Nih...', id)
                .then(() => console.log('Success creting image!'))
                .catch(async (err) => {
                    console.error(err)
                    await piyo.reply(from, `Error!`, id)
                })
break
case 'logo':
if (!q) return piyo.reply(from, `nulis yang bener` , id)
piyo.sendFileFromUrl(from, `https://piyoz.my.id/api/textpro/captamerica?text=${q}`)
break
case 'pornhub':
            if (args.length == 2) return piyo.reply(from, `Kirim perintah */pornhub [ |Teks1|Teks2 ]*, contoh */pornhub |Alvio|Piyobot*`, id)
            argz = body.trim().split('|')
            if (argz.length >= 2) {
                piyo.reply(from, ind.wait(), id)
                const lpornhub = argz[1]
                const lpornhub2 = argz[2]
                if (lpornhub.length > 10) return piyo.reply(from, '*Teks1 Terlalu Panjang!*\n_Maksimal 10 huruf!_', id)
                if (lpornhub2.length > 10) return piyo.reply(from, '*Teks2 Terlalu Panjang!*\n_Maksimal 10 huruf!_', id)
                piyo.sendFileFromUrl(from, `https://api.vhtear.com/pornlogo?text1=${lpornhub}&text2=${lpornhub2}&apikey=${vhtearkey}`)
            } else {
                await piyo.reply(from, `Wrong Format!\n[❗] Kirim perintah */pornhub [ |Teks1|Teks2 ]*, contoh */pornhub |Piyo|Alvio*`, id)
            }
            break   
            
case 'tulispasir':
case 'sandwriting': 
                            if (!isGroupMsg) return piyo.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                            if (args.length !== 1) return piyo.reply(from, 'Kirim perintah */sandwriting [ Teks ]*\nContoh */sandwriting Piyobot*', id)
                            const swrt = body.slice(13)
                            try {
                            const swrt2 = await axios.get('https://api.vhtear.com/sand_writing?text1=' + swrt + '&apikey=' + vhtearkey)
                            const { imgUrl } = swrt2.data.result
                            const swrt3 = `*「 SAND WRITING 」*
                Text : ${swrt}*`
                            const pictk = await bent("buffer")(imgUrl)
                            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
                            piyo.sendImage(from, base64, swrt3)
                            } catch (err) {
                             console.error(err.message)
                             await piyo.sendFileFromUrl(from, errorur121, 'error.png', '💔️ Maaf, User tidak ditemukan')
                             piyo.sendText(ownerNumber, 'Sand Writing Error : ' + err)
                           }
                break

case 'heroml':
                try {
                            const resp = await axios.get('https://api.vhtear.com/herodetail?query=' + body.slice(8) + '&apikey=' + vhtearkey)
                            if (resp.data.error) return piyo.reply(from, resp.data.error, id)
                            const anm2 = `➸ Title : ${resp.data.result.title}\n➸ Quotes : ${resp.data.result.quotes}\n➸ Info : ${resp.data.result.info}\n➸ Atribut : ${resp.data.result.attributes}`
                            piyo.sendFileFromUrl(from, resp.data.result.pictHero, 'hero.jpg', anm2, id)
                            } catch (err) {
                                console.error(err.message)
                                await piyo.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Hero tidak ditemukan')
                                piyo.sendText(ownerNumber, 'Heroml Error : ' + err)
                           }
                            break

case 'glitchtext':
            case 'glitext':
                
                if (!q) return await piyo.reply(from, ind.wrongFormat(), id)
                const teks1 = q.substring(0, q.indexOf('|') - 1)
                const teks2 = q.substring(q.lastIndexOf('|') + 2)
                await piyo.reply(from, ind.wait(), id)
        await piyo.sendFileFromUrl(from, `https://videfikri.com/api/textmaker/tiktokeffect/?text1=${teks1}&text2=${teks2}`, 'glitch.jpg', '', id)
                    .then(() => console.log('Success creating image!'))
                    .catch(async (err) => {
                        console.error(err)
                        await piyo.reply(from, `Error!\n${err}`, id)
                    })
            break

case 'phcomment':
                if (!isPiyoganteng) return piyo.sendText(from, 'chat owner dulu coba:v\nKetik /ownerbot', id)
                if (!q.includes('|')) return await piyo.reply(from, ind.wrongFormat(), id)
                const usernamePh = q.substring(0, q.indexOf('|') - 1)
                const commentPh = q.substring(q.lastIndexOf('|') + 2)
                const ppPhRaw = await piyo.getProfilePicFromServer(sender.id)
                const dataPpPh = await bent('buffer')(ppPhRaw)
                const linkPpPh = await uploadImages(dataPpPh, `${sender.id}_ph`)
                await piyo.reply(from, ind.wait(), id)
                const preproccessPh = await axios.get(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${linkPpPh}&text=${commentPh}&username=${usernamePh}`)
                await piyo.sendFileFromUrl(from, preproccessPh.data.message, 'ph.jpg', '', id)
            break
                                     case 'hartatahta':
                        if (!q) return await piyo.reply(from, ind.wrongFormat(), id)
                        if (q.length === 1) return await piyo.reply(from, ind.wrongFormat(), id)
                        await piyo.reply(from, ind.wait(), id)
                        await piyo.sendFileFromUrl(from, `https://api.vhtear.com/hartatahta?text=${q}&apikey=${vhtearkey}`, `${q}.jpg`, '', id)
                            .then(() => console.log('Success creating image!'))
                            .catch(async (err) => {
                                console.error(err)
                                await piyo.reply(from, 'Error!', id)
                            })
                    break

case 'valentine':     
                        if (!q) return await piyo.reply(from, ind.wrongFormat(), id)
                        if (isMedia && type === 'image' || isQuotedImage) {
                            await piyo.reply(from, ind.wait(), id)
                            const nama = q.substring(0, q.indexOf('|'))
                            const pasangan = q.substring(q.lastIndexOf('|') + 2)
                            const encryptMedia = isQuotedImage ? quotedMsg : message
                            const dataPasangan = await decryptMedia(encryptMedia, uaOverride)
                            const foto = await piyo.getProfilePicFromServer(sender.id)
                            const dataMu = await bent('buffer')(foto)
                            const fotoMu = await uploadImages(dataMu)
                            const fotoPasangan = await uploadImages(dataPasangan)
                            rugaapi.valentine(nama, pasangan, fotoMu, fotoPasangan)
                                .then(async ({ result }) => {
                                    await piyo.sendFileFromUrl(from, result.imgUrl, `${nama}_${pasangan}.jpg`, '', id)
                                        .then(() => console.log('Success creating image!'))
                                })
                                .catch(async (err) => {
                                    console.error(err)
                                    await piyo.reply(from, 'Error!', id)
                                })
                        } else {
                            await piyo.reply(from, ind.wrongFormat(), id)
                        }
                    break

case 'trumptweet':
                if (args.length == 0) return piyo.reply(from, `Kirim perintah /trumptweet [ Teks ], contoh /trumptweet Piyo`, id)
                 piyo.reply(from, ind.wait(), id)
                const tump = body.slice(12)
                const trumj = await axios.get(`https://nekobot.xyz/api/imagegen?type=trumptweet&text=${tump}`)
                const tumh = trumj.data
                if (tumh.message.endsWith('.png')) {
                    var ext = '.png'
                } else {
                    var ext = '.jpg'
                }
                piyo.sendFileFromUrl(from, tumh.message, `Nekonime${ext}`, 'Noh mhank', id)
                await limitAdd(serial)
                break
//////////////////////////////////////////////////MENU GRUP////////////////////////////////////////////////////////
case 'afk':                             
              if (!isGroupMsg) return await piyo.reply(from, ind.groupOnly(), id)
                if (isAfkOn) return await piyo.reply(from, ind.afkOnAlready(), id)
                addAfk(sender.id, time, reason)
                await piyo.reply(from, ind.afkOn(pushname, reason), id)
break

case 'welcome':
               
                if (!isGroupMsg) return await piyo.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return await piyo.reply(from, ind.adminOnly(), id)
                if (ar[0] === 'enable') {
                    if (isWelcomeOn) return await piyo.reply(from, ind.welcomeOnAlready(), id)
                    _welcome.push(chat.id)
                    fs.writeFileSync('./settings/welcome.json', JSON.stringify(_welcome))
                    await piyo.reply(from, ind.welcomeOn(), id)
                } else if (ar[0] === 'disable') {
                    _welcome.splice(chat.id, 1)
                    fs.writeFileSync('./settings/welcome.json', JSON.stringify(_welcome))
                    await piyo.reply(from, ind.welcomeOff(), id)
                } else {
                    await piyo.reply(from, ind.wrongFormat(), id)
                }
            break

case 'reminder': // by Slavyan
        if (!q.includes('|')) return await piyo.reply(from, ind.wrongFormat(), id)
        const timeRemind = q.substring(0, q.indexOf('|') - 1)
        const messRemind = q.substring(q.lastIndexOf('|') + 2)
        const parsedTime = ms(toMs(timeRemind))
        addReminder(sender.id, messRemind, timeRemind)
        await piyo.sendTextWithMentions(from, `*「 REMINDER 」*\n\nReminder diaktifkan! :3\n\n➸ *Pesan*: ${messRemind}\n➸ *Durasi*: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${parsedTime.seconds} detik\n➸ *Untuk*: @${sender.id.replace('@c.us', '')}`, id)
        const intervRemind = setInterval(async () => {
            if (Date.now() > getReminderTime(sender.id)) {
                await piyo.sendTextWithMentions(from, `⏰ *「 REMINDER 」* ⏰\n\nAkhirnya tepat waktu~ @${sender.id.replace('@c.us', '')}\n\n➸ *Pesan*: ${getReminderMsg(sender.id)}`)
                _reminder.splice(getReminderPosition(sender.id), 1)
                fs.writeFileSync('./settings/reminder.json', JSON.stringify(_reminder))
                clearInterval(intervRemind)
            }
        }, 1000)
    break
    case 'antisticker':
        if (!isGroupMsg) return piyo.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
        if (!isGroupAdmins) return piyo.reply(from, `Perintah ini hanya bisa di gunakan oleh Admin group!`, id)
        if (!isBotGroupAdmins) return piyo.reply(from, `Perintah ini hanya bisa di gunakan jika Bot menjadi Admin!`, id)
        if (ar[0] === 'enable') {
            var cek = antisticker.includes(chatId);
            if(cek){
                return piyo.reply(from, `*「 ANTI SPAM STICKER 」*\nStatus : Sudah Aktif`, id)
             } else {
                antisticker.push(chatId)
                fs.writeFileSync('./settings/antisticker.json', JSON.stringify(antisticker))
                piyo.reply(from, `*「 ANTI SPAM STICKER 」*\nStatus : Aktif`, id)
            }
        } else if (ar[0] === 'disable') {
            var cek = antisticker.includes(chatId);
            if(cek){
                return piyo.reply(from, `*「 ANTI SPAM STICKER 」*\nStatus : Sudak DiNonaktif`, id) //if number already exists on database
            } else {
                let nixx = antisticker.indexOf(chatId)
                antisticker.splice(nixx, 1)
                fs.writeFileSync('./settings/antisticker.json', JSON.stringify(antisticker))
                piyo.reply(from, `*「 ANTI SPAM STICKER 」*\nStatus : Nonaktif`, id)
                limitAdd(serial)
            }
        }
        break
case 'antiporn': //ini antipornnya beli dulu apikenya, cuma support gambar / kalo mau support sticker dan video bisa ke saya , wa.me/6281414046576
     if (!isGroupMsg) return piyo.reply(from, `Fitur ini hanya bisa diaktifkan didalam grup!`, id)
     if (!isGroupAdmins) return piyo.reply(from, 'Perintah ini hanya bisa digunakan oleh Admin Grup!', id)
     if (!isBotGroupAdmins) return piyo.reply(from, 'Jadikan bot sebagai Admin terlebih dahulu!', id)
     if (ar[0] == 'on') {
        if (isAntiPorn) return piyo.reply(from, 'Anti-porn sudah pernah diaktifkan di grup ini sebelumnya!', id)
        isPorn.push(chatId)
        fs.writeFileSync('./settings/antiporn.json', JSON.stringify(isPorn))
        piyo.reply(from, '*ANTI PORN*\n\nPerhatian untuk member grup\nJika ada member yang mengirimkan porn, maka otomatis akan dikick dari grup ini!\n\n*Piyobot*', id)
        } else if (ar[0] == 'off') {
        let inlink = isPorn.indexOf(chatId)
        isPorn.splice(inlink, 1)
        fs.writeFileSync('./settings/antiporn.json', JSON.stringify(isPorn))
        piyo.reply(from, 'Anti Porn Sudah Dimatikan Di Grup Ini', id)
            } else {
        piyo.reply(from, `Untuk mengaktifkan antiporn gunakan\n${prefix}antiporn on \n${prefix}antiporn off `, id)
            }
            break
case 'antilink':                
    if (!isGroupMsg) return await piyo.reply(from, ind.groupOnly(), id)
    if (!isGroupAdmins) return await piyo.reply(from, ind.adminOnly(), id)
    if (!isBotGroupAdmins) return await piyo.reply(from, ind.botNotAdmin(), id)
    if (ar[0] === 'enable') {
        if (isDetectorOn) return await piyo.reply(from, ind.detectorOnAlready(), id)
        _antilink.push(chat.id)
        fs.writeFileSync('./settings/antilink.json', JSON.stringify(_antilink))
        await piyo.reply(from, ind.detectorOn(name, formattedTitle), id)
    } else if (ar[0] === 'disable') {
        _antilink.splice(chat.id, 1)
        fs.writeFileSync('./settings/antilink.json', JSON.stringify(_antilink))
        await piyo.reply(from, ind.detectorOff(), id)
    } else {
        await piyo.reply(from, ind.wrongFormat(), id)
    }
    break

case 'nsfw':               
        if (!isGroupMsg) return await piyo.reply(from, ind.groupOnly(), id)
        if (!isGroupAdmins) return await piyo.reply(from, ind.adminOnly(), id)
        if (ar[0] === 'enable') {
            _nsfw.push(chat.id)
            fs.writeFileSync('./settings/nsfw.json', JSON.stringify(_nsfw))
            await piyo.reply(from, ind.nsfwOn(), id)
        } else if (ar[0] === 'disable') {
            _nsfw.splice(chat.id, 1)
            fs.writeFileSync('./settings/nsfw.json', JSON.stringify(_nsfw))
            await piyo.reply(from, ind.nsfwOff(), id)
        } else {
            await piyo.reply(from, ind.wrongFormat(), id)
        }
    break

case 'jadian':
            if (!isGroupMsg) return piyo.reply(from, 'perintah ini hanya dapat digunakan di dalam grup', id)
            const mem = groupMembers
            const aku = mem[Math.floor(Math.random() * mem.length)];
            const kamu = mem[Math.floor(Math.random() * mem.length)];
            const sapa = `Cieee... @${aku.replace(/[@c.us]/g, '')} (💘) @${kamu.replace(/[@c.us]/g, '')} baru jadian nih\nBagi pj nya dong`
            await piyo.sendTextWithMentions(from, sapa)
            break
case 'suit':
	    if (!isGroupMsg) return piyo.reply(from, 'perintah ini hanya dapat digunakan di dalam grup', id)
            const batu = await fs.readFileSync(`./media/suit/batu.png`, { encoding: "base64" })
            const gunting = await fs.readFileSync(`./media/suit/gunting.png`, { encoding: "base64" })
            const kertas = await fs.readFileSync(`./media/suit/kertas.png`, { encoding: "base64" })
            
            const suitacak = Math.floor(Math.random() * 3)

            console.log(suitacak)

            if (suitacak === 0) {
                await piyo.sendImageAsSticker(from, `data:image/png;base64,${batu.toString('base64')}`)
            } else if (suitacak === 1) {
                await piyo.sendImageAsSticker(from, `data:image/png;base64,${gunting.toString('base64')}`)
            } else {
                await piyo.sendImageAsSticker(from, `data:image/png;base64,${kertas.toString('base64')}`)
            }
            break
case 'getpic':
                if (mentionedJidList.length !== 0) {
                    const userPic = await piyo.getProfilePicFromServer(mentionedJidList[0])
                    if (userPic === undefined) {
                        pek = errorImg
                    } else {
                        pek = userPic
                    }
                    await piyo.sendFileFromUrl(from, pek, 'pic.jpg', '', id)
                } else if (args.length !== 0) {
                    const userPic = await piyo.getProfilePicFromServer(args[0] + '@c.us')
                    if (userPic === undefined) {
                        peks = errorImg
                    } else {
                        peks = userPic
                    }
                    await piyo.sendFileFromUrl(from, peks, 'pic.jpg', '', id)
                } else {
                    await piyo.reply(from, ind.wrongFormat(), id)
                }
            break

case 'family100':
                if (!isGroupMsg) return piyo.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                try {
                const resp = await axios.get('https://api.vhtear.com/family100&apikey=' + vhtearkey)
                if (resp.data.error) return piyo.reply(from, resp.data.error, id)
                const anm2 = `➸ Soal : ${resp.data.result.soal}\n_Silahkan DiJawab_`
                const jwban = `➸ Jawaban : ${resp.data.result.jawaban}`
                piyo.reply(from, anm2, id)
                piyo.sendText(from, `30 Detik Lagi...`, id)
                await rugaapi.sleep(10000)
                piyo.sendText(from, `20 Detik Lagi...`, id)
                await rugaapi.sleep(10000)
                piyo.sendText(from, `10 Detik Lagi...`, id)
                await rugaapi.sleep(10000)
                piyo.reply(from, jwban, id)
                } catch (err) {
                    console.error(err.message)
                    await piyo.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Soal Quiz tidak ditemukan')
                    piyo.sendText(ownerNumber, 'Family100 Error : ' + err)
               }
    break

case 'santet':
                        if (!isGroupMsg) return piyo.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
                        if (mentionedJidList.length === 0) return piyo.reply(from, 'Tag member yang mau disantet\n\nContoh : /santet @tag | kalo berak kaga di siram', id)
                        if (args.length === 1) return piyo.reply(from, 'Masukkan alasan kenapa menyantet dia!!\n\nContoh : /santet @tag | kalo berak kaga di siram', id)
                            const terima1 = santet[Math.floor(Math.random() * (santet.length))]
                            const target = arg.split('|')[0]
                            const alasan = arg.split('|')[1]
                            await piyo.sendTextWithMentions(from, `Santet terkirim ke ${target}, Dengan alasan${alasan}\n\nJenis Santet Yang di Terima Korban adalah *${terima1}*`)
                    break

case 'kutuk':
                        if (!isGroupMsg) return piyo.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
                        if (mentionedJidList.length === 0) return piyo.reply(from, 'Tag member yang mau dikutuk\n\nContoh : /kutuk @tag | kalo berak kaga di siram', id)
                        if (args.length === 1) return piyo.reply(from, 'Masukkan alasan kenapa menyantet dia!!\n\nContoh : /kutuk @tag | kalo berak kaga di siram', id)
                            const terima2 = kutuk[Math.floor(Math.random() * (kutuk.length))]
                            const target2 = arg.split('|')[0]
                            const alasan2 = arg.split('|')[1]
                            await piyo.sendTextWithMentions(from, `Kutuk kau ${target2} jadi *${terima2}*`)
                    break

case 'caklontong':
              if (!isGroupMsg) return piyo.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
    try {
                const resp = await axios.get('https://api.vhtear.com/funkuis&apikey=' + vhtearkey)
                if (resp.data.error) return piyo.reply(from, resp.data.error, id)
                const anm2 = `➸ Soal : ${resp.data.result.soal}\n➸ Poin : ${resp.data.result.poin}\n➸ Kalau sudah tau jawaban silahkan ketik dibawah dan tunggu waktu habis`
                piyo.reply(from, anm2, id)
                piyo.sendText(from, `30 Detik Lagi...`, id)
                await rugaapi.sleep(10000)
                piyo.sendText(from, `20 Detik Lagi...`, id)
                await rugaapi.sleep(10000)
                piyo.sendText(from, `10 Detik Lagi...`, id)
                await rugaapi.sleep(10000)
                const jwban = `➸ Jawaban : ${resp.data.result.jawaban}\n➸ Deskripsi : ${resp.data.result.desk}`
                await piyo.sendText(from, jwban, id)
                } catch (err) {
                    console.error(err.message)
                    await piyo.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Soal Quiz tidak ditemukan')
                    piyo.sendText(ownerNumber, 'Zodiak Error : ' + err)
               }
               break

case 'tebakgambar': //piyobot
	   if (isKuis) return piyo.reply(from, `Kuis Sedang Berlangsung` , id)
           if (!isGroupMsg) return piyo.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
try{
            const resp = await axios.get('https://videfikri.com/api/tebakgambar')
            if (resp.data.error) return piyo.reply(from, resp.data.error, id)
            piyo.sendFileFromUrl(from, resp.data.result.soal_gbr, 'tebakgambar.jpg', '_Silahkan Jawab Maksud Dari Gambar Ini_\nHanya Satu Jawaban Untuk Satu Orang\nJawab Semua Dengan Huruf kecil\nContoh = anak maling\nDiberi waktu 30detik Untuk Menjawab Kuiz',id)
            _tebak.push(resp.data.result.jawaban.toLowerCase())
            fs.writeFileSync('./settings/tebakgambar.json', JSON.stringify(_tebak))
            kuis.push(chat.id)
            fs.writeFileSync('./settings/kuis.json', JSON.stringify(kuis))
	    await rugaapi.sleep(5000)
	    await piyo.sendText(from, `Jika Tidak Bisa Menjawab Soal Ini\nSilahkan /nextkuiz untuk menggantikan soal atau soal berikutnya\nDan /stopkuiz untuk memberhentikan kuiz`, id)
            } catch (err) {
           }
           break

case 'nextkuiz':
	   if (!isKuis) return piyo.reply(from, 'Tidak Ada Yang Menjalankan Kuiz' , id)
           if (!isGroupMsg) return piyo.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
try{
            let tebakk = _tebak.indexOf(chats);
            _tebak.splice(tebakk,1)
            fs.writeFileSync('./settings/tebakgambar.json', JSON.stringify(_tebak , null, 2))
            await piyo.reply(from, `Mohon Tunggu sebentar , Sedang Mengambil Kuiz` , id)
            const respek = await axios.get('https://videfikri.com/api/tebakgambar')
            if (respek.data.error) return piyo.reply(from, respek.data.error, id)
            piyo.sendFileFromUrl(from, respek.data.result.soal_gbr, 'tebakgambar.jpg', '_Silahkan Jawab Maksud Dari Gambar Ini_\nHanya Satu Jawaban Untuk Satu Orang\nJawab Semua Dengan Huruf kecil\nContoh anak maling ',id)
            _tebak.push(respek.data.result.jawaban.toLowerCase())
            fs.writeFileSync('./settings/tebakgambar.json', JSON.stringify(_tebak))
            } catch (err) {
            }
            break

case 'stopkuiz':
	    if (!isKuis) return piyo.reply(from, `Main Stop Stop Aja , Kuisnya gk ada bre\nBilang aja lu mau  liat cewe piyo kan` , id)
            if (!isGroupMsg) return piyo.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
try{
            let stop = _tebak.indexOf(chats);
            _tebak.splice(stop,1)
            fs.writeFileSync('./settings/tebakgambar.json', JSON.stringify(_tebak , null, 2))
            let stopis = kuis.indexOf(chatId)
            kuis.splice(stopis,1)
            fs.writeFileSync('./settings/kuis.json', JSON.stringify(kuis , null, 2))
            piyo.sendFileFromUrl(from, 'https://i.imgur.com/qkIGnR1.jpg' , 'piyo.jpg' , 'Yah kok udahan sih :(\nNanti Main Kuis Lagi Yak' , id)
            } catch (err) {
            }
            break 

case 'sider':
            if (!isGroupMsg) return piyo.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)                
            if (!quotedMsg) return piyo.reply(from, `Tolong Reply Pesan Bot`, id)
            if (!quotedMsgObj.fromMe) return piyo.reply(from, `Tolong Reply Pesan Bot`, id)
            try {
                const reader = await piyo.getMessageReaders(quotedMsgObj.id)
                let list = ''
                for (let pembaca of reader) {
                list += `- @${pembaca.id.replace(/@c.us/g, '')}\n` 
            }
             await piyo.sendTextWithMentions(from, `Ngeread doangg.. Nimbrung kagaa\n${list}`)
            } catch(err) {
                console.log(err)
                piyo.reply(from, `Maaf, Belum Ada Yang Membaca Pesan Bot atau Mereka Menonaktifkan Read Receipts`, id)    
            }
            break

case 'koin':
    if (!isGroupMsg) return piyo.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
    const side = Math.floor(Math.random() * 2) + 1
    if (side == 1) {
      piyo.sendStickerfromUrl(from, 'https://i.ibb.co/YTWZrZV/2003-indonesia-500-rupiah-copy.png', { method: 'get' })
    } else {
      piyo.sendStickerfromUrl(from, 'https://i.ibb.co/bLsRM2P/2003-indonesia-500-rupiah-copy-1.png', { method: 'get' })
    }
    break

case 'dadu':
    if (!isGroupMsg) return piyo.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
    const dice = Math.floor(Math.random() * 6) + 1
    await piyo.sendStickerfromUrl(from, 'https://www.random.org/dice/dice' + dice + '.png', { method: 'get' })
    break
    
case 'slap':
        piyo.reply(from, `sebentar cuk`, id);
        const person = author.replace('@c.us', '')
        await piyo.sendGiphyAsSticker(from, 'https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif')
        piyo.sendTextWithMentions(from, '@' + person + ' *slapped* ')
        break;

case 'peluk': //thanks to SASHA BOT
    const janjing = author.replace('@c.us', '')
    await piyo.sendGiphyAsSticker(from, 'https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif')
    piyo.sendTextWithMentions(from, `@` + janjing + ' *peyuuuk* ')
    break;

case 'pollresult':
    if (!isRegistered) return piyo.reply(from , `Maaf ${pushname}, sepertinya kamu belum terdaftar sebagai user Piyobot, untuk pendaftaran bisa menggunakan /register nama | Jenis Kelamin. Contoh: /register ${pushname}|cewe`, id)
    feature.getpoll(piyo, message, pollfile, voterslistfile)
    break

case 'vote':
    if (!isRegistered) return piyo.reply(from, `Maaf ${pushname}, sepertinya kamu belum terdaftar sebagai user Piyobot, untuk pendaftaran bisa menggunakan /register nama | Jenis Kelamin. Contoh: /register ${pushname}|cewe`, id)
    feature.voteadapter(piyo, message, pollfile, voterslistfile)
    break

case 'addpoll':
    if (!isRegistered) return piyo.reply(from, `Maaf ${pushname}, sepertinya kamu belum terdaftar sebagai user Piyobot, untuk pendaftaran bisa menggunakan /register nama | Jenis Kelamin. Contoh: /register ${pushname}|cewe`, id)
    feature.adminpollreset(piyo, message, message.body.slice(9), pollfile, voterslistfile)
    break

case 'addv':
    if (!isRegistered) return piyo.reply(from, `Maaf ${pushname}, sepertinya kamu belum terdaftar sebagai user Piyobot, untuk pendaftaran bisa menggunakan /register nama | Jenis Kelamin. Contoh: /register ${pushname}|cewe`, id)
    feature.addcandidate(piyo, message, message.body.slice(6), pollfile, voterslistfile)
    break

case 'edotensei':
        if (!isGroupMsg) return piyo.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
        if (!isGroupAdmins) return piyo.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id)
        if (!isBotGroupAdmins) return piyo.reply(from, 'Wahai admin, jadikan saya sebagai admin grup dahulu :)', id)
        if (mentionedJidList.length === 0) return piyo.reply(from, 'Fitur untuk menghapus member lalu menambahkan member kembali,kirim perintah ${prefix}edotensei @tagmember', id)
        for (let i = 0; i < mentionedJidList.length; i++) {
            if (groupAdmins.includes(mentionedJidList[i])) return piyo.reply(from, ind.error, id)
            if (ownerNumber.includes(mentionedJidList[i])) return piyo.reply(from, ind.error, id)
            await piyo.removeParticipant(groupId, mentionedJidList[i])
            piyo.reply(from, 'EDOTENSEI', id)
            await piyo.sendGiphyAsSticker(from, 'https://media.giphy.com/media/bq6o9H4ryyZzw2WiSA/giphy.gif')
            await rugaapi.sleep(4000)
            await piyo.addParticipant(from,`${mentionedJidList}`)
            await piyo.sendTextWithMentions(from, `Selamat datang ngab @${mentionedJidList}` , id)
        } 
        break
case 'ganteng':
            if (!isGroupMsg) return piyo.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
            const gmekk = await piyo.getGroupMembersId(groupId)
            let gmikk = gmekk[Math.floor(Math.random() * gmekk.length)]
            const mmkkkk = `YANG PALING GANTENG DISINI ADALAH @${gmikk.replace(/@c.us/g, '')}`
            piyo.sendTextWithMentions(from, mmkkkk, id)
            break
////////////////////////////////////////////////////////MENU ADMIN GRUP/////////////////////////////////////////
case 'add':
        if (!isGroupMsg) return piyo.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
        if (!isGroupAdmins) return piyo.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id)
        if (!isBotGroupAdmins) return piyo.reply(from, 'Gagal, silahkan tambahkan bot sebagai admin grup!', id)
        if (args.length !== 1) return piyo.reply(from, `Untuk menggunakan ${prefix}add\nPenggunaan: ${prefix}add <nomor>\ncontoh: ${prefix}add 628xxx`, id)
            try {
                await piyo.addParticipant(from,`${args[0]}@c.us`)
                .then(() => piyo.reply(from, 'Hai selamat datang', id))
            } catch {
                piyo.reply(from, 'Tidak dapat menambahkan target', id)
            }
        break
case 'kick':
        if (!isGroupMsg) return piyo.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
        if (!isGroupAdmins) return piyo.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id)
        if (!isBotGroupAdmins) return piyo.reply(from, 'Gagal, silahkan tambahkan bot sebagai admin grup!', id)
        if (mentionedJidList.length === 0) return piyo.reply(from, 'Maaf, format pesan salah.\nSilahkan tag satu atau lebih orang yang akan dikeluarkan', id)
        if (mentionedJidList[0] === botNumber) return await piyo.reply(from, 'Maaf, format pesan salah.\nTidak dapat mengeluarkan akun bot sendiri', id)
        await piyo.sendTextWithMentions(from, `Request diterima, mengeluarkan:\n${mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join('\n')}`)
        for (let i = 0; i < mentionedJidList.length; i++) {
            if (groupAdmins.includes(mentionedJidList[i])) return await piyo.sendText(from, 'Gagal, kamu tidak bisa mengeluarkan admin grup.')
            await piyo.removeParticipant(groupId, mentionedJidList[i])
        }
        break
case 'promote':
        if (!isGroupMsg) return piyo.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
        if (!isGroupAdmins) return piyo.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id)
        if (!isBotGroupAdmins) return piyo.reply(from, 'Gagal, silahkan tambahkan bot sebagai admin grup!', id)
        if (mentionedJidList.length !== 1) return piyo.reply(from, 'Maaf, hanya bisa mempromote 1 user', id)
        if (groupAdmins.includes(mentionedJidList[0])) return await piyo.reply(from, 'Maaf, user tersebut sudah menjadi admin.', id)
        if (mentionedJidList[0] === botNumber) return await piyo.reply(from, 'Maaf, format pesan salah.\nTidak dapat mempromote akun bot sendiri', id)
        await piyo.promoteParticipant(groupId, mentionedJidList[0])
        await piyo.sendTextWithMentions(from, `Request diterima, menambahkan @${mentionedJidList[0].replace('@c.us', '')} sebagai admin.`)
        break
case 'demote':
        if (!isGroupMsg) return piyo.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
        if (!isGroupAdmins) return piyo.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id)
        if (!isBotGroupAdmins) return piyo.reply(from, 'Gagal, silahkan tambahkan bot sebagai admin grup!', id)
        if (mentionedJidList.length !== 1) return piyo.reply(from, 'Maaf, hanya bisa mendemote 1 user', id)
        if (!groupAdmins.includes(mentionedJidList[0])) return await piyo.reply(from, 'Maaf, user tersebut belum menjadi admin.', id)
        if (mentionedJidList[0] === botNumber) return await piyo.reply(from, 'Maaf, format pesan salah.\nTidak dapat mendemote akun bot sendiri', id)
        await piyo.demoteParticipant(groupId, mentionedJidList[0])
        await piyo.sendTextWithMentions(from, `Request diterima, menghapus jabatan @${mentionedJidList[0].replace('@c.us', '')}.`)
        break
case 'bye':
        if (!isGroupMsg) return piyo.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
        if (!isGroupAdmins) return piyo.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id)
        piyo.sendText(from, 'Good bye... ( ⇀‸↼‶ )').then(() => piyo.leaveGroup(groupId))
        break
case 'del':
        if (!isGroupAdmins) return piyo.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id)
        if (!quotedMsg) return piyo.reply(from, `Maaf, format pesan salah silahkan.\nReply pesan bot dengan caption ${prefix}del`, id)
        if (!quotedMsgObj.fromMe) return piyo.reply(from, `Maaf, format pesan salah silahkan.\nReply pesan bot dengan caption ${prefix}del`, id)
        piyo.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
        break
case 'tagall':
case 'everyone':
                if (!isGroupMsg) return piyo.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
                if (!isGroupAdmins) return piyo.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id)
                const groupMem = await piyo.getGroupMembers(groupId)
                let hehex = '╔══✪〘 Mention All 〙✪══\n'
                for (let i = 0; i < groupMem.length; i++) {
                    hehex += '╠➥'
                    hehex += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
                }
                hehex += '╚═〘 *Piyo Bot Telah Aktif* 〙'
                await piyo.sendTextWithMentions(from, hehex)
                break
case 'mutegrup':
            if (!isGroupMsg) return piyo.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
            if (!isGroupAdmins) return piyo.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id)
            if (!isBotGroupAdmins) return piyo.reply(from, 'Gagal, silahkan tambahkan bot sebagai admin grup!', id)
            if (args.length !== 1) return piyo.reply(from, `Untuk mengubah settingan group chat agar hanya admin saja yang bisa chat\n\nPenggunaan:\n${prefix}mutegrup on --aktifkan\n${prefix}mutegrup off --nonaktifkan`, id)
            if (args[0] == 'on') {
                piyo.setGroupToAdminsOnly(groupId, true).then(() => piyo.sendText(from, 'Berhasil mengubah agar hanya admin yang dapat chat!'))
            } else if (args[0] == 'off') {
                piyo.setGroupToAdminsOnly(groupId, false).then(() => piyo.sendText(from, 'Berhasil mengubah agar semua anggota dapat chat!'))
            } else {
                piyo.reply(from, `Untuk mengubah settingan group chat agar hanya admin saja yang bisa chat\n\nPenggunaan:\n${prefix}mutegrup on --aktifkan\n${prefix}mutegrup off --nonaktifkan`, id)
            }
            break
case 'setprofile':
            if (!isGroupMsg) return piyo.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
            if (!isGroupAdmins) return piyo.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id)
            if (!isBotGroupAdmins) return piyo.reply(from, 'Gagal, silahkan tambahkan bot sebagai admin grup!', id)
            if (isMedia && type == 'image' || isQuotedImage) {
                const dataMedia = isQuotedImage ? quotedMsg : message
                const _mimetype = dataMedia.mimetype
                const mediaData = await decryptMedia(dataMedia, uaOverride)
                const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
                await piyo.setGroupIcon(groupId, imageBase64)
            } else if (args.length === 1) {
                if (!isUrl(url)) { await piyo.reply(from, 'Maaf, link yang kamu kirim tidak valid.', id) }
                piyo.setGroupIconByUrl(groupId, url).then((r) => (!r && r !== undefined)
                ? piyo.reply(from, 'Maaf, link yang kamu kirim tidak memuat gambar.', id)
                : piyo.reply(from, 'Berhasil mengubah profile group', id))
            } else {
                piyo.reply(from, `Commands ini digunakan untuk mengganti icon/profile group chat\n\n\nPenggunaan:\n1. Silahkan kirim/reply sebuah gambar dengan caption ${prefix}setprofile\n\n2. Silahkan ketik ${prefix}setprofile linkImage`)
            }
            break
///////////////////////////////////////////////////MENU SENDER//////////////////////////////////////////////////
case 'premiumcode':
     if (!isKode) return await piyo.reply(from, `Kode Tersebut Tidak Ada / Sudah Di Gunakan` , id)
     break
case 'sewacheck':
     if (!isSewa) return await piyo.reply(from, `Kamu Belom Sewa Bot`, id)
     const cekExpp = ms(sewa.getSewaExpired(groupId, _sewa) - Date.now())
     await piyo.reply(from, `* 「 SEWA EXPIRED 」*\n\n➸ *ID*: ${groupId}\n➸ *Sewa left*: ${cekExpp.days} day(s) ${cekExpp.hours} hour(s) ${cekExpp.minutes} minute(s)`, id)
     break
case 'listsewa':
      let listsewa = '「 *SEWA GROUP LIST* 」\n\n'
      let nomorListsewa = 0
      const arraysewa = []
      for (let i = 0; i < sewa.getAllSewa(_sewa).length; i++) {
      nomorListsewa++
      listsewa += `${nomorListsewa}. ${sewa.getAllSewa(_sewa)[i]}\n\n`
      }
     await piyo.reply(from, listsewa, id)
     break
case 'gantiprofile':
     if (!isOwnerBot) return piyo.reply(from, `Khusus owner` , id)
     if (!q) return piyo.reply(from, `Ketik ${prefix}gantiprofile nama | biostatus ` , id)
     const pof = q.substring(0, q.indexOf('|') - 1)
     const pof2 = q.substring(q.lastIndexOf('|') + 2)
     await piyo.setMyName(pof)
     await piyo.setMyStatus(pof2)
     console.log('Succes To Change Name And Info')
     piyo.sendText(from, 'Succes To Change Name And Info' , id)
     if (isMedia && type == 'image' || isQuotedImage) {
     const dataMedia = isQuotedImage ? quotedMsg : message
     const _mimetype = dataMedia.mimetype
     const mediaData = await decryptMedia(dataMedia, uaOverride)
     const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
     await piyo.setProfilePic(imageBase64)
     console.log('Succes To Change Profile Picture')
     piyo.sendText(from, 'Succes To Change Profile Picture' , id)
     await piyo.sendText(from, `Sudah kak >_<` , id)
      }
      break
case 'mystat':{
    const userid = sender.id
    const ban = banned.includes(userid)
    const blocked = await piyo.getBlockedIds()
    const isblocked = blocked.includes(userid)
    const ct = await piyo.getContact(userid)
    const isOnline = await piyo.isChatOnline(userid) ? '✔' : '❌'
    var sts = await piyo.getStatus(userid)
    const bio = sts
    const admins = groupAdmins.includes(userid) ? 'Admin' : 'Member'
    var found = false
        Object.keys(pengirim).forEach((i) => {
            if(pengirim[i].id == userid){
                found = i
            }
        })
    var adm = admins
    if (ct == null) {
        return await piyo.reply(from, 'Nomor WhatsApp tidak valid [ Tidak terdaftar di WhatsApp ]', id) 
    } else {
    const contact = ct.pushname
    const dp = await piyo.getProfilePicFromServer(userid)
    if (dp == undefined) {
        var pfp = 'https://raw.githubusercontent.com/Gimenz/line-break/master/profil.jpg'
        } else {
        var pfp = dp
        } 
    if (contact == undefined) {
        var nama = '_Dia pemalu, tidak mau menampilkan namanya_' 
        } else {
        var nama = contact
        } 
    const caption = `*Detail Member* ✨ \n\n● *Name :* ${nama}\n● *Bio :* ${bio.status}\n● *Chat link :* wa.me/${sender.id.replace('@c.us', '')}\n● *Role :* ${adm}\n● *Banned by Bot :* ${ban ? '✔' : '❌'}\n● *Blocked by Bot :* ${isblocked ? '✔' : '❌'}\n● *Chat with bot :* ${isOnline}`
    piyo.sendFileFromUrl(from, pfp, 'dp.jpg', caption)
    }
    }
break  

case 'buypremium':{
if (args.length == 0) return piyo.reply(from, `[❗] Kirim perintah */buypremium [teks]*\ncontoh : */buypremium Permisi Owner, Mau beli premium*` , id)
const mium = body.slice(11)
    piyo.sendText(ownerNumber, `*[Ada yang mau beli premium]*\n*WAKTU* : ${time}\nNO PENGIRIM : wa.me/${sender.id.match(/\d+/g)}\nGroup : ${formattedTitle}\n\n${mium}`)
    piyo.reply(from, 'Tunggu sebentar yak , nanti owner chat kamu, php anak kontol' ,id)
}
break
case 'bugreport':{
    if (args.length == 0) return piyo.reply(from, `[❗] Kirim perintah */bugreport [teks]*\ncontoh : */bugreport Permisi Owner, Ada bug pada command /otakudesu, Tolong diperbaiki*` , id)
    const bug = body.slice(11)
        piyo.sendText(ownerNumber, `*[BUG REPORT]*\n*WAKTU* : ${time}\nNO PENGIRIM : wa.me/${sender.id.match(/\d+/g)}\nGroup : ${formattedTitle}\n\n${bug}`)
        piyo.reply(from, 'Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi.' , id)
    }
    break
case 'join':                                      
    if (args.length == 0) return piyo.reply(from, `Jika kalian ingin mengundang bot kegroup silahkan invite atau dengan\nketik ${prefix}join [link group]`, id)
    let linkgrup = body.slice(6)
    let islink = linkgrup.match(/(https:\/\/chat.whatsapp.com)/gi)
    let chekgrup = await piyo.inviteInfo(linkgrup)
    if (!islink) return piyo.reply(from, 'Maaf link group-nya salah! silahkan kirim link yang benar', id)
    if (isOwnerBot) {
        await piyo.joinGroupViaLink(linkgrup)
              .then(async () => {
                  await piyo.sendText(from, 'Berhasil join grup via link!')
                  await piyo.sendText(chekgrup.id, `Halo Anjg~, Im Piyobot. Untuk Memulai Bot silahkan ketik  ${prefix}menu`)
              })
    } else {
        let cgrup = await piyo.getAllGroups()
        if (cgrup.length > groupLimit) return piyo.reply(from, `Sorry, the group on this bot is full\nMax Group is: ${groupLimit}`, id)
        await piyo.sendContact(from, ownerNumber)
        if (cgrup.size < memberLimit) return piyo.reply(from, `Apanih member dikit bat ngentot ${memberLimit} people`, id)
        await piyo.joinGroupViaLink(linkgrup)
              .then(async () =>{
                  await piyo.reply(from, 'Berhasil join grup via link!', id)
              })
              .catch(() => {
                 piyo.reply(from, 'Gagal!', id)
             })
    }
    break
case 'botstat':
        {
                        
                    const loadedMsg = await piyo.getAmountOfLoadedMessages()
                    const chatIds = await piyo.getAllChatIds()
                    const groups = await piyo.getAllGroups()
                    piyo.sendText(from, `Status :\n- *${loadedMsg}* Loaded Messages\n- *${groups.length}* Group Chats\n- *${chatIds.length - groups.length}* Personal Chats\n- *${chatIds.length}* Total Chats`)
                    break
                }
case 'mutualan':
                    if (isLimit(pengirim)) return piyo.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik /limit Untuk Mengecek Kuota Limit Kamu`, id)
                     await limitAdd(pengirim)
                    if (!chatId) return await piyo.reply(from, 'mutualan tidak bisa dalam grup', id)
                    await piyo.reply(from, ind.waitmutualan(), id)        
                    const ganteng = nomormutualan[Math.floor(Math.random() * (nomormutualan.length))]
                    await piyo.sendContact(from, ganteng)
                    .then(() => piyo.sendText(from, 'Partner found :🙉\n/next — find a new Partner'))
                break
case 'next':
                     if (isLimit(pengirim)) return piyo.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik /limit Untuk Mengecek Kuota Limit Kamu`, id)
                    await limitAdd(pengirim)
                     if (!isRegistered) return await piyo.reply(from, 'mutualan tidak bisa dalam grup', id)
                    await piyo.reply(from, ind.waitmutualan(), id)        
                     const cantik = nomormutualan[Math.floor(Math.random() * (nomormutualan.length))]
                     await piyo.sendContact(from, cantik)
                     .then(() => piyo.sendText(from, 'Partner found :🙉\n/next — find a new partner'))
                    break
case 'send':
                     if (!isRegistered) return piyo.reply(from, `Maaf ${pushname}, sepertinya kamu belum terdaftar sebagai user Piyobot, untuk pendaftaran bisa menggunakan */register* nama | no hp.    Contoh: /register |${pushname}|cewe/cowo`, id)
                     if (isGroupMsg) return piyo.reply(from, 'Perintah ini hanya bisa dilakukan di chat personal!', id)
                     var cek = pengirimm.includes(sender.id);
                     if (!cek) {
                         return piyo.reply(from, 'kamu belum terdaftar, untuk mendaftar kirim /register no wa kamu\ncontoh : /register namakamu | cewe / cowo ', id) //if user is not registered
                     } else {
                         if (isMedia && arghh.length >= 1) {
                             const mediaData = await decryptMedia(message, uaOverride)
                             const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                             const opo = body.slice(6)
                             piyo.sendImage(uwong, imageBase64, 'gambar.jpeg', `${opo}\n\npesan dari : ${pushname}\nNomornya: wa.me/${serial.replace(/@c.us/g,'')}`)
                                 .then(() => piyo.reply(from, 'Berhasil mengirim pesan\nTunggu pesan dari seseorang, kalo ga di bales coba lagi aja\nKalo pesan nya ada di kamu ulang lagi aja', id))
                         } else if (isQuotedImage && argus.length >= 1) {
                             const mediaData = await decryptMedia(quotedMsg, uaOverride)
                             const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                             const opo = body.slice(6)
                             piyo.sendImage(uwong, imageBase64, 'gambar.jpeg', `${opo}\n\npesan dari : ${pushname}\nNomornya: wa.me/${serial.replace(/@c.us/g,'')}`)
                                 .then(() => piyo.reply(from, 'Berhasil mengirim pesan\nTunggu pesan dari seseorang, kalo ga di bales coba lagi aja\nKalo pesan nya ada di kamu ulang lagi aja', id))
                         } else if (argus.length >= 1) {
                             const opo = body.slice(6)
                             piyo.sendText(uwong, `${opo}\n\npesan dari : ${pushname}\nNomornya: wa.me/${serial.replace(/@c.us/g,'')}`)
                                 .then(() => piyo.reply(from, 'Berhasil mengirim pesan\nTunggu pesan dari seseorang, kalo ga di bales coba lagi aja\nKalo pesan nya ada di kamu ulang lagi aja', id))
                         } else {
                             await piyo.reply(from, 'Format salah! Untuk membuka daftar perintah kirim /help', id)
                         }
                     }
 
                     break
                case 'addupdate':
                    {
                    if (!isOwnerBot) return piyo.reply(from, 'Maaf, perintah ini hanya dapat dipakai oleh owner!', id)
                    const update = body.slice(10)
                                updatepiyobot.push(update)
                                fs.writeFileSync('./settings/update.json', JSON.stringify(updatepiyobot))
                                piyo.reply(from, `Sukses menambahkan update :)`, id)
                            }
                            break
case 'update': {
                                const updaterr = updatepiyobot
                                let updatee = `╔══✪〘 *update* 〙✪══\n`
                                for (let i = 0; i < updaterr.length; i++) {
                                    updatee += '╠➥'
                                    updatee += ` ${updaterr[i]}\n`
                                }
                                updatee += '╚═〘 *Piyo Bot* 〙'
                                await piyo.sendText(from, updatee)
                    }       
                    break
case 'cekzodiak':         
                      if (args.length !== 4) return piyo.reply(from, `Untuk mengecek zodiak, gunakan ${prefix}cekzodiak nama tanggallahir bulanlahir tahunlahir\nContoh: ${prefix}cekzodiak fikri 13 06 2004`, id)
                        const cekzodiak = await rugaapi.cekzodiak(args[0],args[1],args[2])
                        await piyo.reply(from, cekzodiak, id)
                        .catch(() => {
                            piyo.reply(from, 'Ada yang Error!', id)
                        })
                        break
                          case 'spamcall':                
                        if (args.length == 0) return piyo.reply(from, `Untuk Spamcall silahkan ketik ${prefix}spamcall nomornya, Nomor diawali dengan 8 tidak +62 / 0 , dan jangan gunakan -\n\nContoh !spamcall 89588888888`, id)
                        const spamcall = await rugaapi.spamcall(args[0])
                        await piyo.reply(from, 'Sukses Mengirim Spamcall', id)
                        .catch(() => {
                            piyo.reply(from, 'Ada yang Error!', id)
                        })
                   break
case 'maps':
                    if (arghh.length === 1) return piyo.reply(from, 'Kirim perintah */maps [optional]*, Contoh : */maps Jakarta*' , id)
                    console.log(q)
                    try {
                    const mapz2 = await axios.get('https://mnazria.herokuapp.com/api/maps?search=' + q)
                    const { gambar } = mapz2.data
                    const pictk = await bent("buffer")(gambar)
                    const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
                    piyo.sendImage(from, base64, 'maps.jpg', `*Hasil Maps : ${q}*`)
                    } catch (err) {
                     console.error(err.message)
                     await piyo.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
                     piyo.sendText(ownerNumber, 'Error Maps : '+ err)
                   }
                  break
case 'quiziz': 
	            if(!q) return piyo.reply(from, `Kirim perintah */quiziz idnya* , Contoh : */quiziz 16126165*` , id)
		    const quiz = await hackq.fetchQuiz(`${q}`)
		    await piyo.sendText(from, quiz , id)
break
	            
		    
		    
///////////////////////////////////////////Owner Group////////////////////////////////////////////////////////////
case 'kickall': //mengeluarkan semua member
if (!isGroupMsg) return piyo.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
let isOwner = chat.groupMetadata.owner == pengirim
if (!isOwner) return piyo.reply(from, 'Maaf, perintah ini hanya dapat dipakai oleh owner grup!', id)
if (!isBotGroupAdmins) return piyo.reply(from, 'Gagal, silahkan tambahkan bot sebagai admin grup!', id)
    const allMem = await piyo.getGroupMembers(groupId)
    for (let i = 0; i < allMem.length; i++) {
        if (groupAdmins.includes(allMem[i].id)) {

        } else {
            await piyo.removeParticipant(groupId, allMem[i].id)
        }
    }
    piyo.reply(from, 'Success kick all member', id)
break
//////////////////////////////////////////////MENU IMAGE/////////////////////////////////////////////////////////
case 'faceanime':
              if (isMedia && type === 'image' || isQuotedImage){
                  const encryptMedias = isQuotedImage ? quotedMsg : message
                  const dataface = await decryptMedia(encryptMedias, uaOverride)
                  const fotoface = await uploadImages(dataface, `fotoface.${sender.id}`)
                  await piyo.reply(from, ind.wait() , id)
                  const fotopio = await axios.get(`https://nekobot.xyz/api/imagegen?type=animeface&image=${fotoface}`)
                  piyo.sendFileFromUrl(from, fotopio.data.message, 'Face.jpg', '', id)
              }
              break
case 'wasted':
                if (isMedia && type === 'image' || isQuotedImage) {
                    const encryptMediaWt = isQuotedImage ? quotedMsg : message
                    const dataPotoWt = await decryptMedia(encryptMediaWt, uaOverride)
                    const fotoWtNya = await uploadImages(dataPotoWt, `fotoProfilWt.${sender.id}`)
                    await piyo.reply(from, ind.wait(), id)
                    await piyo.sendFileFromUrl(from, `https://some-random-api.ml/canvas/wasted?avatar=${fotoWtNya}`, 'Wasted.jpg', 'Ini..., sticker nya lagi di kirim', id).then(() => piyo.sendStickerfromUrl(from, `https://some-random-api.ml/canvas/wasted?avatar=${fotoWtNya}`))
                    console.log('Success sending Wasted image!')
                } else {
                    await piyo.reply(from, ind.wrongFormat(), id)
                }
            break
case 'gayy':
               if (isMedia && type ==='image' || isQuotedImage){
                   const encryptMediaa = isQuotedImage ? quotedMsg : message
                   const datapotogay = await decryptMedia(encryptMediaa, uaOverride)
                   const fotogay = await uploadImages(datapotogay, `fotogay.${sender.id}`)
                   await piyo.reply(from, ind.wait() ,id)
                   await piyo.sendFileFromUrl(from, `https://some-random-api.ml/canvas/gay?avatar=${fotogay}`, 'gay.jpg' , 'nih kontol' , id)
                   console.log('succes mengirim gay!')
               } else {
                   await piyo.reply(from, `wrong format , kirim gambar dengan caption /gay`, id)
               }
             break
case 'totext': 
if (isMedia && type === 'image' || isQuotedImage) {
	        await piyo.reply(from, ind.wait(), id)
	        const encryptMedia = isQuotedImage ? quotedMsg : message
                mediaData = await decryptMedia(encryptMedia, uaOverride)
                fs.writeFileSync(`./media/images/ocr.jpg`, mediaData)
                imagetotext(`./media/images/ocr.jpg`)
                .then(data => {
                piyo.sendText(from, `*Image To Text* \n\nHasil: \n\n${data}`, id)
                })
                .catch(err => {
                console.log(err)
                })
                } 
else if (type === 'sticker' || isQuotedSticker) {
                   const dataMedia = isQuotedSticker ? quotedMsg : message
		   const _mimetype = dataMedia.mimetype
		   const mediaData = await decryptMedia(dataMedia, uaOverride)
                   fs.writeFileSync(`./media/sticker/ocr.jpg`, mediaData)
                   imagetotext(`./media/sticker/ocr.jpg`)
                   .then(data => {
                   piyo.sendText(dari, `*Read Data Text in Sticker* \n\nHasil: \n\n${data}`, id)
                   })
                   .catch(err => {
                   console.log(err)
                   })
                 }
                 break
			
case 'whatanime':
if (isMedia && type === 'image' || isQuotedImage) {
                    await piyo.reply(from, ind.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const imageLink = await uploadImages(mediaData, `anime.${sender.id}`)
                    const ank = await axios.get(`http://lolhuman.herokuapp.com/api/wait?apikey=${lolhuman}&url=${imageLink}`)
                    const anj = ank.data.result
                    await piyo.sendFileFromUrl(from, anj.video , 'piyo.mp4', `*Terdeteksi Anime Berikut :*\n*Nama :* ${anj.title_romaji}\n*Nama Lain :* ${anj.title_native}\n*DiWaktu :* ${anj.at}\n*Episode :* ${anj.episode}\n*Kesamaan :* ${anj.similarity}`, id)
}
break
case 'neko18':
              await piyo.reply(from, ind.wait(), id)
	      await piyo.sendFileFromUrl(from, `https://lolhuman.herokuapp.com/api/random/nsfw/neko?apikey=${lolhuman}` , 'neko.jpg' , 'Nih kak' , id)
              await limitAdd(serial)
                        break
case 'anime':               
            if (args.length == 0) return piyo.reply(from, `Untuk menggunakan ${prefix}anime\nSilahkan ketik: ${prefix}anime [query]\nContoh: ${prefix}anime random\n\nquery yang tersedia:\nrandom, waifu, husbu, neko`, id)
            if (args[0] == 'random' || args[0] == 'waifu' || args[0] == 'husbu' || args[0] == 'neko') {
                fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/' + args[0] + '.txt')
                .then(res => res.text())
                .then(body => {
                    let randomnime = body.split('\n')
                    let randomnimex = randomnime[Math.floor(Math.random() * randomnime.length)]
                    piyo.sendFileFromUrl(from, randomnimex, '', 'Nee..', id)
                })
                .catch(() => {
                    piyo.reply(from, 'Ada yang Error!', id)
                })
            } else {
                piyo.reply(from, `Maaf query tidak tersedia. Silahkan ketik ${prefix}anime untuk melihat list query`)
            }
            break
case 'charsgenshin':{
            const response = await requests("http://hujanapi.xyz/api/gichars?apikey=" + apikeyz)
            const data = await response.json()
            const liyue = data.result.liyue
            const mondstadt = data.result.mondstadt
            let fex = "\n\n*List Character Mondstadt*\n"
            let num = 0
            let fox = "*List Character Liyue*\n"
            let no = 0
            for (var a = 0; a < liyue.length; a++) {
                no += 1
                fox += "\n"+no+". "+liyue[a]
            }
            for (var a = 0; a < mondstadt.length; a++) {
                num += 1
                fex += "\n"+num+". "+mondstadt[a]
            }
            const mat = fox+" "+fex
            piyo.reply(from, mat , id)
}
break
            case 'genshin':{
            if (!q) return piyo.reply(from, `Silahkan liat characternya\nDengan Ketik /charsgenshin ` , id)
            const response = await requests("http://hujanapi.xyz/api/gichar?query="+ q +"&apikey="+apikeyz)
            const datas = await response.json()
            const asu = datas.result
            let fox = "*Detail Character*\n"
            fox += "\n*Title :* " + asu.title
            fox += "\n*Info :* " + asu.intro
            await piyo.sendFileFromUrl(from, asu.cover1 , 'piyo.jpg' , fox , id)
            await piyo.sendFileFromUrl(from, asu.cv[0].audio[2] , 'piyo.mp3' , 'nih kak' , id)
        }
break
			
case 'kpop':     
        if (args.length == 0) return piyo.reply(from, `Untuk menggunakan ${prefix}kpop\nSilahkan ketik: ${prefix}kpop [query]\nContoh: ${prefix}kpop bts\n\nquery yang tersedia:\nblackpink, exo, bts`, id)
            if (args[0] == 'blackpink' || args[0] == 'exo' || args[0] == 'bts') {
                fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/kpop/' + args[0] + '.txt')
                .then(res => res.text())
                .then(body => {
                    let randomkpop = body.split('\n')
                    let randomkpopx = randomkpop[Math.floor(Math.random() * randomkpop.length)]
                    piyo.sendFileFromUrl(from, randomkpopx, '', 'Nee..', id)
                })
                .catch(() => {
                    piyo.reply(from, 'Ada yang Error!', id)
                })
            } else {
                piyo.reply(from, `Maaf query tidak tersedia. Silahkan ketik ${prefix}kpop untuk melihat list query`)
            }
            break
case 'memes':                
            const randmeme = await meme.random()
            piyo.sendFileFromUrl(from, randmeme, '', '', id)
            .catch(() => {
                piyo.reply(from, 'Ada yang Error!', id)
            })
            break
case 'wallpaperanime2':
    piyo.reply(from, ind.wait(), id);
    axios.get('https://akaneko-api.herokuapp.com/api/wallpapers').then(res => {
        piyo.sendFileFromUrl(from, res.data.url, 'Desktop Wallpaper.jpeg', 'Enjoy :>', id);
    });
    break
case 'wallpaperanime':
    piyo.reply(from, ind.wait(), id);
    axios.get('https://akaneko-api.herokuapp.com/api/mobileWallpapers').then(res => {
        piyo.sendFileFromUrl(from, res.data.url, 'Desktop Wallpaper.jpeg', 'Enjoy :>', id);
    });
break

case 'randomhentai':
    if (isGroupMsg) return piyo.reply(from, 'Perintah ini hanya bisa dilakukan di chat personal!', id)
    if (isLimit(serial)) return piyo.reply(from, `_Hai ${pushname} Limit request anda sudah mencapai batas, Akan direset kembali setiap jam 9 dan gunakan seperlunya!_`, id)
    await piyo.reply(from, ind.wait(), id)
    await piyo.sendFileFromUrl(from, `https://lolhuman.herokuapp.com/api/random/nsfw/hentai?apikey=${lolhuman}` , 'hentai.jpg' , 'Nih kak' , id)
    await limitAdd(serial)
    break
    case 'gifhentai':
        if (isGroupMsg) return piyo.reply(from, 'Perintah ini hanya bisa dilakukan di chat personal!', id)
       await piyo.reply(from, ind.wait(), id);
        axios.get('https://nekos.life/api/v2/img/Random_hentai_gif').then(res => {
            piyo.sendFileFromUrl(from, res.data.url, 'bakaaaaa baka hentai');
        });
        break
        case 'pussy':
            if (isGroupMsg) return piyo.reply(from, 'Perintah ini hanya bisa dilakukan di chat personal!', id)
         await piyo.reply(from, ind.wait(), id);
            axios.get('https://nekos.life/api/v2/img/pussy_jpg').then(res => {
                piyo.sendFileFromUrl(from, res.data.url);
            });
            break
case 'rhentai':
        if (isGroupMsg) return piyo.reply(from, 'Perintah ini hanya bisa dilakukan di chat personal!', id)
        if (isLimit(serial)) return piyo.reply(from, `_Hai ${pushname} Limit request anda sudah mencapai batas, Akan direset kembali setiap jam 9 dan gunakan seperlunya!_`, id)
  await piyo.reply(from, ind.wait(), id);
   axios.get('https://nekos.life/api/v2/img/hentai').then(res => {
       piyo.sendFileFromUrl(from, res.data.url);
       limitAdd(serial)
   });
   break
case 'dewabatch':       
if (args.length == 0) return piyo.reply(from, `Untuk mencari anime batch, ketik ${prefix}dewabatch judul\n\nContoh: ${prefix}dewabatch naruto`, id)
rugaapi.dewabatch(args[0])
.then(async(res) => {
await piyo.sendFileFromUrl(from, `${res.link}`, '', `${res.text}`, id)
})
break

case 'images':               
    if (args.length == 0) return piyo.reply(from, `Untuk mencari gambar di pinterest\nketik: ${prefix}images [search]\ncontoh: ${prefix}images naruto`, id)
    const cariwall = body.slice(8)
    const hasilwall = await images.fdci(cariwall)
    await piyo.sendFileFromUrl(from, hasilwall, '', '', id)
    .catch(() => {
        piyo.reply(from, 'Ada yang Error!', id)
    })
    break
case 'sreddit':
        
    if (args.length == 0) return piyo.reply(from, `Untuk mencari gambar di sub reddit\nketik: ${prefix}sreddit [search]\ncontoh: ${prefix}sreddit naruto`, id)
    const carireddit = body.slice(9)
    const hasilreddit = await images.sreddit(carireddit)
    await piyo.sendFileFromUrl(from, hasilreddit, '', '', id)
    .catch(() => {
        piyo.reply(from, 'Ada yang Error!', id)
    })
break
case 'hilang':                
                if (!q) return await piyo.reply(from, ind.wrongFormat(), id)
                const atas = q.substring(0, q.indexOf('|'))
                const tengah = q.substring(q.indexOf('|') + 2, q.lastIndexOf('|'))
                const bawah = q.substring(q.lastIndexOf('|') + 2)
                if (isMedia && type === 'image' || isQuotedImage) {
                    await piyo.reply(from, ind.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const imageLink = await uploadImages(mediaData)
                    rugaapi.missing(atas, tengah, bawah, imageLink)
                        .then(async ({ result }) => {
                            await piyo.sendFileFromUrl(from, result.imgUrl, 'missing.jpg', '', id)
                                .then(() => console.log('Success sending image!'))
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await piyo.reply(from, 'Error!', id)
                        })
                } else {
                    await piyo.reply(from, ind.wrongFormat(), id)
                }
            break
case 'meme':                
            if ((isMedia || isQuotedImage) && args.length >= 2) {
                const top = arg.split('|')[0]
                const bottom = arg.split('|')[1]
                const encryptMedia = isQuotedImage ? quotedMsg : message
                const mediaData = await decryptMedia(encryptMedia, uaOverride)
                const getUrl = await uploadImages(mediaData, false)
                const ImageBase64 = await meme.custom(getUrl, top, bottom)
                piyo.sendFile(from, ImageBase64, 'image.png', '', null, true)
                    .then(() => {
                        piyo.reply(from, 'Ini makasih!',id)
                    })
                    .catch(() => {
                        piyo.reply(from, 'Ada yang error!')
                    })
            } else {
                await piyo.reply(from, `Tidak ada gambar! Silahkan kirim gambar dengan caption ${prefix}meme <teks_atas> | <teks_bawah>\ncontoh: ${prefix}meme teks atas | teks bawah`, id)
            }
            break
case 'quotemaker':               
if (!q) return piyo.reply(from, 'Ketik /quotemaker quotesnya\nExample: /quotemaker piyoganteng' , id)
			{
                piyo.reply(from, 'Proses kak..', id)
                try {
                    const hasilqmaker = await axios.get(`https://lolhuman.herokuapp.com/api/quotemaker?apikey=${lolhuman}&text=${q}`)
                    piyo.sendFileFromUrl(from, `${hasilqmaker}`, '', 'Ini kak..', id)
                } catch {
                    piyo.reply('Yahh proses gagal, kakak isinya sudah benar belum?..', id)
                }
            } 
            break
case 'loli':
                await piyo.reply(from, ind.wait(), id)
                const loli = await axios.get(`https://api.vhtear.com/randomloli&apikey=${vhtearkey}`)
                const loly = loli.data.result
                piyo.sendFileFromUrl(from, loly.result, 'loli.jpeg', '*LOLI*', id)
                break

case 'shota':
                await piyo.reply(from, ind.wait(), id)
                const imageToBase64 = require('image-to-base64')
                var shouta = ['shota anime', 'anime shota'];
                var shotaa = shouta[Math.floor(Math.random() * shouta.length)];
                var urlshot = "https://api.fdci.se/rep.php?gambar=" + shotaa;

                axios.get(urlshot)
                    .then((result) => {
                        var sht = JSON.parse(JSON.stringify(result.data));
                        var shotaak = sht[Math.floor(Math.random() * sht.length)];
                        imageToBase64(shotaak)
                            .then(
                                (response) => {
                                    let img = 'data:image/jpeg;base64,' + response
                                    piyo.sendFile(from, img, "shota.jpg", `*SHOTA*`, id)
                                })
                            .catch(
                                (error) => {
                                    console.log(error);
                                })
                    })
                break
case 'blowjob':
                    if (chatId){
                        
                        await piyo.reply(from, ind.wait(), id)
                            rugaapi.blowjob()
                            .then(async ({ url }) => {
                                await piyo.sendFileFromUrl(from, url, 'blowjob.jpg', '', id)
                                    .then(() => console.log('Success sending blowjob pic!'))
                            })
                    }
                    break
case 'fetish':
                if (chatId) {
                        
                        await piyo.reply(from, ind.wait(), id)
                        try {
                                          if (ar[0] === 'armpits') {
                                            rugaapi.armpits()
                                                .then(async ({ url }) => {
                                                    await piyo.sendFileFromUrl(from, url, 'armpits.jpg', '', id)
                                                        .then(() => console.log('Success sending armpits pic!'))
                                                })
                                        } else if (ar[0] === 'feets') {
                                            rugaapi.feets()
                                                .then(async ({ url }) => {
                                                    await piyo.sendFileFromUrl(from, url, 'feets.jpg', '', id)
                                                        .then(() => console.log('Success sending feets pic!'))
                                                })
                                        } else if (ar[0] === 'thighs') {
                                            rugaapi.thighs()
                                                .then(async ({ url }) => {
                                                    await piyo.sendFileFromUrl(from, url, 'thighs.jpg', '', id)
                                                        .then(() => console.log('Success sending thighs pic!'))
                                                })
                                        } else if (ar[0] === 'ass') {
                                            rugaapi.ass()
                                                .then(async ({ url }) => {
                                                    await piyo.sendFileFromUrl(from, url, 'ass.jpg', '', id)
                                                        .then(() => console.log('Success sending ass pic!'))
                                                })
                                        } else if (ar[0] === 'boobs') {
                                            rugaapi.boobs()
                                                .then(async ({ url }) => {
                                                    await piyo.sendFileFromUrl(from, url, 'boobs.jpg', '', id)
                                                        .then(() => console.log('Success sending boobs pic!'))
                                                })
                                        } else if (ar[0] === 'belly') {
                                            rugaapi.belly()
                                                .then(async ({ url }) => {
                                                    await piyo.sendFileFromUrl(from, url, 'belly.jpg', '', id)
                                                        .then(() => console.log('Success sending belly pic!'))
                                                })
                                        } else if (ar[0] === 'sideboobs') {
                                            rugaapi.sideboobs()
                                                .then(async ({ url }) => {
                                                    await piyo.sendFileFromUrl(from, url, 'sideboobs.jpg', '', id)
                                                        .then(() => console.log('Success sending sideboobs pic!'))
                                                })
                                        } else if (ar[0] === 'ahegao') {
                                            rugaapi.ahegao()
                                                .then(async ({ url }) => {
                                                    await piyo.sendFileFromUrl(from, url, 'ahegao.jpg', '', id)
                                                        .then(() => console.log('Success sending ahegao pic!'))
                                                })
                                        } else {
                                            await piyo.reply(from, 'Tag not found.', id)
                                        }
                                    } catch (err) {
                                        console.error(err)
                                        await piyo.reply(from, err, id)
                                    }
                                } else {
                                    const req = args.map((v) => v.toLowerCase())
                                    if (ar.length !== 0) return await piyo.reply(from, ind.wrongFormat(), id)
                                    await piyo.reply(from, ind.wait(), id)
                                    try {
                                        if (ar[0] === 'armpits') {
                                            rugaapi.armpits()
                                                .then(async ({ url }) => {
                                                    await piyo.sendFileFromUrl(from, url, 'armpits.jpg', '', id)
                                                        .then(() => console.log('Success sending armpits pic!'))
                                                })
                                        } else if (ar[0] === 'feets') {
                                            rugaapi.feets()
                                                .then(async ({ url }) => {
                                                    await piyo.sendFileFromUrl(from, url, 'feets.jpg', '', id)
                                                        .then(() => console.log('Success sending feets pic!'))
                                                })
                                        } else if (ar[0] === 'thighs') {
                                            rugaapi.thighs()
                                                .then(async ({ url }) => {
                                                    await piyo.sendFileFromUrl(from, url, 'thighs.jpg', '', id)
                                                        .then(() => console.log('Success sending thighs pic!'))
                                                })
                                        } else if (ar[0] === 'ass') {
                                            rugaapi.ass()
                                                .then(async ({ url }) => {
                                                    await piyo.sendFileFromUrl(from, url, 'ass.jpg', '', id)
                                                        .then(() => console.log('Success sending ass pic!'))
                                                })
                                        } else if (ar[0] === 'boobs') {
                                            rugaapi.boobs()
                                                .then(async ({ url }) => {
                                                    await piyo.sendFileFromUrl(from, url, 'boobs.jpg', '', id)
                                                        .then(() => console.log('Success sending boobs pic!'))
                                                })
                                        } else if (ar[0] === 'belly') {
                                            rugaapi.belly()
                                                .then(async ({ url }) => {
                                                    await piyo.sendFileFromUrl(from, url, 'belly.jpg', '', id)
                                                        .then(() => console.log('Success sending belly pic!'))
                                                })
                                        } else if (ar[0] === 'sideboobs') {
                                            rugaapi.sideboobs()
                                                .then(async ({ url }) => {
                                                    await piyo.sendFileFromUrl(from, url, 'sideboobs.jpg', '', id)
                                                        .then(() => console.log('Success sending sideboobs pic!'))
                                                })
                                        } else if (ar[0] === 'ahegao') {
                                            rugaapi.ahegao()
                                                .then(async ({ url }) => {
                                                    await piyo.sendFileFromUrl(from, url, 'ahegao.jpg', '', id)
                                                        .then(() => console.log('Success sending ahegao pic!'))
                                                })
                                        } else {
                                            await piyo.reply(from, 'Tag not found.', id)
                                        }
                                    } catch (err) {
                                        console.error(err)
                                        await piyo.reply(from, err, id)
                                    }
                                }
                            break
case 'infofetish':
                            piyo.sendText(from, `Info fetish : \n\n1. armpits\n2. feets\n3. thighs\n4. ass\n5. boobs\n6. belly\n7. sideboobs\n8. ahegao`)
                            break
/////////////////////////////////////////////////////////MENU EDUKASI////////////////////////////////////////////////////////////
        case 'kbbi':           
                if (!q) return await piyo.reply(from, ind.wrongFormat(), id)
                await piyo.reply(from, ind.wait(), id)
                kbbi(q)
                    .then(async ({ status, result, pesan }) => {
                        if (status === 'error') {
                            await piyo.reply(from, pesan, id)
                        } else {
                            await piyo.reply(from, result, id)
                                .then(() =>  console.log('Success sending definition!'))
                        }
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await piyo.reply(from, 'Error!', id)
                    })
            break
                case 'nulishd':                
            if (args.length == 0) return piyo.reply(from, `Membuat bot menulis teks yang dikirim menjadi gambar\nPemakaian: ${prefix}nulis [teks]\n\ncontoh: ${prefix}nulis i love you 3000`, id)
            const nulisp = await rugaapi.tulis(q)
            await piyo.sendImage(from, `${nulisp}`, '', 'Nih ...', id)
            .catch(() => {
                piyo.reply(from, 'Ada yang Error!', id)
            })
            break
case 'nuliskanan': {
                        //if (!isPremium) return piyo.reply(from, 'Maaf, ini adalah fitur premium, untuk menggunakan fitur ini silahkan donasi, Kirim #donasi untuk melihat info donasi', id)
                        if (!args.length >= 1) return piyo.reply(from, 'Kirim /nuliskanan teks', id) 
                        const tulisan = body.slice(12)
                        piyo.sendText(from, 'sabar ya lagi nulis')
                        const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                        const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                        spawn('convert', [
                            './media/images/buku/sebelumkanan.jpg',
                            '-font',
                            './lib/font/Indie-Flower.ttf',
                            '-size',
                            '960x1280',
                            '-pointsize',
                            '23',
                            '-interline-spacing',
                            '2',
                            '-annotate',
                            '+128+129',
                            fixHeight,
                            './media/images/buku/setelahkanan.jpg'
                        ])
                        .on('error', () => piyo.reply(from, 'Error gan', id))
                        .on('exit', () => {
                            piyo.sendImage(from, './media/images/buku/setelahkanan.jpg', 'after.jpg', `Wes rampung dik, donasi dong buat biaya server. bales /donasi untuk melihat cara donasi\nDitulis selama: ${processTime(t, moment())} _detik_`, id)
                        })
                    }
                        break
case 'nuliskiri':                     
        if (!args.length >= 1) return piyo.reply(from, 'Kirim /nuliskiri teks', id) 
            const tulisan = body.slice(11)
            piyo.sendText(from, 'sabar ya lagi nulis')
            const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
            const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
            spawn('convert', [
                './media/images/buku/sebelumkiri.jpg',
                '-font',
                './lib/font/Indie-Flower.ttf',
                '-size',
                '960x1280',
                '-pointsize',
                '22',
                '-interline-spacing',
                '2',
                '-annotate',
                '+140+153',
                fixHeight,
                './media/images/buku/setelahkiri.jpg'
            ])
            .on('error', () => piyo.reply(from, 'Error gan', id))
            .on('exit', () => {
                piyo.sendImage(from, './media/images/buku/setelahkiri.jpg', 'after.jpg', `Wes rampung dik, donasi dong buat biaya server. bales /donasi untuk melihat cara donasi\nDitulis selama: ${processTime(t, moment())} _detik_`, id)
            })
        break
                    case 'foliokiri': {
                        //if (!isPremium) return piyo.reply(from, 'Maaf, ini adalah fitur premium, untuk menggunakan fitur ini silahkan donasi, Kirim #donasi untuk melihat info donasi', id)
                        if (!args.length >= 1) return piyo.reply(from, 'Kirim /foliokiri teks', id) 
                        const tulisan = body.slice(11)
                        piyo.sendText(from, 'sabar ya lagi nulis')
                        const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                        const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                        spawn('convert', [
                            './media/images/folio/sebelumkiri.jpg',
                            '-font',
                            './lib/font/Indie-Flower.ttf',
                            '-size',
                            '1720x1280',
                            '-pointsize',
                            '23',
                            '-interline-spacing',
                            '4',
                            '-annotate',
                            '+48+185',
                            fixHeight,
                            './media/images/folio/setelahkiri.jpg'
                        ])
                        .on('error', () => piyo.reply(from, 'Error gan', id))
                        .on('exit', () => {
                            piyo.sendImage(from, './media/images/folio/setelahkiri.jpg', 'after.jpg', `Wes rampung dik, donasi dong buat biaya server. bales /donasi untuk melihat cara donasi\nDitulis selama: ${processTime(t, moment())} _detik_`, id)
                        })
                    }
                        break
case 'foliokanan': {
                        if (!args.length >= 1) return piyo.reply(from, 'Kirim /foliokanan teks', id) 
                        const tulisan = body.slice(12)
                        piyo.sendText(from, 'sabar ya lagi nulis')
                        const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                        const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                        spawn('convert', [
                            './media/images/folio/sebelumkanan.jpg',
                            '-font',
                            './lib/font/Indie-Flower.ttf',
                            '-size',
                            '960x1280',
                            '-pointsize',
                            '23',
                            '-interline-spacing',
                            '3',
                            '-annotate',
                            '+89+190',
                            fixHeight,
                            './media/images/folio/setelahkanan.jpg'
                        ])
                        .on('error', () => piyo.reply(from, 'Error gan', id))
                        .on('exit', () => {
                            piyo.sendImage(from, './media/images/folio/setelahkanan.jpg', 'after.jpg', `Wes rampung dik, donasi dong buat biaya server. bales /donasi untuk melihat cara donasi\nDitulis selama: ${processTime(t, moment())} _detik_`, id)
                        })
                    }
                        break
case 'brainly':
                if (!isPremium) return piyo.reply(from, `Maaf, ini adalah fitur premium, untuk menggunakan fitur ini silahkan beli premium ke ownerMurah kok`, id)
                if (args.length >= 2){
                    const BrainlySearch = require('./lib/brainly')
                    let tanya = body.slice(9)
                    let jum = Number(tanya.split('.')[1]) || 2
                    if (jum > 10) return piyo.reply(from, 'Max 10!', id)
                    if (Number(tanya[tanya.length-1])){
                        tanya
                    }
                    piyo.reply(from, `➸ *Pertanyaan* : ${tanya.split('.')[0]}\n\n➸ *Jumlah jawaban* : ${Number(jum)}`, id)
                    await BrainlySearch(tanya.split('.')[0],Number(jum), function(res){
                        res.forEach(x=>{
                            if (x.jawaban.fotoJawaban.length == 0) {
                                piyo.reply(from, `➸ *Pertanyaan* : ${x.pertanyaan}\n\n➸ *Jawaban* : ${x.jawaban.judulJawaban}\n`, id)
                    piyo.sendText(from, 'nihh ngab')
                            } else {
                                piyo.reply(from, `➸ *Pertanyaan* : ${x.pertanyaan}\n\n➸ *Jawaban* 〙: ${x.jawaban.judulJawaban}\n\n➸ *Link foto jawaban* : ${x.jawaban.fotoJawaban.join('\n')}`, id)
                            }
                        })
                    })
                } else {
                    piyo.reply(from, 'Usage :\n/brainly [pertanyaan] [.jumlah]\n\nEx : \n/brainly NKRI .2', id)
                }
                break
//////////////////////////////////////////////Islam Command//////////////////////////////////////////////////////
case 'listsurah':
            try {
                axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
                .then((response) => {
                    let hehex = '╔══✪〘 List Surah 〙✪══\n'
                    for (let i = 0; i < response.data.data.length; i++) {
                        hehex += '╠➥ '
                        hehex += response.data.data[i].name.transliteration.id.toLowerCase() + '\n'
                            }
                        hehex += '╚═〘 *A R U G A  B O T* 〙'
                    piyo.reply(from, hehex, id)
                })
            } catch(err) {
                piyo.reply(from, err, id)
            }
            break
case 'js':
                if (args.length == 0) return piyo.reply(from, `Untuk melihat jadwal solat dari setiap daerah yang ada\nketik: ${prefix}js [daerah]\n\nuntuk list daerah yang ada\nketik: ${prefix}daerah`, id)
                            var nonOption = quotedMsg ? quotedMsgObj.body : args.join(' ')
                            Jsholat(nonOption)
                                .then(data => {
                                    data.map(({isya, subuh, dzuhur, ashar, maghrib, terbit}) => {
                                        var x  = subuh.split(':'); y = terbit.split(':')
                                        var xy = x[0] - y[0]; yx = x[1] - y[1]
                                        let perbandingan = `${xy < 0 ? Math.abs(xy) : xy}jam ${yx< 0 ? Math.abs(yx) : yx}menit`
                                        let msg = `Jadwal Sholat untuk ${nonOption} dan Sekitarnya ( *${tanggal}* )\n\nDzuhur : ${dzuhur}\nAshar  : ${ashar}\nMaghrib: ${maghrib}\nIsya       : ${isya}\nSubuh   : ${subuh}\n\nDiperkirakan matahari akan terbit pada pukul ${terbit} dengan jeda dari subuh sekitar ${perbandingan}`
                                        piyo.reply(from, msg, id)
                                    })
                                })
                                .catch(err => {
                                    piyo.reply(from, err, id)
                                    console.log(err)
                                })
                            insert(author, type, content, pushname, from, argv)
                            break
case 'infosurah':
            if (args.length == 0) return piyo.reply(from, `*_${prefix}infosurah <nama surah>_*\nMenampilkan informasi lengkap mengenai surah tertentu. Contoh penggunan: ${prefix}infosurah al-baqarah`, message.id)
                var responseh = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
                var { data } = responseh.data
                var idx = data.findIndex(function(post, index) {
                  if((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                    return true;
                });
                var pesan = ""
                pesan = pesan + "Nama : "+ data[idx].name.transliteration.id + "\n" + "Asma : " +data[idx].name.short+"\n"+"Arti : "+data[idx].name.translation.id+"\n"+"Jumlah ayat : "+data[idx].numberOfVerses+"\n"+"Nomor surah : "+data[idx].number+"\n"+"Jenis : "+data[idx].revelation.id+"\n"+"Keterangan : "+data[idx].tafsir.id
                piyo.reply(from, pesan, message.id)
              break
case 'surah':
            if (args.length == 0) return piyo.reply(from, `*_${prefix}surah <nama surah> <ayat>_*\nMenampilkan ayat Al-Quran tertentu beserta terjemahannya dalam bahasa Indonesia. Contoh penggunaan : ${prefix}surah al-baqarah 1\n\n*_${prefix}surah <nama surah> <ayat> en/id_*\nMenampilkan ayat Al-Quran tertentu beserta terjemahannya dalam bahasa Inggris / Indonesia. Contoh penggunaan : ${prefix}surah al-baqarah 1 id`, message.id)
                var responseh = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
                var { data } = responseh.data
                var idx = data.findIndex(function(post, index) {
                  if((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                    return true;
                });
                nmr = data[idx].number
                if(!isNaN(nmr)) {
                  var responseh2 = await axios.get('https://api.quran.sutanlab.id/surah/'+nmr+"/"+args[1])
                  var {data} = responseh2.data
                  var last = function last(array, n) {
                    if (array == null) return void 0;
                    if (n == null) return array[array.length - 1];
                    return array.slice(Math.max(array.length - n, 0));
                  };
                  bhs = last(args)
                  pesan = ""
                  pesan = pesan + data.text.arab + "\n\n"
                  if(bhs == "en") {
                    pesan = pesan + data.translation.en
                  } else {
                    pesan = pesan + data.translation.id
                  }
                  pesan = pesan + "\n\n(Q.S. "+data.surah.name.transliteration.id+":"+args[1]+")"
                  piyo.reply(from, pesan, message.id)
                }
              break
case 'tafsir':
            if (args.length == 0) return piyo.reply(from, `*_${prefix}tafsir <nama surah> <ayat>_*\nMenampilkan ayat Al-Quran tertentu beserta terjemahan dan tafsirnya dalam bahasa Indonesia. Contoh penggunaan : ${prefix}tafsir al-baqarah 1`, message.id)
                var responsh = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
                var {data} = responsh.data
                var idx = data.findIndex(function(post, index) {
                  if((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                    return true;
                });
                nmr = data[idx].number
                if(!isNaN(nmr)) {
                  var responsih = await axios.get('https://api.quran.sutanlab.id/surah/'+nmr+"/"+args[1])
                  var {data} = responsih.data
                  pesan = ""
                  pesan = pesan + "Tafsir Q.S. "+data.surah.name.transliteration.id+":"+args[1]+"\n\n"
                  pesan = pesan + data.text.arab + "\n\n"
                  pesan = pesan + "_" + data.translation.id + "_" + "\n\n" +data.tafsir.id.long
                  piyo.reply(from, pesan, message.id)
              }
              break
case 'alaudio':
            if (args.length == 0) return piyo.reply(from, `*_${prefix}ALaudio <nama surah>_*\nMenampilkan tautan dari audio surah tertentu. Contoh penggunaan : ${prefix}ALaudio al-fatihah\n\n*_${prefix}ALaudio <nama surah> <ayat>_*\nMengirim audio surah dan ayat tertentu beserta terjemahannya dalam bahasa Indonesia. Contoh penggunaan : ${prefix}ALaudio al-fatihah 1\n\n*_${prefix}ALaudio <nama surah> <ayat> en_*\nMengirim audio surah dan ayat tertentu beserta terjemahannya dalam bahasa Inggris. Contoh penggunaan : ${prefix}ALaudio al-fatihah 1 en`, message.id)
              ayat = "ayat"
              bhs = ""
                var responseh = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
                var surah = responseh.data
                var idx = surah.data.findIndex(function(post, index) {
                  if((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                    return true;
                });
                nmr = surah.data[idx].number
                if(!isNaN(nmr)) {
                  if(args.length > 2) {
                    ayat = args[1]
                  }
                  if (args.length == 2) {
                    var last = function last(array, n) {
                      if (array == null) return void 0;
                      if (n == null) return array[array.length - 1];
                      return array.slice(Math.max(array.length - n, 0));
                    };
                    ayat = last(args)
                  } 
                  pesan = ""
                  if(isNaN(ayat)) {
                    var responsih2 = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah/'+nmr+'.json')
                    var {name, name_translations, number_of_ayah, number_of_surah,  recitations} = responsih2.data
                    pesan = pesan + "Audio Quran Surah ke-"+number_of_surah+" "+name+" ("+name_translations.ar+") "+ "dengan jumlah "+ number_of_ayah+" ayat\n"
                    pesan = pesan + "Dilantunkan oleh "+recitations[0].name+" : "+recitations[0].audio_url+"\n"
                    pesan = pesan + "Dilantunkan oleh "+recitations[1].name+" : "+recitations[1].audio_url+"\n"
                    pesan = pesan + "Dilantunkan oleh "+recitations[2].name+" : "+recitations[2].audio_url+"\n"
                    piyo.reply(from, pesan, message.id)
                  } else {
                    var responsih2 = await axios.get('https://api.quran.sutanlab.id/surah/'+nmr+"/"+ayat)
                    var {data} = responsih2.data
                    var last = function last(array, n) {
                      if (array == null) return void 0;
                      if (n == null) return array[array.length - 1];
                      return array.slice(Math.max(array.length - n, 0));
                    };
                    bhs = last(args)
                    pesan = ""
                    pesan = pesan + data.text.arab + "\n\n"
                    if(bhs == "en") {
                      pesan = pesan + data.translation.en
                    } else {
                      pesan = pesan + data.translation.id
                    }
                    pesan = pesan + "\n\n(Q.S. "+data.surah.name.transliteration.id+":"+args[1]+")"
                    await piyo.sendFileFromUrl(from, data.audio.secondary[0])
                    await piyo.reply(from, pesan, message.id)
                  }
              }
              break
case 'jsolat':
            if (args.length == 0) return piyo.reply(from, `Untuk melihat jadwal solat dari setiap daerah yang ada\nketik: ${prefix}jsolat [daerah]\n\nuntuk list daerah yang ada\nketik: ${prefix}daerah`, id)
            const solatx = body.slice(8)
            const solatj = await rugaapi.jadwaldaerah(solatx)
            await piyo.reply(from, solatj, id)
            .catch(() => {
                piyo.reply(from, 'Sudah input daerah yang ada dilist?', id)
            })
            break
case 'jadwalsholat':
            const daerah = body.slice(14)
            const jadwalShalat = await axios.get(`https://api.vhtear.com/jadwalsholat?query=${daerah}&apiKey=${vhtearkey}`)
            if (jadwalShalat.data.error) return piyo.reply(from, jadwalShalat.data.error, id)
            const { Shubuh, Zduhur, Ashr, Magrib, Isya, kota } = await jadwalShalat.data
            arrbulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
            var date = new Date();
            tgl = new Date().getDate()
            bln = new Date().getMonth()
            thn = new Date().getFullYear()
            const resultJadwal = `「 JADWAL SHALAT 」\n\nJadwal shalat di ${kota}, ${tgl}-${arrbulan[bln]}-${thn}\n\nSubuh : ${Shubuh}\nDzuhur : ${Zduhur}\nAshar : ${Ashr}\nMaghrib : ${Magrib}\nIsya : ${Isya}`
            await limitAdd(serial)
            break
/////////////////////////////////////
case 'jadwalbola':
                if (!isGroupMsg) return piyo.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            piyo.reply(from, ind.wait(), id)
            try {
                const jdbola = await fetch(`https://api.vhtear.com/jadwalbola&apikey=${vhtearkey}`)
                if (!jdbola.ok) throw new Error(`unexpected response ${jdbola.statusText}`)
                const jdbola2 = await jdbola.json()
                const { data } = await jdbola2.result
                let xixixi = `*「 JADWAL BOLA 」*\n\n`
                for (let i = 0; i < data.length; i++) {
                    xixixi += `\n─────────────────\n\n*Kick-Off* : ${data[i].kickof}\n*Pertandingan* : ${data[i].pertandingan}\n*Stasiun TV* : ${data[i].stasiuntv}`
                }
                await piyo.sendText(from, xixixi, id)
            } catch (err) {
                    console.log(err)
                    await piyo.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Jadwal tidak ditemukan')
            }
            break
case 'daerah':
            const daerahq = await rugaapi.daerah()
            await piyo.reply(from, daerahq, id)
            .catch(() => {
                piyo.reply(from, 'Ada yang Error!', id)
            })
            break
//////////////////////////////////////////////MENU MEDIA//////////////////////////////////////////////////////////
case 'facebook':
case 'fb':
                if (!isUrl(url) && !url.includes('facebook.com')) return await piyo.reply(from, `URL bukan dari facebook!`, id)
                await piyo.reply(from, ind.wait(), id)
                const fb = await axios.get(`https://videfikri.com/api/fbdl/?urlfb=${q}`)
		const fbb = fb.data.result
		await piyo.sendFileFromUrl(from, fbb.url , 'fb.mp4' , `${fbb.title}` , '' , id)
            break
case 'instagram': //RECODE BY ALVIO ADJI JANUAR
case 'ig':
    if (!isPremium) return piyo.reply(from, `Fitur Ini Premium` ,id)
            try {
                if (arghh.length === 1) return piyo.reply(from, 'Kirim perintah *!ig [linkIg]* untuk contoh silahkan kirim perintah *!readme*', id)
                if (!arghh[1].includes('instagram.com')) return piyo.reply(from, `Salah linknya kak`, id)
                piyo.reply(from, ind.wait(), id)
                let arrBln = ["Januari","Februaru","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]
                const idRegex = /([-_0-9A-Za-z]{11})/
                const idIGG = arghh[1].match(idRegex)
                await getPost(idIGG[0]).then((post) => {
                    let a = new Date(post.date * 1000)
                    const jam = a.getHours()
                    const menit = a.getMinutes()
                    const bulan = a.getMonth()
                    const tanggal = a.getDate()
                    const tahun = a.getFullYear()
                    const captig = `*Media berhasil terkirim!*\n\n*Username* : ${post.owner_user}\n*Waktu Publish* : ${jam}:${menit} ${tanggal}-${arrBln[bulan - 1]}-${tahun}\n*Capt* : ${post.capt}`
                    piyo.sendFileFromUrl(from, post.url, `Insta`, captig, id)
                })
            } catch (err) {
                ERRLOG(err)
            }
            await piyo.sendSeen(from)
            break
case 'tiktoknowm': //THANKS TO VIDEFIKRI ATAU VIDEFRELAN
                        await piyo.reply(from, ind.wait(), id)
                        const tp = await axios.get(`http://videfikri.com/api/tiktok/?url=${q}`)
			await piyo.sendFileFromUrl(from, `${tp.data.result.thumb}`, 'image.jpg', `Video Ditemukan...\n\nPiyobot\n\n*_Sabar, Piyo lagi ngirim Videonya_*`, id)
                            const respons = await fetch(tp.data.result.link);
                            const bufferf = await respons.buffer(); 
                           await fs.writeFile(`./media/play2.mp4`, bufferf)
                          await piyo.sendFile(from,'./media/play2.mp4', 'piyo.mp4', 'nih kak',id)
			  await fs.unlinksync('./media/play2.mp4')
			break
case 'tiktok': 
                if (!isUrl(url) && !url.includes('tiktok.com')) return await piyo.reply(from, ind.wrongFormat(), id)
                await piyo.reply(from, ind.wait(), id)
                rugaapi.tik(url)
                    .then(async ({ result })=> {
                        await piyo.sendFileFromUrl(from, result.video, 'tiktok.mp4', '', id)
                    })
                    .catch(async (err) => {
                        console.log(err)
                        await piyo.reply(from, 'Error!', id)
                    })
            break
case 'tiktokmusic':
            if (!q) return piyo.reply(from, `Silahkan ketik /tiktokmusic link tiktoknya` , id)
            await piyo.reply(from, ind.wait() , id)
            await piyo.sendFileFromUrl(from, `https://lolhuman.herokuapp.com/api/tiktokmusic?apikey=${lolhuman}&url=${q}` , 'tiktok.mp3' , '' , id)
            break
case 'igstory':
                if (isLimit(serial)) return piyo.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                if (!q) return piyo.reply(from, ind.wrongFormat(), id)
                await piyo.reply(from, ind.wait(), id)
                    rugaapi.its(q)
                    .then(async ({ result }) => {
                for (let i = 0; i < result.story.itemlist.length; i++) {
                    const { urlDownload } = result.story.itemlist[i]
                    limitAdd(serial)
                    await piyo.sendFileFromUrl(from, `${urlDownload}`, 'story.jpg', '', id)
                    console.log('Success sending IG Story!')
                }
            })
            break
case 'twitter':
                if (args.length == 0) return piyo.reply(from, `Kirim Perintah ${prefix}twitter [linktwitter]`, id)
                piyo.reply(from, ind.wait(), id)
                rugaapi.twit(args)
                .then(async(res) => {
                    if (res.error) return piyo.reply(from, `${res.url}`, '', `$${res.error}`)
                    await piyo.sendFileFromUrl(from, `${res.getVideo}`, '', '', id)
                    .catch(res => {
                        piyo.reply(from, 'error ngab...', id)
                    })
                })
                break
case 'joox':
                                        if (!isPremium) return piyo.reply(from, `Maaf, ini adalah fitur premium, untuk menggunakan fitur ini silahkan beli premium ke owner \nUntuk Harga\n\n 10k Perbulan\n5k Perpanjang`, id)
                            if (args.length == 0) return piyo.reply(from, `Untuk mencari lagu dari joox\n\nPenggunaan: ${prefix}play judul lagu`, id)
                            if (!q) return await piyo.reply(from, ind.wrongFormat(), id)
                            await piyo.reply(from, ind.wait(), id)
                            await rugaapi.joox(q)
                                .then(async ({ result }) => {
                                    await piyo.sendFileFromUrl(from, result[0].linkImg, `${result[0].judul}.jpg`, ind.joox(result), id)
                                    await piyo.sendFileFromUrl(from, result[0].linkMp3, `${result[0].judul}.mp3`, '', id)
                                        .then(() => console.log('Success sending music from Joox!'))
                                })
                                .catch(async (err) => {
                                    console.error(err)
                                    await piyo.reply(from, 'Error!', id)
                                })
                        break
case 'play': //PAKE API VIDE FIKRI BIAR ADA SIZE LAGUNYA
            if (!q) return piyo.reply(from , `Silahkan  ketik /play judulnya` , id)
            await piyo.reply(from,'Wait..',id)
	    const getvids = await axios.get(`https://videfikri.com/api/ytplay/?query=${q}`)
	    if (getvids.data.result.status == 400) return piyo.reply(from, getvids.data.result.pesan , id)
            if (Number(getvids.data.result.size.split('MB')[0]) >= 10.00) return piyo.reply(from, 'Maaf durasi music sudah melebihi batas maksimal 10 MB!', id)
	    await piyo.sendFileFromUrl(from, getvids.data.result.thumbnail, 'gambar.jpg', `Title: ${getvids.data.result.title}\n\n───────────⚪───────────\n(っ◔◡◔)っ   ◄◄⠀▐▐ ⠀►► ───○ 🔊\n───────────⚪───────────\n➥Size: ${getvids.data.result.size}\n➥Type: Mp3\n➥Duration: ${getvids.data.result.duration}\n\n*Mohon Tunggu Bot Akan Mengirim Audio!*`, id)
            const responno = await fetch(getvids.data.result.url)
            const bufferj = await responno.buffer()
            await fs.writeFile('./media/play.mp3', bufferj)
            await piyo.sendFile(from, './media/play.mp3', 'nih kak', '',  id)			
            break
			
case 'playv':
            if (!q) return piyo.reply(from , `Silahkan  ketik /playv judulnya` , id)
            if (!isPremium) return piyo.reply(from, `Maaf, ini adalah fitur premium, untuk menggunakan fitur ini silahkan beli premium ke owner \nUntuk Harga\n\n10k Perbulan\n5k Perpanjang`, id)
            piyo.reply(from, 'Wait.. Sedang Di Proses!',id)
	    const getvid = await axios.get(`https://api.zeks.xyz/api/ytplaymp4?q=${q}&apikey=benbenz`)
	    if (getvid.data.status == false) return piyo.reply(from, `Website sedang error` , id)
	    const { title , url_video , size , thumbnail , source } = getvid.data.result
	    if (Number(size.split(' MB')[0]) > 15.00) return piyo.sendFileFromUrl(from, thumbnail , 'thumb.jpg', `「 PLAY MP4 」\n\n• Judul : ${title}\n• Filesize : ${size}\n\n_Maaf, Durasi video melebihi 15 MB. Silahkan download video melalui link dibawah.\n${url_video}`, id)
	    await piyo.sendFileFromUrl(from, thumbnail , 'gambar.jpg', `「 PLAY 」\n\n➸ Judul : ${title}\n➸ Filesize : ${size}\n➸ Link : ${source}\n\n_Video Sedang Dikirim_`,id)
	    await piyo.sendFileFromUrl(from, url_video , 'piyo.mp4' , 'Nih Kak' , id)
            break
			
case 'playvn':
	   if (!q) return piyo.reply(from , `Silahkan  ketik /playvn judulnya` , id)
           await piyo.reply(from, `Wait` , id)
           const plan = await axios.get(`https://videfikri.com/api/ytplay/?query=${q}`)
	   if (Number(plan.data.result.size.split('MB')[0]) >= 10.00) return piyo.reply(from, 'Maaf durasi music sudah melebihi batas maksimal 10 MB!', id)
           await piyo.sendFileFromUrl(from, plan.data.result.thumbnail, 'gambar.jpg' , `Title: ${plan.data.result.title}\n\nTunggu Sebentar Bot Sedang Mengirim Voice Not ` , id)
           const plon = await fetch(plan.data.result.url)
           const buplon = await plon.buffer()
           await fs.writeFile('./media/playvn.mp3', buplon)
           await piyo.sendPtt(from, './media/playvn.mp3' , id)
           break
			
case 'ytmp3':
       await piyo.reply(from, ind.wait() , id)
       try{
        const yte = await axios.get(`https://api.zeks.xyz/api/ytmp3?url=${q}&apikey=apivinz`)
        const { thumbnail , title , url_audio , size } = yte.data.result
        await piyo.sendFileFromUrl(from, thumbnail , 'piyo.jpg' , `*「 YOUTUBE MP3 」*\n\n• *Judul* : ${title}\n\n• *Size* : ${size}\n\nSilahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`, id)
        await piyo.sendFileFromUrl(from, url_audio , 'piyo.mp3' , '' , id)
        } catch (err) {
                    console.error(err.message)
                    await piyo.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Ada Sedikit Error')
                    piyo.sendText(from, 'Fitur Error : ' + err)
              }
        break
			
        case 'ytmp4':
       await piyo.reply(from, ind.wait() , id)
       try{
        const yt = await axios.get(`https://api.zeks.xyz/api/ytmp4?url=${q}&apikey=apivinz`)
        const { thumbnail , title , url_video , size } = yt.data.result
        await piyo.sendFileFromUrl(from, thumbnail , 'piyo.jpg' , `*「 YOUTUBE MP4 」*\n\n• *Judul* : ${title}\n\n• *Size* : ${size}\n\nSilahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`, id)
        await piyo.sendFileFromUrl(from, url_video , 'piyo.mp4' , 'Nih Kak' , id)
        } catch (err) {
                    console.error(err.message)
                    await piyo.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Ada Sedikit Error')
                    piyo.sendText(from, 'Fitur Error : ' + err)
              }
        break
			
case 'igstalk':
                        if (arghh.length === 1)  return piyo.reply(from, 'Kirim perintah /igstalk @username\nContoh /igstalk duar_amjay', id)
                        argz = body.trim().split(' ')
                        console.log(...argz[1])
                        var slicedArgs = Array.prototype.slice.call(argz, 1);
                        console.log(slicedArgs)
                        const istalk = await slicedArgs.join(' ')
                        console.log(istalk)
                        try {
                        const istalk2 = await axios.get('https://api.vhtear.com/igprofile?query=' + istalk + '&apikey=' + vhtearkey)
                        const { biography, follower, follow, post_count, full_name, username, picture, is_private } = istalk2.data.result
                        const istalk3 = `User Ditemukan!
            ➸ Username: ${username}
            ➸ Nama: ${full_name}
            ➸ Bio: ${biography}
            ➸ Mengikuti: ${follow}
            ➸ Pengikut: ${follower}
            ➸ Jumlah Postingan: ${post_count}`
            
                        const pictk = await bent("buffer")(picture)
                        const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
                        piyo.sendImage(from, base64, username, istalk3)
                        } catch (err) {
                         console.error(err.message)
                         await piyo.sendFileFromUrl(self, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
                         piyo.sendText(ownerNumber, 'Igstalk Error : ' + err)
                       }
                      break
case 'tiktokstalk':
                        piyo.reply(from , ind.wait() , id)
                        if (isLimit(serial)) return piyo.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                        if (arghh.length === 1)  return piyo.reply(from, 'Kirim perintah */tiktokstalk @username*\nContoh */tiktokstalk @duar_amjay*', id)
                        argz = body.trim().split(' ')
                        console.log(...argz[1])
                        var slicedArgs = Array.prototype.slice.call(argz, 1);
                        console.log(slicedArgs)
                        const tstalk = await slicedArgs.join(' ')
                        console.log(tstalk)
                        try {
                        const tstalk2 = await axios.get('https://api.vhtear.com/tiktokprofile?query=' + tstalk + '&apikey=' + vhtearkey)
                        const { username, bio, follow, follower, title, like_count, video_post, description, picture, url_account } = tstalk2.data.result
                        const tiktod = `*User Ditemukan!*
            ➸ *Username:* ${username}
            ➸ *Judul:* ${title}
            ➸ *Bio:* ${bio}
            ➸ *Mengikuti:* ${follow}
            ➸ *Pengikut:* ${follower}
            ➸ *Jumlah Like*: ${like_count}
            ➸ *Jumlah Postingan:* ${video_post}
            ➸ *Deskripsi:* ${description}
            ➸ *Link:* ${url_account}`
            
                        const pictk = await bent("buffer")(picture)
                        const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
                        piyo.sendImage(from, base64, title, tiktod)
                        await limitAdd(serial)
                        } catch (err) {
                         console.error(err.message)
                         await piyo.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
                         piyo.sendText(ownerNumber, 'Error Tiktokstalk : '+ err)
                       }
                      break
//////////////////////////////////////////FUN MENU/////////////////////////////////////////////////////////////////
case 'pacarpiyo':
    const cantikk = cecan[Math.floor(Math.random() * cecan.length)]
    await piyo.sendImage(from, cantikk.imagex, 'Cecan.jpg', cantikk.lahwoi, id)
    break
case 'infomobil':
            if (args.length == 0) return piyo.reply(from, `Kirim perintah *${prefix}infomobil [ Merek Motor ]*\n\nContoh : *${prefix}infomobil avanza*`, id)
        const mobill = body.slice(11)
        piyo.reply(from, 'Sabar cin lagi aq carii....\n\nKalo Kaga Muncul Ada yang salah', id)
        try {
            const datamobill = await axios.get (`https://api.vhtear.com/infomobil?merk=${mobill}&apikey=${vhtearkey}`)
            const { title, spesifikasi, kelebihan, kekurangan, harga, image  } = datamobill.data.result
            const mobilltemu = `*${title}:*\n${spesifikasi}\n\n*Kelebihan:* ${kelebihan}\n\n*Kekurangan:* ${kekurangan}\n\n*Harga:* ${harga}\n\nNyari Doang Beli kaga 🤭`
            const mobillimage = `${image}`
            piyo.sendImage(from, mobillimage, title, mobilltemu)
                } catch (err) {
                    console.error(err)
                    await piyo.reply(from, `Error!`, id)
                }
            break
case 'nickepep':
            if (!q) return piyo.reply(from, `Ketik /nickepep id ff nya ` ,  id)
            await piyo.reply(from, ind.wait() , id)
            const nick1 = await axios.get(`http://hujanapi.xyz/api/nickff?id=${q}&apikey=${apikeyz}`)
            await piyo.reply(from, nick1.data.result , id)
            break
			
case 'nickml':
            if (!q) return piyo.reply(from, `Ketik /nickml id ff nya ` ,  id)
            await piyo.reply(from, ind.wait() , id)
            const nick = await axios.get(`http://hujanapi.xyz/api/nickml?id=${q}&apikey=${apikeyz}`)
            await piyo.reply(from, nick.data.result , id)
            break
			
case 'infomotor':
            if (args.length == 0) return piyo.reply(from, `Kirim perintah *${prefix}infomotor [ Merek Motor ]*\n\nContoh : *${prefix}infomotor vario 150*`, id)
        const motoy = body.slice(11)
        piyo.reply(from, 'Sabar cin lagi aq carii....\n\nKalo Kaga Muncul Ada yang salah', id)
        try {
            const datamotoy = await axios.get (`https://api.vhtear.com/infomotor?merk=${motoy}&apikey=${vhtearkey}`)
            const { title, spesifikasi, kelebihan, kekurangan, harga, image  } = datamotoy.data.result
            const motoytemu = `*${title}:*\n${spesifikasi}\n\n*Kelebihan:* ${kelebihan}\n\n*Kekurangan:* ${kekurangan}\n\n*Harga:* ${harga}\n\nNyari Doang Beli kaga 🤭`
            const motoyimage = `${image}`
            piyo.sendImage(from, motoyimage, title, motoytemu)
                } catch (err) {
                    console.error(err)
                    await piyo.reply(from, `Error!`, id)
                }
            break
			
case 'xvideos': {
            if (!isPremium) return piyo.reply(from, `Fitur Ini Khusus Premium ` ,id)
            const xtext = message.body.replace('/xvideos', '')
            pemisah = xtext.split("|")
            const search = pemisah[0]
            const responlo = await requests("http://hujanapi.xyz/api/xvideos?query="+search+"&count=10&apikey="+apikeyz)
            const datas = await responlo.json()
            const img = 'https://seeklogo.com/images/X/xvideos-logo-77E7B4F168-seeklogo.com.png'
            const asu = datas.result
            if (pemisah.length == 1)  {
                let num = 0
                let fox = "*_Xvideos Search_*\n\n"
                for (var a = 0; a < asu.length; a++) {
                    num += 1
                    fox += "```"+asu[a].title+"```\n"+asu[a].url+"`````("+num+")```\n"
                }
                fox += "\n\n*Hey* @! *For detail*:\n```xvideos "+xtext+"|number```"
                piyo.sendFileFromUrl(from, img,  'bokep.jpg' , fox, `${sender}` )
            }
            if (pemisah.length == 2) {
                const num = pemisah[1]
                const value = Number(pemisah[1])
                let fox = "*_Detail Video*_\n"
                fox += "\nTitle : " + asu[value].title
                fox += "\nDuration : " + asu[value].duration
                fox += "\nChannel : " + asu[value].channel
                fox += "\nLink : " + asu[value].url
                fox += "\n\n\nSource : xvideos.com"
                await piyo.sendFileFromUrl(from, asu[value].image, 'bokep.jpg' ,  fox , id)
            }
        }
break

case 'xnxx': { 
    if (!q) return await piyo.sendText(from, `Ketik /xnxx namanya`)
            if (!isPremium) return piyo.reply(from, `Fitur Ini Khusus Premium ` ,id)
            const xtext = message.body.replace('/xnxx', '')
            pemisah = xtext.split("|")
            const search = pemisah[0]
            const responlo = await requests("http://hujanapi.xyz/api/xnxx?query="+xtext+"&count=10&apikey="+apikeyz)
            const datas = await responlo.json()
            const img = 'https://yt3.ggpht.com/ytc/AAUvwngpbURJyno0rvS4aza889YDF7-oXbRyopWO0bZO=s900-c-k-c0x00ffffff-no-rj'
            const asu = datas.result
            if (pemisah.length == 1)  {
                let num = 0
                let fox = "*_Xnxx Search_*\n\n"
                for (var a = 0; a < asu.length; a++) {
                    num += 1
                    fox += "```"+asu[a].title+"```\n"+asu[a].url+"`````("+num+")```\n"
                }
                fox += "\n\n*Hey* @! *For detail*:\n```xnxx "+xtext+"|number```"
                piyo.sendFileFromUrl(from, img,  'bokep.jpg' , fox, `${sender}` )
            }
            if (pemisah.length == 2) {
                const num = pemisah[1]
                const value = Number(pemisah[1])
                let fox = "*_Detail Video*_\n"
                fox += "\nTitle : " + asu[value].title
                fox += "\nDuration : " + asu[value].duration
                fox += "\nChannel : " + asu[value].channel
                fox += "\nLink : " + asu[value].url
                fox += "\n\n\nSource : xnxx.com"
                await piyo.sendFileFromUrl(from, asu[value].image, 'bokep.jpg' ,  fox , id)
            }
        }
        break

case 'xnxxdl':{ 
      if (!isPremium) return piyo.reply(from, `Khusus Premium ` , id )
      const vioo = await axios.get(`http://hujanapi.xyz/api/xnxxdl?url=${q}&apikey=${apikeyz}`)
      await piyo.reply(from, `Mohon tunggu , Video terikirim akan lebih lama jika size besar\nSize Videos : ${vioo.data.size}`  , id)
      await piyo.sendFileFromUrl(from, vioo.data.vid , 'bokep.mp4' , `Title : ${vioo.data.judul}\nSize : ${vioo.data.size}` ,  id)
}
break

case 'xvidl':{
      if (!isPremium) return piyo.reply(from, `Khusus Premium ` , id )
      const vio = await axios.get(`http://hujanapi.xyz/api/xvideosdl?url=${q}&apikey=${apikeyz}`)
      await piyo.reply(from, `Mohon tunggu , Video terikirim akan lebih lama jika size besar\nSize Videos : ${vio.data.size}`  , id)
      await piyo.sendFileFromUrl(from, vio.data.vid , 'bokep.mp4' , `Title : ${vio.data.judul}\nSize : ${vio.data.size}` ,  id)
}
break
			
case 'indohot':
            if (!isPremium) return piyo.reply(from, `Maaf, ini adalah fitur premium, untuk menggunakan fitur ini silahkan beli premium ke owner \nUntuk Harga\n\n 10kPerbulan\n5kPerpanjang`, id)
            const hot = body.slice(7)
            const hota = await rugaapi.indohot(hot)
            await piyo.reply(from, hota, id)
            .catch(() => {
                piyo.reply(from, 'Ada yang Error!', id)
            })
break 

case 'artimimpi':
                if (!isGroupMsg) return piyo.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                if (args.length === 0) return piyo.reply(from, `Kirim perintah *${prefix}artimimpi [mimpi]*\nContoh : *${prefix}artimimpi ular*`, id)
                try {
                const respp = await axios.get('https://api.vhtear.com/artimimpi?query=' + q + '&apikey=' + vhtearkey)
                if (respp.data.error) return piyo.reply(from, respp.data.error, id)
                const anm2 = `➸ Artimimpi : ${respp.data.result.hasil}`
                piyo.reply(from, anm2, id)
                } catch (err) {
                    console.error(err.message)
                    await piyo.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Mimpi tidak ditemukan')
                    piyo.sendText(from, 'Artimimpi Error : ' + err)
               }
                break
case 'artinama':
                
			if (args.length == 0) return piyo.reply(from, `Untuk mengetahui artinama seseorang`, id)
            rugaapi.artinama(body.slice(10))
			.then(async(res) => {
				await piyo.reply(from, `Arti : ${res}`, id)
			})
			break
case 'cekjodoh':
                
			if (args.length !== 2) return piyo.reply(from, `Untuk mengecek jodoh melalui nama\nketik: ${prefix}cekjodoh nama pasangan\n\ncontoh: ${prefix}cekjodoh aku kamu\n\nhanya bisa pakai nama panggilan (satu kata)`)
			rugaapi.cekjodoh(args[0],args[1])
			.then(async(res) => {
				await piyo.sendFileFromUrl(from, `${res.link}`, '', `${res.text}`, id)
			})
			break
case 'spekhp':
                
                if (!q) return await piyo.reply(from, ind.wrongFormat(), id)
                await piyo.reply(from, ind.wait(), id)
                try {
                    rugaapi.gsmarena(q)
                        .then(async ({ result }) => {
                            await piyo.sendFileFromUrl(from, result.image, `${result.title}.jpg`, ind.gsm(result), id)
                                .then(() => console.log('Success sending phone info!'))
                        })
                } catch (err) {
                    console.error(err)
                    await piyo.reply(from, `Error!\n${err}`, id)
                }
            break
//////////////////////////////////////////// Random Kata////////////////////////////////////////////////////////
case 'toxic':
                Toxic().then(toxic => {
                    piyo.sendText(from, toxic)
                })
                insert(author, type, content, pushname, from, argv)
                break
case 'lirik':
                var nonOption = quotedMsg ? quotedMsgObj.body : args.join(' ')
                Lirik(nonOption)
                    .then(data => {
                        piyo.reply(from, `Lirik lagu *${nonOption}*:\n\n${data}`, id)
                    })
                    .catch(err => {
                        piyo.reply(from, err, id)
                        console.log(err)
                    })
                insert(author, type, content, pushname, from, argv)
                break
        case 'ptl':
            if (!isPremium) return piyo.reply(from, `Maaf, ini adalah fitur premium, untuk menggunakan fitur ini silahkan beli premium ke owner \nUntuk Harga\n\n 10k Perbulan\n5k Perpanjang`, id)
    await piyo.reply(from, `media sedang dikirim , tunggu sampe10-20 detik`, id)
    fetch('https://raw.githubusercontent.com/VideFrelan/words/main/ptl.txt')
    .then(res => res.text())
        .then(body => {
    let pptl = body.split('\n')
    let pap = pptl[Math.floor(Math.random() * pptl.length)]
    piyo.sendFileFromUrl(from, pap, 'pptl.mp4', 'Nih asu', id)
    .then(() => console.log('Success sending PTL'))
        })
        .catch(() => {
            piyo.reply(from, 'Ada yang Error!', id)
        })
    break
    case 'lolivid':
    await piyo.reply(from, `Media sedang dikirim , tunggu sampe 10 - 20 detik` , id)
    fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/loli.txt')
    .then(res => res.text())
        .then(body => {
    let lolipiyo = body.split('\n')
    let papololi = lolipiyo[Math.floor(Math.random() * lolipiyo.length)]
    piyo.sendFileFromUrl(from, papololi, 'loli.mp4', 'Nih asu', id)
    .then(() => console.log('Success sending Video Loli'))
        })
        .catch(() => {
            piyo.reply(from, 'Ada yang Error!', id)
        })
    break
    case 'darkjokes':
    const darkjokex = await axios.get('https://api.zeks.xyz/api/darkjokes?apikey=apivinz')
    const darkjok = darkjokex.result
    await piyo.sendFileFromUrl(from, darkjok , 'darkjokes.jpg' , '' , id)
            break
    case 'chika'://piyobot
            if (!isPremium) return piyo.reply(from, `Maaf, ini adalah fitur premium, untuk menggunakan fitur ini silahkan beli premium ke owner \nUntuk Harga\n\n 10k Perbulan\n5k Perpanjang`, id)
    await piyo.reply(from, `media sedang dikirim , tunggu sampe10-20 detik`, id)
    fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/chika/main/chika.txt')
    .then(res => res.text())
        .then(body => {
    let chika = body.split('\n')
    let chikax = chika[Math.floor(Math.random() * chika.length)]
    piyo.sendFileFromUrl(from, `https://piyobot.000webhostapp.com/${chikax}.mp4`, 'chika.mp4', 'Nih asu', id)
    .then(() => console.log('Success sending Video'))
        })
        .catch(() => {
            piyo.reply(from, 'Ada yang Error!', id)
        })
    break
    case 'citacita'://Piyobot
    fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/citacita/main/citacita.txt')
    .then(res => res.text())
        .then(body => {
    let cita = body.split('\n')
    let raya = cita[Math.floor(Math.random() * cita.length)]
    piyo.sendFileFromUrl(from, raya, 'citacita.mp3', id)
    .then(() => console.log('Success sending cita'))
        })
        .catch(() => {
            piyo.reply(from, 'Ada yang Error!', id)
        })
    break
    case 'lord'://Piyobot
    fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/lord/main/jumpscare.txt')
    .then(res => res.text())
        .then(body => {
    let lord = body.split('\n')
    let nadhira = lord[Math.floor(Math.random() * lord.length)]
    piyo.sendFileFromUrl(from, nadhira, 'lord.mp4','Nih ngab', id)
    .then(() => console.log('Success sending lord'))
        })
        .catch(() => {
            piyo.reply(from, 'Ada yang Error!', id)
        })
    break
    case 'bocil':
    piyo.sendText(from, ind.wait , id)
    await piyo.sendFileFromUrl(from, 'http://piyobot.000webhostapp.com/gg.mp4', 'gg.mp4')
    break
    case 'buatgrup':
    argos = body.trim().split(' ')
    const gcname = argos[1]
    piyo.createGroup(gcname , sender.id)
    await piyo.sendText(from, `Sukses membuat grup`, id)
    break
case 'motivasi':
            fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/motivasi/main/motivasi.txt')
            .then(res => res.text())
            .then(body => {
                let splitmotivasi = body.split('\n')
                let randommotivasi = splitmotivasi[Math.floor(Math.random() * splitmotivasi.length)]
                piyo.reply(from, randommotivasi, id)
            })
            .catch(() => {
                piyo.reply(from, 'Ada yang Error!', id)
            })
            break
            case 'katasenja':
            fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/katasenja/main/senja.txt')
            .then(res => res.text())
            .then(body => {
                let senja = body.split('\n')
                let randomsenja = senja[Math.floor(Math.random() * senja.length)]
                piyo.reply(from, randomsenja, id)
            })
            .catch(() => {
                piyo.reply(from, 'Ada yang Error!', id)
            })
            break
            case 'fiersa':
                fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/Fiersa-Besari/main/fiersa-besari.txt')
            .then(res => res.text())
            .then(body => {
                let ff = body.split('\n')
                let randomff = ff[Math.floor(Math.random() * ff.length)]
                piyo.reply(from, randomff, id)
            })
            .catch(() => {
                piyo.reply(from, 'Ada yang Error!', id)
            })
            break
            case 'puisirandom':
                await piyo.reply(from, ind.wait(), id)
                await piyo.sendFileFromUrl(from, `https://api.vhtear.com/puisi_image&apikey=${vhtearkey}`)
                break
        case 'howbucins':         
		if (args.length == 0) return piyo.reply(from, `Untuk mengetahui seberapa bucin seseorang gunakan ${prefix}howbucins namanya\n\nContoh: !howbucins burhan`, id)
            const bucin = await rugaapi.bucin(args[0],args[1],args[2])
            fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/botakbar/main/howbucins.txt')
            .then(res => res.text())
            .then(body => {
                let splithowbucins = body.split('\n')
                let randomhowbucins = splithowbucins[Math.floor(Math.random() * splithowbucins.length)]
                piyo.reply(from, randomhowbucins, id)
                piyo.reply(from, bucin, id)
            })
            .catch(() => {
                piyo.reply(from, 'Ada yang Error!', id)
            })
            break

        case 'fakta':     
            fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/faktaunix.txt')
            .then(res => res.text())
            .then(body => {
                let splitnix = body.split('\n')
                let randomnix = splitnix[Math.floor(Math.random() * splitnix.length)]
                piyo.reply(from, randomnix, id)
            })
            .catch(() => {
                piyo.reply(from, 'Ada yang Error!', id)
            })
            break
        case 'katabijak':      
            fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/katabijax.txt')
            .then(res => res.text())
            .then(body => {
                let splitbijak = body.split('\n')
                let randombijak = splitbijak[Math.floor(Math.random() * splitbijak.length)]
                piyo.reply(from, randombijak, id)		    
            })
            .catch(() => {
                piyo.reply(from, 'Ada yang Error!', id)
            })
            break
        case 'pantun':      
            fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/pantun.txt')
            .then(res => res.text())
            .then(body => {
                let splitpantun = body.split('\n')
                let randompantun = splitpantun[Math.floor(Math.random() * splitpantun.length)]
                piyo.reply(from, randompantun.replace(/piyo-line/g,"\n"), id)
            })
            .catch(() => {
                piyo.reply(from, 'Ada yang Error!', id)
            })
            break
        case 'quote':       
            const quotex = await rugaapi.quote()
            await piyo.reply(from, quotex, id)
            .catch(() => {
                piyo.reply(from, 'Ada yang Error!', id)
            })
            break
			
            case 'cersex':
            await piyo.sendText(from, ind.wait() , id)               
            rugaapi.cersex()
			.then(async ({ result }) => {
                await piyo.sendText(from, `𝘊𝘦𝘳𝘪𝘵𝘢 𝘕𝘨𝘦𝘯𝘵𝘰𝘵~\nJudul : ${result.judul}\n${result.cerita}` , id) 
			})
            break
            case 'nickepep':
            await piyo.sendText(from, ind.wait() , id)
            rugaapi.nick()
            .then(async ({result}) => {
                await piyo.sendText(from, `${result}` ,id)
            })
            break
			
            case 'nhpdf':
            if (args.length === 0) return piyo.reply(from, `Pake Kodenya mas` , id)
            await piyo.reply(from, ind.wait(), id)
            const nh = await axios.get(`https://lolhuman.herokuapp.com/api/nhentaipdf/${q}?apikey=${lolhuman}`)
            await piyo.sendFileFromUrl(from, nh.data.result , 'piyo.pdf' , '' , id)
            break
			
            case 'listhero':
                await piyo.sendText(from, ind.wait(), id)
            rugaapi.epep()
            .then(async ({ result }) => {
                let tode = body.split('\n')
                await piyo.reply(from, `Nih gan : ${result}` , id) 
			})
            break
          case 'kemem': 
          case 'memek':               
            piyo.reply(from, `sedang maintance` ,id)
            break
        case 'xnxxapp':
            if (!isPremium) return piyo.reply(from, `Maaf, ini adalah fitur premium, untuk menggunakan fitur ini silahkan beli premium ke owner Murah kok`, id)
            await piyo.sendContact(from, ownerNumber)
            await piyo.reply(from, ind.wait(), id)
           await piyo.sendFileFromUrl(from, `https://piyobot.000webhostapp.com/XXNX%20Mod%20agustusan%20(SFILE.MOBI).apk`, 'xxnx.apk', id)
           await piyo.reply(from, 'Nih\'s Apknya mas ')
           .then(() => console.log('Success send apk'))
break
                case 'nekopoiapp':
              if (!isPremium) return piyo.reply(from, `Maaf, ini adalah fitur premium, untuk menggunakan fitur ini silahkan beli premium ke owner Murah kok`, id)          
           await piyo.reply(from, ind.wait(), id)
           await piyo.sendFileFromUrl(from, `https://bit.ly/nekopoiapp`, 'nekopoi.apk', `Nih apk nya mas` ,  id)
           .then(() => console.log('Success send apk'))
break        
case 'register':
                if (isRegistered) return await piyo.reply(from, ind.registeredAlready(), id)
                if (!q.includes('|')) return await piyo.sendFile(from, './media/register.png' , id)
                const dataDiri = q.split('|').join('-')
                if (!dataDiri) return await piyo.sendFile(from, './media/register.png' , id)
                _registered.push(sender.id)
                _biodata.push(dataDiri)
                fs.writeFileSync('./settings/registered.json', JSON.stringify(_registered))
                fs.writeFileSync('./settings/biodata.json', JSON.stringify(_biodata))
                await piyo.reply(from, ind.registered(), id)
            break
case 'apakah' :
    fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/ana/main/test.txt')
    .then(res => res.text())
    .then(body => {
        const answer = [
        './media/iya.mp3',
        './media/ngga.mp3',
        './media/mungkin.mp3'
        ]
        let randomansw = answer[Math.floor(Math.random() * answer.length)]
        piyo.sendPtt(from , randomansw , id)
    })
			break
case 'kapankah':
                const when = args.join(' ')
                const ans = kapan[Math.floor(Math.random() * (kapan.length))]
                if (!when) piyo.reply(from, `⚠️ Format salah! Ketik *${prefix}kapankah* pertanyaanya`)
                await piyo.sendTextWithMentions(from, `Pertanyaan Dari @${sender.id}\nKapan *${when}* \n\nJawaban: ${ans}`)
                break

        // Other Command
case 'lk21':
                
                        if (!q) return await piyo.reply(from, ind.wrongFormat(), id)
                await piyo.reply(from, ind.wait(), id)
                            rugaapi.movie(q)
                            .then(async ({ result }) => {
                            let movies = `Hasil Pencarian film: *${result.judul}*\n`
                        for (let i = 0; i < result.data.length; i++) {
                            movies +=  `\n\n*Resolusi:* : ${result.data[i].resolusi}\nURL: ${result.data[i].urlDownload}\nBy: Piyobot\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                            piyo.reply(from, movies, id);
                    })
                    break
case 'cekongkir': //By: VideFrelan
                     if (!q) return await piyo.reply(from, ind.wrongFormat(), id)
                     await piyo.reply(from, ind.wait(), id)
                     const kurir = q.substring(0, q.indexOf('|') - 1)
                     const askot = q.substring(q.indexOf('|') + 2, q.lastIndexOf('|') - 1)
                     const tukot = q.substring(q.lastIndexOf('|') + 2)
                     rugaapi.ongkir(kurir, askot, tukot)
                   .then(async ({ result }) => {
                    let onkir = `_*${result.title}*_\n`
                    for (let i = 0; i < result.data.length; i++) {
                    onkir +=  `\n\n*Layanan:* : ${result.data[i].layanan}\nEstimated pengiriman: ${result.data[i].etd}\nTarif: ${result.data[i].tarif}\n\nBy: PiyobotInfo: ${result.informasi}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                }
                    piyo.reply(from, onkir, id);
            })
            break
case 'shopee':               
                if (!q) return await piyo.reply(from, ind.wrongFormat(), id)
                const namaBarang = q.substring(0, q.indexOf('|') - 1)
                const jumlahBarang = q.substring(q.lastIndexOf('|') + 2)
                await piyo.reply(from, ind.wait(), id)
                try {
                    rugaapi.shopee(namaBarang, jumlahBarang)
                        .then(async ({ result }) => {
                            for (let i = 0; i < 1; i++) {
                                const { nama, harga, terjual, shop_location, description, link_product, image_cover } = result.items[i]
                                await piyo.sendFileFromUrl(from, image_cover, `${nama}.jpg`, ind.shopee(nama, harga, terjual, shop_location, description, link_product))
                            }
                            console.log('Success sending Shopee data!')
                        })
                } catch (err) {
                    console.error(err)
                    await piyo.reply(from, `Error!\n\n${err}`, id)
                }
            break
case 'film':
            piyo.reply(from, ind.wait(), id)
try {
            rugaapi.film()
            .then(async ({ result }) => {
            await piyo.reply(from, result.data , id)
            console.log('sukses')
})
} catch (err) {
                    console.error(err)
                    await piyo.reply(from, `Error!\n\n${err}`, id)
                }
            break
case 'playstore':
            case 'ps':                
                if (!q) return await piyo.reply(from, ind.wrongFormat(), id)
                await piyo.reply(from, ind.wait(), id)
                try {
                    rugaapi.playstore(q)
                        .then(async ({ result }) => {
                            for (let i = 0; i < 1; i++) {
                                const { app_id, icon, title, developer, description, price, free } = result[i]
                                await piyo.sendFileFromUrl(from, icon, `${title}.jpg`, ind.playstore(app_id, title, developer, description, price, free))
                            }
                            console.log('Success sending PlayStore result!')
                        })
                } catch (err) {
                    console.error(err)
                    await piyo.reply(from, `Error!\n\n${err}`, id)
                }
            break
        case 'resi':
            if (args.length !== 2) return piyo.reply(from, `Maaf, format pesan salah.\nSilahkan ketik pesan dengan ${prefix}resi <kurir> <no_resi>\n\nKurir yang tersedia:\njne, pos, tiki, wahana, jnt, rpx, sap, sicepat, pcp, jet, dse, first, ninja, lion, idl, rex`, id)
            const kurirs = ['jne', 'pos', 'tiki', 'wahana', 'jnt', 'rpx', 'sap', 'sicepat', 'pcp', 'jet', 'dse', 'first', 'ninja', 'lion', 'idl', 'rex']
            if (!kurirs.includes(args[0])) return piyo.sendText(from, `Maaf, jenis ekspedisi pengiriman tidak didukung layanan ini hanya mendukung ekspedisi pengiriman ${kurirs.join(', ')} Tolong periksa kembali.`)
            console.log('Memeriksa No Resi', args[1], 'dengan ekspedisi', args[0])
            cekResi(args[0], args[1]).then((result) => piyo.sendText(from, result))
            break
	case 'bass':
            if (isQuotedAudio) {
                let dB = 58
                let freq = 75
                console.log(color('[WAPI]', 'green'), 'Downloading and decrypt media...')
                const mediaData = await decryptMedia(quotedMsg)
                const bass = await stream2Buffer(write => {
                    ffmpeg(buffer2Stream(mediaData))
                        .audioFilter('equalizer=f=' + freq + ':width_type=o:width=2:g=' + dB)
                        .format('mp3')
                        .on('start', commandLine => console.log(color('[FFmpeg]'), commandLine))
                        .on('progress', progress => console.log(color('[FFmpeg]'), progress))
                        .on('end', () => console.log(color('[FFmpeg]'), 'Processing finished!'))
                        .stream(write)
                })
                piyo.sendPtt(from, baseURI(bass, 'audio/mp3'), id)
            } else {
                piyo.reply(from, `Hanya tag data audio!`, id)
            }
            break
			
        case 'tts':               
            if (args.length == 0) return piyo.reply(from, `Mengubah teks menjadi sound (google voice)\nketik: ${prefix}tts <kode_bahasa> <teks>\ncontoh : ${prefix}tts id halo\nuntuk kode bahasa cek disini : https://anotepad.com/note/read/5xqahdy8`)
            const ttsGB = require('node-gtts')(args[0])
            const dataText = body.slice(8)
                if (dataText === '') return piyo.reply(from, '/tts id teksnya..', id)
                try {
                    ttsGB.save('./media/tts.mp3', dataText, function () {
                    piyo.sendPtt(from, './media/tts.mp3', id)
                    })
                } catch (err) {
                    piyo.reply(from, err, id)
                }
            break	
	case 'tomp3':
        if ((isMedia || isQuotedVideo || isQuotedFile)) {
            piyo.reply(from, ind.wait(), id)
            const encryptMedia = isQuotedVideo || isQuotedFile ? quotedMsg : message
            const _mimetype = isQuotedVideo || isQuotedFile ? quotedMsg.mimetype : mimetype
            console.log(color('[WAPI]', 'green'), 'Downloading and decrypt media...')
            const mediaData = await decryptMedia(encryptMedia)
            let temp = './temp'
            let name = new Date() * 1
            let fileInputPath = path.join(temp, 'video', `${name}.${_mimetype.replace(/.+\//, '')}`)
            let fileOutputPath = path.join(temp, 'audio', `${name}.mp3`)
            console.log(color('[fs]', 'green'), `Downloading media into '${fileInputPath}'`)
            fs.writeFile(fileInputPath, mediaData, err => {
                if (err) return piyo.sendText(from, 'Ada yang error saat menulis file\n\n' + err) && _err(err)
                // ffmpeg -y -t 5 -i <input_file> -vf "scale=512:512:flags=lanczos:force_original_aspect_ratio=decrease" -qscale 100 <output_file>.webp
                ffmpeg(fileInputPath)
                    .format('mp3')
                    .on('start', function (commandLine) {
                        console.log(color('[FFmpeg]', 'green'), commandLine)
                    })
                    .on('progress', function (progress) {
                        console.log(color('[FFmpeg]', 'green'), progress)
                    })
                    .on('end', function () {
                        console.log(color('[FFmpeg]', 'green'), 'Processing finished!')
                        // fs.readFile(fileOutputPath, { encoding: 'base64' }, (err, base64) => {
                        // if (err) return piyo.sendText(from, 'Ada yang error saat membaca file .mp3') && console.log(color('[ERROR]', 'red'), err)
                        piyo.sendFile(from, fileOutputPath, 'audio.mp3', '', id)
                        // })
                        setTimeout(() => {
                            try {
                                fs.unlinkSync(fileInputPath)
                                fs.unlinkSync(fileOutputPath)
                            } catch (e) {
                                console.log(color('[ERROR]', 'red'), e)
                            }
                        }, 30000)
                    })
                    .save(fileOutputPath)
            })
        }
        limitAdd(serial)
       break
	case 'toptt':
            if (quotedMsg){
                if (quotedMsg.type === 'audio') { 
                    try {
                        await piyo.reply(from, `Tunggu sebentar` , id)
                        mediaData = await decryptMedia(quotedMsg, uaOverride)
                        fs.writeFileSync(`./media/audio/vn.mp3`, mediaData)
                        piyo.reply(from, `Lagu berhasil di convert ke voice not\ntunggu sebentar bot akan mengirim voice notnya`, id)
                        await piyo.sendPtt(from, `./media/audio/asu.mp3` , id)
                    } catch(err) {
                        piyo.reply(from, `Gagal Convert Audio`, id)
                    }
                } else {
                    piyo.reply(from, `Harus reply audio!`, id)
                }
            } else {
                piyo.reply(from, `Gaada data yang direply gan`, id)
            }
         break
        case 'translate':
                
            if (args.length != 1) return piyo.reply(from, `Maaf, format pesan salah.\nSilahkan reply sebuah pesan dengan caption ${prefix}translate <kode_bahasa>\ncontoh ${prefix}translate id`, id)
            if (!quotedMsg) return piyo.reply(from, `Maaf, format pesan salah.\nSilahkan reply sebuah pesan dengan caption ${prefix}translate <kode_bahasa>\ncontoh ${prefix}translate id`, id)
            const quoteText = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
            translate(quoteText, args[0])
                .then((result) => piyo.sendText(from, result))
                .catch(() => piyo.sendText(from, 'Error, Kode bahasa salah.'))
            break
		case 'covidindo':
			rugaapi.covidindo()
			.then(async (res) => {
				await piyo.reply(from, `${res}`, id)
			})
			break
        case 'ceklokasi':
            if (quotedMsg.type !== 'location') return piyo.reply(from, `Maaf, format pesan salah.\nKirimkan lokasi dan reply dengan caption ${prefix}ceklokasi`, id)
            console.log(`Request Status Zona Penyebaran Covid-19 (${quotedMsg.lat}, ${quotedMsg.lng}).`)
            const zoneStatus = await getLocationData(quotedMsg.lat, quotedMsg.lng)
            if (zoneStatus.kode !== 200) piyo.sendText(from, 'Maaf, Terjadi error ketika memeriksa lokasi yang anda kirim.')
            let datax = ''
            for (let i = 0; i < zoneStatus.data.length; i++) {
                const { zone, region } = zoneStatus.data[i]
                const _zone = zone == 'green' ? 'Hijau* (Aman) \n' : zone == 'yellow' ? 'Kuning* (Waspada) \n' : 'Merah* (Bahaya) \n'
                datax += `${i + 1}. Kel. *${region}* Berstatus *Zona ${_zone}`
            }
            const toll = `*CEK LOKASI PENYEBARAN COVID-19*\nHasil pemeriksaan dari lokasi yang anda kirim adalah *${zoneStatus.status}* ${zoneStatus.optional}\n\nInformasi lokasi terdampak disekitar anda:\n${datax}`
            piyo.sendText(from, toll)
            break
        case 'shortlink':        
            if (args.length == 0) return piyo.reply(from, `ketik ${prefix}shortlink <url>`, id)
            if (!isUrl(args[0])) return piyo.reply(from, 'Maaf, url yang kamu kirim tidak valid.', id)
            const shortlink = await urlShortener(args[0])
            await piyo.sendText(from, shortlink)
            .catch(() => {
                piyo.reply(from, 'Ada yang Error!', id)
            })
            break
		case 'bapakfont':
			if (args.length == 0) return piyo.reply(from, `Mengubah kalimat menjadi alayyyyy\n\nketik ${prefix}bapakfont kalimat`, id)
			rugaapi.bapakfont(body.slice(11))
			.then(async(res) => {
				await piyo.reply(from, `${res}`, id)
			})
            break
case 'mtk':

                if (!q) return await piyo.reply(from, ind.wrongFormat(), id)
                if (typeof Math_js.evaluate(q) !== "number") {
                    await piyo.reply(from, ind.notNum(q), id)
                } else {
                    await piyo.reply(from, `*「 MATH 」*\n\n${q} = ${Math_js.evaluate(q)}`, id)
                }
            break
                    break
                		case 'hilih':
			if (args.length == 0) return piyo.reply(from, `Mengubah kalimat menjadi hilih\n\nketik ${prefix}hilih kalimat`, id)
			rugaapi.hilih(body.slice(11))
			.then(async(res) => {
				await piyo.reply(from, res.kata , id)
			})
            break
            case 'resep':
                    
                if (args.length == 0) return piyo.reply(from, `Untuk mencari resep makanan\nCaranya ketik: ${prefix}resep [search]\n\ncontoh: ${prefix}resep tahu`, id)
                const cariresep = body.slice(7)
                const hasilresep = await resep.resep(cariresep)
                await piyo.reply(from, hasilresep + '\n\nIni kak resep makanannya..', id)
                .catch(() => {
                    piyo.reply(from, 'Ada yang Error!', id)
                })
                break
case 'nhdl':
                    
                    if (isGroupMsg) {
                        if (!isNsfw) return await piyo.reply(from, ind.notNsfw(), id)
    }
case 'nhder':
        
        if (args.length !== 1) return await piyo.reply(from, 'Silakan masukkan kode dengan benar!', id)
        await piyo.reply(from, ind.wait(), id)
        try {
            const kodeDojin = args[0]
            const proccessLink = `https://nhder.herokuapp.com/download/nhentai/${kodeDojin}/zip`
            const captionDojin = `------[ NHENTAI DOWNLOADER ]------\n\n➸ Kode doujin: ${kodeDojin}`
            await piyo.sendFileFromUrl(from, proccessLink, `${kodeDojin}.zip`, '' , id)
        } catch (err) {
            console.error(err)
              await piyo.reply(from, `Error!\n${err}`, id)
        }
    break
case 'wiki':          
                if (args.length == 0) return piyo.reply(from, `Untuk mencari suatu kata dari wikipedia\nketik: ${prefix}wiki [kata]`, id)
                const wikip = body.slice(6)
                const wikis = await rugaapi.wiki(wikip)
                await piyo.reply(from, wikis, id)
                .catch(() => {
                    piyo.reply(from, 'Ada yang Error!', id)
                })
                break
case 'cuaca':              
                if (args.length == 0) return piyo.reply(from, `Untuk melihat cuaca pada suatu daerah\nketik: ${prefix}cuaca [daerah]`, id)
                const cuacaq = body.slice(7)
                const cuacap = await rugaapi.cuaca(cuacaq)
                await piyo.reply(from, cuacap, id)
                .catch(() => {
                    piyo.reply(from, 'Ada yang Error!', id)
                })
                break
case 'chord':          
                if (args.length == 0) return piyo.reply(from, `Untuk mencari lirik dan chord dari sebuah lagu\bketik: ${prefix}chord [judul_lagu]`, id)
                const chordq = body.slice(7)
                const chordp = await rugaapi.chord(chordq)
                await piyo.reply(from, chordp, id)
                .catch(() => {
                    piyo.reply(from, 'Ada yang Error!', id)
                })
                break
case 'ssphone':
                    if (args.length == 0) return piyo.reply(from, 'Kirim perintah */ssphone [linkWeb]*\nContoh : */ssphone https://neonime.vip*', id)
                    const ssphone = body.slice(9)
                    piyo.sendFileFromUrl(from, `https://api.vhtear.com/ssweb?link=${ssphone}&type=phone&apikey=${vhtearkey}`, 'ssphone.jpg', '', id)
                    await limitAdd(serial)
                    break
case 'sspc':
                    if (args.length == 0) return piyo.reply(from, 'Kirim perintah */sspc [linkWeb]*\nContoh : */sspc https://neonime.vip*', id)
                    const sspc = body.slice(6)
                    piyo.sendFileFromUrl(from, `https://api.vhtear.com/ssweb?link=${sspc}&type=pc&apikey=${vhtearkey}`, 'sspc.jpg', '', id)
                    await limitAdd(serial)
                    break
                    case 'waktu':
                        piyo.reply(from, `*Waktu Piyobot Aktif* \n\nPAGI = 07:00 - 10:00\n\nSIANG = 13:00 - 16:00\n\nMALAM = 19:00 - 22:00` , id)
                        break
                    case 'listbacot':
                                    const bacul = dbcot
                                    let bacotanmu = `╔══✪〘 *List Bacot!* 〙✪══\n`
                                    for (let i = 0; i < bacul.length; i++) {
                                        bacotanmu += '╠➥'
                                        bacotanmu += ` ${bacul[i]}\n`
                                    }
                                    bacotanmu += '╚═〘 *Piyo Bot* 〙'
                                    await piyo.sendText(from, bacotanmu)
                                    break
                                        case 'addbacot':{
                                    if (!args.length >= 1) return piyo.reply(from, 'salah kak, /addbacot teksnya', id)  
                                        const bacot = body.slice(10)
                                        dbcot.push(bacot)
                                        fs.writeFileSync('./settings/bacot.json', JSON.stringify(dbcot))
                                        piyo.reply(from, `Sukses menambahkan Kata bacot ke database\nTotal data bacot sekarang : *${dbcot.length - 1}*`, id)
                                    }
                                    break
        //Fun Menu

        case 'chat':
            piyo.reply(from, `Untuk mengaktifkan piyobot chat\n\n penggunannya\n${prefix}piyo on --mengaktifkan\n${prefix}piyo off --menonatifkan\n`, id)
            break
            break
        case 'piyo':
            if (isGroupMsg) 
            {return await piyo.reply(from, `Fitur ini khusus private chat` ,id)  
        }else{
            if (args.length !== 1) return piyo.reply(from, `Untuk mengaktifkan piyo pada  Chat\n\nPenggunaan\n${prefix}piyo on --mengaktifkan\n${prefix}piyo off --nonaktifkan\n`, id)
			if (args[0] == 'on') {
				chatt.push(chatId)
				fs.writeFileSync('./settings/piyo.json', JSON.stringify(chatt))
                                piyo.reply(from, 'Mengaktifkan bot piyo-piyo!', id)
			        } else if (args[0] == 'off') {
				let inxx = chatt.indexOf(chatId)
				chatt.splice(inxx, 1)
				fs.writeFileSync('./settings/piyo.json', JSON.stringify(chatt))
				piyo.reply(from, 'Menonaktifkan bot piyo-piyo!', id)
			        } else {
				piyo.reply(from, `Untuk mengaktifkan piyo \n\nPenggunaan\n${prefix}piyo on --mengaktifkan\n${prefix}piyo off --nonaktifkan\n`, id)
            }
        }
			break    
		case 'simisimi':
			if (!isGroupMsg) return piyo.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
			piyo.reply(from, `Untuk mengaktifkan simi-simi pada Group Chat\n\nPenggunaan\n${prefix}simi on --mengaktifkan\n${prefix}simi off --nonaktifkan\n`, id)
			break
		case 'simi':
			if (!isGroupMsg) return piyo.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
            if (!isGroupAdmins) return piyo.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id)
			if (args.length !== 1) return piyo.reply(from, `Untuk mengaktifkan simi-simi pada Group Chat\n\nPenggunaan\n${prefix}simi on --mengaktifkan\n${prefix}simi off --nonaktifkan\n`, id)
			if (args[0] == 'on') {
				simi.push(chatId)
				fs.writeFileSync('./settings/simi.json', JSON.stringify(simi))
                piyo.reply(from, 'Mengaktifkan bot simi-simi!', id)
			} else if (args[0] == 'off') {
				let inxx = simi.indexOf(chatId)
				simi.splice(inxx, 1)
				fs.writeFileSync('./settings/simi.json', JSON.stringify(simi))
				piyo.reply(from, 'Menonaktifkan bot simi-simi!', id)
			} else {
				piyo.reply(from, `Untuk mengaktifkan simi-simi pada Group Chat\n\nPenggunaan\n${prefix}simi on --mengaktifkan\n${prefix}simi off --nonaktifkan\n`, id)
			}
			break
                		case 'simisimi':
			if (!isGroupMsg) return piyo.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
			piyo.reply(from, `Untuk mengaktifkan simi-simi pada Group Chat\n\nPenggunaan\n${prefix}simi on --mengaktifkan\n${prefix}simi off --nonaktifkan\n`, id)
			break
                        case 'limit':
            var found = false
            const limidat = JSON.parse(fs.readFileSync('./settings/limit.json'))
            for(let lmt of limidat){
                if(lmt.id === pengirim){
                    let limitCounts = limitCount-lmt.limit
                    if(limitCounts <= 0) return piyo.reply(from, `Limit request anda sudah habis\n\n_Note : Jika ingin menambah limit silahkan chat owner`, id)
                    piyo.reply(from, `Sisa limit request anda tersisa : *${limitCounts}*\n\n_Note : Jika ingin menambah limit silahkan chat owner`, id)
                    piyo.sendContact(ownerNumber , id)
                    found = true
                }
            }
            if (found === false){
                let obj = {id: `${pengirim}`, limit:1};
                limit.push(obj);
                fs.writeFileSync('./settings/limit.json',JSON.stringify(limit, 1));
                piyo.reply(from, `Sisa limit request anda tersisa : *${limitCount}*\n\n_Note : Jika ingin menambah limit silahkan chat owner`, id)
            }
            break
case 'premiumcheck':
            case 'cekpremium':
                if (!isPremium) return await piyo.reply(from, ind.notPremium(), id)
                const cekExp = ms(premium.getPremiumExpired(sender.id, _premium) - Date.now())
                await piyo.reply(from, `*「 PREMIUM EXPIRE 」*\n\n➸ *ID*: ${sender.id}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`, id)
            break
case 'premiumlist':
case 'listpremium':
                let listPremi = '「 *PREMIUM USER LIST* 」\n\n'
                let nomorList = 0
                const arrayPremi = []
                for (let i = 0; i < premium.getAllPremiumUser(_premium).length; i++) {
                    arrayPremi.push(await piyo.getContact(premium.getAllPremiumUser(_premium)[i]))
                    nomorList++
                    listPremi += `${nomorList}. ${premium.getAllPremiumUser(_premium)[i]}\n➸ *Name*: ${arrayPremi[i].pushname}\n\n`
                }
                await piyo.reply(from, listPremi, id)
            break
case 'resetlimit':
                if (!isOwnerBot) return piyo.reply(from, `Khusus owner` , id) 
	     {
                limit.splice(chat.id)
                fs.writeFileSync('./settings/limit.json', JSON.stringify(limit))
                await piyo.reply(from, `Sudah kak` , id)
            }
break
case 'buylimit':
             if (!isRegistered) return piyo.reply(from, `Maaf ${pushname}, sepertinya kamu belum terdaftar sebagai user Piyobot, untuk pendaftaran bisa menggunakan /register nama | Jenis Kelamin. Contoh: /register ${pushname}|cewe`, id)
             if (args.length == 0) return piyo.reply(from, `Berapa limit yang mau di beli bre?\n1 Point Limit = Rp. 1500\n\nPastiin uang kakak cukup juga kak!\nCara Pembelian: #buylimit 1\nCara cek uang: ${prefix}bal`, id)
             payout = body.slice(10)
             const koinPerlimit = 1500 //Silahkan Custom Sendiri Price BuyLimit
             const total = koinPerlimit * payout
             if ( checkATMuser(serial) <= total) return piyo.reply(from, `maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`, id)
             if ( checkATMuser(serial) >= total ) {
             confirmATM(serial, total)
             bayarLimit(serial, payout)
             await piyo.reply(from, `*「 PEMBAYARAN BERHASIL 」*\n\n❏ *pengirim* : Admin\n❏ *penerima* : ${pushname}\n❏ *nominal pembelian* : ${payout} \n❏ *harga limit* : ${koinPerlimit}/limit\n❏ *sisa uang mu* : Rp. ${checkATMuser(serial)}\n\nproses berhasil dengan nomer pembayaran \n${SN}`, id)
                }
            break
//////////////////////////////////////////////////////Owner Bot////////////////////////////////////////////////////
case 'eval':
case 'ev':
            if (!isOwnerBot) return await piyo.reply(from, ind.ownerOnly(), id)
            if (!q) return await piyo.reply(from, ind.wrongFormat(), id)
                try {
                    let evaled = await eval(q)
                    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                    await piyo.sendText(from, evaled)
                } catch (err) {
                    console.error(err)
                    await piyo.reply(from, 'Error!', id)
                }
            break
case 'getcode': { 
            if (!isOwnerBot) return await piyo.reply(from, ind.ownerOnly(), id)
	    if (!q) return await piyo.reply(from, `Silahkan ketik /getcode harinya\nContoh: /getcode 15` , id)
            if (ar[0] === '15') {
            await piyo.reply(from, ind.wait() , id)
            const codeuser = createcode(15)
            code15.push(codeuser)
            fs.writeFileSync('./settings/code15.json', JSON.stringify(code15))
            await piyo.sendText(ownerNumber, `*「 PREMIUM 15 HARI 」*\n\n➸ *CODE :* ${codeuser}\n➸ *CARA PAKAI*\n➸ Ketik /premiumcode codenya` , id)
            premiumcode.push(codeuser)
            fs.writeFileSync('./settings/premiumcode.json', JSON.stringify(premiumcode))
            } else {
            if (ar[0] === '30'){
            await piyo.reply(from, ind.wait() , id)
            const codeuserr = createcode(15)
            code30.push(codeuserr)
            fs.writeFileSync('./settings/code30.json', JSON.stringify(code30))
            await piyo.sendText(ownerNumber, `*「 PREMIUM 30 HARI 」*\n\n➸ *CODE :* ${codeuserr}\n➸ *CARA PAKAI*\n➸ Ketik /premiumcode codenya` , id)
            premiumcode.push(codeuserr)
            fs.writeFileSync('./settings/premiumcode.json', JSON.stringify(premiumcode))
              } 
            }  
            if (ar[0] === '60'){
            await piyo.reply(from, ind.wait() , id)
            const codeuserrr = createcode(15)
            code60.push(codeuserrr)
            fs.writeFileSync('./settings/code60.json', JSON.stringify(code60))
            await piyo.sendText(ownerNumber, `*「 PREMIUM 60 HARI 」*\n\n➸ *CODE :* ${codeuserrr}\n➸ *CARA PAKAI*\n➸ Ketik /premiumcode codenya` , id)
            premiumcode.push(codeuserrr)
            fs.writeFileSync('./settings/premiumcode.json', JSON.stringify(premiumcode))
            }
        }
            break
case 'sewa':
                    if (!isOwnerBot) return await piyo.reply(from, ind.ownerOnly(), id)
                    if (ar.length == 0) return piyo.reply(from , `Ketik /sewa add/del harinya\nContoh: /sewa add 30d` , id)
                    if (ar.length == 1) return piyo.reply(from , `Ketik /sewa add/del harinya\nContoh: /sewa add 30d` , id)
                    if (ar[0] === 'add') 
                     {
                        sewa.addSewaGroup(chat.id , args[1], _sewa)
                        await piyo.reply(from, ` *「 SEWA ADDED 」*\n\n➸ *ID*: ${chat.id}\n➸ *Expired*: ${ms(toMs(args[1])).days} day(s) ${ms(toMs(args[1])).hours} hour(s) ${ms(toMs(args[1])).minutes} minute(s)\n\nBot Akan Keluar Secara Otomatis\nDalam waktu yang sudah di tentukan`, id)
                        await piyo.sendContact(from, ownerNumber)
                        await piyo.sendText(from, `*CHAT OWNER JIKA INGIN PERPANJANG DURASI*` , id)
                        await piyo.sendTextWithMentions(from, `@${ownerNumber} Silahkan Baca Pesan Pribadi Saya`)
                        await piyo.sendText(ownerNumber, `Sukses Menyewakan bot kedalam grup ${formattedTitle}\nSalin ID Dibawah Untuk Mendelete Sewaan Di Grup Tersebut\nDengan Ketik /sewa del IDnya` , id)
                        await piyo.sendText(ownerNumber, `${chat.id}`)
                    } 
                    else if (ar[0] === 'del')
                    {
                        _sewa.splice(sewa.getSewaPosition(chat.id, _sewa), 1)
                        fs.writeFileSync('./settings/sewa.json', JSON.stringify(_sewa))
                        await piyo.reply(from, ind.doneOwner(), id)
                    } 
                    else 
                    {
                        _sewa.splice(sewa.getSewaPosition(args[1] , _sewa), 1)
                        fs.writeFileSync('./settings/sewa.json', JSON.stringify(_sewa))
                        await piyo.reply(from, ind.doneOwner(), id)
                    }
                    break
case 'premium':
                if (!isOwnerBot) return await piyo.reply(from, ind.ownerOnly(), id)
                if (ar[0] === 'add') {
                    if (mentionedJidList.length !== 0) {
                        for (let benet of mentionedJidList) {
                            if (benet === botNumber) return await piyo.reply(from, ind.wrongFormat(), id)
                            premium.addPremiumUser(benet, args[2], _premium)
                            await piyo.reply(from, `*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${benet}\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`, id)
                        }
                    } else {
                        premium.addPremiumUser(args[1] + '@c.us', args[2], _premium)
                        await piyo.reply(from, `*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@c.us\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`, id)
                    }
                } else if (ar[0] === 'del') {
                    if (mentionedJidList.length !== 0) {
                        if (mentionedJidList[0] === botNumber) return await piyo.reply(from, ind.wrongFormat(), id)
                        _premium.splice(premium.getPremiumPosition(mentionedJidList[0], _premium), 1)
                        fs.writeFileSync('./settings/premium.json', JSON.stringify(_premium))
                        await piyo.reply(from, ind.doneOwner(), id)
                    } else {
                        _premium.splice(premium.getPremiumPosition(args[1] + '@c.us', _premium), 1)
                        fs.writeFileSync('./settings/premium.json', JSON.stringify(_premium))
                        await piyo.reply(from, ind.doneOwner(), id)
                    }
                } else {
                    await piyo.reply(from, ind.wrongFormat(), id)
                }
            break
case 'bc': //untuk broadcast atau promosi
if (!isOwnerBot) return piyo.reply(from, 'Perintah ini hanya untuk Owner bot!', id)
if (args.length == 0) return piyo.reply(from, `Untuk broadcast ke semua chat ketik:\n${prefix}bc [isi chat]`)
let msg = body.slice(4)
const chatz = await piyo.getAllChatIds()
for (let idk of chatz) {
    var cvk = await piyo.getChatById(idk)
    if (!cvk.isReadOnly) piyo.sendText(idk, `${msg}`)
    if (cvk.isReadOnly) piyo.sendText(idk, `${msg}`)
}
piyo.reply(from, 'Broadcast Success!', id)
break
case 'bcgrup': 
            if (!isOwnerBot) return piyo.reply(from, 'Perintah ini hanya untuk Owner bot', id)
            const allGrouppz = await piyo.getAllGroups()
            for (let gclistt of allGrouppz) {
	    await piyo.sendText(gclistt.contact.id , `${q}`) 
            }
            piyo.reply(from, 'Succes Bc all group!', id)
            break
case 'bcimg':
        if (!isOwnerBot) return piyo.reply(from, `Khususs Owner ` , id)
        if (!q) return piyo.reply(from, `Hai  Kak ${pushname} untuk menggunakan fitur bcimg, Silahkan kirim gambar/reply gambarnya , ketik /bcimg teksna`, id)
        if (isMedia && type === 'image' || isQuotedImage) {
        await piyo.reply(from, ind.wait(), id)
        const encryptMedia = isQuotedImage ? quotedMsg : message
        const mediaData = await decryptMedia(encryptMedia, uaOverride)
        fs.writeFileSync(`./media/images/bc.jpg`, mediaData)
        const chaim = await piyo.getAllChatIds()
        for (let grp of chaim) {
            var cukk = await piyo.getChatById(grp)
            if (!cukk.isReadOnly) piyo.sendFile(grp, `./media/images/bc.jpg` ,'piyo.jpg' ,`[PIYOBOT BROADCAST]\n\n${q}` ,'' , id)
            if (cukk.isReadOnly) piyo.sendFile(grp, `./media/images/bc.jpg` ,'piyo.jpg' ,`[PIYOBOT BROADCAST]\n\n${q}` , '' , id)
        }
        await piyo.reply(from, 'Broadcast Success!', id)
        fs.unlinkSync(`./media/images/bc.jpg`)
        }
        break
case 'ban':
            if (!isOwnerBot) return piyo.reply(from, 'Perintah ini hanya untuk Owner bot!', id)
            if (args.length == 0) return piyo.reply(from, `Untuk banned seseorang agar tidak bisa menggunakan commands\n\nCaranya ketik: \n${prefix}ban add 628xx --untuk mengaktifkan\n${prefix}ban del 628xx --untuk nonaktifkan\n\ncara cepat ban banyak digrup ketik:\n${prefix}ban @tag @tag @tag`, id)
            if (ar[0] === 'add') {
                if (mentionedJidList.length !== 0) {
                    for (let benet of mentionedJidList) {
                        if (benet === botNumber) return await piyo.reply(from, ind.wrongFormat(), id)
                        banned.push(benet)
                        fs.writeFileSync('./settings/banned.json', JSON.stringify(banned))
                    }
                    await piyo.reply(from, 'Mampus gua ban lu anjg!', id)
                } else {
                    banned.push(args[1] + '@c.us')
                    fs.writeFileSync('./settings/banned.json', JSON.stringify(banned))
                    await piyo.reply(from, 'Mampus gua ban lu anjg!', id)
                }
            } else if (ar[0] === 'del') {
                if (mentionedJidList.length !== 0) {
                    if (mentionedJidList[0] === botNumber) return await piyo.reply(from, ind.wrongFormat(), id)
                    banned.splice(mentionedJidList[0], 1)
                    fs.writeFileSync('./settings/banned.json', JSON.stringify(banned))
                    await piyo.reply(from, 'Nih gua udh unbaned!', id)
                } else{
                    banned.splice(args[1] + '@c.us', 1)
                    fs.writeFileSync('./settings/banned.json', JSON.stringify(banned))
                    await piyo.reply(from, 'Nih gua udh unbaned!', id)
                }
            } else {
                await piyo.reply(from, ind.wrongFormat(), id)
            }
            break
         // AUTO STIKER
case 'autostiker':
            case 'autostik':
            case 'autstik':
                
                if (!isGroupMsg) return await piyo.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return await piyo.reply(from, ind.adminOnly(), id)
                if (ar[0] === 'enable') {
                    if (isAutoStikerOn) return await piyo.reply(from, ind.autoStikOnAlready(), id)
                    _autostiker.push(chat.id)
                    fs.writeFileSync('./settings/autostiker.json', JSON.stringify(_autostiker))
                    await piyo.reply(from, ind.autoStikOn(), id)
                } else if (ar[0] === 'disable') {
                    _autostiker.splice(chat.id, 1)
                    fs.writeFileSync('./settings/autostiker.json', JSON.stringify(_autostiker))
                    await piyo.reply(from, ind.autoStikOff(), id)
                } else {
                    await piyo.reply(from, ind.wrongFormat(), id)
                }
            break

        case 'bacot':
            if (isLimit(serial)) return piyo.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                    if(args.length == 1) {
                        const no = args[0]
                        const cekdb = dbcot.length
                        if(cekdb <= no) return await piyo.reply(from, `Total data saat ini hanya sampai *${cekdb - 1}*`, id)
                        const res =  dbcot[no]
                        piyo.sendText(from, res)
                        } else {
                            const kata = dbcot[Math.floor(Math.random() * (dbcot.length))];
                            limitAdd(serial)
                            piyo.sendText(from, kata)
                        }
                    break  
                    case 'slidingtext':
                        if (args.length == 0) return piyo.reply(from, `Membuat Text Sliding\nPemakaian: ${prefix}slidingtext [teks]\n\ncontoh: ${prefix}slidingtext Dimas`, id)
                                        await piyo.reply(from, `Wait....`, id)
                                    console.log('Creating slidingtext text...')
                                    const lslidingtext = body.slice(13)
                                    await piyo.sendFileFromUrl(from, `https://api.vhtear.com/slidingtext?text=${q}&apikey=${vhtearkey}`, '', 'neh....', id)
                                        .then(() => console.log('Success creting image!'))
                                        .catch(async (err) => {
                                            console.error(err)
                                            await piyo.reply(from, `Error!`, id)
                                        })
                                break
        case 'leaveall': //mengeluarkan bot dari semua group serta menghapus chatnya
            if (!isOwnerBot) return piyo.reply(from, 'Perintah ini hanya untuk Owner bot', id)
            const allChatz = await piyo.getAllChatIds()
            const allGroupz = await piyo.getAllGroups()
            for (let gclist of allGroupz) {
                await piyo.sendText(gclist.contact.id, `Maaf bot sedang pembersihan, total chat aktif : ${allChatz.length}`)
                await piyo.leaveGroup(gclist.contact.id)
                await piyo.deleteChat(gclist.contact.id)
            }
            piyo.reply(from, 'Success leave all group!', id)
            break
        case 'clearall': //menghapus seluruh pesan diakun bot
            if (!isOwnerBot) return piyo.reply(from, 'Perintah ini hanya untuk Owner bot', id)
            const allChatx = await piyo.getAllChats()
            for (let dchat of allChatx) {p
                await piyo.deleteChat(dchat.id)
            }
            piyo.reply(from, 'Success clear all chat!', id)
            break
        default:
if (commandd.startsWith('/')) {
await piyo.reply(from, `Maaf ${pushname}, Command *${arghh[0]}* Tidak Terdaftar Di Dalam */menu*!`, id)
            }
}
        // Piyobot Function
        if ((!isCmd && chatId && isChat)&& message.type === 'chat'){
           const piyoget = await axios.get(`https://lolhuman.herokuapp.com/api/simi?apikey=${lolhuman}&text=${encodeURIComponent(message.body)}`)           
           await piyo.reply(from, `Piyobot Menjawab: ${piyoget.data.result}`, id)
            }
	// Simi-simi function
            if ((!isCmd && isGroupMsg && chatId && isSimi) && message.type === 'chat') {
                axios.get(`https://videfikri.com/api/simsimi/?teks=${encodeURIComponent(message.body)}`)
                .then((res) => {
                    if (res.data.result.status == 404) return piyo.sendText(ownerNumber, `${res.data.result.status}\n\n${res.data.result.pesan}`)
                    piyo.reply(from, `Simi berkata: ${res.data.result.jawaban}`, id)
                })
                .catch((err) => {
                    piyo.reply(from, `${err}`, id)
                })
		}
} catch (err) {
        console.log(color('[EROR]', 'red'), err)
    }
}
