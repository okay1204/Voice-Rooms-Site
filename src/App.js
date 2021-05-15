import './App.css';
import routes from './routes';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/navbar.js'
import Footer from './components/footer.js'
import NotFound from './pages/notFound.js'
import React from 'react'
import axios from 'axios'
import Url from 'url-parse'
import { useCookies } from 'react-cookie'

function App(props) {

  const [cookies, setCookie, removeCookie] = useCookies(['discord_access_token'])

  // parsing url hash
  let url = Url(window.location.href)
  let url_hash = {}

  if (url.hash) {
    const url_hash_string = url.hash.slice(1, url.hash.length)
    let hash_list = url_hash_string.split('&')
    hash_list.forEach((hash) => {
      const [key, value] = hash.split('=')
      url_hash[key] = value
    })
  }

  // undefined means loading, null means not logged in
  const [discord_user, setDiscordUser] = React.useState(undefined)
  
  // if there wasn't any direct login, check for any cookies instead
  if (discord_user === undefined) {

    if (url_hash.token_type === 'Bearer' || cookies.discord_access_token) {
      const access_token = url_hash.access_token || cookies.discord_access_token
  
      axios.get('https://discord.com/api/v8/users/@me', {
        headers: {
          Authorization: 'Bearer ' + access_token
        }
      })
      .then((response) => {

        const now = new Date()
        const next_week = new Date()
        next_week.setDate(now.getDate() + 7)
  
        // set new cookie if needed
        if (!cookies.discord_access_token) {
          setCookie('discord_access_token', url_hash.access_token, {
            maxAge: url_hash.expires_in,
            expires: next_week
          })
        }
  
        const data = response.data
        
        data.avatar = `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.png`
        setDiscordUser(data)
      })
      .catch((error) => {
        if (error.response.status === 401 && cookies.discord_access_token) {
          removeCookie('discord_access_token')
        }
      })
    }
    else {
      setDiscordUser(null)
    }
  }

  return (
    <Router>
      {discord_user && <Redirect to={url.pathname} />}
      <div className='App'>
        <NavBar discord_user={discord_user}/>


        <Switch>
          {routes.map(route => (
          <Route
            path={route.path}
            exact
            component={props => (
            <route.component {...props} />
            )}
            />
          ))}
          <Route component={NotFound} />
        </Switch>

        <Footer />
      </div>
    </Router>
	)
}

export default App;