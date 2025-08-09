import {createApp} from 'vue';
import App from './App.vue';

window.addEventListener('DOMContentLoaded', () => {
    const vueDiv = document.createElement('div');
    const app = createApp(App);
    app.mount(vueDiv);
    window.mk_vue_app = app;
    document.body.appendChild(vueDiv);
})

