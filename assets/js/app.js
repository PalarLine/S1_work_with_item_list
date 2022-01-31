
const URL = 'https://fakestoreapi.com/products';

import {createApp} from '../../node_modules/vue/dist/vue.esm-browser.js';
import {oneItem} from './components/oneItem.js';

createApp({

    components: {
        oneItem,

    },

    data() {
        return {
            title: 'hello',
            itemList: [],
           
                        
            
        }
    },

    methods: {
        onAmountItemsPlus(counter, id, summaPrice ) {
            this.itemList[id].amount = counter;
            this.itemList[id].summa = summaPrice;
            alert(`data: ${counter} ${id} ${summaPrice}`);
            

        },
        onAmountItemsMinus(counter, id, summaPrice) {
            this.itemList[id].amount = counter;
            this.itemList[id].summa = summaPrice;
            alert(`data: ${counter} ${id}  ${summaPrice}`);

        },
        

    },

    computed: {
        totalAmount() {
            return this
                    .itemList
                    .reduce((acc, item) => acc + item.amount, 0);
        },
        summaAll() {
            return this
                    .itemList
                    .reduce((acc, item) => acc + item.summa, 0);
        }

    },

    async mounted() {
        let URLitemList = await fetch(URL);
            URLitemList = await URLitemList.json();

           
            URLitemList = URLitemList.map(item => ({...item, amount: 0, summa: 0}));
            console.log(URLitemList);
            this.itemList = URLitemList; 

    }


}).mount('#app');

