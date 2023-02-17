<script setup lang="ts">
const props = defineProps<{
  img: string
  title: string
  text: string
}>()
</script>

<template>
  <v-sheet class="mpc pa-5" :rounded="'xl'">
    <!-- lazy-src="https://picsum.photos/id/11/10/6" -->
    <v-row justify="center">
      <v-img class="mpc__img" height="350" width="350" :src="props.img" />
    </v-row>

    <v-row justify="center" align-content="center">
      <p class="mpc__title mb-5 mt-5">{{ props.title }}</p>
    </v-row>
    <div class="mpc__text">
      {{ props.text }}
    </div>
  </v-sheet>
</template>

<style scoped lang="scss">
.mpc {
  height: 100%;
  color: #49986e;

  &__title {
    text-align: center;
    font-size: 30px;
    opacity: 1;
    font-weight: 700;
  }

  &__text {
    text-align: center;
    color: #333333;
    font-size: 18px;
  }
  &__img {
    opacity: 0.9;
  }
}
</style>
