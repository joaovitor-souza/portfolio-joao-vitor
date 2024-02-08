<template>
  <Header />
  <v-main class="main">
    <v-container>
      <v-row>
        <v-col cols="12" class="text-center">
          <h1 class="mb-5">Contato <span class="color-primary">.</span></h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-sheet max-width="700" class="mx-auto pa-10">
            <v-form action="https://api.staticforms.xyz/submit" method="post"> 
              <div class="pb-5">
                <v-text-field v-model="firstName" :rules="nameRules" label="Primeiro Nome" type="name" name="name"></v-text-field>
              </div>
              <div class="pb-5">
                <v-text-field v-model="email" :rules="emailRules" label="Email" type="email" name="email"></v-text-field>
              </div>
              <div class="pb-5">
                <v-textarea v-model="message" label="Message" name="message"></v-textarea>
              </div>
              <input type="hidden" name="accessKey" value="5f38fc0e-1e5d-49a1-8d09-5556c30f91b8">
              <input type="hidden" name="redirectTo" value="http://localhost:3000/#/contact">
              <v-btn width="100" elevation="5" type="submit" class="mt-2">Enviar</v-btn>
            </v-form>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import Header from '../components/Header.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Contact',
  data: () => ({
    firstName: '',
    email: '',
    message: '',
    nameRules: [
      (value: string) => {
        if (value) return true;
        return 'Você deve inserir um nome.';
      },
    ],
    emailRules: [
      (value: string) => {
        if (value) return true;
        return 'Você deve inserir um endereço de e-mail.';
      },
      (value: string) => {
        if (/.+@.+\..+/.test(value)) return true;
        return 'Endereço inválido.';
      },
    ],
  }),
  components: { Header }
});
</script>

<style scoped>
.main {
  min-height: 100vh;
}
</style>
