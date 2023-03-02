<script setup>
import { useStore } from "vuex"
import ItinerariesAPI from '../api/resources/Itineraries'
import LineChart from './Chart.vue'
import { emitter } from '../composables/useEvent'

  const store = useStore()

  const loadItinerary = async(ID) => {
    let data = await ItinerariesAPI.getOne(ID)
    let timeDataArray = new Array()
    let powerConsumptionArray =  new Array()
    let batteryRemainingArray = new Array()
    let batteryWarningArray = new Array()

    for (let i = 0; i < data.FlightData.length; i++) {
      timeDataArray.push(data.FlightData[i].TIME_StartTime)
      powerConsumptionArray.push(data.FlightData[i].PowerConsumption)
      batteryRemainingArray.push(data.FlightData[i].BATT_Remaining*100)
      batteryWarningArray.push(data.FlightData[i].BATT_Warning)
    }

    store.commit('setItinerary', {
      itinerary: {
        startTime: timeDataArray,
        powerConsumption: powerConsumptionArray,
        batteryRemaining: batteryRemainingArray,
        batteryWarning: batteryWarningArray
      }
    })
  };

  emitter.on('ID-selected', async (ID) => {
    return await loadItinerary(ID)
  })
</script>

<template>
  <div>
    <div class="details">
      <slot>
        <LineChart></LineChart>
      </slot>
    </div>
  </div>
</template>

<style scoped>

.details {
  margin-left: 1rem;
}
</style>
