exports.wait = () => {
	return`*「 ESPERE 」 EM PROGRESSO*`
}

exports.succes = () => {
	return`*「 FEITO 」*`
}

exports.lvlon = () => {
	return`*「 ATIVADO 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DESATIVADO 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*SEU NÍVEL AINDA ESTÁ VAZIO*`
}

exports.lvlnoon = () => {
	return`*O SISTEMA DE VÍVEL NÃO ESTÁ ATIVADO*`
}

exports.noregis = () => {
	return`「 NÃO PERMITIDO 」 Você precisa se cadastrar no banco de dados para poder usar os comandos da Yui. Use o seguinte comando /registrar Nome|Idade`
}

exports.rediregis = () => {
	return`*「 JÁ REGISTRADO 」*\n\n*você já está registrado no banco de dados da Yui*`
}

exports.stikga = () => {
	return`*Falhou, repita de novo em alguns minutos*`
}

exports.linkga = () => {
	return`*Link inválido*`
}

exports.groupo = () => {
	return`*「SOMENTE EM GRUPO」*`
}

exports.ownerb = () => {
	return`*「SOEMNTE O PYON」*`
}

exports.ownerg = () => {
	return`*「SOEMNTE O DONO DO GRUPO」*`
}

exports.admin = () => {
	return`*「SOEMENTE ADMINS」*`
}

exports.badmin = () => {
	return`*「A YUI PRECISA SER ADMINISTRADORA」*`
}

exports.nsfwoff = () => {
	return`*NSFW ATIVADO*`
}

exports.bug = () => {
	return`*Problemas foram relatados ao Pyon, relatórios falsos não serão respondidos*`
}

exports.wrongf = () => {
	return`*Formato incorreto/texto em branco*`
}

exports.clears = () => {
	return`*Tudo limpo*`
}

exports.pc = () => {
	return`*「 CADASTRO 」*\n\nPara saber se você se cadastrou, verifique a mensagem que enviei \n\nNOTE:\n*Se você não entendeu a mensagem. significa que você não salvou o número da Yui*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DADOS 」*\n\nvocê se cadastrou com os dados \n\n┏━⊱NOME:\n┗⊱${namaUser}\n┏━⊱NÚMERO:\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱IDADE:\n┗⊱${umurUser}\n┏━⊱DATA DE REGISTRO\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTE: Não se esqueça deste número porque é importante`
}

exports.cmdnf = (prefix, command) => {
	return`Commando *${prefix}${command}* não encontrado\c digite: *${prefix}menu* para ver a lista de comandos`
}

