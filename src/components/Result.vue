<template lang="">
    <div class="container">
        <div class="row justify-content-center align-items-center g-2">
            <div class="col">
                <div class="card border-secondary shadow">                  
                    <div  class="card-body d-flex flex-wrap gap-1">                        
                        <div v-for="value in item.slice(0,20)">
                            <div  v-if="(value[4]-value[1])>0" class="rounded-cirle-green"></div>
                            <div  v-else-if="(value[4]-value[1])==0" class="rounded-cirle-gray"></div>
                            <div v-else class="rounded-cirle-red"></div>
                        </div>   
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card border-secondary shadow">                  
                    <div class="card-body d-flex flex-wrap gap-1">
                        <div v-for="value in item.slice(20,40)">
                            <div  v-if="value>0" class="rounded-cirle-green"></div>
                            <div v-else class="rounded-cirle-red"></div>
                        </div>                
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card border-secondary shadow">                  
                    <div class="card-body d-flex flex-wrap gap-1">
                        <div class="card-body d-flex flex-wrap gap-1">
                        <div v-for="value in item.slice(40,80)">
                            <div  v-if="value>0" class="rounded-cirle-green"></div>
                            <div v-else class="rounded-cirle-red"></div>
                        </div>                
                    </div>                   
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card border-secondary shadow">                  
                    <div class="card-body d-flex flex-wrap gap-1">
                        <div class="card-body d-flex flex-wrap gap-1">
                        <div v-for="value in item.slice(80,120)">
                            <div  v-if="value>0" class="rounded-cirle-green"></div>
                            <div v-else class="rounded-cirle-red"></div>
                        </div>                
                    </div>                    
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card border-secondary shadow">                  
                    <div class="card-body d-flex flex-wrap gap-1">
                        <div class="card-body d-flex flex-wrap gap-1">
                        <div v-for="value in item.slice(120,160)">
                            <div  v-if="value>0" class="rounded-cirle-green"></div>
                            <div v-else class="rounded-cirle-red"></div>
                        </div>                
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
               
            item:[]
        }
    }, 
    created() {
        this.fetchData()
        setInterval(() =>{
            this.fetchData();
        },59999)
    },
    methods: {
        fetchData(){            
            const url= 'https://api.binance.com/api/v3/uiKlines?symbol=BTCUSDT&interval=1m&limit=1'
            axios
            .get(url)
            .then((response) => {                 
                const price = response.data
                this.item = price
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
        width: 180px;
        height: 140px;
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