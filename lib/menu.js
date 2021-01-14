const fs = require('fs-extra')
const {prefix} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.
Created By : https://github.com/AlvioAdjiJanuar
Created By : https://github.com/AlvioAdjiJanuar
*/

exports.textTnC = () => {
    return `
Whatsapp : wa.me/62895336148600
Author? : Alvio Adji Januar
Instagram: https://instagram.com/alvio151
Github: https://github.com/AlvioAdjiJanuar

Best regards, Alvio.`
}

const sosmed = 'Link Account Instagram anda'

exports.textmenupenting = (pushname) => {
    return `
Hi Kak ${pushname}👋️, selamatt datang di Piyobot WhatsApp pintar yang siap membantumu.
Follow Ig Admin Untuk Menunjukan Support Terhadap Bot ini
${sosmed}
Berikut fitur yang dapat di gunakan pada bot ini✨

List menu penting piyobot:

🚀 *${prefix}addbacot*
Untuk melihat bacotan member piyobot
Usage: ketik */addbacot*

🚀 *${prefix}bacot*
Untuk melihat bacotan member piyobot
Usage: ketik */bacot*

🚀 *${prefix}listbacot*
Untuk melihat list bacotan member piyobot
Usage: ketik */listbacot*

🚀 *${prefix}biodatabotcewe*
Mendapatkan biodata bot cewe :)
Usage: ketik */biodatabotcewe*

1. *${prefix}sticker*
Untuk Merubah Gambar Menjadi Sticker
Usage: Kirim gambar dengan caption *${prefix}sticker* atau reply gambar dengan caption *${prefix}sticker*.
Kalo mau tanpa background , kirim gambar dengan caption /sticker nobg

2. *${prefix}donasi*
Untuk mendonasikan kepada alvio ganteng
Usage: Ketik */donasi*.

3. *${prefix}botstat*
Untuk mengecek status bot
Usage: Ketik */botstat*

4. *${prefix}ownerbot*
mengecek orang ganteng
Usage: ketik */ownerbot*

5. *${prefix}tts*
Untuk mengubah teks menjadi suara google
Usage: ketik */tts* id teksnya

6. *${prefix}translate*❌
Untuk mentranslate kan teks 

7. *${prefix}resi*
Untuk mengecek resi pesanan barang online
Usage: Ketik */resi* nomoresi

10. *${prefix}join*
Untuk Bot Join Ke Grup Anda , Tapi chat owner dulu okey
Usage: ketik */join* linkgrupnya


11. *${prefix}stimg*
Untuk merubah sticker ke gambar
Usage: cari sticker yang mau diubah dan reply sticker dengan caption */stimg*

12. *${prefix}hilih*
Untuk Piyo bot merubah kata hilih
Usage: Ketik */hilih* teksnya

13. *${prefix}ttp*
Untuk Piyo bot mengirim sticker text
usage: Ketik */ttp* teksnya
contoh: */ttp* |alvio

14. *${prefix}ttp2*
Untuk Piyo bot mengirim sticker text
usage: Ketik */ttp2* teksnya
contoh: */ttp2* |alvio

15. *${prefix}getpic*
Untuk Piyo bot maling gambar orang
usage: Ketik */getpic* tag orangnya atau pake nomornya
contoh: */getpic* @tagorangdigrup
atau */getpic* isi nomornya
contoh: */getpic* 628888888888888

16. *${prefix}ganteng*
Untuk melihat siapa yang paling ganteng di grup
Usage: /ganteng

17. *${prefix}apakah*
Menanyakan sesuatu ke piyobot
Usage: /apakah aku ganteng?

18. *${prefix}igstory*
Download video/foto di story ig
Usage: /igstory usernamenya

Selamat menikmati✨
_made with_❤️ @piyobot`

}

