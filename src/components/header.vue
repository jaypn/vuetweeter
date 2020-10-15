<template>
  <div id="header">
    <router-link to="/profile">
     <i class="fas fa-user-alt"></i>
    </router-link>
    <router-link to="/home">
      <i class="fas fa-home"></i>
    </router-link>
  </div>
</template>

<script>

export default {
    name: "header-page"
};
</script>

<style scoped>
#header {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  
  height: 50px;
  background-color:blueviolet;
  border-bottom: black solid 1px;
}
</style>