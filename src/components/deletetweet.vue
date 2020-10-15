<template>
  <div>
    <i @click="deleteTweet(tweetObject.tweetId)" v-if="isOwned" class="far fa-trash-alt"></i>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "delete-tweet",
  props: {
    tweetObject: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isOwned: cookies.get("user") == this.tweetObject.userId
    };
  },
  methods: {
    deleteTweet: function() {
      axios
        .request({
          method: "delete",
          url: "https://tweeterest.ml/api/tweets",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "FdFMryx4Lk56j3ASVQD8Yw6FlMPVtI2oFBxUBYygBHW56"
          },
          data: {
            loginToken: cookies.get("session"),
            tweetId: this.tweetObject.tweetId
          }
        })
        .then(response => {
          //write logic to ensure token was sent
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