<template>
  <div class="users">
    <h2> users</h2>

    <div v-for="user in users" :key="user.userId">
      <h2>{{user.username}}</h2>
      <follow-btn v-if="!followings.includes(user.userId) &&user.userId != currentUser" :followId="user.userId" />
      <unfollow-btn v-if="followings.includes(user.userId)" :followId="user.userId" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies"

import FollowBtn from "./follow.vue";
import UnfollowBtn from "./unfollow.vue";
export default {
  name: "users-list",

  components: {
    FollowBtn,
    UnfollowBtn
  },

  data() {
    return {
      currentUser: cookies.get('user'),
      users: [],
      followings:[]
    };
  },
  mounted () {
    this.displayUsers();
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
    },
    displayUsers: function() {
      axios
        .request({
          method: "get",
          url: "https://tweeterest.ml/api/users",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "FdFMryx4Lk56j3ASVQD8Yw6FlMPVtI2oFBxUBYygBHW56"
          },
          data: {}
        })
        .then(response => {
          this.users = response.data;
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
.users{
  padding-top: 150px;
}
</style>