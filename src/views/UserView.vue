<template>
  <div class="user-container">
    <v-snackbar
      v-model="snackbarSuccess"
      color="green"
      top
      vertical
      :timeout="2000"
    >
      <span>{{ successMessage }}</span>
    </v-snackbar>
    <v-row>
      <v-col cols="12" class="py-8 px-8">
        <h1>Listagem de usuários</h1>
      </v-col>
    </v-row>
    <v-row justify="end">
      <v-col cols="1" class="d-flex justify-end">
        <v-btn
          class="mr-5 new-user-btn"
          elevation="1"
          color="green"
          @click="newUserModal()"
        >Novo usuário</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="py-8 px-8">
        <v-data-table
          :headers="headers"
          :items="users"
          :loading="loading"
          sort-by="calories"
          class="elevation-1"
        >
        </v-data-table>
      </v-col>
    </v-row>
    <user-modal-component
      :user="newUser"
      :openModal="openNewUserModal"
      @close="openNewUserModal = $event"
      @save="createUser($event)"
    />
  </div>
</template>

<script lang="ts">
import UserService from '@/domain/UserService';
import { Vue, Component } from 'vue-property-decorator';
import UserModalComponent from '@/components/UserModalComponent.vue';
import RequestUser from '@/domain/user/RequestUser';

@Component({
  components: { UserModalComponent },
})
export default class UserView extends Vue {
  headers = [
    {
      text: 'Nome',
      align: 'start',
      key: 'name',
      value: 'name',
    },
    {
      text: 'Username',
      align: 'start',
      key: 'username',
      value: 'username',
    },
    {
      text: 'Email',
      align: 'start',
      key: 'email',
      value: 'email',
    },
  ];

  users = [{}];

  loading = false;

  newUser = new RequestUser();

  openNewUserModal = false;

  snackbarSuccess = false;

  successMessage = '';

  created() {
    this.getUsers();
  }

  getUsers() {
    this.loading = true;
    UserService.list().then((response) => {
      this.users = response.data.content;
    }).finally(() => {
      this.loading = false;
    });
  }

  newUserModal() {
    this.openNewUserModal = true;
  }

  createUser(value: RequestUser) {
    UserService.create(value).then(() => {
      this.snackbarSuccess = true;
      this.successMessage = 'Usuário criado com sucesso!';
    }).catch(() => {
      window.alert('Erro ao criar usuário');
    }).finally(() => {
      this.getUsers();
    });
  }
}
</script>

<style scoped>
.new-user-btn{
  color: white;
}
</style>
