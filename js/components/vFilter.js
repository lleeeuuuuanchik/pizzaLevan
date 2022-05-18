export default {
    template: /* html */ `
        <button class="filter__second-element" :class="{'filter__second-element-active':active}" @click="$emit('switch', id)">{{word}}</button>
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
