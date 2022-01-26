<template>
  <main>
    <MassCover />
    <MassCarousel />
    <BaseContact />
  </main>
</template>

<script>
// @ is an alias to /src
import MassCover from "@/components/Mass/MassCover.vue";
import MassCarousel from "@/components/Mass/MassCarousel.vue";
import BaseContact from "@/components/BaseContact.vue";

export default {
  name: "HomePage",
  components: {
    MassCover,
    MassCarousel,
    BaseContact,
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/mass.css";
</style>