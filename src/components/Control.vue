
<template lang="">
    <div class="container">
        <!-- Nav tabs -->
        <ul class="nav nav-tabs nav-fill" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Order</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">History</button>
          </li>          
        </ul>
        
       
        <div class="tab-content">
        <!--Order-->
          <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <div class="container">
                <p>Giá trị</p>
                <div class=" m-auto justify-item-center ">                
                    <div class="btn-group flex-wrap mt-2 justify-content-center w-100" role="group" aria-label="Button group name">
                        <button type="button" class="btn btn-outline-secondary btnValue" v-on:click="Div">-</button>
                        <input type="num" class="text-end w-50" v-model="total">                    
                        <button type="button" class="btn btn-outline-secondary btnValue" v-on:click="Plus">+</button>                
                    </div>             
                    <div class="btn-group flex-wrap mt-2 justify-content-center w-100" role="group" aria-label="Button group name">
                        <button type="button" @click="value(inputData[0])" class="btn btn-outline-secondary value">+{{inputData[0]}}</button>
                        <button type="button" @click="value(inputData[1])" class="btn btn-outline-secondary value">+{{inputData[1]}}</button>
                        <button type="button" @click="value(inputData[2])" class="btn btn-outline-secondary value">+{{inputData[2]}}</button>                                        
                    </div>  
                    <div class="btn-group flex-wrap mt-1 justify-content-center w-100" role="group" aria-label="Button group name">                       
                        <button type="button" @click="value(inputData[3])" class="btn btn-outline-secondary value mt-2">+{{inputData[3]}}</button>
                        <button type="button" @click="value(inputData[4])" class="btn btn-outline-secondary value mt-2">+{{inputData[4]}}</button> 
                        <button type="button" @click="value(inputData[5])" class="btn btn-outline-secondary value mt-2">{{inputData[5]}}</button>                
                    </div>
                </div>            
                <div class="mt-2">
                    <div class="d-flex justify-content-center">
                        <p class="">Profit</p>
                        <p class="text-warning ms-2">95%</p>
                    </div>
                    <h2 class="value-profit text-center justify-content-center">+ ${{ total*1.95 }}</h2>
                </div>
                <vue-countdown :time="time" :interval="100" v-slot="{minutes, seconds}">
                    <div v-if="minutes % 2 ==0" class="mt-2 d-flex flex-column gap-2">
                        <button type="button" class="btn btn-success w-100">BUY</button>
                        <span class="badge text-dark">
                            <p class="text-order">Please Order</p>                                         
                            <p class="text-count">{{seconds}}s</p>         
                        </span>    
                        <button type="button" class="btn btn-danger w-100">SELL</button>    
                    </div>  
                    <div v-else class="mt-2 d-flex flex-column gap-2">
                        <button type="button" class="btn btn-success w-100" disabled>BUY</button>
                        <span class="badge text-dark">
                            <p class="text-order">Waiting Result</p>                                         
                            <p class="text-count">{{seconds}}s</p>         
                        </span>    
                        <button type="button" class="btn btn-danger w-100" disabled>SELL</button>    
                    </div>  
                </vue-countdown>
            </div>
          </div>


          <!--Detail-->
          <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <div class="list-group mt-3">
                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start" aria-current="true">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">BTC/USD</h5>
                        <small class="text-muted "></small>
                    </div>
                    <div class="d-flex w-100 justify-content-between">
                        <p class="mb-1 text-buy">BUY</p>
                        <small class="text-muted ">$100</small>
                    </div>  
                    <div class="d-flex w-100 justify-content-between">
                        <small class="text-muted">03/10/2023 10:25</small>
                        <small class="text-buy">+ $100</small>
                    </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">BTC/USD</h5>
                        <small class="text-muted "></small>
                    </div>
                    <div class="d-flex w-100 justify-content-between">
                        <p class="mb-1 text-sell">SELL</p>
                        <small class="text-muted ">$100</small>
                    </div>  
                    <div class="d-flex w-100 justify-content-between">
                        <small class="text-muted">03/10/2023 10:25</small>
                        <small class="text-sell">$0</small>
                    </div>
                </a>           
            </div>                 
            
          </div>          
        </div>
        
    </div>
</template>
<script>
export default {
    data() {
        const now = new Date();
        const newYear = new Date(now.getFullYear() + 1, 0, 1);
        return {
            total: 0,
            profit: 0,
            inputData: [5, 10, 20, 50, 100, 'All'],
            time: newYear - now,
            
            
        }
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
        width: 55px;
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