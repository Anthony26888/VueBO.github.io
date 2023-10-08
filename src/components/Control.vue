
<template lang="">
    <div class="">
        <div v-show="showAlert" class="position-relative">
            <div class="position-absolute top-0 end-0">
                <div class="alert alert-success d-flex align-items-center" role="alert">
                    <i class="bi bi-check2-circle"></i>
                    <div class="ms-2">
                        <strong> Order Complete</strong> 
                    </div>
                </div>
            </div>
        </div>
      
        <!-- Nav tabs -->
        <ul class="nav nav-tabs nav-fill" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Order</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Status</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="history-tab" data-bs-toggle="tab" data-bs-target="#history" type="button" role="tab" aria-controls="profile" aria-selected="false">History</button>
            </li>          
        </ul>
        
       
        <div class="tab-content">
        <!--Order-->
            <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <form @submit.prevent="order" class="mt-3">
                    <p>Availabel USD: ${{money}}</p>
                    <div class=" m-auto justify-item-center ">                
                        <div class="btn-group flex-wrap mt-2 justify-content-center w-100" role="group" aria-label="Button group name">
                            <button type="button" class="btn btn-outline-secondary btnValue" v-on:click="Div">-</button>
                            <input type="num" class="text-end w-50" v-model="total" >                    
                            <button type="button" class="btn btn-outline-secondary btnValue" v-on:click="Plus">+</button>                
                        </div>             
                        <div class="btn-group flex-wrap mt-2 justify-content-center w-100" role="group" aria-label="Button group name">
                            <button type="button" @click="value(inputData[0])" class="btn btn-outline-secondary value">+{{inputData[0]}}</button>
                            <button type="button" @click="value(inputData[1])" class="btn btn-outline-secondary value">+{{inputData[1]}}</button>
                            <button type="button" @click="value(inputData[2])" class="btn btn-outline-secondary value">+{{inputData[2]}}</button>                                        
                        </div>  
                        <div class="btn-group flex-wrap mt-1 justify-content-center w-100" role="group" aria-label="Button group name">                       
                            <button type="button" @click="value(inputData[3])" class="btn btn-outline-secondary value">+{{inputData[3]}}</button>
                            <button type="button" @click="value(inputData[4])" class="btn btn-outline-secondary value">+{{inputData[4]}}</button> 
                            <button type="button" @click="value(money)" class="btn btn-outline-secondary value">{{inputData[5]}}</button>                
                        </div>
                    </div>            
                    <div class="mt-4">
                        <div class="d-flex justify-content-center">
                            <p>Profit</p>
                            <p class="text-warning ms-2">95%</p>                        
                        </div>
                        <h2 class="value-profit text-center justify-content-center">+ ${{ (total*1.95).toLocaleString() }}</h2>
                    </div>
                    <vue-countdown :time="time" :interval="100" v-slot="{minutes, seconds}">
                        <div v-if="minutes % 2 ==0" class="mt-4 d-flex flex-column gap-2">
                            <button type="submit" class="btn btn-success w-100" >BUY</button>
                            <span class="badge text-dark">
                                <p class="text-order">Please Order</p>                                         
                                <p class="text-count">{{seconds}}s</p>         
                            </span>    
                            <button type="button" @click="alertSell" class="btn btn-danger w-100">SELL</button>    
                        </div>  
                        <div v-else class="mt-2 d-flex flex-column gap-2">
                            <button type="button"  class="btn btn-success w-100" disabled>BUY</button>
                            <span class="badge text-dark">
                                <p class="text-order">Waiting Result</p>                                         
                                <p class="text-count">{{seconds}}s</p>         
                            </span>    
                            <button type="button" class="btn btn-danger w-100" disabled>SELL</button>    
                        </div>  
                    </vue-countdown>
                </form>
            </div>


            <!--Detail-->
            <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div v-for="value in display" class="list-group mt-3">
                    <a href="#" class="list-group-item list-group-item-action flex-column align-items-start" aria-current="true">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">BTC/USD</h5>
                            <small class="text-muted"></small>
                        </div>
                        <div class="d-flex w-100 justify-content-between">
                            <p class="mb-1 text-buy">{{value.order}}</p>
                            <small class="text-muted ">${{value.qty}}</small>
                        </div>  
                        <div class="d-flex w-100 justify-content-between">
                            <small class="text-muted">{{value.timer}}</small>                           
                        </div>
                    </a>
                </div> 
            </div>          
        </div>
    </div>

    
