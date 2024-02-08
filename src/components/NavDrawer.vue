<template>
  <v-navigation-drawer temporary v-model="isDrawerOpen" location="end">
    <div class="d-flex justify-space-between align-center px-2 py-1">
      <v-list-item title="Menu"></v-list-item>
      <v-btn icon="mdi-close" size="30" @click="toggleDrawer"></v-btn>
    </div>
    <v-list>
      <v-divider></v-divider>
      <v-list-item to="/">
        Sobre mim
      </v-list-item>
      <v-list-item to="/skills">
        Habilidades
      </v-list-item>
      <v-list-item to="/projects">
        Projetos
      </v-list-item>
      <v-list-item to="/contact">
        Contato
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, onUnmounted } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Drawer',

  setup() {
    const store = useStore();
    const isDrawerOpen = computed({
      get: () => store.state.isDrawerOpen,
      set: (value) => store.commit('setDrawerOpen', value)
    });
    const toggleDrawer = () => {
      store.dispatch('toggleDrawer');
    }

    return {
      isDrawerOpen,
      toggleDrawer
    };
  },
});
</script>