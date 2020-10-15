<template>
  <div class="main-container">
    <div>
      <side-menu id="tab-menu" />
    </div>
    <div>
      <header-page id="mob-header" />
      <make-tweet></make-tweet>

      <following-tweets />

      <footer-page id="mob-footer" />
      
    </div>
    <div>
        <users-list />
      </div>
  </div>
</template>

<script>
import FooterPage from "../components/footer.vue";

import MakeTweet from "../components/tweet.vue";
import FollowingTweets from "../components/followingtweets.vue";

import HeaderPage from "../components/header.vue";
import SideMenu from "../components/sidemenu.vue";
import UsersList from "../components/users.vue"

export default {
  name: "home-Page",

  components: {
    MakeTweet,
    FollowingTweets,
    SideMenu,
    UsersList,

    FooterPage,
    HeaderPage
  }
};
</script>
<style  scoped>
#tab-menu {
  display: none;
}
.main-container {
  margin-bottom: 50px;
}

@media screen and (min-width: 600px) {
  #mob-header,
  #mob-footer {
    display: none;
  }
  #tab-menu {
   display: grid;
   padding-top: 75%;
   justify-items: left;
   padding-left: 20px;
  }
  .main-container {
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
}
@media screen and (min-width: 1000px){
  #tab-menu {
   display: grid;
   padding-top: 75%;
   justify-items: left;
   padding-left: 20px;
  }
  .main-container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
  }


}
</style>;
