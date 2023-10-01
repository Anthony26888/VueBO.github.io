<template lang="">
    <div class="container">
        <div class="group-input">
            <p>Giá trị</p>
            <div class="d-flex flex-row justify-content-center gap-2">
                <button type="button" class="btn btn-outline-secondary" v-on:click="Div">-</button>
                <input type="num" class="text-end" v-model="NumValue">
                <button type="button" class="btn btn-outline-secondary" v-on:click="Plus">+</button>    
                            
            </div>
            <div class=" d-flex flex-column mt-3 ms-5 gap-2">
                <div class="row gap-2">
                    <button type="button" v-on:click="getValue" class="btn btn-outline-secondary value">+{{inputData[0]}}</button>
                    <button type="button" class="btn btn-outline-secondary value">+{{inputData[1]}}</button>
                    <button type="button" class="btn btn-outline-secondary value">+{{inputData[2]}}</button>
                </div>  
                <div class="row gap-2">
                    <button type="button" class="btn btn-outline-secondary value">+{{inputData[3]}}</button>
                    <button type="button" class="btn btn-outline-secondary value">+{{inputData[4]}}</button>
                    <button type="button" class="btn btn-outline-secondary value">{{inputData[5]}}</button>      
                </div> 
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            NumValue:0,
            inputData: [5, 10, 20, 50, 100, 'All' ]
        }
    },
    methods: {
        Plus(){
            this.NumValue++
        },
        Div(){            
            this.NumValue--           
        },
        getValue(){
            this.NumValue = inputData[0]
        }
    },
}
</script>
<style scoped>
    .container-fluid{
        border: 1px solid black;
        height: 100vh;
    }
    input{
        max-width: 100px;
    }
    
    .value{
        width: 59px;
        height: 36px;
        align-items: center;   
    }
  
</style>