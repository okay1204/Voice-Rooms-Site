import urlencode from 'urlencode'

const invite_url = 'https://discord.com/api/oauth2/authorize?client_id=760552758532243466&permissions=16861200&scope=bot'

let discord_auth_url = 'https://discord.com/api/oauth2/authorize?'

const params = {
    response_type: 'token',
    client_id: '760552758532243466',
    scope: 'identify',
    redirect_uri: 'https://www.voicerooms.app/',
    prompt: 'none'
}

for (const [key, value] of Object.entries(params)) {
    discord_auth_url += `${key}=${urlencode(value)}&`
}

// getting rid of last &
discord_auth_url = discord_auth_url.slice(0, discord_auth_url.length-1)

const constants = { discord_auth_url, invite_url }

export default constants;