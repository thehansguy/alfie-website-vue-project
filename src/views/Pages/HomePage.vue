
<template>
  <main>
    <HomeCarousel />
    <HomeProducts />
    <HomeClientele />
    <HomeBlogPost />
    <HomeFeed />
    <BaseContact />
  </main>
</template>

<script>
// @ is an alias to /src
import HomeCarousel from "@/components/Home/HomeCarousel.vue";
import HomeProducts from "@/components/Home/HomeProducts.vue";
import HomeFeed from "@/components/Home/HomeFeed.vue";
import HomeClientele from "@/components/Home/HomeClientele.vue";
import HomeBlogPost from "@/components/Home/HomeBlogPost.vue";
import BaseContact from "@/components/BaseContact.vue";

export default {
  name: "HomePage",
  components: {
    HomeCarousel,
    HomeProducts,
    HomeFeed,
    HomeClientele,
    HomeBlogPost,
    BaseContact,
  },
};
</script>

<style>
@import "../../assets/css/index.css";
</style>