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
            if(this.result[40] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[40] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }            
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(20, 50, 13, 0, 2 * Math.PI);
            if(this.result[41] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[41] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(20, 80, 13, 0, 2 * Math.PI);
            if(this.result[42] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[42] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(20, 110, 13, 0, 2 * Math.PI);
            if(this.result[43] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[43] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();
            

            //line2
            ctx.beginPath();
            ctx.arc(50, 20, 13, 0, 2 * Math.PI);
            if(this.result[44] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[44] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }            
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(50, 50, 13, 0, 2 * Math.PI);
            if(this.result[45] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[45] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(50, 80, 13, 0, 2 * Math.PI);
            if(this.result[46] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[46] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(50, 110, 13, 0, 2 * Math.PI);
            if(this.result[47] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[47] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();


             //line3
             ctx.beginPath();
            ctx.arc(80, 20, 13, 0, 2 * Math.PI);
            if(this.result[48] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[48] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }            
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(80, 50, 13, 0, 2 * Math.PI);
            if(this.result[49] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[49] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(80, 80, 13, 0, 2 * Math.PI);
            if(this.result[50] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[50] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(80, 110, 13, 0, 2 * Math.PI);
            if(this.result[51] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[51] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();


            //line4
            ctx.beginPath();
            ctx.arc(110, 20, 13, 0, 2 * Math.PI);
            if(this.result[52] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[52] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }            
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(110, 50, 13, 0, 2 * Math.PI);
            if(this.result[53] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[53] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(110, 80, 13, 0, 2 * Math.PI);
            if(this.result[54] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[54] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(110, 110, 13, 0, 2 * Math.PI);
            if(this.result[55] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[55] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            
             //line5
             ctx.beginPath();
            ctx.arc(140, 20, 13, 0, 2 * Math.PI);
            if(this.result[56] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[56] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }            
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(140, 50, 13, 0, 2 * Math.PI);
            if(this.result[57] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[57] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(140, 80, 13, 0, 2 * Math.PI);
            if(this.result[58] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[58] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(140, 110, 13, 0, 2 * Math.PI);
            if(this.result[59] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[59] == 'green'){
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