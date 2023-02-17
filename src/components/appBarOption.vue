<script setup lang="ts">
import configs from '@/configs'
import { ref } from 'vue'

const appColor = ref('rgb(255,255,255, 1.0')
</script>
<template>
  <v-app-bar
    :style="{ backgroundColor: `${appColor} ` }"
    class="movearea header-text"
    outlined
  >
    <v-container>
      <v-row height="800px">
        <v-img src="frog.png" max-height="45" max-width="45" contain></v-img>
        <v-app-bar-title
          class="d-flex align-center justify-start pl-3 black_color font-name'"
        >
          YOUNGHEART
        </v-app-bar-title>
        <div class="d-flex align-center justify-end">
          <v-app-bar-title>
            <v-icon icon="mdi-whatsapp" color="green"></v-icon>
          </v-app-bar-title>

          <div class="pl-2 black_color header-text__font-name">
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
}

.black_color {
  color: black;
  opacity: 0.7;
}
.movearea {
  transition: 0.25s background-color ease-in;
}
</style>
