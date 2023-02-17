<script setup lang="ts">
import { reactive } from 'vue'

import { computed } from 'vue'

import { useDisplay } from 'vuetify'
import { RouteNames } from '@/router/routes'

const { name } = useDisplay()

const height = computed(() => {
  switch (name.value) {
    case 'xs':
      return 'auto'
    case 'sm':
      return 'auto'
    case 'md':
      return '160'
    case 'lg':
      return '150'
    case 'xl':
      return '150'
    case 'xxl':
      return '150'
  }

  return undefined
})

const carouselHeight = computed(() => {
  switch (name.value) {
    case 'xs':
      return '750'
    case 'sm':
      return '890'
    case 'md':
      return '420'
    case 'lg':
      return '450'
    case 'xl':
      return '450'
    case 'xxl':
      return '450'
  }

  return undefined
})

const addMargin = computed(() => {
  switch (name.value) {
    case 'xs':
      return 'mt-10'
    case 'sm':
      return 'mt-10'
  }

  return undefined
})
// images in carousel
const images = reactive([
  'camera/img1.jpg',
  'carousel-maloca.jpg',
  'carousel-frog2.jpg'
])
const description = reactive([
  'You will have the opportunity to immerse yourself in the atmosphere of the Jungles of Peru',
  'A retreat for those who wish to delve deeper into the secrets of their mind and subconscious and reveal the main obstacles that are holding you back in moving through Life.',
  'Retreat - Immersion in Ayahuasca Ceremony and Deep Healing Amazonian Diet. To work out root issues and healing. To reveal the depths of your subconscious, your strengths, abilities and study of Life as it is.'
])
const title = reactive([
  'Jungle experience',
  'Ayahuasca ceremony',
  'Kambo healing experience'
])
const price = reactive([
  'Price: $30 / day',
  'Price: $500 / duration 7 days',
  'Price: $200 / duration 3 days'
])
</script>

<template>
  <v-container class="pa-0" fluid>
    <v-row>
      <v-col cols="12" class="pa-0">
        <v-carousel :height="carouselHeight" show-arrows="hover">
          <v-carousel-item v-for="(text, i) in description" :key="i">
            <v-row no-gutters class="fill-height header-text">
              <v-col cols="12" md="6" lg="6">
                <v-sheet style="height: 100%">
                  <div class="d-flex fill-height justify-center align-center">
                    <v-img
                      style="height: 100%"
                      eager
                      cover
                      aspect-ratio="1.7778"
                      :src="images[i]"
                    ></v-img>
                  </div>
                </v-sheet>
              </v-col>
              <v-col
                class="carousel_block"
                align-self="center"
                cols="12"
                md="6"
                lg="6"
              >
                <v-container>
                  <v-card
                    outlined
                    color="transparent"
                    class="d-flex justify-center mt-5 header-text__title"
                    flat
                  >
                    {{ title[i] }}
                  </v-card>
                  <v-card
                    outlined
                    color="transparent"
                    :min-height="height"
                    class="d-flex align-center justify-center mx-12"
                    flat
                  >
                    <div class="header-text__small">
                      <p class="text-justify">
                        {{ text }}
                      </p>
                    </div>
                  </v-card>

                  <v-card
                    outlined
                    color="transparent"
                    class="d-flex justify-center header-text__price"
                    :class="addMargin"
                    flat
                  >
                    {{ price[i] }}
                  </v-card>
                  <!-- <v-card
                    height="100px"
                    outlined
                    color="transparent"
                    flat
                    class="d-flex justify-center align-center"
                  >
                    <div class="pa-1">
                      <v-btn class="ma-2" outlined color="indigo" dark>
                        Read more
                      </v-btn>
                    </div>
                  </v-card> -->
                </v-container>
              </v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.header-text {
  font-family: 'Leto';

  color: white;
  // background-color: #d6f2e7;
  // background: linear-gradient(to top, lime, 20%, cyan);
  background: linear-gradient(to top, #000000, rgb(5 0 90));
  // background: linear-gradient(to top, #85ffbd, #fffb7d);

  &__small {
    font-size: 21px;
    font-weight: 500;
    line-height: 160%;
    opacity: 0.9;
  }
  &__title {
    font-size: 35px;
    margin-right: 0;
    margin: 40px 0 10px;
    letter-spacing: 13px;
    line-height: 1.4;
    font-weight: 500;
    letter-spacing: -1.6px;
    opacity: 0.9;
  }

  &__price {
    opacity: 0.9;
    font-weight: bold;
    font-size: 30px;
    letter-spacing: 13px;
    line-height: 1.4;
    font-weight: 500;
    letter-spacing: -1.6px;
  }

  &__btn_color {
    background-color: #f79734;
    color: #333333;
  }
}
</style>
