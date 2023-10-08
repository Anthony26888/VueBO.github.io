<script setup>
import Chart from './components/Chart.vue'
import Control from './components/Control.vue'
import Navbar from './components/Navbar.vue';
import Result from './components/Result.vue';
import Toolbar from './components/Toolbar.vue';

</script>

<template>
  <header>
    <Navbar/>
  </header>
  <main>
    <div class="container-fluid mt-3">
      <div class="row">
        <div class=" col-sm-12 col-md-1 col-lg-1 col-xxl-1">
          <Toolbar/>
        </div>
        <div class=" col-sm-12 col-md-11 col-lg-8 col-xxl-9 mt-3">
          <Chart />
          <Result/>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-3 col-xxl-2">
          <Control/>
        </div>
       
      </div>
      
      
    </div>    
  </main>
  
</template>

<style scoped>

</style>
