let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `

Welcome to [MIZA] Bot^~^

Owner: Wa.me/6285540514071


➸ Prefix:  *「 ${_p} 」*
➸ Status: *「 Online 」*

*「 COMMAND 」*
${_p}menu

*「 FUN MENU 」*
${_p}qr <teks>
${_p}stiker (caption)
${_p}bucin
${_p}ss (website)

*「 GROUP 」*
${_p}add (Nomor)
${_p}kick @mention
${_p}promote @mention
${_p}demote @mention
${_p}linkgrup
${_p}pengumuman <teks>
${_p}listonline [groupid]


*「  Experimental  」*
${_p}jadibot [kode login jika ada / kosongin]

*「 Advanced 」*
> return 'javascript eval ' + m.sender
`.trim(), m)
}
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

