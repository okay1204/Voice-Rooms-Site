import urlencode from 'urlencode'

const invite_url = 'https://discord.com/api/oauth2/authorize?client_id=760552758532243466&permissions=16861200&scope=bot'

let raw_discord_auth_url = 'https://discord.com/api/oauth2/authorize?'

const params = {
    response_type: 'token',
    client_id: '760552758532243466',
    scope: 'identify',
    redirect_uri: 'https://www.voicerooms.app/',
    prompt: 'consent'
}

for (const [key, value] of Object.entries(params)) {
    raw_discord_auth_url += `${key}=${urlencode(value)}&`
}

const discord_auth_url = (prompt) => {
    let discord_auth_url = raw_discord_auth_url

    prompt = ['consent', 'none'].includes(prompt) ? prompt : 'consent'
    discord_auth_url += 'prompt=' + prompt

    return discord_auth_url
}

const constants = { discord_auth_url, invite_url }

export default constants;