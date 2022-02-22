
const URL = 'https://fakestoreapi.com/products';

import {createApp} from '../../node_modules/vue/dist/vue.esm-browser.js';
import {oneItem} from './components/oneItem.js';

createApp({

    components: {
        oneItem,
    },

    data() {
        return {            
            itemList: [],
            sort: null,
            sortItemList: [],
        }
    },

    methods: {
        amountItemsPlus(counter, id, summaPrice ) {
            this.sortItemList[id].amount = counter;
            this.sortItemList[id].summa = summaPrice;              
        },
        amountItemsMinus(counter, id, summaPrice) {
            this.sortItemList[id].amount = counter;
            this.sortItemList[id].summa = summaPrice;    
        },
        sortPriceUp(a, b) {
           return  a.price - b.price;                       
        },
        sortPriceDown(a, b) {         
            return  b.price - a.price;           
        },
    },
    
    computed: {        
        totalAmount() {
            return  this
                    .sortItemList
                    .reduce((acc, item) => acc + item.amount, 0);
        },
        summaAll() {
            return  this
                    .sortItemList
                    .reduce((acc, item) => acc + item.summa, 0);
        },  
        sortedList() {
            let sorted = [...this.itemList];
            if (this.sort == 'up') {
                return  this.sortItemList = sorted.sort(this.sortPriceUp)
            } else if (this.sort == 'down') {
                return  this.sortItemList = sorted.sort(this.sortPriceDown)    
            } else {
                return  this.sortItemList = sorted;
            }
        },        
    },
           
    async mounted() {
        let URLitemList = await fetch(URL);
            URLitemList = await URLitemList.json();           
            URLitemList = URLitemList.map(item => ({...item, amount: 0, summa: 0}));
            console.log(URLitemList);            
            this.itemList = URLitemList; 
   },

}).mount('#app');

