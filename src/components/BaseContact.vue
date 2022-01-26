<template >
  <footer>
    <section class="sign-up">
      <p class="sub-text">For enquiries, kindly send us an email</p>
      <form action="" class="flex-column">
        <input
          type="email"
          v-model="email"
          name="email"
          placeholder="Your email here..."
        />
        <textarea
          name="message"
          placeholder="Message..."
          cols="30"
          rows="10"
          v-model="message"
        ></textarea>
        <input type="submit" @click.prevent="sendEmail" value="Send" />
      </form>
    </section>
  </footer>
</template>


<script>
/* eslint-disable */
export default {
  data() {
    return {
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
          Subject: "This is the subject",
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