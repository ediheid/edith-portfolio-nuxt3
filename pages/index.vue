<script setup lang="ts">
// import SideBar from "~~/components/SideBar.vue"
</script>
<template>
  <div :class="[$style['page-container']]">  
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