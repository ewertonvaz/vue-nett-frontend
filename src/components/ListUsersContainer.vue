<template>
  <table>
    <thead>
      <th>Name</th>
      <th>Email</th>
      <th>Admin?</th>
      <th style="display:flex;align-items:center;justify-content:space-evenly;">
        Action 
        <span title="incluir" @click="incluir">
          <svg style="width:30px;padding:2px;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
      </th>
    </thead>
    <tbody>
        <slot></slot>
    </tbody>
  </table>
</template>

<script>
export default {
  methods: {
    incluir () {
      this.$emit('incluir')
    }
  }
}
</script>

<style>

</style>