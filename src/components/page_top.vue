<template>
  <div class="page_top is-relative">
    <section class="hero is-fullheight" id="top_hero">
      <!-- Hero head: will stick at the top -->

      <div class="hero-head">
        <!--div class="columns">
            <div class="column">
              <h1 class="title has-text-white has-text-centered is-1">
                Michael King
              </h1>
              <h2 class="title has-text-white has-text-centered is-2">
                Web Developer
              </h2>
            </div>
            <div class="column">
            </div>
        </div-->
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container">
          <div class="columns">
              <div class="column">
                <figure class="image">
                  <img class="header_image" src="https://bulma.io/images/placeholders/480x600.png">
                </figure>
              </div>
              <div class="column">
                <div id="header_about">
                  <h1 class="is-size-1">Want to know some about me?</h2>
                  <p>My name is <span id="header_name" class="has-text-weight-semibold">Michael King</span>.</p>
                  <p>I create and design responsive websites, from the UX/design phase to the front-end, with a few back-end touches.</p>

                  <p>I am an aspiring front-end developer and UX designer. I am currently studying Business Information Systems at Mississippi State University and can be found using my skills to create websites for Mississippi State's College of Forest Resources as a student web developer.</p>

                  <p>Although I have experience in back-end as well as the front-end, my goal moving forward is to follow my passion as a front-end developer.</p>
                </div>
              </div>
          </div>
        </div>
      </div>

      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot">
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
