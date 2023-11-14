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
const deploy = () =>
    import ("@/views/deploy/index")
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
const faq = () =>
    import ("@/views/faq/index")
const settings = () =>
    import ("@/views/settings/index")
const login = () =>
    import ("@/views/login/index");
const register = () =>
    import ("@/views/register/index");
const reset = () =>
    import ("@/views/reset/index");
const changeEmail = () =>
    import ("@/views/changeEmail/index");

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
    }, {
        path: '/register',
        name: 'register',
        components: {
            default: register
        },
        meta: {
            keepAlive: true,
        }
    }, {
        path: '/reset',
        name: 'reset',
        components: {
            default: reset
        },
        meta: {
            keepAlive: true,
        }
    }, {
        path: '/changeEmail',
        name: 'changeEmail',
        components: {
            default: changeEmail
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