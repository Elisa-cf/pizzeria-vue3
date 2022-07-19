import { createApp } from 'vue'
import VueGoogleMaps from '@fawmi/vue-google-maps'

import App from './App.vue'
import router from './router'
import './assets/global.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


/* add icons to the library */
library.add(faBars, faCartShopping, faUser, faLocationDot, faWhatsapp, faAt, faHeart)


//const app = createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')


const app = createApp(App).use(router, VueGoogleMaps, {
    load: {
        key: 'AIzaSyAagIVG4qFUjtBCyUtwPm0JKe4covbgeKI',
        // language: 'de',
    },
}).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
