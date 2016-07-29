var Vue = require('vue'),
    http = require('vue-resource');

import Alert from './components/alert.js';

Vue.use(http);

var App = new Vue({
    el: 'body',
    components: [
        Alert
    ],
    data: {
        test: 'Whasup',
        collection: [
            { body: '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { body: '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { body: '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
        ]
    }
})