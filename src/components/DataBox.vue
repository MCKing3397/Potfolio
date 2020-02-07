<template>
  <div class="databox tile is-ancestor">
    <div class="tile is-parent columns is-centered"> 
      <article class="tile is-child is-4 box is-radiusless">
        <p class="title has-text-white">{{ title }}</p>
      </article>

      <article class="tile is-child is-4 box is-radiusless">
        <p class="content" v-if="skills"><ul><li v-for="item in skills">{{ item }}</li></ul></p>
        <p class="content" v-else>{{ msg }}</p>
      </article>
    </div>
  </div>
</template>
<script>

export default {
  name: 'DataBox',
  props: {
    msg: String,
    title: String,
    skills: String
  }
}
</script>
