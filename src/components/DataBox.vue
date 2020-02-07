<template v-if="msg">
  <div class="databox tile is-ancestor">
    <div class="tile is-parent columns is-centered"> 
      <article class="tile is-child is-4 box is-radiusless">
        <p class="title has-text-white">{{ title }}</p>
      </article>

      <article class="tile is-child is-4 box is-radiusless">
        <p class="content">{{ msg }}</p>
      </article>
    </div>
  </div>
</template>

<template v-else>
  <div class="databox tile is-ancestor">
    <div class="tile is-parent columns is-centered"> 
      <article class="tile is-child is-4 box is-radiusless">
        <p class="title has-text-white">{{ title }}</p>
      </article>

      <article class="tile is-child is-4 box is-radiusless">
        <p class="content"><ul><li v-for="item in skills">{{ item }}</li></ul></p>
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
