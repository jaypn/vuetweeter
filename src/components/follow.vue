<template>
    <div>
        
<button @click="followUser">follow</button>
    </div>
</template>

<script>
    import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "follow-btn",
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
    followUser: function() {
      axios
        .request({
          method: "post",
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
        .then(response =>{
          console.log(response);


        } 
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