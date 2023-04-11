<template>
  <form @submit.prevent="someLog" class="w-25">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <div class="mb-3">
      <label for="exampleInputRepPassword1" class="form-label">Repeat password</label>
      <input type="password" class="form-control" id="exampleInputRepPassword1">
    </div>
    <button type="submit" class="btn btn-primary">Registr</button>
  </form>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>

</style>