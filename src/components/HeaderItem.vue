<script setup lang="ts">
import { computed } from 'vue'

import { useDisplay } from 'vuetify'

const { name } = useDisplay()

const isHeight = computed(() => {
  switch (name.value) {
    case 'xs':
      return false
    case 'sm':
      return false
    case 'md':
      return false
    case 'lg':
      return true
    case 'xl':
      return true
    case 'xxl':
      return true
  }

  return undefined
})

const isFont = computed(() => {
  switch (name.value) {
    case 'xs':
      return false
    case 'sm':
      return false
    case 'md':
      return true
    case 'lg':
      return true
    case 'xl':
      return true
    case 'xxl':
      return true
  }

  return undefined
})

const cols = computed(() => {
  switch (name.value) {
    case 'xs':
      return 12
    case 'sm':
      return 12
    case 'md':
      return 8
    case 'lg':
      return 8
    case 'xl':
      return 8
    case 'xxl':
      return 8
  }

  return undefined
})
</script>

<template>
  <v-container class="pa-0 header-text" fluid style="max-height: 480px">
    <v-img src="jungle23.jpg" cover>
      <template v-slot:placeholder>
        <div class="d-flex align-center justify-center fill-height">
          <v-progress-circular
            color="grey-lighten-4"
            indeterminate
          ></v-progress-circular>
        </div>
      </template>

      <v-container>
        <v-container style="height: 130px"></v-container>

        <v-row>
          <v-col :cols="cols">
            <v-row class="mb-5">
              <span
                class="pt-5"
                :class="[
                  isFont ? 'header-text__title ' : 'header-text__title_sm',
                  { line_height: isHeight }
                ]"
              >
                Jungle Experience
              </span>
            </v-row>
            <v-row>
              <span class="header-text__small">
                Immerse yourself in authentic experience. Heal with the help of
                jungle, ayahuasca ceremonies and kambo.
              </span>
            </v-row>
          </v-col>
          <v-col align-self="end" v-if="isFont" cols="4">
            <v-row></v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </v-container>
</template>

<style scoped lang="scss">
.header-text {
  font-family: 'Circular';
  color: white;
  &__small {
    font-family: 'Leto';
    font-size: 23px;
    opacity: 0.7;
    line-height: 160%;
  }
  &__title {
    font-family: 'Leto';
    font-weight: bold;
    font-weight: 700;
    margin-right: 0;
    margin: 15px 0 0px;
    font-size: 54px;
  }
  &__title_sm {
    font-family: 'Leto';
    font-weight: bold;
    font-weight: 700;
    margin-right: 0;
    margin: 0px 0px;
    font-size: 40px;
  }
  &__small_sm {
    font-family: 'Leto';
    font-size: 13px;
    opacity: 0.7;
    line-height: 160%;
  }
}

.line_height {
  line-height: 1.8;
}
.white_color {
  color: white;
}
.movearea {
  transition: 0.25s background-color ease-in;
}
.font-name {
  font-family: 'Leto';

  font-size: 25px;
}
</style>
