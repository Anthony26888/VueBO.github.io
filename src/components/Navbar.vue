<template lang="">
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <div class="container-fluid">
        <img src="../assets/img/logo-eagle.png" alt="">
        <router-link to="/Trading" class="navbar-brand ms-2">Eagle Base</router-link>   
        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
          <ul class="nav ">            
            <li class="nav-item">
              <div>
                <router-link to="/deposit">
                  <button class="btn"><i class="animation"></i>BUY USD<i class="animation"></i></button>
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
    
</template>
<script>
//json


export default {
    data() {
      return {
      
      }
    },

 

}
</script>
<style scoped>

    @import url('https://fonts.googleapis.com/css2?family=Teko&display=swap');

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
      min-width: 100px;
      border: 0;
      border-radius: 4px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, .1);
      box-sizing: border-box;
      padding: 16px 20px;
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