import vFilterButton from "./components/vFilterButton.js"
import vFilter from "./components/vFilter.js"
import vCard from "./components/vCard.js"
import vCart from "./components/vCart.js"
const App = {
    components: {
        vFilterButton,
        vFilter,
        vCard,  
        vCart,     
    },
    data() {
        return {
          currentPage: "home", // home, cart
          categories: [{id: 0, isActive: true, name: "Все"}, 
                        {id: 1, isActive: false, name: "Мясные"}, 
                        {id: 2, isActive: false, name: "Вегетарианское"}, 
                        {id: 3, isActive: false, name: "Гриль"}, 
                        {id: 4, isActive: false, name: "Острые"}, 
                        {id: 5, isActive: false, name: "Закрытые"}],
          showFiltersBar: false,
          filters: [{id: 0, isActive: true, name: "Популярности"},
                    {id: 1, isActive: false, name: "Цене"},
                    {id: 2, isActive: false, name: "Алфовиту"}],
          filterWord: "Популярности",
          copyMainArray: [],
          cartArray: [],
          pizzaCategory: "Все"   
        }
    },
    methods: {
        buy() {
          this.currentPage = 'home'
          this.cartArray = []
        },
        switchBoolean(id) {
            this.categories = this.categories.map(category => ({...category, isActive: false}));      
            this.categories[id].isActive = true
        },
        secondSwitchBoolean(id) {
            this.filters = this.filters.map(category => ({...category, isActive: false}));      
            this.filters[id].isActive = true
            this.filterWord = this.filters[id].name
        },
        send(element) {
          const index = this.cartArray.findIndex(el => el.name == element.name
                                                  && el.dough == element.dough
                                                  && el.size == element.size)
          console.log(index);
          if (index == -1) {
            this.cartArray.push(element)
          }
          else {
            this.cartArray[index].switchNumber++
          }
          
        },
        del(item) {
          const index = this.cartArray.findIndex(el => el.name == item.name
            && el.dough == item.dough
            && el.size == item.size)
          this.cartArray.splice(index, 1)
        }
    },
    async created() {
        const res = await fetch('https://62828fd09fac04c654172c30.mockapi.io/pizza')
        const mainArray = await res.json()
        // console.log(mainArray)
        this.copyMainArray = mainArray
        console.log(this.copyMainArray);
    },
    computed: {
        cartPrice() {
          return this.cartArray.reduce((total, el) => {
            return total + el.price
          },0)
        },
        pizzaArray() {
            if (this.pizzaCategory === "Все") {
                return this.copyMainArray
            }
            else {
                return this.copyMainArray.filter(element => {
                   return element.category == this.pizzaCategory 
                })
            }
        },
        pizzaArray(){
            if(this.pizzaCategory === 'Все'){
              if(this.filterWord === 'Популярности'){
                return [...this.copyMainArray].sort((a, b) => a.viewed > b.viewed ? -1 : 1)
              }
              if(this.filterWord === 'Цене'){
                return [...this.copyMainArray].sort((a, b) => a.price > b.price ? 1 : -1)
              }
              if(this.filterWord === 'Алфовиту'){
                return [...this.copyMainArray].sort((a, b) => a.name < b.name ? -1 : 1)
              }
            }else{
              if(this.filterWord === 'Популярности'){
                const array = this.copyMainArray.filter(el => el.category === this.pizzaCategory)
                return array.sort((a, b) => a.viewed > b.viewed ? -1 : 1)
              }
              if(this.filterWord === 'Цене'){
                const array = this.copyMainArray.filter(el => el.category === this.pizzaCategory)
                return array.sort((a, b) => a.price > b.price ? 1 : -1)
              }
              if(this.filterWord === 'Алфовиту'){
                const array = this.copyMainArray.filter(el => el.category === this.pizzaCategory)
                return array.sort((a, b) => a.name < b.name ? -1 : 1)
              }
            }
          },
    }
}
Vue.createApp(App).mount('#app')