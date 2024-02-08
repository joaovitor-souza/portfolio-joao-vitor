<template>
  <ul class="d-flex justify-center justify-md-start ga-4">
    <li>
      <a target="_blank" href="https://www.linkedin.com/in/joao-vitor-fernandes/" class="btn-link">
        <v-icon size="large" icon="mdi-linkedin"></v-icon>
      </a>
    </li>
    <li>
      <a target="_blank" href="https://github.com/joaovitor-souza" class="btn-link">
        <v-icon size="large" icon="mdi-github"></v-icon>
      </a>
    </li>
    <li>
      <a target="_blank" href="https://wa.me/5531985325049" class="btn-link">
        <v-icon size="large" icon="mdi-whatsapp"></v-icon>
      </a>
    </li>
    <li>
      <a target="_blank" href="https://www.instagram.com/joaovitor__fsouza/" class="btn-link">
        <v-icon size="large" icon="mdi-instagram"></v-icon>
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SocialMedias'
})
</script>

<style scoped>
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.btn-link {
  transition: 0.2s ease;
}

.btn-link:hover {
  color: var(--primary);
}
</style>