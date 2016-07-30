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
        mo(e){
            console.log(e.target);
        },
        mouseup(e) {
            if(this.dragee && this.dragee.dragging) {
                console.log(this.dragee);
                // this.onover.children.push(this.dragee.model)
                this.dragee.dragging = false;
                this.dragee = false;
                
            }
        }
    },
    ready(){
        this.$on('over', (vm) => {
            // this.onover = vm.model
            this.onover = vm.model.name
        })
        this.$on('tgt', (vm) => {
            this.target = vm.model.name
            this.dragee = vm;
        })
        console.log(this.store.find(item => item.name == 'root'));
        setTimeout(() => {
            this.store.sort((a,b) => {
                return a.name.length > b.name.length ? -1 : 1;
            })
        },1500);
    }
})