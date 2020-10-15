<template>
  <div>
      <p>password</p>
    <input type="password" v-model="password">
    <h3 @click="deleteUser()">Delete</h3>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "profile-page",
  data() {
    return {
      password:""
    };
  },
  methods: {
    deleteUser: function() {
      axios
        .request({
          method: "delete",
          url: "https://tweeterest.ml/api/users",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "FdFMryx4Lk56j3ASVQD8Yw6FlMPVtI2oFBxUBYygBHW56"
          },
          data: {
        
      loginToken:cookies.get("session"),
      password:this.password,

    
          }
        })
        .then(response => {
          console.log(response)
          //write logic to ensure token was sent
          cookies.remove("loginToken"),
          this.$router.push("/signUp");
        })
        .catch(error => {
          console.log(error);
        });
    
    }
  }
};
</script>

<style lang="sass" scoped>
</style>