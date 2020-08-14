<template>
  <div class="page_top is-relative">
    <section class="hero is-fullheight" id="top_hero">
      <!-- Hero head: will stick at the top -->

      <div class="hero-head">
        <header class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <!--a class="navbar-item">
                <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
              </a-->
              <span class="navbar-burger burger" data-target="navbarLinks">
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarLinks" class="navbar-menu">
              <div class="navbar-end">
                <a class="navbar-item" href="#skills" v-smooth-scroll >
                  Skills
                </a>
                <a class="navbar-item" href="#uses" v-smooth-scroll >
                  Uses
                </a>
                <a class="navbar-item" href="#work" v-smooth-scroll >
                  Previous Work
                </a>
                <a class="navbar-item" href="#projects" v-smooth-scroll >
                  Projects
                </a>
                <a class="navbar-item" href="#contact" v-smooth-scroll >
                  Contact Me
                </a>
                <span class="navbar-item">
                  <a class="button" target="_blank" href="https://www.github.com/mcking3397">
                    <font-awesome-icon :icon="['fab', 'github']" class="icon"/>
                    <span>My Github</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </header>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container">
          <div class="columns is-desktop">
              <div class="column align-middle is-flex">
                <!--figure class="image">
                  <img id="header_image" src="https://bulma.io/images/placeholders/480x600.png">
                </figure-->
                <div id="header_image"></div>
              </div>
              <div class="column">
                <div id="header_about">
                  <h1 class="is-size-2 has-text-centered has-text-left-desktop">So you want to know some about me?</h1>
                  <p>My name is <span id="header_name" class="has-text-weight-semibold is-size-4 is-italic">Michael King</span>.</p>
                  <p>I create and design responsive websites, from the UX/design phase to the front-end, with a few back-end touches.</p>

                  <p>I am an aspiring front-end developer and UX designer. I'm a recent graduate of Mississippi State University, with a degree in Business Information Systems. Formerly a student web developer for the College of Forest Resources at Mississippi State, you can currently find me creating websites for <a href="https://www.liquid-creative.com" target="_blank" class="has-text-light is-italic has-text-weight-medium">Liquid Creative,</a> a marketing agency in Jackson, MS.</p>

                  <p>Although I have experience in back-end as well as the front-end, my goal moving forward is to follow my passion as a front-end developer.</p>
                </div>
              </div>
          </div>
        </div>
      </div>

      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot">
        <a href="#skills" v-smooth-scroll >
          <div id="skills_scroll">
            <!--p class="has-text-white">View my skills</p-->
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="42.099" viewBox="0 0 70 42.099">
              <path id="arrow" d="M67.833,8.6,41,34.77,14.167,8.6,6,16.565,41,50.7,76,16.565Z" transform="translate(-6 -8.6)" fill="#fff" fill-rule="evenodd"/>
            </svg>
          </div>
        </a>
        <!--nav class="tabs">
          <div class="container">
            <ul>
              <li class="is-active"><a>Overview</a></li>
              <li><a>Modifiers</a></li>
              <li><a>Grid</a></li>
              <li><a>Elements</a></li>
              <li><a>Components</a></li>
              <li><a>Layout</a></li>
            </ul>
          </div>
        </nav-->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>
