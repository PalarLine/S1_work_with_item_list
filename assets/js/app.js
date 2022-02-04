
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
            sort: '',
            // itemsTotalAmount: '',
            // itemsSummaAll: '',
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
        sortItemsByPriceUp() {
            
               
            
            this.itemList =  this.itemList.sort((a, b) => a.price - b.price);
            return this.itemListSorted;
            
            
        },
        sortItemsByPriceDown() {
                           
            
            this.itemList = this.itemList.sort((a, b) => b.price - a.price);
            return this.itemListSorted;
            
        
        },
        sortClean() {

            
            document.location.reload();


        },
        // getItems() {
        // let data = localStorage.getItem('data');
        //         if (data) {
        //             this.itemList = data;
                    
        //         };
        //     },
        

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
    },


    watch: {
        itemList: {
            handler() {
                
                localStorage.setItem('data', JSON.stringify(this.itemList));
               
            },
            

        },
        
    //     // itemsSummaAll: {
    //         // handler() {
                
    //         //     localStorage.setItem('data1', this.itemsSummaAll);
               
    //         // },
            
// 
    //     // }
    },

    async mounted() {
        let URLitemList = await fetch(URL);
            URLitemList = await URLitemList.json();

           
            URLitemList = URLitemList.map(item => ({...item, amount: 0, summa: 0}));
            console.log(URLitemList);
            this.itemList = URLitemList; 

            let data = localStorage.getItem('data');
        //         if (data) {
        //             this.itemList = data;
                    
        //         };

            

            // let data1 = localStorage.getItem('data1');
            // if (data1) {
            //     this.itemsSummaAll = data1;
                
            // }


    },


}).mount('#app');

