<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">        
        <router-link to="/" class="navbar-brand">
          <img src="../assets/img/logo-eagle.png" alt="" />
          <span class="logo-text ms-2">Eagle Base</span>
        </router-link>
        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
          <ul class="nav ">
            <li class="nav-item">
              <router-link to="/SignUp"><button class="btn">Sign Up</button></router-link>
            </li>
            <li class="nav-item">
              <div>
                <router-link to="/Login"><button class="btn">Login</button></router-link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <main>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
  </main>
</template>
<script>

export default {
  data() {
    return {
      title: 'The future of Digital Asset Trading',
      description: 'Eagle Base is the best place for traders to make a lot of profits. With a simple interface that delivers a world-class trading experience, Eagle Base offers everything you need in one platform!',
      landingPage:true,
    }
  },
};
</script>

<style scoped>
    img{
        width: 30px;
        height:30px
    }
    .logo-text{
      font-size: 30px;
      margin-left: 10px;
      font-weight: 700;
      background: -webkit-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
</style>