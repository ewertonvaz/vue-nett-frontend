<template>
  <tr v-if="loggedUser.uuid !== user.uuid">
    <td>{{user.name}}</td>
    <td>{{user.email}}</td>
    <td>
      <span title="administrador" v-if="user.is_admin">
        <svg style="width:20px;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <span title="usuário" v-else>
        <svg style="width:20px;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      </span>
    </td>
    <td>
      <span title="editar" @click="editar">
        <svg style="width:20px;padding:2px;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      </span>
      <span title="excluir" @click="excluir">
        <svg style="width:20px;padding:2px;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </span>
    </td>
  </tr>
</template>

<script>
import { authComputed } from '../vuex/helpers'
export default {
  props:{
    user : {
      type: Object,
      required: true
    }
  },
  methods: {
    excluir () {
      this.$emit("excluir", this.user.uuid)
    },
    editar () {
      this.$emit("editar", this.user)
    }
  },
  computed: {
    ...authComputed
  }
}
</script>

<style>

</style>