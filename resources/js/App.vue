<template>
  <div class="container">
    <div class="container-fluid">
      <Navbar />
      <RouterView></RouterView>
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