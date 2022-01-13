<template>
    <div>
        <form @submit.prevent="passwd_change">
          <label for="actual">
            Actual Password:
          </label>
          <input v-model="actual" type="password" name="actual" value>
          <label for="newpasswd">
            New Password:
          </label>
          <input v-model="newpasswd" type="password" name="newpasswd" value>
          <label for="password">
            Confirm Password:
          </label>
          <input v-model="confirm" type="password" name value>
          <button type="submit" name="button" :disabled="hasErrors">
            Change
          </button>
          <ul v-for="(error, errorKey) in errors" :key="errorKey">
            <li>{{ error }}</li>
          </ul>
        </form>
    </div>
</template>
<script>
export default {
  data () {
    return {
      actual: '',
      confirm: '',
      newpasswd: '',
      errors: []
    }
  },
  methods: {
    async passwd_change () {
      await this.$store
        .dispatch('passwd_change', {
          actual: this.actual,
          newpasswd: this.newpasswd
        })
        .then(() => this.$router.push('/dashboard'))
        .catch( err => {
          this.errors = err.response.data.errors
        })
    }
  },

  computed:{
    hasErrors () {
      if (this.actual === '' || this.newpasswd === '' ) {
        return true;
      }
      if (this.newpasswd !== this.confirm) {
        return true;
      }
      return false;
    }
  }
}
</script>
<style>
</style>
