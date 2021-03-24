<div align="center">
<img src="http://piyobot.000webhostapp.com/822161.png" alt="Piyobot" width="400" />

# Piyobot

> Piyobot Adalah Bot Whatsapp Yang Sangat Kontol
> Yang Punya udh pensi wwkw, silahkan chat wa saya jika ingin berkontribusi ke akun github ini
> wa.me/6281414046576
> BACA README GOBLOK BIAR LU TAU BELI APIKEYNYA DIMANA
>

<h3 align="center">Made with ❤️ by</h3>
<p align="center">
  <a href="https://github.com/SlavyanDesu"><img src="https://avatars3.githubusercontent.com/u/28254882?s=400&u=25765902db0b709938966cf4127ac11af5eafb5d&v=4" height="128" width="128" /></a>
  <a href="https://github.com/AlvioAdjiJanuar"><img src="https://avatars2.githubusercontent.com/u/68207798?s=400&u=29439908cd661d11443391cb74f5b07267b71117&v=4" height="128" width="128" /></a>
  <a href="https://github.com/VideFrelan"><img src="https://avatars1.githubusercontent.com/u/76523793?s=400&u=365f732cd3fc09ce75f6556715a00386005db57c&v=4" height="128" width="128" /></a>
</p>

<p align="center">
  <a href="https://github.com/AlvioAdjiJanuar"><img title="Author" src="https://img.shields.io/badge/Author-AlvioAdjiJanuar-darkred.svg?style=for-the-badge&logo=github" /></a>
</p>

<p align="center">
  <a href="https://github.com/IndonesianDev/whatsapp-bot"><img title="Stars" src="https://img.shields.io/github/stars/IndonesianDev/whatsapp-bot?color=black&style=flat-square" /></a>
  <a href="https://github.com/IndonesianDev/whatsapp-bot/network/members"><img title="Forks" src="https://img.shields.io/github/forks/IndonesianDev/whatsapp-bot??color=pink&style=flat-square" /></a>
  <a href="https://github.com/IndonesianDev/whatsapp-bot/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/IndonesianDev/whatsapp-bot??label=watchers&color=blue&style=flat-square" /></a> <br>
  <a href="https://www.npmjs.com/package/@open-wa/wa-automate"><img src="https://img.shields.io/npm/v/@open-wa/wa-automate.svg?color=green" /></a>
  <img src="https://img.shields.io/node/v/@open-wa/wa-automate" />
  <img src="https://img.shields.io/github/repo-size/IndonesianDev/whatsapp-bot" /> <br>
<a href="https://app.fossa.com/projects/git%2Bgithub.com%2FIndonesianDev%2Fwhatsapp-bot?ref=badge_shield" alt="FOSSA Status"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2FIndonesianDev%2Fwhatsapp-bot.svg?type=shield"/></a>
  <a href="https://www.codefactor.io/repository/github/indonesiandev/whatsapp-bot"><img src="https://www.codefactor.io/repository/github/indonesiandev/whatsapp-bot/badge" alt="CodeFactor" /></a>
</p>

<p align="center">
  <a href="https://github.com/IndonesianDev/whatsapp-bot#Requirements">Persyaratan</a> •
  <a href="https://github.com/IndonesianDev/whatsapp-bot#installation">Cara Penginstalan</a> •
  <a href="https://github.com/IndonesianDev/whatsapp-bot#features">Fiturnya</a> •
  <a href="https://github.com/IndonesianDev/whatsapp-bot#thanks-to">Terimakasih Kepada</a> •
  <a href="https://github.com/IndonesianDev/whatsapp-bott#license">lisensi</a>
</p>

<h4 align="center">
  <a href="https://chat.whatsapp.com/KSG5C4SGlT2IpRtFm05owk">Join WA BOT DEV Indonesia!</a>
</h4>
</div>

