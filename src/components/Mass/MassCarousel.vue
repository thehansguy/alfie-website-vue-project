<template>
  <section class="container-fluid">
    <div class="row m-0 align-items-center justify-content-center">
      <div class="col-md-4">
        <h4 class="slideshow-caption mt-3 mb-0">
          Our people doing what they love
        </h4>
      </div>
      <div class="col-md-8 slideshow flex-column align-center m-0">
        <div class="active-slideshow-image flex align-center justify-center">
          <div class="slideshow-buttons">
            <span class="icon button left">
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
            <span class="icon button right">
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
          <img
            src="@/assets/images/production/mp-img-1.jpg"
            alt="slideshow image"
          />
        </div>
        <a href="#sgi-1" id="sgich"></a>
        <div class="slideshow-gallery">
          <img
            src="@/assets/images/production/mp-img-1.jpg"
            alt="slideshow gallery image"
            id="sgi-1"
            class="active"
          />
          <img
            src="@/assets/images/production/mp-img-2.jpg"
            alt="slideshow gallery image"
            id="sgi-2"
          />
          <img
            src="@/assets/images/production/mp-img-3.jpg"
            alt="slideshow gallery image"
            id="sgi-3"
          />
          <img
            src="@/assets/images/production/mp-img-4.jpg"
            alt="slideshow gallery image"
            id="sgi-4"
          />
          <img
            src="@/assets/images/production/mp-img-5.jpg"
            alt="slideshow gallery image"
            id="sgi-5"
          />
          <img
            src="@/assets/images/production/mp-img-6.jpg"
            alt="slideshow gallery image"
            id="sgi-6"
          />
          <img
            src="@/assets/images/production/mp-img-7.jpg"
            alt="slideshow gallery image"
            id="sgi-7"
          />
          <img
            src="@/assets/images/production/mp-img-8.jpg"
            alt="slideshow gallery image"
            id="sgi-8"
          />
          <img
            src="@/assets/images/production/mp-img-9.jpg"
            alt="slideshow gallery image"
            id="sgi-9"
          />
          <img
            src="@/assets/images/production/mp-img-12.jpg"
            alt="slideshow gallery image"
            id="sgi-9"
          />
          <img
            src="@/assets/images/production/mp-img-13.jpg"
            alt="slideshow gallery image"
            id="sgi-9"
          />
          <img
            src="@/assets/images/production/mp-img-14.jpg"
            alt="slideshow gallery image"
            id="sgi-9"
          />
          <img
            src="@/assets/images/production/mp-img-15.jpg"
            alt="slideshow gallery image"
            id="sgi-9"
          />
        </div>
      </div>
    </div>
  </section>
</template>


<script>
/* eslint-disable */
// require("@/assets/js/main.js");
export default {
  mounted() {
    const slideshow = document.querySelector(".slideshow");
    const [clickHandler, gallery] = [
      slideshow.querySelector("#sgich"),
      slideshow.lastElementChild,
    ];
    [...slideshow.querySelector(".slideshow-buttons").children].forEach(
      (btn) => {
        btn.addEventListener("click", ({ target }) => {
          const direction = target.className.match(/right|left/gi).pop();
          displayImage(direction);
        });
      }
    );

    gallery.addEventListener("click", function (event) {
      const { target } = event;
      // scroll to selected image and set active
      if (target.localName === "img") {
        // console.log(target.offsetLeft - gallery.offsetLeft)
        // const scrollX = target.offsetLeft - gallery.offsetLeft
        // gallery.scrollIntoView(target)
        displayImage(target);
        // clickHandler.href = `#${target.id}`
        // clickHandler.click()
      }
    });

    function displayImage(direction, target = undefined) {
      const active = gallery.querySelector(".active");
      if (!target) {
        target =
          direction === "left"
            ? active.previousElementSibling
            : active.nextElementSibling;
      }
      // set image as active
      if (target) {
        // animate the main image out,
        const mainImage = slideshow.querySelector(
          ".active-slideshow-image img"
        );
        mainImage.classList.add("is-changing");
        // change the image's src,
        mainImage.ontransitionend = onwebkittransitionend = (event) => {
          // console.log(mainImage.src, target.src)
          mainImage.src = target.src;
          // then animate the image back in
          mainImage.classList.remove("is-changing");
        };
        active.classList.remove("active");
        target.scrollIntoViewIfNeeded(true);
        target.classList.add("active");
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.slideshow-gallery {
  overflow-x: scroll !important;
  overflow-y: hidden !important;
  align-items: center;
  // margin-left: auto;
  // margin-right: auto;
  max-width: 500px !important;

  // img {
  //   display: inline-block !important;
  // }
}
</style>