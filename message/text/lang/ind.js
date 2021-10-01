const fs = require('fs-extra')


exports.wait = () => {
    return `Mohon tunggu sebentar~`
}

exports.gsm = (result) => {
    return `➸ *Model HP*: ${result.title}\n➸ *Spesifikasi*: ${result.spec}`
}

exports.waitmutualan = () => {
    return `Looking for a partner...`
}

exports.joox = (result) => {
    return `*Lagu ditemukan!*\n\n➸ *Penyanyi*: ${result[0].penyanyi}\n➸ *Judul*: ${result[0].judul}\n➸ *Album*: ${result[0].album}\n➸ *Ext*: ${result[0].ext}\n➸ *Size*: ${result[0].filesize}\n➸ *Durasi*: ${result[0].duration}\n\nMedia sedang dikirim, mohon tunggu...`
}

exports.videoLimit = () => {
    return `Ukuran video terlalu besar!`
}

exports.ok = () => {
    return `Ok jing~`
}

exports.detectorOn = (name, formattedTitle) => {
    return `*「 ANTI GROUP LINK 」*\n\nPerhatian untuk penghuni grup ${(name || formattedTitle)}\nGrup ini memiliki anti group link detector, apabila ada salah satu member mengirim group link di sini maka dia akan ter-kick secara otomatis.\n\nSekian terima kasih.\n- Admin ${(name || formattedTitle)}`
}

exports.levelingOn = () => {
    return `Fitur leveling berhasil *diaktifkan*!`
}

exports.levelingOff = () => {
    return `Fitur leveling berhasil *dinonaktifkan*!`
}

exports.levelingOnAlready = () => {
    return `Fitur leveling telah diaktifkan sebelumnya.`
}

exports.levelingNotOn = () => {
    return `Fitur leveling belum diaktifkan!`
}
exports.detectorOff = () => {
    return `Fitur anti-link berhasil *dinonaktifkan*!`
}

exports.detectorOnAlready = () => {
    return `Fitur anti-link telah diaktifkan sebelumnya.`
}

exports.linkDetected = () => {
    return `*「 ANTI GROUP LINK 」*\n\nKamu mengirim link group chat!\nMaaf tapi kami harus mengkick kamu...\nSelamat tinggal~`
}

exports.playt = (result) => {
    return `*Lagu ditemukan!*\n\n➸ *Judul*: ${result[0].title}\n➸ *Ext*: ${result[0].ext}\n➸ *Size*: ${result[0].size}\n➸ *Durasi*: ${result[0].duration}\n\nMedia sedang dikirim, mohon tunggu...`
}

exports.wrongFormat = () => {
    return `Format salah!`
}

exports.wrongFormatt = () => {
    return `Format salah!`
    aruga.sendFile(from, './media/register.png', id)
}

exports.emptyMess = () => {
    return `Silakan masukkan pesan yang ingin disampaikan!`
}

exports.Yt3 = () => {
    return `[❗] Terjadi kesalahan, tidak dapat meng konversi ke mp3!`
}

exports.Yt4 = () => {
    return `[❗] Terjadi kesalahan, mungkin error di sebabkan oleh sistem.`
}

exports.cmdNotFound = () => {
    return `Command tidak ditemukan!`
}

exports.blocked = () => {
    return `Bot tidak menerima panggilan. Karena kamu telah melanggar rules, maka kamu telah diblok!\n\nHarap hubungi owner: wa.me/6281294958473`
}

exports.ownerOnly = () => {
    return `Command ini khusus Owner-sama!`
}

exports.doneOwner = () => {
    return `Sudah selesai, Owner-sama~`
}

exports.groupOnly = () => {
    return `Command ini hanya bisa digunakan di dalam grup!`
}

exports.adminOnly = () => {
    return `Hanya admin grup yang bisa menggunakan command ini!`
}

exports.notNsfw = () => {
    return `Command NSFW belum diaktifkan!`
}

exports.nsfwOn = () => {
    return `Command NSFW berhasil *diaktifkan*!\nKetik *$nsfwmenu* untuk melihat list command.`
}

exports.nsfwOff = () => {
    return `Command NSFW berhasil *dinonaktifkan*!`
}

exports.addedGroup = (chat) => {
    return `Terima kasih telah mengundangku, para member *${chat.contact.name}*!\n\nKetik $rules terlebih dahulu ya~`
}

exports.nhFalse = () => {
    return `Kode tidak valid!`
}

