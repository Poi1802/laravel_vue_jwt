<template>
  <div class="container">
    <div class="container-fluid">
      <Navbar :token="token" />
      <router-view :key="$route.fullPath"></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar
  },
  data: () => ({
    token: localStorage.getItem('token')
  }),
  updated() {
    this.token = localStorage.getItem('token')
  }
}
</script>

<style lang="sass" scoped>

</style>