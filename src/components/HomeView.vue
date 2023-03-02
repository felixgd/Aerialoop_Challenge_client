<script setup>
import WelcomeItem from './WelcomeItem.vue'
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <WelcomeItem>
    <template #heading>{{ msg }}</template>
    
  </WelcomeItem>
</template>
