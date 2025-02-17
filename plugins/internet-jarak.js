const fetch = require('node-fetch');
let handler = async (m, { 
 conn,
 text,
 usedPrefix,
 command
 }) => {
	var [from, to] = text.split`|`
	if (!(from && to)) throw `Ex: ${usedPrefix + command} jakarta|bandung`
	try {
	let data = await fetch(`https://aemt.me/jarak?dari=${from}&ke=${to}`)
	let json = await data.json()
	await conn.sendFile(m.chat, json.message.data, 'jarak.png', json.message.desc, m)
	  } catch (error) {
    throw `🚩 *Jarak Tidak Ditemukan*`
    }
}
handler.command = handler.help = ['jarak']
handler.tags = ['internet']
handler.limit = true
module.exports = handler
