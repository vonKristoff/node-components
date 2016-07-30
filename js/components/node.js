import Vue from 'vue'
import Template from '../templates/node.html';
import TypeA from './type-a'
import TypeB from './type-b'

export default {
    name: 'node',
    template: Template,
    components: [TypeA, TypeB],
    inherit: true,
    props: ['type', 'id', 'start', 'tgt', 'model', 'm'],
    data() {
        return {
            io: {
                parent: null,
                child: null
            },
            random: Math.random(),
            componentType: this.type,
            mouse: {
                sx: 0,
                sy: 0
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
                this.position.x = this.m.x - this.mouse.sx
                this.position.y = this.m.y - this.mouse.sy
                return `transform: translate(${this.position.x}px,${this.position.y}px); position: absolute;`
            } else {
                return `transform: translate(${this.position.x}px,${this.position.y}px);`
            }
            
        },
        isNested() {
            return this.model.children && this.model.children.length
        }
    },
    methods: {
        render(data) {
            console.log(data);
        },
        mousedown(e) {
            this.mouse.sx = e.clientX - this.$el.getBoundingClientRect().left
            this.mouse.sy = e.clientY - this.$el.getBoundingClientRect().top /2
            this.dragging = true;
        },
        mouseup(e) {
            // console.log('end drag', this.$el.getBoundingClientRect());
            this.dragging = false;
            this.$emit('snap', { tgt: this.id, box: this.$el.getBoundingClientRect() })
        },
        mousemove(e) {
            // if(this.dragging) {
            //    
            // }
        }
    },
    ready() {
        this.position.x = this.start;
        this.$on('snap', (data) => {
            console.log('snap',this.id, this.tgt, data.tgt, this.$el.getBoundingClientRect(), data.box);
            if(this.id == data.tgt) {
                let w = data.box.right - this.$el.getBoundingClientRect().right
                console.log(w);
            }
        })
    }
}