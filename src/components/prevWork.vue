<template>
  <div class="container">
    <div class="tile is-ancestor" id="workDiv">
      <div class="tile is-parent is-4" v-for="site in sites" v-bind:key="site.id">
        <a v-bind:href="site.link" target="_blank">
          <article class="tile is-child box workBox" :style="{background: 'url('+site.image+')'}">
        </a>
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
