<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

import { useDisplay } from 'vuetify'

const { name } = useDisplay()

const isHeight = computed(() => {
  switch (name.value) {
    case 'xs':
      return 'auto'
    case 'sm':
      return 'auto'
    case 'md':
      return '700px'
    case 'lg':
      return '700px'
    case 'xl':
      return '700px'
    case 'xxl':
      return '700px'
  }

  return undefined
})
// carousel images
const items = ref([
  {
    src: 'camera/img1.jpg'
  },
  {
    src: 'camera/img2.jpg'
  },
  {
    src: 'camera/img3.jpg'
  },
  {
    src: 'camera/img4.jpg'
  },
  {
    src: 'camera/img5.jpg'
  },
  {
    src: 'camera/img6.jpg'
  },
  {
    src: 'camera/img8.jpg'
  },
  {
    src: 'camera/house.jpg'
  },
  {
    src: 'camera/house1.jpg'
  },
  {
    src: 'camera/ship.jpg'
  }
])
const dialog = ref(false)
const visible = computed(() => {
  switch (name.value) {
    case 'xs':
      return 'd-none'
  }

  return undefined
})
// when clicking on image - show exact this image via deletimg/pushing image
function showImg(image: any) {
  const filteredImages = items.value.filter((img: any) => img.src !== image)
  filteredImages.unshift({ src: image })
  items.value = filteredImages

  dialog.value = true
}

const images = reactive([
  'camera/img1.jpg',
  'camera/img2.jpg',
  'camera/img3.jpg',
  'camera/img4.jpg',
  'camera/img5.jpg',
  'camera/img6.jpg',
  'camera/img8.jpg',
  'camera/house.jpg',
  'camera/house1.jpg',
  'camera/ship.jpg'
])
</script>

<template>
  <v-container height="400px" class="py-2 rounded-8" fluid>
    <v-row dense flat>
      <v-col cols="12" sm="6">
        <v-img
          @click="showImg(images[0])"
          class="imgPointer"
          eager
          height="100%"
          cover
          aspect-ratio="1.7778"
          :src="images[0]"
        ></v-img>
      </v-col>
      <v-col cols="12" sm="6" :class="visible">
        <v-row dense>
          <v-col cols="12" sm="6">
            <v-img
              eager
              @click="showImg(images[1])"
              class="imgPointer"
              cover
              aspect-ratio="1.7778"
              :src="images[1]"
            ></v-img>
          </v-col>
          <v-col cols="12" sm="6">
            <v-img
              eager
              @click="showImg(images[7])"
              class="imgPointer"
              cover
              aspect-ratio="1.7778"
              :src="images[7]"
            ></v-img>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="12" sm="6">
            <v-img
              eager
              @click="showImg(images[3])"
              class="imgPointer"
              cover
              aspect-ratio="1.7778"
              :src="images[3]"
            ></v-img>
          </v-col>
          <v-col cols="12" sm="6">
            <v-img
              eager
              @click="showImg(images[4])"
              class="imgPointer"
              cover
              aspect-ratio="1.7778"
              :src="images[4]"
            ></v-img>

            <!-- <v-btn class="btn-images" elevation="4" variant="tonal">
              show all
            </v-btn> -->
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
  <div class="text-center">
    <v-dialog v-model="dialog">
      <v-carousel :height="isHeight" hide-delimiters>
        <v-carousel-item v-for="(item, i) in items" :key="i">
          <v-img :src="item.src" contain eager></v-img>
        </v-carousel-item>
      </v-carousel>
    </v-dialog>
  </div>
</template>

<style scoped lang="scss">
.imgPointer {
  cursor: pointer;
}
</style>