exports.textsongmenu = (pushname) => {
   return `
Hi Kak ${pushname}👋️, selamat datang di Piyobot WhatsApp pintar yang siap membantumu.
Follow Ig Admin Untuk Menunjukan Support Terhadap Bot ini
${sosmed}
Berikut fitur yang dapat di gunakan pada bot ini✨

List lagu piyobot:

1. *${prefix}lagu1*
JUDUL LAGU : DJ JUJUR SA SU BILANG
Usage: ketik */lagu1*

2. *${prefix}lagu2*
JUDUL LAGU : DJ BENYANYI BENYANYI
Usage: ketik */lagu2*

3. *${prefix}lagu3*
JUDUL LAGU : DJ SABATA SABARANG TADA
Usage: ketik */lagu3*

4. *${prefix}lagu4*
JUDUL LAGU : CUEK RIZKY FEBIAN
Usage: ketik */lagu4*


Selamat menikmati✨
_made with_❤️ @piyobot`

}

exports.textmenufree = (pushname, updater) => {
 return `
Hi Kak ${pushname}👋️, selamat datang di Piyobot WhatsApp pintar yang siap membantumu.
Follow Ig Admin Untuk Menunjukan Support Terhadap Bot ini
${sosmed}
Berikut menu yang dapat di gunakan pada bot ini✨

*Ketik /chat* 
*Untuk Mengobrol dengan piyobot*
*Jika ingin membuat sticker atau menu lainnya silahkan di offkan piyobot chatnya*

List menu:
1. *${prefix}menupenting*
Menampilkan menu penting di piyobot
Usage: ketik */menupenting*

2. *${prefix}menuhiburan*
Menampilkan menu hiburan di piyobot
Usage: ketik */menuhiburan*

3. *${prefix}mentol*
Menampilkan menu tools & alat di piyobot
Usage: ketik */mentol*

4. *${prefix}menutobat*
Menampilkan menu untuk tobat
Usage: ketik */menutobat*

5. *${prefix}wibuarea*
Menampilkan menu wibu & kpop 
Usage: ketik */wibuarea*

6. *${prefix}nulis*
Menampilan menu nulis
Usage: ketik */nulis*

7. *${prefix}lagu*
Menampilan album lagu piyobot
Usage: ketik */lagu*

8. *${prefix}ptl*
Menampilkan video penyengar timeline
Usage: ketik */ptl*

9. *${prefix}bugreport*
Untuk melaporkan bug / masalah ke owner
Usage: ketik /bugreport masalahnya

10. *${prefix}citacita*
Untuk mendapatkan cita cita dari lord
Usage: /citacita

🚀 Jangan Lupa donasi kepada bot ya :( Buat bayar servernya
Untuk donasi seikhlasnya kok :(
Pembayaran bisa via gopay dana ovo pulsa
Ketik /donasi 
Terima kasih :)


Selamat menikmati✨
_made with_❤️ @piyobot`

}

exports.textmenu = (pushname, premi , _registered , coloo , tod) => {
    return `
Hi Kak ${pushname}👋️
🐻‍❄️RoleAnda = ${premi}🐻‍❄️

Piyobot terdapat 3 menu sekarang

🐳 *${prefix}𝚖𝚎𝚗𝚞𝚏𝚛𝚎𝚎* 🐳
🐳 *${prefix}𝚖𝚎𝚗𝚞𝚙𝚛𝚎𝚖𝚒𝚞𝚖* 🐳
🐳 *${prefix}𝚖𝚎𝚗𝚞𝚓𝚋* 🐳

Jam: *${tod}*
Total userPiyo : ${coloo.length}

Jika tulisan tidak keliatan kek kotak kotak 
Ketik /help

Untuk melihat Waktu Piyobot Aktif
Silahkan ketik *${prefix}waktu*

Untuk melihat update fitur terbaru
Silahkan ketik *${prefix}𝙪𝙥𝙙𝙖𝙩𝙚*
`
}

