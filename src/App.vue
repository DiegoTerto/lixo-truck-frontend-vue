<template>
  <v-app class="app">
    <LoginComponent
      v-if="!authenticated"
      @auth="isAuthenticate($event)"
    />
    <div v-else>
      <v-navigation-drawer
        v-model="drawer"
        app
      >
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                Sandra Adams
              </v-list-item-title>
              <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="selectedItem"
            color="primary"
          >
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              @click="to(item.link)"
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Lixo Truck</v-toolbar-title>
      </v-app-bar>

      <v-main class="main-container">
        <router-view class="main-view"></router-view>
      </v-main>
    </div>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import LoginComponent from './components/LoginComponent.vue';

@Component({
  components: {
    LoginComponent,
  },
})
export default class App extends Vue {
  authenticated = true

  drawer = true;

  selectedItem = 11;

  items = [
    { text: 'Usuários', icon: 'mdi-account-multiple', link: '/users' },
    { text: 'Caminhões', icon: 'mdi-truck', link: '/' },
    { text: 'Motoristas', icon: 'mdi-card-account-details-outline', link: '/' },
    { text: 'Rotas', icon: 'mdi-map-marker-radius-outline', link: '/' },
  ];

  isAuthenticate(value: boolean) {
    this.authenticated = value;
    if (value) {
      this.$router.push('/home');
    }
  }

  to(link: string) {
    this.$router.push(link);
  }
}
</script>

<style scoped>
.app{
  width: 100vw;
  height: 100vh;
}

.main-container {
  width: 99% !important;
  padding: 0 !important;
}

.main-view{
  flex: none !important;
}
</style>
