import './bootstrap';
import Vue from 'vue';
import Vuetify from "vuetify";

import Routes from './routes';

import App from './view/App';

Vue.use(Vuetify);

const app = new Vue({
    el: '#app',
    router: Routes,
    vuetify : new Vuetify(),
    render: h => h(App),
});

export default app;
