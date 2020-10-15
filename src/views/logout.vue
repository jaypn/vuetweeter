<template>
  <div>
    
    
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  mounted () {
    this.logout();
  },
  methods: {
    logout: function() {
      axios
        .request({
          method: "delete",
          url: "https://tweeterest.ml/api/login",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "FdFMryx4Lk56j3ASVQD8Yw6FlMPVtI2oFBxUBYygBHW56"
          },
          data: {
            loginToken: cookies.get('session')
          }
        })
        .then(response => {
          //check if login token is sent
          console.log(response);
          cookies.remove("session")

          this.$router.push("/");
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


<style scoped>
</style>