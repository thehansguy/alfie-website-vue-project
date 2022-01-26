<template>
  <div>
    <h1 class="heading">CONTACT</h1>
    <div class="top-section justify-center">
      <section class="banner flex-column justify-center align-center">
        <h4 class="title">Got Something You'd Like to Ask</h4>
        <p class="subtitle">
          Let's hear it! We enjoy reading your questions, comments and feedback
        </p>
      </section>
      <section class="contact-form">
        <h4 class="form-title">Send us a message</h4>
        <form action="" class="flex-column">
          <label for="name">Name</label>
          <input type="text" name="name" v-model="name" />
          <label for="email" name="email">Email</label>
          <input type="email" name="email" v-model="email" />
          <label for="message">Message</label>
          <textarea name="message" id="" v-model="message" rows="5"></textarea>
          <input
            type="submit"
            @click.prevent="sendEmail"
            value="Send Message"
          />
        </form>
      </section>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    async sendEmail() {
      try {
        var message = await Email.send({
          SecureToken: "425562e1-92fd-4b1e-b63d-214263ab6211",
          To: "pddadson@gmail.com",
          From: this.email,
          Subject: this.name,
          Body: this.email,
        });
        console.log(message);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>