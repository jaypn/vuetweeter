<template>
  <div id="tweet-container">
    <h4>{{tweetStatus}}</h4>
    <textarea rows="6" class="standard-input" id="tweet-input" v-model="mytweet"></textarea>
    <br>
    <button  class="hover-button" @click="makeATweet">Post</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "make-tweet",
  components: {
    
  },
  data() {
    return {
      mytweet: "",
      tweetStatus: "Tweet!"
    };
  },
  methods: {
    makeATweet: function() {
      this.tweetStatus = "tweeting!";
      axios
        .request({
          method: "POST",
          url: "https://tweeterest.ml/api/tweets",
          headers: {
            "content-type": "application/json",
            "X-Api-Key": "FdFMryx4Lk56j3ASVQD8Yw6FlMPVtI2oFBxUBYygBHW56"
          },
          data: {
            loginToken: cookies.get("session"),
            content: this.mytweet
          }
        })
        .then(response => {
          cookies.set("mytweet", response);
          this.tweetStatus = "Posted";
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style  scoped>

.hover-button{
  
  border-radius: 10px;
  padding: 8px;
  color: white;
  background-color: blue;
  font-weight: bold;
}
#tweet-input{
  width: 500px;
}

  

</style>