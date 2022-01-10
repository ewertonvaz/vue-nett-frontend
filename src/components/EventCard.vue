<template>
  <div class="event-card">
    <span>@{{ event.time }} on {{ formattedDate }}</span>
    <span title="Remove this event" @click.prevent="remove">
      <svg style="width:24px;margin-left:10px;" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </span>
    <h4>{{ event.title }}</h4>
  </div>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    event: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed : {
    formattedDate () {
      if (this.event.date) {
        const date = new Date( this.event.date )
        return  date.toLocaleDateString("pt-BR", { timeZone: 'UTC' })
      } else {
        return null
      }
    }
  },
  methods: {
    remove() {
      this.$emit('remove', this.event.id);
    }
  }
}
</script>

<style scoped>
.event-card {
  width: 13em;
  margin: 1em auto 1em auto;
  padding: 1em;
  border: solid 1px #2c3e50;
  cursor: pointer;
  transition: all 0.2s linear;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card h4 {
  font-size: 1.4em;
  margin-top: 0.5em;
  margin-bottom: 0.3em;
}
</style>