exports.texthelp = (pushname, premiu , _registered , contol) => {
    return `
Hi Kak ${pushname}👋️
🐻‍❄️RoleAnda = ${premiu}🐻‍❄️

Piyobot terdapat 3 menu sekarang

🐳 *${prefix}menufree* 🐳
🐳 *${prefix}menupremium* 🐳
🐳 *${prefix}𝚖𝚎𝚗𝚞𝚓𝚋* 🐳

Total userSend : ${_registered.length}
Total userPiyo : ${contol.length}

Untuk melihat update fitur terbaru
Silahkan ketik *${prefix}update*
`
}

exports.textmenuhiburan = (pushname) => {
 return `
Hi Kak ${pushname}👋️, selamat datang di Piyobot WhatsApp pintar yang siap membantumu.
Follow Ig Admin Untuk Menunjukan Support Terhadap Bot ini
${sosmed}
Berikut fitur yang dapat di gunakan pada bot ini✨

List menu hiburan piyobot:
1. *${prefix}stickergif*
Untuk merubah gif menjadi Sticker bergerak
Usage: Kirim video dengan caption */stickergif*

2. *${prefix}stickergiphy*
Untuk merubah gif dari giphy menjadi sticker bergerak
Usage: Ketik */stickergiphy* linknya
contoh: */stickergiphy* giphy.com/fawfat524

3. *${prefix}slidingtext*
Untuk membuat gambar ada textnya
Aliases: -
Usage: Silahkan ketik /slidingtext textnya

4. *${prefix}quotemaker*
Untuk membuat quotes
Usage: ketik */quotemaker* |isi quote|author|theme
contoh: ${prefix}quotemaker |aku sayang kamu|-aruga|random untuk theme nya pakai random ya kak

5. *${prefix}artinama*
Untuk mengetahui artinama seseorang
Usage: ketik */artinama* namanya
contoh: */artinama* nadhira

6. *${prefix}cekjodoh*
Untuk mengecek jodoh melalui nama
Usage: ${prefix}cekjodoh nama pasangan
contoh: ${prefix}cekjodoh aku kamu
hanya bisa pakai nama panggilan (satu kata)

7. *${prefix}cuaca*
Untuk melihat cuaca pada suatu daerah
Usage: ketik */cuaca* tempatnya
contoh: /cuaca bogor

8. *${prefix}chord*
Untuk mencari lirik dan chord dari sebuah lagu
Usage: ketik */chord* judul lagu
contoh: /chord cuek

9. *${prefix}lirik*
Untuk mencari lirik dari sebuah lagu
Usage: ketik */lirik* judul lagu
contoh: /lirik cuek


10 *${prefix}ss*
Membuat bot men-screenshot sebuah web
Usage: ketik */ss* asu.com

11 *${prefix}cooltext*❌
Untuk mendapatkan teks yang keren

12 *${prefix}cekzodiak*
Untuk mengecek zodiak lu
Usage: ketik */cekzodiak* nama anda
contoh: /cekzodiak alvio

13 *${prefix}motivasi*
Untuk mendapatkan motivasi dari alvio gans
Usage: ketik */motivasi*

14 *${prefix}howgay*
Untuk cek seberapa gay lu
Usage: ketik */howgay*

15 *${prefix}ptl*
Untuk mendapatkan penyegar time line 
Usage: ketik */ptl*

16 *${prefix}hilang*
Membuat gambar missing person.
Aliases: -
Usage: Kirim gambar dengan caption *${prefix}hilang* teks_atas | teks_tengah | teks_bawah atau reply gambar dengan caption *${prefix}missing* teks_atas | teks_tengah | teks_bawah.

17. *${prefix}valentine*
Membuat gambar valentine.
Aliases: -
Usage: Kirim gambar pasangan dengan caption *${prefix}valentine* nama | pasangan atau reply gambar pasangan dengan caption *${prefix}valentine* nama | pasangan.


19. *${prefix}caklontong*
Bermain dengan cak lontong
Aliases: -

20. *${prefix}family100*
Bermain Family100 bersama team
Aliases: -

21. *${prefix}tebakgambar*
Bermain tebak gambar 
Aliases: -

22. *${prefix}heroml*
Gambar hero ml , ketik /heroml namaheronya
Aliases: -

23. *${prefix}koin*
Bermain koin berdua dengan musuh anda , musuh anda juga harus ketik /koin
Aliases: -


25. *${prefix}sandwriting*
gambar pantai yang bisa di isi text oleh kalian
Aliases: -
Usage: Silahkan ketik /sandwriting namalo


26. *${prefix}thunder*
gambar thunder yang bisa di isi text oleh kalian
Aliases: -
Usage: Silahkan ketik /thunder namalo


27. *${prefix}blackpink*
gambar logo blackpink yang bisa di isi text oleh kalian
Aliases: -
Usage: Silahkan ketik /blackpink namalo

28. *${prefix}slightning*
sticker lightning yang bisa di isi text oleh kalian
Aliases: -
Usage: Silahkan kirim gambar dengan /slightning

29. *${prefix}sfire*
sticker fire yang bisa di isi text oleh kalian
Aliases: -
Usage: Silahkan kirim gambar dengan /sfire

30. *${prefix}findsticker*
Untuk mendapatkan sticker dengan namanya
Aliases: - 
Usage: /findsticker pentol

31. *${prefix}linesticker*
Untuk mendapatkan sticker dari line dengan url 
Aliases: - 
Usage: /linesticker linknya

32. *${prefix}stikerteks*
Untuk mendapatkan stiker teks 
Aliases: -
Usage: /stikerteks teksnya

33. *${prefix}trumptweet*
Untuk mendapatkan gambaran tweet trump dengan text kalian
Aliases: -
Usage: /trumptweet teksnya

34. *${prefix}phcomment*
Untuk mendapatkan gambaran pornhub dengan comment kalian
Aliases: - 
Usage: Kirim gambar dengan caption /phcomment username | teksnya

35. *${prefix}spamcall*
Untuk spamcall
Usage: ketik */spamcall* nomornya 
contoh: /spamcall 888888888888
des: tidak menggunakan +62/0 langsung 8

36. *${prefix}emojisticker*
Untuk merubah emoji ke sticker
Usage /emojisticker emotnya

37. *${prefix}puisirandom*
Untuk mendapatkan gambar puisi
Usage: /puisirandom

38. *${prefix}cekongkir*
Untuk melihat harga ongkir dari daerah barang ke daerah kalian
Usage: /cekong(kir bogor|bekasi

39. *${prefix}lk21*
Untuk mendapatkan link download film :) kalo gua pake wifi mah udh bisa auto download, lah gua pake kuota ngentot
Usage: /lk21 judulnya

40. *${prefix}reminder*
Pengingat. 
*s* - detik
*m* - menit
*h* - jam
*d* - hari
Aliases: -
Usage: *${prefix}reminder* 10s | pesan_pengingat

41. *${prefix}joker*
Untuk menambahkan teks di logo joker
Usage: /joker teksnya

42. *${prefix}katasenja*
Mendapatkan kata senja
Usage: /katasenja

43. *${prefix}fiersa*
Mendapatkan kata dari Fiersa-Besari
pakai -
Usage: /fiersa

44. *${prefix}cersex*
Mendapatkan cersex
Usage: /cersex

45. *${prefix}artimimpi*
Untuk mendapatkan artimimpi kamu
Usage: ketik /artimimpi dikejar palkon

Selamat menikmati✨
_made with_❤️ @piyobot`
}

