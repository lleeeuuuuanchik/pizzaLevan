export default {
    template: /* html */ `
        <div class="cart-element">
            <div class="cart-element__title-container">
                <img src="" class="cart-element-img" alt="">
                <div class="cart-element__title">
                    <p class="title-first">{{item.name}}</p>
                    <p class="title-second">{{item.dough}}, {{item.size}}</p>
                </div>
            </div>

            <div class="cart-switcher">
                <button class="switch" @click="item.switchNumber > 1 ? item.switchNumber-- : item.switchNumber = 1">-</button>
                <p class="switch-number">{{item.switchNumber}}</p>
                <button class="switch" @click="item.switchNumber++">+</button>
            </div>

            <p class="cart-element__price">{{item.price * item.switchNumber}}</p>

            <button class="cart-element__delete" @click="del(item)">x</button>
        </div>
        
    `,

    data() {
        return {
            
        }
    },
    methods: {
        del(item) {
            this.$emit("del", item)
        }
    },

    props: {
        item: {
            type: Object
        }
    },

}