<template>
<div>
  <div v-for="following in followings" :key="following.userId">
      <h4>{{following.username}}</h4>
      </div>
      
    <button @click="followingUser">following Users</button>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";


export default {
  name: "following-user",
  
    data() {
      return {
        followings: [],
        userId:cookies.get("user")
      
    }
  },

  methods: {
    followingUser: function() {
      axios
        .request({
          method: "get",
          url: "https://tweeterest.ml/api/follows",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "FdFMryx4Lk56j3ASVQD8Yw6FlMPVtI2oFBxUBYygBHW56"
          },
          params:{
              userId:this.userId
          }
        })
        .then(response => {
          console.log(response);
          this.followings=response.data

          
        })
        .catch(error => {
          console.log(error);
          this.loginStatus = "error";
        });
    }
  }
};
</script>

<style lang="sass" scoped>
</style>