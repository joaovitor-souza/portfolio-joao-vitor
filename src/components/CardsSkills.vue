<template>
  <v-card class="card h-100" variant="tonal">
    <span class="border-top"></span>
    <span class="border-right"></span>
    <span class="border-bottom"></span>
    <span class="border-left"></span>
    <div>
      <v-card-item class="pt-10 pb-0">
        <v-icon class="icon color-primary my-5" size="60" :icon="icon"></v-icon>
      </v-card-item>
      <div>
        <v-card-title>
          {{ title }}
        </v-card-title>
      </div>
      <v-card-item>
        <p>
          {{ content }}
        </p>
      </v-card-item>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'CardSkill',
  props: {
    icon: String,
    title: String,
    content: String,
  },
});
</script>

<style scoped>
.card {
  cursor: pointer;
  position: relative;
}

.card:hover .border-top {
  position: absolute;
  top: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(to right, transparent, var(--primary));
  animation: border-effect-top 2s  linear infinite;
}

@keyframes border-effect-top {
  0% {
    transform: translateX(-100%)
  }
  100% {
    transform: translateX(100%)
  }
}
.card:hover .border-right {
  position: absolute;
  top: 0;
  right: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(to bottom, transparent, var(--primary));
  animation: border-effect-right 2s  linear infinite;
  animation-delay: 1s;

}

@keyframes border-effect-right {
  0% {
    transform: translateY(-100%)
  }
  100% {
    transform: translateY(100%)
  }
}
.card:hover .border-bottom {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(to left, transparent, var(--primary));
  animation: border-effect-bottom 2s  linear infinite;

}

@keyframes border-effect-bottom {
  0% {
    transform: translateX(100%)
  }
  100% {
    transform: translateX(-100%)
  }
}

.card:hover .border-left {
  position: absolute;
  left: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(to top, transparent, var(--primary));
  animation: border-effect-left 2s  linear infinite;
  animation-delay: 1s;
}

@keyframes border-effect-left {
  0% {
    transform: translateY(100%)
  }
  100% {
    transform: translateY(-100%)
  }
}

.icon {
  animation: icon-effect 1.5s infinite alternate;
}

@keyframes icon-effect {
  0% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(10px); 
  }
}
</style>