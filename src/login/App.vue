<script setup>
import Login from "../components/Login.vue";


  

</script>

<template>
  <header>

  </header>
  <main>
    <div class="container-fluid">      
      <div class="row">      
        <div class="col-8 bg-login"></div>
        <div class="col-4 container ">
          <Login/>
          <router-link to="/Home">Food</router-link><br>
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
    
  };
</script>

<style scoped>
  .bg-login{
    background-color: rgba(57, 73, 171, 0.50);
    backdrop-filter: blur(10px);
    min-height: 100vh;
  }
 
 
</style>