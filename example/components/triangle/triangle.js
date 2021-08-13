import triangle from './triangle.vue'

const VueTriangle = {
    install: function(Vue) {
        Vue.component('vue-triangle', triangle)
    }
}

export default VueTriangle