import {
    createRouter,
    createWebHistory,
    createWebHashHistory
} from 'vue-router'
import writer from '@/utils/router'
const home = () =>
    import ("@/components/Home")
const main = () =>
    import ("@/views/dashboard/home/index")
const getStarted = () =>
    import ("@/views/dashboard/getStarted/index")
const deploy = () =>
    import ("@/views/dashboard/deploy/index")
const deployNew = () =>
    import ("@/views/dashboard/deploy/new")
const templates = () =>
    import ("@/views/dashboard/templates/index")
const providers = () =>
    import ("@/views/dashboard/providers/index")
const analytics = () =>
    import ("@/views/dashboard/analytics/index")
const priceCompare = () =>
    import ("@/views/dashboard/priceCompare/index")
const faq = () =>
    import ("@/views/dashboard/faq/index")
const settings = () =>
    import ("@/views/dashboard/settings/index")

const routes = [{
        path: '/',
        component: home,
        children: [{
            path: '/',
            name: 'home',
            component: main,
            meta: {
                keepAlive: true,
                title: 'Home'
            }
        }, {
            path: '/get-started',
            name: 'get-started',
            component: getStarted,
            meta: {
                keepAlive: true,
                title: 'Get started with Libra Cloud OS'
            }
        }, {
            path: '/deploy',
            name: 'deploy',
            component: deploy,
            meta: {
                keepAlive: true,
                title: 'Deployments'
            }
        }, {
            path: '/new-deployment',
            name: 'deployNew',
            component: deployNew,
            meta: {
                keepAlive: true,
                title: 'Create Deployment'
            }
        }, {
            path: '/templates',
            name: 'templates',
            component: templates,
            meta: {
                keepAlive: true,
                title: 'Template Gallery'
            }
        }, {
            path: '/providers',
            name: 'providers',
            component: providers,
            meta: {
                keepAlive: true,
                title: 'Providers'
            }
        }, {
            path: '/analytics',
            name: 'analytics',
            component: analytics,
            meta: {
                keepAlive: true,
                title: 'Analytics'
            }
        }, {
            path: '/price-compare',
            name: 'priceCompare',
            component: priceCompare,
            meta: {
                keepAlive: true,
                title: 'Price comparision'
            }
        }, {
            path: '/faq',
            name: 'faq',
            component: faq,
            meta: {
                keepAlive: true,
                title: 'Frequently Libra Cloud OS Questions'
            }
        }, {
            path: '/settings',
            name: 'settings',
            component: settings,
            meta: {
                keepAlive: true,
                title: 'Settings'
            }
        }]
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
]

const router = createRouter({
    history: process.env.NODE_ENV === 'testnet' ? createWebHashHistory(process.env.BASE_URL) : createWebHistory(process.env.BASE_URL),
    // history: createWebHistory(process.env.BASE_URL),
    // history: createWebHashHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    writer(to);
    next();
})

export default router