global.owner = ['6282284960188']  
global.mods = ['6282284960188'] 
global.prems = ['6282284960188']
global.nameowner = 'ya lah penyuka furry '
global.numberowner = '6282284960188' 
global.mail = 'example@gmail.com' 
global.gc = 'https://github.com/TukangM'
global.instagram = 'https://instagram.com/sayaaep_idk'
global.wm = '© Mas Linus Sebastian'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'Bot WhatsApp'

//INI WAJIB DI ISI!//
global.btc = 'Z7zUmSAM' 
//Daftar terlebih dahulu https://api.botcahx.live

global.lann = 'vWfIcofq'
//Daftar terlebih dahulu https://api.betabotz.org 

global.APIs = {   
  btc: 'https://api.botcahx.live'
}
global.APIKeys = { 
  'https://api.botcahx.live': 'Apikey' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
