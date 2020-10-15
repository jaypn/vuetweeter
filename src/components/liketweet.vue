<template>
  <div>
    <i v-if="isLiked==false" @click="likeAtweet" class="far fa-heart"></i>
    <i v-else-if="isliked==true" @click="unlikeAtweet" class="fas fa-heart"></i>
    
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "like-tweet",
  props: {
    tweetId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      mylike: "",
      likesNum: [],
      isLiked:false
    };
  },
  methods: {
    likeAtweet: function() {
      axios
        .request({
          method: "POST",
          url: "https://tweeterest.ml/api/tweet-likes",
          headers: {
            "content-type": "application/json",
            "X-Api-Key": "FdFMryx4Lk56j3ASVQD8Yw6FlMPVtI2oFBxUBYygBHW56"
          },
          data: {
            loginToken: cookies.get("session"),
            tweetId: this.tweetId
          }
        })
        .then(response => {
          cookies.set("mylike", response);
          console.log(response);
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