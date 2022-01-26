<template>
  <main>
    <div class="carousel banner" id="carousel">
      <div class="arrows">
        <span class="icon button left" n="0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53 53">
            <g transform="translate(-0.348)">
              <rect
                class="a"
                width="53"
                height="53"
                transform="translate(0.348)"
              />
              <path
                class="b"
                d="M36.421,50.093l2.219-2.219L17.189,26.421,38.641,4.969,36.421,2.75,12.75,26.421Z"
                transform="translate(0.814 0.176)"
              />
              <rect
                class="a"
                width="53"
                height="53"
                transform="translate(0.348)"
              />
            </g>
          </svg>
        </span>
        <span class="icon button right" n="1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53 53">
            <g transform="translate(53 53) rotate(180)">
              <rect class="a" width="53" height="53" />
              <path
                class="b"
                d="M23.671,47.343l2.219-2.219L4.439,23.671,25.891,2.219,23.671,0,0,23.671Z"
                transform="translate(13.213 2.715)"
              />
              <rect class="a" width="53" height="53" />
            </g>
          </svg>
        </span>
      </div>
      <div class="carousel-container">
        <div
          class="content flex align-center justify-center"
          :class="index ? 'active' : ''"
          v-for="(list, index) in carouselItems"
          :key="index"
        >
          <picture>
            <source type="image/jpg" :srcset="list.image" />
            <img :src="list.image" alt="banner image" />
          </picture>
          <div class="info flex align-center justify-center">
            <h4 class="caption">{{ list.caption }}</h4>
          </div>
        </div>
        <!-- <div class="content flex align-center justify-center">
          <picture>
            <source
              type="image/jpg"
              srcset="@/assets/images/scrubs/scrub2.jpg"
            />
            <img src="@/assets/images/scrubs/scrub2.jpg" alt="banner image" />
          </picture>
          <div class="info flex align-center justify-center">
            <h4 class="caption">We offer quality in masses</h4>
          </div>
        </div>
        <div class="content flex align-center justify-center">
          <picture>
            <source
              type="image/jpg"
              srcset="@/assets/images/scrubs/scrub3.jpg"
            />
            <img src="@/assets/images/scrubs/scrub3.jpg" alt="banner image" />
          </picture>
          <div class="info flex align-center justify-center">
            <h4 class="caption">We are the definition of fashion</h4>
          </div>
        </div> -->
      </div>
      <div class="indicator-bars flex justify-center">
        <span class="bar active"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>
  </main>
</template>


<script>
export default {
  data() {
    return {
      carouselItems: [
        {
          caption: "We Define Fashion in Africa and Beyond",
          image: require("../../assets/images/scrubs/scrub5.jpg"),
        },
        {
          caption: "We offer quality in masses",

          image: require("../../assets/images/scrubs/scrub8.jpg"),
        },
        {
          caption: "We are the definition of fashion",

          image: require("../../assets/images/scrubs/scrub7.jpg"),
        },
      ],
    };
  },
};
</script>