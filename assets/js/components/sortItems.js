
const sortItem = {

    data() {
        return {
            // counter: '',
            // summaPrice: '',
            sortArr: [],
           
        }
    },
    
    mounted() {
        // this.counter = this.startValue;
        // this.summaPrice = this.summa; 
        this.sortArr = this.sortitems;
        

    },
    computed: {

        sortItemUp() {
            this.sortArr.sort((a, b) => a.price - b.price);
        },
        sortItemDown() {
            
            this.sortArr.sort((a, b) => b.price - a.price);

        }


    }, 

    props: ['sortitems'],

    template: `
    <div class='p-2 card-group'>
    <div class="card mt-3 shadow shadow-md">
        <img :src="sortitems.image" class="card-img-top p-2" alt="...">
            <div class="card-body d-flex flex-column justify-content-between">
                <h4 class="card-title">{{sortitems.category}}</h4>
                <h5 class="card-text flex-grow-1">{{sortitems.description}}</h5>
                
                <h3 class="card-text text-end">$ {{sortitems.price}}</h3>
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
export {sortItem};