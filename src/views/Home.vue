<template>
  <div class="home">
    <BaseHeader v-if="shouldShowHomeNav" />
    <OtherHeader v-else />
    <router-view></router-view>
    <BaseFooter />
    <!-- <div
      id="sqich"
      class="carousel feedback-container mention active slideshow slideshow-buttons active-slideshow-image img"
      style="display: none"
    ></div> -->
  </div>
</template>

<script>
/* eslint-disable */
// @ is an alias to /src
import BaseHeader from "@/components/BaseHeader.vue";
import OtherHeader from "@/components/OtherHeader.vue";
import BaseFooter from "@/components/BaseFooter.vue";

export default {
  name: "Home",
  components: {
    BaseHeader,
    BaseFooter,
    OtherHeader,
  },
  computed: {
    shouldShowHomeNav() {
      const routes = ["/"];
      return routes.includes(this.$route.path);
    },
  },
  mounted() {
    // CAROUSEL
    const carousel = document.querySelector(".carousel");
    const [
      carouselButtons,
      carouselContainer,
      carouselBars,
    ] = carousel.children;
    let carouselTimer;

    [...carouselButtons.children].forEach((button) => {
      button.addEventListener("click", ({ currentTarget }) => {
        // if (carouselTimer) {
        // 	clearTimeout(carouselTimer)
        // }
        let direction = currentTarget.className.match(/left|right/gi).pop();
        switchCarouselContent(direction);
        // carouselTimer = automateCarousel()
      });
    });

    function switchCarouselContent(direction) {
      const [contents, bars] = [
        carouselContainer.children,
        carouselBars.children,
      ];
      const total = contents.length;
      let [index, activeContent, activeBar] = [0];

      for (let child of contents) {
        if (child.classList.contains("active")) {
          activeContent = child;
          activeBar = bars[index];
          break;
        }
        index++;
      }
      // deactivate currently active items
      activeContent.classList.remove("active");
      activeBar.classList.remove("active");
      // activeContent.ontransitionend = activeContent.oonwebkittransitionend = () => {
      // activate next items
      index = (index + (direction === "left" ? -1 : 1)) % total;
      contents[index].classList.add("active");
      bars[index].classList.add("active");
      // }
    }
    // auto change carousel content
    const automateCarousel = () =>
      setInterval(() => switchCarouselContent("right"), 5000);
    carouselTimer = automateCarousel();

    // automatically slide through the client feedbacks
    // setInterval(() => switchFeedback('right'), 3500)

    // ========================================================

    //
  },
};
</script>

<style>
</style>
