import '../css/app.css';

import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import type { DefineComponent } from 'vue';
import { createApp, h } from 'vue';

import MainLayout from './layouts/MainLayout.vue';

import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css'
import Aura from '@primeuix/themes/aura';
import Ripple from 'primevue/ripple';
import AnimateOnScroll from 'primevue/animateonscroll';

createInertiaApp({
    title: (title) => title,
    resolve: name => {
        const pages = import.meta.glob('./pages/**/*.vue')
        const importer = pages[`./pages/${name}.vue`]
        if (!importer) throw new Error(`Page not found: ${name}`)
        return importer().then(module => {
            const comp = module.default || module
            comp.layout ||= MainLayout
            return comp
        })
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(PrimeVue, {
                theme: {
                    preset: Aura
                },
                ripple: true
            })
            .directive('ripple', Ripple)
            .directive('animateonscroll', AnimateOnScroll)
            .mount(el);
    }
});
