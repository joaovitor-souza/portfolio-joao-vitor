<template>
  <v-card-item>
    <div>
      <p>{{ content }}</p>
    </div>
  </v-card-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TextProject',
  props: {
    content: String,
  },
});
</script>
