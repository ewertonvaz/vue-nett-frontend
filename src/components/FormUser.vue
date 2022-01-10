<template>
    <form @submit.prevent="form_action" class="form_user" v-if="visible">
        <div class="form_item">
            <label for="name">Name</label>
            <input v-model="user.name" type="text" name="name" value>
        </div>
        <div class="form_item">
            <label for="email">Email</label>
            <input v-model="user.email" type="email" name="email" value>
        </div>
        <div class="form_item_row">
          <label for="is_admin">Admin?</label>
          <input type="checkbox" id="is_admin" v-model="user.is_admin">
        </div>
        <button type="submit" name="button">
        {{ action }}
        </button>
        <button class="form_button" type="button" name="button" @click="cancel">
          Cancel
        </button>
    </form>
</template>
<script>
export default {
  props: {
    action:{
      type: String,
      required: true
    },
    user: {
      type: Object,
      default: () => { return {} }
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      errors: []
    }
  },
  methods: {
     form_action () {
      switch (this.action) {
        case 'Update':
          this.$emit('update', this.user)
          break;
        default:
          this.$emit('include', this.user)
          break;
      }
    },
    cancel () {
      this.$emit('cancel')
    }
  }
}
</script>
<style scoped>
    .form_user{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }

    .form_item {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .form_item_row {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .form_button{
      background: white;
      color: #16C0B0;
      border: #16C0B0 solid 1px;
    }
</style>
