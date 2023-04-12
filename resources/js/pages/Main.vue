<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users">
        <th scope="row">{{ user.id }}</th>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>@mdo</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import myAxios from '../myAxios'

export default {
  data: () => ({
    users: [],
  }),
  mounted() {
    this.getUsers()
  },
  methods: {
    getUsers() {
      myAxios.get('/api/users').then(res => this.users = res.data)
    },
  }
}
</script>

<style lang="sass" scoped>

</style>