<template>
  <div>
    <i @click="deleteComment()" v-if="isOwned" class="far fa-trash-alt"></i>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "delete-comment",
  data() {
    return {
      isOwned:this.commentObject.userId==cookies.get("user")
    };
    

  },
  props: {
    commentObject: {
      type: Object,
      required: true
    },
  },
  methods: {
    deleteComment: function() {
      axios
        .request({
          method: "delete",
          url: "https://tweeterest.ml/api/comments",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "FdFMryx4Lk56j3ASVQD8Yw6FlMPVtI2oFBxUBYygBHW56"
          },
          data: {
            loginToken: cookies.get("session"),
            commentId: this.commentObject.commentId
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