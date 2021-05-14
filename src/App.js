import './App.css';
import routes from './routes';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/navbar.js'
import Footer from './components/footer.js'
import NotFound from './pages/notFound.js'
import React from 'react'
import axios from 'axios'
import Url from 'url-parse'

function App(props) {

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


  const [discord_user, setDiscordUser] = React.useState(null)

  if (url_hash.token_type === 'Bearer') {

    axios.get('https://discord.com/api/v8/users/@me', {
      headers: {
        Authorization: 'Bearer ' + url_hash.access_token
      }
    })
    .then((response) => {
      
      const data = response.data

      data.avatar = `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.png`
      setDiscordUser(data)
    })
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