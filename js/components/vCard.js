import vSetting from "./vSetting.js"

export default {
    template: /* html */ `
        <div class="product__element">
            <img src="" alt="" class="product__element-img">
            <p class="product__element-name">{{element.name}}</p>
            <vSetting @send="send" :element="element"></vSetting>      
        </div>
        
    `,

    data() {
        return {
        }
    },

    props: {
        element: {
            type: Object
        }
    },

    components: {
        vSetting
    },

    methods: {
        send(element) {
            this.$emit("send", element)
        }
    }

    // mounted() {
    //     console.log(element);
    // },



    // computed: {
    //     copy() {
    //         return copyMainArray
    //     }
    // }
}

