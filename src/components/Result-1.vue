<template lang="">
    <canvas ref="myCanvas" width="159" height="136"></canvas>
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
           this.drawArc()  
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
                    },2500)
                }               
            })    
            .catch(error => {
                console.error('Error adding item:', error);
            });     
        },

        drawArc() {        
            const canvas = this.$refs.myCanvas;
            const ctx = canvas.getContext('2d');

            //line1
            ctx.beginPath();
            ctx.arc(20, 20, 13, 0, 2 * Math.PI);
            if(this.result[0] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[0] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }            
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(20, 50, 13, 0, 2 * Math.PI);
            if(this.result[1] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[1] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(20, 80, 13, 0, 2 * Math.PI);
            if(this.result[2] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[2] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(20, 110, 13, 0, 2 * Math.PI);
            if(this.result[3] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[3] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();
            

            //line2
            ctx.beginPath();
            ctx.arc(50, 20, 13, 0, 2 * Math.PI);
            if(this.result[4] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[4] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }            
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(50, 50, 13, 0, 2 * Math.PI);
            if(this.result[5] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[5] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(50, 80, 13, 0, 2 * Math.PI);
            if(this.result[6] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[6] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(50, 110, 13, 0, 2 * Math.PI);
            if(this.result[7] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[7] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();


             //line3
             ctx.beginPath();
            ctx.arc(80, 20, 13, 0, 2 * Math.PI);
            if(this.result[8] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[8] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }            
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(80, 50, 13, 0, 2 * Math.PI);
            if(this.result[9] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[9] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(80, 80, 13, 0, 2 * Math.PI);
            if(this.result[10] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[10] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(80, 110, 13, 0, 2 * Math.PI);
            if(this.result[11] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[11] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();


            //line4
            ctx.beginPath();
            ctx.arc(110, 20, 13, 0, 2 * Math.PI);
            if(this.result[12] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[12] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }            
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(110, 50, 13, 0, 2 * Math.PI);
            if(this.result[13] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[13] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(110, 80, 13, 0, 2 * Math.PI);
            if(this.result[14] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[14] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(110, 110, 13, 0, 2 * Math.PI);
            if(this.result[15] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[15] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            
             //line5
             ctx.beginPath();
            ctx.arc(140, 20, 13, 0, 2 * Math.PI);
            if(this.result[16] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[16] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }            
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(140, 50, 13, 0, 2 * Math.PI);
            if(this.result[17] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[17] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(140, 80, 13, 0, 2 * Math.PI);
            if(this.result[18] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[18] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(140, 110, 13, 0, 2 * Math.PI);
            if(this.result[19] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[19] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            
        },
    },
}
</script>
<style lang="">
    
</style>