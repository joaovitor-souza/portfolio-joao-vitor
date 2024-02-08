<template>
  <Header />
  <v-main class="main ">
    <v-container class="d-flex justify-center align-center flex-column">
      <v-row>
        <v-col class="text-center mb-5">
          <h1>Habilidades <span class="color-primary">.</span></h1>
        </v-col>
      </v-row>
      <v-row class="container">
        <v-col cols="12" sm="6" md="4">
          <CardsSkills icon="mdi-language-html5" title="HTML 5" :content="htmlContent" />
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <CardsSkills icon="mdi-language-css3" title="CSS 3" :content="cssContent" />
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <CardsSkills icon="mdi-language-javascript" title="Javascript" :content="jsContent" />
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <CardsSkills icon="mdi-vuejs" title="Vue.js 3" :content="vueContent" />
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <CardsSkills icon="mdi-git" title="Git" :content="gitContent" />
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <CardsSkills icon="mdi-github" title="GitHub" :content="githubContent" />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import Header from '../components/Header.vue';
import { defineComponent, ref } from 'vue';
import CardsSkills from '../components/CardsSkills.vue';


export default defineComponent({
  name: 'Skills',
  setup() {
    const htmlContent = ref("A primeira linguagem que eu aprendi HTML5 (Hypertext Markup Language). Conheço as tags e meta-tags mais usadas. Além de usar a semântica ao meu favor, na hora da estruturação de páginas.");
    const githubContent = ref("Desde os começos dos estudos, tenho o GitHub como plataforma para hospedagens e versionamento de projetos. Sei suas principais funções, como: criar, editar e excluir repositórios.");
    const cssContent = ref("Tenho bom conhecimento com a linguagem de estilização CSS3. Entendo sobre a suas diversas funcionalidades: display, grid, position. Sei o suficiente sobre responsividade, pseudo classes pseudo-elementos, especifidade. E para ser mais produtivo com a linguagem, também uso o framework Bootstrap 5.");
    const jsContent = ref("O Javascript foi a minha primeira linguagem de programação, entendo suas funcionalidades principais: arrays, variáveis, funções, objetos, requisições a API, dentre outros. ")
    const vueContent = ref("O meu atual framework Javascript, o Vue.js 3, uma biblioteca de fácil aprendizado e eficaz. Compreendo sobre os componentes, estado, reatividade, dentre outros. Para produzir ainda mais, utilizo o Vuetify, uma biblioteca que trabalha junto com o Vue. ")
    const gitContent = ref("A ferramenta de versões Git, uso para subir meus projetos para o GitHub. Sei seus principais comandos, pois já trabalho com ele à um tempo.  ")
    return {
      htmlContent,
      cssContent,
      githubContent,
      jsContent,
      vueContent,
      gitContent
    };
  },
  components: { CardsSkills }
})
</script>

<style scoped>
.main {
  min-height: 100vh;
}

.container {
  max-width: 1200px;

}
</style>