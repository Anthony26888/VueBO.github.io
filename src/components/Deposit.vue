<script setup>
import Navbar from './Navbar.vue';
import DepositTab from './DepositTab.vue'
</script>
<template lang="">
    <header>
        <Navbar/>
    </header>
    <main>
        <div class="container">
            <div class="w-100 text-start total-money mt-3">             
              <div class="card-body">
                <h4 class="text-muted">{{totalUSD}}: $1,000</h4>              
              </div>
            </div>


            <!-- Nav tabs -->
            <ul class="nav nav-tabs mt-5 nav-fill" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#deposit" type="button" role="tab" aria-controls="home" aria-selected="true"><i class="bi bi-cash-coin me-2"></i>{{buyUSD}}</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#withdraw" type="button" role="tab" aria-controls="profile" aria-selected="false"><i class="bi bi-bank me-2"></i>{{sellUSD}}</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="messages-tab" data-bs-toggle="tab" data-bs-target="#history" type="button" role="tab" aria-controls="messages" aria-selected="false"><i class="bi bi-clock-history me-2"></i>{{history}}</button>
            </li>
            </ul>
            
            <!-- Tab panes -->
            <div class="tab-content">
            <div class="tab-pane active" id="deposit" role="tabpanel" aria-labelledby="deposit-tab">
                <DepositTab/>
            </div>
            <div class="tab-pane" id="withdraw" role="tabpanel" aria-labelledby="withdraw-tab"> profile </div>
            <div class="tab-pane" id="history" role="tabpanel" aria-labelledby="history-tab"> messages </div>
            </div>
            </div>
        
    </main>
</template>
<script>
export default {
    data() {
        return {
            totalUSD:'Total Balance (USD)',
            buyUSD: 'Deposit',
            sellUSD: 'Withdraw',
            history: 'History',
            depositList:[
                {icon:'bi bi-bank2',title:'Bank Transfer'},
                {icon:'bi bi-qr-code-scan',title:'QR Bank'},
                {icon:'./src/assets/img/logo/momo-pay.svg',title:'Momo Pay'},
                {icon:'./src/assets/img/logo/zalo-pay.svg',title:'Momo Pay'},
            ]
        }
    },
}
</script>
<style scoped>
.logo-pay{
    width:32px;
    height:32px;
}

</style>