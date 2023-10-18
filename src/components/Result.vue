<script setup>
import Result1 from './child-components/Result-1.vue';
import Result2 from './child-components/Result-2.vue';
import Result3 from './child-components/Result-3.vue';
import Result4 from './child-components/Result-4.vue';
import Result5 from './child-components/Result-5.vue';
</script>
<template lang="">
    <div class="container-fluid mt-3">
        <div class="d-flex justify-content-center">
            <div class="ms-4">
                <Result-1 :result="result"/>
            </div>
            <div class="ms-4">
                <Result-2 :result="result"/>
            </div>
            <div class="d-none d-sm-block ms-4">
                <Result-3 :result="result"/>
            </div>
            <div class="d-none d-sm-block ms-4">
                <Result-4 :result="result"/>
            </div>
            <div class="d-none d-sm-block d-md-none d-lg-block d-lg-none d-xl-block ms-4">
                <Result-5 :result="result"/>
            </div>          
        </div>

    </div>
    
</template>
<script>
import axios from 'axios';
export default {
    
    data() {
        return { 
            result:[]
        }
    }, 
    mounted() {
        setInterval(() =>{  
           this.fetchData()      
        },1000)
    },
    methods: {
        fetchData(){            
            const url= 'https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=1'            
            axios
            .get(url)
            .then((response) => {                 
                const price = response.data
                const price1 = price.map((x) =>(x[1]));                
                const price4 = price.map((x) =>(x[4]));
                            
                const runtime = new Date().getSeconds()
                if (runtime ==57){
                    setTimeout(()=>{
                        if(price1<price4){
                            this.result.push('green')
                        }else if(price1>price4){
                            this.result.push('red')
                        }else{
                            this.result.push('gray')
                        }
                    },2000)
                }               
            })    
            .catch(error => {
                console.error('Error adding item:', error);
            });     
        },
    },
}
</script>
<style scoped>


    
</style>