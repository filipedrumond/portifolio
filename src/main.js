import Vue from 'vue';
import router from './router';
import App from './App';
import VueResource from 'vue-resource';
import VueSession from 'vue-session';

window.$ = $;
window.jQuery = $;
require('./helpers/collapseControl')();

const userModel = require('./vue/model/user.model');
const loginModel = require('./vue/model/login.model');
const petModel = require('./vue/model/pet.model');
const QRCode = require('qrcode');

import { SimpleAlerts } from '@filipedp/simple_dialog';
import { SimpleConfirms } from '@filipedp/simple_dialog';

Vue.mixin({
    data: function () {
        return {
            model: {
                user: userModel,
                login: loginModel,
                pet: petModel,
            },
            SimpleAlerts: SimpleAlerts,
            SimpleConfirms: SimpleConfirms,
            QRCode: QRCode,
            apiUrl:
                window.location.origin == 'https://fdru.com.br'
                    ? 'https://api.fdru.com.br'
                    : window.location.origin + ':3000',
        };
    },
});

var globalMixFilter = require('./vue/mix/filters.mix');
Vue.mixin(globalMixFilter);

var globalApiMethods = require('./vue/mix/apiMethods.mix');
Vue.mixin(globalApiMethods);

var globalGeoLocation = require('./vue/mix/geoLocation.mix');
Vue.mixin(globalGeoLocation);

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(VueSession);

window.Vue = new Vue({
    el: '#vue-app',
    router,
    components: { App },
    template: '<App/>',
    created: function () {
        this.$session.start();
    },
});
