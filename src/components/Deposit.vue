<script setup>
import Navbar from '../components/Navbar.vue';
</script>
<template lang="">
    <header>
        <Navbar/>
    </header>
    <main>
        <div class="container">
            <div class="w-100 text-start total-money">             
              <div class="card-body">
                <h4 class="text-muted">Total Balance (USD): $1,000</h4>              
              </div>
            </div>


            <!-- Nav tabs -->
            <ul class="nav nav-tabs mt-5 nav-fill" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true"><i class="bi bi-cash-coin me-2"></i>{{buyUSD}}</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><i class="bi bi-bank me-2"></i>{{sellUSD}}</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false"><i class="bi bi-clock-history me-2"></i>{{history}}</button>
            </li>
            </ul>
            
            <!-- Tab panes -->
            <div class="tab-content">
            <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab"> home </div>
            <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab"> profile </div>
            <div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab"> messages </div>
            </div>
            </div>
        
    </main>
</template>
<script>
export default {
    data() {
        return {
            buyUSD: 'Deposit',
            sellUSD: 'Withdraw',
            history: 'History',
        }
    },
}
</script>
<style scoped>
</style>