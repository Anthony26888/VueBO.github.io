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
          class="w-100 mx-auto mt-5 d-flex flex-column needs-validation"
          @submit.prevent="login"
        >
          <span class="title-login mx-auto">Welcome</span>
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
            <div class="valid-feedback"></div>
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
          <span class="invaild" v-show="caution"
            ><i class="bi bi-exclamation-circle me-2"></i>{{ invaild }}</span
          >
          <label for="" class="text-end">
            <a href="">Forgot password?</a>
          </label>
          <button type="submit" class="btn btn-primary mt-3 w-100">Log in</button>
          <label for="" class="text-center text-muted mt-3"> Or </label>
          <div class="d-flex gap-2 mt-3">
            <button type="button" class="btn btn-google w-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M6.98918 14.3777L6.36263 16.7167L4.07258 16.7651C3.3882 15.4957 3 14.0434 3 12.5C3 11.0076 3.36295 9.60025 4.00631 8.36102H4.0068L6.04559 8.7348L6.9387 10.7614C6.75177 11.3063 6.64989 11.8913 6.64989 12.5C6.64996 13.1607 6.76963 13.7937 6.98918 14.3777Z"
                  fill="#FBBB00"
                />
                <path
                  d="M20.8427 10.8187C20.9461 11.3631 21 11.9253 21 12.5C21 13.1443 20.9323 13.7728 20.8032 14.3791C20.3651 16.4422 19.2203 18.2437 17.6344 19.5185L17.6339 19.518L15.066 19.387L14.7025 17.1182C15.7548 16.501 16.5772 15.5353 17.0104 14.3791H12.1979V10.8187H17.0806H20.8427Z"
                  fill="#518EF8"
                />
                <path
                  d="M17.6339 19.5181L17.6344 19.5185C16.0921 20.7583 14.1328 21.5 12 21.5C8.5726 21.5 5.59272 19.5843 4.0726 16.7651L6.9892 14.3777C7.74924 16.4061 9.706 17.8501 12 17.8501C12.986 17.8501 13.9098 17.5835 14.7025 17.1182L17.6339 19.5181Z"
                  fill="#28B446"
                />
                <path
                  d="M17.7446 5.57197L14.829 7.95894C14.0086 7.44615 13.0389 7.14992 11.9999 7.14992C9.65399 7.14992 7.66063 8.66013 6.93866 10.7613L4.00673 8.36098H4.00624C5.50411 5.47307 8.52157 3.5 11.9999 3.5C14.1837 3.5 16.1859 4.27787 17.7446 5.57197Z"
                  fill="#F14336"
                />
              </svg>
              Google
            </button>
            <button type="button" class="btn btn-google w-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
              Github
            </button>
          </div>
          <div class="d-flex justify-content-center mt-3">
            <span class="text-muted">Don't have an account</span>
            <router-link to="/SignUp" class="ms-2">Sign up now</router-link>
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
      invaild: "Username or Password is not correct",
      caution: false,
      UserName: "",
      Pass: "",
    };
  },
  mounted() { },
  methods: {
    login() {
      const url = `http://localhost:3000/account`;
      axios
        .get(url)
        .then((response) => {
          const dataAccount = response.data;
          const user = dataAccount.find(
            (u) => u.user == this.UserName && u.password == this.Pass
          );
          if (user) {
            this.$router.push("/Trading");
            const local = localStorage.setItem("user", this.UserName);
            this.caution = false;
          } else {
            this.caution = true;
          }
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

.invaild {
  color: var(--red);
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
    width: 500px;
    height: 500px;
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
