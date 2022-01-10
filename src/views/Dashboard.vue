<template>
  <div>
    <h1>Dashboard</h1>
    <div style="display:flex;flex-direction:row;">
      <div style="margin-bottom:auto; margin-right:20px;">
        <IncludeEvent @include="include"/>
      </div>
      <div style="flex-direction:row">
        <template v-if="!isLoading">
          <EventCard v-for="(event, eventKey) in events" :key="eventKey" :event="event" @remove="removeItem" />
        </template>
        <p v-else>
          Loading events
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import EventCard from '../components/EventCard'
import IncludeEvent from '../components/IncludeEvent.vue'

export default {
  components: {
    EventCard,
    IncludeEvent
  },
  data () {
    return {
      isLoading: true,
      events: [],
      errors: []
    }
  },
  async created () {
    await axios.get('//localhost:3000/event/dashboard').then(({ data }) => {
      this.events = data
      this.isLoading = false
    })
  },
  methods: {
    include(event) {
      if (event) { this.events.push(event) }
    },
    async removeItem(id) {
      // Remove do banco de dados
      const result = await axios.put('//localhost:3000/event/delete', { id })
        .then( data => data )
        .catch( err => this.errors = err.data.errors )
      // Se bem sucedido remove do array de de eventos (this.events)
      if (result) {
        this.events = this.events.filter( value => { return value.id !== id } )
      }
    }
  }
}
</script>
