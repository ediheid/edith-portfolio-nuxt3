<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  open: boolean;
}>();

const name = ref("");

const handleSubmit = () => {
  console.log("test:", name.value);
};
</script>

<template>
  <div v-if="open">
    <button @click="$emit('closeContactForm')">Close</button>

    <form :class="[$style.form]" @submit.prevent="handleSubmit">
      <label>Name</label>
      <input type="text" v-model="name" />
      <button>Send</button>
    </form>
  </div>
</template>

<style lang="scss" module>
.form {
  border: solid 3px red;
  padding: 1rem;
  color: $test-text;
  background: black;

  @include test;
}
</style>
