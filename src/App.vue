<script setup lang="ts">
import AppBar from '@/components/appBar.vue'
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'

const route = useRoute()
const isOption = computed(() => {
  return route.name !== '/option'
})
</script>

<template>
  <v-app>
    <AppBar v-if="isOption" />
    <RouterView />
  </v-app>
</template>

<style lang="scss">
@font-face {
  font-family: 'Circular';
  src: url('@/assets/fonts/CircularStd-Book.otf');
}

@font-face {
  font-family: 'Leto';
  src: url('@/assets/fonts/Leto Text Sans Defect.otf');
}
</style>
