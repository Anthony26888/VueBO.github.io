<template lang="">
    <div class="container-fluid">
        <div class="row justify-content-center g-2">
            <div class="col-3 ">
                <div class="card border-secondary shadow ">                      
                    <div class="card-body row flex-wrap algin-item-center ">
                        <div class="col-3 ">
                            <div v-for="value in item.slice(0,4)">
                                <div  v-if="(value)>0" class="rounded-cirle-green"></div>                             
                                <div v-else class="rounded-cirle-red"></div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div v-for="value in item.slice(4,8)">
                                <div  v-if="(value)>0" class="rounded-cirle-green"></div>                                
                                <div v-else class="rounded-cirle-red"></div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div v-for="value in item.slice(8,12)">
                                <div  v-if="(value)>0" class="rounded-cirle-green"></div>                                
                                <div v-else class="rounded-cirle-red"></div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div v-for="value in item.slice(12,16)">
                                <div  v-if="(value)>0" class="rounded-cirle-green"></div>                                
                                <div v-else class="rounded-cirle-red"></div>
                            </div>
                        </div>       
                    </div> 
                </div>
            </div>            
            <div class="col-3">
                <div class="card border-secondary shadow">                      
                    <div class="card-body row flex-wrap gap-1 algin-item-center">
                        <div class="col-3">
                            <div v-for="value in item.slice(16,20)">
                                <div  v-if="(value)>0" class="rounded-cirle-green"></div>                                
                                <div v-else class="rounded-cirle-red"></div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div v-for="value in item.slice(20,24)">
                                <div  v-if="(value)>0" class="rounded-cirle-green"></div>                               
                                <div v-else class="rounded-cirle-red"></div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div v-for="value in item.slice(24,28)">
                                <div  v-if="(value)>0" class="rounded-cirle-green"></div>                                
                                <div v-else class="rounded-cirle-red"></div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div v-for="value in item.slice(28,32)">
                                <div  v-if="(value)>0" class="rounded-cirle-green"></div>                                
                                <div v-else class="rounded-cirle-red"></div>
                            </div>
                        </div>     
                    </div> 
                </div>
            </div>            
            <div class="col-3">
                <div class="card border-secondary shadow">                      
                    <div class="card-body row flex-wrap gap-1 ">
                        <div class="col-3">
                            <div v-for="value in item.slice(32,36)">
                                <div  v-if="(value)>0" class="rounded-cirle-green"></div>                               
                                <div v-else class="rounded-cirle-red"></div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div v-for="value in item.slice(36,40)">
                                <div  v-if="(value)>0" class="rounded-cirle-green"></div>                                
                                <div v-else class="rounded-cirle-red"></div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div v-for="value in item.slice(40,44)">
                                <div  v-if="(value)>0" class="rounded-cirle-green"></div>                                
                                <div v-else class="rounded-cirle-red"></div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div v-for="value in item.slice(44,48)">
                                <div  v-if="(value)>0" class="rounded-cirle-green"></div>                               
                                <div v-else class="rounded-cirle-red"></div>
                            </div>
                        </div>       
                    </div> 
                </div>
            </div>            
            <div class="col-3">
                <div class="card border-secondary shadow">                      
                    <div class="card-body row flex-wrap">
                        <div class="col-3">
                            <div v-for="value in item.slice(48,52)">
                                <div  v-if="(value)>0" class="rounded-cirle-green"></div>
                                <div  v-else-if="(value)==0" class="rounded-cirle-gray"></div>
                                <div v-else class="rounded-cirle-red"></div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div v-for="value in item.slice(52,56)">
                                <div  v-if="(value)>0" class="rounded-cirle-green"></div>
                                <div  v-else-if="(value)==0" class="rounded-cirle-gray"></div>
                                <div v-else class="rounded-cirle-red"></div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div v-for="value in item.slice(56,60)">
                                <div  v-if="(value)>0" class="rounded-cirle-green"></div>
                                <div  v-else-if="(value)==0" class="rounded-cirle-gray"></div>
                                <div v-else class="rounded-cirle-red"></div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div v-for="value in item.slice(60,64)">
                                <div  v-if="(value)>0" class="rounded-cirle-green"></div>
                                <div  v-else-if="(value)==0" class="rounded-cirle-gray"></div>
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
            item:[],
           
        }
    }, 
    mounted() {        
        this.fetchData()
        setInterval(() =>{
           this.fetchData();
        },1000)
        
    },

    methods: {
        fetchData(){            
            const url= 'https://api.binance.com/api/v3/uiKlines?symbol=BTCUSDT&interval=1m&limit=1'            
            axios
            .get(url)
            .then((response) => {                 
                const price = response.data                
                const total = price.map((x) =>(x[4] - x[1]).toFixed(8) );                
                const runtime = new Date().getSeconds()
                if (runtime ==0){
                    this.item.push(total)
                }
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
        height: 160px;        
    }

    .rounded-cirle-green{
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color:var(--green);
        margin-top: 5px;
    }
    .rounded-cirle-red{
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color:var(--red);
        margin-top: 5px;
    }
    .rounded-cirle-gray{
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color:var(--gray);
        margin-top: 5px;
    }
</style>