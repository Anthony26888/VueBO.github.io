<template lang="">
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">CRON BASE</a>
        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
          <ul class="nav ">
            <li class="nav-item">
              <button type="button" class="btn btn-secondary d-flex flex-column align-items-center justify-content-center">
                <span class="text-account">Acount</span>
                <span class="text-money">${{moneyUser}}</span>
              </button>
            </li>
            <li class="nav-item ms-4">
              <button type="button" class="btn btn-info">Buy USD</button>
            </li>
            <li class="nav-item">
              <a class="nav-link d-flex flex-column align-items-center justify-content-center" href="#" tabindex="-1" aria-disabled="true">
                <i class="bi bi-person-bounding-box"></i>
                <span >Profile</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link d-flex flex-column align-items-center justify-content-center" href="#" tabindex="-1" aria-disabled="true">
                <i class="bi bi-gear"></i>
                <span>Setting</span>
              </a>              
            </li>
            
          </ul>
          
        </div>
      </div>
    </nav>
    
</template>
<script>
//json
import axios from 'axios';
import dataUser from '../account/account.json'
export default {
    data() {
      return {
        moneyUser: 0
      }
    },
    mounted() {
     
    },
    methods: {
      
    },
}
</script>
<style scoped>
    .text-account{
      font-size: 10px;
    }
    .text-money{
      font-size: 14px;
      font-weight: 700;
      
    }

    button{
      width: 130px;
      height: 40px;
      color:var(--white)
    }

    a{
      width: 130px;
      height: 40px;
    }
</style>