<template>
  <div class="d-flex justify-center align-center flex-column login">
    <v-card rounded="lg" width="600">
      <v-card-title class="text-center">Login</v-card-title>
      <v-form class="px-8 py-8">
        <v-text-field
          v-model="email"
          label="Email"
          outlined
          placeholder="seu.email@email.com.br"
          type="email"
          clearable
        ></v-text-field>
        <v-text-field
          v-model="password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          outlined
          label="Senha"
          hint="Deve conter: 1 caractere especial, letra maiúscula, letra minúcula, numeros"
          :counter="20"
          @click:append="show1 = !show1"
          clearable
      ></v-text-field>
      </v-form>
      <v-card-actions class="d-flex justify-end px-8 py-6">
        <v-btn rounded="lg" variant="outlined" @click="auth">
          Entrar
        </v-btn>
    </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import UserAuth from '@/domain/UserAuth';
import AuthService from '@/domain/AuthService';

@Component
export default class LoginComponent extends Vue {
  email = '';

  password = '';

  show1 = false

  authenticated = false;

  user: UserAuth = new UserAuth();

  error = '';

  auth() {
    this.user = new UserAuth(this.email, this.password);
    AuthService.auth(this.user)
      .then(() => {
        this.authenticated = true;
        this.$emit('auth', this.authenticated);
      }).catch((error) => {
        this.error = error;
        this.authenticated = false;
        this.$emit('auth', this.authenticated);
      });
  }
}
</script>

<style scoped>
.login {
  height: 100vh;
  background: #9CCC65;
}
</style>
