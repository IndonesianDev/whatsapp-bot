const { create, Client } = require('@open-wa/wa-automate')
const figlet = require('figlet')
const options = require('./utils/options')
const { color, messageLog } = require('./utils')
const { ind, eng } = require('./message/text/lang/')
const HandleMsg = require('./HandleMsg')
const fs = require('fs-extra')
const fss = require('fs')
/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
const nocache = (module, call = () => { }) => {
    console.log(color('[WATCH]', 'orange'), color(`=> '${module}'`, 'yellow'), 'file is now being watched by me!')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        call(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
const uncache = (module = '.') => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (err) {
            reject(err)
        }
    })
}
require('./HandleMsg')
nocache('./HandleMsg', module => console.log(`'${module}' Updated!`))
require('./lib/menu.js')
nocache('./lib/menu.js', module => console.log(`'${module}' Updated!`))
const start = (piyo = new Client()) => {
    console.log(color(figlet.textSync('----------------', { horizontalLayout: 'default' })))
    console.log(color(figlet.textSync('Piyo Bot', { font: 'Ghost', horizontalLayout: 'default' })))
    console.log(color(figlet.textSync('----------------', { horizontalLayout: 'default' })))
    console.log(color('[DEV]'), color('Piyo', 'yellow'))
    console.log(color('[~>>]'), color('BOT Started!', 'darkblue'))

    // Mempertahankan sesi agar tetap nyala
    piyo.onStateChanged((state) => {
        console.log(color('[~>>]', 'red'), state)
        if (state === 'CONFLICT' || state === 'UNLAUNCHED') piyo.forceRefocus()
    })

    // ketika bot diinvite ke dalam group
    piyo.onAddedToGroup(async (chat) => {
	const groups = await piyo.getAllGroups()
	// kondisi ketika batas group bot telah tercapai,ubah di file settings/setting.json
	if (groups.length > groupLimit) {
	await piyo.sendText(chat.id, `Maap, Bot Sudah melewati batas memasuki group: ${groupLimit}`).then(() => {
	      piyo.leaveGroup(chat.id)
	      piyo.deleteChat(chat.id)
	  }) 
	} else {
	// kondisi ketika batas member group belum tercapai, ubah di file settings/setting.json
	    if (chat.groupMetadata.participants.length < memberLimit) {
	    await piyo.sendText(chat.id, `Member lu kurang , minimal member ${memberLimit} people`).then(() => {
	      piyo.leaveGroup(chat.id)
	      piyo.deleteChat(chat.id)
	    })
	    } else {
        await piyo.simulateTyping(chat.id, true).then(async () => {
          await piyo.sendText(chat.id, `Hai anjg~, Saya Whatsapp Bot Pintar.  Untuk memulai bot silahkan ketik ${prefix}menu`)
        })
	    }
	}
    })

// Listen to group's event
    piyo.onGlobalParticipantsChanged(async (event) => {
        const welcome = JSON.parse(fs.readFileSync('./settings/welcome.json'))
        const isWelcome = welcome.includes(event.chat)
        const botNumbers = await piyo.getHostNumber() + '@c.us'
        try {
            if (event.action === 'add' && event.who !== botNumbers && isWelcome) {
                const pic = await piyo.getProfilePicFromServer(event.who)
                if (pic === undefined) {
                    var pp = 'http://piyobot.cf/pphana.jpg'
                } else {
                    var pp = pic
                }
                await piyo.sendFileFromUrl(event.chat, pp, 'profile.jpg', '')
                await piyo.sendTextWithMentions(event.chat, ind.welcome(event))
            }
        } catch (err) {
            console.error(err)
        }
    })
    piyo.onIncomingCall(async (callData) => {
        // ketika seseorang menelpon nomor bot akan mengirim pesan
        await piyo.sendText(callData.peerJid, 'Maaf sedang tidak bisa menerima panggilan.\n nelfon=block \n\n-bot')
        .then(async () => {
            // bot akan memblock nomor itu
            await piyo.contactBlock(callData.peerJid)
        })
    })

    // ketika seseorang mengirim pesan
    piyo.onMessage(async (message) => {
        piyo.getAmountOfLoadedMessages() // menghapus pesan cache jika sudah 3000 pesan.
            .then((msg) => {
                if (msg >= 3000) {
                    console.log('[PIYOBOT]', color(`Loaded Message Reach ${msg}, cuting message cache...`, 'yellow'))
                    piyo.cutMsgCache()
                }
            })
        //HandleMsg(piyo, message)    
        require('./HandleMsg')(piyo, message)
    })
	
    // Message log for analytic
    piyo.onAnyMessage((anal) => { 
        messageLog(anal.fromMe, anal.type)
    })
}
//create session
create(options(true, start))
    .then((piyo) => start(piyo))
    .catch((err) => new Error(err))
