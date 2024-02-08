<template>
  <v-footer class="footer mt-10">
    <v-container class="container">
      <v-row class="flex-column flex-sm-row justify-space-between align-center">
        <div class="py-2">
          <p class="text-body"> 
            © 2024  
            by João Vitor.
            All rights reserved.
          </p>
        </div>
        <div>
          <LinksSocialMedias/>
        </div>
      </v-row>

    </v-container>
  </v-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LinksSocialMedias from './LinksSocialMedias.vue';

export default defineComponent({
    name: 'Footer',
    components: { LinksSocialMedias }
});
</script>

<style scoped>
.footer {
  background:#1a1919;
  max-height: 20vh;
}

.container {
  max-width: 1200px;
}
</style>