exports.textmenutobat = (pushname) => {
 return `
Hi Kak ${pushname}👋️, selamat datang di Piyobot WhatsApp pintar yang siap membantumu.
Follow Ig Admin Untuk Menunjukan Support Terhadap Bot ini
${sosmed}
Berikut fitur yang dapat di gunakan pada bot ini✨

List menu tobat di piyobot:
1. *${prefix}infosurah*
Untuk mendapatkan infosurah

2. *${prefix}surah*
Untuk Menampilkan ayat Al-Quran tertentu beserta terjemahannya dalam bahasa Indonesia

3. *${prefix}tafsir*
Untuk Menampilkan ayat Al-Quran tertentu beserta terjemahan dan tafsirnya dalam bahasa Indonesia

4. *${prefix}ALaudio*
Untuk Menampilkan tautan dari audio surah tertentu

5. *${prefix}js*
Untuk Mendapatkan Jadwal Shalat Di Daerah Kalian Masing masing

Selamat menikmati✨
_made with_❤️ @piyobot`
}

exports.textmentol = (pushname) => {
 return `
Hi Kak ${pushname}👋️, selamat datang di Piyobot WhatsApp pintar yang siap membantumu.
Follow Ig Admin Untuk Menunjukan Support Terhadap Bot ini
${sosmed}
Berikut fitur yang dapat di gunakan pada bot ini✨

List menu tools&alat di piyobot:
1. *${prefix}images*
Untuk mencari gambar di pinterest
Usage: ketik */images* apayangmaudicari
contoh: /images kucing

2. *${prefix}sreddit*
Untuk mencari gambar di sub reddit
Usage: ketik */images* apayangmaudicari
contoh: /images kucing

3. *${prefix}resep*
Untuk mencari resep makanan
Usage: ketik */resep* makanannya pake - tengahnya
contoh: /resep ayam-bakar

4. *${prefix}igstalk*
Untuk men-stalk akun instagram seseorang
Usage: ketik */igstalk* namaignya
contoh: /igstalk alvio151

5. *${prefix}wiki*
Untuk mencari suatu kata dari wikipedia
Usage: ketik */wiki* apa yang mau dicari
contoh: /wiki lampu

6. *${prefix}fakta*
Untuk Mencari Fakta Sesungguhnya
Usage: ketik */fakta*

7. *${prefix}pantun*
Untuk Menapatkan Pantun buat pacar lu/temen lu
Usage: ketik */pantun*

8. *${prefix}katabijak*
Untuk membuat lu sebagai orang bijak
Usage: ketik */katabijak*

9. *${prefix}quote*
untuk mendapatkan quotes random
Usage: ketik */quote*

10. *${prefix}covidindo*
Untuk mengecek berapa orang yang terkena covid 19 di indonesia
Usage: ketik */covidindo*

11. *${prefix}ceklokasi*
Untuk mengecek lokasi, misalnya lokasi mantan lu
Usage: ketik */ceklokasi* tempatnya
contoh: /ceklokasi bogor

12. *${prefix}shortlink*
Untuk membuat shortlink
Usage: ketik */shortlink*

13. *${prefix}bapakfont*
Untuk merubah font
Usage: ketik */bapakfont* teksnya
contoh: /bapakfont halo semua nama gua ewing

14. *${prefix}cerpen*
Untuk mendapatkan cerpen
Usage: ketik */cerpen*

15. *${prefix}playbutton*
Untuk mendapatkan gambar yang berisi teks anda
Usage: /playbutton nama anda

16. *${prefix}maps*
Untuk mendapatkan gambar lokasi anda 
Usage: /maps kota anda

16. *${prefix}puisi*
Untuk mendapatkan puisi
Usage: ketik */puisi*

17. *${prefix}jadian*
Untuk mendapatkan siapa yang jadian
Usage: ketik */jadian*

18. *${prefix}distance*
Untuk mendapatkan informasi jarak dari kota asal ke kota tujuan
Usage: ketik */distance*
contoh: /distance bogor|jakarta

18. *${prefix}spekhp*
Untuk mendapatkan informasi hp
Usage: ketik */hp*
contoh: /hp vivo y91c

19. *${prefix}shopee*
Untuk mendapatkan informasi barang shopee
Usage: ketik */shopee* namabarang | jumlahbarang
contoh: /shopee kondom|1

20. *${prefix}playstore*
Untuk mendapatkan informasi apk playstore
Usage: ketik */playstore* namaapk
contoh: /playstore mobile legends

21. *${prefix}gmlogo*
Untuk Membuat logo gaming ges ya
Usage: ketik /gmlogo namalo

22. *${prefix}mlmaker*
Untuk membuat gambar dengan teks anda
Usage: ketik /mlmaker miya | namalo

23. *${prefix}buatgrup*
Untuk membuat grup dengan piyobot
Usage: ketik /buatgrup namanya

24. *${prefix}ffmaker*
Untuk membuat gambar dengan teks anda
list hero ? ketik /listhero
Usage: ketik /ffmaker hero | nama kalean
Contoh: /ffmaker alok | piyo

25. *${prefix}bannerff*
Untuk membuat gambar banner dengan teks anda
Usage: ketik /bannerff title | nama kalean
Contoh: /bannerff alvio | piyo

26. *${prefix}tiktokstalk*
Untuk menstalk akun tiktok 
Usage: ketik /tiktokstalk @usernamanya
contoh: /tiktokstalk @piyobot

27. *${prefix}jadwalbola*
Untuk mendapatkan jadwal bola 
Usage: ketik /jadwalbola

28. *${prefix}galaxytext*
Untuk membuat text galaxy
Usage: ketik /galaxytext teksnya
Contoh: /galaxytext piyobot

29. *${prefix}glowtext*
Untuk membuat glowtext
Usage: ketik /glowtext teksnya
Contoh: /glowtext piyobot

30. *${prefix}infomobil*
Untuk mendapatkan informasi dari mobil tersebut
Usage: ketik /infomobil mobilnya
Contoh: /infomobil avanza

31. */addpoll*
Fitur ini khusus grup

32. */ninja*
Untuk membuat gambaar ninja dengan text
Usage: ketik /ninja |teks1|teks2
Contoh: /ninja |piyo|bot

33. */wolf*
Untun membuat gambar wolf dengan text 
Usage: ketik /wolf |teks1|teks2
Contoh: /wolf |piyo|bot

33. */wolf2*
Untun membuat gambar wolf dengan text 
Usage: ketik /wolf2 |teks1|teks2
Contoh: /wolf2 |piyo|bot





Selamat menikmati✨
_made with_❤️ @piyobot`
}

