<script setup lang="ts">
import { SocialMediaUrls } from "../enums/index";
// import ContactForm from './ContactForm.vue'


defineProps<{
  test: string;
}>();

const isContactFormOpen = ref(false);
</script>

<template>
  <div :class="$style['sidebar-container']">
    <ContactForm
      :open="isContactFormOpen"
      @closeContactForm="isContactFormOpen = !isContactFormOpen"
    />

    <button @click="isContactFormOpen = true" :class="$style['contact-button']">
      Contact Form
    </button>

    <div :class="$style['vertical-line']"></div>

    <NuxtLink
      :to="`${SocialMediaUrls.linkedIn}`"
      target="_blank"
      rel="noopener noreferrer"
      :class="$style['social-media-links']"
      ><Icon name="uil:linkedin-alt"
    /></NuxtLink>
    <NuxtLink
      :to="`${SocialMediaUrls.gitHub}`"
      target="_blank"
      rel="noopener noreferrer"
      :class="$style['social-media-links']"
    >
      <Icon name="uil:github-alt"
    /></NuxtLink>
    <NuxtLink
      :to="`${SocialMediaUrls.instagram}`"
      target="_blank"
      rel="noopener noreferrer"
      :class="$style['social-media-links']"
    >
      <Icon name="ion:logo-instagram"
    /></NuxtLink>
    <NuxtLink
      :to="`${SocialMediaUrls.darkroom}`"
      target="_blank"
      rel="noopener noreferrer"
      :class="$style['social-media-links']"
      ><Icon name="lucide:shopping-bag"
    /></NuxtLink>
  </div>
</template>

<style lang="scss" module>
.sidebar-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 15vw;
  height: 100vh;
}

.contact-button {
  transform: rotate(270deg);
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 10;
  width: 15rem;

  font-size: 1.5rem;
  font-family: $side-bar-contact-font;
  font-weight: 600;
  letter-spacing: 0.18rem;
  word-spacing: 0.5rem;
  color: $home-side-bar-elements;

  &:active {
    font-weight: bold;
    font-size: 1.6rem;
    color: $side-bar-hover-colour;
  }
}

@media (hover: hover) {
  .contact-button:hover {
    font-weight: bold;
    font-size: 1.6rem;
    color: $side-bar-hover-colour;
  }
}

.vertical-line {
  width: 0.1rem;
  height: 10rem;
  margin: 7rem 0 0 0;
  background-color: $home-side-bar-elements;
}

.social-media-links {
  color: $home-side-bar-elements;
  font-size: 2rem;
  padding: 2.8rem 0 0 0;
  cursor: pointer;
  z-index: 10;

  &:active {
    transform: scale(1.2);
    color: $side-bar-hover-colour;
  }
}

@media (hover: hover) {
  .social-media-links:hover {
    transform: scale(1.2);
    color: $side-bar-hover-colour;
  }

  //  Breakpoints
  @include small-tablet {
    .side-bar-container {
      width: 10vw;
      max-width: 10rem;
    }

    .button-container {
      width: 10rem;
    }
  }
}
</style>
