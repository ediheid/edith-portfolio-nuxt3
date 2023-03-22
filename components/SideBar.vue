<script setup lang="ts">
import { SocialMediaIconNames, SocialMediaUrls } from "../enums/index";
import { isContactOpen } from "../state/contactFormState";

defineProps<{
  test: string;
}>();

// state
const isContactFormOpen = isContactOpen;

// icons and names
const iconNames = Object.values(SocialMediaIconNames);
const links = Object.values(SocialMediaUrls);

const socialMediaIds: number[] = [];
let counter = 0;
iconNames.forEach(function () {
  counter++;
  socialMediaIds.push(counter);
});

const socialMediaArr = socialMediaIds.map((id, val) => {
  return {
    id: id,
    iconName: iconNames[val],
    iconLink: links[val],
  };
});
</script>

<template>
  <div :class="$style['sidebar-container']">
    <!-- <ContactForm :open="isContactFormOpen" @closeContactForm="isContactFormOpen = !isContactFormOpen" /> -->
    <ContactForm :open="isContactFormOpen" />
    <button @click="isContactFormOpen = true" :class="$style['contact-button']">
      Contact Form
    </button>

    <div :class="$style['vertical-line']"></div>

    <NuxtLink
      v-for="item in socialMediaArr"
      :key="item.id"
      :to="item.iconLink"
      target="_blank"
      rel="noopener noreferrer"
      :class="$style['social-media-links']"
      ><Icon :name="item.iconName" />
    </NuxtLink>
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
    transform: scale(1.2) ;
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
