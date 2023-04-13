<template>
  <div class="container">
    <div class="container-fluid">
      <Navbar :token="token" :routeName="routeName" />
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
    token: localStorage.getItem('token'),
    routeName: ''
  }),
  mounted() {
    this.routeName = this.$route.name
  },
  updated() {
    this.routeName = this.$route.name
    this.token = localStorage.getItem('token')
  }
}
</script>

<style lang="sass" scoped>

</style>