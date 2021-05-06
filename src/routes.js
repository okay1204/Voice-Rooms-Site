import parseRoutes from './utils/parser.js'
import Home from './pages/home.js'
import Commands from './pages/commands.js'
import Premium from './pages/premium.js'
import Help from './pages/help.js'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/commands',
        component: Commands
    },
    {
        path: '/premium',
        component: Premium
    },
    {
        path: '/help',
        component: Help
    }
]

export default parseRoutes(routes);
