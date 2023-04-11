<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <RouterLink class="navbar-brand" :to="{ name: 'main' }">Main</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink class="nav-link active" aria-current="page" :to="{ name: 'user.login' }">Login</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link active" aria-current="page" :to="{ name: 'user.registr' }">Registration</RouterLink>
        </li>
      </ul>

    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>

</style>