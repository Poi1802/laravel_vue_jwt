<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <RouterLink class="navbar-brand" :to="{ name: 'main' }">Main</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li v-if="token" class="nav-item">
          <RouterLink :class="{ 'active': routeName === 'main' }" class="nav-link"
            :to="{ name: 'main' }">User list</RouterLink>
        </li>
        <li v-if="!token" class="nav-item">
          <RouterLink :class="{ 'active': routeName === 'user.login' }" class="nav-link"
            aria-current="page" :to="{ name: 'user.login' }">Login
          </RouterLink>
        </li>
        <li v-if="!token" class="nav-item">
          <RouterLink :class="{ 'active': routeName === 'user.registr' }" class="nav-link"
            aria-current="page" :to="{ name: 'user.registr' }">
            Registration</RouterLink>
        </li>
        <li v-if="token" class="nav-item">
          <RouterLink :class="{ 'active': routeName === 'user.personal' }" class="nav-link"
            aria-current="page" :to="{ name: 'user.personal' }">Personal
          </RouterLink>
        </li>
        <li v-if="token" class="nav-item">
          <a @click.prevent="userLogout" href="" class="nav-link">Logout</a>
        </li>
      </ul>

    </div>
  </nav>
</template>

<script>
import myAxios from '../myAxios';

export default {
  props: {
    token: String,
    routeName: String
  },
  methods: {
    userLogout() {
      myAxios.post('/api/auth/logout')
        .then(res => {
          localStorage.removeItem('token')
          this.$router.push({ name: 'user.login' })
          console.log(res)
        })
    }
  }
}
</script>

<style lang="sass" scoped>

</style>