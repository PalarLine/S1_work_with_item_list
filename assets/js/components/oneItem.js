
const oneItem = {

    data() {
        return {
            counter: 0,
            summaPrice: 0,
            

        }
    },
    // computed: {
    //     summaAllItems() {
    //         return this.summaPrice = this.counter * this.price;
    //     }
    // },

    mounted() {
        this.counter = this.startValue;
        this.summaPrice = this.summa;
        
        
    },

    props: ['items', 'startValue', 'elementId', 'price', 'summa'],

    template: `
    <div>
    <div class="card mt-3">
        <img :src="items.image" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title">{{items.category}}</h4>
                <h5 class="card-text">{{items.description}}</h5>
                <h3 class="card-text">$ {{items.price}}</h3>
            </div>
            <div class="card-footer">
                <i class="fas fa-minus"
                    v-if="counter > 0"
                    @click="(counter--);
                    summaPrice = counter * price;
                    $emit('amount-items-minus', counter, elementId, summaPrice);">
                </i>
                <span>{{counter}}</span>
                <i class="fas fa-plus"
                    @click="(counter++) ; 
                    summaPrice = counter * price;
                    $emit('amount-items-plus', counter, elementId, summaPrice );">
                </i>
                </div>
            
    </div>
    </div>

`




}
export {oneItem};