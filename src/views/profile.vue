<template>
  <div>
    <header-page />
    <delete-btn />
    <update-btn />
    <router-link to="/update" />

    <users-list />
    <following-user />
    <footer-page />
  </div>
</template>

<script>
import UsersList from "../components/users.vue";
import FollowingUser from "../components/following.vue";
import FooterPage from "../components/footer.vue";
import HeaderPage from "../components/header.vue";
import DeleteBtn from "../components/delete.vue";
import UpdateBtn from "../components/update.vue"

export default {
  name: "profile-page",
  components: {
    UsersList,
    FollowingUser,
    FooterPage,
    HeaderPage,
    DeleteBtn,
    UpdateBtn
  }
};
</script>

<style  scoped>
</style>