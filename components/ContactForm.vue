<script setup lang="ts">
defineProps<{
  open: boolean;
}>();
</script>

<template>
  <div v-if="open" :class="[$style['container']]">
    <div :class="[$style['contact-modal']]">
      <h3 :class="[$style['form-heading']]">
        Want to work together? Or just say hi?
      </h3>

      <Form />
    </div>
  </div>
</template>

<style lang="scss" module>
.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $contact-form-bg;
  backdrop-filter: blur(5px);
  z-index: 5000;
  color: $contact-form-text-colour;

  @include test;
}

.contact-modal * {
  font-family: $contact-form-font;
}

.contact-modal {
  width: 100%;
  height: 100%;
  overflow-y: auto !important;
  padding: 10rem 9rem 7rem 9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: $contact-form-bg;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.contact-modal::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.contact-modal {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.form-heading {
  width: 100%;
  font-family: $montserrat-light;
  font-size: 2.1rem;
  letter-spacing: 0.15rem;
  color: $contact-form-text-colour;
  text-align: center;
  line-height: 3.2rem;
  padding: 8rem 0 2rem 0;
}
</style>
