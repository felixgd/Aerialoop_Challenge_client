<script setup>
import ItinerariesAPI from '../api/resources/Itineraries'
import { ref } from 'vue'
import { emitter } from '../composables/useEvent'
  const selected = ref('')
  const itineraries = ref([])

  const loadItineraries = async() => {
    if (itineraries.value.length != 0) {
      return
    }
    let data = await ItinerariesAPI.getList();
    for (let i = 0; i < data.length; i++) {
      itineraries.value.push(data[i].ID)
    }
  };

  const sendIDToComponent = async(ID) => {
    emitter.emit('ID-selected', ID)
  }
</script>

<template>
  <div class="greetings">
    <h3>
      Select the desire itinerary:
    </h3> <br>
    <select v-model="selected" placeholder="Select" @click="loadItineraries()" @change="sendIDToComponent(selected)">
      <option v-for="(itinerary, key) in itineraries" :value="itinerary" :key="key">{{ itinerary }}</option>
    </select>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
  color: aliceblue;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
