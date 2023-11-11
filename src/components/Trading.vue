<script setup>
import AccountApi from "./components-fetch-api/Fetch-Account.vue"
</script>
<template lang="">
  <header>
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <div class="container-fluid">
        <router-link to="/Trading" class="navbar-brand">
          <img src="../assets/img/logo-eagle.png" alt="" />
          <span class="logo-text">Eagle Base</span>
        </router-link>
        <button
          class="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="collapsibleNavId"
        >
          <ul class="nav gap-1">
            <li class="nav-item">
              <div class="border rounded wallet d-flex flex-column">
                <span class="text-real-acc text-light">Real Account</span>
                <b class="text-center text-light fw-bolder"
                  >${{ Money }}</b
                >
              </div>
            </li>

            <li class="nav-item">
              <router-link to="/Trading/Deposit">
                <button class="button ms-3">
                  <i class="animation"></i>Deposit<i class="animation"></i>
                </button>
              </router-link>
            </li>
            
            <li class="nav-item">
              <router-link to="/Login">
                <button class="btn btn-light ms-3" @click="logout">
                  Log Out<i class="bi-box-arrow-right ms-2"></i>
                </button>
              </router-link>
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
  <AccountApi @MoneyUser="FetchMoney"/>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      Money: 0,    
    };
  },
  methods: {
    FetchMoney(data){
      this.Money = data
    },
    logout(){
      localStorage.removeItem("user");
    }
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Teko&display=swap");

.wallet {
  width: 144px;
  height: 50px;
  background-color: var(--gray1);
  cursor: pointer;
}

.text-real-acc {
  font-size: 12px;
  margin-left: 5px;
}

b {
  font-size: 20px;
}

.logo-text {
  font-size: 30px;
  margin-left: 10px;
  font-weight: 700;
  background: -webkit-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

img {
  width: 30px;
  height: 30px;
}

.navbar-brand {
  font-family: "Teko", sans-serif;
  font-size: 25px;
}
.text-account {
  font-size: 10px;
}
.text-money {
  font-size: 14px;
  font-weight: 700;
}

.button {
  width: 130px;
  height: 40px;
  color: var(--white);
}

a {
  width: 130px;
  height: 40px;
}
.button {
  outline: 0;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  background: #40b3a2;
  width: 144px;
  height: 50px;
  border: 0;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  color: #fff;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  overflow: hidden;
  cursor: pointer;
}

.button:hover {
  opacity: 0.95;
}

.button .animation {
  border-radius: 100%;
  animation: ripple 0.6s linear infinite;
}

@keyframes ripple {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1),
      0 0 0 20px rgba(255, 255, 255, 0.1), 0 0 0 40px rgba(255, 255, 255, 0.1),
      0 0 0 60px rgba(255, 255, 255, 0.1);
  }

  100% {
    box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.1),
      0 0 0 40px rgba(255, 255, 255, 0.1), 0 0 0 60px rgba(255, 255, 255, 0.1),
      0 0 0 80px rgba(255, 255, 255, 0);
  }
}
</style>
