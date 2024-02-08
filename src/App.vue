<template>
  <v-app>
    <v-main>
      <RouterView />
    </v-main>
    <Footer/>
  </v-app>
</template>

<script lang="ts">
import Footer from '../components/Footer.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    Footer
  }
})
</script>