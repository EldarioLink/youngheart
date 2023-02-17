<script setup lang="ts">
import LandingWhyCard from '@/components/LandingWhyCard.vue'
import { computed } from 'vue'
import { useDisplay } from 'vuetify/lib/framework.mjs'

const { name } = useDisplay()

const font = computed(() => {
  switch (name.value) {
    case 'xs':
      return 'main-powerful__title_small'
    case 'sm':
      return 'main-powerful__title'
    case 'md':
      return 'main-powerful__title'
    case 'lg':
      return 'main-powerful__title'
    case 'xl':
      return 'main-powerful__title'
    case 'xxl':
      return 'main-powerful__title'
  }

  return undefined
})
</script>

<template>
  <v-container class="main-powerful pt-16" fluid>
    <v-row justify="center" class="pb-11">
      <h2 class="pb-11 text-center" :class="font">Why you should choose us</h2>
    </v-row>
    <v-container class="pa-0">
      <v-row class="justify-center mb-10">
        <v-col>
          <v-row class="justify-center">
            <v-col cols="12" sm="8" md="4" class="justify-center">
              <LandingWhyCard
                class="ma-2"
                img="money1.png"
                title="No Prepayment"
                text="Prepayment for ayahuasca ceremony is not required - you can always choose not to go through the ceremony if you don't feel like it - and it's ok! "
              />
            </v-col>
            <v-col cols="12" sm="8" md="4" class="justify-center">
              <LandingWhyCard
                class="ma-2"
                img="leafs.png"
                title="Comfortable Authenticity"
                text="We are a small community in real jungle, but with a comfort of modern lifestyle. Wifi, showers and electricity!"
              />
            </v-col>
            <v-col cols="12" sm="8" md="4" class="justify-center">
              <LandingWhyCard
                class="ma-2"
                img="doll2.png"
                title="Best Value"
                text="We are interested in providing healing experience at a reasonable price"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<style scoped lang="scss">
.main-powerful {
  font-family: 'Leto';

  background: #d6f2e7;
  color: #49986e;

  &__title {
    font-size: 3em;
    font-weight: 900;
    line-height: 1;
  }
  &__title_small {
    font-size: 30px;
    font-weight: 700;
    line-height: 1;
  }
}
</style>
