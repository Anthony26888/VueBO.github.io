
<template lang="">

    <div class="container mt-5">
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
            
        </ul>
            
            <!-- Tab panes -->
        <div class="tab-content">
            <div class="tab-pane active" id="deposit" role="tabpanel" aria-labelledby="deposit-tab">
                <div class="card text-dark bg-light mb-3 mt-4 ">      
                    <div class="card-body d-flex">
                        <img src="https://cronbase2.net/img/icon-usdt.f667059b.svg" alt=""> 
                        <p class="card-text ms-2">USDT</p><br>
                        <p class="card-text text-muted ms-2">Tether</p> 
                        <span class="text-muted justify-content-end">$0</span>
                        
                    </div>
                    <div class="card-footer text-muted">
                        <div class="d-flex justify-content-around">
                            <div class="d-flex">
                                <img src="../../assets/img/logo/deposit.svg" alt="">
                                <span class="ms-2 text-success">Deposit</span>
                            </div>
                            <div class="d-flex">
                                <img src="../../assets/img/logo/withdraw.svg" alt="">
                                <span class="ms-2 text-danger">Withdraw</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane" id="withdraw" role="tabpanel" aria-labelledby="withdraw-tab"> profile </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            totalUSD: 'Total Balance (USD)',
            buyUSD: 'Deposit',
            sellUSD: 'Withdraw',
            
                  
        }
    },
}
</script>
<style scoped>
    .logo-pay {
        width: 32px;
        height: 32px;
    }
    .card{
        width: 400px;
    }
</style>