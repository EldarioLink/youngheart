<script setup lang="ts">
import { reactive, ref } from 'vue'
import { computed } from 'vue'

import { useDisplay } from 'vuetify'

import telegram from '@/components/iconSet/telegramIcon.vue'
import configs from '@/configs'

const { name } = useDisplay()

//*===🌄===🌄===🌄===🌄===🌄===🌄===🌄===🌄===🌄===🌄===🌄===🌄Refs
const responseText = ref('')
const isLoading = ref(false)
const isFormValid = ref(false)
const mailMessage = ref('')
const email = ref('')
const icons = reactive(['mdi-instagram', 'mdi-facebook'])

//*===🍃===🍃===🍃===🍃===🍃===🍃===🍃===🍃===🍃===🍃===🍃===🍃Constants

const emailRules = [
  (v: any) => !!v || 'E-mail is required',
  (v: any) => /.+@.+/.test(v) || 'E-mail must be valid'
]
const messageRules = [
  (v: any) => !!v || 'Text is required',
  (v: any) => v.length <= 70 || 'Max 70 characters'
]

//*===🥒===🥒===🥒===🥒===🥒===🥒===🥒===🥒===🥒===🥒===🥒===🥒Watchers

const isValid = computed(() => {
  return (
    !email.value || !mailMessage.value || !isFormValid.value || isLoading.value
  )
})

const centerilizeClass = computed(() => {
  switch (name.value) {
    case 'xs':
      return 'mx-auto mt-5'
    case 'sm':
      return 'mx-auto mt-5'
    case 'md':
      return 'ml-auto mt-5'
    case 'lg':
      return 'ml-auto mt-5'
    case 'xl':
      return 'ml-auto mt-5'
    case 'xxl':
      return 'ml-auto mt-5'
  }

  return undefined
})

const justify = computed(() => {
  switch (name.value) {
    case 'xs':
      return 'center'
    case 'sm':
      return 'center'
    case 'md':
      return 'end'
    case 'lg':
      return 'end'
    case 'xl':
      return 'end'
    case 'xxl':
      return 'end'
  }

  return undefined
})

const margin = computed(() => {
  switch (name.value) {
    case 'xs':
      return 'margin_bottom'
  }

  return undefined
})

//*===🌊===🌊===🌊===🌊===🌊===🌊===🌊===🌊===🌊===🌊===🌊===🌊Methods

const showText = (text: string) => {
  responseText.value = text

  setTimeout(() => {
    responseText.value = ''
    isLoading.value = false
  }, 5000)
}

// sending email/message to server
function sentMessage() {
  isLoading.value = true
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: email.value,
      message: mailMessage.value
    })
  }
  fetch(
    'https://us-central1-youngheart-4e6d2.cloudfunctions.net/sendMailOverHTTP',
    requestOptions
  )
    .then(async (response) => {
      if (response.ok) {
        showText('Message was sent!')
      } else {
        showText('Error! Something went wrong')
      }
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
}
</script>

<template>
  <v-container fluid class="footer pa-0 primary">
    <v-container>
      <v-row dense class="mt-16">
        <v-col md="6" xs="12" sm="12" class="mt-4">
          <v-row class="footer__small ml-1">Ask me a question!</v-row>

          <v-form>
            <v-row class="mt-1">
              <v-col cols="10" sm="10" md="9">
                <v-form v-model="isFormValid">
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="Email"
                    class="email_field"
                    required
                    variant="underlined"
                    prepend-inner-icon="mdi-email"
                    color="white"
                  ></v-text-field>
                  <v-textarea
                    label="Type your question!"
                    v-model="mailMessage"
                    outlined
                    bg-color="transparent"
                    color="white"
                    :rules="messageRules"
                    rows="2"
                    row-height="25"
                  ></v-textarea>
                </v-form>
                <v-container style="height: 50px">
                  <p v-show="responseText">
                    {{ responseText }}
                  </p>
                </v-container>
              </v-col>
              <v-col cols="2" md="3" sm="2" align-self="center">
                <div class="d-flex align-center">
                  <v-btn
                    @click="sentMessage"
                    variant="plain"
                    class="footer_emailbtn"
                    :disabled="isValid"
                  >
                    Send
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-form>
        </v-col>

        <v-col cols="12" md="6">
          <v-card
            :class="centerilizeClass"
            max-width="344"
            variant="outlined"
            color="white"
          >
            <v-card-item>
              <div>
                <div class="footer__ph_title mb-1">
                  LINK WITH ME VIA WHATSUP
                </div>
                <div class="d-flex align-center justify-start">
                  <v-icon icon="mdi-whatsapp" color="white"></v-icon>

                  <div class="footer__phone ml-2 pl-1">
                    {{ configs.phone }}
                  </div>
                </div>
                <v-card
                  flat
                  color="transparent"
                  max-width="50%"
                  class="mx-auto"
                  justify="space-between"
                >
                  <v-row no-gutters class="my-auto" justify="space-around">
                    <div v-for="icon in icons" :key="icon">
                      <v-icon
                        size="20px"
                        :icon="icon"
                        class="clickableIcon"
                        color="white"
                      ></v-icon>
                    </div>
                    <div
                      class="d-flex align-center justify-start clickableIcon"
                    >
                      <telegram width="18px" height="18px" />
                    </div>
                  </v-row>
                </v-card>
              </div>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="mt-5" :class="margin">
      <v-row :justify="justify" class="mt-12">
        <p class="footer__small">Copyright 2023 YoungHeart</p>
      </v-row>
    </v-container>

    <v-container fluid class="stick_img pa-0">
      <v-img eager src="footer-sun.png"></v-img>
    </v-container>
  </v-container>
</template>

<style scoped lang="scss">
.footer {
  color: white;
  font-family: 'Circular';
  background-color: #0e5540;
  min-height: calc(100vh - 64px);

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
}

.stick_img {
  position: absolute;
  bottom: 0;
}

.clickableIcon {
  cursor: pointer;
}

.footer_emailbtn {
  font-size: 15px;
  font-weight: 600;
}
</style>
