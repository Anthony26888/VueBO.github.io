<template lang="">
    <ul class="nav justify-content-around gap-5">
        <li class="nav-item">
            <a class="nav-link active d-flex flex-column text-center" href="#" aria-current="page">
                <i class="bi bi-cash-coin"></i>
                <p>Trading</p>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link d-flex flex-column text-center" href="#" aria-current="page">
                <i class="bi bi-people"></i>
                <p>Vip member</p>
            </a>            
        </li>
        <li class="nav-item">
            <a class="nav-link d-flex flex-column text-center" href="#" aria-current="page">
                <i class="bi bi-wallet2"></i>
                <p>Wallet</p>
            </a>  
        </li>
        <li class="nav-item">
            <a class="nav-link d-flex flex-column text-center" href="#" aria-current="page">
                <i class="bi bi-menu-up"></i>
                <p>Control Panel</p>
            </a> 
        </li>
    </ul>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    a{
        color: black;
    }
    p{
        font-size: 14px;
    }

    i{
        font-size: 20px;
    }
    ul{
        height: 100%;
    }
</style>