exports.textwibuarea = (pushname) => {
 return `
Hi Kak ${pushname}👋️, selamat datang di Piyobot WhatsApp pintar yang siap membantumu.
Follow Ig Admin Untuk Menunjukan Support Terhadap Bot ini
${sosmed}
Berikut fitur yang dapat di gunakan pada bot ini✨

List menu wibuarea & kpop di piyobot:
1. *${prefix}randomhentai*
Untuk mendapatkan random hentai
Usage: ketik /randomhentai

2. *${prefix}whatanime*
Untuk Mendapatkan Scene Dari Gambar tersebut
Usage: kirim gambar dengan caption */whatanime*

3. *${prefix}anime*
Untuk Mendapatkan Gambar Anime secara Random
Usage: ketik */anime* waifu,loli,husbu
contoh: /anime waifu

4. *${prefix}kpop*
Untuk Mendapatkan Gambar kpop secara Random
Usage: ketik */kpop* bts,blackpink,exo
satu aja 
contoh /kpop exo

5. *${prefix}memes*
Untuk Mendapatkan Gambar memes secara Random

6. *${prefix}Wallpaperanime*
Untuk Mendapatkan Wallpaper anime random
Usage: ketik */wallpaperanime*

7. *${prefix}Wallpaperanime2*
Untuk Mendapatkan Wallpaper anime random
Usage: ketik */wallpaperanime2*

8. *${prefix}nhder*
Untuk mendapatkan sebuah hentai menggunakan kode nuklir
Usage: ketik */nhder kodenya*

9. *${prefix}fetish*
Untuk mendapatkan fetish 
Usage: ketik */fetish querynya*
Contoh: */fetish boobs*
daftar daftar fetish , silahkan ketik /infofetish

10. *${prefix}blowjob*
Untuk mendapatkan anime blowjob
Usage: ketik */blowjob*

11. *${prefix}neko18*
Untuk mendapatkan gambar neko18
Usage: ketik */neko18*

12. *${prefix}gifhentai*
Untuk mendapatkan gif hentai
Usage: ketik */gifhentai*

13. *${prefix}pussy*
Untuk mendapatkan gambar pussy
Usage: ketik */pussy*

14. *${prefix}rhentai*
Untuk mendapatkan random henyai 
Usage: ketik */rhentai*

15. *${prefix}loli*
Untuk mendapatkan random loli
Usage: ketik */loli*

16. *${prefix}shota*
Untuk mendapatkan ranndom shota
Usage: ketik */shota*

Selamat menikmati✨
_made with_❤️ @piyobot
`
}

