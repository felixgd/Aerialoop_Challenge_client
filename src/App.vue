<script setup>
import { RouterView } from 'vue-router'
import SelectItinerary from './components/SelectItinerary.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <SelectItinerary />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: flex-start;
    padding-bottom: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
