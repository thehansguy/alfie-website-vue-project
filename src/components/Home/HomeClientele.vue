<template>
  <section class="clientele">
    <h1 class="heading">WHO WE'VE WORKED WITH</h1>
    <div class="client-logos align-center justify-center">
      <picture>
        <source
          type="image/webp"
          srcset="@/assets/images/clients/accra-polo.webp"
        />
        <source
          type="image/png"
          srcset="@/assets/images/clients/accra-polo.png"
        />
        <img
          src="@/assets/images/clients/accra-polo.png"
          alt="accra polo logo"
          title="Accra Polo"
        />
      </picture>
      <picture>
        <source
          type="image/webp"
          srcset="@/assets/images/clients/the-social-mercenary.webp"
        />
        <source
          type="image/png"
          srcset="@/assets/images/clients/the-social-mercenary.png"
        />
        <img
          src="@/assets/images/clients/the-social-mercenary.png"
          alt="the social mercenary logo"
          title="The Social Mercenary"
        />
      </picture>
      <picture>
        <source
          type="image/webp"
          srcset="@/assets/images/clients/woodin.webp"
        />
        <source type="image/jpeg" srcset="@/assets/images/clients/woodin.jpg" />
        <img
          src="@/assets/images/clients/woodin.jpg"
          alt="woodin logo"
          title="Woodin"
        />
      </picture>
      <picture>
        <source
          type="image/webp"
          srcset="@/assets/images/clients/ethical-apparel-africa.webp"
        />
        <source
          type="image/png"
          srcset="@/assets/images/clients/ethical-apparel-africa.png"
        />
        <img
          src="@/assets/images/clients/ethical-apparel-africa.png"
          alt="ethical apparel logo"
          title="Ethical Apparel"
        />
      </picture>
      <picture>
        <source
          type="image/webp"
          srcset="@/assets/images/clients/country-kitchen.webp"
        />
        <source
          type="image/png"
          srcset="@/assets/images/clients/country-kitchen.png"
        />
        <img
          src="@/assets/images/clients/country-kitchen.png"
          alt="country kitchen logo"
          title="Country Kitchen"
        />
      </picture>
      <picture>
        <source
          type="image/webp"
          srcset="@/assets/images/clients/technip.webp"
        />
        <source type="image/png" srcset="@/assets/images/clients/technip.png" />
        <img
          src="@/assets/images/clients/technip.png"
          alt="technip logo"
          title="Technip"
        />
      </picture>
      <picture>
        <source
          type="image/webp"
          srcset="@/assets/images/clients/alaffia.webp"
        />
        <source type="image/png" srcset="@/assets/images/clients/alaffia.png" />
        <img
          src="@/assets/images/clients/alaffia.png"
          alt="alaffia logo"
          title="Alaffia"
        />
      </picture>
      <picture>
        <source
          type="image/webp"
          srcset="@/assets/images/clients/charter-house.webp"
        />
        <source
          type="image/png"
          srcset="@/assets/images/clients/charter-house.png"
        />
        <img
          src="@/assets/images/clients/charter-house.png"
          alt="charter house logo"
          title="Charter House"
        />
      </picture>
      <picture>
        <source
          type="image/webp"
          srcset="@/assets/images/clients/ministry-of-education.webp"
        />
        <source
          type="image/png"
          srcset="@/assets/images/clients/ministry-of-education.png"
        />
        <img
          src="@/assets/images/clients/ministry-of-education.png"
          alt="ministry of education logo"
          title="Ministry of Education, Ghana"
        />
      </picture>
      <picture>
        <source type="image/webp" srcset="@/assets/images/clients/usaid.webp" />
        <source type="image/jpeg" srcset="@/assets/images/clients/usaid.jpg" />
        <img
          src="@/assets/images/clients/usaid.jpg"
          alt="usaid logo"
          title="USAID"
        />
      </picture>
    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {
      clients: [
        {
          name: "",
          logo: "",
        },
      ],
    };
  },
  mounted() {},
};
</script>


<style lang="scss" scoped>
.client-logos {
  overflow-x: scroll !important;
  overflow-y: hidden !important;
  white-space: nowrap !important;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;

  picture {
    display: inline-block !important;
  }
}
</style>