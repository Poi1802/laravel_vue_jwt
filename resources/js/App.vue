<template>
  <div class="container">
    <div class="container-fluid">
      <Navbar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="sass" scoped>

</style>