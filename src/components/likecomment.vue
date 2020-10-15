<template>
  <div>
    <i @click="likeAComment" v-if="isLiked == false" class="fas fa-heart"></i>
    <i @click="unlikeAComment" v-else-if="isLiked == true" class="far fa-heart"></i>

    <div v-for="like in likesCount" :key="like">{{ like }}</div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "like-comment",

  data() {
    return {
      isLiked: false,
      likesCount: []
    };
  },
  mounted() {
    this.countLikes();
  },
  props: {
    commentId: Number
  },

  methods: {
    likeAComment: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/comment-likes",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "FdFMryx4Lk56j3ASVQD8Yw6FlMPVtI2oFBxUBYygBHW56"
          },
          data: {
            loginToken: cookies.get("session"),
            commentId: this.commentId
          }
        })
        .then(response => {
          console.log(response);
          this.isLiked = true;
          this.countLikes();
        })
        .catch(error => {
          console.log(error);
        });
    },
    unlikeAComment: function() {
      (this.isLiked = false),
        axios
          .request({
            url: "https://tweeterest.ml/api/comment-likes",
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "X-Api-Key": "FdFMryx4Lk56j3ASVQD8Yw6FlMPVtI2oFBxUBYygBHW56"
            },
            data: {
              loginToken: cookies.get("session"),
              commentId: this.commentId
            }
          })
          .then(response => {
            console.log(response);
            this.isLiked = false;
            this.countLikes();
          })
          .catch(error => {
            console.log(error);
          });
    },
    countLikes: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/comment-likes",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "FdFMryx4Lk56j3ASVQD8Yw6FlMPVtI2oFBxUBYygBHW56"
          },
          params: {
            commentId: this.commentId
          }
        })
        .then(response => {
          console.log(response);
          console.log("counts")
          this.countLikes = response.data;
          console.log(this.countLikes)

          let thisUser = cookies.get("user");
          for (let i = 0; i < this.countLikes.length; i++) {
            if (thisUser == this.countLikes[i].userId) {
              this.isLiked = true;
              return;
            }
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>