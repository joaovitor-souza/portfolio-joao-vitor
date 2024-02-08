<template>
  <Header />
  <v-main>
    <v-container class="container">
      <v-row>
        <v-col class="text-center">

          <h1>Projetos <span class="color-primary">.</span></h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card class="card mx-auto my-8" title="Meu portfolio" prepend-icon="mdi-card-account-details" append-icon="mdi-open-in-new" href="https://portfolio-joao-vitor-git-main-joaovitor-souza.vercel.app/" target="_blank" elevation="10" rel="noopener" max-width="700">
            <div class="img-container">
              <v-img class="img-card align-end text-white" src="../assets/imgs/img-portfolio.png" cover>
              </v-img>
            </div>
            <TextProject :content="textProject1" />
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card class="card mx-auto my-8" title="Busca pelo usuário" prepend-icon="mdi-magnify" append-icon="mdi-open-in-new" href="https://joaovitor-souza.github.io/javascript-avancado-api-github/" target="_blank" elevation="10" rel="noopener" max-width="700">
            <div class="img-container">
              <v-img class="img-card align-end text-white" src="../assets/imgs/buscar-usario.png" cover>
              </v-img>
            </div>
            <TextProject :content="textProject2" />
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card class="card mx-auto my-8" title="Cookin' up" prepend-icon="mdi-food-outline" append-icon="mdi-open-in-new" href="https://cookin-up-alpha.vercel.app/" target="_blank" elevation="10" rel="noopener" max-width="700">
            <div class="img-container">
              <v-img class="img-card align-end text-white" src="../assets/imgs/cookin-up.png" cover>
              </v-img>
            </div>
            <TextProject :content="textProject3" />
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card class="card mx-auto my-8" title="Carrossel de imagens Pokemon" prepend-icon="mdi-pokeball" append-icon="mdi-open-in-new" href="https://joaovitor-souza.github.io/projeto-pokemon-slider/" target="_blank" elevation="10" rel="noopener" max-width="700">
            <div class="img-container">
              <v-img class="img-card align-end text-white" src="../assets/imgs/img-projeto-pokemon.png" cover>
              </v-img>
            </div>
            <TextProject :content="textProject4" />
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card class="card mx-auto my-8" title="Lading Page" prepend-icon="mdi-page-layout-body" append-icon="mdi-open-in-new" href="https://joaovitor-souza.github.io/lading-page-agencia-xyz/" target="_blank" elevation="10" rel="noopener" max-width="700">
            <div class="img-container">
              <v-img class="img-card align-end text-white" src="../assets/imgs/lading-page.png" cover>
              </v-img>
            </div>
            <TextProject :content="textProject5" />
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card class="card mx-auto my-8" title="The Last Of US" prepend-icon="mdi-controller" append-icon="mdi-open-in-new" href="https://joaovitor-souza.github.io/projeto-the-last-of-us/" target="_blank" elevation="10" rel="noopener" max-width="700">
            <div class="img-container">
              <v-img class="img-card align-end text-white" src="../assets/imgs/the-last-of-us.png" cover>
              </v-img>
            </div>
            <TextProject :content="textProject6" />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import Header from '../components/Header.vue';
import { defineComponent, ref } from 'vue';
import TextProject from '@/components/TextProject.vue';


export default defineComponent({
  name: 'Projects',
  components: { TextProject },
  setup() {
    const textProject1 = ref("Nesse projeto, desenvolvi minhas habilidades, competências, qualificações e experiência profissional. Construi sozinho e sem nenhuma ajuda, com todo o conhecimento que tenho até aqui. Projeto foi feito com o framework Vue.js 3, junto com o Vuetify.")

    const textProject2 = ref("O desafio nesse projeto foi buscar as informações do usuário pela API do GitHub usando o fetch. Como a foto de perfil, nome do usuário, seguidores, repositórios e os 10 últimos eventos feitos pelo usuário. Projeto feito com HTML, CSS e Javascript")

    const textProject3 = ref("Esse foi o primeiro projeto utilizando o framework Vue.js 3. Ao escolher os ingredientes, realiza uma busca de receitas de acordo com os ingredientes selecionados. A URL que foi utilizada para obter o JSON foi disponibilizada a partir de um Gist do GitHub.")

    const textProject4 = ref("Esse projeto consiste em fazer um carrossel de imagens utilizando cards de Pokémons, feito com HTML5, CSS3 e Javascript.")

    const textProject5 = ref("Nesse projeto foi desenvolvida uma Lading Page simples com HTML5 e CSS3. O intuito foi aperfeiçoar as habilidades com o Grid e Flexbox, no começo dos estudos.")

    const textProject6 = ref("O projeto The Last Of US foi desenvolvido para aprimorar as habilidades com HTML, CSS3 e Javascript.")

    return {
      textProject1,
      textProject2,
      textProject3,
      textProject4,
      textProject5,
      textProject6,
    }
  }
})
</script>

<style scoped>
.container {
  max-width: 1200px;
}
.img-container {
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.img-card {
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-in-out;
}

.card:hover .img-card {
  transform: scale(1.2);
}</style>