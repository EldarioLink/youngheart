<script setup lang="ts">
import qrCode from '@/components/qrCode.vue'
import configs from '@/configs'
import { computed } from 'vue'

import { useDisplay } from 'vuetify'

const { name } = useDisplay()

// added class for centeralize
const centerilizeClass = computed(() => {
  switch (name.value) {
    case 'xs':
      return 'mx-auto mt-10'
    case 'sm':
      return 'mx-auto mt-9'
    case 'md':
      return 'ml-auto'
    case 'lg':
      return 'ml-auto'
    case 'xl':
      return 'ml-auto'
    case 'xxl':
      return 'ml-auto'
  }

  return undefined
})
</script>

<template>
  <v-container class="main_section pb-16 pt-13">
    <v-row dense justify="center">
      <v-col cols="12" sm="11" md="7">
        <v-row>
          <span class="main_section__main_sub">
            <p class="text-justify">
              Ayahuasca, also called Ayahuasca or Ayahuasca, is a traditional
              ritual of the countries of South America that allows you to awaken
              your consciousness and comprehend the sacred truths about the
              essence of being. The participant of the rite will receive the
              experience of a comprehensive understanding of life, exactly in
              the volume in which he can accept it.
            </p>
          </span>

          <span class="main_section__main_sub mt-3">
            <p class="text-justify">
              “Knowing yourself in harmony with nature, you will know the whole
              world,” says ancient Greek wisdom.
            </p>
          </span>
          <span class="main_section__main_sub mt-3">
            <p class="text-justify">
              But how to do it in modern conditions? Where can I find answers to
              the centuries-old questions of philosophers, scientists and
              religious figures:
            </p>
          </span>
          <span class="main_section__main_sub mt-3">
            <p class="text-justify">
              “Who am I? What is my purpose? How can I live in this world and
              where should I strive?”
            </p>
          </span>
          <span class="main_section__main_sub mt-3">
            <p class="text-justify">
              It is impossible to obtain detailed knowledge theoretically or
              draw from external sources. The only sure way is to experience it
              personally.
            </p>
          </span>
        </v-row>
      </v-col>
      <v-col cols="12" md="5">
        <v-card
          :class="centerilizeClass"
          max-width="300"
          class="main_section"
          elevation="4"
        >
          <v-card-item>
            <div class="main_section__ph_title mb-1">
              LINK WITH ME VIA WHATSUP
            </div>

            <div class="d-flex align-center justify-start">
              <v-icon icon="mdi-whatsapp" color="green"></v-icon>

              <div class="main_section__phone pl-1">
                {{ configs.phone }}
              </div>
            </div>

            <div class="main_section__ph_small mt-2">
              Feel free to connect with me any time
            </div>
          </v-card-item>
        </v-card>

        <qrCode></qrCode>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.main_section {
  color: #333333;

  font-family: Circular, sans-serif;

  &__small {
    font-size: 18px;
    opacity: 0.7;
    line-height: 160%;
  }
  &__phone {
    font-size: 22px;
    opacity: 0.9;
    line-height: 160%;
  }
  &__ph_title {
    font-size: 14px;
    opacity: 1;
    line-height: 160%;
  }
  &__ph_small {
    font-size: 13px;
    opacity: 1;
    line-height: 160%;
  }
  &__title {
    font-size: 35px;
    opacity: 0.8;
    font-weight: bold;
    margin-right: 0;
    margin: 40px 0 10px;
    line-height: 1.1;
    font-weight: 700;
    letter-spacing: -1.6px;
  }
  &__main_title {
    font-size: 28px;
    font-weight: bold;
  }
  &__main_sub {
    font-size: 18px;
    line-height: 160%;
    font-weight: 400;
  }
}
</style>
