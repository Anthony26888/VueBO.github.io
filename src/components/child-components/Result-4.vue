<template lang="">
    <canvas ref="myCanvas" width="159" height="136"></canvas>    
</template>
<script>
export default {
    props:['result'],   
    mounted() {
        setInterval(() =>{          
           this.drawArc()                 
        },1000)
    },


    methods: {   
        drawArc() {        
            const canvas = this.$refs.myCanvas;
            const ctx = canvas.getContext('2d');

            //line1
            ctx.beginPath();
            ctx.arc(20, 20, 13, 0, 2 * Math.PI);
            if(this.result[60] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[60] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }            
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(20, 50, 13, 0, 2 * Math.PI);
            if(this.result[61] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[61] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(20, 80, 13, 0, 2 * Math.PI);
            if(this.result[62] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[62] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(20, 110, 13, 0, 2 * Math.PI);
            if(this.result[63] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[63] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();
            

            //line2
            ctx.beginPath();
            ctx.arc(50, 20, 13, 0, 2 * Math.PI);
            if(this.result[64] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[64] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }            
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(50, 50, 13, 0, 2 * Math.PI);
            if(this.result[65] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[65] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(50, 80, 13, 0, 2 * Math.PI);
            if(this.result[66] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[66] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(50, 110, 13, 0, 2 * Math.PI);
            if(this.result[67] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[67] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();


             //line3
             ctx.beginPath();
            ctx.arc(80, 20, 13, 0, 2 * Math.PI);
            if(this.result[68] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[68] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }            
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(80, 50, 13, 0, 2 * Math.PI);
            if(this.result[69] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[69] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(80, 80, 13, 0, 2 * Math.PI);
            if(this.result[70] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[70] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(80, 110, 13, 0, 2 * Math.PI);
            if(this.result[71] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[71] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();


            //line4
            ctx.beginPath();
            ctx.arc(110, 20, 13, 0, 2 * Math.PI);
            if(this.result[72] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[72] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }            
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(110, 50, 13, 0, 2 * Math.PI);
            if(this.result[73] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[73] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(110, 80, 13, 0, 2 * Math.PI);
            if(this.result[74] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[74] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(110, 110, 13, 0, 2 * Math.PI);
            if(this.result[75] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[75] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            
             //line5
             ctx.beginPath();
            ctx.arc(140, 20, 13, 0, 2 * Math.PI);
            if(this.result[76] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[76] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }            
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(140, 50, 13, 0, 2 * Math.PI);
            if(this.result[77] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[77] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(140, 80, 13, 0, 2 * Math.PI);
            if(this.result[78] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[78] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(140, 110, 13, 0, 2 * Math.PI);
            if(this.result[79] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[79] == 'green'){
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