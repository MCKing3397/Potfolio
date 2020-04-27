<template>
  <div class="container">
    <div class="tile is-ancestor" id="usedDiv">
      <div class="tile is-parent is-12">
        <div class="tile is-parent is-4" v-for="site in sites" v-bind:key="site.id">
          <a v-bind:href="site.link" target="_blank">
            <article class="tile is-child box">
              <figure class="image">
                <img v-bind:src="site.image">
              </figure>
              <p class="content has-text-centered"><span class="title">{{ site.title }}</span></p>
            </article>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'prevWork',
  props: {
    sites: Array
  }
}
</script>