exports.owneresce = (pushname) => {
	return`*Desculpe, mas ${pushname} não é o dono*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱Seu nível: ${getLevelingLevel(sender)}*\n*┣⊱Tipo de comando: ${command}*\n*┗⊱Requisito de nível: ${aha}*\n\n_NOTE: CONVERSE MAIS PARA GANAHR XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱Seu nível: ${getLevelingLevel(sender)}*\n*┣⊱Tipo de comando: ${command}*\n*┗⊱Requisito de nível: ${ahb}*\n\n_NOTE: CONVERSE MAIS PARA GANHAR XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱Seu nível: ${getLevelingLevel(sender)}*\n*┣⊱Tipo de comando: ${command}*\n*┗⊱Requisito de nível: ${ahc}*\n\n_NOTE: CONVERSE MAIS PARA GANHAR XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱Seu nível: ${getLevelingLevel(sender)}*\n*┣⊱Tipo de comando: ${command}*\n*┗⊱Requisito de nível: ${ahd}*\n\n_NOTE: CONVERSE MAIS PARA GANHAR XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱Seu nível: ${getLevelingLevel(sender)}*\n*┣⊱Tipo de comando: ${command}*\n*┗⊱Requisito de nível: ${ahe}*\n\n_NOTE: CONVERSE MAIS PARA GANHAR XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱Seu nível: ${getLevelingLevel(sender)}*\n*┣⊱Tipo de comando: ${command}*\n*┗⊱Requisito de nível: ${ahf}*\n\n_NOTE: CONVERSE MAIS PARA GANHAR XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role) => { 
	return `
┏━━━⊱  *SOBRE O USUÁRIO*  ⊰━━┓
┣⊱ *Nome*: ${pushname}
┣⊱ *Número*: wa.me/${sender.split("@")[0]}
┣⊱ *Moeda*: Bits: ${uangku}
┣⊱ *XP*: ${getLevelingXp(sender)}/${reqXp} 
┣⊱ *Level*: ${getLevelingLevel(sender)}
┣⊱ *Registro de usuário*: ${_registered.length}
┗━━━⊱  ⸨ *Yui-chan* ⸩  ⊰━━━━┛

 *${prefix}info*
 *${prefix}owner*

┏━━⊱ *MENU CRIATIVO* ⊰━━┓
┣⊱ *${prefix}sticker* 
┣⊱ *${prefix}citar* <text|author>
┣⊱ *${prefix}qrcode* <text>
┣⊱ *${prefix}ttp*
┣⊱ *${prefix}stickerhide* <text>
┣⊱ *${prefix}emoji*
┣━━⊱  *FUN MENU*  ⊰━━━┫
┣⊱ *${prefix}letra* <text>
┣⊱ *${prefix}nomesign>
┣⊱ *${prefix}posso* <texto>
┣⊱ *${prefix}quando* <texto>
┣⊱ *${prefix}is* <teks>
┣⊱ *${prefix}avaliar* <teks>
┣⊱ *${prefix}slap*
┣⊱ *${prefix}tapa*
┣⊱ *${prefix}moddroid* <teks>
┣⊱ *${prefix}happymod* <teks>
┣━━⊱ *CRUSH* ⊰━━━━━┫
┣⊱ *${prefix}crush*
┣⊱ *${prefix}next*
┣━━⊱ *MEDIA MENU* ⊰━━┫
┣⊱ *${prefix}brainly* [error]
┣⊱ *${prefix}pinterest*
┣⊱ *${prefix}receitas* <teks>
┣⊱ *${prefix}igstalk* <username>
┣⊱ *${prefix}bitly* <link>
┣⊱ *${prefix}tiktok* <username>
┣⊱ *${prefix}ssweb* <link>
┣⊱ *${prefix}kbbi* <text>
┣━━⊱ *YOU TUBE & SONG* ⊰━━━┫
┣⊱ *${prefix}ytmp3* <link>
┣⊱ *${prefix}ytmp4* <link>
┣⊱ *${prefix}joox* <título>
┣━━⊱  *MENU VOU ALI CAGAR*  ⊰━┫
┣⊱ *${prefix}anjing*
┣⊱ *${prefix}blowjob*
┣⊱ *${prefix}nekonime*
┣⊱ *${prefix}pokemon*
┣⊱ *${prefix}husbu*
┣⊱ *${prefix}nangis*
┣⊱ *${prefix}cium*
┣⊱ *${prefix}peluk*
┣⊱ *${prefix}ranime*
┣━━⊱ *LIMIT & MOEDA* ⊰━┫
┣⊱ *${prefix}limit* 
┣⊱ *${prefix}buylimit* <quantia>
┣⊱ *${prefix}transfer* <tag | quantia>
┣⊱ *${prefix}dompet*
┣⊱ *${prefix}players*
┣━━⊱ *GROUP MENU* ⊰━┫
┣⊱ *${prefix}hidetag*
┣⊱ *${prefix}blocklist*
┣⊱ *${prefix}grouplist*
┣⊱ *${prefix}level*
┣⊱ *${prefix}linkgc*
┣⊱ *${prefix}tagall*
┣⊱ *${prefix}setpp*
┣⊱ *${prefix}add* <tag>
┣⊱ *${prefix}kick* <tag>
┣⊱ *${prefix}setname* <teks>
┣⊱ *${prefix}setdesc* <teks>
┣⊱ *${prefix}demote* <tag>
┣⊱ *${prefix}promote* <tag>
┣⊱ *${prefix}listadmin*
┣⊱ *${prefix}group* [on/off]
┣⊱ *${prefix}leveling* [enable/disable]
┣⊱ *${prefix}nsfw* [1/0]
┣⊱ *${prefix}simih* [1/0]
┣⊱ *${prefix}welcome* [1/0]
┣━━⊱ *OWNER MENU* ⊰━┫
┣⊱ *${prefix}bc* <teks>
┣⊱ *${prefix}bcgc* <teks>
┣⊱ *${prefix}kickall* <rawan ban>
┣⊱ *${prefix}setreply* <teks>
┣⊱ *${prefix}setprefix* <symbol>
┣⊱ *${prefix}clearall*
┣⊱ *${prefix}block* <tag>
┣⊱ *${prefix}unblock* <tag>
┣⊱ *${prefix}leave*
┣⊱ *${prefix}event* [1/0]
┣⊱ *${prefix}clone* <tag>
┣⊱ *${prefix}setppbot*
┣━━⊱ *FIM* ⊰━━┫
┃
┃ CONTINUE CONVERSANDO PARA GANHAR XP E LIBERAR FUNÇÕES
┃
┗━━⊱  ⸨ *YUI* ⸩  ⊰━━━━┛
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*「 Nivel 」*
┏⊱ *Nome* : ${pushname}
┣⊱ *Número* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┣⊱ *Limit* : +3
┗⊱ *Nível* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Desculpe ${pushname} limite de hoje acabou*\n*limite de compra para obter limite / subir de nível*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
Limite restante: ${limitCounts}

NOTE: para chegar ao limite. pode passar de nível ou limite de capacidade`
}

exports.satukos = () => {
	return`*Adicionar parâmetro 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 ATM 」⊰━┓*\n┣⊱ *Nome* : ${pushname}\n┣⊱ *Número* : ${sender.split("@")[0]}\n┣⊱ *Moeda* : ${uangkau}\n┗━━━━━━━━━━`
}