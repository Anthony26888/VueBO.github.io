<template lang="">
    <div class="container">
        <div class="row justify-content-start g-2">
            <div class="col-12 w-100">
                <div class="card border-secondary shadow">                      
                    <div class="card-body d-flex flex-row flex-wrap gap-1">                        
                        <div v-for="value in item.slice(0,100)">
                            <div  v-if="(value)>0" class="rounded-cirle-green"></div>
                            <div  v-else-if="(value)==0" class="rounded-cirle-gray"></div>
                            <div v-else class="rounded-cirle-red"></div>
                        </div>   
                    </div> 
                </div>
            </div>
            
        </div>
    </div>
    
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {               
            item:[],
           
        }
    }, 
    mounted() {
        
        this.fetchData()
        setInterval(() =>{
           this.fetchData();
        },6000)
        
    },

    methods: {
        fetchData(){            
            const url= 'https://api.binance.com/api/v3/uiKlines?symbol=BTCUSDT&interval=1m&limit=1'            
            axios
            .get(url)
            .then((response) => {                 
                const price = response.data                
                const total = price.map((x) =>x[4] - x[1] );
                this.item.push(total)
                
                
            })    
            .catch(error => {
                console.error('Error adding item:', error);
            });     
        }
    },
}
</script>
<style scoped>
    .card{
       
        height: 200px;
        
    }

    .rounded-cirle-green{
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color:var(--green);
    }
    .rounded-cirle-red{
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color:var(--red);
    }
    .rounded-cirle-gray{
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color:var(--gray);
    }
</style>