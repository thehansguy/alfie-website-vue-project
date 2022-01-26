<template>
  <main>
    <SocialCover />
    <SocialContent />
    <BaseContact />
  </main>
</template>

<script>
// @ is an alias to /src
import SocialContent from "@/components/Social/SocialContent.vue";
import SocialCover from "@/components/Social/SocialCover.vue";
import BaseContact from "@/components/BaseContact.vue";

export default {
  name: "HomePage",
  components: {
    SocialContent,
    SocialCover,
    BaseContact,
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/social.css";
</style>