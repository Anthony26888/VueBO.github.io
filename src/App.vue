<script setup>
import Chart from './components/Chart.vue'
import Control from './components/Control.vue'
import Navbar from './components/Navbar.vue';

</script>

<template>
  <header>
    <Navbar/>
  </header>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-1"></div>
        <div class="col-9 mt-3">
          <Chart />
        </div>
        <div class="col-2">
          <Control/>
        </div>
      </div>
      
    </div>    
  </main>
  
</template>

<style scoped>

</style>
