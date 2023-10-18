<script setup>
import Chart from '../components/Chart.vue'
import Control from '../components/Control.vue'
import Result from '../components/Result.vue';
</script>
<template lang="">
    <header>
      <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <div class="container-fluid">          
          <router-link to="/Trading" class="navbar-brand ms-2">
            <img src="../assets/img/logo-eagle.png" alt="">
            <span class="logo-text">Eagle Base</span>
          </router-link>   
          <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
            <ul class="nav gap-3">
              <li class="nav-item">
                <div class="border rounded wallet d-flex flex-column">
                  <span class="text-real-acc text-light">Real Account</span>
                  <b class="text-center text-light fw-bolder">${{Number(Money).toLocaleString()}}</b>
                </div>
              </li>     
                      
              <li class="nav-item">
                <div>
                  <router-link to="/deposit">
                    <button class="btn"><i class="animation"></i>Deposit<i class="animation"></i></button>
                  </router-link>
                </div>
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
    </header>
    <main>
    <div class="container-fluid mt-3">
      <div class="row">
          <div class=" col-sm-12 col-md-12 col-lg-8 col-xl-9 mt-3">
            <Chart />
            <Result/>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-4 col-xl-3">
            <Control @sendMoney = "handleDataFromChild"/>
          </div>       
      </div>
      
    </div>    
  </main>
</template>
<script>
export default {
  data() {
    return {
      Money:0,
    }
  },
 
  methods: {
    
    handleDataFromChild(data) {  
      this.Money = data; 
    }
  },
}
</script>
<style scoped>
    
    @import url('https://fonts.googleapis.com/css2?family=Teko&display=swap');

    .wallet{
      width: 144px;
      height: 50px;
      background-color: var(--gray1);
      cursor: pointer;
    }

    .text-real-acc{
      font-size: 12px; 
      margin-left: 5px;
    }

    b{
      font-size: 20px;
    }

    .logo-text{
      font-size: 30px;
      margin-left: 10px;
      font-weight: 700;
    }

    img{
      width: 30px;
      height:30px
    }

    .navbar-brand{
      font-family: 'Teko', sans-serif;
      font-size: 25px;
    }
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
    .btn {
      outline: 0;
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      background: #40B3A2;
      width: 144px;
      height: 50px;
      border: 0;
      border-radius: 4px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, .1);
      box-sizing: border-box;
     
      color: #fff;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 1.2px;
      text-transform: uppercase;
      overflow: hidden;
      cursor: pointer;
    }

    .btn:hover {
      opacity: 0.95;
    }

    .btn .animation {
      border-radius: 100%;
      animation: ripple 0.6s linear infinite;
    }

    @keyframes ripple {
      0% {
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1), 0 0 0 20px rgba(255, 255, 255, 0.1), 0 0 0 40px rgba(255, 255, 255, 0.1), 0 0 0 60px rgba(255, 255, 255, 0.1);
      }

      100% {
        box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.1), 0 0 0 40px rgba(255, 255, 255, 0.1), 0 0 0 60px rgba(255, 255, 255, 0.1), 0 0 0 80px rgba(255, 255, 255, 0);
      }
    }
</style>