import Vue from 'vue'
import Template from '../templates/comp.html';
// import TypeA from './type-a'
// import TypeB from './type-b'

export default {
    name: 'node',
    template: Template,
    // components: [TypeA, TypeB],
    // inherit: true,
    props: ['model'],
    data() {
        return {
            io: {
                parent: null,
                child: null
            },            
            offset: {
                x: 0,
                y: 0
            },
            position: {
                x: 0,
                y: 0
            },
            dragging: false
        }
    },
    computed: {
        inline() {
            if(this.dragging) {
                return `transform: translate(${this.position.x}px,${this.position.y}px);`
            }
        },
        isNested() {
            // return this.model.children.length
        }
    },
    methods: {
        mousedown(vm, e) {
            this.$dispatch('tgt', vm)
            this.offset.x = e.clientX - this.position.x
            this.offset.y = e.clientY - this.position.y
            this.dragging = true;
        },
        mouseup() {
            this.dragging = false;
        },
        mouseover(vm, e) {
            this.$dispatch('over', vm)
            console.log(vm.$el.getBoundingClientRect(), e.clientX);
        },
        drag(e) {
            if(this.dragging) {
                this.position.x = e.clientX - this.offset.x;
                this.position.y = e.clientY - this.offset.y;
            }
            // console.log(vm.model.name, e.clientX, vm.$root.$data);
        }
    },
    ready() {     
        console.log(this.model.name, this.model.children.length);
    }
}