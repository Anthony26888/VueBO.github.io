<template lang="">
    <div class="container">
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
            <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
            
        </div>
        <div class="group-input">
            <p>Giá trị</p>
            <div class="d-flex gap-1 justify-content-between">
                <button type="button" class="btn btn-outline-secondary btnValue" v-on:click="Div">-</button>
                <input type="num" class="text-end w-50" v-model="total">                    
                <button type="button" class="btn btn-outline-secondary btnValue" v-on:click="Plus">+</button>                      
            </div>
            <div class="row mt-2">
                <div class="col col-sm-4 text-center">
                    <button type="button" @click="value(inputData[0])" class="btn btn-outline-secondary value">+{{inputData[0]}}</button>
                    <button type="button" @click="value(inputData[4])" class="btn btn-outline-secondary mt-2 value">+{{inputData[4]}}</button>
                </div>
                <div class="col col-sm-4 text-center">
                    <button type="button" @click="value(inputData[1])" class="btn btn-outline-secondary value">+{{inputData[1]}}</button>
                    <button type="button" @click="value(inputData[3])" class="btn btn-outline-secondary mt-2 value">+{{inputData[3]}}</button>
                </div>  
                <div class="col col-sm-4 text-center">
                    <button type="button" @click="value(inputData[2])" class="btn btn-outline-secondary value">+{{inputData[2]}}</button>
                    <button type="button" @click="value(inputData[5])" class="btn btn-outline-secondary mt-2 value">{{inputData[5]}}</button> 
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
    width: 59px;
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

</style>