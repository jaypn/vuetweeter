<template>
  <div class="footer">
    <router-link to="/home">
      <i class="fas fa-home"></i>
    </router-link>
    <router-link to="/discover">
      <i class="fas fa-search"></i>
    </router-link>
    <router-link to="/home">
      <i class="fas fa-bell"></i>
    </router-link>
    <router-link to="/logout">
     
     <i class="fas fa-sign-out-alt"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "footer-page",
  components: {}
};
</script>

<style  scoped>
.footer {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 50px;
  background-color: blueviolet;
  border-top: black solid;
}
</style>