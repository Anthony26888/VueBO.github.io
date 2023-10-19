<template lang="">
    <div class="card text-dark bg-light mb-3 mt-4 ">      
        <div class="card-body d-flex ">
            <img src="https://cronbase2.net/img/icon-usdt.f667059b.svg" alt=""> 
            <p class="card-text ms-2">USDT</p><br>
            <p class="card-text text-muted ms-2">Tether</p>         
            
        </div>
        <div class="card-footer text-muted">
            <div class="d-flex">

            </div>
        </div>
    </div>
    
</template>
<script>
export default {
    data() {
        return {
            depositList: [
                { icon: 'bi bi-bank2', title: 'Bank Transfer' },
                { icon: 'bi bi-qr-code-scan', title: 'QR Bank' },
                { icon: '../src/assets/img/logo/momo-pay.svg', title: 'Momo Pay' },
                { icon: '../src/assets/img/logo/zalo-pay.svg', title: 'Zalo Pay' },
            ]
        }
    },
}
//https://cronbase2.net/img/icon-usdt.f667059b.svg
//https://cronbase2.net/img/icon-deposit.afd6195e.svg
</script>
<style scoped>
    .card{
        width: 400px;
    }
    
</style>
