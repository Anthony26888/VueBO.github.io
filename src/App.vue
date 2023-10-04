<script setup>
import Chart from './components/Chart.vue'
import Control from './components/Control.vue'
import Navbar from './components/Navbar.vue';
import Toolbar from './components/Toolbar.vue';

</script>

<template>
  <header>
    <Navbar/>
  </header>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class=" col-sm-12 col-md-1 col-lg-1">
          <Toolbar/>
        </div>
        <div class=" col-sm-12 col-md-11 col-lg-9 mt-3">
          <Chart />
        </div>
        <div class="col-sm-12 col-md-12 col-lg-2">
          <Control/>
        </div>
      </div>
      
    </div>    
  </main>
  
</template>

<style scoped>

</style>
