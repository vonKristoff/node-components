import Vue from 'vue'; 
import store from './data/store'

import Node from './components/node';

const app = new Vue({
    el: '#root',
    components: [Node],
    data: {
        store
    }
})