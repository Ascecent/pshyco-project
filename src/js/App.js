import "Styles"
import Home from "./Home"
import Psychology from "./Psychology"
import barba from '@barba/core'
import barbaCss from '@barba/css'
import {
    updateMenu
} from './utils'

barba.use(barbaCss)

barba.hooks.beforeEnter(function (data) {
    updateMenu(data.next.container.dataset.barbaNamespace)
})

barba.init({
    views: [{
            namespace: 'home',
            beforeEnter() {
                Home(document.getElementById('quote'),
                    document.getElementById('author'),
                    document.getElementById('author-image'),
                    document.getElementById('wave-bg'))
            }
        },
        {
            namespace: 'psychology',
            beforeEnter() {
                Psychology(document.getElementById('root-svg'))
            }
        }
    ],
    transitions: [{
        name: 'cover',
        to: {
            namespace: ['home', 'history', 'psychology', 'schools'],
        },
        enter() {},
        leave() {},
    }]
});