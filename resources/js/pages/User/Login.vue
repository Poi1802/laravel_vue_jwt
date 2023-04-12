<template>
  <form @submit.prevent="loginUser" class="w-25">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" v-model="form.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" v-model="form.password" class="form-control" id="exampleInputPassword1">
    </div>
    <button type="submit" class="btn btn-primary">Login</button>
  </form>
</template>

<script>
export default {
  data: () => ({
    form: {
      email: '',
      password: ''
    }
  }),
  methods: {
    loginUser() {
      axios.post('/api/auth/login', this.form)
        .then(res => {
          localStorage.setItem('token', res.data.access_token)
          this.$router.push({ name: 'user.personal' })
        })
    }
  }
}
</script>

<style lang="sass" scoped>

</style>