<template>
  <div>
    <h3 @click="unlikeAtweet(tweet.tweetId)"><img width="10" height="10" src="@/assets/like.svg" alt=""></h3>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "unlike-tweet",
  data() {
    return {};
  },
  methods: {
    unlikeAtweet: function() {
      axios
        .request({
          method: "delete",
          url: "https://tweeterest.ml/api/tweet-likes",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "FdFMryx4Lk56j3ASVQD8Yw6FlMPVtI2oFBxUBYygBHW56"
          },
          data: {
            loginToken: cookies.get("session"),
            tweetId: this.tweetId
          }
        })
        .then(response => {
          cookies.remove("loginToken", response.data);
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