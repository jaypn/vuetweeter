<template>
  <div>
    <div v-for="tweet in tweets" :key="tweet.tweetId" class="tweet-container">
      <div class="tweet-container">
        <h5>{{tweet.username}} Posted on {{tweet.createdAt}}</h5>
        <p id="tweet-content">{{tweet.content}}</p>

        <div class="button-container">
           
            
          

          <make-comment :tweetId="tweet.tweetId" />
          <like-tweet :tweetId="tweet.tweetId" />

          <all-comments :tweetId="tweet.tweetId" />
          <delete-tweet :tweetObject="tweet" />
          <edit-tweet :tweetObject="tweet" />
          <follow-btn :followId="tweet.userId" v-if="!followings.includes(tweet.userId)"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";


import MakeComment from "./comment.vue";
import AllComments from "./comments.vue";
import DeleteTweet from "./deletetweet.vue";
import EditTweet from "./edittweet.vue";
import LikeTweet from "./liketweet.vue";
import FollowBtn from "./follow.vue"
import cookies from 'vue-cookies';
export default {
  name: "all-tweets",
  components: {
    MakeComment,
    AllComments,
    DeleteTweet,
    EditTweet,
    LikeTweet,
    FollowBtn
  },
  data() {
    return {
      tweets: [],
      followings:[],
    };
  },
  mounted() {
    this.followingUser();
    this.showTweets();
  },

  methods: {
    showTweets: function() {
      axios
        .request({
          method: "get",
          url: "https://tweeterest.ml/api/tweets",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "FdFMryx4Lk56j3ASVQD8Yw6FlMPVtI2oFBxUBYygBHW56"
          }
        })
        .then(response => {
          console.log(response);
          this.tweets = response.data.reverse();
        })
        .catch(error => {
          console.log(error);
          this.loginStatus = "error";
        });
    },
    followingUser: function() {
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
          console.log('USERS FOLLOWING')
          console.log(response.data);
          let i;
          for(i = 0; i < response.data.length; i++) {
            this.followings.push(response.data[i].userId)
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
  border: solid 1px black;
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