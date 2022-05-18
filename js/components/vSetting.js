export default {
    template: /* html */ `
            <div class="element__filters-container">
            <div class="filter__container">
                <button class="filter__button" :class="{ filter__button_active: index === doughId}"
                @click="doughId = index"
                v-for="(item, index) in doughArray" :key="index">{{item.text}}</button>
            </div>
            <div class="filter__container">
                <button class="filter__button" :class="{ filter__button_active: index === sizeId  }" 
                 @click="sizeId = index"
                 v-for="(item, index) in sizeArray" :key="index">{{item.text}}</button>
            </div>
        </div>

        <div class="product__price-and-button_container">
            <p class="product__price">{{element.price}} Р</p>
            <button class="product__btn" @click="send(element)">+ Добавить</button>
        </div>
    `,

    data() {
        return {
            doughArray: [
                {id: 0, text: "Тонкое"},
                {id: 1, text: "Традиционное"}
            ],
            sizeArray: [
                {id: 0, text: "26см."},
                {id: 1, text: "30см."},
                {id: 2, text: "40см."}
            ],
            doughId: 0,
            sizeId: 0,
        }
    },
    methods: {
        send(element) {
            this.$emit("send", {
                ...element, 
                dough: this.doughArray[this.doughId].text,
                size: this.sizeArray[this.sizeId].text,
                switchNumber: 1
            })       
        }
    },

    props: {
        element: {
            type: Object
        }
    },
}