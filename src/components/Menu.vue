<template>
  <div class="nav-menu">
    <v-btn to="/" class="mr-2">Sobre Mim</v-btn>
    <v-btn to="/skills" class="mr-2">Habilidades</v-btn>
    <v-btn to="/projects" class="mr-2">Projetos</v-btn>
    <v-btn to="/contact" class="mr-2">Contato</v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Menu'
})
</script>

<style scoped>
.nav-menu {
  display: none;
}


@media(min-width: 960px) {
  .nav-menu {
    display: block;
  }
}
</style>