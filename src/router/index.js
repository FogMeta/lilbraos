import {
    createRouter,
    createWebHistory,
    createWebHashHistory
} from 'vue-router'
import writer from '@/utils/router'
const home = () =>
    import ("@/components/Home")
const main = () =>
    import ("@/views/home/index")
const getStarted = () =>
    import ("@/views/getStarted/index")
const getStartedDeploy = () =>
    import ("@/views/getStarted/deploy")
const getStartedRpc = () =>
    import ("@/views/getStarted/rpc")
const deploy = () =>
    import ("@/views/deploy/index")
const deployDetail = () =>
    import ("@/views/deploy/deployDetail")
const deployNew = () =>
    import ("@/views/deploy/new")
const templates = () =>
    import ("@/views/templates/index")
const spaceBuilder = () =>
    import ("@/views/spaceBuilder/index")
const providers = () =>
    import ("@/views/providers/index")
const analytics = () =>
    import ("@/views/analytics/index")
const priceCompare = () =>
    import ("@/views/priceCompare/index")
const RPC = () =>
    import ("@/views/Infrastructure/RPC")
const faq = () =>
    import ("@/views/faq/index")
const settings = () =>
    import ("@/views/settings/index")
const login = () =>
    import ("@/views/login/index")
const homepage = () =>
    import ("@/views/home/home-index")

const routes = [{
        path: '/homepage',
        name: 'homepage',
        component: homepage,
        meta: {
            keepAlive: true,
            title: 'Get started with Libra Cloud OS'
        }
    }, {
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
            path: '/get-started-deploy',
            name: 'get-started-deploy',
            component: getStartedDeploy,
            meta: {
                keepAlive: true,
                title: 'Get started with Libra Cloud OS'
            }
        }, {
            path: '/get-started-rpc',
            name: 'get-started-rpc',
            component: getStartedRpc,
            meta: {
                keepAlive: true,
                title: 'Get started with Libra Cloud OS'
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
            path: '/deploy/:id',
            name: 'deployDetail',
            component: deployDetail,
            meta: {
                keepAlive: true,
                title: 'Deployments Detail'
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
            path: '/space-builder',
            name: 'spaceBuilder',
            component: spaceBuilder,
            meta: {
                keepAlive: true,
                title: 'Space Builder'
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
            path: '/RPC',
            name: 'RPC',
            component: RPC,
            meta: {
                keepAlive: true,
                title: 'RPC'
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
    }, {
        path: '/login',
        name: 'login',
        components: {
            default: login
        },
        meta: {
            keepAlive: true,
        }
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