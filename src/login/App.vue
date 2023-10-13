<script setup>
import Login from "../components/Login.vue";
import Sign from "../components/SignUp.vue";
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-light">
      <div class="container">
        <img src="../assets/img/logo-eagle.png" alt="">
        <a class="navbar-brand ms-2" href="#">EAGLE BASE</a>
        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
          <ul class="nav ">            
            <li class="nav-item">
              <router-link to="/SignUp"><button class="btn">Sign Up</button></router-link>
            </li>  
            <li class="nav-item">
              <div>
                <router-link to="/"><button class="btn">Login</button></router-link>
              </div>
            </li>                 
          </ul>              
        </div>
      </div>
    </nav>
    
  </header>
  <main>
    <div class="container-fluid bg-login">      
      <div class="row">      
        <div class="col-8 d-flex flex-column flex-wrap w-50 justify-content-center ms-3">
          <h3>{{ title }}</h3>
          <span class="text-muted">{{ description }}</span>
        </div>
        <div class="col-1"></div>
        <div class="col-3 container mx-auto">              
          <div>
            <router-view></router-view>
          </div>
        </div>
    
      </div>
      
    </div>    
  </main>
  
</template>
<script>
  export default {
    data() {
      return {
        title:'The future of Digital Asset Trading',
        description:'Eagle Base là nơi tốt nhất để các nhà giao dịch kiếm được nhiều lợi nhuận. Với giao diện đơn giản mang lại trải nghiệm giao dịch đẳng cấp thế giới, Cronbase cung cấp mọi thứ bạn cần trong một nền tảng!',
      }
    },
  };
</script>

<style scoped>
  .bg-login{
    background-color: var(--white);
    background-size: cover;  
    background-position: center; /* Center the image */
    background-repeat: no-repeat;
    min-height: 100vh;
  }
  img{
    width: 30px;
    height:30px
  }

 
 
</style>