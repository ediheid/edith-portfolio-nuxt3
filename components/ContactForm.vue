<script setup lang="ts">
import { ref } from "vue";

defineProps<{
 CloseContactForm: unknown;
}>();

const name = ref("");

const handleSubmit = () => {
  console.log("test:", name.value);
};
</script>

<template>
  <div>
<button @click="CloseContactForm()">Close</button>

    <form :class="[$style.form]" @submit.prevent="handleSubmit">
      <label>Name</label>
      <input type="text" v-model="name" />
      <button>Send</button>
    </form>
  </div>
</template>

<!-- setup scss module -->
<!-- And research hoe to setup sass module in nuxt3 -->
<style lang="scss" module>
.form {
  border: solid 3px red;
  padding: 1rem;
  color: $test-text;
  background: black;

  @include test
}
</style>
