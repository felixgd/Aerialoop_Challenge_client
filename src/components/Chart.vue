<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'
import { mapState } from 'vuex'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default {
    name: 'App',
    components: {
        Line
    },
    computed: {
		...mapState({
            itinerary: state => state.itinerary
        }),
		chartOptions() {
			return {
                responsive: true,
                maintainAspectRatio: false
            }
		},
        chartPowerConsumptionData() {
			if(!this.$store.state.itinerary.itinerary) {
				return{
					labels:  [],
					datasets: [{
                            label: 'Data One',
                            backgroundColor: '#f87979',
                            data: []
                        }]
				}
			}

	    	return {
	    	    labels:  this.$store.state.itinerary.itinerary.startTime,
				datasets: [
                    {
                        label: 'Power Consumption',
                        backgroundColor: '#f87979',
                        data: this.$store.state.itinerary.itinerary.powerConsumption
                    }
                ]
            }
        },
        chartBatteryRemainingData() {
			if(!this.$store.state.itinerary.itinerary) {
				return{
					labels:  [],
					datasets: [{
                            label: 'Data One',
                            backgroundColor: '#f87979',
                            data: []
                        }]
				}
			}

	    	return {
	    	    labels:  this.$store.state.itinerary.itinerary.startTime,
				datasets: [
                    {
                        label: 'Battery Remaining',
                        backgroundColor: '#0730fa',
                        data: this.$store.state.itinerary.itinerary.batteryRemaining
                    }
                ]
            }
        },
        chartBatteryWarningData() {
			if(!this.$store.state.itinerary.itinerary) {
				return{
					labels:  [],
					datasets: [{
                            label: 'Data One',
                            backgroundColor: '#f87979',
                            data: []
                        }]
				}
			}

	    	return {
	    	    labels:  this.$store.state.itinerary.itinerary.startTime,
				datasets: [
                    {
                        label: 'Battery Warning',
                        backgroundColor: '#fa9107',
                        data: this.$store.state.itinerary.itinerary.batteryWarning
                    }
                ]
            }
        }
    },
		data(){
			return {
				chart :{
					labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [{
                        label: 'Data One',
                        backgroundColor: '#f87979',
                        data: [40, 39, 10, 40, 39, 80, 40]
                    }]
				}
			}
		}
    }

</script>

<template>
    <div>
        <Line :data="chartPowerConsumptionData" :options="chartOptions" />
    </div>
    <div>
        <Line :data="chartBatteryRemainingData" :options="chartOptions" />
    </div>
    <div>
        <Line :data="chartBatteryWarningData" :options="chartOptions" />
    </div>
</template>