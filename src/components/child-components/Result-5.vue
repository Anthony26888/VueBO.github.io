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
            if(this.result[80] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[80] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }            
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(20, 50, 13, 0, 2 * Math.PI);
            if(this.result[81] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[81] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(20, 80, 13, 0, 2 * Math.PI);
            if(this.result[82] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[82] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(20, 110, 13, 0, 2 * Math.PI);
            if(this.result[83] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[83] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();
            

            //line2
            ctx.beginPath();
            ctx.arc(50, 20, 13, 0, 2 * Math.PI);
            if(this.result[84] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[84] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }            
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(50, 50, 13, 0, 2 * Math.PI);
            if(this.result[85] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[85] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(50, 80, 13, 0, 2 * Math.PI);
            if(this.result[86] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[86] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(50, 110, 13, 0, 2 * Math.PI);
            if(this.result[87] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[87] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();


             //line3
             ctx.beginPath();
            ctx.arc(80, 20, 13, 0, 2 * Math.PI);
            if(this.result[88] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[88] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }            
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(80, 50, 13, 0, 2 * Math.PI);
            if(this.result[89] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[89] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(80, 80, 13, 0, 2 * Math.PI);
            if(this.result[90] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[90] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(80, 110, 13, 0, 2 * Math.PI);
            if(this.result[91] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[91] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();


            //line4
            ctx.beginPath();
            ctx.arc(110, 20, 13, 0, 2 * Math.PI);
            if(this.result[92] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[92] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }            
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(110, 50, 13, 0, 2 * Math.PI);
            if(this.result[93] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[93] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(110, 80, 13, 0, 2 * Math.PI);
            if(this.result[94] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[94] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(110, 110, 13, 0, 2 * Math.PI);
            if(this.result[95] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[95] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            
             //line5
             ctx.beginPath();
            ctx.arc(140, 20, 13, 0, 2 * Math.PI);
            if(this.result[96] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[96] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }            
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(140, 50, 13, 0, 2 * Math.PI);
            if(this.result[97] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[97] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(140, 80, 13, 0, 2 * Math.PI);
            if(this.result[98] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[98] == 'green'){
                ctx.fillStyle="green"
            }else{
                ctx.fillStyle="#D3D3D3"
            }          
            ctx.fill()            
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(140, 110, 13, 0, 2 * Math.PI);
            if(this.result[99] == 'red' ){
                ctx.fillStyle="red"
            }else if(this.result[99] == 'green'){
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