# Requirements
* [Node.js](https://nodejs.org/en/)
* [Git](https://git-scm.com/downloads)
* [FFmpeg](https://github.com/BtbN/FFmpeg-Builds/releases/download/autobuild-2020-12-08-13-03/ffmpeg-n4.3.1-26-gca55240b8c-win64-gpl-4.3.zip) (for sticker GIF command)
* Any text editor
* [Magisk](https://download.imagemagick.org/ImageMagick/download/binaries/ImageMagick-7.0.10-58-Q16-HDRI-x64-dll.exe) (Buat nuliskanan kiri folio kanan kiri)

# installation
## 📝 Cloning this repo
```bash
> git clone https://github.com/IndonesianDev/whatsapp-bot
> cd whatsapp-bot
```

## ✍️ Edit filenya
Edit value yang diperlukan di `settings/setting.json`.
```json
{
    "limitCount": 10,
    "ownerNumber": "",
    "memberLimit": 10,
    "groupLimit": 50,
    "medialimitCount": "5",
    "prefix": "/",
    "vhtearkey": "Your Apikey In Here",
    "apikeyz": "Your Apikey In Here",
    "lolhuman": "Your Apikey In Here",
}

```

`ownerBot`: your WhatsApp number.  
`prefix`: bot's prefix.  

`vhtearkey`: VHTear API token. Anda bisa mendapatkannya https://api.vhtear.com/ dengan membeli kunci API.
`apikeyz`: Hujan Api token. Anda Bisa Mendapatkannya https://hujanapi.xyz

`lolhuman`: Lolhuman token. Anda bisa Mendapatkannya Di https://lolhuman.herokuapp.com/

Untuk Mendapatkan Apikey nya , daftar akun terlebih dahulu di website tersebut

## 🔍 Menginstal dependensi
```bash
> npm install
```

## 🆗 Menjalankan bot
Regular node:
```bash
> npm start
```

PM2:
```bash
> pm2 start index.js
> pm2 monit
```

PM2 with cron job (restart after 5 hours):
```bash
> pm2 start index.js --cron "* */5 * * *"
> pm2 monit
```

Setelah itu pindai kode QR menggunakan WhatsApp Anda di ponsel Anda!

# Features


|     Sticker Maker     | Availability |
| :-------------------: | :----------: |
| Send/reply image      |      ✔️      |
| Send/reply GIF        |      ✔️      |
| Send/reply MP4        |      ✔️      |
| Text to sticker       |      ✔️      |
| Text to sticker GIF   |      ✔️      |
| Take Sticker          |      ✔️      |
| Add  Sticker          |      ✔️      |
| Get  Sticker          |      ✔️      |
| Del  Sticker          |      ✔️      |
| List Sticker          |      ✔️      |
| Sticker to image      |      ✔️      |

|     Money Feature     | Availability |
| :-------------------: | :----------: |
| Money Check           |      ✔️      |
| Buy Limit             |      ✔️      |
| Transfer Money        |     Soon      |

|      Downloader     | Availability |
| :-----------------: | :----------: |
| Facebook video      |      ✔️      |
| YouTube audio/video |      ✔️      |
| Joox                |      ✔️      |
| TikTok              |      ✔️      |
| TikTok NoWm         |      ✔️      |
| Twitter             |      ✔️      |
| Instagram post      |      ✔️      |
| Instagram story     |      ✔️      |
| Layarkaca21 film    |      ✔️      |

|        Other        | Availability |
| :-----------------: | :----------: |
| Say                 |      ✔️      |
| Lyric finder        |      ✔️      |
| Shortlink maker     |      ✔️      |
| Wikipedia           |      ✔️      |
| KBBI search         |      ✔️      |
| IG stalk            |      ✔️      |
| SpekHp              |      ✔️      |
| Food receipt finder |      ✔️      |
| TTS                 |      ✔️      |
| AFK                 |      ✔️      |
| Distance            |      ✔️      |
| Find sticker        |      ✔️      |
| List surah          |      ✔️      |
| Math                |      ✔️      |
| Surah               |      ✔️      |
| Random contact      |      ✔️      |
| Play YouTube        |      ✔️      |
| Tafsir Al-Qur'an    |      ✔️      |
| LK21                |      ✔️      |
| Reminder            |      ✔️      |
| Image to URL        |      ✔️      |
| Jadwal sholat       |      ✔️      |
| To Mp3              |      ✔️      |
| Bass                |      ✔️      |
| FishEye             |      ✔️      |
| Line sticker latest |      ✔️      |
| Quiziz Hack         |      ✔️      |
| Cek ongkir          |      ✔️      |

|          Fun          | Availability |
| :-------------------: | :----------: |
| Send                  |      ✔️      |
| Mutualan              |      ✔️      |
| Harta tahta maker     |      ✔️      |
| Zodiac                |      ✔️      |
| Write on paper        |      ✔️      |
| Missing person maker  |      ✔️      |
| Valentine frame maker |      ✔️      |
| Glitch text maker     |      ✔️      |
| SimSimi               |      ✔️      |
| Blackpink logo maker  |      ✔️      |
| Pornhub logo maker    |      ✔️      |
| Galaxy text maker     |      ✔️      |
| TikTok asupan         |      ✔️      |
| PH comment maker      |      ✔️      |
| Triggered effect      |      ✔️      |
| Deep fry effect       |      ✔️      |
| Kiss someone          |      ✔️      |
| 3D Text               |      ✔️      |
| Freefire logo         |      ✔️      |
| Freefire banner       |      ✔️      |

|      WIBU AREA     | Availability |
| :----------------: | :----------: |
| Random neko girl   |      ✔️      |
| Random wallpaper   |      ✔️      |
| Kusonime scrapper  |      ✔️      |
| Komiku scrapper    |      ✔️      |
| Anime tracer       |      ✔️      |
| Random waifu       |      ✔️      |
| Loli Video         |      ✔️      |

|        Bot       | Availability |
| :--------------: | :----------: |
| Bot usage status |      ✔️      |
| Blocked list     |      ✔️      |
| Ping             |      ✔️      |
| Delete message   |      ✔️      |
| Report bug       |      ✔️      |

|        Owner       | Availability |
| :----------------: | :----------: |
| Broadcast          |      ✔️      |
| Clear all messages |      ✔️      |
| Leave all groups   |      ✔️      |
| Ban                |      ✔️      |
| Add premium user   |      ✔️      |

|    Moderation    | Availability |
| :--------------: | :----------: |
| Add              |      ✔️      |
| Kick             |      ✔️      |
| Promote          |      ✔️      |
| Demote           |      ✔️      |
| Leave bot        |      ✔️      |
| Tag All          |      ✔️      |
| Set Icon Grup    |      ✔️      |
| Anti-group link  |      ✔️      |
| Toogle welcome   |      ✔️      |
| Auto-sticker     |      ✔️      |
| Mute group       |      ✔️      |

|        18+         | Availability |
| :----------------: | :----------: |
| Fetish             |      ✔️      |
| Waifu NSFW         |      ✔️      |
| Waifu 18+          |      ✔️      |
| Xvideos            |      ✔️      |
| Xvidl              |      ✔️      |
| Xnxx               |      ✔️      |
| Xnxxdl             |      ✔️      |
| nHentai downloader |      ✔️      |


# Thanks to
* [`open-wa/wa-automate-nodejs`](https://github.com/open-wa/wa-automate-nodejs)
* [`AlvioAdjiJanuar`](https://github.com/AlvioAdjiJanuar)
* [`SlavyanDesu`](https://github.com/SlavyanDesu/BocchiBot)
* [`VideFrelan`](https://github.com/VideFrelan)
* [`dxxoo`](https://github.com/dxxoo)