exports.listBlock = (blockNumber) => {
    return `------[ HALL OF SHAME ]------
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notPremium = () => {
    return `Maaf! Command ini khusus untuk user premium saja.`
}

exports.notAdmin = () => {
    return `Pengguna bukan admin!`
}

exports.adminAlready = () => {
    return `Tidak dapat promote pengguna yang merupakan admin!`
}

exports.botNotPremium = () => {
    return `Bot ini tidak mendukung command premium. Silakan hubungi pemilik bot ini.`
}

exports.botNotAdmin = () => {
    return `Jadikan bot sebagai admin terlebih dahulu!`
}

exports.ytLimit = () => {
    return `Size video terlalu besar!`
}

exports.ytFound = (result) => {
    return `Video ditemukan!\n\nTitle:\n${result.title}\n\nDescription:\n${result.desc}\n\nSize: ${result.size} / 50.0 MB\n\nMedia sedang dikirim, mohon tunggu...`
}

exports.fbFound = (result) => {
    return `Source:${result.source}`
}

exports.notRegistered = () => {
    return `Kamu belum terdafar di database!\n\nSilahkan Ketik /register namakalian | daerahkalian \n\n contohnya : /register alvio | bogor`
}

exports.notDaftar = () => {
    return `Kamu belum terdafar di database!\n\nSilakan Daftar dengan format:\n/daftar namakamu | kelaminmu\n\ncontoh= !daftar alvio | cowo`
}

exports.registered = () => {
    return `Selamat! Kamu telah terdaftar.\nKetik */rules* terlebih dahulu ya~`
}

exports.follow = () => {
    return `Makasih ya sudah follow instagram owner , semoga tuhan memberkatimu ~ , kirim ulang apa yang mau dikerjakan oleh bot , terimakasih`
}

exports.followsudah = () => {
    return `anda sudah menfollow ig owner`
}

exports.belomfollow = () => {
    return `anda belum menfollow ig owner , silahkan follow terlebih dahulu\n*dan silahkan cek bio owner di instagram*\nhttps://www.instagram.com/alvio151/\n\n*INGAT CEK BIO IG OWNER*`
}
exports.registeredAlready = () => {
    return `Kamu sudah mendaftar sebelumnya.`
}

exports.levelNull = () => {
    return `Kamu belum memiliki level!`
}

exports.welcome = (event) => {
    return `Selamat datang @${event.who.replace('@c.us', '')}!\n\nSemoga betah terus di grup kami ya~`
}

exports.welcomeOn = () => {
    return `Fitur welcome berhasil *diaktifkan*!`
}

exports.welcomeOff = () => {
    return `Fitur welcome berhasil *dinonaktifkan*!`
}

exports.welcomeOnAlready = () => {
    return `Fitur welcome telah diaktifkan sebelumnya.`
}

exports.minimalDb = () => {
    return ` Perlu setidaknya 10 user yang memiliki level di database!`
}

exports.autoStikOn = () => {
    return `Fitur auto-stiker berhasil *diaktifkan*!`
}

exports.autoStikOff = () => {
    return `Fitur auto-stiker berhasil *dinonaktifkan*!`
}

exports.autoStikOnAlready = () => {
    return `Fitur auto-stiker telah diaktifkan sebelumnya.`
}
exports.afkOn = () => {
    return `Fitur AFK berhasil *diaktifkan*!`
}

exports.afkOn = (pushname, reason) => {
    return `Fitur AFK berhasil *diaktifkan*!\n\n➸ *Username*: ${pushname}\n➸ *Alasan*: ${reason}`
}

exports.afkOnAlready = () => {
    return `Fitur AFK telah diaktifkan sebelumnya.`
}

exports.afkMentioned = (getReason, getTime) => {
    return `*「 AFK MODE 」*\n\nSssttt! Orangnya lagi afk, jangan diganggu!\n➸ *Alasan*: ${getReason}\n➸ *Sejak*: ${getTime}`
}

exports.afkDone = (pushname) => {
    return `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}

exports.playstore = (app_id, title, developer, description, price, free) => {
    return `➸ *Nama*: ${title}\n➸ *ID*: ${app_id}\n➸ *Developer*: ${developer}\n➸ *Gratis*: ${free}\n➸ *Harga*: ${price}\n➸ *Deskripsi*: ${description}`
}

exports.shopee = (nama, harga, terjual, shop_location, description, link_product) => {
    return `➸ *Nama*: ${nama}\n➸ *Harga*: ${harga}\n➸ *Terjual*: ${terjual}\n➸ *Lokasi*: ${shop_location}\n➸ *Link produk*: ${link_product}\n➸ *Deskripsi*: ${description}`
}

