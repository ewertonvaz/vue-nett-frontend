<template>
      <div>
        <form @submit.prevent="login">
          <label for="email">
            Email:
          </label>
          <input v-model="email" type="email" name="email" value>
          <label for="password">
            Password:
          </label>
          <input v-model="password" type="password" name="password" value>
          <button type="submit" name="button">
            Login
          </button>
           <ul v-for="(error, errorKey) in errors" :key="errorKey">
            <li>{{ error }}</li>
          </ul>
          <router-link to="/register">
            Don't have an account? Register.
          </router-link>
        </form>
      </div>
</template>
<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      errors: []
    }
  },
  methods: {
    login () {
      this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password
        })
        .then(() => { this.$router.push({ name: 'dashboard' }) })
        .catch(err => {
          this.errors = err.response.data.errors
        })
    }
  }
}
</script>
