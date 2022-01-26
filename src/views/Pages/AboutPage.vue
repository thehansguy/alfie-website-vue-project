<template>
  <main>
    <AboutCover />
    <AboutContent />
    <BaseContact />
  </main>
</template>

<script>
// @ is an alias to /src
import AboutCover from "@/components/About/AboutCover.vue";
import BaseContact from "@/components/BaseContact.vue";
import AboutContent from "@/components/About/AboutContent.vue";

export default {
  name: "About",
  components: {
    AboutCover,
    AboutContent,
    BaseContact,
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/about.css";
</style>