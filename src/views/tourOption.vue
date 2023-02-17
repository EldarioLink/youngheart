<script setup lang="ts">
import { computed } from 'vue'
import { useDisplay } from 'vuetify'
import appBarBlack from '@/components/appBarOption.vue'
import router from '@/router'

const { name } = useDisplay()

function goBack() {
  router.go(-1)
}

const paddingStyle = computed(() => {
  switch (name.value) {
    case 'lg':
      return '70%'
    case 'xl':
      return '70%'
    case 'xxl':
      return '70%'
  }

  return undefined
})
</script>
<template>
  <appBarBlack />
  <v-container class="tour_option">
    <v-container fluid>
      <v-row justify="center" class="tour_option__title">
        TOUR PROGRAM WITH AYAVASCA IN PERU BY DAYS
      </v-row>
    </v-container>

    <v-row class="mt-13">
      <v-col cols="12" lg="6">
        <v-row class="tour_option__sub_title">Day 0</v-row>

        <v-row class="tour_option__small">
          Arrival in Lima, the capital of Peru. If you do not have time to fly
          to Pucallpa on the same day and stay overnight in Lima, we will
          connect you with other members of the group and recommend a hotel for
          an overnight stay. The next day we will meet you at the airport in
          Pucallpa, Peru.
        </v-row>

        <v-row class="tour_option__sub_title mt-10">Day 1</v-row>

        <v-row class="tour_option__small">
          Meeting at the airport of Pucallpa, Peru.
          <br />
          Transfer to the retreat center.
          <br />
          General meeting: acquaintance + sharing.
          <br />
          Retreat briefing, accommodation, dinner.
        </v-row>

        <v-row class="tour_option__sub_title mt-10">Day 2</v-row>

        <v-row class="tour_option__small">
          Preparing for the ayahuasca ceremony. Briefing.
          <br />

          <span class="font-weight-bold">
            20.00. 1st ceremony with ayahuasca.
          </span>
          Individual "reconciliation" after the ceremony with ayahuasca.
        </v-row>
        <v-row class="tour_option__sub_title mt-10">Day 3</v-row>

        <v-row class="tour_option__small">
          Morning practices.
          <br />

          Individual or group work with ayahuasca retreat/tour participants in
          Peru. Yoga. Meditation for the mind.
          <br />
          <span class="font-weight-bold">
            20.00. 2st ceremony with ayahuasca.
          </span>
        </v-row>
        <v-row class="tour_option__sub_title mt-10">Day 4</v-row>

        <v-row class="tour_option__small">
          Q&A session.
          <br />

          Morning practices.
          <br />
          Individual or group work with ayahuasca retreat/tour participants in
          Peru. Yoga. Meditation for the mind.
          <br />
          <span class="font-weight-bold">
            20.00. 3st ceremony with ayahuasca.
          </span>
        </v-row>
        <v-row class="tour_option__sub_title mt-10">Day 5</v-row>

        <v-row class="tour_option__small">
          Excursion to the waterfalls in Tinga Maria or Aguas Calientes (a
          private reserve on a boiling river) - a place of power and a wonder of
          the world.
        </v-row>
        <v-row class="tour_option__sub_title mt-10">Day 6</v-row>

        <v-row class="tour_option__small">
          Morning practices.
          <br />

          Individual or group work with participants of the ayahuasca retreat
          (tour to Peru).
          <br />
          <span class="font-weight-bold">
            20.00. 4th ceremony with ayahuasca.
          </span>
          Individual "reconciliation" if necessary after the ceremony with
          ayahuasca or on the trail. morning.
        </v-row>
        <v-row class="tour_option__sub_title mt-10">Day 7</v-row>

        <v-row class="tour_option__small">
          Morning practices.
          <br />
          Individual or group work with participants of the ayahuasca retreat
          (tour to Peru). Yoga. Meditation for the mind.
          <br />
          <span class="font-weight-bold">
            20.00. 5th ceremony with ayahuasca.
          </span>
        </v-row>
        <v-row class="tour_option__sub_title mt-10">Day 8</v-row>

        <v-row class="tour_option__small">
          Departure from Pucallpa to Lima or other activities, according to the
          individual plans of the tour participants.
        </v-row>
      </v-col>
      <v-col cols="12" lg="6">
        <v-img src="Lima.jpg"></v-img>
        <v-img src="camera/img5.jpg" class="mt-2 mb-5"></v-img>

        <v-card
          :height="paddingStyle"
          class="d-flex justify-center align-center"
          flat
        >
          <v-img src="option1.jpg"></v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-btn color="green" class="mt-15" @click="goBack">Back</v-btn>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.tour_option {
  color: #14986e;
  font-family: 'Leto';
  &__small {
    font-family: 'Leto';
    font-size: 20px;
    color: black;
    opacity: 0.8;
    line-height: 160%;
  }
  &__title {
    font-family: 'Leto';
    font-weight: bold;
    font-weight: 500;
    margin-right: 0;
    margin: 50px 0 0px;
    font-size: 30px;
  }

  &__sub_title {
    color: black;
    font-family: 'Leto';
    font-weight: bold;
    font-weight: 700;
    font-size: 20px;
  }
}
</style>
