import Vue from 'vue'; 
import {nodes} from './data/store'

import Node from './components/comp';

const app = new Vue({
    el: '#root',
    components: [ Node ],
    data: {
        dragee: null,
        onover: null,
        target: null,
        store: nodes
    },
    methods: {
        mousemove(e) {
            if(this.dragee && this.dragee.dragging) {
                this.dragee.drag(e);
            }
        },
        mouseup(e) {
            if(this.dragee && this.dragee.dragging) {
                this.dragee.dragging = false;
                this.dragee = false;
            }
        }
    },
    ready(){
        this.$on('over', (vm) => {
            this.onover = vm.model.name
        })
        this.$on('tgt', (vm) => {
            this.target = vm.model.name
            this.dragee = vm;
        })
    }
})