exports.textmenunulis = (pushname) => {
    return `
Hi Kak ${pushname}👋️, selamat datang di Piyobot WhatsApp pintar yang siap membantumu.
Follow Ig Admin Untuk Menunjukan Support Terhadap Bot ini
${sosmed}

*▸ Menu Bot Nulis*
a. */nulishd teks* = nulis di buku tulis hd
Selamat menikmati✨
_made with_❤️ @piyobot

`
}

exports.textmenupremium = (pushname) => {
    return `
Hi Kak ${pushname}👋️, selamat datang di Piyobot WhatsApp pintar yang siap membantumu.
Follow Ig Admin Untuk Menunjukan Support Terhadap Bot ini
${sosmed}
https://www.instagram.com/akmal_jr24

Menu premium : 

1. *${prefix}facebook*
Untuk mendownload gambar atau video dari facebook
Usage: *${prefix}facebook* video_link

2. *${prefix}ytmp3*
Untuk mendownload lagu dari youtube
Usage: *${prefix}ytmp3* link

3. *${prefix}ytmp4*
Untuk mendownload video dari youtube
Usage: *${prefix}ytmp4* link

4. *${prefix}instagram*
Untuk mendownload video/gambar di instagram
Usage: *${prefix}instagram* link

5. *${prefix}tiktok*
Untuk Mendownload video dari tiktok
Usage: *${prefix}tiktok* link

6. *${prefix}indohot* 
Dapetin video indohot

7. *${prefix}bokep*
Dapetin link video bokep  

8. *${prefix}pornhub*
gambar logo pornhub yang bisa di isi text oleh kalian
Aliases: -
Usage: Silahkan ketik /pornhub namalo|sampingnya

9. *${prefix}glitext*
gambar yang bisa di isi text glitch oleh kalian
Aliases: -
Usage: Silahkan ketik /glitext namalo | pasanganlo atau siapalo
Des: harus dilongkap ya namalo | pasanganlo

10. *${prefix}hartatahta*
Membuat hartatahta.
Aliases: -
Usage : Silahkan ketik /hartatahta namalo

11. *${prefix}joox*
Mendownload lagu dari joox dengan judulnya saja
Aliases: -
Usage: Silahkan ketik /play judul lagunya

12. *${prefix}brainly*
mendapatkan jawaban dari brainly
Aliases: -
Usage: Silahkan ketik /brainly soalnya jumlahjawabannya
contoh: /brainly penemu lampu .2

13. *${prefix}play2*
Mendapatkan video dari youtube dengan judul saja
Aliases: -
Usage: ketik /play2 judulnya
contoh: /play2 lathi

14. *${prefix}tiktoknowm*
Mendapatkan video tiktok tidak berlogo tiktok dengan link saja
Aliases: -
Usage: ketik /tiktoknowm linknya
Contoh: /tiktoknowm vt.tiktok.com/piyogans

15. *${prefix}twitter*
Mendapatkan video twitter dengan link saja
Aliases: -
Usage: ketik /twitter linknya

16. *${prefix}play*
Mendownload lagu dari youtube dengan judulnya saja
Aliases: -
Usage: Silahkan ketik /play judul lagunya


Untuk mendapatkan apk xnxx
Ketik ${prefix}xnxxapp

Untuk mendapatkan apk Nekopoi 
Ketik ${prefix}nekopoiapp


Selamat menikmati✨
_made with_❤️ @piyobot

`
}
exports.textownermenu = (pushname) => {
 return `
Hi Kak ${pushname}👋️, selamat datang di Piyobot WhatsApp pintar yang siap membantumu.
Follow Ig Admin Untuk Menunjukan Support Terhadap Bot ini
${sosmed}
Berikut fitur yang dapat di gunakan pada bot ini✨

Tentang Bot:

1. *${prefix}tnc*
Untuk mendapatkan info bot


2. *${prefix}join*
membuat bot join ke grupmu tapi ada syaratnya oakwowkw

Owner Bot:

1. *${prefix}ban* - banned
fitur owner

2. *${prefix}bc* - promosi
fitur owner

3. *${prefix}leaveall* - keluar semua grup
fitur owner

4. *${prefix}clearall* - hapus semua chat
fitur owner

Selamat menikmati✨
_made with_❤️ @piyobot
`
}

