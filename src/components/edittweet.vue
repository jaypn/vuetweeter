<template>
  <div id="edit-tweet">
    <button @click="editATweet" v-if="isEditing">Ok</button>

    <textarea
      v-if="isEditing"
      class="box1"
      id="tweet-input"
      v-model="myedit"
      placeholder="Max 200 characters"
    ></textarea>

    <i v-if="isOwned && !isEditing" @click="isEditing=true" class="far fa-edit"></i>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "edit-tweet",
  props: {
    tweetObject: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      myedit: "",
      isOwned: cookies.get("user") == this.tweetObject.userId,
      isEditing: false
    };
  },
  methods: {
    editATweet: function() {
      axios
        .request({
          method: "patch",
          url: "https://tweeterest.ml/api/tweets",
          headers: {
            "content-type": "application/json",
            "X-Api-Key": "FdFMryx4Lk56j3ASVQD8Yw6FlMPVtI2oFBxUBYygBHW56"
          },
          data: {
            loginToken: cookies.get("session"),
            tweetId: this.tweetObject.tweetId,
            content: this.myedit
          }
        })
        .then(response => {
          cookies.set("myedit", response);
          console.log(response);
          this.isEditing = false;
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