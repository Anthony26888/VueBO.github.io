<template lang="">
  <div class="position-absolute top-50 start-50 translate-middle text-center d-flex flex-column">
    <img class="mx-auto" src="../../assets/img/bg-template.png" alt="" />
    <h1>{{ title }}</h1>
    <span class="text-muted">{{ description }}</span>
    <router-link to="/Login">
      <button class="btn btn-outline-primary mx-auto mt-3">
        Get Started
      </button>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "The future of Digital Asset Trading",
      description:
        "Eagle Base is the best place for traders to make a lot of profits. With a simple interface that delivers a world-class trading experience, Eagle Base offers everything you need in one platform!",
      landingPage: true,
    };
  },
};
</script>
<style scoped>

@media only screen and (min-width: 350px) {
  img {
    width: 200px;
    height: 200px;
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
    width: 500px;
    height: 500px;
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
