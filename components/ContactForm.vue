<script setup lang="ts">
import { ref } from "vue";
const name = ref("");

const handleSubmit = () => {
  console.log("test:", name.value);
};
</script>

<template>
  <div>
    <form class="form" @submit.prevent="handleSubmit">
      <label>Name</label>
      <input type="text" v-model="name" />
      <button>Send</button>
    </form>
  </div>
</template>

<!-- setup scss module -->
<style lang="scss">
.form {
  border: solid 3px red;
  padding: 1rem;
}
</style>
