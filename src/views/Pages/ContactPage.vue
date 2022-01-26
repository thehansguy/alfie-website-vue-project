<template>
  <main>
    <ContactForm />
    <ContactContent />
    <BaseContact />
  </main>
</template>

<script>
// @ is an alias to /src
import ContactContent from "@/components/Contact/ContactContent.vue";
import ContactForm from "@/components/Contact/ContactForm.vue";
import BaseContact from "@/components/BaseContact.vue";

export default {
  name: "HomePage",
  components: {
    ContactContent,
    ContactForm,
    BaseContact,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/contact.css";
</style>