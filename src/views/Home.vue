<template>
  <Header />
  <v-main class="main mt-15 mt-lg-0 pt-0 pb-15 d-flex align-center ">
    <v-container class="d-flex justify-center">
      <v-row class="container">
        <v-col class="order-2 order-md-1  my-5" cols="12" md="4">
          <div class="d-flex flex-column ga-5 ">
            <div class="title text-center text-md-start ">
              <h1 class="font-weight-bold">João Vitor <span class="color-primary">.</span></h1>
            </div>
            <div class="d-flex justify-center justify-md-start">
              <v-divider class="hr" :thickness="4"></v-divider>
            </div>
            <div class="py-1 ">
              <LinksSocialMedias />
            </div>
            <div class="d-flex justify-center justify-md-start">
              <v-btn to="/contact" class="btn rounded-0 " variant="outlined">
                Contate-me
              </v-btn>
            </div>
          </div>
        </v-col>
        <v-col class="order-1 order-md-2 text-center" cols="12" md="4">
          <div class="div-overlaid">
            <v-avatar class="avatar" image="../../public/images/avatar.png" color="#FFC400"></v-avatar>
            <div class="shadow rounded-circle">
            </div>
          </div>
        </v-col>
        <v-col class="order-3 order-md-3 my-md-5 mt-15 " cols="12" md="4">
          <div class="ml-5 d-flex justify-end">
            <div class="">
              <p class="text-start color-primary text-md-start text-uppercase text-overline">Introdução</p>
              <h2 class="text-start text-md-start mb-6 mb-md-2">Desenvolvedor Frontend</h2>
              <p>Atualmente sou um Desenvolvedor Frontend Júnior, tenho experiência com as tecnologias HTML, CSS,
                Javascript e alguns frameworks como Bootstrap, Vue.js e React. Estou disposto a adquirir ainda mais
                experiência e crescer na carreira como Desenvolvedor. </p>
                <a class="color-primary" target="_blank" href="../../public/joaovitor-dev.pdf">Veja meu currículo</a>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '../components/Header.vue';
import LinksSocialMedias from 'vue'

export default defineComponent({
  name: 'Home'
})
</script>

<style scoped>
.container {
  max-width: 1200px;
}

.main {
  min-height: 100vh;
}
.avatar {
  width: 200px;
  height: 200px;
  position: relative;
  box-shadow: -10px 11px 8px 5px rgba(0, 0, 0, 0.76);
  -webkit-box-shadow: -10px 11px 8px 5px rgba(0, 0, 0, 0.76);
  -moz-box-shadow: -10px 11px 8px 5px rgba(0, 0, 0, 0.76);
  z-index: 2;
}

.hr {
  max-width: 200px;
  color: var(--primary);
  opacity: 0.8;
}

.btn {
  border: solid 2px var(--primary);
  transition: all .5s ease;
  color: var(--primary);
  text-transform: uppercase;
  text-align: center;
  line-height: 1;
  background-color: transparent;
  padding: 10px;
  outline: none;
}

.btn:hover {
  color: #fff;
  background-color: var(--yellow-darken);
}

.div-overlaid {
  position: relative;
}

.shadow {
  background-color: #212121;
  z-index: 0;
  width: 200px;
  height: 200px;
  position: absolute;
  left: 180px;
  bottom: -60px;
  display: none;
}


@media(min-width: 960px) {
  .avatar {
    width: 250px;
    height: 250px;
    z-index: 1;
  }

  .shadow {
    z-index: 0;
    width: 240px;
    height: 240px;
    position: absolute;
    left: 0px;
    bottom: -100px;
    display: block;
  }

  .title h1 {
    font-size: 34px;
    z-index: 2;
  }

  .hr {
    max-width: 100px;
  }
}
</style>