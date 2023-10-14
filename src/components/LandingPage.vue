<script setup>
  import NavbarLanding from './NavbarLanding.vue';
</script>
<template>
  <NavbarLanding/>
  <main>
    <div class="container-fluid">      
      <div class="position-absolute top-50 start-50 translate-middle text-center d-flex flex-column">
        <h1>{{ title }}</h1>
        <span class="text-muted">{{ description }}</span>
        <router-link to="/Login"><button class="btn btn-outline-primary w-25 mx-auto mt-3">Get Started</button></router-link>
      </div>      
    </div>    
  </main>
  
</template>
<script>

export default {
    data() {
        return {
            title:'The future of Digital Asset Trading',
            description:'Eagle Base is the best place for traders to make a lot of profits. With a simple interface that delivers a world-class trading experience, Eagle Base offers everything you need in one platform!',
        }
    },
};
</script>

<style scoped>
</style>