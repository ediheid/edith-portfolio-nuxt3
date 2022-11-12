<script setup lang="ts">
import { ref } from "vue";
import { isContactOpen } from "../state/contactFormState";

// state
const isContactFormOpen = isContactOpen;
const name = ref("");

const handleSubmit = () => {
  console.log("test:", name.value);
};
</script>

<template>
  <form @submit.prevent="handleSubmit" :class="[$style.form]">
    <!-- <button @click="$emit('closeContactForm')">Close</button> -->
    <button @click="isContactFormOpen = false">Close</button>
    <label>Name</label>
    <input type="text" v-model="name" />
    <button>Send</button>
  </form>
</template>

<style lang="scss" module>
.form {
  width: 100%;
  max-width: 70rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 3rem 0 0 0;
}
</style>
