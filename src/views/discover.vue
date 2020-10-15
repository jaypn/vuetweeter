<template>

  <div>
    <side-menu id="tab-menu" />
    <header-page id="mob-header" />
    <all-tweets />
    <footer-page id="mob-footer"/>
    <user-list id="people" />
  </div>
</template>

<script>

import AllTweets from "../components/tweets.vue";
import HeaderPage from "../components/header.vue";
import FooterPage from "../components/footer.vue";
import SideMenu from "../components/sidemenu.vue";
import UserList from "../components/users.vue"

export default {
  components: {
    AllTweets,
    FooterPage,
    HeaderPage,
    SideMenu,
    UserList
  },
  data() {
    return {
      followings: []
    };
  
  
  },
  methods: {}
};
</script>

<style scoped>
#tab-menu {
  display: none;
}
.main-container{
  margin-bottom: 50px;
}
@media screen and (min-width: 600px) {
  #mob-header, #mob-footer {
    display:none
  }
  .main-container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
  }
}
@media screen and (min-width: 1000) {
  #mob-header #mob-footer {
    display: none;
  }
}
</style>