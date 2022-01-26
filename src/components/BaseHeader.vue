<template>
  <div>
    <!-- <header> -->
    <div class="head flex-reverse justify-between align-center">
      <span class="icon hamburger secondary">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 16">
          <g transform="translate(-4 -6)">
            <path
              class="a"
              d="M4,7A1,1,0,0,1,5,6H24a1,1,0,0,1,0,2H5A1,1,0,0,1,4,7Z"
            />
            <path
              class="a"
              d="M4,14a1,1,0,0,1,1-1H16a1,1,0,0,1,0,2H5A1,1,0,0,1,4,14Z"
            />
            <path class="a" d="M5,20a1,1,0,1,0,0,2H22a1,1,0,1,0,0-2Z" />
          </g>
        </svg>
      </span>
      <div class="sub-head flex-reverse justify-between align-center">
        <div class="social-media">
          <a href="" class="icon primary"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25.999 25.999"
            >
              <path
                d="M26,4.333A4.484,4.484,0,0,0,21.666,0H4.333A4.484,4.484,0,0,0,0,4.333V21.666A4.484,4.484,0,0,0,4.333,26H13V16.177H9.822V11.844H13V10.169c0-2.918,2.2-5.547,4.882-5.547h3.5V8.955h-3.5a1.065,1.065,0,0,0-.838,1.156v1.733h4.333v4.333H17.044V26h4.622A4.484,4.484,0,0,0,26,21.666Z"
              /></svg
          ></a>
          <a href="" class="icon primary"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25.999 25.999"
            >
              <path
                d="M24.394,4.831H8.444A5.03,5.03,0,0,0,3.419,9.855V25.806A5.03,5.03,0,0,0,8.444,30.83H24.395a5.029,5.029,0,0,0,5.024-5.024V9.855A5.03,5.03,0,0,0,24.394,4.831Zm1.441,3,.575,0v4.407l-4.392.014L22,7.84ZM12.708,15.162a4.568,4.568,0,1,1-.866,2.668A4.575,4.575,0,0,1,12.708,15.162ZM26.885,25.806A2.493,2.493,0,0,1,24.394,28.3H8.444a2.493,2.493,0,0,1-2.492-2.491V15.162H9.833a7.11,7.11,0,1,0,13.17,0h3.882Z"
                transform="translate(-3.419 -4.831)"
              /></svg
          ></a>
          <a href="" class="icon primary"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25.999 25.999"
            >
              <path
                class="a"
                d="M121.539,117.719v-.04l-.026.04Zm10.033-11.727H109.555a1.886,1.886,0,0,0-1.909,1.863v22.274a1.886,1.886,0,0,0,1.909,1.863h22.017a1.887,1.887,0,0,0,1.909-1.863V107.855A1.887,1.887,0,0,0,131.572,105.992Zm-16.1,21.764h-3.9v-11.74h3.9Zm-1.951-13.342H113.5a2.229,2.229,0,1,1,.025,0Zm16.021,13.342h-3.9v-6.281c0-1.578-.565-2.654-1.977-2.654a2.136,2.136,0,0,0-2,1.427,2.672,2.672,0,0,0-.129.952v6.556h-3.9s.051-10.638,0-11.74h3.9v1.663a3.873,3.873,0,0,1,3.517-1.939c2.567,0,4.492,1.678,4.492,5.284v6.731Z"
                transform="translate(-107.646 -105.992)"
              /></svg
          ></a>
          <a href="" class="icon primary"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 31.951 25.999"
            >
              <path
                d="M52.051,67.081a13.252,13.252,0,0,1-3.764,1.036,6.578,6.578,0,0,0,2.884-3.629,13.025,13.025,0,0,1-4.164,1.591,6.553,6.553,0,0,0-11.341,4.482,6.418,6.418,0,0,0,.169,1.5A18.577,18.577,0,0,1,22.321,65.2a6.574,6.574,0,0,0,2.031,8.761,6.4,6.4,0,0,1-2.972-.819v.081a6.561,6.561,0,0,0,5.261,6.432,6.6,6.6,0,0,1-1.727.23,6.184,6.184,0,0,1-1.232-.122,6.566,6.566,0,0,0,6.127,4.557,13.143,13.143,0,0,1-8.145,2.81,13.287,13.287,0,0,1-1.564-.095A18.362,18.362,0,0,0,30.141,90C42.206,90,48.8,80,48.8,71.326c0-.284-.007-.569-.02-.846A13.455,13.455,0,0,0,52.051,67.081Z"
                transform="translate(-20.1 -64)"
              /></svg
          ></a>
        </div>
        <a href="#/" class="flex align-center">
          <picture>
            <source type="image/webp" srcset="../assets/logo.webp" />
            <source type="image/png" srcset="../assets/logo.png" />
            <img src="../assets/logo.png" alt="logo" />
          </picture>
          <span class="site-name">ALFIE DESIGNS</span>
        </a>
      </div>
    </div>
    <nav class="navigation collapsed py-3">
      <ul class="mb-0">
        <li>
          <a href="#/" :class="this.$route.path == '/' ? 'active' : ''">Home</a>
        </li>
        <li>
          <a
            href="#/about"
            :class="this.$route.path == '/about' ? 'active' : ''"
            >About Us</a
          >
        </li>
        <li>
          <a
            href="#/products"
            :class="this.$route.path == '/products' ? 'active' : ''"
            >Products</a
          >
        </li>
        <li>
          <a href="#/mass" :class="this.$route.path == '/mass' ? 'active' : ''"
            >Mass Production</a
          >
        </li>
        <li>
          <a
            href="#/social"
            :class="this.$route.path == '/social' ? 'active' : ''"
            >Social Responsibility</a
          >
        </li>
        <li>
          <a
            href="#/contact"
            :class="this.$route.path == '/contact' ? 'active' : ''"
            >Contact</a
          >
        </li>
      </ul>
    </nav>
    <!-- </header> -->
  </div>
</template>


<script>
/* eslint-disable */
export default {
  mounted() {
    // responsive navigation handler
    const navigation = document.querySelector(".navigation");

    document.querySelector(".icon.hamburger").addEventListener("click", () => {
      navigation.classList.replace("collapsed", "expanded");
    });

    document.addEventListener("click", (event) => {
      if (!event.target.classList.contains("hamburger")) {
        navigation.classList.replace("expanded", "collapsed");
      }
    });

    // FORMS AND SUBMIT HANDLERS
    // Sign up form
    document.querySelector(".sign-up form").onsubmit = (event) => {
      event.preventDefault();
    };
  },
};
</script>