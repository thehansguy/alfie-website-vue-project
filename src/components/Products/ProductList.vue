<template>
  <div>
    <h1 class="heading flex align-center justify-center">Our Products</h1>
    <div class="page-products">
      <section class="category" id="scrubs">
        <h3 class="category-name align-center">SCRUBS</h3>
        <div class="products-container flex-wrap">
          <div
            class="product"
            v-for="(item, index) in productList"
            :key="index"
          >
            <img :src="item.image" alt="" class="image" />
            <!-- <p class="price"></p> -->
          </div>
        </div>
      </section>
      <section class="category" id="men">
        <h3 class="category-name align-center">MEN'S WEAR LIST</h3>
        <div class="products-container">
          <div
            class="product"
            v-for="(item, index) in mensWearList"
            :key="index"
          >
            <img :src="item.image" alt="" class="image" />
          </div>
        </div>
      </section>
      <section class="category" id="men">
        <h3 class="category-name align-center">MEN'S WEAR</h3>
        <div class="products-container">
          <div class="product">
            <img
              src="@/assets/images/products/men/alfie-m14.png"
              alt=""
              class="image"
            />
            <!-- <p class="price"></p> -->
          </div>
          <div class="product">
            <img
              src="@/assets/images/products/men/alfie-m13.png"
              alt=""
              class="image"
            />
            <!-- <p class="price"></p> -->
          </div>
          <div class="product">
            <img
              src="@/assets/images/products/men/alfie-m12.png"
              alt=""
              class="image"
            />
            <!-- <p class="price"></p> -->
          </div>
          <div class="product">
            <img
              src="@/assets/images/products/men/alfie-m11.png"
              alt=""
              class="image"
            />
            <!-- <p class="price"></p> -->
          </div>
          <div class="product">
            <img
              src="@/assets/images/products/men/alfie-m10.png"
              alt=""
              class="image"
            />
            <!-- <p class="price"></p> -->
          </div>
          <div class="product">
            <img
              src="@/assets/images/products/men/alfie-m9.png"
              alt=""
              class="image"
            />
            <!-- <p class="price"></p> -->
          </div>
          <div class="product">
            <img
              src="@/assets/images/products/men/alfie-m8.png"
              alt=""
              class="image"
            />
            <!-- <p class="price"></p> -->
          </div>
          <div class="product">
            <img
              src="@/assets/images/products/men/alfie-m7.png"
              alt=""
              class="image"
            />
            <!-- <p class="price"></p> -->
          </div>
          <div class="product">
            <img
              src="@/assets/images/products/men/alfie-m6.png"
              alt=""
              class="image"
            />
            <!-- <p class="price"></p> -->
          </div>
          <div class="product">
            <img
              src="@/assets/images/products/men/alfie-m5.png"
              alt=""
              class="image"
            />
            <!-- <p class="price"></p> -->
          </div>
          <div class="product">
            <img
              src="@/assets/images/products/men/alfie-m3.png"
              alt=""
              class="image"
            />
            <!-- <p class="price"></p> -->
          </div>
          <div class="product">
            <img
              src="@/assets/images/products/men/alfie-m2.png"
              alt=""
              class="image"
            />
            <!-- <p class="price"></p> -->
          </div>
          <div class="product">
            <img
              src="@/assets/images/products/men/alfie-m1.png"
              alt=""
              class="image"
            />
            <!-- <p class="price"></p> -->
          </div>
        </div>
      </section>
      <section class="category" id="women">
        <h3 class="category-name align-center">WOMEN'S WEAR</h3>
        <div class="products-container">
          <div class="product">
            <img
              src="@/assets/images/products/women/alfie-w1.png"
              alt=""
              class="image"
            />
            <!-- <p class="price"></p> -->
          </div>
          <div class="product">
            <img
              src="@/assets/images/products/women/alfie-w2.png"
              alt=""
              class="image"
            />
            <!-- <p class="price"></p> -->
          </div>
          <div class="product">
            <img
              src="@/assets/images/products/women/alfie-w3.png"
              alt=""
              class="image"
            />
            <!-- <p class="price"></p> -->
          </div>
          <div class="product">
            <img
              src="@/assets/images/products/women/alfie-w4.png"
              alt=""
              class="image"
            />
            <!-- <p class="price"></p> -->
          </div>
        </div>
      </section>
      <section class="category" id="accessories">
        <h3 class="category-name align-center">Accessories</h3>
        <div class="products-container">
          <div class="product">
            <img
              src="@/assets/images/products/accessories/alfie-a1.png"
              alt=""
              class="image"
            />
            <!-- <p class="price"></p> -->
          </div>
          <div class="product">
            <img
              src="@/assets/images/products/accessories/alfie-a2.png"
              alt=""
              class="image"
            />
            <!-- <p class="price"></p> -->
          </div>
          <div class="product">
            <img
              src="@/assets/images/products/accessories/alfie-a3.png"
              alt=""
              class="image"
            />
            <!-- <p class="price"></p> -->
          </div>
        </div>
      </section>
      <a href="" class="all-products">See All</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productList: [
        {
          name: "Mass Production",
          image: require("../../assets/images/scrubs/scrub5.jpg"),
        },
        {
          name: "Retail",
          image: require("../../assets/images/scrubs/scrub6.jpg"),
        },
        {
          name: "Retail",
          image: require("../../assets/images/scrubs/scrub7.jpg"),
        },
        {
          name: "Retail",
          image: require("../../assets/images/scrubs/scrub8.jpg"),
        },
        {
          name: "Retail",
          image: require("../../assets/images/scrubs/scrub9.jpg"),
        },
        {
          name: "Retail",
          image: require("../../assets/images/scrubs/scrub10.jpg"),
        },
        {
          name: "Retail",
          image: require("../../assets/images/scrubs/scrub11.jpg"),
        },
        {
          name: "Retail",
          image: require("../../assets/images/scrubs/scrub12.jpg"),
        },
        {
          name: "Retail",
          image: require("../../assets/images/scrubs/scrub13.jpg"),
        },
        {
          name: "Retail",
          image: require("../../assets/images/scrubs/scrub14.jpg"),
        },
        {
          name: "Retail",
          image: require("../../assets/images/scrubs/scrub18.jpg"),
        },
      ],
      mensWearList: [
        {
          name: "Mass Production",
          image: require("../../assets/images/scrubs/scrub5.jpg"),
        },
        {
          name: "Retail",
          image: require("../../assets/images/scrubs/scrub6.jpg"),
        },
        {
          name: "Retail",
          image: require("../../assets/images/scrubs/scrub7.jpg"),
        },
        {
          name: "Retail",
          image: require("../../assets/images/scrubs/scrub8.jpg"),
        },
        {
          name: "Retail",
          image: require("../../assets/images/scrubs/scrub9.jpg"),
        },
        {
          name: "Retail",
          image: require("../../assets/images/scrubs/scrub10.jpg"),
        },
        {
          name: "Retail",
          image: require("../../assets/images/scrubs/scrub11.jpg"),
        },
        {
          name: "Retail",
          image: require("../../assets/images/scrubs/scrub12.jpg"),
        },
        {
          name: "Retail",
          image: require("../../assets/images/scrubs/scrub13.jpg"),
        },
        {
          name: "Retail",
          image: require("../../assets/images/scrubs/scrub14.jpg"),
        },
        {
          name: "Retail",
          image: require("../../assets/images/scrubs/scrub18.jpg"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
  .products-container {
    align-content: center;
    justify-content: center;
  }
}
</style>
