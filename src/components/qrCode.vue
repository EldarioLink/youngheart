<script setup lang="ts">
import { computed } from 'vue'

import { useDisplay } from 'vuetify'

const { name } = useDisplay()

const centerilizeClass = computed(() => {
  switch (name.value) {
    case 'xs':
      return 'mx-auto'
    case 'sm':
      return 'mx-auto'
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
  <v-card
    class="mt-9 ml-auto"
    :class="centerilizeClass"
    max-width="300"
    elevation="7"
  >
    <v-tooltip activator="parent" location="end">
      Scan the qr code to start a chat
    </v-tooltip>

    <v-row class="pt-4" dense>
      <v-col cols="12">
        <v-card>
          <v-img src="qrcode.png" height="200px">
            <v-card-title class="text-white"></v-card-title>
          </v-img>
          <v-card-actions class="my-2">
            <v-spacer></v-spacer>
            <v-row
              no-gutters
              class="caption text-center mx-auto"
              justify="center"
            >
              <div>
                Or you can scan the code to start chatting via

                <span>
                  <v-icon icon="mdi-whatsapp" color="green"></v-icon>
                </span>
              </div>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>
