export default {
    template: /* html */ `
        <button class="filter__element" :class="{'filter__element-active':active}" @click="$emit('switch', id)">{{word}}</button>
    `,

    data() {
        return {
        }
    },

    props: {
        id: {
            type: Number
        },

        active: {
            type: Boolean
        },

        word: {
            type: String
        }
    }
}
