<script setup lang="ts">
import configs from '@/configs'
import { computed, ref } from 'vue'

import { useDisplay } from 'vuetify'

const { name } = useDisplay()

const offsetTop = ref(0)
const elevation = ref(0)
const appColor = ref('transparent')
const appbarColor = ref(true)

function onScroll(Event: any) {
  if (Event.target.scrollingElement.scrollTop !== offsetTop.value) {
    // if (!appbarColor.value) return

    appColor.value = 'rgb(255,255,255, 1.0)'
    elevation.value = 6
    appbarColor.value = false
  } else {
    // if (appbarColor.value) return
    appColor.value = 'rgb(255,255,255, 0.0)'
    elevation.value = 0
    appbarColor.value = true
  }
}

const isFont = computed(() => {
  switch (name.value) {
    case 'xs':
      return 'header-text__font-name_small'
    case 'sm':
      return 'header-text__font-name_small'
    case 'md':
      return 'header-text__font-name'
    case 'lg':
      return 'header-text__font-name'
    case 'xl':
      return 'header-text__font-name'
    case 'xxl':
      return 'header-text__font-name'
  }

  return undefined
})
</script>
<template>
  <v-app-bar
    :style="{ backgroundColor: `${appColor} ` }"
    v-scroll="onScroll"
    class="animateAppbar header-text"
    :elevation="elevation"
  >
    <v-container>
      <v-row height="800px">
        <v-img src="frog.png" max-height="45" max-width="45" contain></v-img>
        <v-app-bar-title
          class="d-flex align-center justify-start pl-3"
          :class="[appbarColor ? 'white_color' : 'black_color', isFont]"
        >
          YOUNGHEART
        </v-app-bar-title>
        <div class="d-flex align-center justify-end">
          <v-app-bar-title>
            <v-icon icon="mdi-whatsapp" color="green"></v-icon>
          </v-app-bar-title>

          <div
            class="pl-2"
            :class="[appbarColor ? 'white_color' : 'black_color', isFont]"
          >
            {{ configs.phone }}
          </div>
        </div>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<style scoped lang="scss">
.header-text {
  font-family: 'Leto';
  color: white;
  &__small {
    font-family: 'Leto';
    font-size: 23px;
    opacity: 0.7;
    line-height: 160%;
  }
  &__title {
    font-weight: bold;
    font-weight: 700;
    margin-right: 0;
    margin: 15px 0 0px;
    font-size: 54px;
  }

  &__font-name {
    font-size: 25px;
  }

  &__font-name_small {
    font-size: 18px;
  }
}

.white_color {
  color: white;
}
.black_color {
  color: black;
  opacity: 0.7;
}
.animateAppbar {
  transition: 0.25s background-color ease-in;
}
</style>
