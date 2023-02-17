<script setup lang="ts">
import LandingWhy from '@/components/LandingWhy.vue'
import FooterItem from '@/components/FooterItem.vue'
import HeaderItem from '@/components/HeaderItem.vue'
import MainItem from '@/components/MainItem.vue'
import PriceCarousel from '@/components/PriceCarousel.vue'
import imageSection from '@/components/imageSection.vue'
</script>

<template>
  <v-app>
    <HeaderItem />
    <PriceCarousel />
    <MainItem />
    <imageSection />
    <LandingWhy />
    <FooterItem />
  </v-app>
</template>
