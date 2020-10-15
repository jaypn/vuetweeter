<template>
  <div>
    <i @click="showComments" class="fas fa-comments"></i>
    <div v-for="comment in comments" :key="comment.commentId">
      {{comment.content}}
      {{comment.username}}
      {{comment.createdAt}}
      <edit-comment :commentObject=comment />
      <delete-comment :commentObject=comment />
      <like-comment :commentId=comment.commentId />
    </div>
  </div>
</template>

<script>
import DeleteComment from "../components/deletecomment.vue";
import EditComment from "../components/editcomment.vue";
import LikeComment from "../components/likecomment.vue"
import axios from "axios";
export default {
  name: "all-comments",
  components: {
    EditComment,
    DeleteComment,
    LikeComment
  },
  props: {
    tweetId: {
      type: Number,
      required: true
    }
  },

  data() {
    return {
      comments: []
    };
  },
  methods: {
    showComments: function() {
      axios
        .request({
          method: "get",
          url: "https://tweeterest.ml/api/comments",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "FdFMryx4Lk56j3ASVQD8Yw6FlMPVtI2oFBxUBYygBHW56"
          },
          params: {
            tweetId: this.$props.tweetId
          }
        })
        .then(response => {
          this.comments = response.data;
          console.log(response.data);
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