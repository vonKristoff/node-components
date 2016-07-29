// import Node from './node'

export default {
    name: 'type-a',
    props: ['msg'],
    ready() {
        // this.message = this.msg;
        this.$parent.render('test');
    }
}