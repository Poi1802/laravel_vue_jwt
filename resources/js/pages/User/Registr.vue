<template>
  <form @submit.prevent="createUser" class="w-25">
    <div class="mb-3">
      <label for="exampleInputName1" class="form-label">Name</label>
      <input v-model="form.name" type="text" class="form-control" id="exampleInputName1" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input v-model="form.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input v-model="form.password" type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <div class="mb-3">
      <label for="exampleInputRepPassword1" class="form-label">Confirm password</label>
      <input v-model="confirmationPassword" type="password" class="form-control" id="exampleInputRepPassword1">
    </div>
    <button :disabled="isDisabled" type="submit" class="btn btn-primary">Registr</button>
  </form>
</template>

<script>
export default {
  data: () => ({
    form: {
      email: '',
      name: '',
      password: '',
    },
    confirmationPassword: ''
  }),
  computed: {
    isDisabled() {
      return !(this.form.email && this.form.name && this.form.password && this.confirmationPassword && this.confirmationPassword === this.form.password);
    },
  },
  methods: {
    createUser() {
      axios.post('/api/users', this.form)
        .then(res => {
          this.form = {};
          this.confirmationPassword = ''
        })
        .catch(err => console.log(err))

    }
  }
}
</script>

<style lang="sass" scoped>

</style>