exports.textAdmin = () => {
    return `
⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah fitur admin grup yang ada pada ❣ *PiyoBot* ❣!

🐼 *${prefix}add*
🐼 *${prefix}kick* @tag
🐼 *${prefix}promote* @tag
🐼 *${prefix}mutegrup* 
🐼 *${prefix}setprofile* 
🐼 *${prefix}demote* @tag
🐼 *${prefix}tagall*
🐼 *${prefix}del*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

⚠ [ *Owner Group Only* ] ⚠
Berikut adalah fitur owner grup yang ada pada ❣ *PiyoBot* ❣!
🐼 *${prefix}kickall*
*Owner Group adalah pembuat grup.*
`
}


exports.textRules = (pushname) => {
    return `
-----[ THE RULES ]-----
1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*
2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*
3. Jangan mengeksploitasi bot.
Sanksi: *PERMANENT BLOCK*
Jika sudah dipahamin rules-nya, silakan ketik */menu* untuk memulai!
Source code oleh:
wa.me/62895336148600 (Piyo)
Untuk premium silahkan dibeli :)
    `
}

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:

Kirim dana seikhlasnya isi pulsa ke nomor 0895336148600

Doakan agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi

Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

Terimakasih. -Piyo`
}

exports.textNsfw = () => {
    return `
-----[ NSFW ]-----
1. */lewds* (PREMIUM ONLY)
Mengirim gambar anime lewd.
Aliases: *lewd*
Usage: */lewds*
2. */multilewds*
Mengirim up to 5 anime lewd pics. (PREMIUM ONLY)
Aliases: *multilewds multilewd mlewd mlewds*
Usage: 	*/multilewds*
3. */nh*  (PREMIUM ONLY)
Mengirim info doujinshi dari nHentai.
Aliases: -
Usage: *!nh* <kode>
4. */nhdl*  (PREMIUM ONLY)
Mendownload doujin dari nHentai sebagai file PDF. (PREMIUM ONLY)
Aliases: -
Usage: */nhdl* <kode>
6. */multifetish*  (PREMIUM ONLY)
Mengirim up to 5 fetish pics. (PREMIUM ONLY)
Aliases: *mfetish*
Usage: */multifetish* <armpits/feets/thighs/ass/boobs/belly/sideboobs/ahegao>
    `
}