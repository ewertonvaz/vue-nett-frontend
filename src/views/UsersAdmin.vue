<template>
  <div>
    <h1>Usuários</h1>
    <div>
      <FormUser 
        :visible="form_visible" 
        :user="form_user"
        :action="form_action"
        @cancel="cancelar" 
        @update="atualizar"
        @include="incluir"
      />
      <ListUsersContainer v-if="errors.length === 0" @incluir="showFormIncluir" >
        <ListUserItem v-for="(user, userKey) in users" :key="userKey" :user="user" @excluir="exclude" @editar="edit" />
      </ListUsersContainer>
      <ul v-for="(error, errorKey) in errors" :key="errorKey">
          <li>{{ error }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ListUsersContainer from '../components/ListUsersContainer.vue'
import ListUserItem from '../components/ListUserItem.vue'
import FormUser from '../components/FormUser.vue'

export default {
  components:{
    ListUsersContainer,
    ListUserItem,
    FormUser
  },
 data () {
    return {
      isLoading: true,
      users: [],
      errors: [],
      form_visible: false,
      form_user: {
        is_admin: false
      },
      form_action: 'Include',
    }
  },
  async created () {
    await axios.get('//localhost:3000/user').then(({ data }) => {
      this.users = data
      this.isLoading = false
    })
    .catch(err => {
      this.errors = err.response.data.errors
    })
  },
  methods: {
    async incluir (user) {
      const result = await axios.post('//localhost:3000/user/create', {
        name: user.name,
        email: user.email,
        is_admin: user.is_admin,
        password: 'secret'
      })
      .catch( err => {
        this.errors = err.response.data.errors
      })
      if (result) {
        this.users.push(result.data);
      }
      this.form_visible = false
    },
    async atualizar (user) {
      if ( !user.uuid ) {
        return
      }
      const result = await axios.put('//localhost:3000/user/update', {
        uuid: user.uuid,
        name: user.name,
        email: user.email,
        is_admin: user.is_admin,
      })
      .catch( err => {
        this.errors = err.response.data.errors
      })
      if (result) {
        this.users = this.users.map( value => {
          if (value.uuid === result.data.uuid) {
            value = result.data
          }
          return value;
        });
      }
      this.form_visible = false
    },
    edit (user) {
      this.form_action = 'Update'
      this.form_user = user
      this.form_visible = true
    },
    cancelar() {
      this.form_user = {
        is_admin: false
      }
      this.form_visible = false
    },
    async exclude (uuid) {
      const result = await axios.put('//localhost:3000/user/delete', { uuid })
        .then( data => data )
        .catch( err => this.errors = err.data.errors )
      if (result.data.user) {
        //this.users = this.users.filter( value => { return value.uiid !== uuid });
        this.users = this.users.filter( value => { return value.email !== result.data.user.email });
      }
    },
    showFormIncluir () {
      this.form_user = {
        is_admin: false
      }
      this.form_action = 'Include'
      this.form_visible = true
    }
  }
}
</script>

<style scoped>
table {
  table-layout: fixed;
  width: 80vw;
  border-collapse: collapse;
  border: 2px solid gray;
}

thead th:nth-child(1) {
  width: 25%;
}

thead th:nth-child(2) {
  width: 35%;
}

thead th:nth-child(3) {
  width: 25%;
}

thead th:nth-child(4) {
  width: 15%;
}

th, td {
  padding: 20px;
}

tbody tr:hover {
  cursor: pointer;
  background-color: #16c0b0;
}

tbody tr:nth-child(odd) {
  /* background-color: #16c0b0; */
  background-color: rgba(22, 192, 176, 0.35);
}

tbody tr:nth-child(even) {
  /* background-color: #84cf6a; */
  background-color: rgba(132, 207, 106, 0.35);
}
</style>