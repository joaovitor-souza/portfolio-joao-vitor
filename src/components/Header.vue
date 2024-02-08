<template >
  <NavDrawer />
  <v-app-bar app class="py-3 ">
    <v-container class="container">
      <v-toolbar-title >
          <v-container >
            <v-row class="justify-space-between">
              <div class="d-sm-flex align-center">
                <h3>
                  João Vitor
                </h3>
                <p class="text-uppercase font-weight-light subtitle">
                  <span class="pl-2">
                    /
                  </span>
                  Dev Frontend
                </p>
              </div>
              <Menu />
              <v-app-bar-nav-icon prepend-icon="mdi-close" class="nav-icon" @click="toggleDrawer"></v-app-bar-nav-icon>
            </v-row>
          </v-container>
      </v-toolbar-title>
    </v-container>
  </v-app-bar>
</template>

<script setup lang="ts">
import Menu from './Menu.vue';
import NavDrawer from './NavDrawer.vue'
import { onMounted, onUnmounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const toggleDrawer = () => {
  store.dispatch('toggleDrawer');
}
const handleResize = () => {
  if (window.innerWidth > 960) {
    store.commit('setDrawerOpen', false);
  }
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
.nav-icon {
  display: block;
}

.container {
  max-width: 1200px;
}

.subtitle {
  font-size: 20px;
}

.app-bar {
  max-width: 1200px;
}

@media(min-width: 960px) {
  .nav-icon {
    display: none;
  }
}
</style>
