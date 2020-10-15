<template>
  <div>
    <img src="data:image/png;base64,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" alt="">
    <h1>Log in Twitter</h1>
    <p>email</p>
    <input type="text" id="email-input" v-model="email" />
    <p>password</p>
    <input type="password" id="password-input" v-model="password" />
    <h2 @click="loginUser">login</h2>
    <div>
      <p>forgot password?</p>
      <router-link to="/SignUp">Sign Up</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    loginUser: function() {
      axios
        .request({
          method: "post",
          url: "https://tweeterest.ml/api/login",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "FdFMryx4Lk56j3ASVQD8Yw6FlMPVtI2oFBxUBYygBHW56"
          },
          data: {
            email: this.email,
            password: this.password
          }
        })
        .then(response => {
          //check if login token is sent
          console.log(response);
          cookies.set("user",response.data.userId)

          cookies.set("session", response.data.loginToken);
          this.$router.push("/home");
        })
        .catch(error => {
          //show user login failure
          console.log(error);
          this.loginStatus = "error";
        });
    }
  }
};
</script>

<style lang="sass" scoped>
</style>