<template lang="">
  <div class="container">
    <div class="row">
    <div class="d-md-none d-lg-block d-none d-sm-block d-sm-none d-md-block col-lg-6 d-flex flex-column flex-wrap w-50 justify-content-center ms-3 border-title mx-auto">
      <img class="mx-auto" src="../../assets/img/bg-template.png" alt="">
      <h3>{{ title }}</h3>
      <span class="text-muted description">{{ description }}</span>
    </div> 
    <div class="col-xs-12 col-lg-5 container mx-auto">
      <form
        class="w-100 mx-auto mt-5 d-flex flex-column"
        @submit.prevent="signUp"
      >
        <span class="title-login mx-auto">Sign Up</span>
        <div class="form-floating mb-3 mt-5">
          <input
            type="text"
            class="form-control"
            name="formId1"
            id="formId1"
            placeholder=""
            v-model="UserName"
            required
          />
          <label for="formId1">Username</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="password"
            class="form-control"
            name="formId1"
            id="formId1"
            placeholder=""
            v-model="Pass"
            required
          />
          <label for="formId1">Password</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="password"
            class="form-control"
            name="formId1"
            id="formId1"
            placeholder=""
            v-model="ConfirmPass"
            required
          />
          <label for="formId1">Confirm Password</label>
        </div>
        <div class="invalid-feedback">Confirm Password not correct.</div>
        <button type="submit" class="btn btn-primary mt-3">Log in</button>

        <div class="d-flex justify-content-center mt-3">
          <span class="text-muted">Go Back</span>
          <router-link to="/Login" class="ms-2">Log in</router-link>
        </div>
      </form>
    </div>
  </div>
</div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "The future of Digital Asset Trading",
      description:
        "Eagle Base is the best place for traders to make a lot of profits. With a simple interface that delivers a world-class trading experience, Eagle Base offers everything you need in one platform!",
      UserName: "",
      Pass: "",
      ConfirmPass: "",
    };
  },
  methods: {
    signUp() {
      const url = `http://localhost:3000/account`;
      axios
        .post(url, {
          user: this.UserName,
          password: this.Pass,
          usd: "0",
          history: [],
        })
        .then((response) => {
          console.log("success", response);
        })
        .catch((error) => {
          console.error("Error adding item:", error);
        });
    },
  },
};
</script>
<style scoped>
.title-login {
  font-family: Open Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  justify-content: center;
}

.btn-google {
  border-color: var(--gray);
}

.btn-google:hover {
  border-color: var(--blue);
}

@media only screen and (min-width: 350px) {
  img {
    width: 300px;
    height: 300px;
  }
}

@media only screen and (min-width: 400px) {
  img {
    width: 300px;
    height: 300px;
  }
}

@media only screen and (min-width: 600px) {
  img {    
    width: 300px;
    height: 300px;
  }
}

@media only screen and (min-width: 900px) {
  img {
    width: 500px;
    height: 500px;
  }
}

@media only screen and (min-width: 1000px) {
  img {
    width: 500px;
    height: 500px;
  }
}

@media only screen and (min-width: 1200px) {
  img {
    width: 400px;
    height: 400px;
  }
}

@media only screen and (min-width: 1350px) {
  img {
    width: 500px;
    height: 500px;
  }
}

@media only screen and (min-width: 1600px) {
  img {
    width: 500px;
    height: 500px;
  }
}

@media only screen and (min-width: 1900px) {
  img {
    width: 500px;
    height: 500px;
  }
}
</style>
