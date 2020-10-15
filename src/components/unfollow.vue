<template>
    <div>
        
<button @click="unfollowUser">unfollow</button>
    </div>
</template>

<script>
    import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "unfollow-btn",
  props:{
    followId:{
      type:Number,
      required:true
    },
  },
  data() {
      return {
          
      }
  },
  methods: {
    unfollowUser: function() {
      axios
        .request({
          method: "delete",
          url: "https://tweeterest.ml/api/follows",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "FdFMryx4Lk56j3ASVQD8Yw6FlMPVtI2oFBxUBYygBHW56"
          },
          data: {
            loginToken:cookies.get("session"),
            followId:this.followId
          }
        })
        .then({} 
        )
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="sass" scoped>

</style>