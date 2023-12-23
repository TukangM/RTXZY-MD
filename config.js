global.owner = ['6282284960188']  
global.mods = ['6282284960188', '6283838444729'] 
global.prems = ['6282284960188']
global.nameowner = 'ya lah penyuka furry'
global.numberowner = '6282284960188' 
global.mail = 'gakadaemailgwbang@gmail.com' 
global.gc = 'https://github.com/TukangM'
global.instagram = 'https://instagram.com/sayaaep_idk'
global.wm = '© Copyright rights reversed TukangM / AEP'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Ashley / Furry bot'
global.author = 'Clue... Owner Penyuka Furry sejak 15 oktober 2022. OwO. EwE, UwU'
global.maxwarn = '3' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.btc = 'TukangM' 
//Daftar terlebih dahulu https://api.botcahx.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = 'YOUR_APIKEY_HERE'
//Daftar https://api.betabotz.eu.org 

global.APIs = {   
  btc: 'https://api.botcahx.eu.org'
}
global.APIKeys = { 
  'https://api.botcahx.eu.org': 'APIKEY' 
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
