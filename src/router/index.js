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
const analytics = () =>
    import ("@/views/dashboard/analytics/index")
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
                title: 'Libra OS'
            }
        }, {
            path: '/get-started',
            name: 'get-started',
            component: getStarted,
            meta: {
                keepAlive: true,
                title: 'Libra OS'
            }
        }, {
            path: '/analytics',
            name: 'analytics',
            component: analytics,
            meta: {
                keepAlive: true,
                title: 'Libra OS'
            }
        }, {
            path: '/faq',
            name: 'faq',
            component: faq,
            meta: {
                keepAlive: true,
                title: 'Libra OS'
            }
        }, {
            path: '/settings',
            name: 'settings',
            component: settings,
            meta: {
                keepAlive: true,
                title: 'Libra OS'
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