<template lang="">
    <div class="container">
        <div class="group-input">
            <p>Giá trị</p>
            <div class="d-flex flex-row justify-content-center gap-1">
                <button type="button" class="btn btn-outline-secondary">+</button>
                <input type="text">
                <button type="button" class="btn btn-outline-secondary">-</button>
            </div>
            <div class="d-flex flex-row justify-content-between flex-wrap gap-1 mt-2">
                <button type="button" class="btn btn-outline-secondary value p-2">+5</button>
                <button type="button" class="btn btn-outline-secondary value">+10</button>
                <button type="button" class="btn btn-outline-secondary value">+20</button>
                <button type="button" class="btn btn-outline-secondary value">+50</button>
                <button type="button" class="btn btn-outline-secondary value">+100</button>
                <button type="button" class="btn btn-outline-secondary value">All</button>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .container-fluid{
        border: 1px solid black;
        height: 100vh;
    }
    input{
        max-width: 90px;
    }
    
    .value{
        width: 59px;
        height: 36px;
        
    }
</style>