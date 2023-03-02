import { createStore } from "vuex"

const store = createStore({
    state: {
        itinerary: {
            startTime: new Array(),
            powerConsumption: new Array(),
            batteryRemaining: 0,
            batteryWarning: false
        },
    },
    mutations: {
        setItinerary (state, itinerary) {
            state.itinerary = itinerary
        }
    }
})

export default store