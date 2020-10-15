<template>
  <div class="footer">
    <router-link to="/home">
      <i class="fas fa-home">  Home</i>
    </router-link>
    <router-link to="/discover">
      <i class="fas fa-search"> Discover</i>
    </router-link>
    <router-link to="/home">
      <i class="fas fa-bell"> Trending</i>
    </router-link>
    <router-link to="/profile">
     <i class="fas fa-user-alt">  Profile</i>
    </router-link>
    <router-link to="/logout">
     
     <i class="fas fa-sign-out-alt"> Sign Out</i>
    </router-link>
    
  </div>
</template>

<script>
export default {
  name: "side-menu",
  components: {}
};
</script>
<style scoped>
.fas {
    font-size: 25px;
    padding-bottom: 20px;
}
</style>