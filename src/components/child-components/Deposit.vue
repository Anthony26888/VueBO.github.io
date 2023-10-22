<template lang="">
    <div class="container-fuild total-money p-5">
        <div class="w-100 text-start container">             
            <div class="card-body ">
                <h5 class="text-muted">{{totalUSD}}:</h5>
                <h1> $1,000</h1>              
            </div>
        </div>
    </div>
    <div class="container">
            <!-- Nav tabs -->
        <ul class="nav nav-tabs nav-fill" id="myTab" role="tablist">
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
                    <div class="card-body d-flex justify-content-between">
                        <div class="d-flex">
                            <img src="https://cronbase2.net/img/icon-usdt.f667059b.svg" alt=""> 
                            <div>
                                <p class="card-text ms-2">USDT</p>
                                <p class="card-text text-muted ms-2">Tether</p> 
                            </div>                            
                        </div>
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
                <div class="mt-5">
                    <h3>History Deposit and Withdraw</h3>
                    <!-- Nav tabs -->
                    <ul class="nav" id="myTab" role="tablist">
                      <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
                      </li>
                      
                    </ul>
                    
                    <!-- Tab panes -->
                    <div class="tab-content">
                      <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab"> home </div>
                      <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab"> profile </div>                      
                    </div>
                    
                </div>
            </div>
            <div class="tab-pane" id="withdraw" role="tabpanel" aria-labelledby="withdraw-tab"></div>
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

    .total-money{
        background-color: var(--green1);
    }
</style>