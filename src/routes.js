import parseRoutes from './utils/parser.js'
import Home from './pages/home.js'
import Commands from './pages/commands.js'
import Premium from './pages/premium.js'
import Thanks from './pages/thanks.js'
import Help from './pages/help.js'
import TermsOfService from './pages/termsOfService.js'
import PrivacyPolicy from './pages/privacyPolicy.js'

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
        component: Premium,
        subRoutes: [
            {
                path: '/thanks',
                component: Thanks
            }
        ]
    },
    {
        path: '/help',
        component: Help
    },
    {
        path: '/terms-of-service',
        component: TermsOfService
    },
    {
        path: '/privacy-policy',
        component: PrivacyPolicy
    }
]

export default parseRoutes(routes);
