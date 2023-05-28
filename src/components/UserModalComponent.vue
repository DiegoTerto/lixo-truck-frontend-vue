<template>
  <v-row justify="center">
    <v-dialog
      v-model="openModal"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">Novo usuário</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
              >
                <v-text-field
                  v-model="user.name"
                  label="Nome*"
                  required
                  clearable
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
                <v-text-field
                  v-model="user.username"
                  label="Username*"
                  required
                  clearable
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="user.email"
                  label="Email*"
                  placeholder="email.email@email.com"
                  required
                  clearable
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="user.password"
                  :append-icon="showPassoword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPassoword ? 'text' : 'password'"
                  name="input-10-1"
                  label="Senha"
                  hint="Deve conter pelo menos: 1 caractere especial,
                  1 letra maiúscula, 1 letra minúcula, 1 numero"
                  :counter="20"
                  :maxlength="20"
                  @click:append="showPassoword = !showPassoword"
                  clearable
                ></v-text-field>
              </v-col>
              <v-col v-if="isDriver" cols="12">
                <v-text-field
                  v-model="user.cnh"
                  label="CNH"
                  clearable
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-checkbox
                  v-model="isDriver"
                  label="Motorista?"
                  color="green"
                  value="red"
                ></v-checkbox>
              </v-col>
            </v-row>
          </v-container>
          <small>*Indica campos obrigatórios</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="closeModal()"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="save"
          >
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import RequestUser from '@/domain/user/RequestUser';

@Component
export default class UserModalComponent extends Vue {
  @Prop() openModal!: boolean;

  @Prop() user!: RequestUser;

  showPassoword = false;

  isDriver = false;

  closeModal() {
    this.openModal = false;
    this.$emit('close', this.openModal);
  }

  save() {
    this.closeModal();
    this.$emit('save', this.user);
  }
}
</script>
