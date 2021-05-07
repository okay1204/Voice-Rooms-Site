import './App.css';
import routes from './routes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/navbar.js'
import Footer from './components/footer.js'
import NotFound from './pages/notFound.js'

function App() {
  return (
		<Router>
      <div className='App'>
      <NavBar/>
      
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