<template lang="">
  <div></div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
        UserName:null,
        MoneyUser:null,
        IDUser:null,
        PositionUser:null,
    };
  },
  mounted() {
    setInterval(()=>{
        this.fetchUser()
        this.$emit('UserName', this.UserName)
        this.$emit('MoneyUser', this.MoneyUser)
        this.$emit('IDUser', this.IDUser)
        this.$emit('PositionUser', this.PositionUser)
    },500)
  },
  methods: {
    fetchUser() {
      const getUser = localStorage.getItem("user");
      const url = `http://localhost:3000/account?user=${getUser}`;
      axios
        .get(url)
        .then((response) => {
          const dataAccount = response.data;
          const Money = dataAccount.map((x) => x.usd);   
          const dataMoney = Number(Money).toFixed(2) 
          const dataUser = dataAccount.map((x) => x.user);
          const dataID = dataAccount.map((x) => x.id);
          const dataPosition = dataAccount.map((x) => x.position)
          this.UserName = dataUser
          this.MoneyUser = dataMoney
          this.IDUser = dataID
          this.PositionUser = dataPosition
        })
        .catch((error) => {
          console.error("Error adding item:", error);
        });
    },
  },
};
</script>
<style lang=""></style>
