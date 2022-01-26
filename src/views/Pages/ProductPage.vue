<template>
  <main>
    <ProductList />
    <BaseContact />
  </main>
</template>

<script>
// @ is an alias to /src
import ProductList from "@/components/Products/ProductList.vue";
import BaseContact from "@/components/BaseContact.vue";

export default {
  name: "HomePage",
  components: {
    ProductList,
    BaseContact,
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/products.css";
</style>