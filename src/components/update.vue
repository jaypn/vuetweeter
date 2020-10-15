<template>
  <div>
    
    <p>bio</p>
    <textarea type="text" id ="email-input" v-model="bio"/>
    
    <h3 @click="updateInfo()">Update info</h3>
  </div>
</template>

<script>

import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "update-btn",
  data() {
      return {
          email: "",
          username:"",
          password:"",
          bio:"",
          birthdate:""
      }
  },
  methods: {
    updateInfo: function() {
      axios
        .request({
          method: "patch",
          url: "https://tweeterest.ml/api/users",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "FdFMryx4Lk56j3ASVQD8Yw6FlMPVtI2oFBxUBYygBHW56"
          },
          data: {
            loginToken: cookies.get("session"),
            bio: this.bio
          }
        })
        .then(response => {
          
          console.log(response)
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