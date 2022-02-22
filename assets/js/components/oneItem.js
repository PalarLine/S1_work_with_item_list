
const oneItem = {

    data() {
        return {
            counter: '',
            summaPrice: '',
           
        }
    },
    
    mounted() {
        this.counter = this.startValue;
        this.summaPrice = this.summa; 
    },

    props: ['items', 'startValue', 'elementId', 'price', 'summa',],

    template: `
    <div class='p-2 card-group'>
    <div class="card mt-3 shadow shadow-md">
        <img :src="items.image" class="card-img-top p-2" alt="...">
            <div class="card-body d-flex flex-column justify-content-between">
                <h4 class="card-title">{{items.category}}</h4>
                <h5 class="card-text flex-grow-1">{{items.description}}</h5>
                
                <h3 class="card-text text-end">$ {{items.price}}</h3>
            </div>
            <div class="card-footer d-flex justify-content-evenly align-items-stretch ">
                <div class="position-relative">
                    <i class="fas fa-minus position-absolute top-50 start-0 translate-middle pt-1"
                        v-show="counter != 0"
                        @click="(counter--);
                        summaPrice =  (counter * price);
                        $emit('amount-items-minus', counter, elementId, summaPrice);">
                    </i>
                </div>
                <div>
                    <span class="fw-bold fs-4">{{counter}}</span>
                </div>
                <div class="position-relative">
                    <i class="fas fa-plus position-absolute top-50 start-0 translate-middle pt-1"
                        @click="(counter++); 
                        summaPrice =  (counter * price);
                        $emit('amount-items-plus', counter, elementId, summaPrice );">
                    </i>
                </div>
            </div>            
    </div>
    </div>

`
}
export {oneItem};