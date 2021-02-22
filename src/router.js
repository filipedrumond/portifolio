import Vue from 'vue';
import Router from 'vue-router';

import Index from './vue/Index.vue';

import NotFound from './vue/error/NotFound.vue';

Vue.use(Router);
const router = new Router({
    linkActiveClass: 'link-active',
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index,
            meta: {
                title: 'Home',
                layout: 'l-layout',
                freeAccess: true,
            },
            alias: ['/index', '/home'],
        },
        {
            path: '**',
            name: '404',
            alias: '/404',
            meta: { title: 'Opss', layout: 'l-404', freeAccess: true },
            component: NotFound,
        },
    ],
});

var bodyClass = require('./helpers/bodyClass');
var prototype = Vue.prototype;
router.beforeEach((to, from, next) => {
    if (!to) next('/404');
    if (!prototype.$session.exists()) prototype.$session.start();
    if (!to.meta.freeAccess && !prototype.$session.has('token')) next('/');

    return next();
});

router.afterEach((to) => {
    document.title = (to.meta.title || '') + ' ';
    if (to.meta.layout) bodyClass($, to.meta.layout, to.fullPath);
    else bodyClass($, 'l-layout', to.fullPath);
});
export default router;
