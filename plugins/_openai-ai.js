var fetch = require('node-fetch');
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `
try {
  await m.reply(wait)
  var apii = await fetch(`https://aemt.me/v2/gpt4?text=${text}`)
  var res = await apii.json()
  await m.reply(res.result)
} catch (err) {
  console.error(err)
  throw "Terjadi kesalahan dalam menjawab pertanyaan"
}
}
handler.command = handler.help = ['ai','openai','chatgpt'];
handler.tags = ['tools'];
handler.premium = false
module.exports = handler;
