
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
            // sortItemList: [],
            // itemsTotalAmount: '',
            // itemsSummaAll: '',
        }
    },

    methods: {
        onAmountItemsPlus(counter, id, summaPrice ) {
            
            this.itemList[id].amount = counter;
            this.itemList[id].summa = summaPrice;
            // alert(`data: ${counter} ${id} ${summaPrice}`);
            

        },
        onAmountItemsMinus(counter, id, summaPrice) {
            this.itemList[id].amount = counter;
            this.itemList[id].summa = summaPrice;
            // alert(`data: ${counter} ${id}  ${summaPrice}`);

        },

        sortPriceUp(a, b) {

           return  a.price - b.price;

                        
            
        },
        sortPriceDown(a, b) {
             
            
            
            return  b.price - a.price;
            
            
        
        },
        // sortClean() {

        //     return  this.itemList;

            
        //     // document.location.reload();


        // },
    },

    computed: {
        
        totalAmount() {
            return  this
                    .itemList
                    .reduce((acc, item) => acc + item.amount, 0);
        },

        summaAll() {
            return  this
                    .itemList
                    .reduce((acc, item) => acc + item.summa, 0);
        },   
        sortedList() {
            let sorted = this.itemList.map(item => ({...item}))
            
            switch(this.sort) {

                case 'up' :  sorted.sort(this.sortPriceUp);
                break;
                
                case 'down' :  sorted.sort(this.sortPriceDown);
                break;
                
                // case 'clean' :  this.itemList ;
                // break;
                
                // case null : return this.itemList;
            }
            return this.itemList = sorted.map(item => ({...item}));
           
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

