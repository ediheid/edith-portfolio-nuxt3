<script setup lang="ts">
import { ref } from "vue";
const count = ref(0);
</script>

<template>
  <div>
    <!-- <NuxtWelcome /> -->
    This will be my app
    <h1>Counter</h1>
    {{ count }}
    <button @click="count++">Press me</button>
  </div>
</template>
