<template>
  <section class="products">
    <!-- <h1 class="heading">PRODUCTS</h1> -->
    <div class="categories container justify-center align-center">
      <div
        v-for="(prod, index) in productTypes"
        :key="index"
        class="category flex justify-center align-center"
        :style="{ backgroundImage: 'url(' + prod.image + ')' }"
      >
        <div class="category-info flex-column align-center">
          <h4 class="name">{{ prod.name }}</h4>
          <router-link :to="prod.link" class="button">
            See Collection &nbsp;
            <span class="arrow"> &#x2192;</span>
          </router-link>
        </div>
      </div>
      <!-- <div
        class="category flex justify-center align-center"
        style="
          background-image: url('@/assets/images/decoratives/alfie-ch-2.png');
        "
      >
        <div class="category-info flex-column align-center">
          <h4 class="name">Retail</h4>
          <a href="./products.html" class="button">
            See Collection &nbsp;
            <span class="arrow"> &#x2192;</span>
          </a>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      productTypes: [
        {
          name: "Mass Production",
          link: "/mass",
          image: require("../../assets/images/scrubs/scrub3.jpg"),
        },
        {
          name: "Retails",
          link: "/products",
          image: require("../../assets/images/scrubs/scrub4.jpg"),
        },
      ],
    };
  },
};
</script>
