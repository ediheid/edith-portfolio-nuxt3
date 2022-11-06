<script setup lang="ts">
// import ContactForm from "~~/components/ContactForm.vue";
import SideBar from "~~/components/SideBar.vue"
</script>
<template>
  <div :class="[$style['page-container']]">
    <h1 class="form">This will be the home</h1>
    <!-- <ContactForm /> -->
    <SideBar/>
  </div>
</template>

<style lang="scss" module>

.page-container{
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: $home-bg;
}
</style>