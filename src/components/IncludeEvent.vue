<template>
  <form @submit.prevent="include">
    <label for="title">
      Title:
    </label>
    <input v-model="title" type="text" name="title" value>
    <label for="time">
      Time:
    </label>
    <input v-model="time" type="text" name="time" value>
    <label for="date">
      Date:
    </label>
    <input v-model="date" type="date" name="date" value>
    <button type="submit" name="button">
      Include
    </button>
    <ul v-for="(error, errorKey) in errors" :key="errorKey">
      <li>{{ error }}</li>
    </ul>
  </form>
</template>
<script>
import { eventComputed } from '../vuex/helpers'
export default {
  data () {
    return {
      title: '',
      time: '',
      date: '',
      errors: []
    }
  },
  methods: {
    async include () {
      await this.$store
        .dispatch('include_event', {
          title: this.title,
          time: this.time,
          date: this.date
        })
        .catch( err => {
          this.errors = err.response.data.errors
        })
      if( this.lastEvent ) {
        this.title = ''
        this.time = ''
        this.date = ''
        this.$emit('include', this.lastEvent)
      }
    }
  },
  computed: {
    ...eventComputed
  }
}
</script>
<style>
</style>