</template>
<script>
import axios from 'axios';
export default {
    data() {
        const now = new Date();
        const newYear = new Date(now.getFullYear() + 1, 0, 1);
        return {
            money:1000,            
            total: 0,            
            profit: 0,
            orderPrice:0,
            inputData: [5, 10, 20, 50, 100, 'All'],
            time: newYear - now,
            showAlert:false,          
            display:[],
            priceCoin:null,
            rightNow:null,   
            sec:null,  
              
        }
    },
    mounted() {
        this.fetchData()
        setInterval(()=>{
            this.fetchData()
            this.timer()
        },1000)
    },

    methods: {
        Plus() {
            this.total++
        },
        Div() {
            this.total--
        },

        value: function (num) {
            return this.total += num;
        },

        order(){            
            this.showAlert =true  
            this.money = this.money - this.total 
                 
            setTimeout(()=>{
                this.showAlert = false
               
            },2000)
            if(this.total){
                this.display.push({qty:this.total, position:this.priceCoin, order:'BUY', timer:this.rightNow})
            }

            const myInterval = setInterval(() =>{
                const minute = new Date().getMinutes()
                const second = new Date().getSeconds()
                if ((minute%2)==0 && second ==57){                
                    if(this.priceCoin>0){
                        setTimeout(()=>{
                            this.money = this.money + this.total*1.95
                            this.display.splice(0,10)
                            clearInterval(myInterval)
                           
                        },2000)
                        
                    }
                    else{
                        setTimeout(()=>{
                            this.money = this.money + 10
                            this.display.splice(0,10)
                            clearInterval(myInterval)
                            
                        },2000)
                    }
                }  
                console.log(this.priceCoin,minute,second) 
            },1000)


            
            
            console.log(this.orderPrice)
            console.log(this.priceCoin)
            
            
            
            
        },

        timer(){
            const time = new Date()          
            const hours = time.getHours()
            const minutes = time.getMinutes(2)
            const seconds = time.getSeconds(2)
            const timeNow = hours+':'+minutes+':'+seconds
            this.rightNow = timeNow
            this.sec = seconds
        },

        alertSell(){
            this.showAlert =true
            setTimeout(()=>{
                this.showAlert = false
            },5000)
        },
        
        fetchData(){            
            const url= 'https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=1'            
            axios
            .get(url)
            .then((response) => {                 
                const price = response.data
                const price1 = price.map((x) =>(x[1]));                
                const price4 = price.map((x) =>(x[4]));
                const total = (price4 - price1).toLocaleString()              
                this.priceCoin = total     
            })    
            .catch(error => {
                console.error('Error adding item:', error);
            });       
        }

    },
}
</script>
<style scoped>
    .container-fluid {
        border: 1px solid black;
        height: 100vh;
    }

    input {
        width: 100%;
    }

    .value {
        width: 50px;
        font-size: 14px;
    }

    .value-profit {
        font-size: 30px;
        color: var(--green);
    }

    .btn-success {
        background-color: var(--green);
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
    }

    .btn-danger {
        background-color: var(--red);
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
    }

    .text-order{
        font-size: 14px;

    }
    .text-count{
        font-size: 18px;
        font-weight: 700;
    }

    .badge{
        background-color: var(--bg-color);
        height:70px
    }

    .text-buy{
        color: var(--green);
    }

    .text-sell{
        color: var(--red);
    }


</style>