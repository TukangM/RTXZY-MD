let fetch = require('node-fetch')

let handler = async (m, { conn, command }) => {
    let buffer = await fetch(`https://github.com/TukangM/RTXZY-MD/blob/main/photo/qris.jpg?raw=true`).then(res => res.buffer())
    conn.sendFile(m.chat, buffer, 'hasil.jpg', `*Jika telah melakukan pembayaran silahkan kirimkan bukti pembayaran ke WhatsApp Owner.*`, m)
}

handler.help = handler.command = ['donasi','donate','sewa','sewabot','belibot']
handler.tags = ['main']
module.exports = handler
