<template>
  <div>
    <div v-for="tweet in tweets" :key="tweet.tweetId" class="tweet-container">
      <div class="tweet-container">
        <h5>{{tweet.username}} Posted on {{tweet.createdAt}}</h5>
        <p id="tweet-content">{{tweet.content}}</p>

        <div class="button-container">
          
           <i v-if="!isCommenting" @click="isCommenting=true" class="fas fa-comment"></i>

            <make-comment v-if="isCommenting" :tweetId="tweet.tweetId" />
            <like-tweet :tweetId="tweet.tweetId" />

            <all-comments :tweetId="tweet.tweetId" />
            <delete-tweet :tweetObject="tweet" />
            <edit-tweet :tweetObject="tweet" />
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import MakeComment from "./comment.vue";
import AllComments from "./comments.vue";
import DeleteTweet from "./deletetweet.vue";
import EditTweet from "./edittweet.vue";
import LikeTweet from "./liketweet.vue";

export default {
  name: "following-tweets",
  components: {
    MakeComment,
    AllComments,
    DeleteTweet,
    EditTweet,
    LikeTweet
  },
  data() {
    return {
      tweets: [],
      followings: [],
      isCommenting: false
    };
  },
  mounted() {
    this.showTweets();
  },

  methods: {
    showTweets: function() {
      axios
        .request({
          method: "get",
          url: "https://tweeterest.ml/api/follows",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "FdFMryx4Lk56j3ASVQD8Yw6FlMPVtI2oFBxUBYygBHW56"
          },
          params: {
            userId: cookies.get("user")
          }
        })
        .then(response => {
          console.log(response);
          this.followings = response.data;
          
            for (let i = 0; i < this.followings.length; i++){
            
            axios
              .request({
                method: "get",
                url: "https://tweeterest.ml/api/tweets",
                headers: {
                  "Content-Type": "application/json",
                  "X-Api-Key": "FdFMryx4Lk56j3ASVQD8Yw6FlMPVtI2oFBxUBYygBHW56"
                },
                params: {
                  userId: this.followings[i].userId
                }
              })
              .then(response => {
                
            for (let i = 0; i < response.data.length; i++){
              this.tweets.push(response.data[i])
            }

                console.log(response.data);
              })
              .catch(error => {
                console.log(error);
              });
          }
        })
        .catch(error => {
          console.log(error);
          this.loginStatus = "error";
        });
    }
  }
};
</script>

<style  scoped>
.tweet-container {
  border-bottom: solid 0.5px red;
}
.button-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
}
#tweet-content {
  font-style: italic;
  font-size: 30px;
}
</style>